#!/usr/bin/env node
'use strict';

/**
 * import-blogspot.cjs — one-shot migration of all 229 posts from the Blogger
 * blog at blog.programinglive.com into this site.
 *
 * Produces:
 *   - content/posts/<slug>.md   typed frontmatter + GFM markdown body
 *   - public/img/posts/<slug>/  self-hosted post images (no hotlinking)
 *   - public/_redirects         Netlify 301 rules: old blogspot permalinks -> /id/blog/<slug>
 *
 * Pure functions (htmlToMarkdown, slugify, buildFrontmatter, parseFrontmatter,
 * categorize, buildRedirects, DUPLICATE_RULES) are exported so the conversion
 * contract is unit-testable without network access.
 */

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const FEED_BASE = 'https://blog.programinglive.com/feeds/posts/default?alt=json';
const PAGE_SIZE = 50;
const MAX_PAGES = 12;
const POSTS_DIR = 'content/posts';
const IMAGE_DIR = 'public/img/posts';
// Netlify publishes public/ at the site root, so images are served as /img/posts/...
const IMAGE_URL_ROOT = '/img/posts';
const REDIRECTS_FILE = 'public/_redirects';

// ---------------------------------------------------------------------------
// slugify
// ---------------------------------------------------------------------------

/**
 * Lowercase, ASCII-fold, kebab-case a title. Dots are dropped ("node.js" ->
 * "nodejs") so near-identical titles collide deterministically, and the
 * first collision gets -2, the next -3, chronologically. The chosen slug is
 * recorded in `used` so later calls keep suffixing.
 */
function slugify(title, used = new Set()) {
  const base =
    String(title)
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\./g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'post';
  let candidate = base;
  let suffix = 2;
  while (used.has(candidate)) {
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }
  used.add(candidate);
  return candidate;
}

// ---------------------------------------------------------------------------
// html -> markdown helpers
// ---------------------------------------------------------------------------

const ENTITY_MAP = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  hellip: '…',
  ndash: '–',
  mdash: '—',
  rsquo: "'",
  lsquo: "'",
};

function safeFromCode(code) {
  try {
    return String.fromCodePoint(code);
  } catch {
    return '';
  }
}

function decodeEntities(input) {
  return String(input)
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => safeFromCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => safeFromCode(parseInt(dec, 10)))
    .replace(/&([a-z]+);/gi, (match, name) => ENTITY_MAP[name.toLowerCase()] ?? match);
}

function attr(tagHtml, name) {
  const m = new RegExp(`${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i').exec(tagHtml);
  if (!m) return '';
  return m[2] ?? m[3] ?? m[4] ?? '';
}

/** Convert inline html to markdown text (images, links, emphasis, code). */
function inlineMd(html, imageMap = {}) {
  let out = String(html);
  out = out.replace(/<script[\s\S]*?<\/script>/gi, '');
  out = out.replace(/<style[\s\S]*?<\/style>/gi, '');
  out = out.replace(/<img[^>]*>/gi, (match) => {
    const src = attr(match, 'src');
    const alt = attr(match, 'alt');
    const target = imageMap[src] ?? src;
    return target ? `![${alt}](${target})` : '';
  });
  out = out.replace(/<a[^>]*>[\s\S]*?<\/a>/gi, (match) => {
    const openTag = match.slice(0, match.indexOf('>'));
    const inner = inlineMd(match.slice(openTag.length + 1, match.length - 4), imageMap);
    const href = attr(openTag, 'href');
    if (!href || href.startsWith('#') || href.toLowerCase().startsWith('javascript')) return inner;
    // Blogger wraps cover images in a link to the full-size version: keep only the image.
    if (inner.startsWith('![')) return inner;
    return `[${inner}](${href})`;
  });
  out = out.replace(/<\/?(strong|b)(?:\s[^>]*)?>/gi, '**');
  out = out.replace(/<\/?(em|i)(?:\s[^>]*)?>/gi, '*');
  out = out.replace(
    /<code(?:\s[^>]*)?>([\s\S]*?)<\/code>/gi,
    (_, code) => `\`${decodeEntities(code).replace(/`/g, "'")}\``
  );
  out = out.replace(/<br\s*\/?>/gi, ' ');
  out = out.replace(/<[^>]+>/g, '');
  out = decodeEntities(out);
  out = out.replace(/\s+/g, ' ');
  return out.trim();
}

function escapePipe(text) {
  return text.replace(/\|/g, '\\|');
}

/** Convert a <table> region to a GFM table with escaped pipes. */
function tableMd(tableHtml, imageMap = {}) {
  const rows = [];
  const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let m;
  while ((m = rowRe.exec(tableHtml))) {
    const cells = [...m[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((cell) =>
      escapePipe(inlineMd(cell[1], imageMap))
    );
    if (cells.length) rows.push(cells);
  }
  if (!rows.length) return '';
  const width = Math.max(...rows.map((row) => row.length));
  const pad = (row) => {
    const cells = [...row];
    while (cells.length < width) cells.push('');
    return cells;
  };
  const lines = [`| ${pad(rows[0]).join(' | ')} |`, `|${Array(width).fill('---').join('|')}|`];
  for (const row of rows.slice(1)) lines.push(`| ${pad(row).join(' | ')} |`);
  return lines.join('\n');
}

/** Convert a <ul>/<ol> region (incl. one nested level) to markdown bullets. */
function listMd(listHtml, imageMap = {}) {
  const events = [];
  const re = /<li(?:\s[^>]*)?>|<\/li>|<ul[\s>]|<\/ul>|<ol[\s>]|<\/ol>/g;
  let m;
  while ((m = re.exec(listHtml))) {
    const t = m[0];
    if (t.startsWith('<li')) events.push({ type: 'li', pos: m.index + t.length });
    else if (t === '</li>') events.push({ type: '/li', pos: m.index });
    else if (t.startsWith('<ul') || t.startsWith('<ol')) events.push({ type: 'list', pos: m.index });
    else events.push({ type: '/list', pos: m.index });
  }
  const lines = [];
  const openItems = [];
  let depth = 0;
  for (const event of events) {
    if (event.type === 'li') openItems.push({ start: event.pos, level: Math.max(depth - 1, 0) });
    else if (event.type === '/li') {
      const item = openItems.pop();
      if (!item) continue;
      const text = inlineMd(listHtml.slice(item.start, event.pos), imageMap);
      if (text) lines.push(`${'  '.repeat(item.level)}- ${text}`);
    } else if (event.type === 'list') depth += 1;
    else depth -= 1;
  }
  return lines.join('\n');
}

/** Convert a <pre><code class="language-x"> region to a fenced code block.
 *  Blogger runs code through highlight.js, so the code is wrapped in
 *  <span class="hljs-*"> token spans that must be stripped. */
function preMd(preHtml) {
  const m = /<pre[^>]*>([\s\S]*?)<\/pre>/i.exec(preHtml);
  if (!m) return '';
  let code = m[1];
  const lang = (code.match(/class=["']language-([\w#+-]+)/i) || [])[1] || '';
  code = code.replace(/<\/?code[^>]*>/gi, '');
  code = code.replace(/<br\s*\/?>/gi, '\n');
  code = code.replace(/<[^>]+>/g, ''); // strip hljs token spans and any leftover tags
  code = decodeEntities(code);
  code = code.replace(/^\n+/, '').replace(/\s+$/g, '');
  if (!code.trim()) return '';
  const fence = '`'.repeat(3);
  return `${fence}${lang}\n${code}\n${fence}`;
}

function imgMd(imgTag, imageMap = {}) {
  const src = attr(imgTag, 'src');
  const alt = attr(imgTag, 'alt');
  const target = imageMap[src] ?? src;
  return target ? `![${alt}](${target})` : '';
}

/** Blogger "separator" div: an optional anchor-wrapped cover image. */
function separatorMd(divHtml, imageMap = {}) {
  const imgs = [...divHtml.matchAll(/<img[^>]*>/gi)];
  if (!imgs.length) return '';
  return imgs.map((match) => imgMd(match[0], imageMap)).join('\n');
}

const TOC_HEADING_RE = /^(table of contents|daftar isi|toc|isi)[:.]*$/i;

/**
 * Extract top-level balanced regions of `tag` (depth-zero open/close pairs).
 * Returns { start, end, text } spans in document order.
 */
function extractRegions(html, tag) {
  const re = new RegExp(`<${tag}(?=[\\s>])|</${tag}>`, 'gi');
  const events = [];
  let m;
  while ((m = re.exec(html))) {
    events.push({ open: !m[0].startsWith('</'), pos: m.index, len: m[0].length });
  }
  const stack = [];
  const regions = [];
  for (const event of events) {
    if (event.open) stack.push(event.pos);
    else if (stack.length) {
      const start = stack.pop();
      if (stack.length === 0) regions.push({ start, end: event.pos + event.len });
    }
  }
  return regions.map((region) => ({ ...region, text: html.slice(region.start, region.end) }));
}

const BLOCK_TAGS = ['table', 'pre', 'ol', 'ul', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

/** Collect top-level blocks; overlapping (nested) spans are dropped so the
 *  outer container is processed recursively instead. */
function collectBlocks(html, imageMap = {}) {
  const blocks = [];
  for (const tag of BLOCK_TAGS) {
    for (const region of extractRegions(html, tag)) blocks.push({ ...region, tag });
  }
  for (const region of extractRegions(html, 'div')) {
    const head = region.text.slice(0, region.text.indexOf('>'));
    blocks.push({ ...region, tag: /separator/i.test(head) ? 'separator' : 'div' });
  }
  for (const m of html.matchAll(/<img[^>]*>/gi)) {
    blocks.push({ start: m.index, end: m.index + m[0].length, text: m[0], tag: 'img' });
  }
  blocks.sort((a, b) => a.start - b.start || b.end - a.end);
  const kept = [];
  let lastEnd = -1;
  for (const block of blocks) {
    if (block.start < lastEnd) continue;
    kept.push(block);
    lastEnd = block.end;
  }
  return kept;
}

function renderBlocks(html, imageMap = {}) {
  const blocks = collectBlocks(html, imageMap);
  const out = [];
  let cursor = 0;
  let skipNextList = false;
  for (const block of blocks) {
    out.push(inlineMd(html.slice(cursor, block.start), imageMap)); // leftover gap
    let wasSkip = skipNextList;
    skipNextList = false;
    let rendered;
    if (block.tag === 'table') rendered = tableMd(block.text, imageMap);
    else if (block.tag === 'pre') rendered = preMd(block.text);
    else if (block.tag === 'ol' || block.tag === 'ul') {
      rendered = wasSkip ? '' : listMd(block.text, imageMap);
    } else if (block.tag === 'h1') rendered = ''; // Blogger repeats the title in <h1>
    else if (/^h[2-6]$/.test(block.tag)) {
      const hm = new RegExp(`<h([1-6])[^>]*>([\\s\\S]*?)<\\/h\\1>`, 'i').exec(block.text);
      const text = hm ? inlineMd(hm[2], imageMap) : '';
      if (TOC_HEADING_RE.test(text)) {
        rendered = '';
        skipNextList = true;
      } else {
        rendered = text ? `${'#'.repeat(Number(hm[1]))} ${text}` : '';
      }
    } else if (block.tag === 'separator') rendered = separatorMd(block.text, imageMap);
    else if (block.tag === 'img') rendered = imgMd(block.text, imageMap);
    else if (block.tag === 'p') {
      const text = inlineMd(block.text.replace(/<\/?p[^>]*>/gi, ''), imageMap);
      // Some posts render the table of contents as a bold paragraph, not a heading.
      const plain = text.replace(/\*+/g, '').trim();
      const isToc = Boolean(text) && TOC_HEADING_RE.test(plain);
      rendered = isToc ? '' : text;
      if (isToc) skipNextList = true;
    } else {
      // Generic div container: recurse when it holds blocks, otherwise inline.
      const headEnd = block.text.indexOf('>') + 1;
      const inner = block.text.slice(headEnd, block.text.lastIndexOf('</div'));
      const innerBlocks = collectBlocks(inner, imageMap);
      rendered = innerBlocks.length ? renderBlocks(inner, imageMap) : inlineMd(inner, imageMap);
    }
    out.push(rendered);
    cursor = block.end;
  }
  out.push(inlineMd(html.slice(cursor), imageMap));
  return out.map((chunk) => chunk.trim()).filter(Boolean).join('\n\n');
}

/**
 * Convert a Blogger post HTML body to clean GFM markdown.
 * - strips the repeated <h1> title
 * - strips "Daftar Isi" / "Table of Contents" headings plus their anchor lists
 * - maps remote image src through `options.imageMap` to self-hosted paths
 * - collapses #anchor links to their text, keeps external links as [text](url)
 */
function htmlToMarkdown(html, options = {}) {
  const { imageMap = {} } = options;
  return renderBlocks(String(html || ''), imageMap);
}

// ---------------------------------------------------------------------------
// frontmatter
// ---------------------------------------------------------------------------

const STRING_FIELDS = ['slug', 'title', 'date', 'published', 'summary', 'sourceUrl', 'image', 'supersededBy'];

function buildFrontmatter(post) {
  const lines = ['---'];
  for (const key of STRING_FIELDS) {
    const value = post[key];
    if (value !== undefined && value !== null && String(value) !== '') {
      lines.push(`${key}: ${JSON.stringify(String(value))}`);
    }
  }
  if (Array.isArray(post.categories) && post.categories.length) {
    lines.push('categories:');
    for (const category of post.categories) lines.push(`  - ${JSON.stringify(String(category))}`);
  }
  if (post.wordCount !== undefined && post.wordCount !== null) {
    lines.push(`wordCount: ${Number(post.wordCount)}`);
  }
  if (Array.isArray(post.related) && post.related.length) {
    lines.push('related:');
    for (const slug of post.related) lines.push(`  - ${JSON.stringify(String(slug))}`);
  }
  lines.push('---');
  return `${lines.join('\n')}\n`;
}

function parseScalar(value) {
  const s = String(value).trim();
  if (s.length >= 2 && s.startsWith('"') && s.endsWith('"')) {
    try {
      return JSON.parse(s);
    } catch {
      return s.slice(1, -1);
    }
  }
  if (/^-?\d+$/.test(s)) return Number(s);
  if (s === 'true') return true;
  if (s === 'false') return false;
  return s;
}

/** Parse the deterministic YAML frontmatter emitted by buildFrontmatter. */
function parseFrontmatter(markdown) {
  const text = String(markdown);
  const m = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n)?/.exec(text);
  if (!m) return { frontmatter: {}, body: text };
  const lines = m[1].split(/\r?\n/);
  const frontmatter = {};
  let i = 0;
  while (i < lines.length) {
    const keyMatch = /^([A-Za-z_][\w]*):\s?(.*)$/.exec(lines[i]);
    if (!keyMatch) {
      i += 1;
      continue;
    }
    const key = keyMatch[1];
    const rest = (keyMatch[2] || '').trim();
    if (rest === '') {
      const list = [];
      let j = i + 1;
      while (j < lines.length && /^\s+-\s/.test(lines[j])) {
        list.push(parseScalar(lines[j].replace(/^\s+-\s/, '')));
        j += 1;
      }
      frontmatter[key] = list;
      i = j;
      continue;
    }
    frontmatter[key] = parseScalar(rest);
    i += 1;
  }
  return { frontmatter, body: text.slice(m[0].length).replace(/^\s+/, '') };
}

// ---------------------------------------------------------------------------
// categorize — Blogger labels -> 7 library clusters
// ---------------------------------------------------------------------------

const CATEGORY_RULES = [
  {
    cluster: 'Testing & DevOps',
    keywords: ['cicd', 'ci/cd', 'tdd', 'test', 'testing', 'git', 'gitlab', 'github', 'version control', 'devops', 'docker', 'kubernetes', 'debug'],
  },
  {
    cluster: 'Growth',
    keywords: ['pengembangan diri', 'produktivitas', 'motivasi', 'career', 'burnout', 'mental health', 'mindset', 'resolusi', 'manajemen waktu', 'efisiensi', 'fokus', 'prokrastinasi', 'perfeksionisme', 'stoikisme', 'filsafat', 'belajar', 'otak', 'memory', 'ilmu', 'pengetahuan', 'guru', 'pedagogi', 'passion', 'bahasa', 'sukses', 'tujuan', 'memento mori', 'analogi'],
  },
  {
    cluster: 'Writing & Communication',
    keywords: ['menulis', 'komunikasi', 'public speaking', 'presentasi', 'storytelling', 'copywriting', 'konten', 'marketing', 'seo'],
  },
  {
    cluster: 'Algorithms',
    keywords: ['algoritma', 'dsa', 'data structure', 'pencarian', 'kompleksitas'],
  },
  {
    cluster: 'Frontend',
    keywords: ['reactjs', 'react', 'javascript', 'frontend', 'html', 'css', 'vue', 'vuejs', 'inertia', 'inertiajs', 'nextjs', 'tailwind', 'tailwindcss', 'ui', 'ux', 'typescript', 'jsx', 'single page application'],
  },
  {
    cluster: 'Backend',
    keywords: ['laravel', 'php', 'backend', 'database', 'basis data', 'mysql', 'postgres', 'postgresql', 'redis', 'api', 'rest', 'nodejs', 'node', 'node.js', 'server', 'python', 'flask', 'golang', 'flutter', 'dart', 'mobile', 'android', 'kotlin'],
  },
];

/** Map a label set to one of the 7 library clusters; default Fundamentals.
 *  Node/Laravel-style labels override the generic "javascript" Frontend hit
 *  so runtime/server posts land in Backend. */
const BACKEND_OVERRIDE_LABELS = [
  'nodejs',
  'node',
  'node.js',
  'v8',
  'laravel',
  'php',
  'python',
  'flutter',
  'dart',
  'mobile',
  'backend',
  'database',
  'basis data',
  'mysql',
  'api',
];

function categorize(labels) {
  const norm = (Array.isArray(labels) ? labels : String(labels).split(','))
    .map((label) => String(label || '').trim().toLowerCase())
    .filter(Boolean);
  const tokens = norm.flatMap((label) => label.split(/[\s/]+/).filter(Boolean));
  if (norm.some((label) => BACKEND_OVERRIDE_LABELS.includes(label) || tokens.includes('node.js'))) {
    return 'Backend';
  }
  for (const rule of CATEGORY_RULES) {
    const hit = norm.some((label) =>
      rule.keywords.some((keyword) =>
        keyword.includes(' ') || keyword.includes('/') ? label.includes(keyword) : tokens.includes(keyword)
      )
    );
    if (hit) return rule.cluster;
  }
  return 'Fundamentals';
}

// ---------------------------------------------------------------------------
// duplicate rules — known near-duplicates (supersededBy, hidden) and
// complementary pairs (related, both stay visible)
// ---------------------------------------------------------------------------

const DUPLICATE_RULES = [
  // Near-duplicates: hide the earlier/shorter post, keep the refined one.
  { slug: 'apa-itu-nodejs', supersededBy: 'apa-itu-nodejs-2' }, // "Apa Itu NodeJS?" 2025-04-07 -> "Apa itu Node.js" 2025-04-14
  { slug: 'kenapa-database-penting', supersededBy: 'kenapa-perlu-belajar-database' }, // both 2023-06-17
  // Complementary: same topic, different angle — cross-link, keep both visible.
  { slug: 'kenapa-typescript', related: ['apa-itu-typescript'] },
  { slug: 'apa-itu-typescript', related: ['kenapa-typescript'] },
  { slug: 'mengatasi-burnout', related: ['kenapa-manusia-mengalami-burnout'] },
  { slug: 'kenapa-manusia-mengalami-burnout', related: ['mengatasi-burnout'] },
  { slug: 'kelebihan-redundansi-dalam-database', related: ['redundansi-dalam-database'] },
  { slug: 'redundansi-dalam-database', related: ['kelebihan-redundansi-dalam-database'] },
  { slug: 'resolusi-tahun-baru', related: ['apa-itu-resolusi', 'kenapa-resolusi-itu-penting'] },
  { slug: 'apa-itu-resolusi', related: ['resolusi-tahun-baru', 'kenapa-resolusi-itu-penting'] },
  { slug: 'kenapa-resolusi-itu-penting', related: ['resolusi-tahun-baru', 'apa-itu-resolusi'] },
];

// ---------------------------------------------------------------------------
// curated duplicate merge — applied after import so the pipeline stays
// deterministic and re-runnable: unique content is folded into the canonical
// post, the superseded source file (and its cover image) is removed, and the
// old blogspot permalink 301s straight to the canonical slug.
// ---------------------------------------------------------------------------

const MERGE_OVERRIDES = [
  {
    sourceSlug: 'apa-itu-nodejs',
    sourceUrl: 'https://blog.programinglive.com/2025/04/apa-itu-nodejs.html',
    targetSlug: 'apa-itu-nodejs-2',
    // The 04-07 post is fully covered by the 04-14 post except the IoT use case.
    edits: [
      {
        type: 'insertAfterLine',
        anchor: '- **Aplikasi Streaming:**',
        content:
          '- **Internet of Things (IoT):** Mendukung komunikasi dengan perangkat IoT, dari sensor rumah pintar hingga telemetri industri.',
      },
    ],
  },
  {
    sourceSlug: 'kenapa-database-penting',
    sourceUrl: 'https://blog.programinglive.com/2023/06/database-adalah-penyimpanan-data-yang.html',
    targetSlug: 'kenapa-perlu-belajar-database',
    edits: [
      {
        type: 'replaceLine',
        anchor:
          '## [Pentingnya Database di Dunia Modern](https://blog.programinglive.com/2023/06/database-adalah-penyimpanan-data-yang.html)',
        content: '## Pentingnya Database di Dunia Modern',
      },
      {
        type: 'insertAfterSection',
        anchor: '## Pentingnya Database di Dunia Modern',
        content: [
          '## Fungsi dan Peran Database',
          '',
          'Database menjalankan tiga fungsi inti dalam pengelolaan data:',
          '',
          '- **Penyimpanan Data:** Menyimpan informasi dalam format terstruktur yang memudahkan akses.',
          '- **Manajemen Data:** Memungkinkan pengeditan, penghapusan, dan pembaruan data dengan cepat.',
          '- **Keamanan Data:** Melindungi data sensitif dengan kontrol akses dan enkripsi.',
          '',
          'Peran database di era digital tampak di hampir semua industri: e-commerce menyimpan informasi produk, pelanggan, dan transaksi; media sosial mengelola data pengguna, posting, dan interaksi; layanan kesehatan menyimpan catatan medis; perbankan mengelola rekening, transaksi, dan layanan pelanggan. Contoh konkretnya: aplikasi pengelolaan keuangan mencatat pemasukan dan pengeluaran, sistem reservasi hotel/maskapai/restoran, dan platform streaming menyimpan katalog film, acara TV, dan musik.',
          '',
          'Sebagai contoh sederhana, tabel data siswa di sekolah mencatat nama, nomor induk, dan nilai untuk berbagai mata pelajaran.',
        ].join('\n'),
      },
    ],
  },
];

function applyMergeEdits(body, edits) {
  let out = String(body);
  for (const edit of edits) {
    const lines = out.split('\n');
    const idx = lines.findIndex((line) =>
      edit.type === 'replaceLine'
        ? line.trim() === edit.anchor
        : line.trim().startsWith(edit.anchor)
    );
    if (idx === -1) throw new Error(`Merge anchor not found: ${edit.anchor}`);
    if (edit.type === 'insertAfterLine') {
      lines.splice(idx + 1, 0, ...String(edit.content).split('\n'));
    } else if (edit.type === 'replaceLine') {
      lines.splice(idx, 1, ...String(edit.content).split('\n'));
    } else if (edit.type === 'insertAfterSection') {
      // Insert after the section headed by `anchor`: before the next "## " heading.
      let insertAt = lines.length;
      for (let j = idx + 1; j < lines.length; j += 1) {
        if (lines[j].trim().startsWith('## ')) {
          insertAt = j;
          break;
        }
      }
      lines.splice(insertAt, 0, ...String(edit.content).split('\n'), '');
    }
    out = lines.join('\n');
  }
  return out;
}

// ---------------------------------------------------------------------------
// redirects (Netlify public/_redirects)
// ---------------------------------------------------------------------------

/** One 301 line per post plus the Blogspot fallbacks (homepage, /p pages, /search). */
function buildRedirects(posts) {
  const lines = ['# Blogspot -> programinglive.com blog migration (301)'];
  for (const post of posts) {
    const pathname = new URL(post.sourceUrl).pathname;
    lines.push(`${pathname} /id/blog/${post.slug} 301`);
  }
  lines.push('/ /id/blog 301');
  lines.push('/p/* /id/blog 301');
  lines.push('/search/* /id/blog 301');
  return lines;
}

// ---------------------------------------------------------------------------
// feed fetch + image download + main
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function entryPermalink(entry) {
  const links = (entry.link || []).map((l) => l.href).filter(Boolean);
  for (let i = links.length - 1; i >= 0; i -= 1) {
    if (links[i].includes('.html')) return links[i].split('#')[0];
  }
  return links.length ? links[links.length - 1].split('#')[0] : '';
}

function entryId(entry) {
  return Number(String((entry.id && entry.id.$t) || '').split(':').pop() || 0);
}

/** Fetch all feed entries with pagination (start-index, step 50) and
 *  per-page retries when Blogger flakily returns zero entries. */
async function fetchAllEntries() {
  const seen = new Map();
  let start = 1;
  for (let page = 0; page < MAX_PAGES; page += 1) {
    const url = `${FEED_BASE}&start-index=${start}&max-results=${PAGE_SIZE}`;
    let entries = null;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        entries = Array.isArray(data && data.feed && data.feed.entry) ? data.feed.entry : [];
        if (entries.length) break;
      } catch {
        entries = null;
      }
      if (attempt < 3) await sleep(1500 * attempt);
    }
    if (!entries || !entries.length) break;
    for (const entry of entries) {
      const permalink = entryPermalink(entry);
      if (permalink && !seen.has(permalink)) seen.set(permalink, entry);
    }
    if (entries.length < PAGE_SIZE) break;
    start += PAGE_SIZE;
  }
  return [...seen.values()];
}

function imageExtension(url, contentType) {
  const fromUrl = (url.split('?')[0].match(/\.([a-z0-9]{2,4})$/i) || [])[1];
  if (fromUrl) return `.${fromUrl.toLowerCase()}`;
  const map = { 'image/png': '.png', 'image/jpeg': '.jpg', 'image/webp': '.webp', 'image/gif': '.gif' };
  return map[contentType] || '.png';
}

/** Deterministic local file name for a remote image URL. */
function fileForImage(url, contentType) {
  const clean = url.split('?')[0].split('#')[0];
  const base = (clean.split('/').pop() || 'image').replace(/[^\w.+-]/g, '_').slice(-40);
  const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 10);
  const hasExt = /\.[a-z0-9]{2,4}$/i.test(base);
  return hasExt ? `${hash}_${base}` : `${hash}_${base}${imageExtension(url, contentType)}`;
}

async function ensureImage(url, targetFile) {
  if (fs.existsSync(targetFile)) return;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(targetFile), { recursive: true });
  fs.writeFileSync(targetFile, buffer);
}

/** Summary: first substantive paragraph (table-of-contents paragraphs are
 *  skipped), max ~200 chars, single line. */
function summarize(html) {
  const paragraphs = [
    ...String(html || '').matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)
  ].map((match) => inlineMd(match[1], {}));
  const cleanAll = paragraphs.map((p) => p.replace(/\s+/g, ' ').trim()).filter(Boolean);
  const picked =
    cleanAll.find((p) => p.length >= 40 && !TOC_HEADING_RE.test(p)) || cleanAll[0] || '';
  if (picked.length <= 200) return picked;
  return `${picked.slice(0, 197).replace(/\s+\S*$/, '')}...`;
}

async function main() {
  const root = process.cwd();
  const entries = await fetchAllEntries();
  if (!entries.length) {
    console.error('No feed entries fetched from Blogger JSON feed.');
    process.exitCode = 1;
    return;
  }
  // Chronological ascending so slug collision suffixes are deterministic.
  entries.sort((a, b) => {
    const byDate = String(a.published && a.published.$t || '').localeCompare(
      String(b.published && b.published.$t || '')
    );
    if (byDate !== 0) return byDate;
    return entryId(b) - entryId(a);
  });

  fs.mkdirSync(path.join(root, POSTS_DIR), { recursive: true });
  fs.mkdirSync(path.join(root, 'public'), { recursive: true });
  const usedSlugs = new Set();
  const posts = [];
  let failedImages = 0;

  for (const entry of entries) {
    const title = String((entry.title && entry.title.$t) || '').trim();
    const permalink = entryPermalink(entry);
    const slug = slugify(title, usedSlugs);
    const html = String((entry.content && entry.content.$t) || '');
    const labels = (entry.category || []).map((c) => c.term).filter(Boolean);
    const published = String((entry.published && entry.published.$t) || (entry.updated && entry.updated.$t) || '').trim();

    const remote = [
      ...new Set(
        [...html.matchAll(/<img[^>]*>/gi)]
          .map((m) => attr(m[0], 'src'))
          .filter((src) => /^https?:/i.test(src))
      ),
    ];
    const imageMap = {};
    const imgDir = path.join(root, IMAGE_DIR, slug);
    for (const url of remote) {
      const name = fileForImage(url);
      const target = path.join(imgDir, name);
      try {
        await ensureImage(url, target);
        imageMap[url] = `${IMAGE_URL_ROOT}/${slug}/${name}`;
      } catch {
        failedImages += 1; // leave the remote URL in place
      }
    }

    const body = htmlToMarkdown(html, { title, imageMap });
    const post = {
      slug,
      title,
      date: published.slice(0, 10),
      published,
      categories: [categorize(labels)],
      summary: summarize(html),
      sourceUrl: permalink,
      wordCount: body ? body.split(/\s+/).filter(Boolean).length : 0,
    };
    const rule = DUPLICATE_RULES.find((r) => r.slug === slug);
    if (rule && rule.supersededBy) post.supersededBy = rule.supersededBy;
    if (rule && Array.isArray(rule.related) && rule.related.length) post.related = rule.related;
    if (remote.length && imageMap[remote[0]]) post.image = imageMap[remote[0]];

    posts.push(post);
    fs.writeFileSync(path.join(root, POSTS_DIR, `${slug}.md`), `${buildFrontmatter(post)}\n${body}\n`);
  }

  // Curated duplicate merge: fold the unique content of the superseded source
  // into its canonical post, delete the source file and its image directory,
  // and make the old blogspot permalink 301 straight to the canonical slug.
  const mergedSourceSlugs = new Set(MERGE_OVERRIDES.map((merge) => merge.sourceSlug));
  for (const merge of MERGE_OVERRIDES) {
    const targetFile = path.join(root, POSTS_DIR, `${merge.targetSlug}.md`);
    const target = parseFrontmatter(fs.readFileSync(targetFile, 'utf8'));
    const edited = applyMergeEdits(target.body, merge.edits);
    const frontmatter = {
      ...target.frontmatter,
      wordCount: edited.split(/\s+/).filter(Boolean).length,
    };
    fs.writeFileSync(targetFile, `${buildFrontmatter(frontmatter)}\n${edited}\n`);
    fs.rmSync(path.join(root, POSTS_DIR, `${merge.sourceSlug}.md`), { force: true });
    fs.rmSync(path.join(root, IMAGE_DIR, merge.sourceSlug), { recursive: true, force: true });
  }

  const mergedRedirects = MERGE_OVERRIDES.map(
    (merge) => `${new URL(merge.sourceUrl).pathname} /id/blog/${merge.targetSlug} 301`
  );
  const redirectLines = [
    ...buildRedirects(
      posts
        .filter((p) => !mergedSourceSlugs.has(p.slug))
        .map((p) => ({ slug: p.slug, sourceUrl: p.sourceUrl }))
    ),
    ...mergedRedirects,
  ];
  fs.writeFileSync(path.join(root, REDIRECTS_FILE), `${redirectLines.join('\n')}\n`);

  console.log(
    JSON.stringify(
      {
        posts: posts.length,
        mergedSources: MERGE_OVERRIDES.map((merge) => ({
          from: merge.sourceSlug,
          into: merge.targetSlug,
        })),
        finalPostFiles: fs
          .readdirSync(path.join(root, POSTS_DIR))
          .filter((name) => name.endsWith('.md')).length,
        failedImages,
        redirectLines: redirectLines.filter((line) => !line.startsWith('#')).length,
        duplicates: DUPLICATE_RULES.map((r) => ({ slug: r.slug, supersededBy: r.supersededBy, related: r.related })),
      },
      null,
      2
    )
  );
}

module.exports = {
  htmlToMarkdown,
  slugify,
  buildFrontmatter,
  parseFrontmatter,
  categorize,
  DUPLICATE_RULES,
  MERGE_OVERRIDES,
  applyMergeEdits,
  buildRedirects,
  main,
};

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

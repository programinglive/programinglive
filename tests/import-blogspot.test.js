import assert from 'node:assert/strict'
import test from 'node:test'

import {
  htmlToMarkdown,
  slugify,
  buildFrontmatter,
  parseFrontmatter,
  categorize,
  DUPLICATE_RULES,
  buildRedirects,
} from '../scripts/import-blogspot.cjs'

test('htmlToMarkdown converts Blogger post HTML to clean markdown', () => {
  const html = [
    '<h1>Kenali Test-Driven Development (TDD)</h1>',
    '<h2>Daftar Isi</h2>',
    '<ol><li><a href="#apa-itu-tdd">Apa Itu TDD?</a></li></ol>',
    '<h2 id="apa-itu-tdd">Apa Itu TDD?</h2>',
    '<p><strong>TDD</strong> adalah pendekatan di mana kamu menulis tes <em>dulu</em>.</p>',
    '<ul><li>Step satu</li><li>Step dua</li></ul>',
    '<pre><code class="language-bash">npm test</code></pre>',
  ].join('\n')

  const md = htmlToMarkdown(html, {
    title: 'Kenali Test-Driven Development (TDD)',
    imageMap: {},
  })

  assert.ok(md.includes('## Apa Itu TDD?'), 'section heading must survive')
  assert.ok(md.includes('**TDD** adalah pendekatan di mana kamu menulis tes *dulu*.'), 'inline styles must survive')
  assert.ok(md.includes('- Step satu'), 'list items must become markdown bullets')
  assert.ok(md.includes('```bash\nnpm test\n```'), 'code blocks must become fenced code')
  assert.ok(!md.includes('Kenali Test-Driven Development (TDD)</h1>') , 'no raw HTML must remain')
  assert.ok(!md.trim().startsWith('# '), 'leading H1 matching the title must be stripped')
  assert.ok(!md.includes('Daftar Isi'), 'table of contents section must be stripped')
})

test('htmlToMarkdown maps remote Blogger images through imageMap and drops anchor links', () => {
  const html = [
    '<div class="separator"><a href="https://blogger.googleusercontent.com/x/s1280/Cover.png"><img alt="" src="https://blogger.googleusercontent.com/x/s600/Cover.png"/></a></div>',
    '<p>Lihat <a href="#penutup">bagian penutup</a> dan <a href="https://example.com/doc">dokumentasinya</a>.</p>',
  ].join('\n')

  const md = htmlToMarkdown(html, {
    title: 'Coba',
    imageMap: {
      'https://blogger.googleusercontent.com/x/s600/Cover.png': '/img/posts/coba/cover.png',
    },
  })

  assert.ok(md.includes('![](/img/posts/coba/cover.png)'), 'cover image must map to a self-hosted path')
  assert.ok(md.includes('Lihat bagian penutup dan [dokumentasinya](https://example.com/doc).'), 'anchor links collapse to text, external links stay markdown links')
})

test('htmlToMarkdown converts tables to GFM and escapes pipes', () => {
  const html = '<table><tr><th>Alat</th><th>Kecepatan</th></tr><tr><td>npm</td><td>lebih lambat | biasa</td></tr><tr><td>yarn</td><td>cepat</td></tr></table>'
  const md = htmlToMarkdown(html, { title: 'x', imageMap: {} })
  assert.ok(md.includes('| Alat | Kecepatan |'), 'table header row must be a GFM header')
  assert.ok(md.includes('|---|---|'), 'table separator must be present')
  assert.ok(md.includes('lebih lambat \\| biasa'), 'pipes inside cells must be escaped')
})

test('slugify lowercases, ascii-folds, and suffixes collisions deterministically', () => {
  const used = new Set()
  assert.equal(slugify('Apa Itu NodeJS?', used), 'apa-itu-nodejs')
  assert.equal(slugify('Apa itu Node.js', used), 'apa-itu-nodejs-2')
  used.add('apa-itu-nodejs')
  used.add('apa-itu-nodejs-2')
  assert.equal(slugify('Apa Itu NodeJS?', used), 'apa-itu-nodejs-3')
})

test('buildFrontmatter emits deterministic YAML that parseFrontmatter round-trips', () => {
  const post = {
    slug: 'kenali-tdd',
    title: 'Kenali Test-Driven Development (TDD)',
    date: '2025-05-12',
    published: '2025-05-12T10:05:00.000-07:00',
    categories: ['Testing & DevOps'],
    summary: 'TDD membuat kode bebas bug.',
    sourceUrl: 'https://blog.programinglive.com/2025/05/kenali-test-driven-development-tdd.html',
    image: '/img/posts/kenali-tdd/cover.png',
    wordCount: 900,
  }

  const md = buildFrontmatter(post) + '\n\n# Body'
  const parsed = parseFrontmatter(md)

  assert.equal(parsed.frontmatter.slug, post.slug)
  assert.equal(parsed.frontmatter.title, post.title)
  assert.deepEqual(parsed.frontmatter.categories, post.categories)
  assert.ok(parsed.body.startsWith('# Body'))
})

test('categorize maps label sets to the 7 library clusters', () => {
  assert.equal(categorize(['cicd', 'tdd', 'test']), 'Testing & DevOps')
  assert.equal(categorize(['reactjs', 'javascript', 'aplikasi web']), 'Frontend')
  assert.equal(categorize(['laravel', 'php']), 'Backend')
  assert.equal(categorize(['algoritma', 'konsep']), 'Algorithms')
  assert.equal(categorize(['git', 'gitlab', 'version control']), 'Testing & DevOps')
  assert.equal(categorize(['pengembangan diri', 'produktivitas']), 'Growth')
  assert.equal(categorize(['menulis', 'komunikasi']), 'Writing & Communication')
  assert.equal(categorize(['basis data', 'mysql']), 'Backend')
  assert.equal(categorize(['aplikasi web']), 'Fundamentals')
})

test('DUPLICATE_RULES flags known near-duplicate and complementary pairs', () => {
  const superseded = DUPLICATE_RULES.filter((rule) => rule.supersededBy)
  const related = DUPLICATE_RULES.filter((rule) => !rule.supersededBy)

  assert.ok(superseded.length >= 2, 'at least the NodeJS and Database near-duplicates must be marked superseded')
  assert.ok(related.length >= 4, 'complementary pairs (TypeScript, Burnout, Redundansi, Resolusi) must stay visible as related')
  for (const rule of DUPLICATE_RULES) {
    assert.ok(rule.slug, 'each duplicate rule needs a slug')
    assert.ok(rule.supersededBy || rule.related, 'each duplicate rule needs supersededBy or related')
  }
})

test('buildRedirects emits one 301 line per post plus Blogspot fallbacks', () => {
  const posts = [
    { slug: 'kenali-tdd', sourceUrl: 'https://blog.programinglive.com/2025/04/kenali-test-driven-development-tdd.html' },
    { slug: 'road-map-menuju-sukses', sourceUrl: 'https://blog.programinglive.com/2020/05/road-map-menuju-sukses.html' },
  ]
  const lines = buildRedirects(posts)

  assert.ok(lines.some((line) => line.includes('/2025/04/kenali-test-driven-development-tdd.html /id/blog/kenali-tdd 301')))
  assert.ok(lines.some((line) => line.includes('/2020/05/road-map-menuju-sukses.html /id/blog/road-map-menuju-sukses 301')))
  assert.ok(lines.some((line) => line.includes('301') && line.startsWith('/')), 'Blogspot homepage must fall back to the library')
  assert.ok(lines.some((line) => line.includes('/search')), 'Blogspot label/search URLs must fall back to the library')
  assert.equal(lines.filter((line) => !line.startsWith('#')).length, posts.length + 3)
})

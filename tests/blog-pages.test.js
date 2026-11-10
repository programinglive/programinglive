import assert from 'node:assert/strict'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

import { parseFrontmatter, DUPLICATE_RULES, MERGE_OVERRIDES } from '../scripts/import-blogspot.cjs'

const repoRoot = fileURLToPath(new URL('..', import.meta.url))
const postDir = join(repoRoot, 'content', 'posts')
const postFiles = readdirSync(postDir).filter((name) => name.endsWith('.md'))
const detailPage = readFileSync(join(repoRoot, 'app', 'id', 'blog', '[slug]', 'page.tsx'), 'utf8')
const listingPage = readFileSync(join(repoRoot, 'app', 'id', 'blog', 'page.tsx'), 'utf8')
const postsData = readFileSync(join(repoRoot, 'data', 'posts.ts'), 'utf8')
const sitemap = readFileSync(join(repoRoot, 'app', 'sitemap.ts'), 'utf8')
const redirects = readFileSync(join(repoRoot, 'public', '_redirects'), 'utf8')
const globalsCss = readFileSync(join(repoRoot, 'app', 'globals.css'), 'utf8')
const packageJson = JSON.parse(readFileSync(join(repoRoot, 'package.json'), 'utf8'))

test('import produced exactly 227 posts with valid frontmatter and non-empty bodies', () => {
  assert.equal(postFiles.length, 227)
  const slugs = new Set()
  for (const name of postFiles) {
    const raw = readFileSync(join(postDir, name), 'utf8')
    const { frontmatter, body } = parseFrontmatter(raw)
    assert.ok(frontmatter.slug, `${name} must have a slug`)
    assert.equal(frontmatter.slug, name.replace(/\.md$/, ''), 'slug must match the file name')
    assert.ok(!slugs.has(frontmatter.slug), `duplicate slug ${frontmatter.slug}`)
    slugs.add(frontmatter.slug)
    assert.ok(frontmatter.title && frontmatter.title.length > 0, `${name} must have a title`)
    assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(frontmatter.date), `${name} must have a YYYY-MM-DD date`)
    assert.ok(Array.isArray(frontmatter.categories) && frontmatter.categories.length > 0, `${name} must have categories`)
    assert.ok(frontmatter.sourceUrl && frontmatter.sourceUrl.startsWith('https://blog.programinglive.com'), `${name} must keep its blogspot source URL`)
    assert.ok(body.length > 40, `${name} body must not be empty`)
    // Raw block HTML must not leak outside code fences (fences may legitimately
    // contain HTML examples, e.g. Tailwind snippets or highlight.js output).
    let inFence = false
    for (const line of body.split('\n')) {
      if (line.trim().startsWith('```')) {
        inFence = !inFence
        continue
      }
      if (inFence) continue
      assert.ok(!/<div|<h2|<span/.test(line), `${name} leaks raw block HTML outside code fences: ${line.slice(0, 80)}`)
    }
  }
})

test('every imported post image is self-hosted and present on disk', () => {
  let checked = 0
  for (const name of postFiles) {
    const { frontmatter } = parseFrontmatter(readFileSync(join(postDir, name), 'utf8'))
    if (!frontmatter.image) continue
    assert.ok(frontmatter.image.startsWith('/img/posts/'), `image must be self-hosted: ${frontmatter.image}`)
    // Site URL /img/posts/x is served from public/img/posts/x on disk.
    assert.ok(existsSync(join(repoRoot, 'public', frontmatter.image)), `image file missing: ${frontmatter.image}`)
    checked += 1
  }
  assert.ok(checked > 100, 'most migrated posts carry a cover image')
})

test('near-duplicate pairs are merged: source removed, target carries the folded content', () => {
  const superseded = DUPLICATE_RULES.filter((rule) => rule.supersededBy)
  assert.equal(superseded.length, MERGE_OVERRIDES.length, 'every superseded rule has a merge override')
  for (const rule of superseded) {
    assert.ok(!existsSync(join(postDir, `${rule.slug}.md`)), `${rule.slug} must be merged away (file deleted)`)
    assert.ok(!existsSync(join(repoRoot, 'public', 'img', 'posts', rule.slug)), `${rule.slug} image dir must be removed`)
    assert.ok(existsSync(join(postDir, `${rule.supersededBy}.md`)), `superseding post ${rule.supersededBy} must exist`)
  }
  const node = parseFrontmatter(readFileSync(join(postDir, 'apa-itu-nodejs-2.md'), 'utf8'))
  assert.ok(node.body.includes('Internet of Things (IoT)'), 'nodejs target must carry the folded IoT use case')
  const db = parseFrontmatter(readFileSync(join(postDir, 'kenapa-perlu-belajar-database.md'), 'utf8'))
  assert.ok(db.body.includes('## Fungsi dan Peran Database'), 'db target must carry the folded Fungsi dan Peran section')
  assert.ok(db.body.includes('## Pentingnya Database di Dunia Modern'), 'db target must keep the cleaned heading')
  assert.ok(!db.body.includes('database-adalah-penyimpanan-data-yang.html'), 'db target must not keep the self-looping leaked heading link')
})

test('complementary duplicate pairs keep their related cross-links in frontmatter', () => {
  const related = DUPLICATE_RULES.filter((rule) => rule.related)
  for (const rule of related) {
    const raw = readFileSync(join(postDir, `${rule.slug}.md`), 'utf8')
    assert.deepEqual(parseFrontmatter(raw).frontmatter.related, rule.related, `${rule.slug} must keep its related links`)
  }
})

test('public/_redirects maps every blogspot permalink to the new library slug', () => {
  const lines = redirects.split('\n').filter((line) => line.trim() && !line.startsWith('#'))
  // 227 surviving posts + 2 merged-source overrides + 3 Blogspot fallbacks.
  assert.equal(lines.length, postFiles.length + 5, 'one 301 per post, merged-source overrides and three fallbacks')
  const redirectSet = new Set(lines)
  for (const name of postFiles) {
    const { frontmatter } = parseFrontmatter(readFileSync(join(postDir, name), 'utf8'))
    const pathname = new URL(frontmatter.sourceUrl).pathname
    assert.ok(redirectSet.has(`${pathname} /id/blog/${frontmatter.slug} 301`), `missing redirect for ${pathname}`)
  }
  for (const merge of MERGE_OVERRIDES) {
    const pathname = new URL(merge.sourceUrl).pathname
    assert.ok(redirectSet.has(`${pathname} /id/blog/${merge.targetSlug} 301`), `merged source ${pathname} must 301 to ${merge.targetSlug}`)
  }
  assert.ok(lines.includes('/ /id/blog 301'), 'blogspot homepage must fall back to the library')
  assert.ok(lines.some((line) => line.includes('/search')), 'blogspot search/label URLs must fall back to the library')
})

test('detail route renders imported posts via react-markdown with SSG and 404 for unknown slugs', () => {
  assert.ok(detailPage.includes('react-markdown'), 'detail page must render markdown via react-markdown')
  assert.ok(detailPage.includes('remark-gfm') || detailPage.includes('remarkGfm'), 'GFM support must be wired')
  assert.ok(detailPage.includes('generateStaticParams'), 'detail pages must be statically generated')
  assert.ok(detailPage.includes('dynamicParams = false'), 'unknown slugs must 404, not render')
  assert.ok(detailPage.includes('notFound('), 'unknown slugs must call notFound')
})

test('listing page exposes the 7-category filter and hides superseded duplicates by default', () => {
  assert.ok(listingPage.includes('POST_CATEGORIES'), 'listing must offer the 7-category filter')
  assert.ok(listingPage.includes('kategori'), 'filter must be driven by the kategori query param')
  assert.ok(listingPage.includes('supersededBy'), 'merged duplicates must be excluded from the default listing')
})

test('typed loader, sitemap and global styles support the migrated library', () => {
  assert.ok(postsData.includes("content/posts"), 'loader must read the imported markdown files')
  assert.ok(postsData.includes('supersededBy'), 'loader must expose duplicate flags')
  assert.ok(sitemap.includes("'/id/blog'"), 'sitemap keeps the /id/blog route')
  assert.ok(sitemap.includes('allPostSlugs'), 'sitemap must include the imported post routes')
  assert.ok(globalsCss.includes('.post-content'), 'post content must have typography styles')
  assert.ok(packageJson.dependencies['react-markdown'], 'react-markdown must be a dependency')
  assert.ok(packageJson.dependencies['remark-gfm'], 'remark-gfm must be a dependency')
})

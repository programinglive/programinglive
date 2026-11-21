import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const netlify = await readFile(new URL('../netlify.toml', import.meta.url), 'utf8')
const layout = await readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8')
const footer = await readFile(new URL('../components/Footer.tsx', import.meta.url), 'utf8')
const redirects = await readFile(new URL('../public/_redirects', import.meta.url), 'utf8')

/**
 * A 1200x630 card is the size social previews expect. Reading the IHDR bytes
 * keeps this check honest even if the metadata is updated but the file is not.
 */
async function pngSize(relativePath) {
  const bytes = await readFile(new URL(`../${relativePath}`, import.meta.url))
  assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', 'Expected a PNG file')
  assert.equal(bytes.toString('ascii', 12, 16), 'IHDR', 'Expected an IHDR chunk')
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) }
}

test('Netlify sends a baseline security header set on every route', () => {
  for (const header of [
    'Content-Security-Policy',
    'X-Frame-Options',
    'Referrer-Policy',
    'Permissions-Policy',
    'X-Content-Type-Options',
    'Strict-Transport-Security',
  ]) {
    assert.ok(netlify.includes(header), `Missing security header: ${header}`)
  }
  assert.match(netlify, /for\s*=\s*"\/\*"/, 'Header rules must apply to every path')
})

test('site links resolve to App Router routes instead of legacy static files', async () => {
  const termsPage = await readFile(new URL('../app/terms/page.tsx', import.meta.url), 'utf8')
  const guidelinesPage = await readFile(new URL('../app/guidelines/page.tsx', import.meta.url), 'utf8')

  assert.ok(termsPage.includes("canonical: '/terms'"))
  assert.ok(guidelinesPage.includes("canonical: '/guidelines'"))
  assert.ok(footer.includes("'/terms'") && footer.includes("'/guidelines'"))
  assert.ok(!footer.includes('/terms.html') && !footer.includes('/guidelines.html'))
  assert.match(redirects, /^\/terms\.html\s+\/terms\s+301$/m)
  assert.match(redirects, /^\/guidelines\.html\s+\/guidelines\s+301$/m)
})

test('inquiry and search controls keep their implicit label names', async () => {
  const partnersPage = await readFile(new URL('../app/partners/page.tsx', import.meta.url), 'utf8')
  const openSourcePage = await readFile(new URL('../app/open-source/page.tsx', import.meta.url), 'utf8')

  // Wrapping a control in a label gives it an accessible name without a for/id
  // pair. The audit tool only understood explicit labels, so these were false
  // positives; the markup itself is correct and must stay that way.
  assert.match(partnersPage, /<label[^>]*>\s*<span>\{label\}<\/span>\s*<input/)
  assert.match(openSourcePage, /<label[^>]*>\s*<span>Search projects<\/span>\s*<input/)
})

test('the site publishes a real 1200x630 social image with a large card', async () => {
  assert.ok(layout.includes("'/og-image.png'"), 'Metadata must point at the social card')
  assert.match(layout, /width:\s*1200/)
  assert.match(layout, /height:\s*630/)
  assert.match(layout, /card:\s*'summary_large_image'/)

  const size = await pngSize('public/og-image.png')
  assert.deepEqual(size, { width: 1200, height: 630 })
})

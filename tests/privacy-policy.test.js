import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const policyData = await readFile(new URL('../data/privacy-policy.ts', import.meta.url), 'utf8')
const policyPage = await readFile(new URL('../app/privacy-policy/page.tsx', import.meta.url), 'utf8')
const sitemap = await readFile(new URL('../app/sitemap.ts', import.meta.url), 'utf8')
const footer = await readFile(new URL('../components/Footer.tsx', import.meta.url), 'utf8')

const REQUIRED_SECTIONS = [
  'Pendahuluan',
  'Informasi yang Kami Proses',
  'Tujuan Penggunaan Informasi',
  'Integrasi WhatsApp Business Platform',
  'Penyimpanan dan Keamanan Data',
  'Berbagi Informasi dengan Pihak Ketiga',
  'Penyimpanan dan Penghapusan Data',
  'Hak Pengguna',
  'Privasi Anak',
  'Perubahan Kebijakan Privasi',
  'Hubungi Kami',
]

test('privacy policy includes all 11 required Indonesian sections', () => {
  for (const title of REQUIRED_SECTIONS) {
    assert.ok(policyData.includes(`title: '${title}'`), `Missing section: ${title}`)
  }
})

test('privacy policy uses verified contact info and has no unresolved placeholders', () => {
  assert.ok(policyData.includes('creative@programinglive.com'))
  assert.ok(!/\[ISI|\[NAMA|TODO|TBD/i.test(policyData))
  assert.ok(!/\[ISI|\[NAMA|TODO|TBD/i.test(policyPage))
})

test('privacy policy route is registered in sitemap and footer', () => {
  assert.ok(policyPage.includes("canonical: '/privacy-policy'"))
  assert.ok(sitemap.includes("'/privacy-policy'"))
  assert.ok(footer.includes("'/privacy-policy'"))
})

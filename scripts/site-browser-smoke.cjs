const { chromium } = require('playwright')
const baseUrl = (process.env.SITE_PILOT_BASE_URL || 'https://programinglive.com').replace(/\/$/, '')

async function main() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
  try {
    // Journey 1: Learner (starts at homepage -> sees immediate Start Learning CTA -> inspects progression)
    await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 30_000 })
    await page.getByRole('heading', { name: 'Building Pathways from Learning to Opportunity' }).waitFor()
    await page.getByRole('link', { name: 'Start Learning' }).waitFor()
    await page.getByRole('button', { name: 'Open navigation menu' }).click()
    await page.getByRole('link', { name: 'Learn', exact: true }).click()
    await page.getByRole('heading', { name: 'Start with the next understandable step' }).waitFor()
    await page.getByRole('link', { name: 'Start the free track' }).waitFor()

    // Journey 2: Institution (explores programs -> checks delivery model & requirements -> submits partnership interest)
    await page.goto(`${baseUrl}/programs`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'Learning programs designed for progression' }).waitFor()
    await page.getByRole('link', { name: 'Discuss a partnership' }).click()
    await page.getByRole('heading', { name: 'Build a focused, measurable learning partnership' }).waitFor()
    await page.getByLabel('Organization', { exact: true }).fill('ProgramingLive Pilot Institution')
    await page.getByLabel('Contact person').fill('Pilot User')
    await page.getByLabel('Email').fill('pilot@example.org')
    await page.getByLabel('Country').fill('Indonesia')
    await page.getByLabel('Partnership interest').fill('Learning pilot validation')
    await page.getByLabel('Message').fill('Synthetic journey only; this form is not submitted.')
    await page.getByRole('button', { name: 'Prepare partnership email' }).waitFor()

    // Journey 3: Funder / Donor / CSR (inspects Early Pilot stage & impact funnel -> reviews roadmap & transparency)
    await page.goto(`${baseUrl}/impact`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'Measure progression, not attention' }).waitFor()
    await page.getByText('Current Stage: Early Pilot').waitFor()
    await page.goto(`${baseUrl}/roadmap`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'What is complete, what is moving, and what comes next' }).waitFor()
    await page.getByText('Institutional-grade web experience').waitFor()
    await page.goto(`${baseUrl}/about`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'Trust systems, with honest status' }).waitFor()

    // Journey 4: Developer (filters open source by difficulty -> finds canonical repos & setup tasks)
    await page.goto(`${baseUrl}/open-source`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'Open source as a learning pathway' }).waitFor()
    await page.getByRole('button', { name: 'Intermediate' }).click()
    await page.getByRole('heading', { name: 'Commiter' }).waitFor()
    await page.getByRole('button', { name: 'Beginner' }).click()
    await page.getByRole('heading', { name: 'ProgramingLive Portal & Docs' }).waitFor()

    // Bilingual Journey: Indonesian visitor (homepage -> Indonesian programs -> Indonesian impact)
    await page.goto(`${baseUrl}/id`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'Membangun Jalur dari Belajar Menuju Kesempatan' }).waitFor()
    await page.getByRole('link', { name: 'Lihat Program Kami' }).click()
    await page.getByRole('heading', { name: 'Program pembelajaran yang dirancang untuk perkembangan bertahap' }).waitFor()
    await page.goto(`${baseUrl}/id/impact`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'Ukur perkembangan nyata, bukan sekadar impresi' }).waitFor()
    await page.goto(`${baseUrl}/id/open-source`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'Beralih dari pembelajaran terstruktur ke lingkungan pengembangan nyata' }).waitFor()
    await page.getByRole('button', { name: 'Pemula' }).click()
    await page.getByRole('heading', { name: 'ProgramingLive Portal & Dokumentasi' }).waitFor()

    // Route parity and language-switch behavior: retain the current information need across locales.
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto(`${baseUrl}/programs`, { waitUntil: 'networkidle' })
    await page.getByRole('link', { name: 'ID', exact: true }).click()
    await page.waitForURL(`${baseUrl}/id/programs`)
    await page.getByRole('heading', { name: 'Program pembelajaran yang dirancang untuk perkembangan bertahap' }).waitFor()
    await page.getByRole('link', { name: 'EN', exact: true }).click()
    await page.waitForURL(`${baseUrl}/programs`)

    const localizedRoutes = ['/id/about', '/id/learn', '/id/partners', '/id/roadmap', '/id/blog', '/id/contact']
    for (const route of localizedRoutes) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' })
      if (!response?.ok()) throw new Error(`${route} returned HTTP ${response?.status() ?? 'unknown'}`)
      await page.locator('main h1').waitFor()
      const language = await page.locator('body > div[lang]').getAttribute('lang')
      if (language !== 'id') throw new Error(`${route} does not expose Indonesian page language metadata`)
    }

    console.log('Browser pilot successfully verified mobile navigation, learner, institution, funder, developer, all Indonesian routes, and language switching.')
  } finally {
    await browser.close()
  }
}

main().catch((error) => {
  console.error(error.message)
  process.exitCode = 1
})

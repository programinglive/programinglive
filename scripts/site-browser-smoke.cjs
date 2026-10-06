const { chromium } = require('playwright')
const baseUrl = (process.env.SITE_PILOT_BASE_URL || 'https://programinglive.com').replace(/\/$/, '')

async function main() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
  try {
    await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 30_000 })
    await page.getByRole('heading', { name: 'Building Pathways from Learning to Opportunity' }).waitFor()
    await page.getByRole('link', { name: 'Start Learning' }).waitFor()
    await page.getByRole('link', { name: 'Partner With Us' }).click()
    await page.getByRole('heading', { name: 'Build a focused, measurable learning partnership' }).waitFor()
    await page.getByLabel('Organization', { exact: true }).fill('ProgramingLive Pilot Institution')
    await page.getByLabel('Contact person').fill('Pilot User')
    await page.getByLabel('Email').fill('pilot@example.org')
    await page.getByLabel('Country').fill('Indonesia')
    await page.getByLabel('Partnership interest').fill('Learning pilot validation')
    await page.getByLabel('Message').fill('Synthetic journey only; this form is not submitted.')
    await page.getByRole('button', { name: 'Prepare partnership email' }).waitFor()

    await page.goto(`${baseUrl}/open-source`, { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Intermediate' }).click()
    await page.getByRole('heading', { name: 'Commiter' }).waitFor()
    await page.getByRole('button', { name: 'Beginner' }).click()
    await page.getByText('No projects match this filter').waitFor()

    await page.goto(`${baseUrl}/roadmap`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'What is complete, what is moving, and what comes next' }).waitFor()
    await page.getByText('Institutional-grade web experience').waitFor()

    await page.goto(`${baseUrl}/id`, { waitUntil: 'networkidle' })
    await page.getByRole('heading', { name: 'Membangun Jalur dari Belajar Menuju Kesempatan' }).waitFor()
    console.log('Browser pilot completed learner, institution, open-source, roadmap, mobile, and language journeys.')
  } finally { await browser.close() }
}

main().catch((error) => { console.error(error.message); process.exitCode = 1 })

import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const openSourcePage = await readFile(new URL('../app/open-source/page.tsx', import.meta.url), 'utf8')
const idOpenSourcePage = await readFile(new URL('../app/id/open-source/page.tsx', import.meta.url), 'utf8')
const programsPage = await readFile(new URL('../app/programs/page.tsx', import.meta.url), 'utf8')
const homePage = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8')
const navbar = await readFile(new URL('../components/Navbar.tsx', import.meta.url), 'utf8')
const siteShell = await readFile(new URL('../components/SiteShell.tsx', import.meta.url), 'utf8')
const developmentProgress = JSON.parse(
  await readFile(new URL('../data/development-progress.json', import.meta.url), 'utf8')
)
const discordBulletin = await readFile(new URL('../scripts/post-development-bulletin.cjs', import.meta.url), 'utf8')
const roadmap = await readFile(new URL('../docs/IMPLEMENTATION_ROADMAP.md', import.meta.url), 'utf8')
const layout = await readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8')
const sitemap = await readFile(new URL('../app/sitemap.ts', import.meta.url), 'utf8')
const indonesianHome = await readFile(new URL('../app/id/page.tsx', import.meta.url), 'utf8')
const siteContent = await readFile(new URL('../data/site-content.ts', import.meta.url), 'utf8')
const sitePilotWorkflow = await readFile(new URL('../.github/workflows/site-production-pilot.yml', import.meta.url), 'utf8')
const siteBrowserPilot = await readFile(new URL('../scripts/site-browser-smoke.cjs', import.meta.url), 'utf8')

test('featured GitHub links use the canonical project repositories', () => {
  const expectedRepositories = [
    'https://github.com/programinglive/commiter',
    'https://github.com/programinglive/sentry-resolve',
  ]

  for (const repository of expectedRepositories) {
    assert.ok(openSourcePage.includes(repository), `Missing canonical repository link: ${repository}`)
  }

  assert.ok(!openSourcePage.includes('https://github.com/programinglive/dev-workflow-mcp-server'), 'Private repo must not be listed in public open-source')
  assert.ok(!openSourcePage.includes('https://github.com/programinglive/sentryresolve'))
})

test('featured program links point to the learning, 2045, and open-source destinations', () => {
  const expectedDestinations = [
    'https://belajar.programinglive.com',
    'https://programinglive.my.id',
    "href: '/open-source'",
  ]

  for (const destination of expectedDestinations) {
    assert.ok(siteContent.includes(destination), `Missing program destination: ${destination}`)
  }
})

test('featured Open Source project links use HTTPS', () => {
  const hrefs = [...openSourcePage.matchAll(/(?:repository|website):\s*'([^']+)'/g)].map((match) => match[1])
  const externalLinks = hrefs.filter((href) => href.startsWith('http'))

  assert.ok(externalLinks.length > 0, 'Expected to find external project links')
  assert.ok(externalLinks.every((href) => href.startsWith('https://')), 'All external links must use HTTPS')
})

test('private Dev Workflow is excluded from public open source pages', () => {
  assert.ok(!openSourcePage.includes('https://devworkflow.programinglive.com/'), 'Deactivated site should not be listed on open-source page')
  assert.ok(!idOpenSourcePage.includes('https://devworkflow.programinglive.com/'), 'Deactivated site should not be listed on id open-source page')
})

test('homepage publishes a roadmap-based development bulletin', () => {
  assert.ok(homePage.includes('id="development-progress"'))
  assert.ok(homePage.includes('Public development bulletin'))
  assert.ok(developmentProgress.roadmapUrl.endsWith('IMPLEMENTATION_ROADMAP.md'))
  assert.ok(navbar.includes("href: '/roadmap'"))

  for (const priority of ['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6']) {
    assert.ok(developmentProgress.goals.some((goal) => goal.priority === priority), `Missing roadmap priority: ${priority}`)
  }
})

test('homepage communicates the dual-audience learning-to-opportunity positioning', () => {
  assert.ok(homePage.includes('Building Pathways from Learning to Opportunity'))
  assert.ok(homePage.includes('Start Learning'))
  assert.ok(homePage.includes('Partner With Us'))
  assert.ok(homePage.includes('Current Stage: Early Pilot'))
  assert.ok(homePage.includes('development-progress'))
})

test('internationalization and discovery foundations are published', () => {
  assert.ok(layout.includes("languages: { en: '/', id: '/id' }"))
  assert.ok(indonesianHome.includes('Membangun Jalur dari Belajar Menuju Kesempatan'))
  assert.ok(sitemap.includes("'/about'"))
  assert.ok(sitemap.includes("'/partners'"))
  assert.ok(sitemap.includes("'/roadmap'"))
  assert.ok(siteShell.includes('lang={locale}'))
})

test('bilingual route parity exists across all core pages', async () => {
  const coreRoutes = [
    'about',
    'programs',
    'learn',
    'impact',
    'partners',
    'roadmap',
    'blog',
    'contact',
    'open-source',
  ]

  for (const route of coreRoutes) {
    const idPage = await readFile(new URL(`../app/id/${route}/page.tsx`, import.meta.url), 'utf8')
    assert.ok(idPage.length > 0, `Missing content for /id/${route}`)
    assert.ok(sitemap.includes(`'/id/${route}'`), `Sitemap missing /id/${route}`)
  }

  for (const route of ['about', 'programs', 'learn', 'impact', 'partners', 'roadmap', 'open-source']) {
    assert.ok(navbar.includes(`/id/${route}`), `Navbar missing /id/${route}`)
  }
})

test('core persona entry points are present across both languages', async () => {
  // 1. Learner: a clear starting path exists without mandatory login
  assert.ok(homePage.includes('https://belajar.programinglive.com'))
  assert.ok(homePage.includes('Begin without creating an account'))
  assert.ok(indonesianHome.includes('https://belajar.programinglive.com'))
  assert.ok(indonesianHome.includes('tanpa membuat akun'))

  // 2. Institution: understands program model, requirements, and partnership inquiry
  assert.ok(programsPage.includes('Technology requirements'))
  assert.ok(programsPage.includes('Discuss a partnership'))
  const idProgramsPage = await readFile(new URL('../app/id/programs/page.tsx', import.meta.url), 'utf8')
  assert.ok(idProgramsPage.includes('Diskusikan kemitraan'))

  // 3. Funder: understands stage, measurement framework, and honest status
  const impactPage = await readFile(new URL('../app/impact/page.tsx', import.meta.url), 'utf8')
  assert.ok(impactPage.includes('Current Stage: Early Pilot'))
  assert.ok(impactPage.includes('Baseline in development'))
  const idImpactPage = await readFile(new URL('../app/id/impact/page.tsx', import.meta.url), 'utf8')
  assert.ok(idImpactPage.includes('Tahap Saat Ini: Pilot Awal'))

  // 4. Developer: finds appropriate contribution path and canonical repositories
  const idOpenSource = await readFile(new URL('../app/id/open-source/page.tsx', import.meta.url), 'utf8')
  assert.ok(openSourcePage.includes('https://github.com/programinglive/commiter'))
  assert.ok(idOpenSource.includes('https://github.com/programinglive/commiter'))
})

test('production pilot covers learner and institutional journeys and reports to Discord', () => {
  assert.ok(sitePilotWorkflow.includes('site-api-smoke.cjs'))
  assert.ok(sitePilotWorkflow.includes('site-browser-smoke.cjs'))
  assert.ok(sitePilotWorkflow.includes('post-site-pilot-result.cjs'))

  // Laporan Discord hanya pemberitahuan. Webhook yang mati pernah membuat pilot
  // yang sehat tampil merah setiap hari, jadi step ini wajib continue-on-error.
  const reportStep = sitePilotWorkflow.slice(sitePilotWorkflow.indexOf('Report result to Discord'))
  assert.ok(
    reportStep.slice(0, 400).includes('continue-on-error: true'),
    'step laporan Discord harus continue-on-error agar webhook mati tidak menggagalkan pilot'
  )

  assert.ok(siteBrowserPilot.includes('Start Learning'))
  assert.ok(siteBrowserPilot.includes('Partnership interest'))
  assert.ok(siteBrowserPilot.includes('/open-source'))
  assert.ok(siteBrowserPilot.includes('/roadmap'))
  assert.ok(siteBrowserPilot.includes('/id'))
})

test('open-source contribution pathway provides beginner projects, tested setup, and track index', async () => {
  const idOpenSource = await readFile(new URL('../app/id/open-source/page.tsx', import.meta.url), 'utf8')

  // 1. Beginner-friendly project exists
  assert.ok(openSourcePage.includes("difficulty: 'Beginner'"))
  assert.ok(idOpenSource.includes("difficulty: 'Beginner'"))
  assert.ok(openSourcePage.includes('ProgramingLive Portal & Docs'))
  assert.ok(idOpenSource.includes('ProgramingLive Portal & Dokumentasi'))

  // 2. Tested local setup instructions and contribution guides are present
  assert.ok(openSourcePage.includes('Tested local setup'))
  assert.ok(openSourcePage.includes('CONTRIBUTING.md'))
  assert.ok(idOpenSource.includes('Panduan Penyiapan Lokal Teruji'))
  assert.ok(idOpenSource.includes('CONTRIBUTING.md'))

  // 3. Track-to-project index connects learning stages to practical tasks
  assert.ok(openSourcePage.includes('id="track-index"'))
  assert.ok(openSourcePage.includes('trackProjectIndex'))
  assert.ok(idOpenSource.includes('id="track-index"'))
  assert.ok(idOpenSource.includes('trackProjectIndexId'))
  assert.ok(siteContent.includes('trackProjectIndex'))
})

test('creator studio and blog operationalize editorial cadence and consent-first collaboration', async () => {
  const blogPage = await readFile(new URL('../app/blog/page.tsx', import.meta.url), 'utf8')
  const idBlogPage = await readFile(new URL('../app/id/blog/page.tsx', import.meta.url), 'utf8')

  // 1. Editorial cadence defined
  assert.ok(blogPage.includes('editorialCadence'))
  assert.ok(idBlogPage.includes('editorialCadenceId'))
  assert.ok(siteContent.includes('editorialCadence'))
  assert.ok(siteContent.includes('editorialCadenceId'))

  // 2. Real curriculum articles linked to learning tracks
  assert.ok(blogPage.includes('editorialArticles'))
  assert.ok(idBlogPage.includes('editorialArticlesId'))
  assert.ok(siteContent.includes('first-learning-track-retrospective'))
  assert.ok(siteContent.includes('https://belajar.programinglive.com/learn/first-web-page'))

  // 3. Community feedback & consent-first showcase guidelines
  assert.ok(blogPage.includes('collaborationGuidelines'))
  assert.ok(idBlogPage.includes('collaborationGuidelinesId'))
  assert.ok(blogPage.includes('https://github.com/programinglive/belajar/discussions'))
  assert.ok(idBlogPage.includes('https://github.com/programinglive/belajar/discussions'))
  assert.ok(siteContent.includes('Consent-First Portfolio Showcase') || siteContent.includes('opt-in consent'))
})

test('mission measurement framework establishes monthly outcome review, cta governance, and data separation', async () => {
  const impactPage = await readFile(new URL('../app/impact/page.tsx', import.meta.url), 'utf8')
  const idImpactPage = await readFile(new URL('../app/id/impact/page.tsx', import.meta.url), 'utf8')
  const missionMeasurementDoc = await readFile(new URL('../docs/MISSION_MEASUREMENT.md', import.meta.url), 'utf8')

  // 1. Monthly review cycle & 4 core indicators
  assert.ok(impactPage.includes('monthlyOutcomeReviews'))
  assert.ok(idImpactPage.includes('monthlyOutcomeReviewsId'))
  assert.ok(siteContent.includes('monthlyOutcomeReviews'))
  assert.ok(missionMeasurementDoc.includes('first Monday of each month'))

  // 2. Curriculum improvement & CTA integrity governance
  assert.ok(impactPage.includes('governancePolicies'))
  assert.ok(idImpactPage.includes('governancePoliciesId'))
  assert.ok(siteContent.includes('ctaVerification'))
  assert.ok(missionMeasurementDoc.includes('Zero-Tolerance for Broken CTAs'))

  // 3. Strict personal assistant & learner data segregation
  assert.ok(siteContent.includes('dataSeparation'))
  assert.ok(missionMeasurementDoc.includes('Strict Data Segregation'))
})

test('website and Discord bulletin share the same progress source', () => {
  assert.ok(homePage.includes("../data/development-progress.json"))
  assert.ok(discordBulletin.includes("'data', 'development-progress.json'"))
  assert.ok(discordBulletin.includes('DISCORD_BULLETIN_WEBHOOK_URL'))
})

test('development bulletin milestone counts match the roadmap checklists', () => {
  for (const goal of developmentProgress.goals) {
    const sectionStart = roadmap.indexOf(`## ${goal.priority} `)
    assert.notEqual(sectionStart, -1, `Missing roadmap section: ${goal.priority}`)

    const remainingRoadmap = roadmap.slice(sectionStart)
    const nextSection = remainingRoadmap.indexOf('\n## ', 1)
    const section = nextSection === -1 ? remainingRoadmap : remainingRoadmap.slice(0, nextSection)
    const completed = (section.match(/^- \[x\] /gm) ?? []).length
    const pending = (section.match(/^- \[ \] /gm) ?? []).length

    assert.equal(goal.completed, completed, `${goal.priority} completed count is out of sync`)
    assert.equal(goal.total, completed + pending, `${goal.priority} total count is out of sync`)
  }
})

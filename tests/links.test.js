import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const openSourcePage = await readFile(new URL('../app/open-source/page.tsx', import.meta.url), 'utf8')
const programsPage = await readFile(new URL('../app/programs/page.tsx', import.meta.url), 'utf8')
const homePage = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8')
const navbar = await readFile(new URL('../components/Navbar.tsx', import.meta.url), 'utf8')
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
    'https://github.com/programinglive/dev-workflow-mcp-server',
    'https://github.com/programinglive/commiter',
    'https://github.com/programinglive/sentry-resolve',
  ]

  for (const repository of expectedRepositories) {
    assert.ok(openSourcePage.includes(repository), `Missing canonical repository link: ${repository}`)
  }

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
})

test('production pilot covers learner and institutional journeys and reports to Discord', () => {
  assert.ok(sitePilotWorkflow.includes('site-api-smoke.cjs'))
  assert.ok(sitePilotWorkflow.includes('site-browser-smoke.cjs'))
  assert.ok(sitePilotWorkflow.includes('post-site-pilot-result.cjs'))
  assert.ok(siteBrowserPilot.includes('Start Learning'))
  assert.ok(siteBrowserPilot.includes('Partnership interest'))
  assert.ok(siteBrowserPilot.includes('/open-source'))
  assert.ok(siteBrowserPilot.includes('/roadmap'))
  assert.ok(siteBrowserPilot.includes('/id'))
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

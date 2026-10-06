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
    'https://programinglive.com/open-source',
  ]

  for (const destination of expectedDestinations) {
    assert.ok(programsPage.includes(destination), `Missing program destination: ${destination}`)
  }
})

test('featured Open Source project links use HTTPS', () => {
  const hrefs = [...openSourcePage.matchAll(/href:\s*'([^']+)'/g)].map((match) => match[1])
  const externalLinks = hrefs.filter((href) => href.startsWith('http'))

  assert.ok(externalLinks.length > 0, 'Expected to find external project links')
  assert.ok(externalLinks.every((href) => href.startsWith('https://')), 'All external links must use HTTPS')
})

test('homepage publishes a roadmap-based development bulletin', () => {
  assert.ok(homePage.includes('id="development-progress"'))
  assert.ok(homePage.includes('Development bulletin'))
  assert.ok(developmentProgress.roadmapUrl.endsWith('IMPLEMENTATION_ROADMAP.md'))
  assert.ok(navbar.includes('href="/#development-progress"'))

  for (const priority of ['P0', 'P1', 'P2', 'P3', 'P4', 'P5']) {
    assert.ok(developmentProgress.goals.some((goal) => goal.priority === priority), `Missing roadmap priority: ${priority}`)
  }
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

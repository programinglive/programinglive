import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const openSourcePage = await readFile(new URL('../app/open-source/page.tsx', import.meta.url), 'utf8')
const programsPage = await readFile(new URL('../app/programs/page.tsx', import.meta.url), 'utf8')

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

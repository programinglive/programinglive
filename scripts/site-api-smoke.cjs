const baseUrl = (process.env.SITE_PILOT_BASE_URL || 'https://programinglive.com').replace(/\/$/, '')
const expectedVersion = (process.env.SITE_PILOT_EXPECTED_VERSION || '').replace(/^v/, '')

async function get(path) {
  const response = await fetch(`${baseUrl}${path}`, { headers: { accept: 'text/html,application/json' }, signal: AbortSignal.timeout(20_000) })
  const body = await response.text()
  return { response, body }
}

async function waitForRelease() {
  for (let attempt = 1; attempt <= 20; attempt += 1) {
    const { response, body } = await get('/api/status')
    let status
    try { status = JSON.parse(body) } catch { status = null }
    if (response.ok && status?.status === 'ok' && (!expectedVersion || status.version === expectedVersion)) return status
    if (attempt === 20) throw new Error(`Release ${expectedVersion || 'current'} did not become ready (HTTP ${response.status})`)
    console.log(`Waiting for production release (${attempt}/20)...`)
    await new Promise((resolve) => setTimeout(resolve, 30_000))
  }
}

async function main() {
  await waitForRelease()
  const expectations = [
    ['/', 'Building Pathways from Learning to Opportunity'],
    ['/programs', 'Learning programs designed for progression'],
    ['/learn', 'Start with the next understandable step'],
    ['/impact', 'Measure progression, not attention'],
    ['/partners', 'Build a focused, measurable learning partnership'],
    ['/open-source', 'Open source as a learning pathway'],
    ['/roadmap', 'What is complete, what is moving, and what comes next'],
    ['/id', 'Membangun Jalur dari Belajar Menuju Kesempatan'],
  ]
  for (const [path, marker] of expectations) {
    const { response, body } = await get(path)
    if (!response.ok || !body.includes(marker)) throw new Error(`${path} failed its content check (HTTP ${response.status})`)
  }
  console.log('Production API/HTTP pilot verified status, core journeys, and both languages.')
}

main().catch((error) => { console.error(error.message); process.exitCode = 1 })

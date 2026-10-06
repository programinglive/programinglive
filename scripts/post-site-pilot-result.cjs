const webhookUrl = process.env.DISCORD_BULLETIN_WEBHOOK_URL
if (!webhookUrl) { console.log('Discord report skipped: webhook is not configured.'); process.exit(0) }
const apiResult = process.env.SITE_API_RESULT || 'unknown'
const browserResult = process.env.SITE_BROWSER_RESULT || 'unknown'
const success = apiResult === 'success' && browserResult === 'success'
const repository = process.env.GITHUB_REPOSITORY || 'programinglive/programinglive'
const runUrl = process.env.GITHUB_RUN_ID ? `https://github.com/${repository}/actions/runs/${process.env.GITHUB_RUN_ID}` : undefined

async function main() {
  const response = await fetch(`${webhookUrl}?wait=true`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ username: 'ProgramingLive Pilot Tester', allowed_mentions: { parse: [] }, embeds: [{ title: `${success ? '✅' : '❌'} ProgramingLive production pilot ${success ? 'passed' : 'failed'}`, url: runUrl, description: success ? 'A synthetic learner and institutional visitor completed the production journeys.' : 'At least one production journey failed. Open the workflow for details.', color: success ? 0x16a34a : 0xdc2626, fields: [{ name: 'API / HTTP', value: apiResult, inline: true }, { name: 'Browser', value: browserResult, inline: true }, { name: 'Release', value: process.env.GITHUB_REF_NAME || 'production', inline: true }], timestamp: new Date().toISOString() }] }) })
  if (!response.ok) throw new Error(`Discord report failed with HTTP ${response.status}`)
}
main().catch((error) => { console.error(error.message); process.exitCode = 1 })

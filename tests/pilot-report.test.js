import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import http from 'node:http'

// Skrip laporan dipanggil workflow dengan DISCORD_BULLETIN_WEBHOOK_URL. Yang
// diuji di sini bukan Discord-nya, melainkan janji yang penting bagi pilot:
// webhook yang mati harus menghasilkan peringatan yang terlihat, keluar dengan
// kode 1 (supaya step ber-continue-on-error tampil kuning), dan tidak pernah
// diam-diam dianggap sukses.

function startWebhook(statusCode, body) {
  const requests = []
  const server = http.createServer((req, res) => {
    let payload = ''
    req.on('data', (chunk) => { payload += chunk })
    req.on('end', () => {
      requests.push({ method: req.method, url: req.url, payload })
      res.writeHead(statusCode, { 'content-type': 'application/json' })
      res.end(body)
    })
  })
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, requests, port: server.address().port })
    })
  })
}

function runReporter(webhookUrl, env = {}) {
  const child = spawn(process.execPath, ['scripts/post-site-pilot-result.cjs'], {
    env: {
      ...process.env,
      DISCORD_BULLETIN_WEBHOOK_URL: webhookUrl,
      SITE_API_RESULT: 'success',
      SITE_BROWSER_RESULT: 'success',
      GITHUB_REPOSITORY: 'programinglive/programinglive',
      GITHUB_RUN_ID: '123',
      ...env,
    },
  })

  let stdout = ''
  let stderr = ''
  child.stdout.on('data', (chunk) => { stdout += chunk })
  child.stderr.on('data', (chunk) => { stderr += chunk })

  return new Promise((resolve) => {
    child.on('close', (code) => resolve({ code, stdout, stderr }))
  })
}

test('webhook 404 menghasilkan warning yang terlihat dan kode keluar 1', async () => {
  const hook = await startWebhook(404, '{"message":"Unknown Webhook","code":10015}')
  try {
    const result = await runReporter(`http://127.0.0.1:${hook.port}/api/webhooks/1/token`)

    assert.equal(result.code, 1, 'kode 1 membuat step tampil sebagai warning, bukan sukses diam-diam')
    assert.match(result.stdout, /::warning::/, 'anotasi warning harus muncul di halaman run')
    assert.match(result.stderr, /404/)
    assert.equal(hook.requests.length, 1, 'laporan tetap dicoba sekali sebelum menyerah')
  } finally {
    hook.server.close()
  }
})

test('webhook hidup menerima laporan dan keluar dengan kode 0', async () => {
  const hook = await startWebhook(200, '{"id":"1"}')
  try {
    const result = await runReporter(`http://127.0.0.1:${hook.port}/api/webhooks/1/token`)

    assert.equal(result.code, 0)
    assert.doesNotMatch(result.stdout, /::warning::/)

    const payload = JSON.parse(hook.requests[0].payload)
    assert.equal(payload.username, 'ProgramingLive Pilot Tester')
    assert.match(payload.embeds[0].title, /passed/)
  } finally {
    hook.server.close()
  }
})

test('tanpa webhook, laporan dilewati tanpa menggagalkan apa pun', async () => {
  const result = await runReporter('', { DISCORD_BULLETIN_WEBHOOK_URL: '' })

  assert.equal(result.code, 0)
  assert.match(result.stdout, /skipped/)
})

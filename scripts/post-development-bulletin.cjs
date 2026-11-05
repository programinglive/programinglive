const { readFile } = require('node:fs/promises')
const path = require('node:path')

// Two ways to reach Discord:
//   1. BULLETIN_WEBHOOK_URL + BULLETIN_RELAY_TOKEN -> relay on the notification
//      server. The webhook URL is the relay, not the channel, so only a token
//      that can be rotated needs to live in Actions.
//   2. DISCORD_BULLETIN_WEBHOOK_URL -> the channel webhook directly, kept for
//      a local run that has no relay.
async function main() {
  const relayUrl = process.env.BULLETIN_WEBHOOK_URL
  const relayToken = process.env.BULLETIN_RELAY_TOKEN
  const directUrl = process.env.DISCORD_BULLETIN_WEBHOOK_URL
  const webhookUrl = relayUrl || directUrl

  if (!webhookUrl) {
    throw new Error('BULLETIN_WEBHOOK_URL (relay) or DISCORD_BULLETIN_WEBHOOK_URL is required')
  }
  if (relayUrl && !relayToken) {
    throw new Error('BULLETIN_RELAY_TOKEN is required when BULLETIN_WEBHOOK_URL is a relay')
  }

  const progressPath = path.join(__dirname, '..', 'data', 'development-progress.json')
  const progress = JSON.parse(await readFile(progressPath, 'utf8'))
  const completed = progress.goals.reduce((total, goal) => total + goal.completed, 0)
  const total = progress.goals.reduce((sum, goal) => sum + goal.total, 0)
  const percentage = Math.round((completed / total) * 100)

  const response = await fetch(relayUrl ? relayUrl : `${webhookUrl}?wait=true`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(relayUrl ? { 'x-gitlab-token': relayToken } : {}),
    },
    body: JSON.stringify(
      relayUrl
        ? // The relay expects a plain message plus an embed it forwards verbatim.
          {
            content: `📊 **Development Bulletin — ${percentage}% complete** · ${progress.updatedAt}`,
            embeds: [
              {
                title: `Development Bulletin — ${percentage}% complete`,
                url: progress.roadmapUrl,
                description: `**Current focus**\n${progress.currentFocus}`,
                fields: progress.goals.map((goal) => ({
                  name: `${goal.priority} · ${goal.title}`,
                  value: `**${goal.status}** · ${goal.completed}/${goal.total}\n${goal.summary}`,
                  inline: true,
                })),
                footer: {
                  text: `${completed} of ${total} milestones · Up next: ${progress.nextUp}`,
                },
              },
            ],
          }
        : {
            username: 'ProgramingLive Bulletin',
            allowed_mentions: { parse: [] },
            embeds: [
              {
                title: `Development Bulletin — ${percentage}% complete`,
                url: progress.roadmapUrl,
                description: `**Current focus**\n${progress.currentFocus}`,
                color: 0x38bdf8,
                fields: progress.goals.map((goal) => ({
                  name: `${goal.priority} · ${goal.title}`,
                  value: `**${goal.status}** · ${goal.completed}/${goal.total}\n${goal.summary}`,
                  inline: true,
                })),
                footer: {
                  text: `${completed} of ${total} milestones · Updated ${progress.updatedAt} · Up next: ${progress.nextUp}`,
                },
              },
            ],
          },
    ),
  })

  if (!response.ok) {
    throw new Error(`Discord webhook failed with HTTP ${response.status}: ${await response.text()}`)
  }

  console.log(`Published development bulletin: ${completed}/${total} milestones complete.`)
}

main().catch((error) => {
  console.error(error.message)
  process.exitCode = 1
})

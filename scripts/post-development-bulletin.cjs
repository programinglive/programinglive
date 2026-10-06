const { readFile } = require('node:fs/promises')
const path = require('node:path')

async function main() {
  const webhookUrl = process.env.DISCORD_BULLETIN_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error('DISCORD_BULLETIN_WEBHOOK_URL is required')
  }

  const progressPath = path.join(__dirname, '..', 'data', 'development-progress.json')
  const progress = JSON.parse(await readFile(progressPath, 'utf8'))
  const completed = progress.goals.reduce((total, goal) => total + goal.completed, 0)
  const total = progress.goals.reduce((sum, goal) => sum + goal.total, 0)
  const percentage = Math.round((completed / total) * 100)

  const response = await fetch(`${webhookUrl}?wait=true`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
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
    }),
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

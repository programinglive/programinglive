# Discord development bulletin

The website and Discord bulletin use `data/development-progress.json` as their shared source. A push to `main` that changes this file triggers `.github/workflows/development-bulletin.yml` and posts the updated roadmap summary to Discord.

## One-time Discord setup

1. Create a text channel named `development-bulletin` in the ProgramingLive Discord server.
2. Open **Edit Channel → Integrations → Webhooks**, create a webhook named `ProgramingLive Bulletin`, and copy its URL.
3. Add the URL to the GitHub repository as an Actions secret named `DISCORD_BULLETIN_WEBHOOK_URL`.
4. Run **Actions → Publish development bulletin → Run workflow** once to publish the initial bulletin.

Until the secret is configured, the workflow exits successfully with a notice and does not attempt to publish.

Treat the webhook URL as a secret. Never commit it, paste it into an issue, or include it in screenshots.

## The same webhook carries the production pilot report

`site-production-pilot.yml` posts its result to this channel with the same
`DISCORD_BULLETIN_WEBHOOK_URL`, under the display name `ProgramingLive Pilot Tester`.

That report is a **notification, not a gate**. On 1 November 2026 the webhook had
been deleted (HTTP 404) while both journeys still passed, so the pilot failed every
day for a week and buried the signal it exists to send. Now:

- the `Report result to Discord` step is `continue-on-error`, so a broken webhook
  cannot turn a healthy pilot red;
- `scripts/post-site-pilot-result.cjs` prints a `::warning::` annotation naming the
  secret to check, so a dead webhook stays visible in the run;
- only `Enforce pilot result` decides pass or fail.

A webhook that responds 404 has been deleted. Create a new one in
**Edit Channel → Integrations → Webhooks** and replace the secret; deletions are
not recoverable.

## Publishing an update

Update `data/development-progress.json` in the same change that advances the roadmap. The homepage is rebuilt from that data, and the Discord workflow posts the same status after the change reaches `main`.

For a local delivery test, set `DISCORD_BULLETIN_WEBHOOK_URL` only in the current shell and run:

```powershell
node scripts/post-development-bulletin.cjs
```

# Discord development bulletin

The website and Discord bulletin use `data/development-progress.json` as their shared source. A push to `main` that changes this file triggers `.github/workflows/development-bulletin.yml` and posts the updated roadmap summary to Discord.

## One-time Discord setup

1. Create a text channel named `development-bulletin` in the ProgramingLive Discord server.
2. Open **Edit Channel → Integrations → Webhooks**, create a webhook named `ProgramingLive Bulletin`, and copy its URL.
3. Add the URL to the GitHub repository as an Actions secret named `DISCORD_BULLETIN_WEBHOOK_URL`.
4. Run **Actions → Publish development bulletin → Run workflow** once to publish the initial bulletin.

Until the secret is configured, the workflow exits successfully with a notice and does not attempt to publish.

Treat the webhook URL as a secret. Never commit it, paste it into an issue, or include it in screenshots.

## Publishing an update

Update `data/development-progress.json` in the same change that advances the roadmap. The homepage is rebuilt from that data, and the Discord workflow posts the same status after the change reaches `main`.

For a local delivery test, set `DISCORD_BULLETIN_WEBHOOK_URL` only in the current shell and run:

```powershell
node scripts/post-development-bulletin.cjs
```

# Project deployment register

This page is the portal-level index for deployment setup across Programinglive projects. Detailed, project-specific instructions belong in the source repository.

## Belajar

- Repository: [programinglive/belajar](https://github.com/programinglive/belajar)
- Production URL: <https://belajar.programinglive.com>
- Runtime: Laravel, served by Nginx and PHP-FPM on the `bw-server` GCP VM.
- Production path: `/usr/share/nginx/belajar`; Nginx document root: `/usr/share/nginx/belajar/public`.
- CI: [GitHub Actions](https://github.com/programinglive/belajar/actions) runs on pushes/PRs to `master` and version tags.
- CD: tag-driven polling by `/root/command/deploy_all.sh` on `bw-server`, scheduled every five minutes. The project entry deploys the newest `v*` tag to `/usr/share/nginx/belajar`.
- Release gate: wait for the `master` CI run to pass, then run `npm run release:patch` (or `release:minor` / `release:major`) in Belajar to create/publish the tag. The server poller does not itself wait for or validate the GitHub Actions result.
- Preserved production state: `.env` and `storage` are excluded from the code sync; Laravel migrations and cache refreshes run as part of deployment.
- Detailed runbook: [`belajar/docs/DEPLOYMENT.md`](https://github.com/programinglive/belajar/blob/master/docs/DEPLOYMENT.md).

### Operations

Connect to the server with the configured GCP account:

```powershell
gcloud compute ssh gpcbeautyworld@bw-server --project=winged-ratio-344917 --zone=asia-southeast2-a --tunnel-through-iap
```

Check the current release and recent deployment logs:

```bash
git -C /usr/share/nginx/belajar describe --tags --exact-match
sudo tail -100 /var/log/deploy_all.log
```

After a release, confirm the new tag is deployed and run an HTTP smoke test against the production URL. Do not edit production `.env` or remove `storage` during deployment.

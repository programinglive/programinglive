# ProgramingLive deployment

## Hosting and release model

The Next.js site is configured for Netlify in `netlify.toml` and linked locally by `.netlify/state.json`. Production deployment runs from GitHub Actions; it does not use the Beautyworld VM, Docker, or the ERP deployment webhook.

The `.github/workflows/ci-cd.yml` workflow:

- runs `npm ci`, `npm test`, and `npm run build` for pull requests and pushes to `main`;
- deploys a version tag matching `v*` to Netlify production only after the verification job passes;
- supports a manually approved production run through **Actions → ProgramingLive CI/CD → Run workflow** by selecting `deploy_production`; checks still run first;
- serializes production deployments so two tags cannot switch production simultaneously.

## One-time GitHub setup

Create a repository Actions secret named `NETLIFY_AUTH_TOKEN` for the Netlify account that owns this site. Generate it from Netlify's user settings and add it under **GitHub → Settings → Secrets and variables → Actions**. Never commit the token or put it in a workflow variable.

The workflow uses the site ID currently recorded in `.netlify/state.json`; the site ID is an identifier, not an authentication credential. Confirm it is the production site for `programinglive.com` before the first release. The production GitHub environment is named `production`; configure required reviewers there if production releases should need manual approval.

If Netlify's Git integration is also configured to deploy pushes to `main`, it may create an additional deploy alongside the tagged-release workflow. Check the Netlify project's continuous-deployment setting and keep one production release path as the source of truth.

## Release procedure

1. Merge and push the reviewed change to `main`; GitHub Actions runs tests and a build.
2. From a clean local checkout, create a semantic-version release using `npm run release:patch`, `npm run release:minor`, or `npm run release:major`.
3. Push the release commit and tag with `git push --follow-tags origin main`.
4. GitHub Actions reruns verification for the tag and then deploys that tagged commit to Netlify production.
5. Verify the deployment at [programinglive.com](https://programinglive.com/) and review the Netlify deploy details linked from the Actions run.

The workflow uses Netlify CLI `27.10.1` pinned in the command and the Node version declared by `netlify.toml`. A failed test/build prevents deployment; a failed health/build/deploy step leaves the previous Netlify production deploy active.

# Contributing to ProgramingLive

Thanks for contributing to ProgramingLive's open learning and technology education platform.

## Local Development

1. Fork or clone the repository.
2. Install the locked dependencies: `npm ci`.
3. Start the Next.js development server: `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000).

Read [DEVELOPMENT_STANDARD.md](./DEVELOPMENT_STANDARD.md) before starting a change. It defines scope, status evidence, verification, release, deployment, and bulletin requirements.

### Coding Standards

- Follow the repository `AGENTS.md` instructions and existing Next.js App Router patterns.
- Prefer TypeScript, server-rendered routes, shared components in `components/`, and typed content in `data/`.
- Use semantic HTML, labeled controls, keyboard-visible focus, and reduced-motion support.
- Keep English primary and add equivalent Indonesian routes under `/id/` for public core pages.
- Keep planned, active-pilot, and completed work clearly distinguished. Never invent impact totals, partners, testimonials, or user-research evidence.

### Branch Strategy

- Create feature branches from `main` using the format `feature/short-description` or `fix/issue-id`.
- Rebase (`git pull --rebase origin main`) before opening a PR to avoid merge commits.

### Commit Messages

- Follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced via commitlint).
- Examples: `feat: add sponsor section animation`, `fix: correct footer spacing on mobile`.

### Pull Requests

- Run `npm test`, `npm run build`, and `git diff --check` before requesting review.
- For user-facing journeys, run the local production pilot (`npm run start` plus the Playwright API and browser smoke scripts) and report its limits.
- Update the roadmap and development bulletin source whenever priorities, status, counts, focus, or next steps change.
- Update documentation or legal pages if your change impacts them.
- Add screenshots or short clips when altering UI elements.
- Reference related issues in the PR description.

### Release Workflow

- A release is cut only from a clean worktree after the validation gates in `DEVELOPMENT_STANDARD.md` pass.
- Maintainers use `npm run release:patch`, `npm run release:minor`, or `npm run release:major`.
- Push the verified release commit and tag with `git push --follow-tags origin main`. The tagged CI workflow performs the production deployment; verify the production pilot and Discord report after deploy.

### Code of Conduct

Participation in this project is governed by the [Code of Conduct](./CODE_OF_CONDUCT.md). Reports can be sent to [creative@programinglive.com](mailto:creative@programinglive.com).

Happy building! 💡

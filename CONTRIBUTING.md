# Contributing to ProgramingLive

Thanks for your interest in contributing! Together we can make ProgramingLive the go-to community hub for Indonesian builders.

## Local Development

1. Fork and clone the repository.
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) to preview changes.

### Coding Standards

- Prefer TypeScript and Tailwind utilities already used throughout the project.
- Keep components small and cohesive. Reuse the shared `navbar` and `footer` helpers when adding new pages.
- Use semantic HTML and accessible attributes (`aria-label`, `alt`, etc.).

### Branch Strategy

- Create feature branches from `main` using the format `feature/short-description` or `fix/issue-id`.
- Rebase (`git pull --rebase origin main`) before opening a PR to avoid merge commits.

### Commit Messages

- Follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced via commitlint).
- Examples: `feat: add sponsor section animation`, `fix: correct footer spacing on mobile`.

### Pull Requests

- Ensure all lint/tests (if added) pass locally.
- Update documentation or legal pages if your change impacts them.
- Add screenshots or short clips when altering UI elements.
- Reference related issues in the PR description.

### Release Workflow

- Maintainers use `npm run release[:major|:minor|:patch]` to ship new versions.
- After running the release script, push with `git push --follow-tags origin main` to publish commits and tags.

### Code of Conduct

Participation in this project is governed by the [Code of Conduct](./CODE_OF_CONDUCT.md). Reports can be sent to [creative@programinglive.com](mailto:creative@programinglive.com).

Happy building! 💡

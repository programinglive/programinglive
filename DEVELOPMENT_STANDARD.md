# ProgramingLive development standard

This standard turns the repository's established workflow into a repeatable product-development cycle. It applies to website, learning, program, open-source, content, and automation work.

## 1. Start with evidence and a bounded outcome

1. Check the current branch, commit, and `git status --short`. Treat pre-existing changes as user-owned and do not stage or rewrite them.
2. Read the relevant product brief, route, shared component, tests, and roadmap section before choosing an implementation.
3. Choose one priority with a user-facing outcome, acceptance conditions, and an explicit status: Planned, In progress, or Complete.
4. For a plan change, update `docs/IMPLEMENTATION_ROADMAP.md` and `data/development-progress.json` together. Keep the exact completed/total checklist counts synchronized.

## 2. Design for the audiences and constraints

- Keep learner and institutional journeys clear from the homepage.
- Preserve English-first content and matching Indonesian routes for core pages.
- Keep learning text-first, mobile-first, usable on modest devices, and accessible without an account where the curriculum allows.
- Make program objectives, intended learners, duration, delivery, requirements, outputs, metrics, and partner roles explicit.
- Use only verified claims. Never invent impact counts, active partners, testimonials, participant stories, or validation sessions.
- Use a CMS-ready typed content model and shared components; do not hard-code repeated content into unrelated page layouts.

## 3. Implement with maintainable patterns

- Use Next.js App Router server components by default; add client-side JavaScript only for interactions that need it.
- Reuse `SiteShell`, navigation, footer, and design primitives. Use semantic HTML and clear page titles.
- Keep keyboard interaction, visible focus, accessible names, contrast, reduced motion, mobile navigation, and meaningful alt text in scope.
- Protect secrets and personal data. Never commit API keys, webhook URLs, credentials, or identifiable learner information.
- Keep automation read-only against production unless the task specifically calls for a safe test journey. Never submit live forms or mutate learner records during synthetic testing.

## 4. Use the right evidence for the claim

Keep these forms of evidence separate:

| Evidence | What it establishes | What it does not establish |
| --- | --- | --- |
| Unit or regression tests | Encoded behavior remains correct | Real-world usability |
| Production API/HTTP pilot | Public routes, status, and resources respond | Browser interaction quality or learning outcomes |
| Production browser pilot | A defined synthetic journey can complete in a browser | That representative people understand or prefer the design |
| Human usability session | Observed task behavior for the participants and tasks tested | Population-wide impact or program outcomes |
| Program outcome review | Measured, defined, consented outcomes for a reporting period | Outcomes beyond the population and method reported |

Only mark human validation complete when sessions actually happened and the date, participant profile/count, tasks, observations, and limitations are recorded without exposing personal data. Synthetic pilot success must never be described as participant or learner success.

## 5. Verification gates

For a normal product change:

1. `npm ci` when dependencies or the lockfile changed.
2. `npm test`.
3. `npm run build`.
4. `git diff --check`.
5. Check changed internal routes, external links, language parity, and accessibility-sensitive interactions.

For user journeys, also run the API/HTTP and Playwright browser pilots locally against the built production server. The GitHub production pilot repeats defined journeys after tagged deployment and daily, then reports API and browser results to Discord. A failed production pilot is a release-quality issue and must be investigated before marking that journey verified.

Report exactly which checks ran and any untested device, locale, assistive technology, or human-research case.

## 6. Commit and release

- Use Conventional Commit messages (`feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`).
- Review the staged diff and ensure it contains only the intended scope. Do not stage all files blindly when unrelated work exists.
- Cut a release only with a clean worktree and passing verification gates, using `npm run release:patch`, `npm run release:minor`, or `npm run release:major`.
- Push the verified branch and release tag with `git push --follow-tags origin main`. Do not rewrite published history.
- A version tag triggers CI and Netlify production deployment. Verify the deployment and production pilot before describing the change as live.
- Keep release notes concise and evidence-based.

## 7. Public roadmap and Discord bulletin

`data/development-progress.json` is the shared source used by the homepage/roadmap and Discord webhook workflow. Update it whenever priorities, milestone totals, status, current focus, or next-up work changes. Keep `updatedAt` current. The bulletin should accurately distinguish completed, in-progress, and planned work, and must not include secrets or private learner information.

## 8. Pull request / handoff record

Every change should state:

- User outcome and roadmap priority.
- What changed and routes/components affected.
- Acceptance evidence and commands run.
- Localization, accessibility, privacy, and low-bandwidth impact.
- Production/Discord pilot status when applicable.
- Remaining risks, human-validation needs, and next roadmap item.

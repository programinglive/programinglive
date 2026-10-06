# Development instructions for ProgramingLive

Read `DEVELOPMENT_STANDARD.md` before implementing or releasing work. This repository is a Next.js App Router site, not the old Vite prototype.

## Product and content rules

- Keep the English and Indonesian routes aligned. English pages live at `/...`; Indonesian pages live at `/id/...`.
- Treat the roadmap and bulletin JSON as the source of truth for current focus, next work, milestone counts, and statuses.
- Keep `data/development-progress.json` and `docs/IMPLEMENTATION_ROADMAP.md` synchronized. Automated checks enforce matching priority counts.
- Mark a milestone complete only when its acceptance evidence exists. Browser automation proves route and interaction behavior; it does not prove usability with representative people.
- Never invent learner, project, contribution, partner, donor, or impact numbers. Mark unavailable policy and report content as In Development.
- Preserve existing working features and inspect `git status` before editing. Do not overwrite or stage unrelated user changes.

## Implementation rules

- Prefer server components. Add client components only for interactions that require browser state.
- Put shared presentation primitives in `components/` and maintainable content in typed `data/` modules.
- Maintain keyboard access, semantic headings, visible focus, mobile layouts, and reduced-motion support.
- Keep learning pages usable without mandatory accounts and avoid video-first or heavy assets by default.
- Do not put secrets, API keys, webhook URLs, or private learner data in source, logs, commits, or public content.

## Completion evidence

- For product changes, run the relevant checks in `DEVELOPMENT_STANDARD.md` and record their outcome.
- Keep synthetic pilot results distinct from human usability sessions and program outcome evidence.
- If the plan changes, update the roadmap and `data/development-progress.json` in the same change; the Discord publisher consumes this same JSON source.
- Releases must run from a clean worktree and use the repository release script. Tagged CI is the production deployment path.

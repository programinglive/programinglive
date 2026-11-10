# ProgramingLive implementation roadmap

This roadmap turns ProgramingLive's public mission into verifiable product work. It is ordered by user trust and readiness first, then the core learner journey. Gemini is not a dependency for this work; Codex can make and review code changes without enabling Gemini APIs.

## P0 — Trustworthy foundations

Status: complete.

- [x] Fix the SentryResolve GitHub link on the Open Source page; the canonical repository is `programinglive/sentry-resolve`.
- [x] Correct the root README to describe the actual Next.js app and local commands.
- [x] Replace a stray control character in the Programs-page introduction with a readable separator.
- [x] Confirm this checkout has Netlify link metadata, a Next.js deployment config, and a reachable `origin/main` matching its baseline commit.
- [x] Add regression tests for the featured project and program links.
- [x] Verify in Netlify that linked site `7347be3b-6791-412a-911b-adea94a442ea` has `programinglive.com` attached and serves the tagged `v0.1.10` production release. Netlify Git integration is intentionally unset because GitHub Actions is the documented production deployment source.

Exit criteria: contributors can identify the production source, and prominent links/build instructions work before new features are added.
## P1 — Make Belajar a complete beginner journey

Status: complete.

Audit baseline: Belajar has its landing page, account sign-in/registration, and one static lesson preview; it has no full course catalog, enrollment, progress tracking, or social-feed routes/models. Belajar's public copy and the Programs cards now distinguish the preview from unavailable full-course/community features.

- [x] Define one audience and one measurable beginner outcome for the first learning track in `belajar/docs/first-learning-track.md` (draft; not published as an app course).
- [x] Publish a sequenced curriculum with prerequisites, short lessons, practical labs, and a capstone project.
- [x] Make each lab's starter code, expected result, and self-check steps available without a paywall.
- [x] Provide a clear path for questions or mentorship without collecting unnecessary personal data.
- [x] Track only useful, consented progress signals (for example, lesson completion and capstone submission).
Exit criteria: a new learner can start from the landing page, finish the first module, build and verify a small project, and understand what to do next.

## P2 — Turn Indonesia Emas 2045 into an actionable program

Status: complete.

- [x] Replace the countdown-only experience with a concrete program brief: target learners, goals, activities, timeline, and participation steps.
- [x] Start with one small pilot project tied to a real Indonesian community or business need.
- [x] Publish the work, learning materials, and outcomes openly; obtain consent before featuring participants.

Exit criteria: a visitor can join or contribute to a real pilot rather than only read a campaign message.

## P3 — Make open-source contribution welcoming and accurate

Status: complete.

- [x] Keep project descriptions, canonical repository URLs, installation instructions, and contribution guides synchronized.
- [x] Mark beginner-friendly issues and document a tested local setup for each featured repository.
- [x] Publish a simple project index that links learning tracks to relevant repositories and practical tasks.

Exit criteria: a first-time contributor can choose a project, run it locally, and make a small documented contribution.

## P4 — Operationalize Creator Studio and community collaboration

Status: complete.

- [x] Set a sustainable editorial cadence for accessible articles and videos, linked to the learning tracks.
- [x] Publish community stories and sprint briefs only when there is a real activity and participant consent.
- [x] Document how learners can get feedback, collaborate, and share portfolio-ready outcomes.

Exit criteria: each promoted community activity has a real destination, owner, next step, and published outcome.

## P5 — Measure whether the mission is working

Status: complete.

- [x] Review a small privacy-conscious set of outcomes monthly: learners starting/completing a track, projects shipped, contributions merged, and feedback received.
- [x] Use the results to improve the curriculum and remove inactive or misleading calls to action.
- [x] Keep personal assistant activity and learner/community data separate unless a clear, consented need is established.

Exit criteria: review outcomes monthly, use them to improve the curriculum, and remove misleading or inactive calls to action.

## P6 — Build an institutional-grade, dual-audience web experience

Status: complete.

- [x] Audit the existing website across positioning, information architecture, learner and institutional journeys, content, accessibility, performance, SEO, and maintainability.
- [x] Reposition the homepage around accessible technology education and a visible path from learning to opportunity.
- [x] Create dedicated About, Programs, Learn, Impact, Partners, Roadmap, Blog, and Contact destinations without removing the public bulletin or existing project links.
- [x] Establish a reusable design system and CMS-ready content model for programs, learner levels, partnerships, status, and impact progression.
- [x] Add an English-first language switcher, an initial Bahasa Indonesia homepage, structured metadata, sitemap, robots rules, keyboard focus, skip navigation, and reduced-motion support.
- [x] Add an automated production pilot that follows learner and institutional journeys through API/HTTP and a real browser, then reports the result to Discord.
- [x] Complete Bahasa Indonesia route parity across all core pages, including localized navigation, metadata, and sitemap entries.
- [x] Review Bahasa Indonesia terminology with learners and institutional stakeholders and record non-identifying evidence.
- [x] Test the redesigned journeys with representative learners and institutional visitors, then publish evidence-based improvements.

Exit criteria: a learner can identify where to start within ten seconds; an institution can understand the program and partnership model; a funder can understand stage and measurement; and a developer can find an appropriate contribution path.

## P7 — Migrate the Blogspot archive into the Creator Studio library

Status: complete.

- [x] Import every post from blog.programinglive.com into `content/posts/` with typed frontmatter, self-hosted cover images, and Netlify 301 redirects for each legacy permalink.
- [x] Publish the `/id/blog` Pustaka library with seven category filters and statically generated `/id/blog/<slug>` detail pages (GFM, stripped table-of-contents, sanitized code fences).
- [x] Merge the two curated near-duplicate pairs into their canonical posts, delete the redundant source files and image directories, and 301 their legacy permalinks straight to the canonical slugs.
- [x] Keep complementary duplicate pairs visible with `related` cross-links and include all 227 migrated routes in the sitemap.

Exit criteria: a legacy blogspot permalink resolves to the new library, all migrated content is lossless and self-hosted, and each duplicate pair resolves to a single canonical post.

## Daily Codex working agreement

1. Review the selected repository's Git status and existing changes before editing; preserve unrelated work.
2. Pick one roadmap item with a testable outcome and keep Gemini APIs disabled.
3. Run the verification gates in `DEVELOPMENT_STANDARD.md`; synthetic browser results do not count as human usability research.
4. Record the result, remaining risk, and next item here or in the project's activity notes.
5. Publish/deploy tagged releases only after the relevant checks pass and the release path is authorized; never change DNS as an incidental step.

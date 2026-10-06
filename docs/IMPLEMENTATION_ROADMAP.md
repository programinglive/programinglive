# ProgramingLive implementation roadmap

This roadmap turns ProgramingLive's public mission into verifiable product work. It is ordered by user trust and readiness first, then the core learner journey. Gemini is not a dependency for this work; Codex can make and review code changes without enabling Gemini APIs.

## P0 — Trustworthy foundations

Status: in progress.

- [x] Fix the SentryResolve GitHub link on the Open Source page; the canonical repository is `programinglive/sentry-resolve`.
- [x] Correct the root README to describe the actual Next.js app and local commands.
- [x] Replace a stray control character in the Programs-page introduction with a readable separator.
- [x] Confirm this checkout has Netlify link metadata, a Next.js deployment config, and a reachable `origin/main` matching its baseline commit.
- [x] Add regression tests for the featured project and program links.
- [ ] Verify in Netlify that the linked site has `programinglive.com` attached and is connected to this `origin` repository; the Netlify CLI is not installed in this environment.

Exit criteria: contributors can identify the production source, and prominent links/build instructions work before new features are added.

## P1 — Make Belajar a complete beginner journey

Audit baseline: Belajar has its landing page, account sign-in/registration, and one static lesson preview; it has no full course catalog, enrollment, progress tracking, or social-feed routes/models. Belajar's public copy and the Programs cards now distinguish the preview from unavailable full-course/community features.

- [x] Define one audience and one measurable beginner outcome for the first learning track in `belajar/docs/first-learning-track.md` (draft; not published as an app course).
- Publish a sequenced curriculum with prerequisites, short lessons, practical labs, and a capstone project.
- Make each lab's starter code, expected result, and self-check steps available without a paywall.
- Provide a clear path for questions or mentorship without collecting unnecessary personal data.
- Track only useful, consented progress signals (for example, lesson completion and capstone submission).

Exit criteria: a new learner can start from the landing page, finish the first module, build and verify a small project, and understand what to do next.

## P2 — Turn Indonesia Emas 2045 into an actionable program

- Replace the countdown-only experience with a concrete program brief: target learners, goals, activities, timeline, and participation steps.
- Start with one small pilot project tied to a real Indonesian community or business need.
- Publish the work, learning materials, and outcomes openly; obtain consent before featuring participants.

Exit criteria: a visitor can join or contribute to a real pilot rather than only read a campaign message.

## P3 — Make open-source contribution welcoming and accurate

- Keep project descriptions, canonical repository URLs, installation instructions, and contribution guides synchronized.
- Mark beginner-friendly issues and document a tested local setup for each featured repository.
- Publish a simple project index that links learning tracks to relevant repositories and practical tasks.

Exit criteria: a first-time contributor can choose a project, run it locally, and make a small documented contribution.

## P4 — Operationalize Creator Studio and community collaboration

- Set a sustainable editorial cadence for accessible articles and videos, linked to the learning tracks.
- Publish community stories and sprint briefs only when there is a real activity and participant consent.
- Document how learners can get feedback, collaborate, and share portfolio-ready outcomes.

Exit criteria: each promoted community activity has a real destination, owner, next step, and published outcome.

## P5 — Measure whether the mission is working

- Review a small privacy-conscious set of outcomes monthly: learners starting/completing a track, projects shipped, contributions merged, and feedback received.
- Use the results to improve the curriculum and remove inactive or misleading calls to action.
- Keep personal assistant activity and learner/community data separate unless a clear, consented need is established.

## Daily Codex working agreement

1. Review the selected repository's Git status and existing changes before editing; preserve unrelated work.
2. Pick one roadmap item with a testable outcome and keep Gemini APIs disabled.
3. Run the smallest relevant tests/build and check changed public links.
4. Record the result, remaining risk, and next item here or in the project's activity notes.
5. Do not publish/deploy or remove DNS records without an explicit deployment/cleanup decision.

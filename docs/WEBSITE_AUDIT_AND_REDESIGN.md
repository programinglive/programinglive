# ProgramingLive website audit and redesign plan

Updated: October 7, 2026  
Status: Phase 1 implemented; validation and bilingual parity remain.

## 1. Current website problems

The previous website had a sound lightweight Next.js foundation, a working Programs page, an Open Source index, and a valuable public development bulletin. Those elements should be retained.

The main gaps were strategic rather than cosmetic:

- The positioning described a programmer community instead of an accessible education-tech and social-impact platform.
- Learners and institutional visitors shared one undifferentiated journey.
- Vision, mission, sponsors, and program cards did not answer the institutional questions of objective, audience, delivery, output, measurement, stage, or funding opportunity.
- The homepage CTA hierarchy did not give a first-time learner an immediate starting point.
- The learner progression from digital foundations to projects, collaboration, and open source was absent.
- Impact, governance, team, partnership, and reporting information did not have dedicated destinations.
- Open source was presented as a project directory rather than a graduated learning pathway.
- The primary navigation represented the old homepage sections, not the product architecture.
- English metadata was Indonesia-centric and localization had no URL or switcher foundation.
- Content lived mostly inside page components, making future CMS adoption unnecessarily difficult.
- SEO lacked a sitemap, robots route, canonical/language alternates, and organization structured data.
- Accessibility needed skip navigation, explicit mobile-menu state, stronger focus behavior, and reduced-motion handling.
- The site made limited use of JavaScript, which is good for low bandwidth; that advantage should be preserved.

## 2. Recommended information architecture

Primary navigation:

1. About
2. Programs
3. Learn
4. Open Source
5. Impact
6. Partners
7. Roadmap

Secondary/footer navigation: Blog, Contact, Transparency, Privacy, Terms, Community Guidelines, GitHub, and language selection.

This keeps the primary navigation focused while preserving all required destinations.

## 3. Sitemap

```text
/
├── /about
│   └── #transparency
├── /programs
│   ├── #digital-foundations
│   ├── #programming-foundations
│   ├── #project-based-learning
│   ├── #open-source-pathway
│   ├── #mentor-development
│   └── #indonesia-emas-2045
├── /learn
├── /open-source
├── /impact
├── /partners
├── /roadmap
├── /blog
├── /contact
└── /id
```

Future localized routes should use `/id/...` parity rather than mixing languages within one page.

## 4. Homepage wireframe

```text
[Global navigation + EN/ID]
[Hero: positioning + Start Learning + Partner + Programs | pathway preview]
[Problem: access / practice / guidance / progression]
[Approach: Learn → Practice → Build → Collaborate → Contribute]
[Learner journey: Level 0 through Level 5]
[Programs: honest status + expected output]
[Impact: Early Pilot + measurable funnel]
[Partner categories + institutional CTA]
[Public development bulletin + roadmap progress]
[Structured footer]
```

## 5. Key user journeys

### Learner

Home → Start Learning → begin without an account → Context/Concept/Try/Result/Challenge → download starter files → optionally save progress → complete project → discover collaboration later.

### School or university

Home → Programs → inspect audience, duration, delivery, requirements, outputs, and metrics → Partners → prepare a scoped pilot inquiry.

### Donor, foundation, NGO, or CSR team

Home → problem and approach → program status → Impact → Transparency → Roadmap → partnership inquiry.

### Technology professional

Home → Open Source → filter by difficulty → inspect objective, stack, task readiness, maintainer, and status → repository contribution guide.

## 6. Design system recommendation

- Typography: system sans-serif to avoid font-download cost; 12/14/16/18/20/24/30/36/48/60/72 scale.
- Spacing: a consistent 4 px base expressed through Tailwind spacing utilities.
- Color: slate neutrals for trust and readability; cyan as the single functional accent; emerald/amber/slate for status.
- Buttons: primary dark, secondary outlined, and light-on-dark variants; minimum 44 px target height.
- Cards: 16–32 px radius depending on hierarchy; borders before shadows; no decorative motion dependency.
- Status: Active pilot, In development, Planned, Complete, and In progress always use both text and color.
- Layout: 1280 px maximum container, mobile-first padding, strong grid, and generous whitespace.
- Accessibility: visible focus, semantic landmarks, one H1, ordered progression, labeled forms, contrast-conscious colors, and reduced-motion support.

## 7. Content recommendations

- Lead with the learning-to-opportunity positioning, not national aspiration alone.
- Separate verified current activity from future ambition with explicit status labels.
- Publish program briefs with objective, learners, duration, outcomes, delivery, requirements, mentors, output, metrics, and partnership needs.
- Keep lessons text-first and include estimated data use after an actual measurement pipeline exists.
- Publish real student work, screenshots, reports, partners, and testimonials only after consent and verification.
- Explain “Indonesia Emas 2045” in international language every time it is introduced.
- Use the Blog for pilot findings, curriculum notes, program reports, and open-source updates—not generic SEO content.

## 8. Component architecture

```text
RootLayout
├── SiteShell
│   ├── Navbar
│   ├── page content
│   └── Footer
├── Container
├── PageHero
├── SectionHeading / Eyebrow
├── ButtonLink
├── StatusBadge
└── domain components (next phase)
    ├── ProgramCard / ProgramDetail
    ├── ImpactFunnel / MetricCard
    ├── RoadmapTimeline
    ├── LessonFrame / HintDisclosure
    └── PartnershipForm
```

Shared domain content is now stored in `data/site-content.ts`; the development bulletin remains sourced from `data/development-progress.json`.

## 9. Technical implementation plan

1. Phase 1: positioning, information architecture, homepage, core pages, design primitives, metadata, sitemap, accessibility baseline, and bulletin synchronization.
   A production pilot now verifies core API/HTTP routes and follows learner and institutional browser journeys after releases and on a daily schedule, with results reported to Discord.
2. Phase 2: complete `/id` route parity, replace mail-client partnership submission with a secure server-side workflow, and add validated lesson data-usage reporting.
3. Phase 3: connect typed content adapters to a CMS or repository-based content source without changing presentation components.
4. Phase 4: add consent-based progress, privacy-respecting product analytics, error monitoring, and impact dashboards.
5. Phase 5: validate with representative learners and institutions, then iterate from observed tasks rather than opinion alone.

## 10. Performance improvements

- Preserve server-rendered pages and use client JavaScript only for navigation state and project filtering.
- Use system fonts, no autoplay media, no large hero photography, and no unnecessary animation.
- Keep content text-first and lazy-load future screenshots below the fold.
- Set explicit image dimensions and migrate logo rendering to `next/image` when visual QA confirms crop behavior.
- Add image compression and performance budgets before introducing learner/project media.
- Monitor Core Web Vitals on production; target LCP under 2.5 s, INP under 200 ms, and CLS under 0.1 at the 75th percentile.

## 11. Accessibility improvements

Phase 1 adds skip navigation, semantic landmarks, labeled controls, 44 px interactive targets, `aria-expanded`, `aria-current`, progress semantics, focus-visible states, heading hierarchy, and reduced-motion behavior.

Next work: automated axe checks, screen-reader walkthroughs, zoom/reflow testing at 200–400%, form error summaries, localized language attributes for all Indonesian routes, and WCAG 2.2 AA contrast verification against final brand colors.

## 12. SEO strategy

- Descriptive, page-specific metadata and canonical URLs.
- English/Indonesian language alternates.
- Open Graph and Twitter summary data.
- XML sitemap and robots policy generated by Next.js.
- `EducationalOrganization` structured data without unverified addresses, partners, or awards.
- Future `Course`, `LearningResource`, `Article`, and `BreadcrumbList` schema only when corresponding content is real and complete.
- Content clusters around learning pathways, program methodology, project briefs, pilot findings, and open-source contribution.

## 13. Internationalization strategy

- English remains the canonical primary language for international stakeholders.
- Bahasa Indonesia uses `/id` URLs; the language switcher is available globally.
- Phase 1 includes the Indonesian homepage; core-page parity is explicitly tracked as incomplete.
- Store future copy in locale-keyed content documents and avoid constructing sentences from fragments.
- Format dates, numbers, and status text per locale; set the correct page-level language attribute when nested locale layouts are added.
- Review translations with native speakers and program practitioners rather than relying only on machine translation.

## 14. Suggested database and content models

The marketing layer should consume typed content APIs even before a CMS is selected.

- `Program`: id, locale, title, subtitle, status, objective, audiences, duration, outcomes, delivery, requirements, mentorRequirements, outputs, metrics, partnershipOptions, links, timestamps.
- `LearningPath`: id, locale, title, level, prerequisites, outcomes, orderedLessonIds, accessRequirements, status.
- `Lesson`: id, locale, context, concept, trySteps, expectedResult, challenge, hints, solution, estimatedBytes, downloadableAssets, version, status.
- `Project`: id, locale, type, difficulty, objective, stack, tasks, contributionGuide, repository, maintainers, status.
- `RoadmapItem`: id, priority, title, summary, status, milestones, targetPeriod, evidenceLinks.
- `ImpactMetricDefinition`: id, name, definition, unit, collectionMethod, consentBasis, reportingPeriod, limitations.
- `ImpactObservation`: metricId, period, value, scope, source, reviewedAt; never publish unreviewed values.
- `Partner`: private operational record by default; public name/logo only with explicit approval.
- `TeamMember`, `Report`, `Article`, and `Inquiry` with publish/consent state and audit timestamps.

## 15. Development roadmap

### Now — foundation release

- Ship the new dual-audience homepage and core routes.
- Keep status language honest and preserve the public bulletin.
- Establish performance, accessibility, SEO, and content-model foundations.

### Next — validation and parity

- Complete Bahasa Indonesia parity.
- Run task-based usability checks with new learners and institutional visitors.
- Implement a secure partnership inquiry backend with abuse protection and retention rules.
- Add automated accessibility and production performance checks.

### Then — product integration

- Connect program and lesson content to a maintainable publishing workflow.
- Add consent-based learner progress and project submission.
- Publish verified pilot reporting and impact definitions.
- Link appropriate learning milestones to beginner-ready open-source tasks.

### Later — measured scale

- Support school/community cohorts and mentor operations.
- Publish annual reports and governance policies after review.
- Expand regional and international collaboration based on validated delivery evidence.

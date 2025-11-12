# ProgramingLive Platform – Product Requirements Document (PRD)

## 1. Overview
- **Product Name:** ProgramingLive Web Experience
- **Author:** Cascade (on behalf of ProgramingLive team)
- **Last Updated:** 2025-11-12
- **Status:** Draft v1

ProgramingLive is building a modern, elegant web experience to spotlight programs that nurture Indonesian software talent, attract new learners, and engage partners. The site should communicate mission/vision, guide visitors to core programs, and provide social proof that ProgramingLive delivers real impact.

## 2. Problem Statement
Aspiring developers in Indonesia need a trustworthy source of curated learning paths, hands-on experience, and community support. Businesses and partners need a clear way to understand ProgramingLive’s value and collaborate. Existing communication channels are fragmented and lack a modern presentation, reducing credibility and conversion.

## 3. Goals & Success Metrics
| Goal | Metric | Target |
| --- | --- | --- |
| Increase learner sign-ups | CTA clicks to program intake form | +40% MoM after launch |
| Grow partner pipeline | Sponsor inquiry submissions | 10 qualified inquiries/quarter |
| Improve brand perception | Post-visit survey rating (4-point scale) | ≥3.5 average |
| Boost content engagement | Average session duration | ≥3 minutes |

## 4. Target Audience & Personas
1. **Aspiring Developer (Primary)** – Students or early-career professionals seeking structured guidance and community.
2. **Career Switcher** – Professionals in other fields exploring software careers; value practical outcomes and mentorship.
3. **Ecosystem Partner** – Companies, schools, and NGOs looking to collaborate on programs, sponsorships, or hiring.
4. **Internal Team** – ProgramingLive staff who update content and use insights for outreach.

## 5. Product Scope
### In Scope
- Responsive marketing site with clear navigation to Vision, Mission, Programs, Sponsors, and Join CTA.
- Highlight of signature programs (Belajar Program, Indonesia Emas 2045, Open Projects, Creator Studio).
- Community value proposition cards with icons and concise copy.
- Sponsor showcase and partnership call-to-action.
- Smooth scrolling navigation, anchored sections, and modern UI built with Vite + Tailwind CSS.
- Favicon set, branded metadata, and primary hero featuring ProgramingLive logo.

### Out of Scope (Phase 1)
- User authentication or dashboards.
- Program enrollment forms hosted on-site (link out to existing tools for now).
- Localization (single language release).
- Complex CMS integration (static content managed via code repository).

## 6. Competitive Landscape
- **Dicoding** – Structured learning platform with national partnerships.
- **BuildWith Angga** – Localized video courses.
- **FreeCodeCamp** – Global community-driven learning resources.
ProgramingLive differentiates by blending curated learning paths, community sprints, and national initiatives tailored to Indonesian talent.

## 7. Product Experience
### Information Architecture
1. Hero – brand statement, value proposition, primary CTAs (Explore Programs, Stories).
2. Why Builders Choose Us – three key differentiators.
3. Vision, Mission, Community cards – highlight strategic pillars.
4. Signature Programs – grid with key initiatives and community wins CTA.
5. Sponsors & Partners – logos, collaboration points, partner CTA.
6. Footer – policies, guidelines, contact.

### User Journeys
- **Learner Journey:** Land → Read hero → Scan differentiators → Explore Programs CTA → Review program cards → Navigate to upcoming sprints CTA.
- **Partner Journey:** Land → Scroll to Sponsors section via nav → Review value list → Click “Partner with us” CTA.
- **Returning Member Journey:** Use nav anchors to jump to relevant section; check new sprint announcements.

## 8. Feature Requirements
| ID | Feature | Description | Priority |
| --- | --- | --- | --- |
| F1 | Hero Section | Gradient background, brand logo, headline, supporting copy, primary/secondary CTAs | Must-have |
| F2 | Smooth Navigation | Top nav with logo image, anchor links, smooth scrolling | Must-have |
| F3 | Differentiator Card | “Why builders choose us” card with three panels | Must-have |
| F4 | Pillar Cards | Vision, Mission, Community cards with icons and bullet insights | Must-have |
| F5 | Programs Grid | Four program cards plus community wins CTA with actionable button | Must-have |
| F6 | Sponsors Section | Logo placeholders, partnership bullets, CTA button | Must-have |
| F7 | Footer | Copyright, quick links | Must-have |
| F8 | Responsive Layout | Works on mobile, tablet, desktop breakpoints | Must-have |
| F9 | Branding Assets | ProgramingLive logo, favicon set | Must-have |
| F10 | Performance Baseline | Core Web Vitals LCP <2.5s, responsive images | Should-have |
| F11 | Content Management Guide | Documentation for updating copy in `main.ts` | Should-have |

## 9. Content Strategy
- Tone: Confident, supportive, community-oriented.
- Copy updates stored within TypeScript template for now; consider markdown or headless CMS in future phases.
- Visual cues via icons and gradient overlays to provide premium feel while retaining simplicity.

## 10. Design Principles
1. **Clarity first** – Use whitespace and typographic hierarchy to guide scanning.
2. **Human-centered storytelling** – Highlight community outcomes instead of abstract metrics.
3. **Consistent rhythm** – Rounded cards, subtle borders, and soft grayscale palette.
4. **Performance aware** – Avoid heavy assets; leverage Tailwind for utility-first styling.

## 11. Technical Requirements
- Framework: Vite + TypeScript + Tailwind CSS.
- Hosting: Netlify with Node 20 build environment (per `netlify.toml`).
- Responsive breakpoints with mobile-first approach.
- Anchor navigation should work without JS frameworks beyond vanilla DOM.
- Favicon assets placed in `public/` directory; manifest references up to date.
- CI/CD: Use `npm run build` for production bundling.

## 12. Analytics & Instrumentation (Phase 2)
- Integrate privacy-respecting analytics (e.g., Plausible) to track CTA clicks and scroll depth.
- Event naming convention: `cta_explore_programs_click`, `cta_partner_with_us_click`, etc.

## 13. Roadmap & Timeline
| Phase | Deliverables | Owner | Target |
| --- | --- | --- | --- |
| MVP (v1) | Current single-page experience with anchors, icons, CTAs, favicon | Frontend team | Nov 2025 |
| Phase 1.1 | Analytics integration, program CTA links to forms, responsive QA | Growth + Frontend | Dec 2025 |
| Phase 1.2 | Add community stories carousel, sponsor case studies, localized content | Content + Design | Q1 2026 |
| Phase 2 | Transition to CMS-backed content, multi-language support | Product + Engineering | H2 2026 |

## 14. Risks & Mitigations
- **Content freshness risk:** Without CMS, copy may stale.
  - *Mitigation:* Define quarterly content review cadence with Git-based updates.
- **Resource bandwidth:** Limited design/dev capacity could delay enhancements.
  - *Mitigation:* Prioritize MVP scope and document backlog.
- **Partner validation:** Need real sponsor testimonials for credibility.
  - *Mitigation:* Collect 2–3 case studies before Phase 1.2 launch.

## 15. Dependencies
- Availability of accurate program descriptions and imagery.
- Marketing team approval on copy and branding.
- Sponsor commitments for partnership section updates.

## 16. Stakeholders
- **Product Lead:** ProgramingLive founder or delegated PM.
- **Design:** External/contract designer (current UI updates).
- **Engineering:** Frontend developer maintaining Vite project.
- **Content:** Community managers and program leads.

## 17. Approvals
- Draft approval: Product Lead & Design Lead.
- Release sign-off: Product Lead, Engineering Lead, Marketing Lead.

## 18. Open Questions
1. What is the exact flow after “Explore Programs” — link to Notion form, Google Form, or upcoming portal?
2. Do we need localized Bahasa Indonesia version for initial release?
3. Should partner CTAs integrate with CRM (e.g., HubSpot form)?
4. Are there upcoming events or launches that should be promoted in the hero?

---
**Next Steps:** Confirm CTA destinations, gather real community stories, and set up analytics instrumentation for the MVP release.

# Mission Measurement & Governance Runbook

This runbook establishes how ProgramingLive empirically evaluates its social-impact and education mission, enforces strict privacy boundaries, and maintains integrity across calls-to-action and curriculum materials.

## 1. Monthly Outcome Review Cadence

Reviews occur on the **first Monday of each month** to evaluate real progression without attention vanity metrics:

1. **Learning Track Completion:**
   - Evaluated from consented signals stored in Belajar (`/api/learning-tracks/first-web-page/progress`).
   - Only data from learners who explicitly checked opt-in consent is recorded.
   - Measures progression through Lessons 1, 2, 3, and 4.

2. **Practical Projects Shipped:**
   - Count of personal web page capstones meeting the responsive definition of done (tested on 375px and 1280px viewports without horizontal scrolling, accessible semantics).

3. **Open-Source Contributions Merged:**
   - Tally of merged pull requests across public ProgramingLive repositories (`programinglive`, `belajar`, `commiter`, `dev-workflow-mcp-server`, `sentry-resolve`).

4. **Learner & Mentor Feedback:**
   - Review of questions, friction points, and curriculum suggestions raised on GitHub Discussions (`https://github.com/programinglive/belajar/discussions`).

## 2. Curriculum Improvement Loop

- When learners repeatedly report friction in a specific lesson (e.g., CSS layout or viewport testing), the curriculum is updated directly with clearer text hints and starter examples.
- No lesson is made more complex without beginner validation.

## 3. Call-to-Action (CTA) Integrity Policy

- **Zero-Tolerance for Broken CTAs:** Every button or link on ProgramingLive must lead to an operational destination.
- Inactive programs, unreleased courses, or unavailable tools must be explicitly badged as `Planned` or `In development`, never presented with clickable buttons that lead to dead-ends.

## 4. Personal Assistant & Telemetry Data Boundaries

- **Strict Data Segregation:** Internal developer assistant activity, local MCP server contexts, and development logs remain strictly segregated from learner and community data.
- Learner progress records in Belajar store minimal, consented signals only (lesson numbers and capstone submission notes), with no tracking of personal assistant queries or surveillance telemetry.

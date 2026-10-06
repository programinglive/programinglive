import type { Metadata } from 'next'
import SiteShell from '../../components/SiteShell'
import { Container, PageHero, SectionHeading } from '../../components/ui'
import {
  governancePolicies,
  impactFunnel,
  monthlyOutcomeReviews,
} from '../../data/site-content'

export const metadata: Metadata = {
  title: 'Impact & Measurement Governance',
  description: 'How ProgramingLive measures learner progression, reviews outcomes monthly, and enforces strict privacy and CTA governance.',
  alternates: { canonical: '/impact', languages: { en: '/impact', id: '/id/impact' } },
}

export default function ImpactPage() {
  const metrics = [
    'Learners reached',
    'Active learners',
    'Lessons completed',
    'Projects created',
    'Open-source contributions',
    'Active mentors',
    'Institutions partnered',
    'Regions reached',
    'Course completion rate',
    'Learners progressing into projects',
    'Learners becoming mentors',
  ]

  return (
    <SiteShell>
      <PageHero
        eyebrow="Impact & Governance"
        title="Measure progression, not attention"
        description="Current Stage: Early Pilot. We validate the learning model through small-scale pilots before expanding to additional communities. No totals are presented as accomplished facts before measurement baselines are verified."
      />
      <Container className="py-14 sm:py-20">
        {/* Progression Funnel */}
        <SectionHeading
          eyebrow="Impact funnel"
          title="A measurable pathway from learning to contribution"
          description="The funnel gives program teams and partners a shared way to understand where learners progress and where additional support is required."
        />
        <ol className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {impactFunnel.map((item, index) => (
            <li key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-900">
                {index + 1}
              </span>
              <span className="font-medium text-slate-800">{item}</span>
            </li>
          ))}
        </ol>

        {/* Monthly Outcome Review Cadence */}
        <section id="monthly-reviews" className="mt-16 sm:mt-24">
          <SectionHeading
            eyebrow="Operational review cycle"
            title="Monthly privacy-conscious outcome reviews"
            description={governancePolicies.cadence}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {monthlyOutcomeReviews.map((item) => (
              <article key={item.metric} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-950">{item.metric}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Metrics Framework */}
        <section className="mt-16 sm:mt-24">
          <SectionHeading
            eyebrow="Measurement framework"
            title="Metrics we intend to report"
            description="No totals are shown until collection methods, consent, definitions, and data quality have been validated."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-900">{metric}</p>
                <p className="mt-2 text-sm text-slate-500">Baseline in development</p>
              </div>
            ))}
          </div>
        </section>

        {/* Governance & Data Separation */}
        <section id="governance-policy" className="mt-16 sm:mt-24 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Governance & Data Boundaries</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Continuous Improvement, Verified CTAs, and Data Segregation</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-cyan-300">Curriculum Improvement Loop</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{governancePolicies.curriculumImprovement}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-cyan-300">Call-to-Action Integrity</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{governancePolicies.ctaVerification}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-cyan-300">Personal Assistant Data Boundary</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{governancePolicies.dataSeparation}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Core Reporting Principles</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <li>Use consented, necessary data only.</li>
              <li>Publish definitions alongside metrics.</li>
              <li>Separate participation from meaningful progression.</li>
              <li>Report limitations and incomplete data honestly.</li>
            </ul>
          </div>
        </section>
      </Container>
    </SiteShell>
  )
}

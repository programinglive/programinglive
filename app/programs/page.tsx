import type { Metadata } from 'next'
import SiteShell from '../../components/SiteShell'
import { ButtonLink, Container, PageHero, StatusBadge } from '../../components/ui'
import { programs } from '../../data/site-content'

export const metadata: Metadata = { title: 'Programs', description: 'Explore ProgramingLive learning programs, delivery models, outcomes, metrics, and partnership opportunities.' }

export default function ProgramsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Programs" title="Learning programs designed for progression" description="ProgramingLive develops pathways from digital foundations to practical projects, collaboration, and open-source contribution. Status labels show what is live, in development, or planned." />
      <Container className="py-14 sm:py-20">
        <div className="grid gap-6">
          {programs.map((program) => (
            <article id={program.slug} key={program.slug} className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div className="max-w-3xl"><StatusBadge status={program.status} /><h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{program.title}</h2>{program.subtitle && <p className="mt-1 font-medium text-cyan-800">{program.subtitle}</p>}<p className="mt-4 leading-7 text-slate-600">{program.objective}</p></div>
                {program.href && <ButtonLink href={program.href} variant="secondary" external={program.href.startsWith('http')}>Explore program</ButtonLink>}
              </div>
              <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ['Target learners', program.learners], ['Duration', program.duration], ['Delivery model', program.delivery], ['Technology requirements', program.requirements], ['Mentor requirements', program.mentors], ['Project output', program.output], ['Impact metrics', program.metrics], ['Partnership opportunities', program.partnership],
                ].map(([term, value]) => <div key={term} className="bg-slate-50 p-4"><dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{term}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{value}</dd></div>)}
              </dl>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-cyan-950 p-8 text-white sm:p-10"><h2 className="text-2xl font-semibold">Build or support a pilot with us</h2><p className="mt-3 max-w-2xl leading-7 text-cyan-50/80">We welcome scoped conversations with institutions that can help validate delivery, access, curriculum quality, and learner outcomes.</p><div className="mt-6"><ButtonLink href="/partners" variant="light">Discuss a partnership</ButtonLink></div></div>
      </Container>
    </SiteShell>
  )
}

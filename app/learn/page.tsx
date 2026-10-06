import type { Metadata } from 'next'
import SiteShell from '../../components/SiteShell'
import { ButtonLink, Container, PageHero, SectionHeading } from '../../components/ui'
import { learnerLevels } from '../../data/site-content'

export const metadata: Metadata = { title: 'Learn', description: 'Start a clear, beginner-friendly technology learning pathway with practical projects and low-bandwidth access.' }

export default function LearnPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Learn" title="Start with the next understandable step" description="Learning is text-first, mobile-friendly, and available before account creation. Build confidence through context, short concepts, practice, visible results, and an achievable challenge."><ButtonLink href="https://belajar.programinglive.com" external>Start the free track</ButtonLink></PageHero>
      <Container className="py-14 sm:py-20">
        <SectionHeading eyebrow="Progression" title="From digital foundations to contribution" description="Git and open source appear later in the journey, after learners have built the technical and project foundations to use them confidently." />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{learnerLevels.map((item) => <li key={item.level} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-xs font-bold uppercase tracking-widest text-cyan-700">{item.level}</p><h2 className="mt-2 text-xl font-semibold">{item.title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p></li>)}</ol>
        <section className="mt-16 grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Every lesson</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Context → Concept → Try → Result → Challenge</h2><p className="mt-4 leading-7 text-slate-600">Lessons connect a practical need to one focused concept, let learners change something immediately, show the result, and finish with a small independent challenge.</p></div>
          <div className="rounded-2xl bg-slate-950 p-6 text-white"><p className="text-sm font-semibold text-cyan-300">When a learner is stuck</p><ol className="mt-4 space-y-3 text-sm"><li className="rounded-xl bg-white/10 p-3">1. Hint that points to the relevant concept</li><li className="rounded-xl bg-white/10 p-3">2. More specific second hint</li><li className="rounded-xl bg-white/10 p-3">3. A related example</li><li className="rounded-xl bg-white/10 p-3">4. Full solution, only when requested</li></ol></div>
        </section>
        <section className="mt-16"><SectionHeading eyebrow="Access principles" title="Designed for limited connectivity and shared devices" /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{['No account required to begin', 'Text-first and compressed assets', 'Downloadable starter materials', 'Estimated lesson data usage planned'].map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700">{item}</div>)}</div></section>
      </Container>
    </SiteShell>
  )
}

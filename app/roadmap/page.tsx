import type { Metadata } from 'next'
import SiteShell from '../../components/SiteShell'
import { Container, PageHero, StatusBadge } from '../../components/ui'
import developmentProgress from '../../data/development-progress.json'

export const metadata: Metadata = { title: 'Public Roadmap', description: 'Completed, in-progress, and planned ProgramingLive product and program work.' }

const timeline = [
  { year: '2026', title: 'Platform foundations and initial learning pilots', status: 'In progress' as const },
  { year: '2027', title: 'School and community pilots; mentor network development', status: 'Planned' as const },
  { year: '2028', title: 'Regional expansion and institutional partnerships', status: 'Planned' as const },
  { year: '2029+', title: 'Scalable program deployment, open learning ecosystem, and international collaboration', status: 'Planned' as const },
]

export default function RoadmapPage() {
  return <SiteShell><PageHero eyebrow="Public roadmap" title="What is complete, what is moving, and what comes next" description={`Last updated ${developmentProgress.updatedAt}. This roadmap is intentionally evidence-based: planned initiatives are not presented as active programs.`} /><Container className="py-14 sm:py-20"><section><h2 className="text-2xl font-semibold">Product priorities</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{developmentProgress.goals.map((goal) => <article key={goal.priority} className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-widest text-cyan-700">{goal.priority}</p><h3 className="mt-2 text-lg font-semibold">{goal.title}</h3></div><StatusBadge status={goal.status as 'Complete' | 'In progress' | 'Planned'} /></div><p className="mt-4 text-sm leading-6 text-slate-600">{goal.summary}</p><div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-cyan-700" style={{ width: `${Math.round((goal.completed / goal.total) * 100)}%` }} /></div><p className="mt-2 text-xs text-slate-500">{goal.completed} of {goal.total} milestones complete</p></article>)}</div></section><section className="mt-16"><h2 className="text-2xl font-semibold">Long-term direction</h2><ol className="mt-6 border-l-2 border-cyan-200 pl-7">{timeline.map((item) => <li key={item.year} className="relative pb-10 last:pb-0"><span className="absolute -left-[2.15rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-cyan-700" /><p className="text-xs font-bold uppercase tracking-widest text-cyan-700">{item.year}</p><h3 className="mt-2 text-lg font-semibold">{item.title}</h3><div className="mt-3"><StatusBadge status={item.status} /></div></li>)}</ol></section><section className="mt-16 rounded-3xl bg-slate-950 p-8 text-white"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Current focus</p><p className="mt-3 text-xl font-semibold">{developmentProgress.currentFocus}</p><p className="mt-6 text-xs font-semibold uppercase tracking-widest text-slate-400">Up next</p><p className="mt-2 text-slate-200">{developmentProgress.nextUp}</p><a href={developmentProgress.roadmapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-white">View the source roadmap on GitHub ↗</a></section></Container></SiteShell>
}

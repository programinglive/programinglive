import type { Metadata } from 'next'
import SiteShell from '../../../components/SiteShell'
import { Container, PageHero, StatusBadge } from '../../../components/ui'
import developmentProgress from '../../../data/development-progress.json'

export const metadata: Metadata = {
  title: 'Roadmap Publik',
  description: 'Rencana kerja produk dan program ProgramingLive yang telah selesai, sedang dikerjakan, dan direncanakan.',
  alternates: { canonical: '/id/roadmap', languages: { en: '/roadmap', id: '/id/roadmap' } },
}

const timeline = [
  { year: '2026', title: 'Fondasi platform dan pilot pembelajaran awal', status: 'Sedang berjalan' as const },
  { year: '2027', title: 'Pilot sekolah dan komunitas; pengembangan jaringan mentor', status: 'Direncanakan' as const },
  { year: '2028', title: 'Ekspansi regional dan kemitraan kelembagaan', status: 'Direncanakan' as const },
  { year: '2029+', title: 'Penerapan program berskala luas, ekosistem belajar terbuka, dan kolaborasi internasional', status: 'Direncanakan' as const },
]

export default function IndonesianRoadmapPage() {
  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Roadmap publik"
        title="Apa yang sudah selesai, sedang berjalan, dan rencana berikutnya"
        description={`Terakhir diperbarui ${developmentProgress.updatedAt}. Roadmap ini disusun secara jujur berdasarkan bukti verifikasi: rencana masa depan tidak ditampilkan seolah-olah sudah selesai.`}
      />
      <Container className="py-14 sm:py-20">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Prioritas produk</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {developmentProgress.goals.map((goal) => (
              <article key={goal.priority} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">{goal.priority}</p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{goal.title}</h3>
                  </div>
                  <StatusBadge status={goal.status as 'Complete' | 'In progress' | 'Planned'} />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{goal.summary}</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full bg-cyan-700" style={{ width: `${Math.round((goal.completed / goal.total) * 100)}%` }} />
                </div>
                <p className="mt-2 text-xs text-slate-500">{goal.completed} dari {goal.total} target selesai</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-slate-900">Arah jangka panjang</h2>
          <ol className="mt-6 border-l-2 border-cyan-200 pl-7">
            {timeline.map((item) => (
              <li key={item.year} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.15rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-cyan-700" />
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <div className="mt-3">
                  <StatusBadge status={item.status} />
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 rounded-3xl bg-slate-950 p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Fokus saat ini</p>
          <p className="mt-3 text-xl font-semibold">{developmentProgress.currentFocus}</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-slate-400">Langkah berikutnya</p>
          <p className="mt-2 text-slate-200">{developmentProgress.nextUp}</p>
          <a
            href={developmentProgress.roadmapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-white"
          >
            Lihat dokumen roadmap kode sumber di GitHub ↗
          </a>
        </section>
      </Container>
    </SiteShell>
  )
}

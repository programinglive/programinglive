import type { Metadata } from 'next'
import SiteShell from '../../../components/SiteShell'
import { ButtonLink, Container, PageHero, StatusBadge } from '../../../components/ui'
import { programsId } from '../../../data/site-content'

export const metadata: Metadata = {
  title: 'Program Pembelajaran',
  description: 'Program pembelajaran ProgramingLive, model pengiriman, hasil proyek nyata, metrik dampak, dan peluang kemitraan institusi.',
  alternates: { canonical: '/id/programs', languages: { en: '/programs', id: '/id/programs' } },
}

export default function IndonesianProgramsPage() {
  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Program"
        title="Program pembelajaran yang dirancang untuk perkembangan bertahap"
        description="ProgramingLive mengembangkan jalur dari fondasi digital menuju proyek nyata, kolaborasi tim, dan kontribusi open source. Label status memperlihatkan mana yang aktif diuji coba (pilot), sedang dikembangkan, atau direncanakan."
      />
      <Container className="py-14 sm:py-20">
        <div className="grid gap-6">
          {programsId.map((program) => (
            <article id={program.slug} key={program.slug} className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div className="max-w-3xl">
                  <StatusBadge status={program.status} />
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{program.title}</h2>
                  {program.subtitle && <p className="mt-1 font-medium text-cyan-800">{program.subtitle}</p>}
                  <p className="mt-4 leading-7 text-slate-600">{program.objective}</p>
                </div>
                {program.href && (
                  <ButtonLink href={program.href} variant="secondary" external={program.href.startsWith('http')}>
                    Jelajahi program
                  </ButtonLink>
                )}
              </div>
              <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ['Sasaran pelajar', program.learners],
                  ['Durasi', program.duration],
                  ['Model pembelajaran', program.delivery],
                  ['Kebutuhan perangkat & akses', program.requirements],
                  ['Dukungan mentor / fasilitator', program.mentors],
                  ['Hasil karya proyek', program.output],
                  ['Metrik evaluasi dampak', program.metrics],
                  ['Kebutuhan kemitraan', program.partnership],
                ].map(([term, value]) => (
                  <div key={term} className="bg-slate-50 p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{term}</dt>
                    <dd className="mt-2 text-sm leading-6 text-slate-700">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-cyan-950 p-8 text-white sm:p-10">
          <h2 className="text-2xl font-semibold">Bangun atau dukung program pilot bersama kami</h2>
          <p className="mt-3 max-w-2xl leading-7 text-cyan-50/80">
            Kami menyambut penjajakan kemitraan terarah bersama sekolah, kampus, dinas, yayasan, dan korporasi untuk menguji efektivitas pengiriman, akses materi, kualitas kurikulum, dan capaian nyata pelajar.
          </p>
          <div className="mt-6">
            <ButtonLink href="/id/partners" variant="light">Diskusikan kemitraan</ButtonLink>
          </div>
        </div>
      </Container>
    </SiteShell>
  )
}

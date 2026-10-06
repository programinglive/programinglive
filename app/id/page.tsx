import type { Metadata } from 'next'
import SiteShell from '../../components/SiteShell'
import { ButtonLink, Container, Eyebrow, SectionHeading, StatusBadge } from '../../components/ui'
import {
  approachStepsId,
  impactFunnelId,
  learnerLevelsId,
  partnerCategoriesId,
  programsId,
} from '../../data/site-content'
import developmentProgress from '../../data/development-progress.json'

export const metadata: Metadata = {
  title: 'Membangun Jalur dari Belajar Menuju Kesempatan',
  description:
    'Pendidikan pemrograman yang mudah diakses, keterampilan teknologi praktis, pembelajaran berbasis proyek, dan kesempatan kolaborasi bagi pelajar di Indonesia.',
  alternates: { canonical: '/id', languages: { en: '/', id: '/id' } },
}

export default function IndonesianHomePage() {
  const completed = developmentProgress.goals.reduce((total, goal) => total + goal.completed, 0)
  const milestones = developmentProgress.goals.reduce((total, goal) => total + goal.total, 0)
  const progress = Math.round((completed / milestones) * 100)

  return (
    <SiteShell locale="id">
      <section className="overflow-hidden border-b border-slate-200 bg-white py-14 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>Pembelajaran terbuka · Keterampilan praktis · Kesempatan bersama</Eyebrow>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Membangun Jalur dari Belajar Menuju Kesempatan
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              ProgramingLive menyediakan pendidikan pemrograman yang mudah diakses, keterampilan teknologi praktis,
              pembelajaran berbasis proyek, dan kesempatan kolaborasi bagi pelajar dengan akses terbatas ke pendidikan teknologi formal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="https://belajar.programinglive.com" external>Mulai Belajar</ButtonLink>
              <ButtonLink href="/id/partners" variant="secondary">Bermitra dengan Kami</ButtonLink>
              <ButtonLink href="/id/programs" variant="secondary">Lihat Program Kami</ButtonLink>
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Anda dapat mulai belajar tanpa membuat akun. Akun hanya diperlukan saat Anda ingin menyimpan progres atau mengirim karya proyek.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300/40 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Tahapan jalur belajar</p>
            <ol className="mt-6 space-y-3">
              {approachStepsId.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">{index + 1}</span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Mengapa ini penting"
            title="Akses ke pendidikan teknologi masih belum merata"
            description="Banyak pelajar dapat mengakses informasi di internet, namun belum menemukan jalur pembelajaran terpadu yang memadukan fondasi, latihan berulang, umpan balik, proyek, dan kolaborasi. Kesenjangan ini semakin nyata di luar kota besar dan bagi mereka yang memiliki keterbatasan kuota atau berbagi perangkat."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Akses', 'Pembelajaran teknologi yang relevan belum tersedia secara merata di berbagai daerah dan institusi.'],
              ['Latihan', 'Teori semata tidak memberi pengulangan praktik yang dibutuhkan untuk menumbuhkan rasa percaya diri.'],
              ['Bimbingan', 'Pemula sering kesulitan saat menghadapi kendala teknis tanpa pendampingan yang tepat waktu.'],
              ['Perkembangan', 'Jalur dari materi pertama menuju proyek nyata dan portofolio publik sering kali tidak jelas.'],
            ].map(([title, text]) => (
              <article key={title} className="bg-white p-6">
                <h3 className="font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Pendekatan kami"
            title="Perkembangan kemampuan yang dirancang melalui praktik"
            description="Keterampilan diperkenalkan secara bertahap. Kolaborasi dan partisipasi open source hadir setelah pelajar memiliki fondasi dan pengalaman proyek yang cukup."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {approachStepsId.map((step, index) => (
              <article key={step.title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold text-cyan-700">0{index + 1}</p>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Perjalanan pelajar"
            title="Titik awal yang jelas—dan langkah lanjutan yang nyata"
            description="Jalur belajar dimulai dari literasi dan keterampilan digital praktis, lalu berkembang menuju proyek, kerja tim, dan kontribusi nyata."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {learnerLevelsId.map((item) => (
              <article key={item.level} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">{item.level}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/id/learn">Lihat pengalaman belajar</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Program"
              title="Jalur terstruktur dengan status transparan"
              description="Setiap program didefinisikan secara jelas: sasaran, profil pelajar, model pembelajaran, hasil proyek, kerangka metrik, dan kebutuhan kemitraan."
            />
            <ButtonLink href="/id/programs" variant="secondary">Lihat semua program</ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {programsId.slice(0, 3).map((program) => (
              <article key={program.slug} className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <StatusBadge status={program.status} />
                <h3 className="mt-5 text-xl font-semibold">{program.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{program.objective}</p>
                <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
                  <strong className="text-slate-700">Hasil:</strong> {program.output}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-cyan-950 p-8 text-white">
            <Eyebrow dark>Dampak</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Tahap Saat Ini: Pilot Awal</h2>
            <p className="mt-4 leading-7 text-cyan-50/80">
              Kami memvalidasi model pembelajaran melalui pilot skala kecil sebelum memperluasnya ke komunitas dan institusi lain. Kami tidak mempublikasikan klaim total dampak sebelum metode pengukuran terbukti andal.
            </p>
            <div className="mt-7">
              <ButtonLink href="/id/impact" variant="light">Bagaimana dampak diukur</ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold text-slate-950">Corong perkembangan pelajar</p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {impactFunnelId.map((item, index) => (
                <li key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Kemitraan"
            title="Peran nyata untuk institusi pendidikan, donor, dan komunitas teknologi"
            description="Mitra dapat mendukung pelaksanaan program, penyediaan perangkat, konektivitas, peninjauan kurikulum, pendampingan mentor, dan evaluasi independen tanpa memperlakukan pelajar sebagai objek kampanye karitatif."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnerCategoriesId.map((category) => (
              <article key={category.title} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/id/partners">Menjadi Mitra</ButtonLink>
          </div>
        </Container>
      </section>

      <section id="development-progress" className="py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <Eyebrow dark>Buletin pengembangan publik</Eyebrow>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Rencana, status, dan keputusan selanjutnya terbuka untuk umum.</h2>
                <p className="mt-4 leading-7 text-slate-300">
                  Diperbarui {developmentProgress.updatedAt}. Website dan buletin Discord merujuk pada sumber roadmap yang sama.
                </p>
                <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-end justify-between">
                    <p>
                      <span className="block text-3xl font-semibold">{progress}%</span>
                      <span className="text-xs text-slate-400">capaian roadmap terselesaikan</span>
                    </p>
                    <p className="text-sm text-slate-300">{completed}/{milestones}</p>
                  </div>
                  <div role="progressbar" aria-label="Progres pengembangan keseluruhan" aria-valuenow={completed} aria-valuemin={0} aria-valuemax={milestones} className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-cyan-300" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <div className="mt-7">
                  <ButtonLink href="/id/roadmap" variant="light">Buka roadmap publik</ButtonLink>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {developmentProgress.goals.map((goal) => (
                  <article key={goal.priority} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-bold text-cyan-300">{goal.priority}</p>
                      <span className="text-xs text-slate-400">{goal.completed}/{goal.total}</span>
                    </div>
                    <h3 className="mt-2 font-semibold">{goal.title}</h3>
                    <p className="mt-2 text-sm leading-5 text-slate-300">{goal.summary}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="grid border-t border-white/10 bg-black/20 md:grid-cols-2">
              <div className="p-6 sm:px-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Fokus saat ini</p>
                <p className="mt-2 text-sm text-slate-200">{developmentProgress.currentFocus}</p>
              </div>
              <div className="border-t border-white/10 p-6 sm:px-10 md:border-l md:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Langkah berikutnya</p>
                <p className="mt-2 text-sm text-slate-200">{developmentProgress.nextUp}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  )
}

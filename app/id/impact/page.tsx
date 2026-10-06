import type { Metadata } from 'next'
import SiteShell from '../../../components/SiteShell'
import { Container, PageHero, SectionHeading } from '../../../components/ui'
import {
  governancePoliciesId,
  impactFunnelId,
  monthlyOutcomeReviewsId,
} from '../../../data/site-content'

export const metadata: Metadata = {
  title: 'Dampak & Tata Kelola Pengukuran',
  description: 'Cara ProgramingLive mengukur perkembangan nyata pelajar, mengevaluasi capaian bulanan, dan menegakkan privasi serta tata kelola tombol aksi.',
  alternates: { canonical: '/id/impact', languages: { en: '/impact', id: '/id/impact' } },
}

export default function IndonesianImpactPage() {
  const metrics = [
    'Pelajar terjangkau',
    'Pelajar aktif berkala',
    'Materi yang diselesaikan',
    'Proyek yang dibuat & dipublikasikan',
    'Kontribusi open source yang digabungkan',
    'Mentor & fasilitator aktif',
    'Institusi mitra pelaksana',
    'Wilayah jangkauan program',
    'Tingkat penyelesaian modul',
    'Pelajar yang melanjutkan ke tahap proyek',
    'Pelajar yang berkembang menjadi mentor',
  ]

  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Dampak & Tata Kelola"
        title="Ukur perkembangan nyata, bukan sekadar impresi"
        description="Tahap Saat Ini: Pilot Awal. Kami memvalidasi efektivitas model pembelajaran melalui pilot skala kecil sebelum memperluasnya ke komunitas lain. Tidak ada angka rekaan sebelum metode pengumpulan data teruji."
      />
      <Container className="py-14 sm:py-20">
        {/* Progression Funnel */}
        <SectionHeading
          eyebrow="Corong dampak"
          title="Jalur terukur dari belajar menuju kontribusi"
          description="Corong ini memberi tim pelaksana dan mitra cara yang terpadu untuk memahami di tahap mana pelajar berkembang dan di mana pendampingan tambahan dibutuhkan."
        />
        <ol className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {impactFunnelId.map((item, index) => (
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
            eyebrow="Siklus evaluasi operasional"
            title="Evaluasi capaian bulanan berbasis privasi"
            description={governancePoliciesId.cadence}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {monthlyOutcomeReviewsId.map((item) => (
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
            eyebrow="Kerangka pengukuran"
            title="Metrik yang akan dilaporkan secara transparan"
            description="Tidak ada angka rekaan yang ditampilkan sebelum metode pengumpulan data, persetujuan peserta, definisi metrik, dan validitas data teruji."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-900">{metric}</p>
                <p className="mt-2 text-sm text-slate-500">Baseline sedang dirumuskan</p>
              </div>
            ))}
          </div>
        </section>

        {/* Governance & Data Separation */}
        <section id="governance-policy" className="mt-16 sm:mt-24 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Tata Kelola & Batas Data</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Penyempurnaan Berkelanjutan, Integritas CTA, dan Pemisahan Data</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-cyan-300">Siklus Perbaikan Kurikulum</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{governancePoliciesId.curriculumImprovement}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-cyan-300">Integritas Tombol Aksi (CTA)</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{governancePoliciesId.ctaVerification}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-cyan-300">Pemisahan Batas Data Asisten AI</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{governancePoliciesId.dataSeparation}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Prinsip Pelaporan Dampak</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <li>Gunakan data yang disetujui (consented) dan benar-benar diperlukan saja.</li>
              <li>Cantumkan definisi yang jelas di samping setiap angka metrik.</li>
              <li>Pisahkan partisipasi awal dari perkembangan kemampuan yang bermakna.</li>
              <li>Laporkan keterbatasan, kendala akses, dan data yang belum lengkap secara jujur.</li>
            </ul>
          </div>
        </section>
      </Container>
    </SiteShell>
  )
}

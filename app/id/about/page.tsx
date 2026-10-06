import type { Metadata } from 'next'
import SiteShell from '../../../components/SiteShell'
import { Container, PageHero, SectionHeading, StatusBadge } from '../../../components/ui'

export const metadata: Metadata = {
  title: 'Tentang ProgramingLive',
  description: 'Misi, model operasional, struktur tim, dan komitmen transparansi ProgramingLive.',
  alternates: { canonical: '/id/about', languages: { en: '/about', id: '/id/about' } },
}

export default function IndonesianAboutPage() {
  const transparency = [
    ['Metodologi program', 'Sedang dikembangkan'],
    ['Prinsip privasi data', 'Dipublikasikan'],
    ['Perlindungan anak & peserta rentan', 'Sedang dikembangkan'],
    ['Tata kelola perlindungan data', 'Sedang dikembangkan'],
    ['Alokasi dana & pelaporan keuangan', 'Sedang dikembangkan'],
    ['Laporan tahunan', 'Sedang dikembangkan'],
    ['Roadmap publik', 'Dipublikasikan'],
    ['Repositori open source', 'Dipublikasikan'],
    ['Evaluasi independen program', 'Sedang dikembangkan'],
  ]

  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Tentang kami"
        title="Platform pembelajaran terbuka berbasis perkembangan nyata"
        description="ProgramingLive memperluas akses ke pendidikan pemrograman, keterampilan teknologi praktis, dan kesempatan kolaborasi—membantu pelajar berkembang dari pemula menjadi pencipta karya, kontributor, dan profesional teknologi masa depan."
      />
      <Container className="py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Misi</p>
            <h2 className="mt-3 text-2xl font-semibold">Membuka jalur belajar yang nyata dan terjangkau</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Kami menciptakan pengalaman belajar, latihan mandiri, penyelesaian proyek, dan kolaborasi yang ramah bagi mereka yang memiliki keterbatasan akses ke pendidikan teknologi formal.
            </p>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Model operasional</p>
            <h2 className="mt-3 text-2xl font-semibold">Membangun secara terbuka, memvalidasi dengan cermat</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Setiap inisiatif diawali sebagai pilot terarah. Status kemajuan, prioritas pengembangan, repositori kode sumber, dan rencana evaluasi dipublikasikan tanpa melebih-lebihkan rencana sebagai dampak yang telah selesai.
            </p>
          </section>
        </div>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Tim"
            title="Dirancang untuk berkembang melampaui satu individu"
            description="Struktur kelembagaan disiapkan untuk menyambut pendidik, penasihat, mentor, sukarelawan, dan tim inti seiring pertumbuhan program."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_2fr]">
            <article className="rounded-3xl bg-slate-950 p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Pendiri</p>
              <h3 className="mt-3 text-2xl font-semibold">Mahatma Mahardhika</h3>
              <p className="mt-1 text-slate-300">Founder & Software Engineer</p>
              <p className="mt-5 text-sm leading-6 text-slate-300">
                Membangun platform pembelajaran terbuka, perangkat pendukung pengembang, dan infrastruktur produk publik ProgramingLive. Latar belakang tata kelola kelembagaan lengkap akan dipublikasikan secara resmi seiring pematangan operasional.
              </p>
            </article>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Tim Inti', 'Pendidik & Kurikulum', 'Dewan Penasihat', 'Mentor & Relawan'].map((role) => (
                <article key={role} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <StatusBadge status="Direncanakan" />
                  <h3 className="mt-4 font-semibold">{role}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Struktur peran dan kriteria partisipasi sedang disiapkan untuk kolaborasi formal.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="transparency" className="mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Transparansi & tata kelola"
            title="Sistem kepercayaan dengan status yang jujur"
            description="Kebijakan, SOP, dan laporan pertanggungjawaban hanya dipublikasikan setelah benar-benar berlaku dan dijalankan—bukan sekadar janji formalitas."
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {transparency.map(([item, status]) => (
              <div key={item} className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 last:border-0">
                <span className="font-medium text-slate-800">{item}</span>
                <span className={`text-xs font-semibold ${status === 'Dipublikasikan' ? 'text-emerald-700' : 'text-slate-500'}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </SiteShell>
  )
}

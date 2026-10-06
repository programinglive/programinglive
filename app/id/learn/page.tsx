import type { Metadata } from 'next'
import SiteShell from '../../../components/SiteShell'
import { ButtonLink, Container, PageHero, SectionHeading } from '../../../components/ui'
import { learnerLevelsId } from '../../../data/site-content'

export const metadata: Metadata = {
  title: 'Belajar Pemrograman',
  description: 'Mulai jalur belajar teknologi yang ramah pemula dengan proyek praktis dan akses hemat kuota internet.',
  alternates: { canonical: '/id/learn', languages: { en: '/learn', id: '/id/learn' } },
}

export default function IndonesianLearnPage() {
  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Belajar"
        title="Mulai dari langkah berikutnya yang mudah dipahami"
        description="Materi disajikan berbasis teks, ringan diakses lewat ponsel, dan dapat dicoba langsung tanpa perlu membuat akun. Tumbuhkan rasa percaya diri melalui konteks nyata, konsep singkat, praktik mandiri, hasil yang langsung terlihat, dan tantangan yang terukur."
      >
        <ButtonLink href="https://belajar.programinglive.com" external>Mulai modul gratis</ButtonLink>
      </PageHero>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Perkembangan kemampuan"
          title="Dari fondasi digital hingga kontribusi nyata"
          description="Git dan partisipasi open source diperkenalkan di tahap selanjutnya, setelah pelajar memiliki fondasi teknis dan pengalaman membuat proyek mandiri."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {learnerLevelsId.map((item) => (
            <li key={item.level} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">{item.level}</p>
              <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </li>
          ))}
        </ol>
        <section className="mt-16 grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Struktur setiap materi</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Konteks → Konsep → Praktik → Hasil → Tantangan</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Setiap sesi menghubungkan kebutuhan praktis dengan satu konsep inti, memberi kesempatan mencoba langsung, memperlihatkan hasil seketika, dan diakhiri dengan tantangan kecil mandiri.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <p className="text-sm font-semibold text-cyan-300">Ketika pelajar mengalami kendala atau buntu</p>
            <ol className="mt-4 space-y-3 text-sm">
              <li className="rounded-xl bg-white/10 p-3">1. Petunjuk awal yang mengarah ke konsep relevan</li>
              <li className="rounded-xl bg-white/10 p-3">2. Petunjuk kedua yang lebih terarah dan spesifik</li>
              <li className="rounded-xl bg-white/10 p-3">3. Contoh kode pembanding serupa</li>
              <li className="rounded-xl bg-white/10 p-3">4. Solusi lengkap, hanya jika diminta secara sadar oleh pelajar</li>
            </ol>
          </div>
        </section>
        <section className="mt-16">
          <SectionHeading
            eyebrow="Prinsip aksesibilitas"
            title="Dirancang untuk keterbatasan koneksi dan perangkat bersama"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Tanpa keharusan membuat akun di awal',
              'Berbasis teks dan aset gambar terkompresi',
              'Berkas awal (starter code) dapat diunduh',
              'Perkiraan kuota internet per sesi direncanakan',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>
      </Container>
    </SiteShell>
  )
}

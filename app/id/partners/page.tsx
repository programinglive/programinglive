import type { Metadata } from 'next'
import SiteShell from '../../../components/SiteShell'
import { Container, PageHero, SectionHeading } from '../../../components/ui'
import { partnerCategoriesId } from '../../../data/site-content'

export const metadata: Metadata = {
  title: 'Kemitraan',
  description: 'Peluang kemitraan pendidikan untuk sekolah, kampus, tim CSR korporasi, yayasan, LSM, mitra teknologi, komunitas lokal, dan mentor.',
  alternates: { canonical: '/id/partners', languages: { en: '/partners', id: '/id/partners' } },
}

export default function IndonesianPartnersPage() {
  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Mitra"
        title="Bangun kemitraan pembelajaran yang terarah dan terukur"
        description="ProgramingLive menjalin kemitraan yang berfokus pada perluasan akses, kualitas pengajaran, proyek praktis, pendampingan mentor, infrastruktur teknologi ramah kuota, dan evaluasi dampak. Kami memulai dari tahap pilot skala kecil yang konkret."
      />
      <Container className="py-14 sm:py-20">
        <SectionHeading eyebrow="Bentuk partisipasi" title="Peran jelas untuk berbagai mitra" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {partnerCategoriesId.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 grid gap-10 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Penjajakan kemitraan</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Mulai dari konteks kebutuhan nyata</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Ceritakan fokus organisasi Anda, wilayah kerja, dan sasaran yang ingin dicapai. Formulir ini akan membuka aplikasi email Anda, sehingga tidak ada data pribadi yang disimpan di server situs web ini.
            </p>
          </div>
          <form action="mailto:creative@programinglive.com" method="post" encType="text/plain" className="grid gap-4 sm:grid-cols-2">
            <Field label="Nama Organisasi / Lembaga" name="organization" required />
            <Field label="Nama Narahubung" name="contact_person" required />
            <Field label="Alamat Email" name="email" type="email" required />
            <Field label="Kota / Wilayah Operasional" name="country" required />
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              <span>Jenis Organisasi</span>
              <select name="organization_type" className="min-h-11 rounded-xl border border-slate-300 bg-white px-3 focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20">
                <option>Institusi Pendidikan (Sekolah / Kampus / SMK)</option>
                <option>Perusahaan / Tim CSR</option>
                <option>Yayasan / LSM (NGO)</option>
                <option>Perusahaan Teknologi</option>
                <option>Organisasi Komunitas Lokal</option>
                <option>Lainnya</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              <span>Bentuk Dukungan / Kemitraan</span>
              <select name="partnership_type" className="min-h-11 rounded-xl border border-slate-300 bg-white px-3 focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20">
                <option>Penyelenggaraan Kelas Pilot</option>
                <option>Pendanaan Program atau Beasiswa</option>
                <option>Penyediaan Perangkat atau Kuota/Konektivitas</option>
                <option>Mentor / Relawan Pengajar Karyawan</option>
                <option>Infrastruktur atau Alat Bantu Pengembang</option>
                <option>Evaluasi Kurikulum atau Dampak</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
              <span>Pesan atau Gambaran Kebutuhan</span>
              <textarea name="message" rows={4} required placeholder="Jelaskan kebutuhan pelajar di wilayah Anda, rencana jadwal, atau pertanyaan kemitraan." className="rounded-xl border border-slate-300 p-3 focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20" />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-800">
                Kirim pesan penjajakan via email
              </button>
            </div>
          </form>
        </section>
      </Container>
    </SiteShell>
  )
}

function Field({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-11 rounded-xl border border-slate-300 px-3 focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20"
      />
    </label>
  )
}

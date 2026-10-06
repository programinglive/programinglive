import type { Metadata } from 'next'
import SiteShell from '../../../components/SiteShell'
import { ButtonLink, Container, PageHero } from '../../../components/ui'

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi ProgramingLive mengenai akses belajar, kemitraan institusi, proyek open source, atau kegiatan kerelawanan.',
  alternates: { canonical: '/id/contact', languages: { en: '/contact', id: '/id/contact' } },
}

export default function IndonesianContactPage() {
  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Kontak"
        title="Mulai dengan percakapan yang tepat"
        description="Hubungi tim ProgramingLive untuk pertanyaan akses belajar mandiri, uji coba pilot institusional, dukungan program, partisipasi open source, pendampingan mentor, atau kolaborasi teknologi."
      />
      <Container className="grid gap-5 py-14 sm:grid-cols-2 sm:py-20">
        {[
          [
            'Pelajar & Kontributor',
            'Pertanyaan mengenai titik awal belajar, panduan modul, atau cara berkontribusi ke repositori open source.',
            'mailto:creative@programinglive.com?subject=Pertanyaan%20Pelajar%20atau%20Kontributor',
          ],
          [
            'Institusi & Mitra Kerja Sama',
            'Penyelenggaraan kelas pilot, pendanaan program, penyediaan perangkat/kuota, telaah kurikulum, atau keterlibatan mentor.',
            '/id/partners',
          ],
        ].map(([title, description, href]) => (
          <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7">
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">{description}</p>
            <div className="mt-6">
              <ButtonLink href={href} external={href.startsWith('mailto:')}>
                {href.startsWith('mailto:') ? 'Kirim email langsung' : 'Ajukan penjajakan kemitraan'}
              </ButtonLink>
            </div>
          </article>
        ))}
      </Container>
    </SiteShell>
  )
}

import type { Metadata } from 'next'
import SiteShell from '../../../components/SiteShell'
import { ButtonLink, Container, PageHero, SectionHeading } from '../../../components/ui'
import {
  collaborationGuidelinesId,
  editorialArticlesId,
  editorialCadenceId,
} from '../../../data/site-content'

export const metadata: Metadata = {
  title: 'Creator Studio & Blog',
  description: 'Catatan kurikulum, panduan praktis, jadwal editorial rutin, dan pedoman kolaborasi komunitas ProgramingLive.',
  alternates: { canonical: '/id/blog', languages: { en: '/blog', id: '/id/blog' } },
}

export default function IndonesianBlogPage() {
  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Creator Studio & Blog"
        title="Catatan kurikulum, keterampilan praktis, dan kabar pengembangan"
        description="Ruang publikasi editorial berkelanjutan yang menghubungkan kurikulum pembelajaran terbuka dengan keterampilan pengembang praktis dan kolaborasi komunitas berbasis persetujuan."
      />
      <Container className="py-14 sm:py-20">
        {/* Verified Articles Grid */}
        <section>
          <SectionHeading
            eyebrow="Artikel Terbit"
            title="Catatan kurikulum yang terhubung langsung ke modul belajar"
            description="Setiap tulisan bersumber dari implementasi kurikulum nyata, pengujian perangkat pengembang, dan temuan kelas pilot terverifikasi."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {editorialArticlesId.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-cyan-50 px-2.5 py-1 font-semibold text-cyan-800">
                      {article.category}
                    </span>
                    <span className="text-slate-400">{article.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold leading-snug text-slate-950">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {article.summary}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <ButtonLink
                    href={article.trackLink}
                    variant="secondary"
                    external={article.trackLink.startsWith('http')}
                  >
                    {article.trackLabel} ↗
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sustainable Editorial Cadence */}
        <section className="mt-16 sm:mt-24">
          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Jadwal Publikasi Berkelanjutan</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">{editorialCadenceId.cadence}</h2>
            <p className="mt-2 text-sm text-cyan-100">{editorialCadenceId.schedule}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {editorialCadenceId.pillars.map((pillar, index) => (
                <div key={pillar} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-xs font-bold text-cyan-300">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-200">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Feedback & Showcase Guidelines */}
        <section id="community-guidelines" className="mt-16 sm:mt-24">
          <SectionHeading
            eyebrow="Kolaborasi Komunitas"
            title="Cara mendapatkan koreksi (review) dan membagikan karya portofolio"
            description="Langkah terarah untuk bertanya, meninjau hasil kode latihan, dan berpartisipasi dalam pameran karya komunitas tanpa mengorbankan privasi data."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collaborationGuidelinesId.map((item) => (
              <article key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-xl font-bold text-cyan-700">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="https://github.com/programinglive/belajar/discussions" external>
              Buka GitHub Discussions ↗
            </ButtonLink>
            <ButtonLink href="/guidelines.html" variant="secondary">
              Baca Panduan Komunitas
            </ButtonLink>
          </div>
        </section>
      </Container>
    </SiteShell>
  )
}

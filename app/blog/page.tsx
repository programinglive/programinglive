import type { Metadata } from 'next'
import SiteShell from '../../components/SiteShell'
import { ButtonLink, Container, PageHero, SectionHeading } from '../../components/ui'
import {
  collaborationGuidelines,
  editorialArticles,
  editorialCadence,
} from '../../data/site-content'

export const metadata: Metadata = {
  title: 'Creator Studio & Blog',
  description: 'Catatan kurikulum, panduan praktis, jadwal editorial rutin, dan pedoman kolaborasi komunitas ProgramingLive.',
  alternates: { canonical: '/blog', languages: { en: '/blog', id: '/id/blog' } },
}

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Creator Studio & Blog"
        title="Evidence, curriculum notes, and practical developer insights"
        description="A sustainable editorial publication connecting verified learning tracks to practical developer skills, curriculum reflections, and consent-first community collaboration."
      />
      <Container className="py-14 sm:py-20">
        {/* Verified Articles Grid */}
        <section>
          <SectionHeading
            eyebrow="Published articles"
            title="Curriculum notes linked to open learning tracks"
            description="Every publication is grounded in real curriculum implementations, practical tools, and verified pilot findings."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {editorialArticles.map((article) => (
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
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Sustainable Publishing Cadence</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">{editorialCadence.cadence}</h2>
            <p className="mt-2 text-sm text-cyan-100">{editorialCadence.schedule}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {editorialCadence.pillars.map((pillar, index) => (
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
            eyebrow="Community collaboration"
            title="How learners get feedback and share portfolio outcomes"
            description="Clear steps to ask for help, review project code, and participate in community highlights without compromising privacy."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collaborationGuidelines.map((item) => (
              <article key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-xl font-bold text-cyan-700">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="https://github.com/programinglive/belajar/discussions" external>
              Join GitHub Discussions ↗
            </ButtonLink>
            <ButtonLink href="/guidelines.html" variant="secondary">
              Read Code of Conduct
            </ButtonLink>
          </div>
        </section>
      </Container>
    </SiteShell>
  )
}

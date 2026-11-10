import type { Metadata } from 'next'
import SiteShell from '../../../components/SiteShell'
import { ButtonLink, Container, PageHero, SectionHeading } from '../../../components/ui'
import {
  collaborationGuidelinesId,
  editorialArticlesId,
  editorialCadenceId,
} from '../../../data/site-content'
import {
  getPost,
  loadPosts,
  POST_CATEGORIES,
  type PostCategory,
} from '../../../data/posts'

export const metadata: Metadata = {
  title: 'Creator Studio & Blog',
  description: 'Catatan kurikulum, panduan praktis, jadwal editorial rutin, dan pedoman kolaborasi komunitas ProgramingLive.',
  alternates: { canonical: '/id/blog', languages: { en: '/blog', id: '/id/blog' } },
}

export default async function IndonesianBlogPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>
}) {
  const { kategori } = await searchParams
  const allPosts = loadPosts()
  // Superseded (merged) duplicates stay out of the default listing.
  const visiblePosts = allPosts.filter((post) => !post.supersededBy)
  const activeCategory = POST_CATEGORIES.includes(kategori as PostCategory)
    ? (kategori as PostCategory)
    : undefined
  const libraryPosts = activeCategory
    ? visiblePosts.filter((post) => post.categories.includes(activeCategory))
    : visiblePosts
  const newestFirst = [...libraryPosts].sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug))
  const countFor = (category: PostCategory) =>
    visiblePosts.filter((post) => post.categories.includes(category)).length

  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Creator Studio & Blog"
        title="Catatan kurikulum, keterampilan praktis, dan kabar pengembangan"
        description="Ruang publikasi editorial berkelanjutan yang menghubungkan kurikulum pembelajaran terbuka dengan keterampilan pengembang praktis dan kolaborasi komunitas berbasis persetujuan."
      />
      <Container className="py-14 sm:py-20">
        {/* Pustaka: migrated Blogspot archive with 7-category filter */}
        <section>
          <SectionHeading
            eyebrow="Pustaka"
            title={`Arsip posting: ${newestFirst.length} tulisan${activeCategory ? ` dalam kategori ${activeCategory}` : ''}`}
            description="Seluruh arsip blog.programinglive.com dimigrasikan tanpa kehilangan konten. Filter berdasarkan tujuh kategori pustaka; duplikat yang sudah digabungkan disembunyikan dari daftar ini."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="/id/blog"
              className={
                activeCategory
                  ? 'rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-400'
                  : 'rounded-full border border-cyan-700 bg-cyan-700 px-3 py-1.5 text-sm font-medium text-white'
              }
            >
              Semua ({visiblePosts.length})
            </a>
            {POST_CATEGORIES.map((category) => (
              <a
                key={category}
                href={`/id/blog?kategori=${encodeURIComponent(category)}`}
                className={
                  activeCategory === category
                    ? 'rounded-full border border-cyan-700 bg-cyan-700 px-3 py-1.5 text-sm font-medium text-white'
                    : 'rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-400'
                }
              >
                {category} ({countFor(category)})
              </a>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {newestFirst.map((post) => (
              <li key={post.slug}>
                <a
                  href={`/id/blog/${post.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-full bg-cyan-50 px-2.5 py-1 font-semibold text-cyan-800">
                      {post.categories[0]}
                    </span>
                    <span className="text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-slate-950">{post.title}</h3>
                  {post.summary ? (
                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">{post.summary}</p>
                  ) : null}
                  {Array.isArray(post.related) && post.related.length > 0 ? (
                    <p className="mt-2 text-xs text-cyan-700">
                      Baca juga:{' '}
                      {post.related
                        .map((relatedSlug) => getPost(relatedSlug)?.title)
                        .filter(Boolean)
                        .join(', ')}
                    </p>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </section>

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

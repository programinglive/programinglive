import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SiteShell from '../../../../components/SiteShell'
import { ButtonLink, Container } from '../../../../components/ui'
import { allPostSlugs, getPost, loadPostBody } from '../../../../data/posts'

export const dynamicParams = false

export function generateStaticParams() {
  return allPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) {
    return { title: 'Posting Tidak Ditemukan' }
  }
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/id/blog/${post.slug}` },
  }
}

function readingTime(post: { wordCount?: number }) {
  if (!post.wordCount) return ''
  return `${Math.max(1, Math.round(post.wordCount / 200))} mnt baca`
}

export default async function IndonesianPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const body = loadPostBody(post.slug) ?? ''
  const superseded = post.supersededBy ? getPost(post.supersededBy) : undefined

  return (
    <SiteShell locale="id">
      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <nav className="text-xs font-semibold uppercase tracking-widest text-cyan-700">
            <a href="/id/blog" className="hover:underline">
              ← Pustaka
            </a>
            {post.categories.map((category) => (
              <span key={category}>
                {' · '}
                <a href={`/id/blog?kategori=${encodeURIComponent(category)}`} className="hover:underline">
                  {category}
                </a>
              </span>
            ))}
          </nav>

          {superseded ? (
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Posting ini sudah digabungkan ke{' '}
              <a className="font-semibold underline" href={`/id/blog/${superseded.slug}`}>
                {superseded.title}
              </a>
              . Versi lengkap tersedia di sana.
            </div>
          ) : null}

          {post.image ? (
            <img src={post.image} alt={post.title} className="mt-6 w-full rounded-3xl object-cover shadow-sm" />
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            {post.categories.map((category) => (
              <span key={category} className="rounded-full bg-cyan-50 px-2.5 py-1 font-semibold text-cyan-800">
                {category}
              </span>
            ))}
            <span className="text-slate-400">{post.date}</span>
            {post.wordCount ? <span className="text-slate-400">· {readingTime(post)}</span> : null}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{post.title}</h1>

          <div className="post-content mt-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
          </div>

          {Array.isArray(post.related) && post.related.length > 0 ? (
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Baca juga</p>
              <ul className="mt-3 space-y-2">
                {post.related.map((relatedSlug) => {
                  const related = getPost(relatedSlug)
                  if (!related) return null
                  return (
                    <li key={relatedSlug}>
                      <a className="text-sm font-medium text-cyan-700 hover:underline" href={`/id/blog/${related.slug}`}>
                        {related.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : null}

          {post.sourceUrl ? (
            <div className="mt-8 text-xs text-slate-400">
              Sumber aslinya: <a className="underline" href={post.sourceUrl}>{post.sourceUrl}</a>
            </div>
          ) : null}

          <div className="mt-10 border-t border-slate-200 pt-6">
            <ButtonLink href="/id/blog" variant="secondary">
              Kembali ke Pustaka
            </ButtonLink>
          </div>
        </div>
      </Container>
    </SiteShell>
  )
}

import type { Metadata } from 'next'
import SiteShell from '../../components/SiteShell'
import { ButtonLink, Container, PageHero } from '../../components/ui'

export const metadata: Metadata = { title: 'Blog', description: 'ProgramingLive product, curriculum, pilot, and open-source updates.' }

export default function BlogPage() {
  return <SiteShell><PageHero eyebrow="Blog" title="Evidence, lessons, and development updates" description="This editorial space will publish curriculum notes, pilot findings, open-source updates, and program reports. It is being prepared; no placeholder stories are presented as real activity." /><Container className="py-14 sm:py-20"><div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">In development</p><h2 className="mt-3 text-2xl font-semibold">The first editorial updates are being prepared.</h2><p className="mx-auto mt-3 max-w-2xl text-slate-600">Until then, use the public roadmap for verified progress and GitHub for source-level activity.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><ButtonLink href="/roadmap">View roadmap</ButtonLink><ButtonLink href="https://github.com/programinglive" external variant="secondary">View GitHub</ButtonLink></div></div></Container></SiteShell>
}

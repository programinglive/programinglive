import type { Metadata } from 'next'
import SiteShell from '../../components/SiteShell'
import { ButtonLink, Container, PageHero } from '../../components/ui'

export const metadata: Metadata = { title: 'Contact', description: 'Contact ProgramingLive about learning, partnerships, open source, or volunteering.' }

export default function ContactPage() {
  return <SiteShell><PageHero eyebrow="Contact" title="Start with the right conversation" description="Contact ProgramingLive about learning access, institutional pilots, program support, open-source participation, mentoring, or technology collaboration." /><Container className="grid gap-5 py-14 sm:grid-cols-2 sm:py-20">{[
    ['Learners & contributors', 'Questions about where to start, learning resources, or open-source participation.', 'mailto:creative@programinglive.com?subject=Learner%20or%20contributor%20inquiry'],
    ['Institutions & partners', 'Pilot delivery, funding, infrastructure, curriculum, evaluation, or mentorship.', '/partners'],
  ].map(([title, description, href]) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">{description}</p><div className="mt-6"><ButtonLink href={href} external={href.startsWith('mailto:')}>{href.startsWith('mailto:') ? 'Send an email' : 'Partnership inquiry'}</ButtonLink></div></article>)}</Container></SiteShell>
}

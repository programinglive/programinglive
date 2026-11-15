import type { Metadata } from 'next'
import Link from 'next/link'
import SiteShell from '../../components/SiteShell'
import { Container, PageHero } from '../../components/ui'
import { PRIVACY_POLICY_META, PRIVACY_POLICY_SECTIONS } from '../../data/privacy-policy'

export const metadata: Metadata = {
  title: PRIVACY_POLICY_META.title,
  description:
    'Kebijakan Privasi resmi ProgramingLive mengenai pemrosesan informasi pada situs web dan integrasi WhatsApp Business Platform.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Dokumen Legal & Kepercayaan"
        title={PRIVACY_POLICY_META.title}
        description={`Penjelasan transparan mengenai cara ProgramingLive memproses informasi pada situs web dan integrasi WhatsApp Business Platform. Terakhir diperbarui: ${PRIVACY_POLICY_META.lastUpdated}.`}
      />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-6">
          <nav
            aria-label="Daftar isi Kebijakan Privasi"
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Daftar Isi
            </p>
            <ol className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {PRIVACY_POLICY_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex items-baseline gap-2 hover:text-cyan-800 hover:underline"
                  >
                    <span className="font-semibold text-slate-500">{section.number}.</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-6">
            {PRIVACY_POLICY_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-2xl">
                  {section.number}. {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-100 px-6 py-5 text-sm text-slate-700">
            <p>
              Pertanyaan terkait privasi dapat dikirimkan ke{' '}
              <a
                href={`mailto:${PRIVACY_POLICY_META.contactEmail}`}
                className="font-semibold text-cyan-800 underline hover:text-cyan-950"
              >
                {PRIVACY_POLICY_META.contactEmail}
              </a>
              .
            </p>
            <Link href="/id/contact" className="font-semibold text-slate-950 hover:text-cyan-800">
              Halaman Kontak &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </SiteShell>
  )
}

import { Container, PageHero } from './ui'
import SiteShell from './SiteShell'
import type { LegalDocument } from '../data/legal-documents'

/**
 * Shared presentation for the English legal documents. Keeping the renderer in
 * one place avoids two copies of the same heading and list structure drifting.
 */
export default function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <SiteShell>
      <PageHero
        eyebrow={document.eyebrow}
        title={document.title}
        description={document.description}
      />
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-6">
          {document.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {section.heading}
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
          <p className="text-sm leading-7 text-slate-600">
            Questions? Email{' '}
            <a
              href="mailto:creative@programinglive.com"
              className="font-semibold text-cyan-800 underline hover:text-cyan-950"
            >
              creative@programinglive.com
            </a>
            .
          </p>
        </div>
      </Container>
    </SiteShell>
  )
}

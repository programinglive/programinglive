import type { Metadata } from 'next'
import LegalDocumentPage from '../../components/LegalDocumentPage'
import { TERMS_DOCUMENT } from '../../data/legal-documents'

export const metadata: Metadata = {
  title: TERMS_DOCUMENT.title,
  description: TERMS_DOCUMENT.description,
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return <LegalDocumentPage document={TERMS_DOCUMENT} />
}

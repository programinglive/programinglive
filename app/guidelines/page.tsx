import type { Metadata } from 'next'
import LegalDocumentPage from '../../components/LegalDocumentPage'
import { GUIDELINES_DOCUMENT } from '../../data/legal-documents'

export const metadata: Metadata = {
  title: GUIDELINES_DOCUMENT.title,
  description: GUIDELINES_DOCUMENT.description,
  alternates: { canonical: '/guidelines' },
}

export default function GuidelinesPage() {
  return <LegalDocumentPage document={GUIDELINES_DOCUMENT} />
}

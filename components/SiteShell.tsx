import type { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Container } from './ui'

export default function SiteShell({ children, locale = 'en' }: { children: ReactNode; locale?: 'en' | 'id' }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950" lang={locale}>
      <a href="#main-content" className="skip-link">
        {locale === 'id' ? 'Loncat ke konten utama' : 'Skip to main content'}
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Container>
        <Footer locale={locale} />
      </Container>
    </div>
  )
}

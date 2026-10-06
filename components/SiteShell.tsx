import type { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Container } from './ui'

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Container>
        <Footer />
      </Container>
    </div>
  )
}

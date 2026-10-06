'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Container } from './ui'

const primaryLinks = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Learn', href: '/learn' },
  { label: 'Open Source', href: '/open-source' },
  { label: 'Impact', href: '/impact' },
  { label: 'Partners', href: '/partners' },
  { label: 'Roadmap', href: '/roadmap' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <Container className="flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-md text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700">
          <img alt="" className="h-8 w-8 rounded-full border border-slate-200 object-cover" src="/logo_prograiminglive.png" />
          <span className="text-base font-semibold tracking-tight">ProgramingLive</span>
        </Link>

        <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 md:hidden" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span aria-hidden="true" className="text-xl leading-none">{isOpen ? '×' : '≡'}</span>
        </button>

        <nav id="primary-navigation" aria-label="Primary navigation" className={`${isOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col gap-1 border-b border-slate-200 bg-white p-5 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {primaryLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link key={link.href} href={link.href} aria-current={active ? 'page' : undefined} onClick={() => setIsOpen(false)} className={`rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 ${active ? 'bg-cyan-50 text-cyan-900' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`}>
                {link.label}
              </Link>
            )
          })}
          <div className="my-2 h-px bg-slate-200 md:mx-2 md:my-0 md:h-6 md:w-px" />
          <div className="flex items-center gap-1" aria-label="Language">
            <Link href="/" hrefLang="en" className={`rounded-full px-3 py-2 text-xs font-semibold ${pathname !== '/id' ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>EN</Link>
            <Link href="/id" hrefLang="id" className={`rounded-full px-3 py-2 text-xs font-semibold ${pathname === '/id' ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>ID</Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}

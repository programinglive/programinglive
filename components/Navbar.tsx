'use client'

import Link from 'next/link'
import { useState } from 'react'

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuBaseClasses =
    'w-full space-y-2 border-t border-slate-200 pt-3 md:flex md:w-auto md:items-center md:gap-6 md:space-y-0 md:border-0 md:pt-0'

  return (
    <nav className="sticky top-0 z-20 bg-white/95 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-3 sm:px-10">
        <Link href="/" className="flex items-center gap-3 text-slate-900 hover:text-slate-900">
          <img
            alt="ProgramingLive logo"
            className="h-9 w-9 rounded-full border border-slate-200 object-cover"
            src="/logo_prograiminglive.png"
          />
          <span className="text-lg font-semibold tracking-tight">ProgramingLive</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-slate-800 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex h-4 w-4 flex-col justify-between">
            <span className="block h-0.5 w-full rounded-full bg-slate-800" />
            <span className="block h-0.5 w-full rounded-full bg-slate-800" />
            <span className="block h-0.5 w-full rounded-full bg-slate-800" />
          </span>
        </button>

        <div
          className={classNames(menuBaseClasses, !isOpen && 'hidden md:flex')}
        >
          <Link
            href="/#vision"
            className="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1"
          >
            Vision
          </Link>
          <Link
            href="/#mission"
            className="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1"
          >
            Mission
          </Link>
          <Link
            href="/programs"
            className="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1"
          >
            Programs
          </Link>
          <Link
            href="/#sponsor"
            className="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1"
          >
            Sponsors
          </Link>
        </div>
      </div>
    </nav>
  )
}

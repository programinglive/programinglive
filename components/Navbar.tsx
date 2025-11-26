'use client'

import Link from 'next/link'
import { useState } from 'react'

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuBaseClasses =
    'w-full space-y-2 md:flex md:w-auto md:items-center md:gap-6 md:space-y-0'

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
          className={classNames(
            'w-full border-t border-slate-200 pt-3 md:w-auto md:border-0 md:pt-0',
            !isOpen && 'hidden md:block'
          )}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <div className={classNames(menuBaseClasses, 'border-0 pt-0 md:border-0 md:pt-0')}>
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
                href="/open-source"
                className="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1"
              >
                Open Source
              </Link>
              <Link
                href="/#sponsor"
                className="block text-left transition hover:text-slate-900 md:inline-flex md:items-center md:gap-1"
              >
                Sponsors
              </Link>
            </div>
            <a
              href="https://github.com/programinglive"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              aria-label="ProgramingLive on GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.51 2.87 8.33 6.84 9.69.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.28 9.28 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.65.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.59 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

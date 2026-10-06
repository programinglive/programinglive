import Link from 'next/link'
import type { ReactNode } from 'react'
import type { ProgramStatus } from '../data/site-content'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? 'text-cyan-300' : 'text-cyan-700'}`}>
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>}
    </div>
  )
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  external?: boolean
}) {
  const styles = {
    primary: 'bg-slate-950 text-white hover:bg-cyan-800 focus-visible:outline-cyan-700',
    secondary: 'border border-slate-300 bg-white text-slate-900 hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-slate-700',
    light: 'bg-white text-slate-950 hover:bg-cyan-50 focus-visible:outline-white',
  }
  const className = `inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]}`

  if (external) {
    return <a href={href} className={className} target="_blank" rel="noreferrer">{children}</a>
  }

  return <Link href={href} className={className}>{children}</Link>
}

export function StatusBadge({
  status,
}: {
  status: ProgramStatus | 'Complete' | 'In progress' | 'Selesai' | 'Sedang berjalan'
}) {
  const styles: Record<string, string> = {
    'Active pilot': 'bg-emerald-50 text-emerald-800 ring-emerald-600/20',
    'Pilot aktif': 'bg-emerald-50 text-emerald-800 ring-emerald-600/20',
    'In development': 'bg-amber-50 text-amber-800 ring-amber-600/20',
    'Sedang dikembangkan': 'bg-amber-50 text-amber-800 ring-amber-600/20',
    Planned: 'bg-slate-100 text-slate-700 ring-slate-600/20',
    Direncanakan: 'bg-slate-100 text-slate-700 ring-slate-600/20',
    Complete: 'bg-emerald-50 text-emerald-800 ring-emerald-600/20',
    Selesai: 'bg-emerald-50 text-emerald-800 ring-emerald-600/20',
    'In progress': 'bg-amber-50 text-amber-800 ring-amber-600/20',
    'Sedang berjalan': 'bg-amber-50 text-amber-800 ring-amber-600/20',
  }
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status] ?? 'bg-slate-100 text-slate-700 ring-slate-600/20'}`}>
      {status}
    </span>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="border-b border-slate-200 bg-white py-14 sm:py-20">
      <Container>
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  )
}

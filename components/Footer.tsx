export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-slate-200 pt-8 text-sm text-slate-500">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            ProgramingLive
          </p>
          <p className="text-slate-600">
            &copy; {year} ProgramingLive. Crafted with purpose in Indonesia.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-500">
          <a className="transition hover:text-slate-900" href="/terms.html">
            Terms
          </a>
          <a className="transition hover:text-slate-900" href="/privacy.html">
            Privacy
          </a>
          <a className="transition hover:text-slate-900" href="/guidelines.html">
            Community Guidelines
          </a>
          <a className="transition hover:text-slate-900" href="mailto:creative@programinglive.com">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

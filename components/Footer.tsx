import Link from 'next/link'

const groups = [
  { title: 'Platform', links: [['Programs', '/programs'], ['Learn', '/learn'], ['Open Source', '/open-source'], ['Roadmap', '/roadmap']] },
  { title: 'Organization', links: [['About', '/about'], ['Impact', '/impact'], ['Partners', '/partners'], ['Blog', '/blog']] },
  { title: 'Trust', links: [['Transparency', '/about#transparency'], ['Privacy', '/privacy.html'], ['Terms', '/terms.html'], ['Guidelines', '/guidelines.html']] },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 py-12 text-sm text-slate-600">
      <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
        <div className="max-w-sm">
          <p className="text-base font-semibold text-slate-950">ProgramingLive</p>
          <p className="mt-3 leading-6">Building pathways from learning to opportunity through accessible technology education.</p>
          <a className="mt-5 inline-flex font-semibold text-cyan-800 hover:text-cyan-950" href="mailto:creative@programinglive.com">creative@programinglive.com</a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="font-semibold text-slate-950">{group.title}</p>
              <ul className="mt-3 space-y-2">
                {group.links.map(([label, href]) => <li key={href}><Link className="hover:text-slate-950" href={href}>{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} ProgramingLive. Open learning, built transparently.</p>
        <a href="https://github.com/programinglive" target="_blank" rel="noreferrer" className="font-semibold hover:text-slate-950">GitHub ↗</a>
      </div>
    </footer>
  )
}

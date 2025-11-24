import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-12 sm:px-10 lg:pb-16">
        <section className="pt-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Programs</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Signature Programs
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Our structured experiences make it effortless to level up and contributefrom guided learning paths to
            collaborative sprints and open projects.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-600">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Learn
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Build
            </span>
            <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Ship
            </span>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Program tracks</h2>
            <p className="text-sm text-slate-600">
              Choose the track that matches where you are nowand where you want to go next.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500">Belajar Program</p>
                <p className="mt-2 text-sm text-slate-700">
                  A guided curriculum that blends foundational concepts with practical labs and community check-ins.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500">Indonesia Emas 2045</p>
                <p className="mt-2 text-sm text-slate-700">
                  A nationwide initiative preparing talent for the country&apos;s golden digital era with mission-driven
                  projects.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500">Open Projects</p>
                <p className="mt-2 text-sm text-slate-700">
                  Collaborative builds tackling real business and societal challenges with maintainers and mentors.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500">Creator Studio</p>
                <p className="mt-2 text-sm text-slate-700">
                  From articles to videos, we turn insights into accessible inspiration and public learning resources.
                </p>
              </div>
            </div>
          </div>
          <aside className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-900/5 p-6 text-sm text-slate-700">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">How it works</p>
              <ol className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    1
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Pick a track</p>
                    <p className="text-xs text-slate-600">
                      Start from Belajar if you&apos;re early, or jump into Open Projects and Creator Studio when you&apos;re
                      ready to ship.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    2
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Join a sprint</p>
                    <p className="text-xs text-slate-600">
                      Work in short, focused cycles with other builders and mentors so you never ship alone.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    3
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Ship and share</p>
                    <p className="text-xs text-slate-600">
                      Document what you build, add it to your public portfolio, and share it with partners and the
                      community.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Ready to start?</p>
              <Link
                href="mailto:creative@programinglive.com?subject=Join%20ProgramingLive%20Programs"
                className="flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Talk to the team
              </Link>
              <p className="text-xs text-slate-500">
                Tell us a bit about your background and which program track you&apos;re interested in.
              </p>
            </div>
          </aside>
        </section>

        <Footer />
      </div>
    </main>
  )
}

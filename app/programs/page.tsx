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
            Explore active projects and program concepts. Some learning tracks and contribution paths are still being prepared.
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

        <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Program tracks</h2>
            <p className="text-sm text-slate-600">
              Choose the track that matches where you are now and where you want to go next.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="https://belajar.programinglive.com"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-slate-100"
              >
                <p className="text-xs uppercase tracking-widest text-slate-500">Belajar Program</p>
                <p className="mt-2 text-sm text-slate-700">
                  A beginner curriculum is in development. Preview the first lesson; the full course is not available yet.
                </p>
              </Link>
              <Link
                href="https://programinglive.my.id"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-slate-100"
              >
                <p className="text-xs uppercase tracking-widest text-slate-500">Indonesia Emas 2045</p>
                <p className="mt-2 text-sm text-slate-700">
                  A long-term initiative concept for Indonesia&apos;s 2045 vision. Pilot activities and participation details are not available yet.
                </p>
              </Link>
              <Link
                href="https://programinglive.com/open-source"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-slate-100"
              >
                <p className="text-xs uppercase tracking-widest text-slate-500">Open Source Project</p>
                <p className="mt-2 text-sm text-slate-700">
                  Explore current open-source projects. Beginner contribution paths and project briefs are still being prepared.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import developmentProgress from '../data/development-progress.json'

const statusStyles = {
  Complete: 'bg-emerald-100 text-emerald-800',
  'In progress': 'bg-amber-100 text-amber-800',
  Planned: 'bg-slate-100 text-slate-600',
}

export default function HomePage() {
  const completedMilestones = developmentProgress.goals.reduce((total, goal) => total + goal.completed, 0)
  const totalMilestones = developmentProgress.goals.reduce((total, goal) => total + goal.total, 0)
  const progressPercentage = Math.round((completedMilestones / totalMilestones) * 100)

  return (
    <main id="top" className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-12 sm:px-10 lg:pb-16">
        <header className="flex flex-col">
          <section className="relative grid gap-10 pt-10 lg:items-center">
            <div className="pointer-events-none absolute inset-y-10 right-[-6rem] hidden w-[28rem] rounded-full bg-gradient-to-b from-slate-100 via-slate-50 to-transparent blur-3xl lg:block" />
            <div className="space-y-5 relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Community Programmers in Indonesia</p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Clear pathways for Indonesia&apos;s next generation of developers.
              </h1>
              <p className="text-lg text-slate-600">
                We craft open-source experiences, tutorials, and programs that help aspiring programmers grow into confident
                creators ready to shape the nation&apos;s digital future.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore Programs
                </Link>
                <Link
                  href="#programs"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
                >
                  See Community Stories
                </Link>
              </div>
            </div>
          </section>
        </header>

        <section
          id="development-progress"
          aria-labelledby="development-progress-title"
          className="scroll-mt-[72px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-xl shadow-slate-200/60"
        >
          <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_1.9fr] lg:p-10">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Development bulletin</p>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-300">
                    Updated {developmentProgress.updatedAt}
                  </span>
                </div>
                <h2 id="development-progress-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Building in public, one verifiable goal at a time.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                  This bulletin reflects our public roadmap so the community can see what is complete, what we are working on,
                  and what comes next.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Overall roadmap</p>
                    <p className="mt-2 text-3xl font-semibold">{progressPercentage}%</p>
                  </div>
                  <p className="text-sm text-slate-300">
                    {completedMilestones} of {totalMilestones} milestones
                  </p>
                </div>
                <div
                  role="progressbar"
                  aria-label="Overall development roadmap progress"
                  aria-valuemin={0}
                  aria-valuemax={totalMilestones}
                  aria-valuenow={completedMilestones}
                  className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"
                >
                  <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" style={{ width: `${progressPercentage}%` }} />
                </div>
              </div>

              <a
                href={developmentProgress.roadmapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
              >
                Read the source roadmap <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {developmentProgress.goals.map((goal) => (
                <article key={goal.priority} className="rounded-2xl border border-white/10 bg-white/[0.07] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">{goal.priority}</p>
                      <h3 className="mt-1 font-semibold text-white">{goal.title}</h3>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[goal.status as keyof typeof statusStyles]}`}>
                      {goal.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{goal.summary}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-sky-400"
                        style={{ width: `${Math.round((goal.completed / goal.total) * 100)}%` }}
                      />
                    </div>
                    <span>{goal.completed}/{goal.total}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid border-t border-white/10 bg-black/20 sm:grid-cols-2">
            <div className="p-6 sm:border-r sm:border-white/10 lg:px-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">Current focus</p>
              <p className="mt-2 text-sm text-slate-200">{developmentProgress.currentFocus}</p>
            </div>
            <div className="border-t border-white/10 p-6 sm:border-t-0 lg:px-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Up next</p>
              <p className="mt-2 text-sm text-slate-200">{developmentProgress.nextUp}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article
            id="vision"
            className="group scroll-mt-[72px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Our Vision</h2>
              <span className="h-2 w-10 rounded-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 opacity-80 transition group-hover:opacity-100" />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Empowering Indonesia&apos;s demographic advantage by nurturing world-class programmers who elevate the country&apos;s
              global influence.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                Champion inclusive access to technology education.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                Inspire innovation that tackles real-world challenges.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                Position Indonesia as a strategic global tech player.
              </li>
            </ul>
          </article>

          <article
            id="mission"
            className="group scroll-mt-[72px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Our Mission</h2>
              <span className="h-2 w-10 rounded-full bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 opacity-80 transition group-hover:opacity-100" />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              We turn inspiration into action through thoughtful content, immersive programs, and meaningful collaboration.
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <p className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700" />
                Curate trusted knowledge into accessible tutorials and guides.
              </p>
              <p className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700" />
                Transform insight into stories and video content that inspires.
              </p>
              <p className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700" />
                Build open-source projects and learning tracks for hands-on growth.
              </p>
            </div>
          </article>

          <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">For Our Community</h2>
              <span className="h-2 w-10 rounded-full bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 opacity-80 transition group-hover:opacity-100" />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Whether you&apos;re a beginner or a business innovator, ProgramingLive provides clarity and momentum.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                Guided learning journeys for new developers.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                Mentorship and collaboration opportunities.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                Partnerships with organizations accelerating digital transformation.
              </li>
            </ul>
          </article>
        </section>

        <section
          id="programs"
          className="grid scroll-mt-[72px] gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.3fr_1.3fr]"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Signature Programs</h2>
            <p className="text-sm text-slate-600">
              Our structured experiences make it effortless to level up and contribute.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500">Belajar Program</p>
                <p className="mt-2 text-sm text-slate-700">
                  A guided curriculum blending foundational concepts with practical labs.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500">Indonesia Emas 2045</p>
                <p className="mt-2 text-sm text-slate-700">
                  Nationwide initiative preparing talent for the country&apos;s golden digital era.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500">Open Projects</p>
                <p className="mt-2 text-sm text-slate-700">
                  Collaborative builds tackling real business and societal challenges.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500">Creator Studio</p>
                <p className="mt-2 text-sm text-slate-700">
                  From articles to videos, we turn insights into accessible inspiration.
                </p>
              </div>
            </div>
          </div>
          <div
            id="join-us"
            className="flex scroll-mt-[72px] flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-900/5 p-6 text-sm text-slate-700"
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Community Wins</p>
              <p className="text-lg font-semibold text-slate-900">
                We move ideas from notes to launch-ready demos through collaborative product sprints and open project briefs.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  Ship proof-of-concept apps with peer feedback loops.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  Document learnings to grow your public portfolio.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  Share outcomes with partners looking for fresh builders.
                </li>
              </ul>
            </div>
            <button className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Browse Upcoming Sprints
            </button>
          </div>
        </section>

        <section
          id="sponsor"
          className="grid scroll-mt-[72px] gap-6 rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm"
        >
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Sponsors</h2>
            <p className="mt-3 text-slate-600">
              These teams fuel ProgramingLive with tooling, hosting, and community support so builders can stay focused on
              shipping.
            </p>
            <div className="mt-6 grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-4 sm:gap-10">
              <img src="/jetbrains.svg" alt="JetBrains logo" className="h-12 w-auto" loading="lazy" />
              <img src="/sentry.svg" alt="Sentry logo" className="h-12 w-auto" loading="lazy" />
              <img src="/algolia.svg" alt="Algolia logo" className="h-12 w-auto" loading="lazy" />
              <img src="/tldraw.svg" alt="tldraw logo" className="h-12 w-auto" loading="lazy" />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

import './style.css'
import { renderNavbar } from './components/navbar'
import { renderFooter } from './components/footer'

document.documentElement.classList.add('scroll-smooth')
document.body.classList.add('antialiased', 'bg-slate-50', 'text-slate-900')

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <main id="top" class="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
      ${renderNavbar()}
      <div class="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-12 sm:px-10 lg:pb-16">
        <header class="flex flex-col">
          <section class="relative grid gap-10 pt-10 lg:items-center">
            <div class="pointer-events-none absolute inset-y-10 right-[-6rem] hidden w-[28rem] rounded-full bg-gradient-to-b from-slate-100 via-slate-50 to-transparent blur-3xl lg:block"></div>
            <div class="space-y-5 relative z-10">
              <p class="text-xs uppercase tracking-[0.3em] text-slate-500">A vibrant community of builders</p>
              <h1 class="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Clear pathways for Indonesia's next generation of developers.</h1>
              <p class="text-lg text-slate-600">We craft open-source experiences, tutorials, and programs that help aspiring programmers grow into confident creators ready to shape the nation's digital future.</p>
              <div class="flex flex-col gap-4 sm:flex-row">
                <button class="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Explore Programs</button>
                <button class="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">See Community Stories</button>
              </div>
            </div>
          </section>
        </header>

        <section class="grid gap-6 lg:grid-cols-3">
          <article id="vision" class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-slate-900">Our Vision</h2>
              <span class="h-2 w-10 rounded-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 opacity-80 transition group-hover:opacity-100"></span>
            </div>
            <p class="mt-3 text-sm text-slate-600">Empowering Indonesia's demographic advantage by nurturing world-class programmers who elevate the country's global influence.</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-700">
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Champion inclusive access to technology education.</li>
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Inspire innovation that tackles real-world challenges.</li>
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Position Indonesia as a strategic global tech player.</li>
            </ul>
          </article>
          <article id="mission" class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-slate-900">Our Mission</h2>
              <span class="h-2 w-10 rounded-full bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 opacity-80 transition group-hover:opacity-100"></span>
            </div>
            <p class="mt-3 text-sm text-slate-600">We turn inspiration into action through thoughtful content, immersive programs, and meaningful collaboration.</p>
            <div class="mt-4 space-y-3 text-sm text-slate-700">
              <p class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700"></span>Curate trusted knowledge into accessible tutorials and guides.</p>
              <p class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700"></span>Transform insight into stories and video content that inspires.</p>
              <p class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700"></span>Build open-source projects and learning tracks for hands-on growth.</p>
            </div>
          </article>
          <article class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-slate-900">For Our Community</h2>
              <span class="h-2 w-10 rounded-full bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 opacity-80 transition group-hover:opacity-100"></span>
            </div>
            <p class="mt-3 text-sm text-slate-600">Whether you're a beginner or a business innovator, ProgramingLive provides clarity and momentum.</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-700">
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500"></span>Guided learning journeys for new developers.</li>
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500"></span>Mentorship and collaboration opportunities.</li>
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500"></span>Partnerships with organizations accelerating digital transformation.</li>
            </ul>
          </article>
        </section>

        <section id="programs" class="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.3fr_1fr]">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">Signature Programs</h2>
            <p class="text-sm text-slate-600">Our structured experiences make it effortless to level up and contribute.</p>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p class="text-xs uppercase tracking-widest text-slate-500">Belajar Program</p>
                <p class="mt-2 text-sm text-slate-700">A guided curriculum blending foundational concepts with practical labs.</p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p class="text-xs uppercase tracking-widest text-slate-500">Indonesia Emas 2045</p>
                <p class="mt-2 text-sm text-slate-700">Nationwide initiative preparing talent for the country's golden digital era.</p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p class="text-xs uppercase tracking-widest text-slate-500">Open Projects</p>
                <p class="mt-2 text-sm text-slate-700">Collaborative builds tackling real business and societal challenges.</p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p class="text-xs uppercase tracking-widest text-slate-500">Creator Studio</p>
                <p class="mt-2 text-sm text-slate-700">From articles to videos, we turn insights into accessible inspiration.</p>
              </div>
            </div>
          </div>
          <div id="join-us" class="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-900/5 p-6 text-sm text-slate-700">
            <div class="space-y-3">
              <p class="text-xs uppercase tracking-[0.4em] text-slate-500">Community Wins</p>
              <p class="text-lg font-semibold text-slate-900">We move ideas from notes to launch-ready demos through collaborative product sprints and open project briefs.</p>
              <ul class="space-y-2 text-slate-600">
                <li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Ship proof-of-concept apps with peer feedback loops.</li>
                <li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Document learnings to grow your public portfolio.</li>
                <li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Share outcomes with partners looking for fresh builders.</li>
              </ul>
            </div>
            <button class="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Browse Upcoming Sprints</button>
          </div>
        </section>

        <section id="sponsor" class="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          <div>
            <h2 class="text-lg font-semibold text-slate-900">Sponsors</h2>
            <p class="mt-3 text-slate-600">These teams fuel ProgramingLive with tooling, hosting, and community support so builders can stay focused on shipping.</p>
            <div class="mt-6 grid grid-cols-2 gap-8 justify-items-center sm:grid-cols-4 sm:gap-10">
              <img
                src="/jetbrains.svg"
                alt="JetBrains logo"
                class="h-12 w-auto"
                loading="lazy"
              />
              <img
                src="/sentry.svg"
                alt="Sentry logo"
                class="h-12 w-auto"
                loading="lazy"
              />
              <img
                src="/algolia.svg"
                alt="Algolia logo"
                class="h-12 w-auto"
                loading="lazy"
              />
              <img
                src="/tldraw.svg"
                alt="tldraw logo"
                class="h-12 w-auto"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        ${renderFooter()}
      </div>
    </main>
  `

  const navToggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]')
  const navMenu = document.querySelector<HTMLElement>('[data-nav-menu]')

  if (navToggle && navMenu) {
    navMenu.classList.add('hidden')

    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden')
    })
  }
}

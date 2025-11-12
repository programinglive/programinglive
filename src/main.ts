import './style.css'

document.documentElement.classList.add('scroll-smooth')
document.body.classList.add('antialiased', 'bg-slate-50', 'text-slate-900')

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <main class="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
      <div class="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 lg:py-20">
        <header class="flex flex-col gap-12">
          <nav class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-sm shadow-slate-200/40">
            <div class="flex items-center gap-3">
              <img alt="ProgramingLive logo" class="h-10 w-10 rounded-full border border-slate-200 object-cover" src="/logo_prograiminglive.png" />
              <div class="space-y-0.5">
                <p class="text-lg font-semibold tracking-tight text-slate-900">ProgramingLive</p>
                <p class="text-xs uppercase tracking-[0.3em] text-slate-400">Elevating Indonesian software talent</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
              <a class="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-900" href="#vision">Vision</a>
              <a class="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-900" href="#mission">Mission</a>
              <a class="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-900" href="#programs">Programs</a>
              <a class="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-900" href="#sponsor">Sponsor</a>
              <a class="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-1.5 text-white transition hover:bg-slate-800" href="#join-us">Join Us</a>
            </div>
          </nav>

          <section class="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div class="space-y-6">
              <p class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-sm text-slate-600">A vibrant community of builders</p>
              <h1 class="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Clear pathways for Indonesia's next generation of developers.</h1>
              <p class="text-lg text-slate-600">We craft open-source experiences, tutorials, and programs that help aspiring programmers grow into confident creators ready to shape the nation's digital future.</p>
              <div class="flex flex-col gap-4 sm:flex-row">
                <button class="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Explore Programs</button>
                <button class="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">See Community Stories</button>
              </div>
            </div>
            <div class="relative flex items-center justify-center">
              <div class="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Why builders choose us</p>
                <div class="mt-4 grid gap-4 text-sm text-slate-700">
                  <div class="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p class="text-xs uppercase tracking-[0.25em] text-slate-500">Guided Learning</p>
                    <p class="mt-2 text-slate-600">Structured study paths help newcomers stay focused and finish their first real-world projects.</p>
                  </div>
                  <div class="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p class="text-xs uppercase tracking-[0.25em] text-slate-500">Community Support</p>
                    <p class="mt-2 text-slate-600">Weekly circles pair learners with mentors and peers for reviews, feedback, and accountability.</p>
                  </div>
                  <div class="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p class="text-xs uppercase tracking-[0.25em] text-slate-500">Tangible Outcomes</p>
                    <p class="mt-2 text-slate-600">Members graduate with shipped products, polished portfolios, and introductions to hiring partners.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>

        <section class="grid gap-6 lg:grid-cols-3">
          <article id="vision" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/10 text-slate-900">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <h2 class="text-lg font-semibold text-slate-900">Our Vision</h2>
            <p class="mt-3 text-sm text-slate-600">Empowering Indonesia's demographic advantage by nurturing world-class programmers who elevate the country's global influence.</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-700">
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Champion inclusive access to technology education.</li>
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Inspire innovation that tackles real-world challenges.</li>
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Position Indonesia as a strategic global tech player.</li>
            </ul>
          </article>
          <article id="mission" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/10 text-slate-900">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h16"></path>
                <path d="M4 12h10"></path>
                <path d="M4 19h7"></path>
                <circle cx="18" cy="12" r="3"></circle>
              </svg>
            </span>
            <h2 class="text-lg font-semibold text-slate-900">Our Mission</h2>
            <p class="mt-3 text-sm text-slate-600">We turn inspiration into action through thoughtful content, immersive programs, and meaningful collaboration.</p>
            <div class="mt-4 space-y-3 text-sm text-slate-700">
              <p class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700"></span>Curate trusted knowledge into accessible tutorials and guides.</p>
              <p class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700"></span>Transform insight into stories and video content that inspires.</p>
              <p class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700"></span>Build open-source projects and learning tracks for hands-on growth.</p>
            </div>
          </article>
          <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/10 text-slate-900">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
                <path d="M6.8 20c.74-2.39 3-4 5.2-4s4.47 1.61 5.2 4"></path>
                <path d="M18 11v2m1-1h-2"></path>
              </svg>
            </span>
            <h2 class="text-lg font-semibold text-slate-900">For Our Community</h2>
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

        <section id="sponsor" class="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 class="text-lg font-semibold text-slate-900">Sponsors & Partners</h2>
            <p class="mt-3">We collaborate with organizations that invest in sustainable innovation and talent development.</p>
            <div class="mt-6 grid grid-cols-2 gap-4 text-slate-900 sm:w-64">
              <div class="rounded-2xl border border-slate-200 bg-slate-50 py-4 text-center font-semibold">JetBrains</div>
              <div class="rounded-2xl border border-slate-200 bg-slate-50 py-4 text-center font-semibold">Sentry</div>
            </div>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">How we partner</h3>
            <ul class="space-y-3 text-slate-700">
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Project-based collaborations delivering real value for communities.</li>
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Workshops, scholarships, and tooling support for emerging talent.</li>
              <li class="flex gap-3"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>Co-created research highlighting Indonesia's digital potential.</li>
            </ul>
            <button class="mt-6 w-full rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">Partner with us</button>
          </div>
        </section>

        <footer class="flex flex-col gap-6 border-t border-slate-200 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; ${new Date().getFullYear()} ProgramingLive. Crafted with purpose in Indonesia.</p>
          <div class="flex flex-wrap gap-4">
            <a class="transition hover:text-slate-900" href="#">Privacy</a>
            <a class="transition hover:text-slate-900" href="#">Community Guidelines</a>
            <a class="transition hover:text-slate-900" href="#">Contact</a>
          </div>
        </footer>
      </div>
    </main>
  `
}

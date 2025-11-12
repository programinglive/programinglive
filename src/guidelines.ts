import './style.css'
import { renderNavbar } from './components/navbar'
import { renderFooter } from './components/footer'

document.documentElement.classList.add('scroll-smooth')
document.body.classList.add('antialiased', 'bg-slate-50', 'text-slate-900')

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <main class="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
      <div class="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 px-6 pb-12 pt-6 sm:px-8 lg:pb-16">
        ${renderNavbar({ showPrimaryLinks: false })}

        <section class="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 text-slate-700 shadow-sm">
          <header class="space-y-2">
            <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Community</p>
            <h1 class="text-3xl font-semibold text-slate-900">ProgramingLive Community Guidelines</h1>
            <p class="text-sm text-slate-500">Last updated ${new Date().toLocaleDateString()}</p>
          </header>
          <p>
            Our community thrives when everyone feels respected, supported, and empowered to build. These guidelines
            outline how we collaborate inside ProgramingLive spaces—whether you're joining an online cohort, a live
            sprint, or contributing to shared tools and documentation.
          </p>
          <div class="space-y-5">
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">What We Value</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>Kindness first—offer feedback with empathy and assume positive intent.</li>
                <li>Learning in public—share progress, challenges, and wins so others can grow with you.</li>
                <li>Crediting collaborators—recognize teammates and reference sources when inspired by others.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">Expectations for Conduct</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>Use inclusive language and avoid personal attacks, harassment, or discriminatory remarks.</li>
                <li>Keep spaces focused—move off-topic chats to the appropriate channels or threads.</li>
                <li>Do not share private information about yourself or others without explicit consent.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">Collaboration Standards</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>Document decisions and share updates so teammates can follow along asynchronously.</li>
                <li>Respect timezones—schedule live sessions thoughtfully and record when possible.</li>
                <li>Provide actionable feedback: highlight what works, what can improve, and next steps.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">Safety & Reporting</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>Flag concerning behavior by emailing <a class="text-slate-900 underline" href="mailto:creative@programinglive.com">creative@programinglive.com</a>.</li>
                <li>In urgent situations, remove yourself from the space and alert the facilitation team immediately.</li>
                <li>Reports are handled confidentially and reviewed within three business days.</li>
              </ul>
            </article>
          </div>
          <p class="text-sm text-slate-600">
            Thank you for helping build a trusted network of Indonesian builders. Questions or suggestions? Reach out at
            <a class="text-slate-900 underline" href="mailto:creative@programinglive.com">creative@programinglive.com</a>.
          </p>
        </section>

        ${renderFooter()}
      </div>
    </main>
  `
}

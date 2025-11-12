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
            <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Privacy</p>
            <h1 class="text-3xl font-semibold text-slate-900">ProgramingLive Privacy Policy</h1>
            <p class="text-sm text-slate-500">Updated ${new Date().toLocaleDateString()}</p>
          </header>
          <p>
            ProgramingLive is committed to respecting your privacy and protecting the personal information you
            share with us. This policy outlines what we collect, how we use it, and the choices you have regarding
            your data.
          </p>
          <div class="space-y-4">
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">Information We Collect</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>Contact details you share when subscribing to updates or requesting support.</li>
                <li>Usage data from community programs, learning cohorts, and product experiments.</li>
                <li>Anonymous analytics that helps us understand traffic patterns and improve the experience.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">How We Use Your Information</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>To deliver program updates, community invites, and educational resources you opt into.</li>
                <li>To maintain a safe and high-quality learning environment for all members.</li>
                <li>To improve our content, tools, and services based on aggregated insights.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">Your Choices</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>You can update or delete your contact information by emailing <a class="text-slate-900 underline" href="mailto:creative@programinglive.com">creative@programinglive.com</a>.</li>
                <li>You may unsubscribe from any communication at any time using the link provided in our messages.</li>
                <li>For data access requests, contact us and we will respond within seven business days.</li>
              </ul>
            </article>
          </div>
          <p class="text-sm text-slate-600">
            Questions about this policy? Reach out at <a class="text-slate-900 underline" href="mailto:creative@programinglive.com">creative@programinglive.com</a> and we'll be happy to help.
          </p>
        </section>

        ${renderFooter()}
      </div>
    </main>
  `
}

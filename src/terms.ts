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
            <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Legal</p>
            <h1 class="text-3xl font-semibold text-slate-900">ProgramingLive Terms of Service</h1>
            <p class="text-sm text-slate-500">Effective ${new Date().toLocaleDateString()}</p>
          </header>
          <p>
            These Terms of Service ("Terms") govern your access to and use of ProgramingLive websites, learning
            programs, and community spaces (collectively, the "Services"). By participating, you agree to the
            conditions below and any policies referenced within them.
          </p>
          <div class="space-y-5">
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">1. Accounts & Eligibility</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>You must be at least 16 years old or have parental consent to participate.</li>
                <li>Provide accurate information when registering for programs or communication lists.</li>
                <li>You are responsible for safeguarding your account credentials and activity.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">2. Acceptable Use</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>Follow our <a class="text-slate-900 underline" href="/guidelines.html">Community Guidelines</a>.</li>
                <li>Do not misuse Services by attempting unauthorized access, distributing malware, or spamming.</li>
                <li>Respect intellectual property and only share content that you have the rights to distribute.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">3. Content & Ownership</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>You retain ownership of the content you create. You grant ProgramingLive a non-exclusive license to display and share contributions within our programs.</li>
                <li>ProgramingLive content—including curriculum, brand assets, and software—is protected and may not be reused without permission.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">4. Program Changes</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>We may adjust or discontinue programs to improve learning experiences.</li>
                <li>Important updates will be shared via email or the channels you used to sign up.</li>
                <li>Participants may withdraw at any time by emailing <a class="text-slate-900 underline" href="mailto:creative@programinglive.com">creative@programinglive.com</a>.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">5. Disclaimers & Liability</h2>
              <ul class="list-disc space-y-2 pl-5 text-sm">
                <li>Services are provided "as is" without warranties of any kind.</li>
                <li>ProgramingLive is not liable for indirect or consequential damages resulting from participation.</li>
                <li>Some jurisdictions do not allow limitations on implied warranties, so these limits may not apply to you.</li>
              </ul>
            </article>
            <article class="space-y-3">
              <h2 class="text-lg font-semibold text-slate-900">6. Contact</h2>
              <p class="text-sm">
                Questions about these Terms? Email <a class="text-slate-900 underline" href="mailto:creative@programinglive.com">creative@programinglive.com</a>.
              </p>
            </article>
          </div>
        </section>

        ${renderFooter()}
      </div>
    </main>
  `
}

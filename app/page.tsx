import SiteShell from '../components/SiteShell'
import { ButtonLink, Container, Eyebrow, SectionHeading, StatusBadge } from '../components/ui'
import { approachSteps, impactFunnel, learnerLevels, partnerCategories, programs } from '../data/site-content'
import developmentProgress from '../data/development-progress.json'

export default function HomePage() {
  const completed = developmentProgress.goals.reduce((total, goal) => total + goal.completed, 0)
  const milestones = developmentProgress.goals.reduce((total, goal) => total + goal.total, 0)
  const progress = Math.round((completed / milestones) * 100)

  return (
    <SiteShell>
      <section className="overflow-hidden border-b border-slate-200 bg-white py-14 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>Open learning · Practical skills · Shared opportunity</Eyebrow>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">Building Pathways from Learning to Opportunity</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">ProgramingLive provides accessible programming education, practical technology skills, project-based learning, and collaborative opportunities for learners with limited access to formal technology education.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="https://belajar.programinglive.com" external>Start Learning</ButtonLink>
              <ButtonLink href="/partners" variant="secondary">Partner With Us</ButtonLink>
              <ButtonLink href="/programs" variant="secondary">Explore Our Programs</ButtonLink>
            </div>
            <p className="mt-5 text-sm text-slate-500">Begin without creating an account. Sign in only when you want to save progress or submit work.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300/40 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">The learning pathway</p>
            <ol className="mt-6 space-y-3">
              {approachSteps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">{index + 1}</span>
                  <div><p className="font-semibold">{step.title}</p><p className="mt-1 text-sm leading-6 text-slate-300">{step.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Why this matters" title="Access to technology education is still uneven" description="Many learners can access information but not a coherent pathway that combines fundamentals, practice, feedback, projects, and collaboration. The gap is often larger outside major cities and for learners using limited connectivity or shared devices." />
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Access', 'Relevant technology learning is not equally available across locations and institutions.'],
              ['Practice', 'Theory alone does not provide the repetition needed to build confidence.'],
              ['Guidance', 'Beginners often lack timely support when they encounter a blocker.'],
              ['Progression', 'The route from first lesson to real project and public portfolio is often unclear.'],
            ].map(([title, text]) => <article key={title} className="bg-white p-6"><h3 className="font-semibold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Our approach" title="A progression designed around doing" description="Skills are introduced in sequence. Collaboration and open-source participation come after learners have the foundations and project experience to use them well." />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {approachSteps.map((step, index) => (
              <article key={step.title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold text-cyan-700">0{index + 1}</p><h3 className="mt-6 text-lg font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Learner journey" title="A clear place to start—and a visible next step" description="The pathway begins with practical digital confidence and gradually advances toward projects, teamwork, and contribution." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {learnerLevels.map((item) => (
              <article key={item.level} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">{item.level}</p><h3 className="mt-2 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8"><ButtonLink href="/learn">View the learning experience</ButtonLink></div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="Programs" title="Structured pathways with honest status" description="Each program is defined by its objective, learners, delivery model, expected output, measurement approach, and partnership needs." /><ButtonLink href="/programs" variant="secondary">View all programs</ButtonLink></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {programs.slice(0, 3).map((program) => (
              <article key={program.slug} className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <StatusBadge status={program.status} /><h3 className="mt-5 text-xl font-semibold">{program.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{program.objective}</p><p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500"><strong className="text-slate-700">Output:</strong> {program.output}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-cyan-950 p-8 text-white">
            <Eyebrow dark>Impact</Eyebrow><h2 className="mt-3 text-3xl font-semibold tracking-tight">Current Stage: Early Pilot</h2><p className="mt-4 leading-7 text-cyan-50/80">We are validating the learning model through small-scale pilots before expanding to additional communities and institutions. We do not publish impact totals until the underlying measurement is reliable.</p><div className="mt-7"><ButtonLink href="/impact" variant="light">How impact will be measured</ButtonLink></div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold text-slate-950">Learner impact funnel</p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {impactFunnel.map((item, index) => <li key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-700"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">{index + 1}</span>{item}</li>)}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Partnerships" title="A practical role for institutions, funders, and technology communities" description="Partners can support delivery, access, infrastructure, curriculum quality, mentorship, and independent evaluation without turning learners into beneficiaries of charity messaging." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map((category) => <article key={category.title} className="rounded-2xl border border-slate-200 p-5"><h3 className="font-semibold">{category.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p></article>)}
          </div>
          <div className="mt-8"><ButtonLink href="/partners">Become a Partner</ButtonLink></div>
        </Container>
      </section>

      <section id="development-progress" className="py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <Eyebrow dark>Public development bulletin</Eyebrow><h2 className="mt-3 text-3xl font-semibold tracking-tight">The plan, status, and next decisions are public.</h2><p className="mt-4 leading-7 text-slate-300">Updated {developmentProgress.updatedAt}. The website and Discord bulletin use the same roadmap source.</p>
                <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5"><div className="flex items-end justify-between"><p><span className="block text-3xl font-semibold">{progress}%</span><span className="text-xs text-slate-400">roadmap milestones complete</span></p><p className="text-sm text-slate-300">{completed}/{milestones}</p></div><div role="progressbar" aria-label="Overall development progress" aria-valuenow={completed} aria-valuemin={0} aria-valuemax={milestones} className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan-300" style={{ width: `${progress}%` }} /></div></div>
                <div className="mt-7"><ButtonLink href="/roadmap" variant="light">Explore the public roadmap</ButtonLink></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {developmentProgress.goals.map((goal) => <article key={goal.priority} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"><div className="flex items-center justify-between gap-3"><p className="text-xs font-bold text-cyan-300">{goal.priority}</p><span className="text-xs text-slate-400">{goal.completed}/{goal.total}</span></div><h3 className="mt-2 font-semibold">{goal.title}</h3><p className="mt-2 text-sm leading-5 text-slate-300">{goal.summary}</p></article>)}
              </div>
            </div>
            <div className="grid border-t border-white/10 bg-black/20 md:grid-cols-2"><div className="p-6 sm:px-10"><p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Current focus</p><p className="mt-2 text-sm text-slate-200">{developmentProgress.currentFocus}</p></div><div className="border-t border-white/10 p-6 sm:px-10 md:border-l md:border-t-0"><p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Up next</p><p className="mt-2 text-sm text-slate-200">{developmentProgress.nextUp}</p></div></div>
          </div>
        </Container>
      </section>
    </SiteShell>
  )
}

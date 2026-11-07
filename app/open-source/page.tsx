'use client'

import { useMemo, useState } from 'react'
import SiteShell from '../../components/SiteShell'
import { Container, PageHero, SectionHeading } from '../../components/ui'
import { trackProjectIndex } from '../../data/site-content'

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

interface OpenSourceProject {
  name: string
  objective: string
  stack: string
  difficulty: Difficulty
  status: string
  maintainers: string
  repository: string
  website: string
  contributing: string
  setup: string
  tasks: string
}

const projects: Array<OpenSourceProject> = [
  {
    name: 'ProgramingLive Portal & Docs',
    objective: 'Open platform and documentation for accessible technology education and community programs.',
    stack: 'Next.js · Markdown · TypeScript',
    difficulty: 'Beginner',
    status: 'Maintained',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/programinglive',
    website: 'https://programinglive.com/',
    contributing: 'https://github.com/programinglive/programinglive/blob/main/CONTRIBUTING.md',
    setup: 'git clone https://github.com/programinglive/programinglive.git && cd programinglive && npm install && npm test',
    tasks: 'Documentation review, broken link verification, copywriting clarity, and accessible semantic HTML checks.',
  },
  {
    name: 'Belajar PHP',
    objective: 'Mini project and practical exercises for learners building PHP and web development fundamentals.',
    stack: 'PHP · Web Fundamentals',
    difficulty: 'Beginner',
    status: 'Maintained',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/belajar',
    website: 'https://github.com/programinglive/belajar',
    contributing: 'https://github.com/programinglive/belajar#readme',
    setup: 'git clone https://github.com/programinglive/belajar.git && cd belajar',
    tasks: 'Code readability improvements, starter exercise expansion, and beginner-friendly inline comments.',
  },
  {
    name: 'Commiter',
    objective: 'Standardize conventional commits, versioning, and release automation across projects.',
    stack: 'Node.js · npm · GitHub Actions',
    difficulty: 'Intermediate',
    status: 'Maintained',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/commiter',
    website: 'https://commiter.programinglive.com/',
    contributing: 'https://github.com/programinglive/commiter/blob/main/CONTRIBUTING.md',
    setup: 'git clone https://github.com/programinglive/commiter.git && cd commiter && npm install && npm test',
    tasks: 'Documentation improvements, framework integration examples, and cross-platform terminal testing.',
  },
  {
    name: 'Zettly Editor',
    objective: 'Shadcn-based WYSIWYG rich text and todo editor component designed for reusable embedding across web apps.',
    stack: 'React · TypeScript · Tailwind CSS · Shadcn UI',
    difficulty: 'Intermediate',
    status: 'Maintained',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/zettly-editor',
    website: 'https://github.com/programinglive/zettly-editor',
    contributing: 'https://github.com/programinglive/zettly-editor#readme',
    setup: 'git clone https://github.com/programinglive/zettly-editor.git && cd zettly-editor && npm install && npm test',
    tasks: 'Plugin extensions, mobile touch interaction improvements, and headless editor accessibility checks.',
  },
  {
    name: 'Windows Gaming & Dev Toolkit',
    objective: 'Reversible Windows diagnostics, gaming/development tuning, and system recovery scripts.',
    stack: 'PowerShell · Windows API',
    difficulty: 'Intermediate',
    status: 'Maintained',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/windows-gaming-dev-toolkit',
    website: 'https://github.com/programinglive/windows-gaming-dev-toolkit',
    contributing: 'https://github.com/programinglive/windows-gaming-dev-toolkit#readme',
    setup: 'git clone https://github.com/programinglive/windows-gaming-dev-toolkit.git && cd windows-gaming-dev-toolkit',
    tasks: 'PowerShell safety wrappers, diagnostic reports, and reversible registry tweak tests.',
  },
  {
    name: 'Zettly',
    objective: 'Knowledge-management and personal productivity workspace blending Zettelkasten note linking and Eisenhower matrix prioritization.',
    stack: 'React · TypeScript · Vite · Tailwind CSS',
    difficulty: 'Advanced',
    status: 'Maintained',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/zettly',
    website: 'https://zettly.programinglive.com/',
    contributing: 'https://github.com/programinglive/zettly#readme',
    setup: 'git clone https://github.com/programinglive/zettly.git && cd zettly && npm install && npm run build',
    tasks: 'Matrix drag-and-drop workflows, bidirectional note linking optimizations, and offline synchronization.',
  },
  {
    name: 'HRIS Community',
    objective: 'Full-featured Open Source Human Resource Information System for companies and organizations.',
    stack: 'PHP · Laravel · MySQL · Tailwind CSS',
    difficulty: 'Advanced',
    status: 'Maintained',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/hris',
    website: 'https://github.com/programinglive/hris',
    contributing: 'https://github.com/programinglive/hris#readme',
    setup: 'git clone https://github.com/programinglive/hris.git && cd hris && composer install && npm install',
    tasks: 'Attendance module validation, payroll test coverage expansion, and multi-tenant permission fixtures.',
  },
  {
    name: 'DB Pinball',
    objective: 'Modern TablePlus-style database management workspace with integrated Laravel backup and restore orchestration.',
    stack: 'Tauri · Rust · React · TypeScript · PHP',
    difficulty: 'Advanced',
    status: 'Maintained',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/dbpinball',
    website: 'https://github.com/programinglive/dbpinball',
    contributing: 'https://github.com/programinglive/dbpinball#readme',
    setup: 'git clone https://github.com/programinglive/dbpinball.git && cd dbpinball && npm install',
    tasks: 'Query runner performance, driver connections (Postgres/MySQL/SQLite), and Laravel adapter hooks.',
  },
]

export default function OpenSourcePage() {
  const [query, setQuery] = useState('')
  const [difficulty, setDifficulty] = useState<'All' | Difficulty>('All')

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (difficulty === 'All' || project.difficulty === difficulty) &&
          `${project.name} ${project.objective} ${project.stack}`.toLowerCase().includes(query.toLowerCase().trim())
      ),
    [query, difficulty]
  )

  return (
    <SiteShell>
      <PageHero
        eyebrow="Open source as a learning pathway"
        title="Move from structured learning into real development environments"
        description="Learners gradually progress toward documentation, bug fixes, features, and community projects. Every project makes its objective, setup, difficulty, contribution expectations, maintainers, and status clear."
      />
      <Container className="py-14 sm:py-20">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[1fr_auto] md:items-end">
          <label className="grid gap-2 text-sm font-medium">
            <span>Search projects</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name, objective, or technology"
              className="min-h-11 rounded-xl border border-slate-300 px-3 focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20"
            />
          </label>
          <fieldset>
            <legend className="text-sm font-medium">Difficulty</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={difficulty === value}
                  onClick={() => setDifficulty(value)}
                  className={`min-h-10 rounded-full px-4 text-sm font-semibold ${
                    difficulty === value
                      ? 'bg-slate-950 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-8 grid gap-6">
          {filtered.length === 0 && (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
              No projects match this filter.
            </p>
          )}

          {filtered.map((project) => (
            <article key={project.name} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-800">
                      {project.difficulty}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {project.status}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-slate-950">{project.name}</h2>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600">{project.objective}</p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-cyan-800"
                  >
                    Website ↗
                  </a>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Repository ↗
                  </a>
                  <a
                    href={project.contributing}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Contributing Guide ↗
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Tested local setup</p>
                <code className="mt-2 block overflow-x-auto font-mono text-xs text-slate-200">
                  {project.setup}
                </code>
              </div>

              <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
                <div className="bg-slate-50 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Technology stack</dt>
                  <dd className="mt-2 text-sm text-slate-800">{project.stack}</dd>
                </div>
                <div className="bg-slate-50 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Beginner-friendly tasks</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-700">{project.tasks}</dd>
                </div>
                <div className="bg-slate-50 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active maintainers</dt>
                  <dd className="mt-2 text-sm text-slate-800">{project.maintainers}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {/* Learning Track to Repository Index */}
        <section id="track-index" className="mt-16 sm:mt-24">
          <SectionHeading
            eyebrow="Track-to-project index"
            title="Connecting learning levels to practical repository contributions"
            description="Matches your current learning stage with recommended projects and scoped tasks, ensuring you never face overwhelming codebases prematurely."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {trackProjectIndex.map((item) => (
              <article key={item.level} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">{item.level}</p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-950">{item.project}</h3>
                  <a
                    href={item.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-cyan-800 hover:text-cyan-950"
                  >
                    View repo ↗
                  </a>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  <strong className="text-slate-800">Suggested tasks:</strong> {item.tasks}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </SiteShell>
  )
}

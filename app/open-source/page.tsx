"use client"

import { useMemo, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const projects = [
  {
    name: 'Dev Workflow Knowledge Hub',
    tagline: 'History, commands, and documentation unified into one dashboard.',
    description:
      'A read-only dashboard that shows workflow history, release cadence, and MCP command docs so every task stays disciplined.',
    highlights: [
      'Live Insights connect directly to .state history to visualize progress trends and release cadence.',
      'Built-in playbook outlines every MCP tool with prerequisites, recommended usage, and follow-up steps.',
      'Includes hosted docs plus a GitHub repo, making self-hosting as simple as running `node index.js`.',
    ],
    links: [
      { label: 'View Website', href: 'https://devworkflow.programinglive.com/' },
      { label: 'GitHub Repo', href: 'https://github.com/programinglive/dev-workflow-mcp-server' },
      { label: 'View on npm', href: 'https://www.npmjs.com/package/@programinglive/dev-workflow-mcp-server' },
    ],
  },
  {
    name: 'Commiter',
    tagline: 'Standardized commits and automated releases powered by conventional commits.',
    description:
      'A CLI toolkit built on standard-version that enforces commit conventions, bumps semantic versions, and generates icon-rich changelogs for every repository.',
    highlights: [
      'Validates commit messages via Husky hooks so every contribution follows the same format.',
      'Automates semantic versioning (major / minor / patch) and changelog generation with a single command.',
      'Provides release helpers for npm publishing and GitHub Actions plus a dry-run workflow for safe testing.',
    ],
    links: [
      { label: 'View Website', href: 'https://commiter.programinglive.com/' },
      { label: 'GitHub Repo', href: 'https://github.com/programinglive/commiter' },
      { label: 'View on npm', href: 'https://www.npmjs.com/package/@programinglive/commiter' },
    ],
  },
]

export default function OpenSourcePage() {
  const [query, setQuery] = useState('')
  const filteredProjects = useMemo(() => {
    const value = query.toLowerCase().trim()
    if (!value) return projects
    return projects.filter((project) => {
      return (
        project.name.toLowerCase().includes(value) ||
        project.tagline.toLowerCase().includes(value) ||
        project.description.toLowerCase().includes(value)
      )
    })
  }, [query])

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-12 sm:px-10 lg:pb-16">
        <section className="pt-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Open Source</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Open Source Projects
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            From core libraries to developer tools, see all the open source projects we maintain.
          </p>
          <div className="space-y-2 pt-2">
            <label htmlFor="project-search" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Search
            </label>
            <input
              id="project-search"
              type="search"
              placeholder="Search projects by name or keyword"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 sm:max-w-md"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </section>

        <section className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">All Projects</p>
            <p className="text-sm text-slate-600">Complete list of our open source repositories.</p>
          </div>

          <div className="grid gap-6">
            {filteredProjects.length === 0 && (
              <p className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-6 text-sm text-slate-600">
                No projects match "{query}" yet. Try another keyword.
              </p>
            )}
            {filteredProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition hover:border-slate-300 hover:bg-white"
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{project.name}</p>
                  <h2 className="text-xl font-semibold text-slate-900">{project.tagline}</h2>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-900 px-4 py-2 text-slate-900 transition hover:bg-slate-900 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

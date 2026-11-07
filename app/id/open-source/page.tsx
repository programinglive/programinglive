'use client'

import { useMemo, useState } from 'react'
import SiteShell from '../../../components/SiteShell'
import { Container, PageHero, SectionHeading } from '../../../components/ui'
import { trackProjectIndexId } from '../../../data/site-content'

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

interface ProjectItem {
  name: string
  objective: string
  stack: string
  difficulty: Difficulty
  difficultyLabel: string
  status: string
  maintainers: string
  repository: string
  website: string
  contributing: string
  setup: string
  tasks: string
}

const projects: Array<ProjectItem> = [
  {
    name: 'ProgramingLive Portal & Dokumentasi',
    objective: 'Platform terbuka dan materi dokumentasi pendidikan teknologi serta program sosial komunitas.',
    stack: 'Next.js · Markdown · TypeScript',
    difficulty: 'Beginner',
    difficultyLabel: 'Pemula',
    status: 'Dipelihara',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/programinglive',
    website: 'https://programinglive.com/',
    contributing: 'https://github.com/programinglive/programinglive/blob/main/CONTRIBUTING.md',
    setup: 'git clone https://github.com/programinglive/programinglive.git && cd programinglive && npm install && npm test',
    tasks: 'Peninjauan dokumentasi, pengecekan tautan rusak, perbaikan kalimat (copywriting), dan pengujian aksesibilitas HTML semantik.',
  },
  {
    name: 'Belajar PHP',
    objective: 'Mini proyek dan latihan praktis untuk pelajar yang membangun fondasi pemrograman PHP dan pengembangan web.',
    stack: 'PHP · Fondasi Web',
    difficulty: 'Beginner',
    difficultyLabel: 'Pemula',
    status: 'Dipelihara',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/belajar',
    website: 'https://github.com/programinglive/belajar',
    contributing: 'https://github.com/programinglive/belajar#readme',
    setup: 'git clone https://github.com/programinglive/belajar.git && cd belajar',
    tasks: 'Peningkatan keterbacaan kode, penambahan latihan pemula, dan dokumentasi komentar kode yang ramah pemula.',
  },
  {
    name: 'Commiter',
    objective: 'Menstandarkan Conventional Commits, penomoran versi semantik, dan otomatisasi rilis kode.',
    stack: 'Node.js · npm · GitHub Actions',
    difficulty: 'Intermediate',
    difficultyLabel: 'Menengah',
    status: 'Dipelihara',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/commiter',
    website: 'https://commiter.programinglive.com/',
    contributing: 'https://github.com/programinglive/commiter/blob/main/CONTRIBUTING.md',
    setup: 'git clone https://github.com/programinglive/commiter.git && cd commiter && npm install && npm test',
    tasks: 'Dokumentasi, contoh penggunaan di berbagai framework, dan validasi lintas platform Windows/Linux.',
  },
  {
    name: 'Zettly Editor',
    objective: 'Komponen WYSIWYG editor kaya fitur dan todo berbasis Shadcn UI yang dirancang untuk integrasi di berbagai aplikasi web.',
    stack: 'React · TypeScript · Tailwind CSS · Shadcn UI',
    difficulty: 'Intermediate',
    difficultyLabel: 'Menengah',
    status: 'Dipelihara',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/zettly-editor',
    website: 'https://github.com/programinglive/zettly-editor',
    contributing: 'https://github.com/programinglive/zettly-editor#readme',
    setup: 'git clone https://github.com/programinglive/zettly-editor.git && cd zettly-editor && npm install && npm test',
    tasks: 'Ekstensi plugin, peningkatan interaksi sentuh di ponsel, dan pengujian aksesibilitas editor headless.',
  },
  {
    name: 'Windows Gaming & Dev Toolkit',
    objective: 'Toolkit skrip PowerShell untuk optimasi, diagnosa, dan pemulihan sistem Windows yang aman dan dapat dibatalkan.',
    stack: 'PowerShell · Windows API',
    difficulty: 'Intermediate',
    difficultyLabel: 'Menengah',
    status: 'Dipelihara',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/windows-gaming-dev-toolkit',
    website: 'https://github.com/programinglive/windows-gaming-dev-toolkit',
    contributing: 'https://github.com/programinglive/windows-gaming-dev-toolkit#readme',
    setup: 'git clone https://github.com/programinglive/windows-gaming-dev-toolkit.git && cd windows-gaming-dev-toolkit',
    tasks: 'Wrapper keamanan PowerShell, pembuatan laporan diagnosa, dan pengujian registry tweak yang dapat di-rollback.',
  },
  {
    name: 'Zettly',
    objective: 'Aplikasi produktivitas dan manajemen pengetahuan yang memadukan catatan Zettelkasten dan matriks prioritas Eisenhower.',
    stack: 'React · TypeScript · Vite · Tailwind CSS',
    difficulty: 'Advanced',
    difficultyLabel: 'Lanjutan',
    status: 'Dipelihara',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/zettly',
    website: 'https://zettly.programinglive.com/',
    contributing: 'https://github.com/programinglive/zettly#readme',
    setup: 'git clone https://github.com/programinglive/zettly.git && cd zettly && npm install && npm run build',
    tasks: 'Alur kerja drag-and-drop matriks, optimasi tautan dua arah, dan sinkronisasi luring (offline).',
  },
  {
    name: 'HRIS Community',
    objective: 'Sistem Informasi Sumber Daya Manusia (HRIS) Open Source lengkap untuk kebutuhan operasional perusahaan dan organisasi.',
    stack: 'PHP · Laravel · MySQL · Tailwind CSS',
    difficulty: 'Advanced',
    difficultyLabel: 'Lanjutan',
    status: 'Dipelihara',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/hris',
    website: 'https://github.com/programinglive/hris',
    contributing: 'https://github.com/programinglive/hris#readme',
    setup: 'git clone https://github.com/programinglive/hris.git && cd hris && composer install && npm install',
    tasks: 'Validasi modul presensi karyawan, penambahan cakupan tes payroll, dan pengujian perizinan multi-cabang.',
  },
  {
    name: 'DB Pinball',
    objective: 'Workspace manajemen database desktop modern bergaya TablePlus dengan integrasi orkestrasi backup dan restore Laravel.',
    stack: 'Tauri · Rust · React · TypeScript · PHP',
    difficulty: 'Advanced',
    difficultyLabel: 'Lanjutan',
    status: 'Dipelihara',
    maintainers: 'ProgramingLive',
    repository: 'https://github.com/programinglive/dbpinball',
    website: 'https://github.com/programinglive/dbpinball',
    contributing: 'https://github.com/programinglive/dbpinball#readme',
    setup: 'git clone https://github.com/programinglive/dbpinball.git && cd dbpinball && npm install',
    tasks: 'Peningkatan performa query runner, koneksi driver (Postgres/MySQL/SQLite), dan adapter hook Laravel.',
  },
]

const difficultyOptions: Array<{ value: 'All' | Difficulty; label: string }> = [
  { value: 'All', label: 'Semua Tingkat' },
  { value: 'Beginner', label: 'Pemula' },
  { value: 'Intermediate', label: 'Menengah' },
  { value: 'Advanced', label: 'Lanjutan' },
]

export default function IndonesianOpenSourcePage() {
  const [query, setQuery] = useState('')
  const [difficulty, setDifficulty] = useState<'All' | Difficulty>('All')

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (difficulty === 'All' || project.difficulty === difficulty) &&
          `${project.name} ${project.objective} ${project.stack} ${project.difficultyLabel}`
            .toLowerCase()
            .includes(query.toLowerCase().trim())
      ),
    [query, difficulty]
  )

  return (
    <SiteShell locale="id">
      <PageHero
        eyebrow="Open source sebagai jalur pembelajaran"
        title="Beralih dari pembelajaran terstruktur ke lingkungan pengembangan nyata"
        description="Pelajar berkembang secara bertahap menuju kontribusi dokumentasi, perbaikan bug, pengembangan fitur, dan proyek komunitas. Setiap proyek menguraikan tujuan, panduan instalasi, tingkat kesulitan, ekspektasi kontribusi, pemelihara, dan status operasional secara transparan."
      />
      <Container className="py-14 sm:py-20">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[1fr_auto] md:items-end">
          <label className="grid gap-2 text-sm font-medium">
            <span>Cari repositori proyek</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Nama, sasaran, atau teknologi"
              className="min-h-11 rounded-xl border border-slate-300 px-3 focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20"
            />
          </label>
          <fieldset>
            <legend className="text-sm font-medium">Tingkat Kesulitan</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {difficultyOptions.map(({ value, label }) => (
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
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-8 grid gap-6">
          {filtered.length === 0 && (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
              Tidak ada proyek yang sesuai dengan filter ini.
            </p>
          )}

          {filtered.map((project) => (
            <article key={project.name} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-800">
                      {project.difficultyLabel}
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
                    Situs Web ↗
                  </a>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Repositori ↗
                  </a>
                  <a
                    href={project.contributing}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Panduan Kontribusi ↗
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Panduan Penyiapan Lokal Teruji</p>
                <code className="mt-2 block overflow-x-auto font-mono text-xs text-slate-200">
                  {project.setup}
                </code>
              </div>

              <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
                <div className="bg-slate-50 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Teknologi yang digunakan</dt>
                  <dd className="mt-2 text-sm text-slate-800">{project.stack}</dd>
                </div>
                <div className="bg-slate-50 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tugas ramah pemula</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-700">{project.tasks}</dd>
                </div>
                <div className="bg-slate-50 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pengelola aktif</dt>
                  <dd className="mt-2 text-sm text-slate-800">{project.maintainers}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {/* Learning Track to Repository Index */}
        <section id="track-index" className="mt-16 sm:mt-24">
          <SectionHeading
            eyebrow="Indeks Jalur Belajar ke Repositori"
            title="Menghubungkan tingkat kemampuan dengan tugas kontribusi nyata"
            description="Mencocokkan tahap belajar Anda saat ini dengan proyek dan tugas terarah yang sesuai, sehingga Anda tidak kewalahan menghadapi kode proyek yang terlalu rumit."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {trackProjectIndexId.map((item) => (
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
                    Buka repo ↗
                  </a>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  <strong className="text-slate-800">Rekomendasi tugas:</strong> {item.tasks}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </SiteShell>
  )
}

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

export const POST_CATEGORIES = [
  'Fundamentals',
  'Frontend',
  'Backend',
  'Testing & DevOps',
  'Algorithms',
  'Growth',
  'Writing & Communication',
] as const

export type PostCategory = (typeof POST_CATEGORIES)[number]

export interface Post {
  slug: string
  title: string
  date: string
  published?: string
  categories: string[]
  summary?: string
  sourceUrl?: string
  image?: string
  wordCount?: number
  supersededBy?: string
  related?: string[]
}

const POSTS_DIR = 'content/posts'
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n)?/

function parseScalar(value: string): string | number | boolean {
  const s = value.trim()
  if (s.length >= 2 && s.startsWith('"') && s.endsWith('"')) {
    try {
      return JSON.parse(s) as string
    } catch {
      return s.slice(1, -1)
    }
  }
  if (/^-?\d+$/.test(s)) return Number(s)
  if (s === 'true') return true
  if (s === 'false') return false
  return s
}

/** Parse the deterministic YAML frontmatter emitted by scripts/import-blogspot.cjs. */
export function parsePostFrontmatter(raw: string): { frontmatter: Record<string, unknown>; body: string } {
  const m = FRONTMATTER_RE.exec(raw)
  if (!m) return { frontmatter: {}, body: raw }
  const lines = m[1].split(/\r?\n/)
  const frontmatter: Record<string, unknown> = {}
  let i = 0
  while (i < lines.length) {
    const keyMatch = /^([A-Za-z_][\w]*):\s?(.*)$/.exec(lines[i])
    if (!keyMatch) {
      i += 1
      continue
    }
    const key = keyMatch[1]
    const rest = (keyMatch[2] || '').trim()
    if (rest === '') {
      const list: unknown[] = []
      let j = i + 1
      while (j < lines.length && /^\s+-\s/.test(lines[j])) {
        list.push(parseScalar(lines[j].replace(/^\s+-\s/, '')))
        j += 1
      }
      frontmatter[key] = list
      i = j
      continue
    }
    frontmatter[key] = parseScalar(rest)
    i += 1
  }
  return { frontmatter, body: raw.slice(m[0].length).replace(/^\s+/, '') }
}

function coercePost(raw: string): Post {
  const { frontmatter } = parsePostFrontmatter(raw)
  const fm = frontmatter as Record<string, never>
  return {
    slug: String(fm.slug ?? ''),
    title: String(fm.title ?? ''),
    date: String(fm.date ?? ''),
    published: fm.published ? String(fm.published) : undefined,
    categories: Array.isArray(fm.categories) ? (fm.categories as unknown[]).map(String) : [],
    summary: fm.summary ? String(fm.summary) : undefined,
    sourceUrl: fm.sourceUrl ? String(fm.sourceUrl) : undefined,
    image: fm.image ? String(fm.image) : undefined,
    wordCount: fm.wordCount === undefined ? undefined : Number(fm.wordCount),
    supersededBy: fm.supersededBy ? String(fm.supersededBy) : undefined,
    related: Array.isArray(fm.related) ? (fm.related as unknown[]).map(String) : undefined,
  }
}

function postsDirectory(): string {
  return join(process.cwd(), POSTS_DIR)
}

let cached: Post[] | null = null

/** All imported posts, sorted by date ascending then slug. */
export function loadPosts(): Post[] {
  if (cached) return cached
  const dir = postsDirectory()
  if (!existsSync(dir)) {
    cached = []
    return cached
  }
  const posts = readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => coercePost(readFileSync(join(dir, name), 'utf8')))
    .filter((post) => post.slug)
  posts.sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug))
  cached = posts
  return posts
}

/** All post slugs, in load order. */
export function allPostSlugs(): string[] {
  return loadPosts().map((post) => post.slug)
}

export function getPost(slug: string): Post | undefined {
  return loadPosts().find((post) => post.slug === slug)
}

/** Full markdown body for one post, or undefined when the file is missing. */
export function loadPostBody(slug: string): string | undefined {
  const file = join(postsDirectory(), `${slug}.md`)
  if (!existsSync(file)) return undefined
  return parsePostFrontmatter(readFileSync(file, 'utf8')).body
}

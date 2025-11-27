import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "ProgramingLive — Clear pathways for Indonesia's builders",
  description:
    "ProgramingLive is a vibrant community of programmers in Indonesia, empowering developers with structured programs, collaborative sprints, and support to ship meaningful products.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}

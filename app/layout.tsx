import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "ProgramingLive — Clear pathways for Indonesia's builders",
  description:
    "ProgramingLive empowers Indonesian developers with structured programs, collaborative sprints, and community support to ship meaningful products.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}

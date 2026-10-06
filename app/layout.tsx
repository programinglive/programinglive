import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://programinglive.com'),
  title: { default: 'ProgramingLive — Learning to opportunity through technology', template: '%s | ProgramingLive' },
  description: 'Accessible programming education, practical technology skills, project-based learning, and open-source pathways for learners with limited access to formal technology education.',
  applicationName: 'ProgramingLive',
  alternates: { canonical: '/', languages: { en: '/', id: '/id' } },
  openGraph: { type: 'website', url: '/', siteName: 'ProgramingLive', title: 'Building Pathways from Learning to Opportunity', description: 'An open learning and technology education initiative for learners, institutions, and partners.', images: [{ url: '/android-chrome-512x512.png', width: 512, height: 512, alt: 'ProgramingLive' }] },
  twitter: { card: 'summary', title: 'Building Pathways from Learning to Opportunity', description: 'Accessible technology education, practical projects, and open-source pathways.', images: ['/android-chrome-512x512.png'] },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#ffffff', colorScheme: 'light' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = { '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: 'ProgramingLive', url: 'https://programinglive.com', logo: 'https://programinglive.com/android-chrome-512x512.png', description: 'An open learning and technology education initiative expanding access to programming education and practical digital skills.', sameAs: ['https://github.com/programinglive'] }
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-950 antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /></body>
    </html>
  )
}

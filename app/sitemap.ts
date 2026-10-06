import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/programs',
    '/learn',
    '/open-source',
    '/impact',
    '/partners',
    '/roadmap',
    '/blog',
    '/contact',
    '/id',
    '/id/about',
    '/id/programs',
    '/id/learn',
    '/id/open-source',
    '/id/impact',
    '/id/partners',
    '/id/roadmap',
    '/id/blog',
    '/id/contact',
  ]

  return routes.map((route) => ({
    url: `https://programinglive.com${route}`,
    changeFrequency: route === '' || route === '/id' || route.includes('roadmap') ? 'weekly' : 'monthly',
    priority: route === '' || route === '/id' ? 1 : route.includes('programs') || route.includes('learn') ? 0.9 : 0.7,
  }))
}

import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/programs', '/learn', '/open-source', '/impact', '/partners', '/roadmap', '/blog', '/contact', '/id'].map((route) => ({ url: `https://programinglive.com${route}`, changeFrequency: route === '' || route === '/roadmap' ? 'weekly' : 'monthly', priority: route === '' ? 1 : route === '/programs' || route === '/learn' ? 0.9 : 0.7 }))
}

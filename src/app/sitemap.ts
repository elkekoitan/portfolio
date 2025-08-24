import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hamza-turhan-portfolio.vercel.app'
  const last = new Date('2025-01-25')
  const locales = ['tr', 'en', 'ru']
  return locales.map((l, i) => ({
    url: `${base}/${l}`,
    lastModified: last,
    changeFrequency: 'monthly',
    priority: l === 'tr' ? 1 : 0.8 - i * 0.1,
  }))
}

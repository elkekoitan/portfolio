import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hamza-turhan-portfolio.vercel.app'
  return [
    {
      url: `${base}/`,
      lastModified: new Date('2025-01-25'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}


import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hamza Turhan Portfolio',
    short_name: 'HT Portfolio',
    description:
      'Full-Stack Developer, AI/ML Mühendisi ve Ticaret Platformu Uzmanı. React, Python ve modern web teknolojilerinde uzman.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f23',
    theme_color: '#0f0f23',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}


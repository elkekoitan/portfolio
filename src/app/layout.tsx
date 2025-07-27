import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hamza Turhan - Profesyonel Portföy ve Mülakat Cevapları',
  description: 'Full-Stack Developer, AI/ML Mühendisi ve Ticaret Platformu Uzmanı. React, Python ve modern web teknolojilerinde uzman.',
  keywords: 'Full-Stack Developer, React, Python, AI/ML, Ticaret Platformu, Mobil Geliştirme, E-ticaret',
  authors: [{ name: 'Hamza Turhan' }],
  openGraph: {
    title: 'Hamza Turhan - Profesyonel Portföy',
    description: 'AI/ML, Ticaret Platformları ve Modern Web Teknolojileri konusunda uzman Full-Stack Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
} 
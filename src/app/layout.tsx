import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hamza Turhan - Professional Portfolio & Interview Responses',
  description: 'Full-Stack Developer, AI/ML Engineer, and Trading Platform Specialist. Expert in React, Python, and modern web technologies.',
  keywords: 'Full-Stack Developer, React, Python, AI/ML, Trading Platform, Mobile Development, E-commerce',
  authors: [{ name: 'Hamza Turhan' }],
  openGraph: {
    title: 'Hamza Turhan - Professional Portfolio',
    description: 'Full-Stack Developer specializing in AI/ML, Trading Platforms, and Modern Web Technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
} 
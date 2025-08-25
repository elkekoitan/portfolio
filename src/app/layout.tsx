import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#0f0f23',
}

export const metadata: Metadata = {
  // Localized metadata is handled in segment layouts.
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-white antialiased`}>{children}</body>
    </html>
  )
}


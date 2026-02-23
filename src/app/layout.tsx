import type { Metadata, Viewport } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel', weight: ['400', '600', '700'] })

export const viewport: Viewport = {
  themeColor: '#1a1008',
}

export const metadata: Metadata = {
  // Localized metadata is handled in segment layouts.
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${cinzel.variable} font-sans bg-dune-body text-dune-bone antialiased`}>{children}</body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Inter, VT323, Fira_Code } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import AudioToggle from '@/components/AudioToggle'
import AmbientParticles from '@/components/AmbientParticles'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const vt323 = VT323({ subsets: ['latin'], variable: '--font-vt323', weight: '400' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code', weight: ['400', '500', '700'] })

export const viewport: Viewport = {
  themeColor: '#0a0a08',
}

export const metadata: Metadata = {
  // Localized metadata is handled in segment layouts.
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${vt323.variable} ${firaCode.variable} font-sans bg-vault-body text-vault-bone antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <AmbientParticles />
        <AudioToggle />
      </body>
    </html>
  )
}

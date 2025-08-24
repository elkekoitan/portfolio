import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getDict, type Locale } from '@/i18n/dictionaries'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = getDict(params.locale)
  return {
    metadataBase: new URL('https://hamza-turhan-portfolio.vercel.app'),
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: 'Hamza Turhan' }],
    alternates: { canonical: `/${params.locale}` },
    icons: { icon: '/favicon.svg' },
    themeColor: '#0f0f23',
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: 'website',
      url: `/${params.locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
    },
  }
}

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }, { locale: 'ru' }]
}

export const viewport: Viewport = {
  themeColor: '#0f0f23',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const t = getDict(params.locale)
  return (
    <html lang={params.locale} className="scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-white antialiased`}>
        <a href="#main-content" className="skip-link">{t.skipLink}</a>
        {children}
      </body>
    </html>
  )
}

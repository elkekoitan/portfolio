import type { Metadata } from 'next'
import { getDict, type Locale } from '@/i18n/dictionaries'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = getDict(locale as Locale)
  return {
    metadataBase: new URL('https://hamza-turhan-portfolio.vercel.app'),
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: 'Hamza Turhan' }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'tr-TR': '/tr',
        en: '/en',
        ru: '/ru',
      },
    },
    icons: { icon: '/favicon.svg' },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: 'website',
      url: `/${locale}`,
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = getDict(locale as Locale)
  return (
    <>
      <a href="#main-content" className="skip-link">{t.skipLink}</a>
      {children}
    </>
  )
}

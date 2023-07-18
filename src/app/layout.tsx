import './style.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Балтика',
  description: 'Идеи для летнего отдыха',
  openGraph: {
    title: 'Балтика',
    description: 'Идеи для летнего отдыха',
    siteName: 'Балтика',
    images: [
      {
        url: 'https://bybaltika.by/api/og',
        width: 1200,
        height: 623,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    images: {
      url: 'https://bybaltika.by/api/og',
      width: 1200,
      height: 623,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

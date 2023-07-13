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
        url: 'https://baltika-next.netlify.app/api/og',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
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

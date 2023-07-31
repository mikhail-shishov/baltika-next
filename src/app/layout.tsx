import './style.scss';
import YandexMetrika from './YandexMetrika.js';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
    card: 'summary_large_image'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
      {/* <Script
      id='ya-metric'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(94364462, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
        `,
        }}
    />
    <noscript><div><img src="https://mc.yandex.ru/watch/94364462" className="ya" alt="" /></div></noscript> */}

    {/* <YandexMetrika 
      yid={94364462},
      clickmap={true},
      trackLinks={true},
      accurateTrackBounce={true},
      webvisor={false},
    /> */}

    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-FJWZSG839X"/>
    <Script
      id='gtag-setup'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-FJWZSG839X');
        `,
        }}
    />
        
        {children}</body>
    </html>
  )
}

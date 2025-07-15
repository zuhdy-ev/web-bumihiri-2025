import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bumi Hiri 2025 | KKN-PPM UGM Periode 2 2025',
  description: 'Official Website Bumi Hiri 2025',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon manual */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZGHHL0HXBP"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZGHHL0HXBP', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="font-made-tommy bg-white overflow-x-hidden">
        <SpeedInsights />
        <Analytics />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

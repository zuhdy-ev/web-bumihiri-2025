import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import Head from 'next/head'

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
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="font-made-tommy bg-white overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  )
}

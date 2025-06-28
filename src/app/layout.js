import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BEM KM UGM 2024',
  description: 'Official Website BEMKM UGM 2024',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-made-tommy bg-primary-color overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  )
}

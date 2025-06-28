'use client'
import React from 'react'
import Nav from '@/components/layout/Nav'
import { HeroArtikel } from '@/components/module/artikel/page'

import dynamic from 'next/dynamic'

// Client Components:
const HeroLayananKesehatanMental = dynamic(
  () => import('@/components/module/layanan-kesehatan-mental/HeroLayananKesehatanMental'),
  {
    ssr: false,
  },
)

export default function Artikel() {
  return (
    <main>
      <Nav active="" />
      <HeroLayananKesehatanMental />
    </main>
  )
}

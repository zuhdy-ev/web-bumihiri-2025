import React from 'react'
import Nav from '@/components/layout/Nav'
import { HeroKajian, ListKilasbara, ListKajian } from '@/components/module/artikel/page'

export default function Artikel() {
  return (
    <main className="flex flex-col items-center justify-center bg-primary-color">
      <Nav active="artikel" />
      <HeroKajian />
      <ListKilasbara />
      <ListKajian />
    </main>
  )
}

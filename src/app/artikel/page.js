import React from 'react'
import Nav from '@/components/layout/Nav'
import { HeroArtikel, ListArtikel } from '@/components/module/artikel/page'

export default function Artikel() {
  return (
    <main className="flex flex-col items-center justify-center bg-primary-color">
      <Nav active="artikel" />
      <HeroArtikel />
      <ListArtikel />
      {/* <ListKajian /> */}
    </main>
  )
}

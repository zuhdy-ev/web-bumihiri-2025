import React from 'react'
import Nav from '@/components/layout/Nav'
import { HeroGaleri, ListGaleri } from '@/components/module/galeri/page'

export default function Artikel() {
  return (
    <main className="flex flex-col items-center justify-center bg-primary-color">
      <Nav active="galeri" />
      <HeroGaleri />
      <ListGaleri />
    </main>
  )
}

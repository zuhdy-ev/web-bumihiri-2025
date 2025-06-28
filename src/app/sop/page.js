import React from 'react'
import Nav from '@/components/layout/Nav'
import { HeroSop, SopEksternal, SopInternal } from '@/components/module/sop/page'

export default function SOP() {
  return (
    <main>
      <Nav active="sop" />
      <HeroSop />
      <SopEksternal />
      <SopInternal />
    </main>
  )
}

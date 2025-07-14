import React from 'react'
import Nav from '@/components/layout/Nav'
import {
  HeroHiriFest,
  TentangHiriFest,
  ExpoHiri,
  FunRun,
  KolaboratorHiriFest,
  SponsorHiriFest,
  Narahubung,
} from '@/components/module/hiri-fest-2025/page'
import Footer from '@/components/layout/Footer'

export default function HiriFest2025() {
  return (
    <main className="flex flex-col items-center justify-center bg-primary-color">
      <Nav active="hiri-fest-2025" />
      <HeroHiriFest />
      <TentangHiriFest />
      <ExpoHiri />
      <FunRun />
      <KolaboratorHiriFest />
      <SponsorHiriFest />
      <Narahubung />
      <Footer active="hiri-fest-2025" />
    </main>
  )
}

import React from 'react'
import Nav from '@/components/layout/Nav'
import {
  HeroProfil,
  TentangKamiProfil,
  Tema,
  ProkerUnggulan,
  DPL,
  HumansAtBumiHiri,
} from '@/components/module/profil/page'
import Footer from '@/components/layout/Footer'

export default function Profil() {
  return (
    <main className="bg-primary-color text-white">
      <Nav active="profil" />
      <HeroProfil />
      <TentangKamiProfil />
      <Tema />
      <ProkerUnggulan />
      <DPL />
      <HumansAtBumiHiri />
      <Footer active="" />
    </main>
  )
}

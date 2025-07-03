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

export default function Profil() {
  return (
    <main className="bg-primary-color text-white">
      <Nav active="profil" />
      <HeroProfil />
      <TentangKamiProfil />
      <Tema />
      <ProkerUnggulan />
      {/* <DPL />
      <HumansAtBumiHiri /> */}
    </main>
  )
}

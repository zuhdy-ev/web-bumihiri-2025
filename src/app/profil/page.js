import React from 'react'
import Nav from '@/components/layout/Nav'
import {
  HeroProfil,
  VisiMisi,
  StrukturOrganisasi,
  Bidang,
  AgendaUtama,
  Filosofi,
} from '@/components/module/profil/page'
import SambutanKetua from '@/components/module/beranda/SambutanKetua'

export default function Profil() {
  return (
    <main className="bg-primary-color text-white">
      <Nav active="profil" />
      <HeroProfil />
      <SambutanKetua />
      <VisiMisi />
      <StrukturOrganisasi />
      <Bidang />
      <AgendaUtama />
      <Filosofi />
    </main>
  )
}

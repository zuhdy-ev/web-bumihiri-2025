import React from 'react'
import Nav from '@/components/layout/Nav'
import {
  HeroHiri,
  ProfilHiri,
  KelurahanHiri,
  WisataHiri,
  KulinerHiri,
} from '@/components/module/tentang-hiri/page'

export default function TentangHiri() {
  return (
    <main className="bg-primary-blue text-white">
      <Nav active="hiri" />
      <HeroHiri />
      <ProfilHiri />
      <KelurahanHiri />
      <WisataHiri />
      <KulinerHiri />
    </main>
  )
}

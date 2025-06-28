import React from 'react'
import Nav from '@/components/layout/Nav'
import { OprecDetail } from '@/components/module/oprec/page'
import BerdinamikaBersama from '@/components/module/beranda/BerdinamikaBersama'

export default function Oprec() {
  return (
    <main className="bg-primary-color text-white w-full h-screen">
      <Nav active="oprec" />
      <div className="pt-20">
        <BerdinamikaBersama />
      </div>
    </main>
  )
}

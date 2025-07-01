'use client'
import React, { useEffect, useState } from 'react'
import '../../../app/globals.css'
import dataKilasbara from '@/data/artikelKilasbara.json'
import { HumansCard } from '@/components/element/profil/page'

const HumansAtBumiHiri = () => {
  const [dataArtikel, setDataArtikel] = useState([])

  useEffect(() => {
    setDataArtikel(dataKilasbara)
  }, [])

  return (
    <section className="w-full h-full bg-white pt-10">
      <div className="w-full h-full flex items-center justify-center">
        <div className="font-bold text-[15px] md:text-[20px] text-primary-blue drop-shadow">
          HUMANS AT BUMI HIRI 2025
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        {/* Card Container */}
        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-5 max-w-[1920px] px-10">
          {/* Card */}
          <div className="w-full z-10 mb-32">
            <div className="w-full flex flex-wrap items-center justify-center gap-5 my-5">
              {dataArtikel
                ?.sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish))
                .map((item) => {
                  return (
                    <div key={item.id}>
                      <HumansCard gambar={item.gambar} judul={item.judul} />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HumansAtBumiHiri

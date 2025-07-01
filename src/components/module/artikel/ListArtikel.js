'use client'
import React, { useEffect, useState } from 'react'
import '../../../app/globals.css'
import dataKilasbara from '@/data/artikelKilasbara.json'
import { convertToSlug } from '@/app/artikel/[artikelId]/page'
import { ArtikelCard } from '@/components/element/artikel/page'

const ListKilasbara = () => {
  const [dataArtikel, setDataArtikel] = useState([])

  useEffect(() => {
    setDataArtikel(dataKilasbara)
  }, [])

  return (
    <section className="w-full h-full bg-white flex items-center justify-center">
      <div className="w-full max-w-[1920px]">
        {/* Card Container */}
        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Card */}
          <div className="w-full z-10 mt-10 mb-32">
            <div className="w-full flex flex-wrap items-center justify-center gap-5 my-5">
              {dataArtikel
                ?.sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish))
                .map((item) => {
                  return (
                    <div key={item.id}>
                      <ArtikelCard
                        gambar={item.gambar}
                        judul={item.judul}
                        link={`/artikel/kajian/${convertToSlug(item.judul)}`}
                      />
                    </div>
                  )
                })}
            </div>
          </div>
          {/* <div className="absolute w-full h-full bg-gradient-to-b from-[#125881] via-[#40A6AA] to-white z-0"></div> */}
        </div>
      </div>
    </section>
  )
}

export default ListKilasbara

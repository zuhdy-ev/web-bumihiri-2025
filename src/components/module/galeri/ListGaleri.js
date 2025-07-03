'use client'
import React, { useEffect, useState } from 'react'
import '../../../app/globals.css'
import dataKilasbara from '@/data/artikelKilasbara.json'
import { GaleriCard } from '@/components/element/galeri/page'

const ListGaleri = () => {
  const [dataArtikel, setDataArtikel] = useState([])

  useEffect(() => {
    setDataArtikel(dataKilasbara)
  }, [])

  return (
    <section className="w-full h-full bg-white max-w-[1920px] px-5">
      <div className="w-full">
        {/* Card Container */}
        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Card */}
          <div className="w-full z-10 mt-10 mb-32">
            <div className="w-full flex flex-wrap items-center justify-center gap-5 my-5">
              <div className="text-black">Dokumentasi belum tersedia</div>
              {/* {dataArtikel
                ?.sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish))
                .map((item) => {
                  return (
                    <div key={item.id}>
                      <GaleriCard gambar={item.gambar} judul={item.judul} />
                    </div>
                  )
                })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListGaleri

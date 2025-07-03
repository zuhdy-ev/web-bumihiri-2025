'use client'

import React, { useEffect, useState } from 'react'
import Nav from '@/components/layout/Nav'
import { HeroArtikel, ListArtikel } from '@/components/module/artikel/page'
import '../../app/globals.css'
import dataKajian from '@/data/artikelKajian.json'
import { convertToSlug } from '@/app/artikel/[artikelId]/page'
import { ArtikelCard } from '@/components/element/artikel/page'

const ListKajian = () => {
  const [dataArtikel, setDataArtikel] = useState([])

  useEffect(() => {
    setDataArtikel(dataKajian)
  }, [])

  return (
    <section className="w-full h-full bg-white flex items-center justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-5 px-5">
          <div className="w-full z-10 mt-5 mb-32">
            <div className="w-full flex flex-wrap items-center justify-center gap-5 my-5">
              <div className="text-black">Artikel belum tersedia</div>
              {/* {dataArtikel
                ?.sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish))
                .map((item) => {
                  return (
                    <div key={item.id}>
                      <ArtikelCard
                        gambar={item.gambar}
                        judul={item.judul}
                        kementerian={item.kementerian}
                        link={`/artikel/kajian/${convertToSlug(item.judul)}`}
                      />
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

export default function Artikel() {
  return (
    <main className="flex flex-col items-center justify-center bg-primary-color">
      <Nav active="artikel" />
      <HeroArtikel />
      {/* <ListArtikel /> */}
      <ListKajian />
    </main>
  )
}

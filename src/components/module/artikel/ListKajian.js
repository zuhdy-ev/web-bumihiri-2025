'use client'
import React, { useEffect, useState } from 'react'
import '../../../app/globals.css'
import { ArtikelCard } from '@/components/element/artikel/page'
import { convertToSlug } from '@/app/artikel/kajian/[kajianId]/page'
import dataKajian from '@/data/artikelKajian.json'

const ListKajian = () => {
  const [dataArtikel, setDataArtikel] = useState([])

  useEffect(() => {
    // Mengatur dataArtikel dengan data dari JSON
    setDataArtikel(dataKajian)
  }, [])

  // Mengurutkan dataArtikel berdasarkan tgl_publish
  const sortedData = dataArtikel.sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish))

  return (
    <section className="w-full h-full bg-primary-color max-w-[1920px]">
      <div className="flex flex-col gap-5 s:gap-10 p-10 lg:p-20">
        <div className="w-full h-full flex gap-3">
          <div className="border"></div>
          <div className="font-made-tommy-bold text-xl md:text-3xl">KAJIAN</div>
        </div>
        <div className="overflow-x-auto scrollbar-custom">
          <div className="flex flex-col my-5 gap-y-5">
            {/* Baris Pertama (indeks 0, 2, 4, ...) */}
            <div className="flex gap-5">
              {sortedData.filter((_, index) => index % 2 === 0).map((item) => (
                <div key={item.id}>
                  <ArtikelCard
                    gambar={item.gambar}
                    judul={item.judul}
                    link={`/artikel/kajian/${convertToSlug(item.judul)}`}
                    className=""
                  />
                </div>
              ))}
            </div>
            {/* Baris Kedua (indeks 1, 3, 5, ...) */}
            <div className="flex gap-5">
              {sortedData.filter((_, index) => index % 2 !== 0).map((item) => (
                <div key={item.id}>
                  <ArtikelCard
                    gambar={item.gambar}
                    judul={item.judul}
                    link={`/artikel/kajian/${convertToSlug(item.judul)}`}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListKajian
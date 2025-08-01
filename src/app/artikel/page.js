'use client'

import React, { useEffect, useState } from 'react'
import Nav from '@/components/layout/Nav'
import { HeroArtikel } from '@/components/module/artikel/page'
import '../../app/globals.css'
import dataKajian from '@/data/artikelKajian.json'
import { convertToSlug } from '@/app/artikel/[artikelId]/page'
import { ArtikelCard } from '@/components/element/artikel/page'
import Footer from '@/components/layout/Footer'

const ListKajian = () => {
  const [dataArtikel, setDataArtikel] = useState([])
  const [kategori, setKategori] = useState('semua')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setDataArtikel(dataKajian)
  }, [])

  const filteredArtikel = dataArtikel
    .filter((item) => (kategori === 'semua' ? true : item.kategori.toLowerCase() === kategori))
    .filter((item) => item.judul.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish))

  return (
    <section className="w-full h-full bg-white flex items-center justify-center text-black">
      <div className="w-full max-w-[1920px]">
        <div className="w-full flex flex-col items-center px-5 py-10">
          <div className="flex flex-col md:flex-row gap-4 mb-5 w-full max-w-4xl">
            <input
              type="text"
              placeholder="Cari artikel..."
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="border border-gray-300 rounded-xl px-4 py-2 text-sm"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
            >
              <option value="semua">Semua</option>
              <option value="berita">Berita</option>
              <option value="kajian">Kajian</option>
            </select>
          </div>

          <div className="w-full flex flex-wrap items-center justify-center gap-5 my-5">
            {filteredArtikel.length === 0 ? (
              <div className="text-black">Artikel tidak tersedia</div>
            ) : (
              filteredArtikel.map((item) => (
                <div key={item.id}>
                  <ArtikelCard
                    gambar={item.gambar}
                    judul={item.judul}
                    kementerian={item.kementerian}
                    link={item.link || `/artikel/kajian/${convertToSlug(item.judul)}`}
                  />
                </div>
              ))
            )}
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
      <ListKajian />
      <Footer active="" />
    </main>
  )
}

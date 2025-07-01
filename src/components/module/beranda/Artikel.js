'use client'
import { ArtikelCard } from '@/components/element/artikel/page'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
// import { convertToSlug } from '@/app/artikel/[kajianId]/page'
import dataKajian from '@/data/artikelKajian.json'
import Image from 'next/image'

export default function Artikel() {
  const [dataArtikel, setDataArtikel] = useState()

  useEffect(() => {
    setDataArtikel(dataKajian)
  }, [])

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center p-5 py-10">
      {/* Background */}
      <div className="w-full h-full absolute z-0">
        <Image
          src={'/assets/beranda/artikel_bg.svg'}
          alt="Background Artikel"
          width={0}
          height={0}
          className={'w-full h-full object-cover'}
        />
      </div>
      {/* Content */}
      <div className="w-full max-w-[1920px] z-10">
        <div className="w-full h-full flex items-center justify-center max-w-[1920px] gap-5">
          <div className="font-bold text-[15px] md:text-[20px] text-white drop-shadow">ARTIKEL</div>
          <div className="w-[70%] h-[1px] bg-white hidden md:block"></div>
        </div>
        {/* Card Section */}
        <div className="w-full">
          {/* Card Container */}
          <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-5 my-5">
            {/* Card */}
            <div className="w-full">
              <div className="w-full flex flex-wrap items-center justify-center gap-5 my-5">
                {dataArtikel
                  ?.sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish))
                  .slice(0, 4)
                  .map((item) => {
                    return (
                      <div key={item.id}>
                        <ArtikelCard
                          gambar={item.gambar} // Masukkan properti gambar
                          judul={item.judul} // Masukkan judul artikel
                          // link={`/artikel/kajian/${convertToSlug(item.judul)}`} // Tautkan ke halaman detail artikel
                          link={`/artikel/kajian/`} // Tautkan ke halaman detail artikel
                        />
                      </div>
                    )
                  })}
              </div>
              <div className="w-full flex items-center justify-center underline py-3">
                <button className="px-5 py-1 rounded-full text-[10px] md:text-[12px] lg:text-[15px] bg-white text-primary-green font-bold w-fit">
                  Artikel Lainnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

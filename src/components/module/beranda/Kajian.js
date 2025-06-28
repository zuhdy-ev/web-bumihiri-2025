'use client'
import { ArtikelCard } from '@/components/element/artikel/page'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { convertToSlug } from '@/app/artikel/kajian/[kajianId]/page'
import dataKajian from '@/data/artikelKajian.json'

export default function Artikel() {
  const [dataArtikel, setDataArtikel] = useState()

  useEffect(() => {
    setDataArtikel(dataKajian)
  }, [])

  // const fetchArtikel = async () => {
  //   try {
  //     const {
  //       data: { data },
  //     } = await axios.get(`${process.env.NEXT_PUBLIC_FILAMENT}/artikels`, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //       },
  //     })
  //     setDataArtikel(data)
  //   } catch (error) {
  //     console.error('Error fetching artikel:', error.response || error)
  //   }
  // }

  return (
    <section className="relative w-full h-full px-2 flex items-center justify-center">
      <div className="w-full max-w-[1920px]">
        <p className="text-xl md:text-3xl text-center font-made-tommy-bold my-2 px-5">KAJIAN</p>
        <p className="text-[13px] lg:text-lg xl:text-xl text-center my-2 px-5">
          Baca kumpulan kajian ilmiah yang kami tulis untuk menanggapi berbagai isu yang ada kampus,
          regional DIY, nasional, hingga internasional.
        </p>
        <div className="w-full px-8 py-4">
          {/* <Link href={'/kilasbara'} className="hidden lg:block font-medium underline">
            <p className="text-right">Lihat Lebih Banyak</p>
          </Link> */}
          <div className="w-full flex flex-wrap items-center justify-center gap-5 my-5">
            {/* <ArtikelCard gambar={``} judul={`Konten belum tersedia`} link={`/`} /> */}
            {dataArtikel
              ?.sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish)) // Urutkan berdasarkan tgl_publish secara menurun
              .slice(0, 3) // Ambil 3 artikel pertama
              .map((item) => {
                // const { id, judul, gambar, tgl_publish } = item // Destruktur properti dari item
                return (
                  <div key={item.id}>
                    <ArtikelCard
                      gambar={item.gambar} // Masukkan properti gambar
                      judul={item.judul} // Masukkan judul artikel
                      link={`/artikel/kajian/${convertToSlug(item.judul)}`} // Tautkan ke halaman detail artikel
                    />
                  </div>
                )
              })}
          </div>
          <div className="w-full flex items-center justify-center underline py-3">
            <Link href={`/artikel/kajian/`}>
              <p>Lihat Semua</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

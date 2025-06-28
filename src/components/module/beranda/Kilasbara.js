'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { KilasbaraCard } from '@/components/element/kilasbara/page'
// import axios from 'axios'
import { convertToSlug } from '@/app/artikel/kilasbara/[kilasbaraId]/page'
import dataKilasbara from '@/data/artikelKilasbara.json'

const Kilasbara = () => {
  const [dataArtikel, setDataArtikel] = useState()

  useEffect(() => {
    setDataArtikel(dataKilasbara)
  }, [])

  // const fetchKilasbara = async () => {
  //   try {
  //     const {
  //       data: { data },
  //     } = await axios.get(`${process.env.NEXT_PUBLIC_FILAMENT}/kilasbaras`, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //       },
  //     })
  //     setDataKilasbara(data)
  //   } catch (error) {
  //     console.error('Error fetching Kilasbara:', error.response || error)
  //   }
  // }

  return (
    <section className="relative w-full h-full bg-primary-color py-5  flex items-center justify-center px-3">
      <div className="w-full max-w-[1920px]">
        <p className="text-xl md:text-3xl text-center font-made-tommy-bold my-2 px-5">
          KILASBARA: Kilas Balik Gerak Membara
        </p>
        <p className="text-[13px] lg:text-lg xl:text-xl text-center my-2 px-5">
          Mengenal BEMKM UGM melalui laporan dari berbagai kegiatan kami.
        </p>
        <div className="w-full h-full flex items-center justify-center flex-wrap gap-5 mb-5 mt-10 text-center">
          {/* <KilasbaraCard gambar={``} judul={`Konten belum tersedia`} link={`/`}/> */}
          {dataArtikel
            ?.sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish))
            .slice(0, 4)
            .map((item, index) => {
              const { id, judul, gambar } = item // Destruktur properti dari item
              return (
                <div key={id}>
                  <KilasbaraCard
                    gambar={gambar} // Masukkan properti gambar
                    judul={judul} // Masukkan judul artikel
                    link={`/artikel/kilasbara/${convertToSlug(judul)}`} // Tautkan ke halaman detail artikel
                  />
                </div>
              )
            })}
        </div>
        <div className="w-full flex items-center justify-center underline py-3">
          <Link href={`/artikel/kilasbara/`}>
            <p>Lihat Semua</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Kilasbara

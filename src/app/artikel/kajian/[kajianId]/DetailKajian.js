'use client'
import { useState, useEffect } from 'react'
import Nav from '@/components/layout/Nav'
import ArtikelDetail from '@/components/module/artikel/detail/ArtikelDetail.js'
import dataKajian from '@/data/artikelKajian.json'
import { convertToSlug } from '@/app/artikel/kajian/[kajianId]/page.js'

export default function DetailKajian({ params }) {
  const { kajianId } = params
  const kajian = dataKajian.find((kajian) => convertToSlug(kajian.judul) === kajianId)
  // const [loading, setLoading] = useState(true)
  // const [dataKajian, setDataKajian] = useState(null)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   if (!kajianId) return

  //   const fetchKajianDetail = async () => {
  //     try {
  //       const response = await fetch(`https://www.be2.bemkmugm.com/api/artikels`, {
  //         headers: {
  //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //         },
  //       })

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data')
  //       }

  //       const data = await response.json()
  //       setDataKajian(data)
  //       setLoading(false)
  //     } catch (err) {
  //       setError(err.message)
  //       setLoading(false)
  //     }
  //   }

  //   fetchKajianDetail()
  // }, [kajianId])

  // console.log(dataKajian)
  // const data = dataKajian?.data?.find((data) => convertToSlug(data.judul) === kajianId)

  // if (loading) {
  //   return (
  //     <main className="bg-primary-color text-white w-full h-full">
  //       <Nav active="artikel" />
  //       <div className="pt-20 min-h-screen flex justify-center items-center">
  //         <p>Loading...</p>
  //       </div>
  //     </main>
  //   )
  // }

  if (!kajian) {
    return (
      <main className="bg-white text-white w-full h-full">
        <Nav active="artikel" />
        <div className="pt-20 min-h-screen flex justify-center items-center">
          <p>Artikel kajian tidak ditemukan</p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white text-white w-full h-full">
      <Nav active="artikel" />
      <div className="pt-20 min-h-screen flex justify-center items-center">
        <ArtikelDetail
          jenis={'Kajian'}
          gambar={kajian.gambar}
          judul={kajian.judul}
          kementerian={kajian.kementrian}
          tgl_publish={kajian.tgl_publish}
          deskripsi={kajian.deskripsi}
        />
      </div>
    </main>
  )
}

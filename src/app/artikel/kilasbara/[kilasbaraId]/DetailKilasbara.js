'use client'
import { useEffect, useState } from 'react'
import Nav from '@/components/layout/Nav'
import ArtikelDetail from '@/components/module/artikel/detail/ArtikelDetail.js'
import dataKilasbara from '@/data/artikelKilasbara.json'
import { convertToSlug } from '@/app/artikel/kilasbara/[kilasbaraId]/page.js'

export default function DetailKilasbara({ params }) {
  const { kilasbaraId } = params
  const kilasbara = dataKilasbara.find((kilasbara) => convertToSlug(kilasbara.judul) === kilasbaraId)
  // const [dataKilasbara, setDataKilasbara] = useState(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   if (!kilasbaraId) return

  //   const fetchKilasbaraDetail = async () => {
  //     try {
  //       const response = await fetch('https://www.be2.bemkmugm.com/api/kilasbaras', {
  //         headers: {
  //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //         },
  //       })

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data')
  //       }

  //       const data = await response.json()
  //       setDataKilasbara(data)
  //       setLoading(false)
  //     } catch (err) {
  //       setError(err.message)
  //       setLoading(false)
  //     }
  //   }

  //   fetchKilasbaraDetail()
  // }, [kilasbaraId])

  // console.log(dataKilasbara)

  // const data = dataKilasbara?.data?.find((data) => convertToSlug(data.judul) === kilasbaraId)

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

  if (!kilasbara) {
    return (
      <main className="bg-primary-color text-white w-full h-full">
        <Nav active="artikel" />
        <div className="pt-20 min-h-screen flex justify-center items-center">
          <p>Artikel kilasbara tidak ditemukan</p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-primary-color text-white w-full h-full">
      <Nav active="artikel" />
      <div className="pt-20 min-h-screen flex justify-center items-center">
        <ArtikelDetail
          jenis={'Kilasbara'}
          gambar={kilasbara.gambar}
          judul={kilasbara.judul}
          kementerian={kilasbara.kementrian}
          tgl_publish={kilasbara.tgl_publish}
          deskripsi={kilasbara.deskripsi}
        />
      </div>
    </main>
  )
}

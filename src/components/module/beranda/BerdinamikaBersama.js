'use client'
import { OprecCard } from '@/components/element/oprec/page'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function BerdinamikaBersama() {
  const [dataPendaftaran, setDataPendaftaran] = useState()

  useEffect(() => {
    fetchPendaftaran()
  }, [])

  const fetchPendaftaran = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`${process.env.NEXT_PUBLIC_FILAMENT}/dinamika-bersamas`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      })
      setDataPendaftaran(data)
    } catch (error) {
      console.error('Error fetching pendaftaran:', error.response || error)
    }
  }

  console.log(dataPendaftaran)

  return (
    <section className="relative w-full lg:mt-10 flex flex-col items-center justify-center z-0">
      <main className="relative w-full max-w-[1920px]">
        <p className="text-xl md:text-3xl text-center font-bold">BERDINAMIKA BERSAMA</p>
        <p className="text-[13px] lg:text-lg xl:text-xl text-center my-2 px-5">
          Berikan kontribusi terbaikmu bersama kami!
        </p>
        {/* <div className="px-10 absolute right-0 lg:text-lg font-made-tommy-regular text-gray-300 italic">{`Geser >>>`}</div> */}
        <div className="w-full h-full flex justify-start lg:justify-center items-center py-5 md:px-10 lg:px-20 overflow-x-auto overscroll-x-none scrollbar-custom">
          {/* {dataPendaftaran &&
            dataPendaftaran.map((item, index) => (
              <OprecCard
                key={index}
                judul={item.judul}
                pelaksana={item.pelaksana}
                peruntukan={item.peruntukan}
                deskripsi={item.deskripsi}
                tgl_buka={item.tgl_buka}
                tgl_tutup={item.tgl_tutup}
                buku_panduan={item.buku_panduan}
                link_pendaftaran={"/"}
                poster={item.poster}
              />
            ))} */}
          <div className="mr-5"></div>
        </div>
      </main>
    </section>
  )
}

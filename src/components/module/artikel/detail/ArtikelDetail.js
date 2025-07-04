'use client'
import React from 'react'
import Image from 'next/image'

export default function ArtikelDetail({
  jenis,
  gambar,
  judul,
  kementerian,
  tgl_publish,
  deskripsi,
}) {
  const baseUrl = process.env.NEXT_PUBLIC_FILAMENT_STORAGE
  // const imageUrl = gambar ? `${baseUrl}/${gambar}` : '/assets/umum/default-placeholder-center.png'

  const handleBack = () => {
    window.history.back()
  }

  // Fungsi untuk mengubah format tanggal
  const formatTanggal = (tgl) => {
    const hariArray = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const bulanArray = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ]

    const tanggal = new Date(tgl)
    const hari = hariArray[tanggal.getDay()]
    const tanggalFormat = tanggal.getDate()
    const bulan = bulanArray[tanggal.getMonth()]
    const tahun = tanggal.getFullYear()

    return `${hari}, ${tanggalFormat} ${bulan} ${tahun}`
  }

  return (
    <main className="w-full h-full flex flex-col items-center justify-start bg-white">
      <div className="w-full mt-5 px-3 max-w-[1000px]">
        <button
          className="cursor-pointer text-white px-5 py-1 bg-primary-green rounded-lg text-[10px] md:text-[12px] lg:text-[15px] font-bold"
          onClick={handleBack}
        >
          Kembali
        </button>
      </div>
      <div className="w-[67.5%] border-b border-[#F8BA00] my-5"></div>
      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="relative w-full max-w-[1000px] flex flex-col items-center justify-start">
          <div className="z-0 p-3 w-full h-auto aspect-video">
            <Image
              src={gambar}
              alt={judul}
              width={0}
              height={0}
              style={{
                height: '100%',
                width: '100%',
                'object-fit': 'cover',
              }}
              className="rounded-lg aspect-video"
            />
          </div>
        </div>
        <div className="w-full max-w-[1000px] px-5 py-5 lg:px-20">
          <div className="w-full">
            <h1 className="text-[25px] md:text-[35px] font-made-tommy-bold text-primary-blue text-center">
              {judul}
            </h1>
            <p className="text-[17px] text-primary-blue text-center ">
              oleh <span>{kementerian}</span>
            </p>
          </div>
          {/* <div className="font-bold text-[17px]">🟠 {jenis}</div> */}
          <div className="text-[15px] text-primary-blue text-center">
            <p>{formatTanggal(tgl_publish)}</p> {/* Menggunakan fungsi formatTanggal */}
          </div>
        </div>
        <div
          className="w-full text-[18px] max-w-[1000px] px-5 py-5 lg:pb-32 lg:px-20 text-justify text-pretty break-words text-black"
          dangerouslySetInnerHTML={{ __html: deskripsi }}
        />
      </div>
    </main>
  )
}

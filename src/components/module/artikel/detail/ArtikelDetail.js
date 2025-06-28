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
  const imageUrl = gambar ? `${baseUrl}/${gambar}` : '/assets/umum/default-placeholder-center.png'

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
    <main className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full mt-5 px-3 max-w-[1000px]">
        <button
          className="cursor-pointer text-white px-5 py-1 bg-black rounded-lg text-[10px] md:text-[12px] lg:text-[15px] hover:bg-orange-500"
          onClick={handleBack}
        >
          Kembali
        </button>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="relative w-full max-w-[1000px] flex flex-col items-center justify-start">
          <div className="z-0 p-3 w-full h-auto aspect-video">
            <Image
              src={imageUrl}
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
          <div className="w-full mb-5">
            <h1 className="text-[25px] md:text-[35px] font-made-tommy-bold text-orange-500">
              {judul}
            </h1>
            <p className="text-[17px]">
              oleh <span>{kementerian}</span>
            </p>
          </div>
          <div className="font-bold text-[17px]">🟠 {jenis}</div>
          <div className="text-[15px]">
            <p>{formatTanggal(tgl_publish)}</p> {/* Menggunakan fungsi formatTanggal */}
          </div>
        </div>
        <div className="w-[50%] border-b border-gray-300"></div>
        <div
          className="w-full text-[18px] max-w-[1000px] px-5 py-5 lg:pb-32 lg:px-20 text-justify text-pretty break-words"
          dangerouslySetInnerHTML={{ __html: deskripsi }}
        />
      </div>
    </main>
  )
}

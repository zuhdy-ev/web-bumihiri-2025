import React from 'react'
import Image from 'next/image'
import ButtonSelengkapnya from '../umum/ButtonSelengkapnya'

export default function Card({ gambar, judul, link }) {
  const baseUrl = process.env.NEXT_PUBLIC_FILAMENT_STORAGE
  const imageUrl = gambar ? `${baseUrl}/${gambar}` : '/assets/umum/default-placeholder.png'

  return (
    <div className="w-[15rem] h-[10rem] md:w-[520px] md:h-[313px] overflow-hidden relative rounded-[10px] border border-white">
      <Image
        src={imageUrl}
        // src={'/assets/default-placeholder.png'}
        alt=""
        width={405}
        height={313}
        style={{ objectFit: 'cover' }}
        className="w-full h-full"
      />
      <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute top-0 left-0"></div>
      <div className="w-full flex flex-col absolute bottom-0 left-0 p-2 md:p-5">
        <p className="text-[13px] md:text-lg lg:text-xl mb-2 font-bold text-center">
          {judul || 'Konten belum tersedia'}
        </p>
        <div className="md:w-full md:overflow-hidden md:flex md:items-center md:justify-center rounded-lg">
          <ButtonSelengkapnya link={link || '#'} />
        </div>
      </div>
    </div>
  )
}

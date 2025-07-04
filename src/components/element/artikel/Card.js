import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ gambar, judul, link }) {
  const baseUrl = process.env.NEXT_PUBLIC_FILAMENT_STORAGE
  // const imageUrl = gambar ? `${baseUrl}/${gambar}` : '/assets/umum/default-placeholder.png'

  return (
    <div className="relative w-full min-h-[300px] h-[90vw] max-h-[450px] bg-white text-black rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
      <div className="aspect-video">
        <Image
          src={gambar}
          alt="Foto Artikel"
          width={0}
          height={0}
          className={'w-full h-full object-cover'}
        />
      </div>
      <div className="p-3 absolute z-10">
        <div className="text-[12px] md:text-[15px] font-bold mb-1 lg:mb-3">
          {judul || 'Konten belum tersedia'}
        </div>
        {/* <div className="text-[10px] md:text-[13px] text-justify mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip
        </div> */}
        <Link
          className="px-5 py-1 rounded-full text-[10px] md:text-[12px] bg-primary-green text-white font-bold w-fit"
          href={link}
        >
          Selengkapnya
        </Link>
      </div>
      <div className="w-full h-full flex items-center justify-end absolute -translate-y-10 md:-translate-y-20 z-0 opacity-50">
        <Image
          src={'/assets/beranda/artikel_assetCard.svg'}
          alt="Asset Card"
          width={0}
          height={0}
          className={'w-1/3 object-cover'}
        />
      </div>
    </div>
  )
}

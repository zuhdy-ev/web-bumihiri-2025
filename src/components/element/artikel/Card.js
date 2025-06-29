import React from 'react'
import Image from 'next/image'
import ButtonSelengkapnya from '../umum/ButtonSelengkapnya'

export default function Card({ gambar, judul, link }) {
  const baseUrl = process.env.NEXT_PUBLIC_FILAMENT_STORAGE
  const imageUrl = gambar ? `${baseUrl}/${gambar}` : '/assets/umum/default-placeholder.png'

  return (
    <div className="relative w-full min-h-[320px] h-[90vw] max-h-[450px] bg-white text-black rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
      <div className="">
        <Image
          src={'/assets/beranda/galeri_contoh1.png'}
          alt="Foto Artikel"
          width={0}
          height={0}
          className={'w-full h-full object-cover'}
        />
      </div>
      <div className="p-3 absolute z-10">
        <div className="text-[15px] md:text-[20px] font-bold mb-1">Judul</div>
        <div className="text-[10px] md:text-[13px] text-justify mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip
        </div>
        <button className="px-5 py-1 rounded-full text-[10px] md:text-[12px] lg:text-[15px] bg-primary-green text-white font-bold w-fit">
          Selengkapnya
        </button>
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
    // <div className="w-[15rem] h-[10rem] md:w-[520px] md:h-[313px] overflow-hidden relative rounded-[10px]">
    //   <Image
    //     src={imageUrl}
    //     src={'/assets/default-placeholder.png'}
    //     alt=""
    //     width={405}
    //     height={313}
    //     style={{ objectFit: 'cover' }}
    //     className="w-full h-full"
    //   />
    //   <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute top-0 left-0"></div>
    //   <div className="w-full flex flex-col absolute bottom-0 left-0 p-2 md:p-5">
    //     <p className="text-[13px] md:text-lg lg:text-xl mb-2 font-bold text-center">
    //       {judul || 'Konten belum tersedia'}
    //     </p>
    //     <div className="md:w-full md:overflow-hidden md:flex md:items-center md:justify-center rounded-lg">
    //       <ButtonSelengkapnya link={link || '#'} />
    //     </div>
    //   </div>
    // </div>
  )
}

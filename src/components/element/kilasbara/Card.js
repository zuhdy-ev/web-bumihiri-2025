import React from 'react'
import Image from 'next/image'
import { ButtonSelengkapnya } from '../umum/page'

export default function Card({ gambar, judul, link }) {
  const baseUrl = process.env.NEXT_PUBLIC_FILAMENT_STORAGE
  const imageUrl = gambar ? `${baseUrl}/${gambar}` : '/assets/umum/default-placeholder.png'

  return (
    <main className="relative w-[10rem] h-[15rem] md:w-[250px] md:h-[300px] lg:w-[350px] lg:h-[400px] rounded-[5px] md:rounded-[10px] overflow-hidden border border-white">
      <div className="absolute w-full h-full z-0">
        <Image
          src={imageUrl}
          alt={``}
          width={405}
          height={313}
          style={{
            height: '100%',
            width: '100%',
            'object-fit': 'cover',
          }}
          className=""
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-black to-transparent "></div>
      <div className="absolute w-full z-20 bottom-0 p-2 md:p-5 lg:p-7">
        <div className="w-full h-full font-made-tommy-regular mb-3 text-[13px] md:text-lg lg:text-xl text-center">
          {judul || 'Konten belum tersedia'}
        </div>
        <div className="overflow-hidden lg:flex lg:items-center lg:justify-center lg:rounded-[5px]">
          <ButtonSelengkapnya link={link || '#'} />
        </div>
      </div>
    </main>
  )
}

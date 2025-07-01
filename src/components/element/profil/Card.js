import React from 'react'
import Image from 'next/image'

export default function Card({ gambar, judul, link }) {
  const baseUrl = process.env.NEXT_PUBLIC_FILAMENT_STORAGE
  const imageUrl = gambar ? `${baseUrl}/${gambar}` : '/assets/umum/default-placeholder.png'

  return (
    <div className="relative w-full min-h-[320px] h-[90vw] max-h-[450px] bg-white text-black rounded-lg overflow-hidden drop-shadow-lg max-w-[500px] border border-black">
      {/* Photo */}
      <div className="w-full h-full z-0">
        <Image
          src={'/assets/profil/anggota_contoh.png'}
          alt="anggota contoh"
          width={0}
          height={0}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

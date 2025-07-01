import React from 'react'
import Image from 'next/image'

export default function HeroArtikel() {
  return (
    <section className="relative w-full h-[70vh] max-h-[960px] flex items-center justify-center drop-shadow">
      <div className="absolute w-full h-full top-0 z-0">
        <Image
          src={`/assets/artikel/hero_bgPhone.svg`}
          alt={`image`}
          width={0}
          height={0}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full flex items-center justify-center top-0 max-w-[1920px]">
        <div className="w-[70%] md:w-[40%] max-w-[500px] z-20">
          <Image
            src={`/assets/galeri/hero_title.svg`}
            alt={`image`}
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

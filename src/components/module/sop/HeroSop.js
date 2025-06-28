import React from 'react'
import Image from 'next/image'

export default function HeroSop() {
  return (
    <section className="relative w-full h-[70vh] max-h-[960px] flex items-center justify-center bg-primary-color">
      <div className="absolute w-full h-full top-0 z-0">
        <Image
          src={`/assets/sop/hero.jpg`}
          width={0}
          height={0}
          className="w-full h-full object-cover"
          alt="image"
        />
      </div>
      <div className="absolute w-full h-full top-0 flex items-center justify-center bg-black opacity-50 z-10"></div>
      <div className="absolute w-full h-full flex items-center justify-center top-0 max-w-[1920px]">
        <p className="font-made-tommy-bold text-2xl md:text-5xl text-center z-20">
          Standar Operasional Prosedur {`(SOP)`}
        </p>
      </div>
    </section>
  )
}

import React from 'react'
import Image from 'next/image'

export default function Sponsor() {
  return (
    <section className="w-full h-1/2 bg-white text-black flex flex-col items-center justify-center p-5 md:py-10 gap-5">
      <div className="font-bold text-[12px] md:text-[15px] lg:text-[20px]">DIDUKUNG OLEH</div>
      <div className="w-fit flex flex-col items-center justify-center lg:flex-row gap-5">
        <Image
          src={'/assets/beranda/sponsor_pertamina.png'}
          alt="Pertamina"
          width={405}
          height={0}
          className={'w-full max-h-[960px]'}
        />
        <Image
          src={'/assets/beranda/sponsor_batikAqilah.svg'}
          alt="Batik Aqilah"
          width={0}
          height={0}
          className={'w-[200px] max-h-[960px]'}
        />
        <Image
          src={'/assets/beranda/sponsor_medion.jpeg'}
          alt="Medion"
          width={0}
          height={0}
          className={'w-[200px] max-h-[960px]'}
        />
      </div>
    </section>
  )
}

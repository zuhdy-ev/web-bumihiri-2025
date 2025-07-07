import React from 'react'
import Image from 'next/image'

export default function Sponsor() {
  return (
    <section className="w-full h-1/2 bg-white text-black flex flex-col items-center justify-center p-5 md:py-10 gap-5">
      <div className="font-bold text-[12px] md:text-[15px] lg:text-[20px]">
        DISELENGGARAKAN OLEH
      </div>
      <div className="w-fit flex flex-col items-center justify-center lg:flex-row gap-5">
        <Image
          src={'/assets/beranda/pelaksana_ugm.svg'}
          alt="Universitas Gadjah Mada"
          width={405}
          height={0}
          className={'w-full max-h-[960px]'}
        />
        <Image
          src={'/assets/beranda/pelaksana_kknppmugm.svg'}
          alt="KKN-PPM UGM"
          width={0}
          height={0}
          className={'w-[200px] max-h-[960px]'}
        />
      </div>
    </section>
  )
}

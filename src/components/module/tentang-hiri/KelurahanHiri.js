import Image from 'next/image'
import React from 'react'

export default function Kelurahan() {
  return (
    <section className="relative w-full h-full bg-white flex flex-col items-center justify-center py-10">
      <div className="w-full h-full flex items-center justify-center flex-col max-w-[1920px]">
        {/* Title */}
        <div className="w-full h-full flex items-center justify-center gap-5 max-w-[1920px] px-10">
          <div className="w-full lg:w-fit font-bold text-[15px] md:text-[20px] text-primary-blue drop-shadow text-center md:text-start">
            KELURAHAN
          </div>
          <div className="w-full lg:w-[70%] h-[1px] bg-primary-blue hidden md:block"></div>
        </div>
        {/* Carousel Photos */}
        <div className="w-full h-full flex items-center py-5 md:px-10 lg:px-20 overflow-x-auto scrollbar-custom">
          <Image
            src={'/assets/tentang-hiri/kelurahan/Togolobe.svg'}
            alt="Togolobe"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/tentang-hiri/kelurahan/Mado.svg'}
            alt="Mado"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/tentang-hiri/kelurahan/Faudu.svg'}
            alt="Faudu"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/tentang-hiri/kelurahan/Tomajiko.svg'}
            alt="Tomajiko"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/tentang-hiri/kelurahan/Dorari Isa.svg'}
            alt="Dorari Isa"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/tentang-hiri/kelurahan/Tafraka.svg'}
            alt="Tafraka"
            width={0}
            height={0}
            className="w-full mx-2"
          />
        </div>
        <div className="my-5 text-black text-center px-5">
          <span className="mr-2">🟡</span> Lokasi Pelaksanaan KKN-PPM UGM Bumi Hiri 2025
        </div>
      </div>
    </section>
  )
}

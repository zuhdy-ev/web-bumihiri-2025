import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function TentangHiri() {
  return (
    <section className="relative w-full h-full bg-white flex flex-col items-center justify-center max-w-[1440px] p-5 py-10">
      <div className="w-full h-full flex items-center justify-center flex-col gap-5">
        {/* Title */}
        <div className="w-full h-full flex items-center justify-center gap-5 max-w-[1920px]">
          <div className="font-bold text-[15px] md:text-[20px] text-primary-green drop-shadow">
            PULAU HIRI
          </div>
          <div className="w-[70%] h-[1px] bg-primary-green hidden md:block"></div>
        </div>
        {/* Photo */}
        <div className="w-[90%]">
          <Image
            src={'assets/beranda/tentangHiri_foto.svg'}
            alt="Pulau Hiri"
            width={0}
            height={0}
            className="w-full object-cover drop-shadow-xl rounded border-2 border-white"
          />
        </div>
        {/* Text */}
        <div className="text-[10px] md:text-[12px] lg:text-[15px] text-center text-primary-green md:px-10">
          Pulau Hiri adalah sebuah pulau kecil yang terletak di sebelah utara Pulau Ternate, Maluku
          Utara. Pulau ini dikenal dengan keindahan alamnya yang masih alami, perairan yang jernih,
          dan panorama Gunung Gamalama yang memukau dari kejauhan.
        </div>
        {/* Button */}
        <Link href={`/tentang-hiri`}>
          <button className="px-5 py-1 rounded-full text-[10px] md:text-[12px] lg:text-[15px] bg-primary-green text-white font-bold w-fit">
            Tentang Hiri
          </button>
        </Link>
      </div>
    </section>
  )
}

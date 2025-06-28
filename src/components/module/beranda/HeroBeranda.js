'use client'
import React from 'react'
import Image from 'next/image'
import { ButtonProfil } from '@/components/element/umum/page'

export default function HeroBeranda() {
  return (
    <section className="relative w-full bg-primary-color flex flex-col md:items-center min-h-[70vh] lg:min-h-0 max-h-[960px] justify-end md:justify-center lg:justify-start z-0">
      {/* Photos */}
      <div className="w-full h-full absolute grid grid-cols-4">
        <Image
          src={'/assets/beranda/hero_image3.JPG'}
          alt="hero image"
          width={405}
          height={0}
          className={'w-full h-full max-h-[960px] object-cover'}
        />
        <Image
          src={'/assets/beranda/hero_image5.JPG'}
          alt="hero image"
          width={405}
          height={0}
          className={'w-full h-full max-h-[960px] object-cover'}
        />
        <Image
          src={'/assets/beranda/hero_image6.JPG'}
          alt="hero image"
          width={405}
          height={0}
          className={'w-full h-full max-h-[960px] object-cover'}
        />
        <Image
          src={'/assets/beranda/hero_image4.JPG'}
          alt="hero image"
          width={405}
          height={0}
          className={'w-full h-full max-h-[960px] object-cover'}
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute w-full h-full max-h-[960px] flex items-center justify-center bg-black opacity-50 z-10"></div>
      {/* Content */}
      <div className="w-full h-full md:h-[60vh] lg:h-screen px-5 max-w-[1920px] max-h-[960px] mb-10 md:mb-0 z-20">
        <div className="w-full h-full flex justify-end lg:px-11 lg:pb-20">
          <div className="w-full flex flex-col justify-end gap-3 md:gap-2 lg:gap-5">
            <p className="text-white text-base md:text-[22px] lg:text-[24px]">
              Selamat Datang di Official Website
            </p>
            <p className="text-white text-base font-bold md:text-[22px] lg:text-4xl">
              BADAN EKSEKUTIF MAHASISWA KELUARGA MAHASISWA <br /> UNIVERSITAS GADJAH MADA
            </p>
            {/* <Link
              className="py-1 lg:py-2 px-5 lg:px-16 mt-2 w-fit bg-gradient-to-l from-light-blue to-dark-blue text-center rounded-[5px]"
              href={'/profil'}
            >
              <p className="text-sm md:text-[13px] lg:text-lg font-made-tommy-regular">Profil Kami</p>
            </Link> */}
            <div className="w-1/2 md:w-1/4 lg:w-[220px]">
              <ButtonProfil />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

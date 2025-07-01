'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroBeranda() {
  return (
    <section className="relative w-full bg-primary-color flex flex-col items-center min-h-[70vh] lg:min-h-0 max-h-[960px] justify-center lg:justify-start z-0">
      {/* Photos */}
      <div className="w-full h-full absolute">
        <Image
          src={'/assets/beranda/hero_image.png'}
          alt="hero image"
          width={405}
          height={0}
          className={'w-full h-full max-h-[960px] object-cover'}
        />
      </div>
      {/* Dark Overlay */}
      {/* <div className="absolute w-full h-full max-h-[960px] flex items-center justify-center bg-black opacity-50 z-10"></div> */}
      {/* Content */}
      <div className="w-full h-full md:h-[60vh] lg:h-screen px-5 max-w-[1920px] max-h-[1500px] z-20">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="w-fit flex items-center justify-center">
            <Image
              src={'assets/beranda/hero_asset.png'}
              alt="hero asset"
              width={0}
              height={0}
              className="w-full md:w-1/2 lg:w-[70vh] max-w-[800px] h-auto md:translate-x-[-50px]"
            />
          </div>
          <div className="my-2">
            <Link href={`/tentang-hiri`}>
              <button className="border px-5 py-1 rounded-full text-[10px] md:text-[12px] lg:text-[15px] mr-1 bg-white text-primary-green font-bold">
                Tentang Hiri
              </button>
            </Link>
            <Link href={`/profil`}>
              <button className="border px-5 py-1 rounded-full text-[10px] md:text-[12px] lg:text-[15px] ml-1 bg-white text-primary-green font-bold">
                Tentang Kami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Image from 'next/image'

export default function HeroSop() {
  return (
    <section className="relative w-full h-[70vh] max-h-[960px] flex items-center justify-center bg-primary-color">
      <div className="absolute w-full h-full items-center justify-center top-0 z-0">
        <Image
          src={'/assets/profil/profil-cover.png'}
          alt="hero image"
          width={405}
          height={0}
          className={'w-full h-full max-h-[960px] object-cover'}
        />
      </div>
      <div className="absolute w-full h-full top-0 flex items-center justify-center bg-black opacity-50 z-10"></div>
      <div className="absolute w-full h-full flex items-end justify-start top-0 max-w-[1920px] p-10">
        <p className="font-made-tommy-bold s:text-2xl text-left z-20">
          Badan Eksekutif Mahasiswa Keluarga Mahasiswa <br />
          Universitas Gadjah Mada <br />
          <span className="font-made-tommy-light">Kabinet Gerak Membara 2024/2025</span>
        </p>
      </div>
    </section>
  )
}

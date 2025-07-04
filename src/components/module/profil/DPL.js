import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ButtonProfil } from '@/components/element/umum/page'

export default function DPL() {
  return (
    <section className="relative w-full h-full bg-primary-color flex flex-col items-center min-h-[70vh] lg:min-h-0 justify-center lg:justify-start z-0">
      {/* Background */}
      <div className="w-full h-full absolute">
        <Image
          src={'/assets/profil/dpl_bg.svg'}
          alt="bg DPL"
          width={405}
          height={0}
          className={'w-full h-full object-cover'}
        />
      </div>
      {/* Content */}
      <div className="w-full h-full p-5 md:py-10 max-w-[1440px] z-20 flex flex-col">
        <div className="w-full h-full flex items-center md:items-start flex-col md:flex-row max-w-[1440px] lg:px-20 md:gap-5">
          {/* Photo */}
          <div className="w-fit h-fit flex items-center justify-center md:justify-end md:w-1/2">
            <Image
              src={'/assets/profil/profil/dpl.svg'}
              alt="foto dpl"
              width={0}
              height={0}
              className="w-[90%] h-auto md:w-auto md:h-[90%]"
            />
          </div>
          {/* Text & Button */}
          <div className="my-2 flex flex-col justify-center items-center md:items-start md:w-1/2">
            <div className="px-1 py-1 text-[14px] md:text-[16px] lg:text-[19px] drop-shadow font-bold">
              DPL BUMI HIRI 2025
            </div>
            <div className="px-1 py-1 text-[20px] md:text-[22px] lg:text-[30px] drop-shadow font-bold text-center md:text-start">
              Sumaryono Sri Noto, S.Psi, Psikolog
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

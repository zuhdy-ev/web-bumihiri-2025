import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ButtonProfil } from '@/components/element/umum/page'

export default function SambutanKetua() {
  return (
    <section className="relative w-full bg-primary-color flex flex-col items-center min-h-[70vh] lg:min-h-0 max-h-[500px] justify-center lg:justify-start z-0">
      {/* Background */}
      <div className="w-full h-full absolute">
        <Image
          src={'/assets/beranda/tentang_bg.svg'}
          alt="hero image"
          width={405}
          height={0}
          className={'w-full h-full max-h-[550px] object-cover'}
        />
      </div>
      {/* Content */}
      <div className="w-full h-full md:h-[60vh] lg:h-screen p-5 md:pt-10 max-w-[1440px] z-20 flex flex-col gap-5">
        {/* Title */}
        <div className='flex items-center justify-center gap-5 max-w-[1920px]'>
          <div className='font-bold text-[15px] md:text-[20px]'>BUMI HIRI 2025</div>
          <div className='w-[70%] h-[1px] bg-white hidden md:block'></div>
        </div>
        <div className='w-full h-full flex items-center md:items-start flex-col md:flex-row max-w-[1440px] lg:px-20 md:gap-5'>
          {/* Photo */}
          <div className='w-fit flex items-center justify-center md:w-1/2'>
            <Image
              src={'assets/beranda/tentang_foto.png'}
              alt='hero asset'
              width={0}
              height={0}
              className='w-full aspect-video'
            />
          </div>
          {/* Text & Button */}
          <div className='my-2 flex flex-col gap-5 justify-center items-center md:items-start md:w-1/2'>
            <div className='px-1 py-1 text-[10px] md:text-[12px] lg:text-[15px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <button className='px-5 py-1 rounded-full text-[10px] md:text-[12px] lg:text-[15px] ml-1 bg-white text-primary-green font-bold w-fit'>Tentang Kami</button>
          </div>
        </div>
      </div>
    </section>
  )
}

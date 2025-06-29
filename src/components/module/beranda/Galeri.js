import Image from 'next/image'
import React from 'react'

export default function Galeri() {
  return (
    <section className="relative w-full h-full bg-white flex flex-col items-center justify-center py-10">
      <div className='w-full h-full flex items-center justify-center flex-col gap-5 max-w-[1920px]'>
        {/* Title */}
        <div className='w-full h-full flex items-center justify-center gap-5 max-w-[1920px]'>
          <div className='font-bold text-[15px] md:text-[20px] text-primary-green drop-shadow'>GALERI</div>
          <div className='w-[70%] h-[1px] bg-primary-green hidden md:block'></div>
        </div>
        {/* Carousel Photos */}
        <div className='w-full h-full flex items-center py-5 md:px-10 lg:px-20 overflow-x-auto scrollbar-custom'>
          <Image
            src={'assets/beranda/galeri_contoh1.png'}
            alt='hero asset'
            width={0}
            height={0}
            className='w-full mx-2'
          />
          <Image
            src={'assets/beranda/galeri_contoh1.png'}
            alt='hero asset'
            width={0}
            height={0}
            className='w-full mx-2'
          />
          <Image
            src={'assets/beranda/galeri_contoh1.png'}
            alt='hero asset'
            width={0}
            height={0}
            className='w-full mx-2'
          />
        </div>
        {/* Button */}
        <button className='px-5 py-1 rounded-full text-[10px] md:text-[12px] lg:text-[15px] bg-primary-green text-white font-bold w-fit'>Dokumentasi Lainnya</button>
      </div>
    </section>
  )
}

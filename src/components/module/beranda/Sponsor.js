import React from 'react'
import Image from 'next/image'

export default function Sponsor() {
  return (
    <section className='w-full h-1/2 bg-white text-black flex flex-col items-center justify-center p-5 md:py-10 gap-5'>
        <div className='font-bold text-[12px] md:text-[15px] lg:text-[20px]'>DIDUKUNG OLEH</div>
        <div className='w-fit flex flex-col md:flex-row gap-5'>
          <Image
              src={'/assets/beranda/sponsor_logo1.png'}
              alt="Pertamina"
              width={405}
              height={0}
              className={'w-full h-full max-h-[960px]'}
          />
          {/* <Image
              src={'/assets/beranda/sponsor_logo1.png'}
              alt="Pertamina"
              width={405}
              height={0}
              className={'w-full h-full max-h-[960px]'}
          /> */}
        </div>
    </section>
  )
}

import Image from 'next/image'
import React from 'react'

export default function WisataHiri() {
  return (
    <section className="relative w-full h-full bg-white flex flex-col items-center justify-center py-10">
      <div className="w-full h-full flex items-center justify-center flex-col max-w-[1920px]">
        {/* Title */}
        <div className="w-full h-full flex items-center justify-center gap-5 max-w-[1920px] px-10">
          <div className="w-full lg:w-fit font-bold text-[15px] md:text-[20px] text-primary-blue drop-shadow text-center md:text-start">
            WISATA HIRI
          </div>
          <div className="w-full lg:w-[70%] h-[1px] bg-primary-blue hidden md:block"></div>
        </div>
        {/* Carousel Photos */}
        {/* <div className="w-full h-full flex items-center py-5 md:px-10 lg:px-20 overflow-x-auto scrollbar-custom">
          <Image
            src={'/assets/profil/prokerUnggulan_contoh.png'}
            alt="proker unggulan contoh"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/profil/prokerUnggulan_contoh.png'}
            alt="proker unggulan contoh"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/profil/prokerUnggulan_contoh.png'}
            alt="proker unggulan contoh"
            width={0}
            height={0}
            className="w-full mx-2"
          />
        </div> */}
      </div>
    </section>
  )
}

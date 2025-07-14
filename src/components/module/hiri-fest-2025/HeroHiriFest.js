import React from 'react'
import Image from 'next/image'

export default function HeroHiriFest() {
  return (
    <section className="relative w-full h-[70vh] max-h-[960px] flex items-center justify-center drop-shadow">
      {/* Background */}
      <div className="absolute w-full h-full top-0 z-0">
        <Image
          src={`/assets/hiri-fest-2025/hero_bgPhone.svg`}
          alt="Background Hiri Fest"
          width={0}
          height={0}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Image */}
      <div className="absolute w-full h-full flex items-center justify-center top-10 max-w-[1920px]">
        <div className="w-[80%] md:w-[90%] max-w-[1000px] z-20">
          {/* Mobile version */}
          <Image
            src="/assets/hiri-fest-2025/hiri-title-phone.svg"
            alt="Hiri Fest Title Mobile"
            width={0}
            height={0}
            className="w-full h-full object-cover block md:hidden"
          />

          {/* Desktop/tablet version */}
          <Image
            src="/assets/hiri-fest-2025/hiri-title-2.svg"
            alt="Hiri Fest Title Desktop"
            width={0}
            height={0}
            className="w-full h-full object-cover hidden md:block"
          />
        </div>
      </div>
    </section>
  )
}

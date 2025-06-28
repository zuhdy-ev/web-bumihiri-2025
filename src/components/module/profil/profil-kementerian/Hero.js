import React from 'react'
import Image from 'next/image'

export default function Hero({ nama }) {
  return (
    <main className="w-full h-1/2 border border-white flex flex-col items-center justify-center md:flex-row-reverse md:justify-between">
      <div className="w-full h-full border border-white">
        <Image
          src="/profilKementerian/bidang-keirjenan.png"
          alt="foto"
          width={0}
          height={0}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full p-5 border border-white">
        <div className="relative w-full h-full bg-gradient-to-l from-[#5E1142] to-[#DC4F97] rounded-md p-1 flex flex-col">
          <div className="absolute -translate-y-4 bg-primary-color translate-x-2">
            <p className="px-2 font-made-tommy-extra-bold">{nama}</p>
          </div>
          <div className="w-full h-full bg-primary-color rounded-md"></div>
        </div>
      </div>
    </main>
  )
}

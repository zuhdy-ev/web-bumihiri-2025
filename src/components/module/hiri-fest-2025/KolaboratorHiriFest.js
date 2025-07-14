import React from 'react'
import Image from 'next/image'

export default function KolaboratorHiriFest() {
  return (
    <section className="w-full h-1/2 bg-white text-black flex flex-col items-center justify-center p-5 md:py-10 gap-5">
      <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-8">
        BERKOLABORASI DENGAN
      </h2>
      <div className="w-fit flex flex-col items-center justify-center lg:flex-row gap-5">
        <Image
          src={'/assets/hiri-fest-2025/kolaborator/ternate-sport-tourism.svg'}
          alt="Ternate Sport Tourism"
          width={0}
          height={0}
          className={'w-[70%] md:w-[40%] max-h-[200px]'}
        />
        <Image
          src={'/assets/hiri-fest-2025/kolaborator/ternate-berlari.svg'}
          alt="Ternate Berlari"
          width={0}
          height={0}
          className={'w-[70%] md:w-[40%] max-h-[200px]'}
        />
      </div>
    </section>
  )
}

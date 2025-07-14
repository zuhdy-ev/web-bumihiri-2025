import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function FunRun() {
  return (
    <section className="relative w-full h-full bg-white flex flex-col items-center justify-center py-14">
      <div className="w-full h-full flex items-center justify-center flex-col max-w-[1920px]">
        {/* Title */}
        <div className="w-full h-full flex items-center justify-center gap-5 max-w-[1920px] px-10">
          <div className="w-full lg:w-fit font-bold drop-shadow max-w-[500px] md:max-w-[550px]">
            <Image
              src={'/assets/hiri-fest-2025/funrun-title.svg'}
              alt="fun run title"
              width={0}
              height={0}
              className="w-full mx-2"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-5 max-w-[1000px] flex flex-col md:flex-row gap-6 text-black">
          {/* Instagram Video Embed */}
          <div className="w-full md:w-[40%] aspect-[3/4] rounded-xl overflow-hidden">
            <iframe
              src="https://www.instagram.com/reel/DMDMtFdzV63/embed"
              className="w-full h-full"
              frameBorder="0"
              allowTransparency={true}
              allowFullScreen={true}
              scrolling="no"
            ></iframe>
          </div>

          {/* Text & Boxes */}
          <div className="w-full md:w-[60%] flex flex-col gap-4 items-center md:items-start">
            {/* Description */}
            <p className="text-black text-justify text-sm md:text-base leading-relaxed">
              HiriXplore Run adalah sebuah event lari lintas alam yang mengajakmu menjelajahi pesona
              Pulau Hiri, Ternate, Maluku Utara—mulai dari jalur alam yang menantang, udara segar
              khas pesisir, hingga keindahan budaya lokal yang kental.
            </p>

            {/* Box Section */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {/* 10K Image
              <div className="w-full md:w-fit self-start flex justify-center items-center">
                Mobile version
                <Image
                  src="/assets/hiri-fest-2025/funrun/10k-phone.svg"
                  alt="10K Mobile"
                  width={100}
                  height={100}
                  className="w-full h-auto block md:hidden"
                />
                MD+ version
                <Image
                  src="/assets/hiri-fest-2025/funrun/10k.svg"
                  alt="10K"
                  width={150}
                  height={150}
                  className="w-[150px] h-auto hidden md:block"
                />
              </div> */}

              {/* Detail Box */}
              <div className="border-2 border-[#F2B705] rounded-md p-4 flex-1">
                <ul className="text-sm list-disc pl-4">
                  <li>Start/Finish: Pelabuhan Togolobe</li>
                  <li>10K | EG 200M</li>
                  <li>Melewati 3 Spot Wisata: Majiu Majiko, Gurabala, dan Baru Ma Adu</li>
                  <li>
                    Melewati 6 Kelurahan: Kel. Togolobe, Kel. Mado, Kel. Faudu, Kel. Tomajiko, Kel.
                    Dorari Isa, dan Kel. Tafraka
                  </li>
                </ul>
              </div>
            </div>

            {/* Button */}
            <button className="mt-2 px-6 py-2 bg-[#F2B705] text-white font-semibold rounded-full shadow-md w-fit hover:brightness-110 transition border-2 border-white">
              <Link href={`https://bit.ly/JelajahBumiHiri2025`} target="_blank">
                Daftar HiriXplore Run
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import React from 'react'

export default function ExpoHiri() {
  return (
    <section className="relative w-full h-full bg-white flex flex-col items-center justify-center py-14">
      <div className="w-full h-full flex items-center justify-center flex-col max-w-[1920px]">
        {/* Title */}
        <div className="w-full h-full flex items-center justify-center gap-5 max-w-[1920px] px-10">
          <div className="w-[50%] lg:w-fit font-bold drop-shadow max-w-[200px] md:max-w-[250px]">
            <Image
              src={'/assets/hiri-fest-2025/expo-title.svg'}
              alt="expo title"
              width={0}
              height={0}
              className="w-full mx-2"
            />
          </div>
        </div>
        {/* Desc */}
        <div className="px-5 py-5 max-w-[1000px]">
          <p className="text-black text-justify lg:text-center text-sm md:text-base">
            Pulau Hiri sebagai salah satu wilayah yang kaya akan kekayaan kuliner lokal, menjadi
            tuan rumah dalam kegiatan Expo Kuliner Pulau Hiri 2025. Kegiatan ini menghadirkan cita
            rasa autentik dari enam kelurahan di Pulau Hiri yang masing-masing menampilkan kuliner
            khas daerah mereka. Expo ini menjadi wadah bagi masyarakat untuk memperkenalkan dan
            menikmati aneka ragam makanan tradisional yang menjadi identitas kuliner Pulau Hiri.
          </p>
        </div>
        {/* Carousel Photos */}
        <div className="w-full h-full flex items-center pb-5 md:px-10 lg:px-20 overflow-x-auto scrollbar-custom">
          <Image
            src={'/assets/hiri-fest-2025/expo/1.png'}
            alt="expo hiri 2024"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/hiri-fest-2025/expo/2.png'}
            alt="expo hiri 2024"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/hiri-fest-2025/expo/3.png'}
            alt="expo hiri 2024"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/hiri-fest-2025/expo/4.png'}
            alt="expo hiri 2024"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/hiri-fest-2025/expo/5.png'}
            alt="expo hiri 2024"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/hiri-fest-2025/expo/6.png'}
            alt="expo hiri 2024"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/hiri-fest-2025/expo/7.png'}
            alt="expo hiri 2024"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/hiri-fest-2025/expo/9.png'}
            alt="expo hiri 2024"
            width={0}
            height={0}
            className="w-full mx-2"
          />
          <Image
            src={'/assets/hiri-fest-2025/expo/10.png'}
            alt="expo hiri 2024"
            width={0}
            height={0}
            className="w-full mx-2"
          />
        </div>
      </div>
    </section>
  )
}

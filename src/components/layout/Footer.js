import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative w-full bottom-0 py-5 px-5 h-[35vh] max-h-[300px] flex flex-col items-center justify-center bg-gradient-to-r from-[#306600] via-[#5CA41C] to-[#306600] z-50 overflow-hidden">
      <div className="w-full relative right-0 z-0">
        <Image
          src={'/assets/footer/footer_asset.svg'}
          alt="footer asset"
          width={0}
          height={0}
          className="w-fit"
        />
      </div>
      <div className="w-full max-w-[1440px] h-full absolute z-10 flex flex-col md:flex-row p-5 pl-28 gap-5 items-center justify-center lg:-translate-y-5">
        <div className="w-full md:w-1/2">
          <Image
            src={'/assets/footer/Logo & Lambang Bumi Hiri 25.svg'}
            alt="Bumi Hiri 2025"
            width={0}
            height={0}
            className="w-32 md:w-[23vw] max-w-[350px] h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2  flex flex-col gap-2 text-[10px] items-start justify-center md:items-end md:mr-10">
          <div className="flex gap-2">
            <Image
              src={'/assets/footer/footer_icon_ig.svg'}
              alt="Ig Bumi Hiri 2025"
              width={0}
              height={0}
              className="w-[15px] md:w-[17px]"
            />
            <div className="text-[10px] lg:text-[12px]">@bumihiri</div>
          </div>
          <div className="flex gap-2">
            <Image
              src={'/assets/footer/footer_icon_tiktok.svg'}
              alt="TikTok Bumi Hiri 2025"
              width={0}
              height={0}
              className="w-[15px] md:w-[17px]"
            />
            <div className="text-[10px] lg:text-[12px]">@bumihiri</div>
          </div>
          <div className="flex gap-2">
            <Image
              src={'/assets/footer/footer_icon_gmail.svg'}
              alt="Gmail Bumi Hiri 2025"
              width={0}
              height={0}
              className="w-[15px] md:w-[17px]"
            />
            <div className="text-[10px] lg:text-[12px]">hirinesia2025@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="w-full h-5 md:h-7 xl:h-9 bg-white absolute bottom-0 flex items-center justify-center">
        <div className="text-primary-green text-[10px] md:text-[12px] xl:text-[15px] font-bold">
          © Bumi Hiri 2025
        </div>
      </div>
    </footer>
  )
}

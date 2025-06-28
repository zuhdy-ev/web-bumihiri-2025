import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ChatBotKesmen() {
  return (
    <main className="w-full lg:w-[850px] md:h-[300px] px-5 py-8 md:p-8 flex gap-5 border-2 border-white rounded-[10px]">
      <div className="flex flex-col items-center justify-center gap-5">
        <div>
          <p className="text-2xl font-made-tommy-bold">Kanal Aduan</p>
        </div>
        <div>
          <p className="text-center text-[13px] lg:text-lg xl:text-xl">
            Merasa kewalahan? Jangan ragu untuk mencari bantuan. Tim kami siap membantu Anda menuju
            kesehatan mental yang lebih baik. Hubungi kami dan mulailah langkah pertama Anda menuju
            pemulihan.
          </p>
        </div>
        <div className="flex w-full md:w-[70%] h-full">
          <div className="w-1/2 flex items-center justify-center bg-primary-color">
            <a
              className="w-3/4 py-1 px-3 bg-gradient-to-l from-light-blue to-dark-blue text-center
            rounded-[5px]"
              href={'javascript:void(Tawk_API.toggle())'}
            >
              <p className="text-[13px] lg:text-lg xl:text-xl">Mulai Chat</p>
            </a>
          </div>
          <div className="w-1/2 flex items-center justify-center bg-primary-color">
            <Link
              className="w-3/4 py-1 px-3 bg-gradient-to-l from-light-blue to-dark-blue text-center
            rounded-[5px]"
              href={'/layanan-kesehatan-mental'}
            >
              <p className="text-[13px] lg:text-lg xl:text-xl">Lihat Lokasi</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

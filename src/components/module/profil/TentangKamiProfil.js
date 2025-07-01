import Image from 'next/image'
import React from 'react'

export default function SambutanKetua() {
  return (
    <section className="relative w-full bg-white flex flex-col items-center min-h-[50vh] lg:min-h-0 max-h-[500px] justify-center lg:justify-start z-0">
      {/* Content */}
      <div className="w-full h-full md:h-[60vh] lg:h-screen p-5 md:pt-10 max-w-[1440px] z-20 flex flex-col gap-5">
        {/* Title */}
        <div className="flex items-center justify-center gap-5 max-w-[1920px]">
          <div className="font-bold text-[15px] md:text-[20px] text-primary-blue">TENTANG KAMI</div>
          <div className="w-[70%] h-[1px] bg-primary-blue hidden md:block"></div>
        </div>
        <div className="w-full h-full flex items-center md:items-start flex-col md:flex-row max-w-[1440px] lg:px-20 md:gap-5">
          {/* Photo */}
          <div className="w-fit flex items-center justify-center md:w-1/2">
            <Image
              src={'/assets/profil/tentang_foto.jpg'}
              alt="Bumi Hiri 2025"
              width={0}
              height={0}
              className="w-full aspect-video object-cover drop-shadow-xl rounded border-2"
            />
          </div>
          {/* Text & Button */}
          <div className="my-2 flex flex-col gap-5 justify-center items-center md:items-start md:w-1/2">
            <div className="px-1 py-1 text-[10px] md:text-[12px] lg:text-[15px] text-justify text-primary-blue">
              KKN-PPM UGM Bumihiri merupakan tim pengabdian mahasiswa UGM yang berlokasi di
              Kecamatan Pulau Hiri, Ternate, Maluku Utara. Kami hadir untuk mendukung pemberdayaan
              masyarakat melalui program-program di bidang pendidikan, kesehatan, lingkungan,
              pariwisata, ekonomi, dan pengembangan potensi lokal berbasis kearifan budaya setempat.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

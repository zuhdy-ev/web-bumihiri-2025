import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OprecDetail({
  judul,
  pelaksana,
  peruntukan,
  deskripsi,
  tgl_buka,
  tgl_tutup,
  buku_panduan,
  link_pendaftaran,
  poster,
}) {
  return (
    <section className="w-full flex justify-center pt-[100px] md:pt-[130px] lg:pt-[140px] pb-11">
      <div className="max-w-[1920px] w-full mx-4 lg:mx-[60px]">
        {/* Border Gradient */}
        <div className="h-full rounded-xl bg-gradient-to-l from-light-red to-light-red p-1">
          {/* Bg Primary untuk nutupin color */}
          <div className="h-full bg-primary-color rounded-lg">
            <p className="text-lg md:text-3xl xl:text-[40px] font-made-tommy-bold bg-primary-color w-fit relative -top-5 mx-2 px-10">
              {judul}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 py-3 lg:py-5 mx-3 lg:mx-5 lg:pl-10 lg:-translate-y-5">
              {/* Oprec Description */}
              <div className="grid grid-cols-1 gap-y-3 my-5 ">
                {/* Kementrian */}
                <div className="flex justify-start gap-x-3 items-center  ">
                  <Image
                    width={30}
                    height={30}
                    src={'/assets/oprec/icon-kementrian.svg'}
                    alt="image"
                  />
                  <p className="text-xs md:text-lg font-made-tommy-regular  ">
                    Oleh Kementrian {pelaksana}
                  </p>
                </div>
                {/* Jadwal pembukaan */}
                <div className="flex justify-start gap-x-3 items-center  ">
                  <Image width={30} height={30} src={'/assets/oprec/icon-jadwal.svg'} alt="image" />
                  <p className="text-xs md:text-lg font-made-tommy-regular">
                    Pendaftaran dibuka mulai <b>{tgl_buka}</b>
                  </p>
                </div>
                {/* Deskripsi Oprec */}
                <p className="text-xs md:text-lg font-made-tommy-regular text-justify  ">
                  {deskripsi}
                </p>
                {/* Tanggal Tutup */}
                <div className="bg-light-red px-4 py-2 my-auto w-fit rounded-md  ">
                  <p className="text-sm md:text-lg font-made-tommy-bold">
                    Pendaftaran tutup pada: <b>{tgl_tutup ?? 'belum ada pemberitahuan'}</b>
                  </p>
                </div>
                {/* Panduan dan Pendaftaran */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3  ">
                  <Link
                    href={buku_panduan ?? '/'}
                    className="bg-gradient-to-r from-dark-blue to-light-blue px-4 py-2 my-auto rounded-md"
                  >
                    <p className="text-sm md:text-lg font-made-tommy-regular text-center">
                      Link Buku Panduan
                    </p>
                  </Link>
                  <Link
                    href={link_pendaftaran ?? '/'}
                    className="bg-gradient-to-r from-dark-blue to-light-blue px-4 py-2 my-auto rounded-md"
                  >
                    <p className="text-sm md:text-lg font-made-tommy-regular text-center">
                      Daftar Sekarang
                    </p>
                  </Link>
                </div>
              </div>
              {/* Poster Oprec */}
              <div className="order-first lg:order-last mx-auto lg:ms-auto">
                <Image
                  src={'/assets/beranda/hero_image2.png'}
                  alt="image"
                  width={0}
                  height={0}
                  className="w-full h-full object-cover aspect-[3/4] max-w-[500px] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

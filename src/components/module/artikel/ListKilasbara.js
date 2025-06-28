'use client'
import React, { useEffect, useState } from 'react'
import '../../../app/globals.css'
import dataKilasbara from '@/data/artikelKilasbara.json'
import { KilasbaraCard } from '@/components/element/kilasbara/page'
import { convertToSlug } from '@/app/artikel/kilasbara/[kilasbaraId]/page'

const ListKilasbara = () => {
  const [dataArtikel, setDataArtikel] = useState([])

  useEffect(() => {
    // Mengatur dataArtikel dengan data dari JSON
    setDataArtikel(dataKilasbara)
  }, [])

  return (
    <section className="w-full h-full bg-primary-color max-w-[1920px]">
      <div className="flex flex-col gap-5 s:gap-10 p-10 lg:p-20">
        <div className="w-full h-full flex gap-3">
          <div className="border"></div>
          <div className="font-made-tommy-bold text-xl md:text-3xl">
            KILASBARA: Kilas Balik Gerak Membara
          </div>
        </div>
        <div className=" flex overflow-x-auto scrollbar-custom py-5 gap-5">
          {dataKilasbara?.map((item) => (
            <div key={item?.id} className="w-fit">
              <KilasbaraCard
                link={`/artikel/kilasbara/${convertToSlug(item.judul)}`}
                gambar={item.gambar}
                judul={item.judul}
                className="w-full"
              />
            </div>
          ))}
          {/* <Swiper
            slidesPerView={1.7}
            spaceBetween={5}
            breakpoints={{
              375: {
                slidesPerView: 2.1,
                spaceBetween: 5,
              },
              425: {
                slidesPerView: 2.3,
                spaceBetween: 5,
              },
              550: {
                slidesPerView: 3.2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 3.1,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 5.2,
                spaceBetween: 15,
              },
            }}
            className="flex w-full items-center justify-center px-2"
          >
            <SwiperSlide>
              <KilasbaraCard
                gambar={`/`}
                judul={`Konten belum tersedia`}
                link={`/`}
              ></KilasbaraCard>
            </SwiperSlide>
            {dataKilasbara?.map((item) => (
              <SwiperSlide key={item?.id} className="w-[10rem] border border-white">
                <KilasbaraCard
                  link={`/artikel/kilasbara/${convertToSlug(item.judul)}`}
                  gambar={item.gambar}
                  judul={item.judul}
                  className="w-[10rem]"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </section>
  )
}

export default ListKilasbara

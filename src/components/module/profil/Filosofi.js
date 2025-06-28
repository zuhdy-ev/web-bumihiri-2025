'use client'

import Image from 'next/image'
import FilosofiCard from '@/components/element/filosofi/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../../../app/globals.css'

const data = [
  {
    title: 'Garis Merah',
    desc: 'Melambangkan cita-cita kabinet untuk terus berani dan bersemangat menyuarakan kebenaran dan memberikan kebermanfaatan.',
    color: 'linear-gradient(to right, #CC2139, #66111D)',
  },
  {
    title: 'Garis Biru',
    desc: 'Bahwa dalam setiap keberanian langkah yang diambil harus dilandasi dengan nilai intelektualitas, kreativitas, ketenangan, dan profesionalitas.',
    color: 'linear-gradient(to right, #2BB5D8, #424EA2)',
  },
  {
    title: 'Garis Ungu',
    desc: 'Pada akhirnya langkah ini untuk menuju satu tujuan yang mulia.',
    color: 'linear-gradient(to right, #9461CB, #60429B)',
  },
  {
    title: 'Bentuk Spiral',
    desc: 'Melambangkan cita-cita kabinet untuk terus berani dan bersemangat menyuarakan kebenaran dan memberikan kebermanfaatan.',
    color: 'linear-gradient(to right, #202020, #000000)',
  },
]

export default function Filosofi() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full px-11 py-11 max-w-7xl flex flex-col gap-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">FILOSOFI LOGO & NAMA KABINET</h2>
        {/* Mobile */}
        <div className="w-full h-full border rounded-xl overflow-hidden s:hidden">
          <div className="w-full">
            <Image
              src={'/assets/profil/Logo BEMKM UGM.png'}
              alt="image"
              width={256}
              height={256}
              style={{ objectFit: 'cover' }}
              className="w-full"
            />
          </div>
          <div className="w-full h-[80vw] p-2 bg-[#D9D9D9] overflow-auto">
            <div className="bg-gradient-to-r from-[#CC2139] to-[#66111D] p-2 rounded-lg mb-3">
              <h1 className="font-made-tommy-bold text-lg">Garis Merah</h1>
              <p className="text-justify">
                Melambangkan cita-cita kabinet untuk terus berani dan bersemangat menyuarakan
                kebenaran dan memberikan kebermanfaatan.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#2BB5D8] to-[#424EA2] p-2 rounded-lg mb-3">
              <h1 className="font-made-tommy-bold text-lg">Garis Biru</h1>
              <p className="text-justify">
                Bahwa dalam setiap keberanian langkah yang diambil harus dilandasi dengan nilai
                intelektualitas, kreativitas, ketenangan, dan profesionalitas.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#9461CB] to-[#60429B] p-2 rounded-lg mb-3">
              <h1 className="font-made-tommy-bold text-lg">Garis Ungu</h1>
              <p>Pada akhirnya langkah ini untuk menuju satu tujuan yang mulia.</p>
            </div>
            <div className="bg-gradient-to-r from-[#202020] to-[#000000] p-2 rounded-lg">
              <h1 className="font-made-tommy-bold text-lg">Bentuk Spiral</h1>
              <p className="text-justify">
                Melambangkan cita-cita kabinet untuk terus berani dan bersemangat menyuarakan
                kebenaran dan memberikan kebermanfaatan.
              </p>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="w-full h-[300px] lg:h-[350px] mt-0 border-2 rounded-xl overflow-hidden hidden s:flex items-center justify-center">
          <div className="w-full lg:w-[40vw] h-full">
            <Image
              src={'/assets/profil/Logo BEMKM UGM-2.png'}
              alt="image"
              width={256}
              height={256}
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>
          <div className="w-full h-full flex items-center justify-center bg-[#dcdcdc] overflow-hidden p-2">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              breakpoints={{
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
              }}
              className="rounded-r-lg"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <FilosofiCard item={item} bgColor={item.color} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* {data.map((item, index) => (
              <FilosofiCard item={item} bgColor={item.color} key={index} />
            ))} */}
          </div>
        </div>
        {/* Tagline */}
        <div className="flex flex-col s:flex-row-reverse items-center justify-center border-2 bg-white rounded-xl overflow-hidden w-full s:h-[250px] lg:h-[200px]">
          <div className="w-full h-[256px] s:h-full bg-gradient-to-r from-[#CC2139] to-[#66111D] flex items-center justify-center p-5">
            <h1 className="font-made-tommy-bold text-[10vw] s:text-[5vw] lg:text-[40px] text-center">
              Gerak Membara
            </h1>
          </div>
          <div className="p-5">
            <p className="text-black text-justify md:text-[20px]">
              “Gerak Membara” kami maknai sebagai semangat kabinet yang tidak akan padam dan
              sekaligus selalu menjadi landasan dalam memberikan kebermanfaatan dengan mengakar pada
              empat nilai dasar kabinet, yakni gotong royong, humanis, inklusif, dan adaptif.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

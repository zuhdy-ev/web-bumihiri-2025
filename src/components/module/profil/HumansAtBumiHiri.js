'use client'
import React, { useEffect, useState } from 'react'
import '../../../app/globals.css'
import dataKilasbara from '@/data/artikelKilasbara.json'
import { HumansCard } from '@/components/element/profil/page'
import Image from 'next/image'

const HumansAtBumiHiri = () => {
  const [dataArtikel, setDataArtikel] = useState([])

  useEffect(() => {
    setDataArtikel(dataKilasbara)
  }, [])

  return (
    <section className="w-full h-full bg-white pt-10">
      <div className="w-full h-full flex items-center justify-center">
        <div className="font-bold text-[15px] md:text-[20px] text-primary-blue drop-shadow">
          HUMANS AT BUMI HIRI 2025
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        {/* Card Container */}
        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-5 max-w-[1920px] px-10">
          {/* List Card */}
          <div className="w-full z-10 mb-32">
            <div className="w-full flex flex-wrap items-center justify-center gap-5 my-5">
              {/* Cards */}
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/1.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/2.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/3.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/4.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/5.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/6.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/7.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/8.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/9.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/10.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/11.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/12.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/13.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/14.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/15.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/16.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/17.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/18.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/19.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/20.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/21.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/22.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/23.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/24.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/25.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/26.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/27.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/28.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/29.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="relative w-[45%] md:w-[15%] rounded-lg overflow-hidden drop-shadow-lg max-w-[500px]">
                <div className="w-full h-full z-0">
                  <Image
                    src={'/assets/profil/profil/30.jpg'}
                    alt="anggota"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* {dataArtikel
                ?.sort((a, b) => new Date(b.tgl_publish) - new Date(a.tgl_publish))
                .map((item) => {
                  return (
                    <div key={item.id}>
                      <HumansCard gambar={item.gambar} judul={item.judul} />
                    </div>
                  )
                })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HumansAtBumiHiri

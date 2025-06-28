import React from 'react'
// import Link from 'next/link'
import { ButtonSelengkapnya } from '../umum/page'

export default function Card({
  judulOprec,
  jenisOprec,
  pelaksanaOprec,
  tanggalPelaksanaan,
  peruntukanOprec,
  tanggalOprec,
  link,
}) {
  return (
    <main className="w-[300px] h-[300px] md:w-[300px] md:h-[350px] my-5 ml-5 rounded-[10px] bg-gradient-to-l from-light-red via-light-red to-dark-purple flex flex-col items-center justify-center">
      <div className="relative w-[97%] lg-[98%] h-[97%] bg-primary-color rounded-[9px] p-3">
        <div className="text-base md:text-xl lg:text-2xl font-made-tommy-bold text-white">
          {judulOprec}
        </div>
        <div className="text-sm md:text-lg font-made-tommy-bold text-yellow-500">
          ● {jenisOprec}
        </div>
        <div className="text-sm md:text-[16px] text-white">Pelaksana: {pelaksanaOprec}</div>
        <div className="text-sm md:text-[16px] text-white">Untuk: {peruntukanOprec}</div>
        <div className="text-sm md:text-[16px] text-white">Pelaksanaan: {tanggalPelaksanaan}</div>
        <div className="text-sm md:text-[16px] text-white">Pendaftaran: {tanggalOprec}</div>
        <div className="absolute bottom-3 w-[90%] md:w-[93%] lg:flex lg:items-center lg:justify-center">
          <ButtonSelengkapnya link={"/"} />
        </div>
      </div>
    </main>
  )
}

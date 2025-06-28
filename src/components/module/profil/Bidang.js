'use client'
import React, { useState, useRef } from 'react'
import BidangCard from '@/components/element/bidang/Card'

const data = [
  {
    nama: 'Bidang Keirjenan',
    foto: '/assets/profil/Bidang Keirjenan.png',
    profil: '/',
  },
  {
    nama: 'Bidang Kesetjenan',
    foto: '/assets/profil/Bidang Kesetjenan.png',
    profil: '/',
  },
  {
    nama: 'Bidang Pergerakan',
    foto: '/assets/profil/Bidang Pergerakan.png',
    profil: '/',
  },
  {
    nama: 'Bidang Analisis',
    foto: '/assets/profil/Bidang Analisis.png',
    profil: '/',
  },
  {
    nama: 'Bidang Kemahasiswaan',
    foto: '/assets/profil/Bidang Kemahasiswaan.png',
    profil: '/',
  },
  {
    nama: 'Bidang Kemasyarakatan',
    foto: '/assets/profil/Bidang Kemasyarakatan.png',
    profil: '/',
  },
]

export default function Bidang() {
  // const [isDragging, setIsDragging] = useState(false) // Status dragging
  // const [startX, setStartX] = useState(0) // Posisi awal X saat drag
  // const [scrollLeft, setScrollLeft] = useState(0) // Posisi scroll awal
  // const sliderRef = useRef(null) // Referensi ke kontainer scroll

  // // Handle ketika mouse atau sentuhan dimulai
  // const handleMouseDown = (e) => {
  //   setIsDragging(true)
  //   setStartX(e.pageX - sliderRef.current.offsetLeft) // Simpan posisi X awal
  //   setScrollLeft(sliderRef.current.scrollLeft) // Simpan posisi scroll awal
  // }

  // const handleTouchStart = (e) => {
  //   setIsDragging(true)
  //   setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft)
  //   setScrollLeft(sliderRef.current.scrollLeft)
  // }

  // // Handle ketika mouse atau sentuhan bergerak
  // const handleMouseMove = (e) => {
  //   if (!isDragging) return
  //   e.preventDefault()
  //   const x = e.pageX - sliderRef.current.offsetLeft
  //   const walk = (x - startX) * 2 // Adjust kecepatan drag (multiplier)
  //   sliderRef.current.scrollLeft = scrollLeft - walk
  // }

  // const handleTouchMove = (e) => {
  //   if (!isDragging) return
  //   const x = e.touches[0].pageX - sliderRef.current.offsetLeft
  //   const walk = (x - startX) * 2
  //   sliderRef.current.scrollLeft = scrollLeft - walk
  // }

  // // Handle ketika mouse atau sentuhan berhenti
  // const handleMouseUp = () => {
  //   setIsDragging(false)
  // }

  // const handleTouchEnd = () => {
  //   setIsDragging(false)
  // }

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center">BIDANG</h2>
        {/* Kontainer yang bisa di-drag */}
        <div
          // className={`max-w-[1300px] w-full h-full md:w-full mx-auto items-center justify-start flex overflow-x-auto overscroll-x-none whitespace-nowrap scrollbar-hide gap-5 py-4 px-4 ${
          //   isDragging ? 'cursor-grabbing' : 'cursor-grab'
          // }`}
          className={`max-w-[1300px] w-full h-full md:w-full mx-auto items-center justify-start flex overflow-x-auto overscroll-x-none whitespace-nowrap scrollbar-custom gap-5 py-4 px-4`}
          // ref={sliderRef}
          // onMouseDown={handleMouseDown}
          // onMouseMove={handleMouseMove}
          // onMouseUp={handleMouseUp}
          // onMouseLeave={handleMouseUp}
          // onTouchStart={handleTouchStart}
          // onTouchMove={handleTouchMove}
          // onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-5">
            {data.map((item, index) => (
              <BidangCard
                src={item.foto}
                href={item.profil}
                bidang={item.nama}
                key={index}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

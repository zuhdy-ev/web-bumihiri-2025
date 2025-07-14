'use client'
import { useState } from 'react'
import '../../../app/globals.css'

const TentangHiriFest = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const shortText =
    'Hiri Fest 2025 adalah festival budaya dan kuliner yang diselenggarakan oleh mahasiswa KKN-PPM UGM di Pulau Hiri, Ternate...'

  const fullText =
    'Hiri Fest 2025 adalah festival budaya dan kuliner yang diselenggarakan oleh mahasiswa KKN-PPM UGM di Pulau Hiri, Ternate. Mengusung tema “Bakudapa di Hiri: Pesta Rasa dan Budaya”, festival ini menjadi wadah pertemuan dan perayaan kekayaan tradisi, seni, dan kuliner khas dari seluruh kelurahan di Pulau Hiri. Lewat rangkaian acara seperti fun run, pameran kuliner, dan pertunjukan budaya, Hiri Fest 2025 bertujuan memperkenalkan, melestarikan, dan mengembangkan potensi lokal sebagai bagian dari pariwisata berbasis budaya.'

  return (
    <section className="w-full h-full bg-gradient-to-r from-[#DB8A05] to-[#FFDA46] px-5 py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl text-white text-center">
        <h2 className="text-2xl md:text-4xl italic mb-5">
          WHAT IS <span className="font-bold">HIRI FEST 2025?</span>
        </h2>

        {/* Mobile View */}
        <div className="block md:hidden">
          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              isExpanded ? 'max-h-[1000px]' : 'max-h-[100px]'
            }`}
          >
            <p className="text-sm leading-relaxed max-w-4xl mx-auto">
              {isExpanded ? fullText : shortText}
            </p>
          </div>
          {!isExpanded && (
            <button
              className="mt-3 bg-white text-[#DB8a05] px-4 py-2 rounded-full text-sm"
              onClick={() => setIsExpanded(true)}
            >
              Lebih Banyak
            </button>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <p className="text-base leading-relaxed max-w-4xl mx-auto">{fullText}</p>
        </div>
      </div>
    </section>
  )
}

export default TentangHiriFest

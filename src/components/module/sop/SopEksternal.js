'use client'
import React from 'react'
import { SopCard } from '@/components/element/sop/page'

const SopEksternal = () => {
  return (
    <section className="py-5 md:py-8 bg-primary-color">
      <main className="w-full h-full">
        <div className="flex items-center ml-5 md:mx-10 lg:mx-20">
          <p className="text-white font-made-tommy-bold text-xl md:text-3xl">
            <span className="mr-2">|</span>SOP Eksternal
          </p>
        </div>
        <div className="ml-5">
          <p className="text-[#ADADAD] text-sm md:text-[16px] lg:text-lg md:mx-10 lg:mx-20">
            adalah serangkaian prosedur yang dirancang untuk memberikan penjelasan yang lengkap dan
            komprehensif mengenai kebutuhan serta syarat kerja sama dan kunjungan dari pihak
            eksternal terhadap BEM KM UGM.
          </p>
        </div>
        <div className="w-full h-full flex items-center py-5 md:px-10 lg:px-20 overflow-x-auto overscroll-x-none scrollbar-custom">
          <div className="ml-5">
            <SopCard
              iconSop={'/assets/sop/icon-kerja-sama.png'}
              judulSop={'Penerimaan Kerja Sama'}
              linkBacaSop={''}
              linkAjukanSop={''}
            />
          </div>
          <div className="mx-5">
            <SopCard
              iconSop={'/assets/sop/icon-permohonan-kunjungan.png'}
              judulSop={'Permohonan Kunjungan'}
              linkBacaSop={''}
              linkAjukanSop={''}
            />
          </div>
        </div>
      </main>
    </section>
  )
}

export default SopEksternal

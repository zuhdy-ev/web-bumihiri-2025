'use client'
import React from 'react'
import { SopCard } from '@/components/element/sop/page'

const SopEksternal = () => {
  return (
    <section className="py-5 md:py-8 bg-primary-color">
      <main className="w-full h-full">
        <div className="flex items-center ml-5 md:mx-10 lg:mx-20">
          <p className="text-white font-made-tommy-bold text-xl md:text-3xl">
            <span className="mr-2">|</span>SOP Internal
          </p>
        </div>
        <div className="ml-5">
          <p className="text-[#ADADAD] text-sm md:text-[16px] lg:text-lg md:mx-10 lg:mx-20">
            adalah serangkaian prosedur yang dirancang untuk mengatur dan mengelola berbagai aspek
            keanggotaan dalam BEM KM UGM 2024.
          </p>
        </div>
        <div className="w-full h-full flex items-center py-5 md:px-10 lg:px-20 overflow-x-auto scrollbar-custom">
          <div className="ml-5">
            <SopCard
              iconSop={'/assets/sop/icon-athala-kusala.png'}
              judulSop={'Athana Kusala'}
              linkBacaSop={'https://bit.ly/SOPAsthanaKusala2024'}
              linkAjukanSop={''}
            />
          </div>
          <div className="ml-5">
            <SopCard
              iconSop={'/assets/sop/icon-satgas-ppks.png'}
              judulSop={'Satgas PPKS BEM KM UGM'}
              linkBacaSop={'https://bit.ly/PeraturanInternalFARPPKS'}
              linkAjukanSop={''}
            />
          </div>
          <div className="ml-5">
            <SopCard
              iconSop={'/assets/sop/icon-cuti.png'}
              judulSop={'Cuti'}
              linkBacaSop={'https://bit.ly/SOPCuti2024'}
              linkAjukanSop={'https://bit.ly/FormRekomputGerakMembara2024'}
            />
          </div>
          <div className="ml-5">
            <SopCard
              iconSop={'/assets/sop/icon-pemutihan.png'}
              judulSop={'Pemutihan'}
              linkBacaSop={'https://bit.ly/SOPPemutihan2024'}
              linkAjukanSop={'https://bit.ly/FormRekomputGerakMembara2024'}
            />
          </div>
          <div className="mx-5">
            <SopCard
              iconSop={'/assets/sop/icon-pengunduran-diri.png'}
              judulSop={'Penonaktifan Anggota Sementara'}
              linkBacaSop={'https://bit.ly/SOPPenonaktifanAnggotaSementara2024'}
              linkAjukanSop={''}
            />
          </div>
        </div>
      </main>
    </section>
  )
}

export default SopEksternal

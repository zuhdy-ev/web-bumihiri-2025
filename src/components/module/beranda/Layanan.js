import React from 'react'
import { SopCard } from '@/components/element/sop/page'
import { ChatBotKesmen } from '@/components/element/kanal-aduan/page'

const Layanan = () => {
  return (
    <section className="w-full h-full flex items-center justify-center bg-primary-color px-11">
      <div className="w-full max-w-[1920px] flex flex-col items-center justify-center">
        <p className="text-xl md:text-3xl text-center font-bold my-2">LAYANAN</p>
        <p className="text-[13px] lg:text-lg xl:text-xl text-center my-2">
          Melalui misi kemahasiswaan dan kemasyarakatan, kami membangun berbagai layanan dan membuka
          diri untuk berbagi.
        </p>
        <div className="w-full md:w-[90%] max-w-[1000px] flex flex-col items-center justify-center my-5">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">
            <SopCard
              iconSop={'/assets/sop/icon-kerja-sama.png'}
              judulSop={'Penerimaan Kerja Sama'}
              linkBacaSop={''}
              linkAjukanSop={''}
            />
            <SopCard
              iconSop={'/assets/sop/icon-permohonan-kunjungan.png'}
              judulSop={'Permohonan Kunjungan'}
              linkBacaSop={''}
              linkAjukanSop={''}
            />
          </div>
          <div className="w-full flex items-center justify-center py-5">
            <ChatBotKesmen />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layanan

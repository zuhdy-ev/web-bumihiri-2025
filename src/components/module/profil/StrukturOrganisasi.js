import Image from 'next/image'
import React from 'react'

export default function StrukturOrganisasi() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full px-11 py-11 max-w-7xl flex flex-col gap-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center">STRUKTUR ORGANISASI</h2>
        <div className="w-full border-2 flex flex-wrap">
          <div className="w-full md:w-2/3 p-8 flex flex-wrap justify-center items-center">
            <Image src={'/assets/profil/Bagan.png'} width={512} height={512} alt="image" />
          </div>
          <div className="w-full md:w-1/3 border-t-2 md:border-l-2">
            <div className="p-2 md:p-8">
              <h3 className="text-center text-lg md:text-xl mb-4">Keterangan</h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="p-3 bg-[#257BBF]"></div>
                  <p>Ketua Bem KM UGM</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="p-3 bg-[#DC4F97]"></div>
                  <p>Inspektorat Jendral</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="p-3 bg-[#01A66C]"></div>
                  <p>Sekretaris Jenderal</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="p-3 bg-[#D72C21]"></div>
                  <p>Bidang Pergerakan</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="p-3 bg-[#734EAE]"></div>
                  <p>Bidang Analisis</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="p-3 bg-[#F2D153]"></div>
                  <p>Bidang Kemahasiswaan</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="p-3 bg-[#E25F28]"></div>
                  <p>Bidang Kemasyarakatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

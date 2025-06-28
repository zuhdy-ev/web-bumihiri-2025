import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ButtonProfil } from '@/components/element/umum/page'

export default function SambutanKetua() {
  return (
    <section className="relative md:pt-10 w-full bg-primary-color flex items-center justify-center">
      <div className="w-full max-w-[1920px] flex flex-col md:flex-row md:px-11 items-center justify-center">
        {/* Photo */}
        <div className="w-full max-w-[400px] p-3 md:p-0 md:mr-5 md:w-1/3 lg:w-[40%] my-5 lg:mr-10">
          <Image
            src={'/assets/beranda/sambutan_ketua_bem.png'}
            alt="nama ketua & logo bem km ugm"
            width={1000}
            height={1000}
            quality={100}
            style={{
              height: '100%',
              width: '100%',
              'object-fit': 'cover',
            }}
            className="w-full"
          />
        </div>
        {/* Text */}
        <div className="md:w-2/3 lg:w-[60%] h-full flex flex-col items-center justify-center md:items-start gap-3">
          <p className="text-xl md:text-3xl w-full font-made-tommy-bold text-center md:text-start">
            SAMBUTAN KETUA BEM
          </p>
          <p className="text-justify w-full  px-5 md:px-0 text-[13px] lg:text-lg xl:text-xl">
            Selamat datang di laman web BEM KM UGM. Kami akan mengajak pembaca mengenal lebih dalam
            BEM KM UGM. Dalam pidato pengukuhannya sebagai Doktor (H.C) di UGM, Bung Karno
            mengatakan, &quot;Teori tiada guna... jika tidak dipergunakan untuk mengabdi pada
            praktik hidup. Buatlah ilmu berdwitunggal dengan amal.&quot; Kami percaya BEM KM UGM
            harus menjadi ruang aktualisasi roh cita-cita ini, menjadi tempat bertemunya ilmu dan
            amal. Melalui Kabinet Gerak Membara roh ini kami jalankan untuk kebermanfatan Kader BEM
            KM UGM, mahasiswa, dan masyarakat dengan dasar nilai kemanusiaan. Bergerak
            bersama, gerak membara!
          </p>
          {/* <div className="w-1/2 md:w-1/3 lg:w-[220px] flex items-center justify-center py-1">
            <ButtonProfil />
          </div> */}
        </div>
      </div>
    </section>
  )
}

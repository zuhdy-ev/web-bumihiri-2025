'use client'
import Nav from '@/components/layout/Nav'
import { ArtikelCard } from '@/components/element/artikel/page'
import dataKajian from '@/data/artikelKajian.json'
import { convertToSlug } from '@/app/artikel/kajian/[kajianId]/page'

export default function Oprec() {
  return (
    <main className="bg-white w-full min-h-screen py-36">
      <Nav active="artikel" />
      <div className="flex flex-col mb-10">
        <p className="text-xl md:text-3xl text-center font-made-tommy-bold my-2 px-5 text-orange-500">
          KAJIAN
        </p>
        <p className="text-[13px] lg:text-lg xl:text-xl text-center my-2 px-5">
          Baca kumpulan kajian ilmiah yang kami tulis untuk menanggapi berbagai isu yang ada kampus,
          regional DIY, nasional, hingga internasional.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center flex-wrap gap-5">
        {dataKajian.map((item) => {
          return (
            <div key={item.id} className="">
              <ArtikelCard
                gambar={item.gambar}
                judul={item.judul}
                kementerian={item.kementerian}
                tgl_publish={item.tgl_publish}
                deskripsi={item.deskripsi}
                link={`/artikel/kajian/${convertToSlug(item.judul)}`}
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}

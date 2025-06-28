'use client'
import Nav from '@/components/layout/Nav'
import dataKilasbara from '@/data/artikelKilasbara.json'
import { KilasbaraCard } from '@/components/element/kilasbara/page'
import { convertToSlug } from '@/app/artikel/kilasbara/[kilasbaraId]/page'

export default function Oprec() {
  return (
    <main className="bg-primary-color w-full min-h-screen py-36">
      <Nav active="artikel" />
      <div className="flex flex-col mb-10">
        <p className="text-xl md:text-3xl text-center font-made-tommy-bold my-2 px-5 text-orange-500">
          KILASBARA
        </p>
        <p className="text-[13px] lg:text-lg xl:text-xl text-center my-2 px-5">
          Mengenal BEMKM UGM melalui laporan dari berbagai kegiatan kami.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center flex-wrap gap-5">
        {dataKilasbara.map((item) => {
          return (
            <div key={item.id} className="">
              <KilasbaraCard
                gambar={item.gambar}
                judul={item.judul}
                kementerian={item.kementerian}
                tgl_publish={item.tgl_publish}
                deskripsi={item.deskripsi}
                link={`/artikel/kilasbara/${convertToSlug(item.judul)}`}
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}

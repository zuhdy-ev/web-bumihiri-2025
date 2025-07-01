'use client'
import { useState, useEffect } from 'react'
import Nav from '@/components/layout/Nav'
import ArtikelDetail from '@/components/module/artikel/detail/ArtikelDetail.js'
import dataKajian from '@/data/artikelKajian.json'
import { convertToSlug } from '@/app/artikel/[artikelId]/page.js'

export default function DetailArtikel({ params }) {
  const { artikelId } = params
  const artikel = dataKajian.find((artikel) => convertToSlug(artikel.judul) === artikelId)

  if (!artikel) {
    return (
      <main className="bg-primary-color text-white w-full h-full">
        <Nav active="artikel" />
        <div className="pt-20 min-h-screen flex justify-center items-center">
          <p>Artikel tidak ditemukan</p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-primary-color text-white w-full h-full">
      <Nav active="artikel" />
      <div className="pt-20 min-h-screen flex justify-center items-center">
        <ArtikelDetail
          jenis={'Kajian'}
          gambar={artikel.gambar}
          judul={artikel.judul}
          kementerian={artikel.kementrian}
          tgl_publish={artikel.tgl_publish}
          deskripsi={artikel.deskripsi}
        />
      </div>
    </main>
  )
}

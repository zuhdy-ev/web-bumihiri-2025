import Nav from '@/components/layout/Nav'
import {
  HeroBeranda,
  Sponsor,
  TentangKami,
  TentangHiri,
  Artikel,
  Galeri,
  Pelaksana,
} from '@/components/module/beranda/page'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-primary-color">
      <Nav active="beranda" />
      <HeroBeranda />
      <Pelaksana />
      <Sponsor />
      <TentangKami />
      <TentangHiri />
      <Artikel />
      <Galeri />
      <Footer active="" />
    </main>
  )
}

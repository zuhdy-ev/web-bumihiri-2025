import Nav from '@/components/layout/Nav'
import {
  HeroBeranda,
  Sponsor,
  TentangKami,
  TentangHiri,
  Artikel,
  Galeri,
} from '@/components/module/beranda/page'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-primary-color">
      <Nav active="beranda" />
      <HeroBeranda />
      <Sponsor />
      <TentangKami />
      <TentangHiri />
      <Artikel />
      <Galeri />
    </main>
  )
}

import Nav from '@/components/layout/Nav'
import {
  HeroBeranda,
  SambutanKetua,
  BerdinamikaBersama,
  Kilasbara,
  Kajian,
  Layanan,
} from '@/components/module/beranda/page'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 bg-primary-color">
      <Nav active="beranda" />
      <HeroBeranda />
      <BerdinamikaBersama />
      <SambutanKetua />
      <Kilasbara />
      <Kajian />
      <Layanan />
    </main>
  )
}

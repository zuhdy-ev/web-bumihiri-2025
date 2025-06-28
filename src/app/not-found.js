import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'

export default function NotFound() {
  return (
    <div className="h-screen flex flex-wrap justify-center items-center relative bg-primary-color overflow-x-hidden overflow-y-hidden">
      <Nav />
      <div className="absolute top-20 translate-x-48 w-52 h-52 md:w-64 md:h-64">
        <Image src={'/assets/notfound/Star 1.png'} width={256} height={256} alt={`asset`} />
      </div>
      <div className="absolute bottom-0 -translate-x-32  w-52 h-52 md:w-64 md:h-64">
        <Image src={'/assets/notfound/Star 2.png'} width={256} height={256} alt={`asset`} />
      </div>
      <div className="max-w-xs md:max-w-none md:w-fit flex flex-col gap-2 md:pl-16">
        <h1 className="text-left text-7xl md:text-9xl text-white font-semibold">404</h1>
        <h4 className="text-left text-2xl md:text-4xl text-white font-bold">
          Halaman Tidak Ditemukan
        </h4>
        <p className="text-left md:text-xl text-white">
          Maaf, kami tidak dapat menemukan halaman yang Anda cari.
        </p>
        <div className="ml-auto mt-4">
          <Link href={'/'}>
            <button
              type="button"
              className="px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-l from-light-blue to-dark-blue"
            >
              Beranda
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

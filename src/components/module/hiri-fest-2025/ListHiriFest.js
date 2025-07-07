'use client'
import '../../../app/globals.css'

const ListGaleri = () => {
  return (
    <section className="w-full h-full bg-white max-w-[1920px] px-5">
      <div className="w-full">
        {/* Card Container */}
        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Card */}
          <div className="w-full z-10 mt-10 mb-32">
            <div className="w-full flex flex-wrap items-center justify-center gap-5 my-5">
              <div className="text-black">Konten belum tersedia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListGaleri

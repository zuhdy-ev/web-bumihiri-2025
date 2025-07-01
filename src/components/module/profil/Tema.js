import Image from 'next/image'

export default function Tema() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-[#125881] via-[#40A6AA] to-[#125881] gap-5 lg:gap-8 py-10">
      {/* Title */}
      <div className="w-full flex justify-center md:justify-between items-center gap-5 max-w-[1440px]">
        <div className="hidden w-1/4 max-w-[450px] md:block">
          <Image
            src={'/assets/profil/tema_asset.svg'}
            alt="tema asset"
            width={0}
            height={0}
            className="w-full"
          />
        </div>
        <div className="text-white font-bold w-full md:w-1/3 flex items-center justify-center text-center text-[15px] md:text-[20px]">
          TEMA BUMI HIRI 2025
        </div>
        <div className="hidden w-1/4 max-w-[450px] md:block">
          <Image
            src={'/assets/profil/tema_asset.svg'}
            alt="tema asset"
            width={0}
            height={0}
            className="w-full"
          />
        </div>
      </div>
      {/* Content */}
      <div className="px-5 md:px-28 max-w-[1440px]">
        <p className="text-white text-center text-[14px] md:text-[16px] lg:text-[19px]">
          &quot;Sinergi Ekonomi Kreatif dan Pariwisata Berkelanjutan Berbasis Kearifan Lokal dan
          Potensi Agro-Maritim dalam Mewujudkan Desa Wisata Mandiri&quot;
        </p>
      </div>
      {/* <div className="w-full px-11 py-11 max-w-7xl flex flex-col gap-10">
        <div className="flex flex-wrap items-center">
          <h2 className="text-2xl md:text-3xl font-bold md:w-1/6 w-full mb-6 md:mb-0">Visi</h2>
          <p className="p-5 border-2 md:w-5/6 w-full text-justify">
            Menghadirkan BEM KM UGM yang aktif, progresif harmonis, dan inklusif berlandaskan
            kepentingan mahasiswa dan masyarakat.
          </p>
        </div>
        <div className="flex flex-wrap items-center">
          <h2 className="text-2xl md:text-3xl font-bold md:w-1/6 w-full mb-8 md:mb-0">Misi</h2>
          <div class="md:w-5/6 w-full container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="border-2 p-5">
              <h3 class="text-lg md:text-xl font-bold bg-primary-color p-2 -mt-11 w-fit">AKTIF</h3>
              <p className="text-justify">
                Aktif melakukan pengawalan isu di tingkat kampus, regional, nasional, dan global
                sebagai bentuk sikap dan komitmen BEM KM UGM.
              </p>
            </div>
            <div class="border-2 p-5">
              <h3 class="text-lg md:text-xl font-bold bg-primary-color p-2 -mt-11 w-fit">
                MEMBUKA RUANG
              </h3>
              <p className="text-justify">
                Membuka ruang yang komunikatif dan menyinergikan langkah serta pandangan berbagai
                elemen di dalam universitas untuk kebermanfaatan mahasiswa dan masyarakat.
              </p>
            </div>
            <div class="border-2 p-5">
              <h3 class="text-lg md:text-xl font-bold bg-primary-color p-2 -mt-11 w-fit">
                MENGAKOMODASI
              </h3>
              <p className="text-justify">
                Mengakomodasi ekspresi mahasiswa dalam beragam ruang dan rupa.
              </p>
            </div>
            <div class="border-2 p-5">
              <h3 class="text-lg md:text-xl font-bold bg-primary-color p-2 -mt-11 w-fit">
                RESTRUKTURISASI
              </h3>
              <p className="text-justify">
                Merestrukturisasi BEM KM sehingga mampu bergerak secara cepat dan jitu dalam
                menghadapi tantangan yang dinamis berlandaskan kesejahteraan dan pengembangan
                anggota.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

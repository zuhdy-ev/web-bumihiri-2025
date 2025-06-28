import Image from 'next/image'

export default function AgendaUtama() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full px-11 py-11 max-w-7xl flex flex-col gap-5">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">AGENDA UTAMA</h2>
        <div className="flex flex-wrap items-stretch">
          {/* Poster */}
          <div className="w-full lg:w-1/2 flex flex-wrap justify-center items-center lg:pr-2 mb-5 lg:mb-0">
            <div className="border-2 p-4 rounded-3xl flex-1 h-full flex flex-wrap justify-center items-center">
              <Image src={'/assets/profil/Agenda.png'} width={512} height={512} alt="image" />
            </div>
          </div>
          {/* Keterangan */}
          <div className="w-full lg:w-1/2 flex flex-wrap justify-center lg:pl-2">
            <div className="border-2 rounded-3xl p-4 flex flex-col gap-2 flex-1 bg-white text-black">
              <div>
                <h4 className="text-lg font-bold">01. Kemahasiswaan</h4>
                Pelayanan mahasiswa yang inklusif untuk mewadahi dan menjadi medium akses bagi
                kebutuhan dasar, pengembangan, serta kesejahteraan mahasiswa.
              </div>
              <div>
                <h4 className="text-lg font-bold">02. Kemasyarakatan</h4>
                Mewadahi pengabdian kepada masyarakat untuk mendorong perkembangan dan memantik
                kesejahteraan masyarakat.
              </div>
              <div>
                <h4 className="text-lg font-bold">03. Pergerakan</h4>
                Menghadirkan pergerakan berbasiskan isu dalam koridor paradigma advokatif yang
                dilakukan secara aktif, partisipatif, dan berdampak.
              </div>
              <div>
                <h4 className="text-lg font-bold">04. Internal</h4>
                Membangun internal organisasi yang dilandaskan prinsip gotong-royong, humanis,
                adaptif, dan menciptakan tata kelola organisasi yang partisipatif, transaparan, dan
                akuntabel.{' '}
              </div>
              <div>
                <h4 className="text-lg font-bold">05. Eksternal</h4>
                Menciptakan hubungan dengan entitas di luar BEM melalui prinsip kolaboratif,
                egaliter, dan humanis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

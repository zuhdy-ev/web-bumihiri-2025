
export default function VisiMisi() {
  return (
    <section className="flex flex-col items-center justify-center">
         <div className="w-full px-11 py-11 max-w-7xl flex flex-col gap-10">
            <div className="flex flex-wrap items-center">
                <h2 className="text-2xl md:text-3xl font-bold md:w-1/6 w-full mb-6 md:mb-0">Visi</h2>
                <p className="p-5 border-2 md:w-5/6 w-full text-justify">Menghadirkan BEM KM UGM yang aktif, progresif harmonis, dan inklusif berlandaskan kepentingan mahasiswa dan masyarakat.</p>
            </div>
            <div className="flex flex-wrap items-center">
                <h2 className="text-2xl md:text-3xl font-bold md:w-1/6 w-full mb-8 md:mb-0">Misi</h2>
                <div class="md:w-5/6 w-full container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="border-2 p-5">
                        <h3 class="text-lg md:text-xl font-bold bg-primary-color p-2 -mt-11 w-fit">AKTIF</h3>
                        <p className="text-justify">Aktif melakukan pengawalan isu di tingkat kampus, regional, nasional, dan global sebagai bentuk sikap dan komitmen BEM KM UGM.</p>
                    </div>
                    <div class="border-2 p-5">
                        <h3 class="text-lg md:text-xl font-bold bg-primary-color p-2 -mt-11 w-fit">MEMBUKA RUANG</h3>
                        <p className="text-justify">Membuka ruang yang komunikatif dan menyinergikan langkah serta pandangan berbagai elemen di dalam universitas untuk kebermanfaatan mahasiswa dan masyarakat.</p>
                    </div>
                    <div class="border-2 p-5">
                        <h3 class="text-lg md:text-xl font-bold bg-primary-color p-2 -mt-11 w-fit">MENGAKOMODASI</h3>
                        <p className="text-justify">Mengakomodasi ekspresi mahasiswa dalam beragam ruang dan rupa.</p>
                    </div>
                    <div class="border-2 p-5">
                        <h3 class="text-lg md:text-xl font-bold bg-primary-color p-2 -mt-11 w-fit">RESTRUKTURISASI</h3>
                        <p className="text-justify">Merestrukturisasi BEM KM sehingga mampu bergerak secara cepat dan jitu dalam menghadapi tantangan yang dinamis berlandaskan kesejahteraan dan pengembangan anggota.</p>
                    </div>
                </div>
            </div>
         </div>
    </section>
  )
}

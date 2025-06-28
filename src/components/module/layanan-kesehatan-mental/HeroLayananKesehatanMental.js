// 'use client'
// import 'leaflet/dist/leaflet.css'
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
// import 'leaflet-defaulticon-compatibility'
// import markerIconPng from 'leaflet/dist/images/marker-icon.png'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// export default async function HeroLayananKesehatanMental() {
//   const daftarLayanan = [
//     {
//       lat: -7.7773503,
//       long: 110.3461432,
//       nama: 'Unit Konsultasi Psikologi UGM',
//       lokasi:
//         '69HJ+72V Bulaksumur, Yogyakarta, Jl. Sosio Humaniora, Karang Malang, Caturtunggal, Depok, Sleman Regency, Special Region of Yogyakarta 55281',
//       waktu: '08.00–16.00',
//       telepon: '085759161581',
//       link: 'https://maps.app.goo.gl/cFptDgdwweaxQyhq9',
//     },
//     {
//       lat: -7.7732683,
//       long: 110.3492331,
//       nama: 'Biro Psikologi Kalyananda',
//       lokasi:
//         'Jl. Pogung Baru No.H5, Pogung Baru, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284',
//       waktu: '08.00–16.00',
//       telepon: '085700745556',
//       link: 'https://maps.app.goo.gl/i6FX9ZNFbnkrre7z5',
//     },
//     {
//       lat: -7.7770101,
//       long: 110.338676,
//       nama: 'Klinik Psikologi RS. Bethesda',
//       lokasi:
//         'Jl. Jend. Sudirman No.70, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224',
//       waktu: '08.00–16.00',
//       telepon: '081226207407',
//       link: 'https://maps.app.goo.gl/MRFf9KRcBhfq6W9N7',
//     },
//     {
//       lat: -7.775631,
//       long: 110.3314709,
//       nama: 'Rumah Konsul',
//       lokasi:
//         'CTX, Jl. Affandi Pelem Kecut No.31B, RT.13/RW.04, Santren, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281',
//       waktu: '08.00–16.00',
//       telepon: '081322276321',
//       link: 'https://maps.app.goo.gl/ipY5muiu7gHfWW6L6',
//     },
//     {
//       lat: -7.7737717,
//       long: 110.29798,
//       nama: 'Optima Prima Biro Psikologi',
//       lokasi:
//         'Perumahan Popongan Blok C No 6, Kutu Dukuh, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284',
//       waktu: '08.00–16.00',
//       telepon: '0274625907',
//       link: 'https://maps.app.goo.gl/b66RaiKZQyg5M4478',
//     },
//   ]
//   return (
//     <section className="w-full pt-10 pb-5 px-5 md:py-10 max-w-[1920px] flex flex-col items-center justify-center bg-primary-color">
//       <p className="pt-20 pb-5 text-[30px] text-white px-2 font-made-tommy-bold">
//         Daftar Layanan Kesehatan Mental Yogyakarta
//       </p>
//       <div className="w-full z-0 px:1 md:px-20 grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
//         <div className="w-full">
//           <MapContainer
//             center={[-7.7715563, 110.3751251]}
//             zoom={10}
//             scrollWheelZoom={false}
//             style={{ height: '70vh', width: '100%', borderRadius: '10px' }}
//           >
//             <TileLayer
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             {daftarLayanan.map((v) => {
//               return (
//                 <Marker position={[v.lat, v.long]}>
//                   <Popup>{v.nama}</Popup>
//                 </Marker>
//               )
//             })}
//           </MapContainer>
//         </div>
//         <div>
//           <div className="w-full md:h-[70vh] h-96 overflow-y-auto px-2 pb-2 scrollbar-custom md:mt-0">
//             {daftarLayanan.map((v) => {
//               return (
//                 <div className="w-full rounded-lg bg-white px-5 py-3 relative my-3">
//                   <p className="text-[20px] text-black mb-2 font-bold">{v.nama}</p>
//                   <div className="flex flex-col gap-2">
//                     <div className="flex items-center gap-4 ">
//                       <div className="w-1/12">
//                         <Image
//                           src={'/assets/icon/icon-lokasi.png'}
//                           alt="logo"
//                           width={25}
//                           height={25}
//                         />
//                       </div>
//                       <span className="w-11/12 text-black">{v.lokasi}</span>
//                     </div>

//                     <div className="flex items-center gap-4 ">
//                       <div className="w-1/12 ">
//                         <Image
//                           src={'/assets/icon/icon-waktu.png'}
//                           alt="logo"
//                           width={25}
//                           height={25}
//                         />
//                       </div>
//                       <span className="w-11/12 text-black">{v.waktu}</span>
//                     </div>

//                     <div className="flex items-center gap-4">
//                       <div className="w-1/12">
//                         <Image
//                           src={'/assets/icon/icon-telepon.png'}
//                           alt="logo"
//                           width={25}
//                           height={25}
//                         />
//                       </div>
//                       <span className="w-11/12 text-black">{v.telepon}</span>
//                     </div>
//                   </div>
//                   <div className="absolute bottom-5 right-10">
//                     <button className="y-1 px-3 lg:py-2 lg:px-8  bg-gradient-to-l from-light-blue to-dark-blue text-center rounded-[5px] font-made-tommy-regular text-[12px] lg:text-base">
//                       <Link href={v.link} target="_blank">
//                         Rute
//                       </Link>
//                     </button>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function HeroLayananKesehatanMental() {
  const daftarLayanan = [
    {
      id: 1,
      lat: -7.7773503,
      long: 110.3461432,
      nama: 'Unit Konsultasi Psikologi UGM',
      lokasi:
        '69HJ+72V Bulaksumur, Yogyakarta, Jl. Sosio Humaniora, Karang Malang, Caturtunggal, Depok, Sleman Regency, Special Region of Yogyakarta 55281',
      waktu: '08.00–16.00',
      telepon: '085759161581',
      link: 'https://maps.app.goo.gl/cFptDgdwweaxQyhq9',
    },
    {
      id: 2,
      lat: -7.7732683,
      long: 110.3492331,
      nama: 'Biro Psikologi Kalyananda',
      lokasi:
        'Jl. Pogung Baru No.H5, Pogung Baru, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284',
      waktu: '08.00–16.00',
      telepon: '085700745556',
      link: 'https://maps.app.goo.gl/i6FX9ZNFbnkrre7z5',
    },
    {
      id: 3,
      lat: -7.7770101,
      long: 110.338676,
      nama: 'Klinik Psikologi RS. Bethesda',
      lokasi:
        'Jl. Jend. Sudirman No.70, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224',
      waktu: '08.00–16.00',
      telepon: '081226207407',
      link: 'https://maps.app.goo.gl/MRFf9KRcBhfq6W9N7',
    },
    {
      id: 4,
      lat: -7.775631,
      long: 110.3314709,
      nama: 'Rumah Konsul',
      lokasi:
        'CTX, Jl. Affandi Pelem Kecut No.31B, RT.13/RW.04, Santren, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281',
      waktu: '08.00–16.00',
      telepon: '081322276321',
      link: 'https://maps.app.goo.gl/ipY5muiu7gHfWW6L6',
    },
    {
      id: 5,
      lat: -7.7737717,
      long: 110.29798,
      nama: 'Optima Prima Biro Psikologi',
      lokasi:
        'Perumahan Popongan Blok C No 6, Kutu Dukuh, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284',
      waktu: '08.00–16.00',
      telepon: '0274625907',
      link: 'https://maps.app.goo.gl/b66RaiKZQyg5M4478',
    },
  ]

  return (
    <section className="w-full pt-10 pb-5 px-5 md:py-10 max-w-[1920px] flex flex-col items-center justify-center bg-primary-color">
      <p className="pt-20 pb-5 text-[30px] text-white px-2 font-made-tommy-bold">
        Daftar Layanan Kesehatan Mental Yogyakarta
      </p>
      <div className="w-full z-0 px:1 md:px-20 grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div className="w-full">
          <MapContainer
            center={[-7.7715563, 110.3751251]}
            zoom={10}
            scrollWheelZoom={false}
            style={{ height: '70vh', width: '100%', borderRadius: '10px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {daftarLayanan.map((v) => (
              <Marker key={v.id} position={[v.lat, v.long]}>
                <Popup>{v.nama}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div>
          <div className="w-full md:h-[70vh] h-96 overflow-y-auto px-2 pb-2 scrollbar-custom md:mt-0">
            {daftarLayanan.map((v) => (
              <div key={v.id} className="w-full rounded-lg bg-white px-5 py-3 relative my-3">
                <p className="text-[20px] text-black mb-2 font-bold">{v.nama}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 ">
                    <div className="w-1/12">
                      <Image
                        src={'/assets/icon/icon-lokasi.png'}
                        alt="logo"
                        width={25}
                        height={25}
                      />
                    </div>
                    <span className="w-11/12 text-black">{v.lokasi}</span>
                  </div>

                  <div className="flex items-center gap-4 ">
                    <div className="w-1/12 ">
                      <Image
                        src={'/assets/icon/icon-waktu.png'}
                        alt="logo"
                        width={25}
                        height={25}
                      />
                    </div>
                    <span className="w-11/12 text-black">{v.waktu}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-1/12">
                      <Image
                        src={'/assets/icon/icon-telepon.png'}
                        alt="logo"
                        width={25}
                        height={25}
                      />
                    </div>
                    <span className="w-11/12 text-black">{v.telepon}</span>
                  </div>
                </div>
                <div className="absolute bottom-5 right-10">
                  <button className="y-1 px-3 lg:py-2 lg:px-8 bg-gradient-to-l from-light-blue to-dark-blue text-center rounded-[5px] font-made-tommy-regular text-[12px] lg:text-base">
                    <Link href={v.link} target="_blank">
                      Rute
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

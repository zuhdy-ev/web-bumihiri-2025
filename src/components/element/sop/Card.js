'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import propTypes from 'prop-types'

export default function Card({ iconSop, judulSop, linkBacaSop, linkAjukanSop }) {
  return (
    <main className="w-[250px] h-[150px] md:w-[350px] lg:w-[420px] lg:h-[213px] p-5 lg:p-8 flex gap-2 lg:gap-5 border-2 border-white rounded-[10px]">
      <div className="w-[35%] flex items-center justify-center">
        <Image src={iconSop} alt="icon" width={100} height={100} className="w-full" />
      </div>
      <div className="w-[65%] flex flex-col items-start justify-center gap-3">
        <p className="text-md md:text-lg lg:text-2xl font-made-tommy-bold">{judulSop}</p>
        <div className="w-full flex gap-3">
          {/* <Link
            href={linkBacaSop}
            target="_blank"
            className="w-full py-1 px-3 text-center rounded-[5px] border border-white"
          >
            <p className="text-[10px] md:text-[12px] lg:text-[15px] w-full font-made-tommy-regular">
              Baca SOP
            </p>
          </Link> */}
          {/* <Link
            href={linkAjukanSop} target='_blank'
            className="w-full py-1 px-3 bg-gradient-to-l from-light-blue to-dark-blue text-center
            rounded-[5px] flex items-center justify-center"
          >
            <p className="text-[10px] md:text-[12px] lg:text-[15px] font-made-tommy-regular">
              Ajukan
            </p>
          </Link> */}
          <Link
            href={linkBacaSop || '#'} // Jika link kosong, arahkan ke '#'
            target={linkBacaSop ? '_blank' : '_self'} // Hanya buka di tab baru jika ada link
            className={`w-full py-1 px-3 text-center rounded-[5px] border ${
              linkBacaSop ? 'border-white' : 'border-gray-400 text-gray-400 cursor-not-allowed'
            }`}
            onClick={(e) => {
              if (!linkBacaSop) e.preventDefault() // Cegah klik jika link kosong
            }}
          >
            <p className="text-[10px] md:text-[12px] lg:text-[15px] w-full font-made-tommy-regular">
              Baca SOP
            </p>
          </Link>
          <Link
            href={linkAjukanSop || '#'} // Jika link kosong, set href ke '#' atau tetap kosong
            target={linkAjukanSop ? '_blank' : '_self'} // target=_self agar tidak membuka tab baru jika kosong
            className={`w-full py-1 px-3 ${
              linkAjukanSop
                ? 'bg-gradient-to-l from-light-blue to-dark-blue'
                : 'bg-gray-400 cursor-not-allowed'
            } text-center rounded-[5px] flex items-center justify-center`}
            onClick={(e) => {
              if (!linkAjukanSop) e.preventDefault() // Cegah klik jika link kosong
            }}
          >
            <p className="text-[10px] md:text-[12px] lg:text-[15px] font-made-tommy-regular">
              Ajukan
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}

Card.propTypes = {
  iconSop: propTypes.string.isRequired,
  judulSop: propTypes.string.isRequired,
  linkBacaSop: propTypes.string,
  linkAjukanSop: propTypes.string,
}

Card.defaultProps = {
  linkBacaSop: '#',
  linkAjukanSop: '#',
}

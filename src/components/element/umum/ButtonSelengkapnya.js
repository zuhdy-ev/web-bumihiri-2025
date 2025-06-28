import React from 'react'
import Link from 'next/link'

const ButtonSelengkapnya = ({ link }) => {
  return (
    <main className="hover:scale-105 hover:duration-300">
      <Link className="" href={link}>
        <p className="py-1 px-3 lg:py-2 lg:px-8 w-full h-full lg:w-[250px] bg-gradient-to-l from-light-blue to-dark-blue text-center rounded-[5px] font-made-tommy-regular text-[12px] lg:text-base">
          Selengkapnya
        </p>
      </Link>
    </main>
  )
}

export default ButtonSelengkapnya

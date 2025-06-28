import React from 'react'
import Link from 'next/link'

const ButtonProfil = () => {
  return (
    <main className="w-full h-full py-1 lg:py-2 px-5 lg:px-16 lg:mt-2 bg-gradient-to-l from-light-blue to-dark-blue text-center rounded-[5px] flex items-center justify-center cursor-pointer hover:scale-105 hover:duration-300 ease-in-out">
      <Link
        href={'/profil'}
      >
        <p className="text-sm md:text-[13px] lg:text-lg font-made-tommy-regular">Profil Kami</p>
      </Link>
    </main>
  )
}

export default ButtonProfil

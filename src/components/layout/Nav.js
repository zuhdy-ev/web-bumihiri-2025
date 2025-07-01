'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Nav({ active }) {
  const [isClick, setIsClick] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleNavbar = () => {
    setIsClick(!isClick)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false) // Scroll ke bawah
      } else {
        setShowNav(true) // Scroll ke atas
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed w-full top-0 px-5 py-1 md:px-20 md:py-1 flex items-center justify-center bg-primary-green z-50 transition-transform duration-500 ease-in-out ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative max-w-[1920px] w-full flex items-center justify-between">
        <div className="w-1/2 md:w-80 py-2">
          <Link href={'/'}>
            <Image
              src={'/assets/Lambang Bumi Hiri 25.png'}
              alt="logo"
              width={0}
              height={0}
              className="w-[60px] md:w-[80px]"
            />
          </Link>
        </div>
        <div>
          {/* Nav Link */}
          <div className="hidden lg:block">
            <div className="font-made-tommy-regular flex items-center gap-5 text-[12px] lg:text-[15px]">
              {[
                { href: '/', label: 'Beranda', key: 'beranda' },
                { href: '/tentang-hiri', label: 'Tentang Hiri', key: 'hiri' },
                { href: '/artikel', label: 'Artikel', key: 'artikel' },
                { href: '/galeri', label: 'Galeri', key: 'galeri' },
                { href: '/profil', label: 'Bumi Hiri 2025', key: 'profil' },
              ].map(({ href, label, key }) => (
                <Link
                  key={key}
                  href={href}
                  className={`${
                    active === key
                      ? 'text-white text-center border-2 border-white rounded-full'
                      : 'text-white text-center'
                  } py-2 px-3`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {/* Responsive Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              className="inline-flex w-auto items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              <Image
                priority={false}
                width={24}
                height={24}
                src="/assets/nav/hamburger-menu.svg"
                alt="menu"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      <div
        className={`lg:hidden absolute w-full top-[60px] md:top-[73px] transition-max-height bg-primary-green bg-opacity-90 rounded-b-lg duration-1000 ease-in-out overflow-hidden ${
          isClick ? 'max-h-screen' : 'max-h-0 '
        }`}
      >
        <div className="flex flex-col p-5 gap-5 font-made-tommy-regular text-[12px]">
          {[
            { href: '/', label: 'Beranda', key: 'beranda' },
            { href: '/profil', label: 'Profil', key: 'profil' },
            { href: '/artikel', label: 'Artikel', key: 'artikel' },
            { href: '/sop', label: 'SOP', key: 'sop' },
          ].map(({ href, label, key }) => (
            <Link
              key={key}
              href={href}
              className={`${
                active === key ? 'text-white border-2 border-white rounded-full' : 'text-white'
              } block text-center rounded-lg p-2 transition duration-150 ease-in-out`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

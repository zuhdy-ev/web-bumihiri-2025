import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BidangCard({ src, href, bidang }) {
  return (
    <div className="relative w-[280px] h-[200px] md:w-[350px] md:h-[220px] rounded-[10px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-light-blue to-dark-blue p-[2px] rounded-[10px]">
        <div className="w-full h-full rounded-[10px] overflow-hidden">
          <Image
            src={src}
            alt={bidang}
            width={0}
            height={0}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full flex flex-col items-center p-2">
            <p className="text-[20px] md:text-[25px] mb-3 font-bold text-center">{bidang}</p>
            {/* <Link href={href} passHref>
              <p className="py-2 px-4 w-[200px] bg-gradient-to-l from-light-blue to-dark-blue text-center rounded-[10px]">
                Selengkapnya
              </p>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

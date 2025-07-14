'use client'
import React from 'react'
import '../../../app/globals.css'

const Narahubung = () => {
  return (
    <section className="w-full h-full bg-white flex items-center justify-center py-14 px-5">
      <div className="w-full max-w-[1920px]">
        <h2 className="text-center text-black text-xl md:text-2xl font-bold mb-8">NARAHUBUNG</h2>

        {/* Card Container */}
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-5">
          {[
            {
              title: 'SPONSORSHIP',
              name: 'Sabrina Arum Cahya',
              phone: '085236934419',
              email: 'sabrinaarumcahya@gmail.com',
            },
            {
              title: 'EXPO HIRI',
              name: 'Hafidh Rasyid Prabowo',
              phone: '088229514821',
              email: 'hafidhrasyidp@gmail.com',
            },
            {
              title: 'FUN RUN',
              name: 'Muhammad Harits Hammam',
              phone: '089653329001',
              email: '',
            },
          ].map(({ title, name, phone, email }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md px-6 py-5 w-full max-w-[300px] min-h-[180px] text-center"
            >
              <div className="text-[#DB8A05] font-bold italic mb-3">{title}</div>
              <div className="text-[#00261C] font-semibold text-[16px]">{name}</div>
              <div className="text-[#00261C] text-[14px]">{phone}</div>
              {email && <div className="text-[#00261C] text-[14px]">{email}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Narahubung

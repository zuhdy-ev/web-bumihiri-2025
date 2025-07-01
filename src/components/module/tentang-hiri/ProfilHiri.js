import React from 'react'

export default function ProfilHiri() {
  return (
    <section className="w-full h-full bg-primary-blue flex flex-col items-center justify-center p-5 md:p-7 lg:p-10 gap-2 md:gap-5">
      <div className="w-full border-[5px] border-white h-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31914.633061883687!2d127.29682138790129!3d0.8972288527228116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cac97425bb767%3A0x52b41fc10a483509!2sKec.%20Pulau%20Hiri%2C%20Kota%20Ternate%2C%20Maluku%20Utara!5e0!3m2!1sid!2sid!4v1751293805847!5m2!1sid!2sid"
          width="600"
          height="450"
          // --- FIX APPLIED HERE ---
          style={{ border: '0' }}
          // --- FIX APPLIED HERE ---
          allowFullScreen="" // Changed to camelCase for React
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // Changed to camelCase for React
          className="w-full"
        ></iframe>
      </div>
      <div className="w-full  h-full flex gap-5">
        <div className="w-1/2 text-[10px] rounded md:text-[12px] lg:text-[15px] font-bold text-center bg-white text-primary-blue py-2 flex items-center justify-center px-2">
          Luas 6.916 kilometer persegi
        </div>
        <div className="w-1/2 text-[10px] rounded md:text-[12px] lg:text-[15px] font-bold text-center bg-white text-primary-blue py-2 flex items-center justify-center px-2">
          0°53&apos;49.4&quot;, 127°19&apos;01.7&quot;
        </div>
      </div>
    </section>
  )
}

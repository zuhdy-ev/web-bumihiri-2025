import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bottom-0 py-5 px-5 flex flex-col items-center justify-center bg-primary-color z-50">
      {/* Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-blue-800 via-purple-600 to-red-600 mb-5"></div>
      <div className="relative my-10 max-w-[1920px] w-full flex flex-col md:flex-row items-start justify-center">
        {/* Logo */}
        <div className="mb-5">
          <Image
            src={'/assets/footer/logo_bemkm_ugm_no_text.png'}
            alt="logo bemkm ugm 2024"
            width={216 / 2}
            height={180}
          />
        </div>
        {/* Note */}
        <div className="flex flex-col gap-3">
          <div className="text-3xl font-made-tommy-bold px-2">BEM KM UGM</div>
          <p className="font-made-tommy-regular px-2 text-sm md:text-xl max-w-[600px]">
            Blok E5, Jl. Yacaranda, Blimbing Sari, Caturtunggal, Kec. Depok, Kabupaten Sleman,
            Daerah Istimewa Yogyakarta 55281
          </p>
          <div className="flex">
            <Link href={`mailto:bemkm@ugm.ac.id`} target="blank">
              <Image src={'/assets/footer/Button Email.png'} alt="email" width={62} height={62} />
            </Link>
            <Link href={`https://www.instagram.com/bemkm_ugm/`} target="blank">
              <Image src={'/assets/footer/Button IG.png'} alt="instagram" width={62} height={62} />
            </Link>
            {/* <Link href={`/`} target="blank">
              <Image src={'/assets/footer/Button Line.png'} alt="line" width={62} height={62} />
            </Link> */}
            <Link href={`https://www.linkedin.com/company/bemugm-2024/`} target="blank">
              <Image
                src={'/assets/footer/Button Linkedin.png'}
                alt="linkedin"
                width={62}
                height={62}
              />
            </Link>
            <Link href={`https://wa.me/6289678784224`} target="blank">
              <Image src={'/assets/footer/Button WA.png'} alt="wa" width={62} height={62} />
            </Link>
            <Link href={`https://x.com/bemkm_ugm`} target="blank">
              <Image src={'/assets/footer/Button X.png'} alt="x" width={62} height={62} />
            </Link>
            <Link href={`https://www.youtube.com/channel/UCWbDgm6gOURtpcx_4GqdjQA`} target="blank">
              <Image src={'/assets/footer/Button YT.png'} alt="youtube" width={62} height={62} />
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-center text-sm md:text-base">BEM KM UGM 2024. All Rights Reserved.</p>
      </div>
      <script
        async=""
        src="https://embed.tawk.to/66965f5dbecc2fed6925ddcf/1i2tm91jv"
        charset="UTF-8"
        crosssorigin="*"
      ></script>
    </footer>
  )
}

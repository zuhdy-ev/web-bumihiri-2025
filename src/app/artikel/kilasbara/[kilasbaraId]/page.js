import DetailKilasbara from './DetailKilasbara'
import dataKilasbara from '@/data/artikelKilasbara.json'

export const convertToSlug = (judul) => {
  if (!judul) return ''
  return judul
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export async function generateStaticParams() {
  const kilasbaraIds = dataKilasbara.map((kilasbara) => convertToSlug(kilasbara.judul))
  return kilasbaraIds.map((kilasbaraId) => ({ kilasbaraId }))
  // const response = await fetch('https://www.be2.bemkmugm.com/api/kilasbaras', {
  //   headers: {
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //   },
  // })
  // const result = await response.json()
  // const data = result.data

  // return data.map((item) => ({
  //   kilasbaraId: convertToSlug(item.judul),
  // }))
}

export default function Page({ params }) {
  return <DetailKilasbara params={params} />
}

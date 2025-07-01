import DetailArtikel from './DetailArtikel'
import dataKajian from '@/data/artikelKajian.json'

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
  const artikelIds = dataKajian.map((artikel) => convertToSlug(artikel.judul))
  return artikelIds.map((artikelId) => ({ artikelId }))
  // const response = await fetch('https://www.be2.bemkmugm.com/api/artikels', {
  //   headers: {
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //   },
  // })
  // const result = await response.json()
  // const data = result.data

  // return data.map((item) => ({
  //   kajianId: convertToSlug(item.judul),
  // }))
}

export default function Page({ params }) {
  return <DetailArtikel params={params} />
}

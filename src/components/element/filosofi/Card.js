import React from 'react'

export default function FilosofiCard({ item, bgColor }) {
  return (
    <div
      className="h-64 lg:h-72 flex flex-col items-center justify-center my-3 p-2 rounded-lg border-2 border-white"
      style={{ background: bgColor }}
    >
      <h1 className="font-made-tommy-bold text-2xl">{item.title}</h1>
      <p className="text-center">{item.desc}</p>
    </div>
  )
}

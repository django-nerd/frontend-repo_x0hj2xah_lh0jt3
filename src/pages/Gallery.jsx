import { useEffect, useState } from 'react'

export default function Gallery() {
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/media`)
      setItems(await res.json())
    })()
  }, [])

  return (
    <main className="bg-black min-h-screen text-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Gallery</h1>
        <p className="mt-2 text-white/70">Moments from past events and behind-the-scenes vibes.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((m, i) => (
            <figure key={i} className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10" aria-hidden />
              <img src={m.thumb || m.url} alt={m.alt || 'Gallery item'} className="w-full h-full object-cover mix-blend-screen opacity-80" />
            </figure>
          ))}
        </div>
      </div>
    </main>
  )
}

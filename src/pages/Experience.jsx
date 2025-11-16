import { useEffect, useState } from 'react'

export default function Experience() {
  const [zones, setZones] = useState([])
  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/experiences`)
      setZones(await res.json())
    })()
  }, [])

  return (
    <main className="bg-black min-h-screen text-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Immersive Zones</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Live sets, interactive installations, chill spaces, and VIP lounges designed to move your senses.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map(z => (
            <article key={z.id} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" aria-hidden />
              <div className="p-5">
                <h3 className="text-xl font-bold">{z.title}</h3>
                <p className="text-pink-300 text-sm font-semibold">{z.kind}</p>
                {z.description && <p className="mt-2 text-white/70 text-sm">{z.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

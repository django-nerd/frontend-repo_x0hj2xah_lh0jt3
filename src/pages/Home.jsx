import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Countdown from '../components/Countdown'
import Marquee from '../components/Marquee'

export default function Home() {
  const [eventInfo, setEventInfo] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/eventinfo`)
        if (res.ok) {
          const data = await res.json()
          if (data && Object.keys(data).length > 0) setEventInfo(data)
        }
      } catch (_) {}
    })()
  }, [])

  const targetDate = eventInfo?.date_iso || '2025-08-23T18:00:00Z'

  return (
    <main className="bg-black text-white">
      <Hero />
      <Marquee text={(eventInfo?.name || 'BLAZINVIBE') + ' • ' + (eventInfo?.venue || 'NEON DOCKS') + ' • '} />
      <section className="py-16 bg-gradient-to-b from-black/80 to-[#0a0014]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Countdown to Blast Off</h2>
          <p className="text-white/70 mt-2">{eventInfo?.name || 'BlazinVibe'} lands soon. Lock your tickets now.</p>
          <div className="mt-8 flex justify-center"><Countdown target={targetDate} /></div>
          {eventInfo?.venue && (
            <p className="mt-6 text-white/60 text-sm">{eventInfo.venue} • {eventInfo.city}, {eventInfo.country}</p>
          )}
        </div>
      </section>
      <Highlights />
    </main>
  )
}

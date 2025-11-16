import { useEffect, useState } from 'react'

export default function Admin() {
  const [eventInfo, setEventInfo] = useState({
    name: 'BlazinVibe',
    tagline: 'Feel the Beat. Live the Vibe.',
    date_iso: '2025-08-23T18:00:00Z',
    venue: 'Neon Docks',
    address: 'Pier 7, Riverfront',
    city: 'Riverfront City',
    country: 'USA',
    ticket_url: 'https://tickets.blazinvibe.io',
    socials: { instagram: 'https://instagram.com/blazinvibe', twitter: 'https://twitter.com/blazinvibe' }
  })
  const [status, setStatus] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/eventinfo`)
        if (res.ok) {
          const data = await res.json()
          if (data && Object.keys(data).length > 0) setEventInfo(prev => ({ ...prev, ...data }))
        }
      } catch (e) {}
    })()
  }, [])

  const saveEventInfo = async (e) => {
    e.preventDefault()
    setStatus('Saving...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/eventinfo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventInfo)
      })
      const data = await res.json()
      if (data.ok) setStatus('✅ Event info saved')
      else setStatus('⚠️ Save may have failed')
    } catch (e) {
      setStatus('❌ Error saving')
    }
  }

  const seed = async () => {
    setStatus('Seeding sample content...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/seed`, { method: 'POST' })
      const data = await res.json()
      if (data.ok) setStatus(`✅ Seeded: ${JSON.stringify(data.created)}`)
      else setStatus('⚠️ Seeding may have failed')
    } catch (e) {
      setStatus('❌ Error seeding')
    }
  }

  const setField = (k, v) => setEventInfo(prev => ({ ...prev, [k]: v }))

  return (
    <main className="bg-black min-h-screen text-white pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Admin</h1>
        <p className="text-white/70 mt-2">Seed demo content and set real event details.</p>

        <div className="mt-6 p-4 rounded-2xl border border-white/10 bg-white/5">
          <button onClick={seed} className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500">Seed Database</button>
          {status && <p className="mt-3 text-sm text-white/80 break-words">{status}</p>}
        </div>

        <form onSubmit={saveEventInfo} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Name" value={eventInfo.name} onChange={e=>setField('name', e.target.value)} required />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Tagline" value={eventInfo.tagline || ''} onChange={e=>setField('tagline', e.target.value)} />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Date ISO" value={eventInfo.date_iso} onChange={e=>setField('date_iso', e.target.value)} required />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Venue" value={eventInfo.venue} onChange={e=>setField('venue', e.target.value)} required />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Address" value={eventInfo.address || ''} onChange={e=>setField('address', e.target.value)} />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="City" value={eventInfo.city || ''} onChange={e=>setField('city', e.target.value)} />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Country" value={eventInfo.country || ''} onChange={e=>setField('country', e.target.value)} />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 sm:col-span-2" placeholder="Ticketing URL" value={eventInfo.ticket_url || ''} onChange={e=>setField('ticket_url', e.target.value)} />
          <button className="sm:col-span-2 mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold">Save Event Info</button>
        </form>
      </div>
    </main>
  )
}

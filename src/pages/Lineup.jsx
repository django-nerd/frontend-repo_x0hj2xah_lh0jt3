import { useEffect, useState } from 'react'

export default function Lineup() {
  const [artists, setArtists] = useState([])
  const [role, setRole] = useState('All')

  useEffect(() => {
    const load = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL || ''}/api/artists${role !== 'All' ? `?role=${encodeURIComponent(role)}` : ''}`
      const res = await fetch(url)
      const data = await res.json()
      setArtists(data)
    }
    load()
  }, [role])

  const roles = ['All','DJ','Live Band','Visual Artist','Performer']

  return (
    <main className="bg-black min-h-screen text-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Line-Up</h1>
          <div className="flex gap-2">
            {roles.map(r => (
              <button key={r} onClick={() => setRole(r)} className={`px-4 py-2 rounded-full border ${role===r? 'bg-white/15 border-white/30' : 'border-white/10 hover:bg-white/5'} transition`}>{r}</button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map(a => (
            <article key={a.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="aspect-[4/3] bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20" aria-hidden />
              <div className="p-5">
                <h3 className="text-xl font-bold">{a.name}</h3>
                <p className="text-pink-300 text-sm font-semibold">{a.role}</p>
                {a.bio && <p className="mt-2 text-white/70 text-sm line-clamp-3">{a.bio}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

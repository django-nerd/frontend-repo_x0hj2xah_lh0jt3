import { useState } from 'react'

export default function Creators() {
  const [form, setForm] = useState({ name: '', email: '', discipline: 'DJ', portfolio: '', bio: '', instagram: '', tiktok: '', twitter: '' })
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      setMessage(data.message || 'Thanks for applying!')
      setForm({ name: '', email: '', discipline: 'DJ', portfolio: '', bio: '', instagram: '', tiktok: '', twitter: '' })
    } catch (err) {
      setMessage('Submission failed. Please try again later.')
    }
  }

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  return (
    <main className="bg-black min-h-screen text-white pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Become a Creator</h1>
        <p className="mt-2 text-white/70">Musicians, visual artists, performers — apply to join the BlazinVibe experience.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Full name" value={form.name} onChange={e=>set('name', e.target.value)} required />
          <input type="email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Email" value={form.email} onChange={e=>set('email', e.target.value)} required />
          <select className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" value={form.discipline} onChange={e=>set('discipline', e.target.value)}>
            {['DJ','Live Band','Visual Artist','Performer','Other'].map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Portfolio link" value={form.portfolio} onChange={e=>set('portfolio', e.target.value)} />
          <textarea className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10" rows="4" placeholder="Short bio" value={form.bio} onChange={e=>set('bio', e.target.value)} />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Instagram" value={form.instagram} onChange={e=>set('instagram', e.target.value)} />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="TikTok" value={form.tiktok} onChange={e=>set('tiktok', e.target.value)} />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10" placeholder="Twitter/X" value={form.twitter} onChange={e=>set('twitter', e.target.value)} />
          <button className="sm:col-span-2 mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold">Apply Now</button>
        </form>
        {message && <p className="mt-4 text-pink-300 font-medium">{message}</p>}
      </div>
    </main>
  )
}

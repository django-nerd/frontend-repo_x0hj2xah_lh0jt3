import { Instagram, Twitter, Music2, SendHorizontal } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      alert(data.message || 'Thanks for joining!')
      setEmail('')
    } catch (err) {
      alert('Subscription failed. Please try again later.')
    }
  }

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 text-white font-extrabold text-xl">
            <Music2 className="text-pink-400" /> BlazinVibe
          </div>
          <p className="mt-3 text-white/70 max-w-md text-sm">Join the movement. Get early access to line-up drops, ticket alerts, and insider perks.</p>
        </div>
        <form onSubmit={subscribe} className="flex gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold">
            <SendHorizontal size={18} /> Subscribe
          </button>
        </form>
        <div className="md:col-span-2 flex items-center justify-between text-white/60 text-sm pt-6 border-t border-white/10">
          <p>© {new Date().getFullYear()} BlazinVibe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

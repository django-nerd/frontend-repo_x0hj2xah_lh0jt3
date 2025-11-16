import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Ticket, Sparkles } from 'lucide-react'
import { useState } from 'react'

const links = [
  { to: '/lineup', label: 'Line-Up' },
  { to: '/experience', label: 'Experience' },
  { to: '/tickets', label: 'Tickets' },
  { to: '/creators', label: 'Creators' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 backdrop-blur-xl bg-black/30 rounded-b-xl border border-white/10 mt-2 px-3">
          <Link to="/" className="flex items-center gap-2 text-white font-extrabold tracking-tight text-lg">
            <Sparkles className="text-pink-400" size={20} />
            <span>BlazinVibe</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({isActive}) => `text-sm font-medium transition hover:text-pink-300 ${isActive ? 'text-pink-300' : 'text-white/90'}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/tickets" className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg shadow-fuchsia-500/30 hover:scale-105 transition">
              <Ticket size={18} /> Buy Tickets
            </Link>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({isActive}) => `text-base ${isActive ? 'text-pink-300' : 'text-white'}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/tickets" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white px-4 py-2 rounded-full">
              <Ticket size={18} /> Buy Tickets
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

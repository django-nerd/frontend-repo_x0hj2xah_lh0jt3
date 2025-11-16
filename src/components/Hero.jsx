import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-fuchsia-300/90">Immersive Music + Art Experience</p>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-cyan-300 to-indigo-300 drop-shadow-xl">
            Feel the Beat. Live the Vibe.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/90 text-sm sm:text-base">
            Live performances, DJ sets, visual arts, and immersive worlds fuse into one unforgettable night.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link to="/tickets" className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:scale-105 transition">
              Buy Tickets
            </Link>
            <Link to="/creators" className="px-6 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition">
              Become a Creator
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

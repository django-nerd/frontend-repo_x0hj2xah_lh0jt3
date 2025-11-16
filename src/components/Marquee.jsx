import { useRef, useEffect } from 'react'

export default function Marquee({ text = 'FEEL THE BEAT • LIVE THE VIBE • ', speed = 40 }) {
  const trackRef = useRef(null)
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const anim = el.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-50%)' },
    ], {
      duration: 1000 * (100 / (speed/40)),
      iterations: Infinity,
      easing: 'linear'
    })
    return () => anim.cancel()
  }, [speed])

  return (
    <div className="relative overflow-hidden py-3 bg-gradient-to-r from-fuchsia-600/20 via-cyan-600/20 to-blue-600/20 border-y border-white/10">
      <div className="whitespace-nowrap flex" ref={trackRef} aria-hidden>
        <span className="px-4 text-white/80 tracking-[0.3em] uppercase text-xs sm:text-sm">{text.repeat(20)}</span>
      </div>
    </div>
  )
}

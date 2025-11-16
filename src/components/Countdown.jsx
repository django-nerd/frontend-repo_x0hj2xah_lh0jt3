import { useEffect, useState } from 'react'

export default function Countdown({ target }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const tick = () => {
      const t = new Date(target).getTime() - Date.now()
      const d = Math.max(0, Math.floor(t / (1000 * 60 * 60 * 24)))
      const h = Math.max(0, Math.floor((t / (1000 * 60 * 60)) % 24))
      const m = Math.max(0, Math.floor((t / (1000 * 60)) % 60))
      const s = Math.max(0, Math.floor((t / 1000) % 60))
      setTime({ d, h, m, s })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  const item = (v, l) => (
    <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10">
      <span className="text-3xl font-extrabold text-white tabular-nums">{v}</span>
      <span className="text-xs uppercase tracking-wide text-white/60">{l}</span>
    </div>
  )

  return (
    <div className="flex items-center justify-center gap-3">
      {item(time.d, 'Days')}
      {item(time.h, 'Hours')}
      {item(time.m, 'Minutes')}
      {item(time.s, 'Seconds')}
    </div>
  )
}

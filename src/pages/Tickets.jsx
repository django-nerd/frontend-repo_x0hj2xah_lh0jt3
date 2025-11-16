import { useEffect, useState } from 'react'

export default function Tickets() {
  const [tiers, setTiers] = useState([])
  const [faqs, setFaqs] = useState([])
  const [eventInfo, setEventInfo] = useState(null)

  useEffect(() => {
    (async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const [t1, t2, ev] = await Promise.all([
        fetch(`${base}/api/tickets`).then(r=>r.json()).catch(()=>[]),
        fetch(`${base}/api/faqs`).then(r=>r.json()).catch(()=>[]),
        fetch(`${base}/api/eventinfo`).then(r=>r.json()).catch(()=>null)
      ])
      setTiers(Array.isArray(t1) ? t1 : [])
      setFaqs(Array.isArray(t2) ? t2 : [])
      if (ev && Object.keys(ev).length > 0) setEventInfo(ev)
    })()
  }, [])

  const buyHref = (eventInfo && eventInfo.ticket_url) ? eventInfo.ticket_url : '#'

  return (
    <main className="bg-black min-h-screen text-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Tickets</h1>
        <p className="mt-2 text-white/70">Choose your vibe. All tiers include entry to stages and installations.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="text-white/70 text-sm">{t.currency} {Number(t.price).toFixed(2)}</p>
              <ul className="mt-3 text-sm text-white/80 list-disc list-inside space-y-1">
                {t.includes?.map((i, idx) => <li key={idx}>{i}</li>)}
              </ul>
              <a target="_blank" rel="noreferrer" href={buyHref} aria-label={`Buy ${t.name} ticket`}
                 className="mt-4 inline-flex justify-center w-full px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                 {...(!eventInfo?.ticket_url ? { 'aria-disabled': true } : {})}
              >
                {eventInfo?.ticket_url ? 'Buy Now' : 'Tickets Coming Soon'}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="mt-6 divide-y divide-white/10">
            {faqs.map((f, i) => (
              <details key={i} className="py-4">
                <summary className="cursor-pointer text-white font-semibold">{f.question}</summary>
                <p className="mt-2 text-white/70 text-sm">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

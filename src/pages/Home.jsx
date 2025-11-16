import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Countdown from '../components/Countdown'

export default function Home() {
  const targetDate = '2025-08-23T18:00:00Z'
  return (
    <main className="bg-black text-white">
      <Hero />
      <section className="py-16 bg-gradient-to-b from-black/80 to-[#0a0014]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Countdown to Blast Off</h2>
          <p className="text-white/70 mt-2">BlazinVibe lands soon. Lock your tickets now.</p>
          <div className="mt-8 flex justify-center"><Countdown target={targetDate} /></div>
        </div>
      </section>
      <Highlights />
    </main>
  )
}

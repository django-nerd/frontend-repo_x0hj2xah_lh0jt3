export default function About() {
  return (
    <main className="bg-black min-h-screen text-white pt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold">About BlazinVibe</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-white/80">BlazinVibe is a celebration of community, creativity, and connection. We bring together boundary-pushing musicians, visual artists, and performers to build immersive worlds of sound and light.</p>
            <p className="text-white/60 mt-3">Our mission is to create inclusive spaces where everyone can feel the beat and live the vibe — from main stage explosions to hidden chill zones and interactive art.</p>
            <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-bold text-white">Event Info</h3>
              <ul className="mt-3 text-sm text-white/80 space-y-1">
                <li>Date: 23 Aug 2025</li>
                <li>Location: Neon Docks, Riverfront City</li>
                <li>Doors: 6:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-white/10" aria-label="Venue map placeholder" role="img" />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-white/70 mt-2">Email: hello@blazinvibe.io</p>
          <p className="text-white/70">Social: @blazinvibe</p>
        </div>
      </div>
    </main>
  )
}

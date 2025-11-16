import { Star, Sparkles, Music, GalleryHorizontalEnd } from 'lucide-react'

const features = [
  {
    icon: Music,
    title: 'Headliners',
    desc: 'World-class DJs and live acts bringing deep bass, neon vibes, and late-night energy.',
  },
  {
    icon: Sparkles,
    title: 'Immersive Art',
    desc: 'Interactive light trails, projection mapping, and sensory installations.',
  },
  {
    icon: GalleryHorizontalEnd,
    title: 'Creator Playground',
    desc: 'A platform for emerging artists to showcase and collaborate.',
  },
]

export default function Highlights() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-[#0a0014]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,153,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,188,255,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">What’s Blazin’</h2>
        <p className="mt-2 text-white/70 max-w-2xl">A festival of sound and light where community, creativity, and connection collide.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/30 to-cyan-500/30 flex items-center justify-center border border-white/20">
                <Icon className="text-pink-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

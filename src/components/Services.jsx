import { Camera, Video, Aperture, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Camera,
    title: 'Editorial & Fashion',
    desc: 'High-concept editorials with cinematic lighting, color‑graded to perfection.'
  },
  {
    icon: Video,
    title: 'Motion & Reels',
    desc: 'Short-form video engineered for virality. Smooth motion, bold transitions.'
  },
  {
    icon: Aperture,
    title: 'Product Imagery',
    desc: 'Studio-grade product sets with macro precision and 3D integrations.'
  },
  {
    icon: Sparkles,
    title: '3D Composites',
    desc: 'Unreal scenes blending physical captures with procedural 3D assets.'
  }
]

export default function Services(){
  return (
    <section id="services" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Services engineered for impact
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({icon:Icon,title,desc},i)=> (
            <motion.div
              key={title}
              initial={{opacity:0,y:16}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay:i*0.05}}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-cyan-500">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

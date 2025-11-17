import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          initial={{opacity:0,y:12}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-3xl font-bold sm:text-4xl"
        >
          Ready to create something unreal?
        </motion.h3>
        <motion.p
          initial={{opacity:0,y:12}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6, delay:0.05}}
          className="mx-auto mt-4 max-w-2xl text-white/70"
        >
          Tell us about your vision. We’ll map the creative, the lighting, and the
          tech stack to bring it to life.
        </motion.p>
        <motion.form
          initial={{opacity:0,y:12}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6, delay:0.1}}
          onSubmit={(e)=> e.preventDefault()}
          className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2"
        >
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-fuchsia-400/60" placeholder="Your name" />
          <input type="email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-fuchsia-400/60" placeholder="Email address" />
          <textarea className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-fuchsia-400/60" placeholder="Tell us about your project" rows={4} />
          <button className="sm:col-span-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110">
            Send inquiry
          </button>
        </motion.form>
      </div>
    </section>
  )
}

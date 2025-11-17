import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-extrabold leading-[1.05] text-transparent sm:text-6xl"
          >
            Futuristic photography that feels unreal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-white/80"
          >
            We blend art direction with cutting‑edge 3D to craft visuals that stop
            time, scrolls, and conversations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              className="pointer-events-auto rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Explore portfolio
            </a>
            <a
              href="#contact"
              className="pointer-events-auto rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
            >
              Book a session
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

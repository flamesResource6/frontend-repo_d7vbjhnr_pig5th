import { motion } from 'framer-motion'

const shots = [
  { id: 1, title: 'Neon Portrait', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Studio Product', url: 'https://images.unsplash.com/photo-1526403229032-58273777e210?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Concept Fashion', url: 'https://images.unsplash.com/photo-1503342394121-68f282b33f69?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Macro Detail', url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Chromatic', url: 'https://images.unsplash.com/photo-1504616262549-9b5f5af6faff?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Motion Blur', url: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1600&auto=format&fit=crop' }
]

export default function Portfolio(){
  return (
    <section id="portfolio" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Selected work
        </motion.h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s,i)=> (
            <motion.figure
              key={s.id}
              initial={{opacity:0, y:16}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay:i*0.04}}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={s.url} alt={s.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="flex items-center justify-between p-4 text-white/80">
                <span>{s.title}</span>
                <span className="text-xs">© Neon Lens</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

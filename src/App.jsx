import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
      <footer className="border-t border-white/10 bg-black/90 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Neon Lens Studio — Unreal Photography</p>
      </footer>
    </div>
  )
}

export default App

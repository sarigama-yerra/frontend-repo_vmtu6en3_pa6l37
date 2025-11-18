import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { HomepageSections } from './components/ContentBlocks'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-20%,rgba(239,68,68,0.15),transparent_60%)]" />
      <Navbar />
      <Hero />
      <HomepageSections />
      <footer className="border-t border-white/10 mt-10 bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Prompt Air Compressor • Centurion, Gauteng • Approved Inspection Authority</p>
          <div className="flex items-center gap-4">
            <a href="/pressure-certification" className="text-zinc-300 hover:text-white">Certification</a>
            <a href="/rentals/terms" className="text-zinc-300 hover:text-white">Rental T&Cs</a>
            <a href="/emergency-services" className="text-zinc-300 hover:text-white">Emergency</a>
            <a href="/contact" className="inline-flex items-center px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

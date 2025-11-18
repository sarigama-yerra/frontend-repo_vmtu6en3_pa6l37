import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { HomepageSections } from './components/ContentBlocks'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <HomepageSections />
      <footer className="border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-400">
          <p>Prompt Air Compressor • Centurion, Gauteng • Approved Inspection Authority</p>
        </div>
      </footer>
    </div>
  )
}

export default App

import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navItem = ({ isActive }) =>
    isActive ? 'text-white' : 'text-zinc-300 hover:text-white'

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] bg-red-600 text-white font-bold ring-1 ring-inset ring-white/10 group-hover:scale-105 transition">PA</span>
          <div className="leading-tight">
            <p className="text-sm text-zinc-200 font-semibold tracking-wide">Prompt Air</p>
            <p className="text-[11px] text-red-400">Approved Inspection Authority</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/pressure-certification" className={navItem}>Certification</NavLink>
          <NavLink to="/rentals/terms" className={navItem}>Rental T&Cs</NavLink>
          <NavLink to="/emergency-services" className={navItem}>Emergency</NavLink>
          <NavLink to="/contact" className={navItem}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+27XXXXXXXXX" className="hidden sm:inline-flex items-center px-3 py-2 rounded-md bg-red-600 text-white text-sm hover:bg-red-500 transition-colors">24/7 Hotline</a>
          <Link to="/contact" className="inline-flex items-center px-3 py-2 rounded-md bg-white/5 text-white text-sm hover:bg-white/10 transition-colors ring-1 ring-inset ring-white/10">Get Certified</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navItem = ({ isActive }) =>
    isActive ? 'text-white' : 'text-slate-300 hover:text-white'

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white font-bold">PA</span>
          <div className="leading-tight">
            <p className="text-sm text-slate-300">Prompt Air Compressor</p>
            <p className="text-xs text-blue-300">Approved Inspection Authority</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/pressure-certification" className={navItem}>Certification</NavLink>
          <NavLink to="/rentals/terms" className={navItem}>Rental T&Cs</NavLink>
          <NavLink to="/emergency-services" className={navItem}>Emergency</NavLink>
          <NavLink to="/contact" className={navItem}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+27XXXXXXXXX" className="hidden sm:inline-flex items-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-500 transition-colors">24/7 Hotline</a>
          <Link to="/contact" className="inline-flex items-center px-3 py-2 rounded-md bg-white/10 text-white text-sm hover:bg-white/20 transition-colors">Get Certified</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar

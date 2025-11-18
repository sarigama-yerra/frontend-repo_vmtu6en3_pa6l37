function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-zinc-950/60 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(239,68,68,0.28),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Certified Pressure Equipment & Air Compressor Solutions
            </h1>
            <p className="mt-4 text-lg text-zinc-300">
              Centurion • Gauteng • South Africa — Approved Inspection Authority • SANS 347 Compliant
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-red-600 text-white hover:bg-red-500 transition-colors">Get Your Equipment Certified</a>
              <a href="tel:+27XXXXXXXXX" className="inline-flex items-center px-5 py-3 rounded-md bg-white/5 text-white hover:bg-white/10 transition-colors ring-1 ring-inset ring-white/10">Emergency Hotline</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-white/[0.04] ring-1 ring-inset ring-white/10">
                <p className="text-2xl font-bold text-white">36 mo</p>
                <p className="text-xs text-zinc-400">Inspection Interval</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.04] ring-1 ring-inset ring-white/10">
                <p className="text-2xl font-bold text-white">SANS 347</p>
                <p className="text-xs text-zinc-400">Compliance</p>
              </div>
              <div className="p-4 rounded-lg bg-white/[0.04] ring-1 ring-inset ring-white/10">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-zinc-400">Emergency</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-red-500/20 to-red-400/10 border border-white/10 shadow-[0_0_60px_-15px_rgba(239,68,68,0.3)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(37,99,235,0.3),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Certified Pressure Equipment & Air Compressor Solutions for South Africa
            </h1>
            <p className="mt-4 text-lg text-blue-200">
              Approved Inspection Authority • SANS 347 Compliant • 24/7 Certified Emergency Response
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors">Get Your Equipment Certified</a>
              <a href="tel:+27XXXXXXXXX" className="inline-flex items-center px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">Emergency Hotline</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

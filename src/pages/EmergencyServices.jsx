function EmergencyServices() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">24/7 Certified Emergency Response - Client Privilege</h1>

        <p className="mb-6">We restore both function and regulatory compliance. Certified technicians respond within 4 hours across Centurion, Johannesburg, Pretoria, and the wider Gauteng region.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-3">Included for Clients</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Emergency dispatch within 4 hours</li>
          <li>On‑site diagnostic + compliance assessment</li>
          <li>Emergency documentation and temporary certification where applicable</li>
          <li>Certified equipment swap if needed</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-3">Contact</h2>
        <p>24/7 Hotline: <a className="text-blue-400" href="tel:+27XXXXXXXXX">+27 XX XXX XXXX</a></p>
        <p>Email: <a className="text-blue-400" href="mailto:emergency@promptair.co.za">emergency@promptair.co.za</a></p>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Prompt Air Compressor - Certified Inspection Authority',
          address: { '@type': 'PostalAddress', addressLocality: 'Centurion', addressRegion: 'Gauteng', addressCountry: 'ZA' },
          areaServed: 'Gauteng, North West Province (200km from Centurion)',
          telephone: '+27XXXXXXXXX'
        }) }} />
      </div>
    </main>
  )
}

export default EmergencyServices

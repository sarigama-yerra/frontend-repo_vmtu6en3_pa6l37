function Section({ title, children }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="prose prose-invert prose-blue max-w-none">
        {children}
      </div>
    </section>
  )
}

export function HomepageSections() {
  return (
    <div>
      <Section title="The Problem Your Competitors Don't Mention">
        <p>
          South African Pressure Equipment Regulations mandate that your air compressor must be certified by an approved inspection authority every 36 months. This isn’t optional—it's a legal requirement with severe penalties for non‑compliance. Most suppliers sell equipment. We make sure you stay legally compliant.
        </p>
      </Section>

      <Section title="Why Pressure Certification Matters">
        <ul>
          <li><strong>Regulatory Reality:</strong> Any pressure vessel or steam generator with design pressure ≥50 kPa must comply with PE Regulations.</li>
          <li>Required inspections include internal/external visual inspection and hydraulic testing to 1.25× design pressure by an approved inspection authority.</li>
          <li>Inspection intervals not exceeding 36 months.</li>
        </ul>
        <ul>
          <li>Legal Compliance, Safety Assurance, and Peace of Mind as standard outcomes.</li>
        </ul>
      </Section>

      <Section title="What Sets Us Apart">
        <ul>
          <li>Certified Inspection Authority — not just servicemen.</li>
          <li>Pre‑certified rentals with transparent T&Cs.</li>
          <li>Emergency response as a compliance guarantee for clients.</li>
        </ul>
      </Section>

      <Section title="Our Services">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/pressure-certification" className="block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-white font-semibold mb-2">Pressure Equipment Certification</h3>
            <p className="text-blue-200 text-sm">Internal/external inspection, hydraulic testing, and documentation.</p>
          </a>
          <a href="/rentals/terms" className="block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-white font-semibold mb-2">Rental Solutions with Certification</h3>
            <p className="text-blue-200 text-sm">Pre‑certified, compliant equipment with monitoring.</p>
          </a>
          <a href="/emergency-services" className="block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-white font-semibold mb-2">24/7 Certified Emergency Response</h3>
            <p className="text-blue-200 text-sm">Exclusive client privilege with compliance restoration.</p>
          </a>
        </div>
      </Section>
    </div>
  )
}

export default Section

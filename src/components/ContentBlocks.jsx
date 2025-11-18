function Section({ title, children }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">{title}</h2>
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </section>
  )
}

export function HomepageSections() {
  return (
    <div className="bg-black">
      <Section title="The Problem Your Competitors Don't Mention">
        <p className="text-zinc-300">
          South African Pressure Equipment Regulations mandate that your air compressor must be certified by an approved inspection authority every 36 months. This isn’t optional—it's a legal requirement with severe penalties for non‑compliance. Most suppliers sell equipment. We make sure you stay legally compliant.
        </p>
      </Section>

      <div className="py-2">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Section title="Why Pressure Certification Matters">
        <ul className="text-zinc-300 list-disc pl-5 space-y-1">
          <li><strong>Regulatory Reality:</strong> Any pressure vessel or steam generator with design pressure ≥50 kPa must comply with PE Regulations.</li>
          <li>Required inspections include internal/external visual inspection and hydraulic testing to 1.25× design pressure by an approved inspection authority.</li>
          <li>Inspection intervals not exceeding 36 months.</li>
        </ul>
        <ul className="text-zinc-300 list-disc pl-5 mt-3 space-y-1">
          <li>Legal Compliance, Safety Assurance, and Peace of Mind as standard outcomes.</li>
        </ul>
      </Section>

      <div className="py-2">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Section title="What Sets Us Apart">
        <ul className="text-zinc-300 grid sm:grid-cols-2 gap-x-8 list-disc pl-5">
          <li>Certified Inspection Authority — not just servicemen.</li>
          <li>Pre‑certified rentals with transparent T&Cs.</li>
          <li>Emergency response as a compliance guarantee for clients.</li>
          <li>Centurion/Gauteng rapid dispatch.</li>
        </ul>
      </Section>

      <div className="py-2">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Section title="Our Services">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/pressure-certification" className="block p-6 rounded-xl bg-white/[0.03] ring-1 ring-inset ring-white/10 hover:bg-white/[0.06] transition">
            <h3 className="text-white font-semibold mb-2">Pressure Equipment Certification</h3>
            <p className="text-zinc-400 text-sm">Internal/external inspection, hydraulic testing, and documentation.</p>
          </a>
          <a href="/rentals/terms" className="block p-6 rounded-xl bg-white/[0.03] ring-1 ring-inset ring-white/10 hover:bg-white/[0.06] transition">
            <h3 className="text-white font-semibold mb-2">Rental Solutions with Certification</h3>
            <p className="text-zinc-400 text-sm">Pre‑certified, compliant equipment with monitoring.</p>
          </a>
          <a href="/emergency-services" className="block p-6 rounded-xl bg-white/[0.03] ring-1 ring-inset ring-white/10 hover:bg-white/[0.06] transition">
            <h3 className="text-white font-semibold mb-2">24/7 Certified Emergency Response</h3>
            <p className="text-zinc-400 text-sm">Exclusive client privilege with compliance restoration.</p>
          </a>
        </div>
      </Section>
    </div>
  )
}

export default Section

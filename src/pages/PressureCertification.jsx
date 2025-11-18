import Section from '../components/ContentBlocks'

function PressureCertification() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Pressure Equipment Certification Is Legally Required in South Africa</h1>

        <Section title="Quick Answer (Direct)">
          <p className="text-zinc-300">
            In South Africa, the Pressure Equipment Regulations under the Occupational Health and Safety Act (Act 85 of 1993) require any pressure vessel or steam generator with design pressure ≥ 50 kPa to be certified by an Approved Inspection Authority at intervals not exceeding 36 months. Required activities typically include internal and external visual inspection and hydraulic testing to 1.25× the design pressure. Non‑compliance risks shutdowns, penalties, and legal liability.
          </p>
        </Section>

        <Section title="The South African Legal Framework">
          <ul className="text-zinc-300 list-disc pl-5 space-y-1">
            <li>Pressure Equipment Regulations (PER) under OHSA Act 85 of 1993</li>
            <li>SANS 347 classification and conformity assessment for pressure equipment</li>
            <li>Certification by an Approved Inspection Authority (AIA)</li>
          </ul>
        </Section>

        <Section title="Consequences of Non‑Compliance">
          <ul className="text-zinc-300 list-disc pl-5 space-y-1">
            <li>Operational shutdowns until compliance is restored</li>
            <li>Fines and legal liability for owners and operators</li>
            <li>Increased safety risk and insurance exposure</li>
          </ul>
        </Section>

        <Section title="How Inspection Works (36‑Month Cycles)">
          <ul className="text-zinc-300 list-disc pl-5 space-y-1">
            <li>Internal and external inspection by certified personnel</li>
            <li>Hydraulic pressure testing to 1.25× design pressure as applicable</li>
            <li>Certification and documentation issued by an AIA</li>
          </ul>
        </Section>

        <Section title="What Prompt Air Provides">
          <ul className="text-zinc-300 list-disc pl-5 space-y-1">
            <li>Approved Inspection Authority services and documentation</li>
            <li>36‑month compliance management and reminders</li>
            <li>On‑site emergency certification support for clients</li>
          </ul>
        </Section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Is pressure equipment certification required in South Africa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. South African Pressure Equipment Regulations (under OHSA Act 85 of 1993) mandate that any pressure vessel or steam generator with design pressure ≥50 kPa must be certified by an approved inspection authority at intervals not exceeding 36 months.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is the 36-month inspection requirement?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Every pressure vessel must undergo internal and external inspection and hydraulic pressure testing (to 1.25× design pressure) by an approved inspection authority within 36-month intervals per PER and SANS 347.'
              }
            }
          ]
        }) }} />
      </div>
    </main>
  )
}

export default PressureCertification

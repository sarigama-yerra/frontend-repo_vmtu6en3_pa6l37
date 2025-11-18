import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      company: form.get('company'),
      message: form.get('message'),
      source: 'website-contact'
    }

    try {
      setStatus({ type: 'loading', message: 'Sending…' })
      const res = await fetch(`${BACKEND_URL}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ type: 'success', message: 'Thanks! We will contact you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get Certified</h1>
        <p className="text-blue-200 mb-6">Tell us about your equipment and we’ll schedule certification or an on‑site assessment.</p>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input name="name" required className="w-full px-3 py-2 rounded bg-slate-900 border border-white/10 text-white" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input name="email" type="email" required className="w-full px-3 py-2 rounded bg-slate-900 border border-white/10 text-white" />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input name="phone" className="w-full px-3 py-2 rounded bg-slate-900 border border-white/10 text-white" />
            </div>
            <div>
              <label className="block text-sm mb-1">Company</label>
              <input name="company" className="w-full px-3 py-2 rounded bg-slate-900 border border-white/10 text-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows="5" className="w-full px-3 py-2 rounded bg-slate-900 border border-white/10 text-white" />
          </div>

          <button type="submit" className="inline-flex items-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors">Submit</button>

          {status && (
            <p className={`text-sm mt-2 ${status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-blue-300'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </main>
  )
}

export default Contact

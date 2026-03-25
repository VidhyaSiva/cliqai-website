'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

interface FormState {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  companySize: string
  situation: string
  message: string
}

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  companySize: '',
  situation: '',
  message: '',
}

const companySizes = [
  '50–200 employees',
  '200–500 employees',
  '500–1,000 employees',
  '1,000+ employees',
]

const situations = [
  'Starting a data platform from scratch',
  'Modernizing legacy ETL / data warehouse',
  'Adding AI / ML capabilities to existing platform',
  'Scaling current platform for growth',
  'Building a semantic / BI layer',
  'Other',
]

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const { ref, inView } = useInView(0.08)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const inputClass =
    'w-full bg-brand-navy border border-brand-border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-colors'

  return (
    <section id="contact" className="py-24 relative bg-brand-card/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info — slides in from left */}
          <div>
            <div
              className={`transition-all duration-700 ease-out section-label mb-4 inline-block ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '0ms' }}
            >
              Let&apos;s Talk
            </div>
            <h2
              className={`transition-all duration-700 ease-out section-heading mb-6 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Ready to Build Your
              <br />
              <span className="gradient-text">AI-Ready Data Platform?</span>
            </h2>
            <p
              className={`transition-all duration-700 ease-out section-subheading mb-10 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Fill out the form and we&apos;ll get back to you within 24 hours to schedule
              your free discovery call. No commitment required.
            </p>

            <div
              className={`transition-all duration-700 ease-out space-y-4 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                What to expect on the discovery call
              </h3>
              {[
                'A deep-dive into your current data stack and pain points',
                'A high-level architecture recommendation tailored to your goals',
                'A realistic timeline and scope estimate for your engagement',
                "Honest answers — even if CliqAI isn't the right fit",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-400">{item}</span>
                </div>
              ))}
            </div>

            <div
              className={`transition-all duration-700 ease-out mt-10 p-5 gradient-border-card rounded-xl ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '420ms' }}
            >
              <p className="text-sm text-slate-500 mb-1">Prefer to reach out directly?</p>
              <a href="mailto:hello@cliqai.ai" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                hello@cliqai.ai
              </a>
            </div>
          </div>

          {/* Right: form — slides in from right */}
          <div
            className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '150ms' }}
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gradient-border-card rounded-2xl p-8">
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">We&apos;ll be in touch!</h3>
                <p className="text-slate-400 mb-6">Thanks for reaching out. Expect a reply within 24 business hours.</p>
                <button onClick={() => setStatus('idle')} className="btn-secondary text-sm">
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="gradient-border-card rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">First name <span className="text-indigo-400">*</span></label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Jane" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Last name <span className="text-indigo-400">*</span></label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Smith" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Company <span className="text-indigo-400">*</span></label>
                  <input name="company" value={form.company} onChange={handleChange} required placeholder="Acme Corp" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Work email <span className="text-indigo-400">*</span></label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@acme.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Phone <span className="text-slate-600">(optional)</span></label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Company size <span className="text-indigo-400">*</span></label>
                  <select name="companySize" value={form.companySize} onChange={handleChange} required className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select company size</option>
                    {companySizes.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">What best describes your situation? <span className="text-indigo-400">*</span></label>
                  <select name="situation" value={form.situation} onChange={handleChange} required className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="" disabled>Select your situation</option>
                    {situations.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Tell us about your biggest data challenge <span className="text-indigo-400">*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="E.g. Our pipelines break constantly, we have no visibility into data quality, and our analytics team is blocked waiting on engineers..." className={`${inputClass} resize-none`} />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg px-4 py-3">{errorMsg}</p>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <>Book Your Discovery Call <ArrowRight size={18} /></>
                  )}
                </button>

                <p className="text-center text-xs text-slate-600">We respond within 24 hours on business days.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

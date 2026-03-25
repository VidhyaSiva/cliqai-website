'use client'

import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

const footerLinks = {
  Services: [
    { label: 'ETL Modernization', href: '#services' },
    { label: 'Lakehouse Architecture', href: '#services' },
    { label: 'Semantic Layer', href: '#services' },
    { label: 'BI & Analytics', href: '#services' },
    { label: 'AI Enablement', href: '#services' },
  ],
  Company: [
    { label: 'How It Works', href: '#process' },
    { label: 'Why CliqAI', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  const { ref, inView } = useInView(0.1)

  return (
    <footer className="border-t border-brand-border bg-brand-card/30">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div
            className={`transition-all duration-700 ease-out md:col-span-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <a href="#" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="CliqAI"
                width={40}
                height={40}
                className="h-10 w-10 rounded-md object-cover"
              />
              <span className="font-bold text-xl text-white tracking-tight">
                cliqai<span className="text-indigo-400">.ai</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              AI-ready data platform consulting for mid-market companies.
              ETL modernization, lakehouse architecture, and AI enablement — delivered in 90 days.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com/company/cliqai" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-border flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-500 transition-all" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="mailto:hello@cliqai.ai" className="w-9 h-9 rounded-lg bg-brand-navy border border-brand-border flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-500 transition-all" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links], i) => (
            <div
              key={category}
              className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 ease-out border-t border-brand-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} CliqAI. All rights reserved.</p>
          <p className="text-xs text-slate-600">
            <a href="mailto:hello@cliqai.ai" className="hover:text-slate-400 transition-colors">hello@cliqai.ai</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

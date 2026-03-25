'use client'

import { ArrowRight, ChevronRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '12+', label: 'Platforms Delivered' },
  { value: '90', label: 'Days to Production' },
  { value: '100%', label: 'On-Time Delivery' },
  { value: '5+', label: 'Industries Served' },
]

export default function Hero() {
  const { ref, inView } = useInView(0.1)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.12) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy to-transparent pointer-events-none" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        {/* Badge */}
        <div
          className={`transition-all duration-700 ease-out inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/25 mb-8 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          AI-Powered Data Platform Consulting
        </div>

        {/* Headline */}
        <h1
          className={`transition-all duration-700 ease-out text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '120ms' }}
        >
          Build an AI-Ready
          <br />Data Platform<br />
          <span className="gradient-text">in 90 Days</span>
        </h1>

        {/* Subheading */}
        <p
          className={`transition-all duration-700 ease-out max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '240ms' }}
        >
          We architect and deliver modern data infrastructure for mid-market companies —
          from legacy ETL to lakehouse architecture, semantic models, and production AI use cases.
        </p>

        {/* CTAs */}
        <div
          className={`transition-all duration-700 ease-out flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '360ms' }}
        >
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Book a Free Discovery Call <ArrowRight size={18} />
          </a>
          <a href="#process" className="btn-secondary text-base px-8 py-4">
            See How It Works <ChevronRight size={18} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-border rounded-2xl overflow-hidden max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`transition-all duration-600 ease-out bg-brand-card px-6 py-5 text-center ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${480 + i * 80}ms` }}
            >
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

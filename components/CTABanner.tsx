'use client'

import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function CTABanner() {
  const { ref, inView } = useInView(0.2)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-brand-navy to-brand-navy" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div
          className={`transition-all duration-700 ease-out section-label mb-6 inline-block ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0ms' }}
        >
          Get Started
        </div>
        <h2
          className={`transition-all duration-700 ease-out text-4xl sm:text-5xl font-black text-white mb-6 leading-tight ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Your AI Initiatives Are Only as Good
          <br />
          <span className="gradient-text">as Your Data Foundation</span>
        </h2>
        <p
          className={`transition-all duration-700 ease-out text-lg text-slate-400 mb-10 max-w-2xl mx-auto ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '220ms' }}
        >
          Book a free 45-minute discovery call. We&apos;ll map your current state, identify
          your biggest data bottlenecks, and show you exactly what a 90-day transformation looks like for your business.
        </p>
        <div
          className={`transition-all duration-700 ease-out flex flex-col sm:flex-row items-center justify-center gap-4 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '340ms' }}
        >
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Book a Free Discovery Call
            <ArrowRight size={18} />
          </a>
          <p className="text-sm text-slate-500">No commitment. No sales pitch. Just a conversation.</p>
        </div>
      </div>
    </section>
  )
}

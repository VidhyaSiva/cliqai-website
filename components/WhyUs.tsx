'use client'

import { Clock, DollarSign, Zap, Users } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const differentiators = [
  {
    icon: Clock,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    title: 'Speed Without Compromise',
    description:
      '90 days to production while most consulting engagements drag on for 6–18 months. We achieve this through reusable architecture patterns, proven tooling, and a process refined across dozens of builds.',
  },
  {
    icon: DollarSign,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    title: 'Fixed-Scope, Fixed-Price',
    description:
      "No T&M billing surprises. Every engagement starts with a scoped Statement of Work so you know exactly what you're getting and what it costs — before we start.",
  },
  {
    icon: Zap,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    title: 'AI-First from Day One',
    description:
      "We don't retrofit AI onto an existing architecture. Every platform we build is designed from the ground up to support machine learning, LLMs, and real-time analytics from day one.",
  },
  {
    icon: Users,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'Built to Be Maintained by Your Team',
    description:
      'We embed with your engineers — not above them. Every decision is explained, documented, and handed off with the training your team needs to own it independently.',
  },
]

const stats = [
  { value: '90', unit: 'days', label: 'average time to production' },
  { value: '3–5×', unit: '', label: 'faster time-to-insight' },
  { value: '60%', unit: '', label: 'reduction in pipeline failures' },
  { value: '0', unit: '', label: 'scope creep surprises' },
]

export default function WhyUs() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="why-us" className="py-24 relative">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: header + stats — slides in from left */}
          <div>
            <div
              className={`transition-all duration-700 ease-out section-label mb-4 inline-block ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '0ms' }}
            >
              Why CliqAI
            </div>
            <h2
              className={`transition-all duration-700 ease-out section-heading mb-6 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Senior Talent.
              <br />
              <span className="gradient-text">No Juniors On Your Dime.</span>
            </h2>
            <p
              className={`transition-all duration-700 ease-out section-subheading mb-10 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Mid-market companies get squeezed by big consulting firms that bill senior rates
              and deliver junior work. We&apos;re different — every engagement is led by engineers
              with 10+ years of hands-on data platform experience.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-600 ease-out gradient-border-card rounded-xl p-5 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${320 + i * 80}ms` }}
                >
                  <div className="text-3xl font-black gradient-text mb-1">
                    {stat.value}
                    <span className="text-lg ml-0.5">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: differentiator cards — slide in from right */}
          <div className="space-y-4">
            {differentiators.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`transition-all duration-700 ease-out gradient-border-card rounded-xl p-5 flex gap-4 group ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${100 + i * 100}ms` }}
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

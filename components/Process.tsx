'use client'

import { Search, Compass, Hammer, Rocket } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    timeline: 'Week 1–2',
    description:
      "We audit your current data stack, interview key stakeholders, and map data flows end-to-end. You get a clear picture of where the gaps are — and what they're costing you.",
    deliverables: ['Current state assessment', 'Gap analysis report', 'Risk & opportunity matrix'],
  },
  {
    icon: Compass,
    title: 'Architect',
    timeline: 'Week 3–4',
    description:
      'We design the target state architecture tailored to your tech stack, team size, and business objectives. Every decision is documented and validated with your team before a line of code is written.',
    deliverables: ['Target architecture diagram', 'Migration roadmap', 'Tech stack recommendation'],
  },
  {
    icon: Hammer,
    title: 'Build',
    timeline: 'Week 5–10',
    description:
      'Iterative two-week sprints with working demos at every checkpoint. We build in collaboration with your engineering team to ensure knowledge transfer happens in parallel with delivery.',
    deliverables: ['Bi-weekly sprint demos', 'Production-ready pipelines', 'Automated tests & docs'],
  },
  {
    icon: Rocket,
    title: 'Launch & Enable',
    timeline: 'Week 11–12',
    description:
      "Production deployment with go-live support. Your team gets hands-on training, runbooks, and a 30-day post-launch check-in to make sure everything runs smoothly.",
    deliverables: ['Production deployment', 'Team training sessions', 'Runbooks & documentation'],
  },
]

export default function Process() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="process" className="py-24 relative bg-brand-card/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ease-out section-label mb-4 inline-block ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0ms' }}
          >
            Our Approach
          </div>
          <h2
            className={`transition-all duration-700 ease-out section-heading mb-4 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}
          >
            From Assessment to Production
            <br />
            <span className="gradient-text">in 90 Days, Guaranteed</span>
          </h2>
          <p
            className={`transition-all duration-700 ease-out section-subheading max-w-2xl mx-auto ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Fixed scope. Fixed price. No surprise overruns. We&apos;ve refined this process
            across dozens of data platform builds to eliminate the guesswork.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-indigo-500/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className={`transition-all duration-700 ease-out flex flex-col ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${300 + i * 120}ms` }}
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative w-24 h-24 mb-4">
                      <div className="absolute inset-0 rounded-full border border-brand-border bg-brand-navy" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center z-10">
                        {i + 1}
                      </div>
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-indigo-400" />
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">{step.timeline}</div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4 text-center">{step.description}</p>

                  <div className="mt-auto gradient-border-card rounded-xl p-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Deliverables</p>
                    <ul className="space-y-1">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-indigo-400 mt-0.5 shrink-0">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
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

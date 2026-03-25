'use client'

import { useInView } from '@/hooks/useInView'

const technologies = [
  'Snowflake', 'Databricks', 'dbt', 'Apache Airflow', 'Apache Spark',
  'BigQuery', 'Tableau', 'Power BI', 'Looker', 'Delta Lake', 'AWS', 'Azure',
]

export default function TrustBar() {
  const { ref, inView } = useInView(0.2)

  return (
    <section className="relative py-12 border-y border-brand-border bg-brand-card/40">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <p
          className={`transition-all duration-600 ease-out text-center text-xs font-semibold uppercase tracking-widest text-slate-600 mb-6 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Deep expertise across the modern data stack
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, i) => (
            <span
              key={tech}
              className={`transition-all duration-500 ease-out px-4 py-2 rounded-full text-sm font-medium text-slate-400 bg-brand-navy border border-brand-border hover:border-indigo-500/50 hover:text-slate-300 cursor-default ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${80 + i * 40}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

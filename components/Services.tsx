'use client'

import { GitMerge, Layers, Library, BarChart3, Brain, ShieldCheck } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const services = [
  {
    icon: GitMerge,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    title: 'ETL Modernization',
    description:
      'Replace brittle, hand-rolled pipelines with reliable, observable workflows. We migrate you to Airflow, Dagster, or dbt-native orchestration — with full lineage and monitoring.',
    tags: ['Airflow', 'Dagster', 'dbt', 'Fivetran'],
  },
  {
    icon: Layers,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    title: 'Lakehouse Architecture',
    description:
      'Design and build a unified data platform that eliminates warehouse vs. lake silos. Snowflake, Databricks, or Delta Lake — architected to scale with your growth.',
    tags: ['Snowflake', 'Databricks', 'Delta Lake', 'Iceberg'],
  },
  {
    icon: Library,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    title: 'Semantic Layer',
    description:
      'Create a single source of truth for your business metrics. We build governed, reusable semantic models so every team speaks the same data language.',
    tags: ['dbt Metrics', 'Cube', 'AtScale', 'MetricFlow'],
  },
  {
    icon: BarChart3,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    title: 'BI & Analytics Layer',
    description:
      'Deploy a BI layer that analysts love and executives trust. We implement Tableau, Looker, or Power BI on top of governed, reliable data — with training and enablement.',
    tags: ['Tableau', 'Looker', 'Power BI', 'Sigma'],
  },
  {
    icon: Brain,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    title: 'AI Use Case Enablement',
    description:
      'Turn your data platform into an AI launchpad. RAG pipelines, feature stores, LLM fine-tuning infrastructure, and vector databases — built on your existing data assets.',
    tags: ['RAG', 'Feature Stores', 'Vector DB', 'LLM Infra'],
  },
  {
    icon: ShieldCheck,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    title: 'Data Governance',
    description:
      'Build trust in your data with automated quality checks, lineage tracking, and access controls. We implement data catalogs and quality frameworks that scale.',
    tags: ['Data Catalog', 'Lineage', 'Quality', 'Access Control'],
  },
]

export default function Services() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="services" className="py-24 relative">
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
            What We Build
          </div>
          <h2
            className={`transition-all duration-700 ease-out section-heading mb-4 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}
          >
            End-to-End Data Platform Services
          </h2>
          <p
            className={`transition-all duration-700 ease-out section-subheading max-w-2xl mx-auto ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}
          >
            From raw data ingestion to production AI — we cover every layer of the modern
            data stack so you don&apos;t have to stitch together five different vendors.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`transition-all duration-700 ease-out gradient-border-card rounded-2xl p-6 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`${service.color} w-6 h-6`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium text-slate-500 bg-slate-800/80 border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CliqAI — AI-Ready Data Platform Consulting',
  description:
    'We build AI-ready data platforms for mid-market companies in 90 days. ETL modernization, lakehouse architecture, semantic models, BI layer, and AI use case enablement.',
  keywords: [
    'data platform consulting',
    'ETL modernization',
    'lakehouse architecture',
    'data engineering consulting',
    'AI data infrastructure',
    'Snowflake consulting',
    'Databricks consulting',
    'dbt consulting',
    'semantic layer',
    'BI consulting',
  ],
  authors: [{ name: 'CliqAI' }],
  openGraph: {
    title: 'CliqAI — AI-Ready Data Platform Consulting',
    description:
      'Build an AI-ready data platform in 90 days. We modernize data infrastructure for mid-market companies.',
    url: 'https://www.cliqai.ai',
    siteName: 'CliqAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CliqAI — AI-Ready Data Platform Consulting',
    description: 'Build an AI-ready data platform in 90 days.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

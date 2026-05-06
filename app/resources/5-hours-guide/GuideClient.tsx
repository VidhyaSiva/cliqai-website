"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";

// ── Animated section wrapper ──────────────────────────────────────────────────

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {children}
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const fixes = [
  {
    n: "01",
    emoji: "✉️",
    timeDrain: "Customer Emails",
    tool: "ChatGPT",
    toolUrl: "https://chat.openai.com",
    timeSaved: "~60 min/week",
    body: "Drafting replies to customer questions, complaints, and enquiries eats up hours every week. ChatGPT can draft a professional reply in seconds from a one-line prompt.",
    steps: [
      'Go to chat.openai.com (free account)',
      'Type: "Draft a professional reply to this customer email: [paste email]"',
      "Edit the draft to match your voice — takes 30 seconds",
      "Save your best prompts as templates for next time",
    ],
  },
  {
    n: "02",
    emoji: "✍️",
    timeDrain: "Writing & Drafting",
    tool: "Claude",
    toolUrl: "https://claude.ai",
    timeSaved: "~75 min/week",
    body: "Proposals, newsletters, product descriptions, bios — anything that starts with a blank page. Claude writes longer-form content with better structure than most other AI tools.",
    steps: [
      "Go to claude.ai (free account)",
      'Describe what you need: "Write a 200-word product description for [product] targeting [audience]"',
      "Ask it to adjust tone, length, or style until it fits",
      "Use it for any document that takes you more than 15 minutes to draft",
    ],
  },
  {
    n: "03",
    emoji: "🔍",
    timeDrain: "Research & Fact-Finding",
    tool: "Perplexity AI",
    toolUrl: "https://perplexity.ai",
    timeSaved: "~45 min/week",
    body: "Searching for competitor info, industry trends, pricing benchmarks, or local regulations takes hours of tab-switching. Perplexity searches the web and summarises with sources.",
    steps: [
      "Go to perplexity.ai (free account)",
      "Ask a specific question: \"What are the average profit margins for a coffee shop in 2024?\"",
      "It returns a summary with clickable sources so you can verify",
      "Use it any time you'd normally open 5 browser tabs",
    ],
  },
  {
    n: "04",
    emoji: "📅",
    timeDrain: "Scheduling & Calendar",
    tool: "Reclaim.ai",
    toolUrl: "https://reclaim.ai",
    timeSaved: "~30 min/week",
    body: "Finding meeting times, protecting focus blocks, and juggling tasks across a busy week is a constant drain. Reclaim auto-schedules your tasks and defends time for deep work.",
    steps: [
      "Go to reclaim.ai and connect your Google Calendar (free tier)",
      "Add your recurring tasks (e.g. 'Social media — 1 hr, Tuesdays')",
      "Set your work hours and focus time preferences",
      "Let it auto-schedule — reschedules automatically if things shift",
    ],
  },
  {
    n: "05",
    emoji: "📱",
    timeDrain: "Social Media Content",
    tool: "ChatGPT + Canva",
    toolUrl: "https://canva.com",
    timeSaved: "~60 min/week",
    body: "Coming up with ideas, writing captions, and designing posts takes a full afternoon if you let it. Use ChatGPT for the words, Canva's AI tools for the visuals.",
    steps: [
      'In ChatGPT: "Write 5 LinkedIn post ideas for a [type of business] targeting [audience]"',
      "Pick the best idea and ask it to write the full caption",
      "Go to canva.com → use a template + their AI image generator for visuals",
      "Schedule with Buffer or Meta Business Suite (both free)",
    ],
  },
];

const checklist = [
  "Set up ChatGPT for customer email replies",
  "Try Claude for your next proposal or newsletter",
  "Use Perplexity instead of Google for your next research task",
  "Connect Reclaim to your Google Calendar",
  "Generate a week of social posts with ChatGPT",
];

// ── Main component ────────────────────────────────────────────────────────────

export default function GuideClient() {
  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-16 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-card text-sm font-medium text-brand-cyan mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Free Guide — No signup required
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            How to Save{" "}
            <span className="gradient-text">5 Hours a Week</span>
            <br />
            with AI
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            5 specific time drains and one AI fix for each — with exact setup
            steps and free tools only. No tech background needed.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/guides/5-hours-guide.docx"
              download
              className="btn-primary px-8 py-3 text-base"
            >
              ↓ Download Free Guide
            </a>
            <a href="#fixes" className="btn-secondary px-8 py-3 text-base">
              Read It Here →
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Word document · Free · No email required
          </p>
        </AnimatedSection>

        {/* At a glance */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden mt-14 border border-brand-border">
            {[
              { value: "5", label: "Time drains fixed" },
              { value: "Free", label: "All tools listed" },
              { value: "2 hrs", label: "To first result" },
            ].map((s) => (
              <div key={s.label} className="bg-brand-navy py-7 px-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── 5 FIXES ───────────────────────────────────────────────────────── */}
      <section id="fixes" className="border-t border-brand-border py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="section-label">The 5 Fixes</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                One AI tool.{" "}
                <span className="gradient-text">One time drain.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Each fix takes under 2 hours to set up and works on the free tier.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {fixes.map((fix, i) => (
              <AnimatedSection key={fix.n} delay={i * 80}>
                <div className="gradient-border-card p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Number + emoji */}
                    <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <span className="text-4xl font-black text-brand-indigo/30 leading-none">
                        {fix.n}
                      </span>
                      <span className="text-3xl">{fix.emoji}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white">
                          {fix.timeDrain}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-indigo/20 text-brand-indigo border border-brand-indigo/30">
                          Fix: {fix.tool}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                          Saves {fix.timeSaved}
                        </span>
                      </div>

                      <p className="text-gray-400 leading-relaxed mb-5">{fix.body}</p>

                      <div className="bg-brand-navy rounded-xl border border-brand-border p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                          Setup steps
                        </p>
                        <ol className="space-y-2">
                          {fix.steps.map((step, si) => (
                            <li key={si} className="flex gap-3 text-sm text-gray-300">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-indigo/20 border border-brand-indigo/30 flex items-center justify-center text-brand-indigo text-xs font-bold mt-0.5">
                                {si + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                        <a
                          href={fix.toolUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-brand-cyan hover:text-brand-indigo transition-colors"
                        >
                          Open {fix.tool} →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKLIST ─────────────────────────────────────────────────────── */}
      <section className="border-t border-brand-border bg-brand-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="section-label">Your Action Plan</p>
              <h2 className="text-3xl font-bold mb-4">
                Your 5-step{" "}
                <span className="gradient-text">quick-start checklist</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                Work through these one at a time. Each one delivers a result before you move to the next.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="gradient-border-card p-8 max-w-2xl mx-auto">
              <ul className="space-y-4">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-brand-indigo/50 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-brand-border text-center">
                <a
                  href="/guides/5-hours-guide.docx"
                  download
                  className="btn-primary px-8 py-3 inline-flex"
                >
                  ↓ Download Printable Version
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-brand-border py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label">What&apos;s Next?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More guides coming{" "}
              <span className="gradient-text">every month.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Each one tackles a different small business challenge with the same
              practical, step-by-step format.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/coaching" className="btn-primary px-8 py-3">
                See All Free Guides →
              </Link>
              <Link href="/" className="btn-secondary px-8 py-3">
                Back to CliqAI
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

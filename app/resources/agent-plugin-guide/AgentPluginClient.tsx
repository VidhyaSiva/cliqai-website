"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";

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

const chapters = [
  { n: "01", title: "What is an AI agent — and what is a plugin?", desc: "The plain-English difference between a chatbot that answers and an agent that acts." },
  { n: "02", title: "A real example: the cliqai-developer plugin", desc: "How I built a plugin for my own website and what it can now do on my behalf." },
  { n: "03", title: "Why your business might need one", desc: "The signs you would benefit from an agent, and SMB use cases across different industries." },
  { n: "04", title: "How to build your first plugin", desc: "5 steps from blank page to working agent — including a SKILL.md template you can copy." },
  { n: "05", title: "What I learned building mine", desc: "Specificity beats length. Reference docs do the heavy lifting. Agents improve fast." },
  { n: "06", title: "Your action plan for this week", desc: "One task. One plugin. One week. The concrete starting point." },
];

const comparisons = [
  {
    label: "Standard AI (chatbot)",
    emoji: "💬",
    color: "bg-brand-card border-brand-border",
    textColor: "text-gray-400",
    items: [
      "Answers your questions",
      "Generates text on request",
      "Knows nothing about your business",
      "You re-explain context every session",
      "Tells you how to bake the cake",
    ],
  },
  {
    label: "AI Agent with Plugin",
    emoji: "🤖",
    color: "bg-brand-indigo/5 border-brand-indigo/40",
    textColor: "text-gray-300",
    items: [
      "Takes actions in the real world",
      "Reads, writes, deploys on your behalf",
      "Loaded with your business context",
      "Picks up exactly where you left off",
      "Goes to the kitchen and bakes it",
    ],
  },
];

const useCases = [
  { emoji: "🍽️", biz: "Restaurant owner", task: '"Write this week\'s specials in our menu format and post to Instagram"' },
  { emoji: "📊", biz: "Bookkeeper", task: '"Format these receipts into my expense spreadsheet template"' },
  { emoji: "🤝", biz: "Consultant", task: '"Draft a proposal using my standard structure and tone"' },
  { emoji: "🛒", biz: "Online retailer", task: '"Write product descriptions for these 10 new items in our brand voice"' },
  { emoji: "🏠", biz: "Property manager", task: '"Update the listings page with this week\'s available units"' },
];

const skillTemplate = `# [Your Business] Agent

You help [Business Name] with [task description].

## About the business
[1-2 sentences: what you do, who you serve]

## Brand voice
[Tone: friendly / professional / direct]
[Words we use / words we avoid]

## Format
[How you want outputs structured]
[Length, platform, style]

## Always ask before starting
- [Question 1]
- [Question 2]`;

export default function AgentPluginClient() {
  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-16 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-card text-sm font-medium text-brand-cyan mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Free Guide · Guide 3 of 3
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your First AI Agent
            <br />
            <span className="gradient-text">What a Plugin Is and How to Build One</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            A plain-English guide to AI agents — what they are, why your business needs one,
            and how to build your first plugin today. No coding required.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/guides/agent-plugin-guide.docx"
              download
              className="btn-primary px-8 py-3 text-base"
            >
              ↓ Download Free Guide
            </a>
            <a href="#chapters" className="btn-secondary px-8 py-3 text-base">
              Read It Here →
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-4">Word document · Free · No email required</p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="grid grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden mt-14 border border-brand-border">
            {[
              { value: "6", label: "Chapters" },
              { value: "5", label: "SMB use cases" },
              { value: "1 week", label: "To your first agent" },
            ].map((s) => (
              <div key={s.label} className="bg-brand-navy py-7 px-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CHATBOT VS AGENT ──────────────────────────────────────────────── */}
      <section className="border-y border-brand-border bg-brand-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label">The Key Difference</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                A chatbot <span className="text-gray-500">tells you.</span>
                <br />
                <span className="gradient-text">An agent does it.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {comparisons.map((c, i) => (
              <AnimatedSection key={c.label} delay={i * 100}>
                <div className={`rounded-xl border p-7 h-full ${c.color}`}>
                  <div className="text-3xl mb-3">{c.emoji}</div>
                  <h3 className={`font-bold text-base mb-4 ${i === 1 ? "text-white" : "text-gray-400"}`}>
                    {c.label}
                  </h3>
                  <ul className="space-y-3">
                    {c.items.map((item, j) => (
                      <li key={j} className={`text-sm flex items-start gap-2 ${c.textColor}`}>
                        <span className={`mt-1 ${i === 1 ? "text-brand-cyan" : "text-gray-600"}`}>
                          {i === 1 ? "✓" : "–"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200}>
            <div className="mt-8 rounded-xl border border-brand-indigo/30 bg-brand-indigo/5 p-6 text-center">
              <p className="text-lg text-white font-medium">
                &ldquo;A plugin turns a general assistant into <span className="gradient-text">your</span> assistant.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CHAPTERS ──────────────────────────────────────────────────────── */}
      <section id="chapters" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="section-label">What&apos;s Inside</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                6 chapters.{" "}
                <span className="gradient-text">Plain English throughout.</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            {chapters.map((ch, i) => (
              <AnimatedSection key={ch.n} delay={i * 60}>
                <div className="gradient-border-card p-6 flex gap-6 items-start">
                  <span className="text-3xl font-black text-brand-indigo/30 leading-none flex-shrink-0 mt-1">
                    {ch.n}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{ch.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{ch.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────────────────── */}
      <section className="border-y border-brand-border bg-brand-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="section-label">Real SMB Examples</p>
              <h2 className="text-3xl font-bold mb-4">
                Any repetitive task.{" "}
                <span className="gradient-text">Any industry.</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                If you have explained the same context to an AI more than twice — that&apos;s your plugin.
              </p>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            {useCases.map((u, i) => (
              <AnimatedSection key={u.biz} delay={i * 70}>
                <div className="gradient-border-card p-5 flex items-start gap-5">
                  <span className="text-2xl flex-shrink-0">{u.emoji}</span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                      {u.biz}
                    </span>
                    <p className="text-gray-300 text-sm mt-1 italic">{u.task}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILL TEMPLATE ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="section-label">The Template</p>
              <h2 className="text-3xl font-bold mb-4">
                Your SKILL.md{" "}
                <span className="gradient-text">starting point</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Copy this, fill in the blanks, and you have the foundation of your first plugin.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="rounded-xl border border-brand-border bg-slate-900 p-8 font-mono">
              <div className="text-gray-500 text-xs mb-4 uppercase tracking-wider">SKILL.md — copy and customise</div>
              {skillTemplate.split("\n").map((line, i) => (
                <div key={i} className={`text-sm mb-1 ${
                  line.startsWith("#") ? "text-brand-indigo font-bold" :
                  line.startsWith("[") ? "text-gray-500 italic" :
                  line.startsWith("-") ? "text-gray-400" :
                  "text-brand-cyan"
                }`}>
                  {line || " "}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-brand-border bg-brand-card py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label">Complete the Series</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All three guides.
              <br />
              <span className="gradient-text">All free. All practical.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              The complete beginner-to-agent journey for small business owners.
            </p>
            <div className="space-y-3 max-w-lg mx-auto mb-10">
              {[
                { n: "01", title: "Save 5 Hours a Week with AI", href: "/resources/5-hours-guide" },
                { n: "02", title: "Cowork for Beginners", href: "/resources/cowork-guide" },
                { n: "03", title: "Your First AI Agent", href: "/resources/agent-plugin-guide", current: true },
              ].map((g) => (
                <Link
                  key={g.n}
                  href={g.href}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                    g.current
                      ? "border-brand-indigo/40 bg-brand-indigo/10 text-white"
                      : "border-brand-border bg-brand-card text-gray-400 hover:border-brand-indigo/30 hover:text-white"
                  }`}
                >
                  <span className="text-brand-indigo font-bold text-sm">{g.n}</span>
                  <span className="text-sm font-medium">{g.title}</span>
                  {g.current && <span className="ml-auto text-xs text-brand-cyan">You are here</span>}
                </Link>
              ))}
            </div>
            <a href="/guides/agent-plugin-guide.docx" download className="btn-primary px-8 py-3 inline-flex">
              ↓ Download This Guide Free
            </a>
            <p className="text-gray-600 text-sm mt-6 italic">
              This guide was created using the cliqai-developer plugin — the same agent it describes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

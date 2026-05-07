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
  { n: "01", title: "What a marketing agent actually is", desc: "It's not magic — it's a Claude plugin that knows your brand voice and writes posts on command." },
  { n: "02", title: "The four pieces of the system", desc: "Cowork writes the post. Gmail sends it. Make.com watches for it. LinkedIn publishes it. Here's how they connect." },
  { n: "03", title: "How to trigger a post", desc: "Two ways to start: a manual command ('write a LinkedIn post about X') or an event ('I just launched a new guide')." },
  { n: "04", title: "Setting up Make.com in 15 minutes", desc: "The exact scenario — Gmail Watch module, subject filter, LinkedIn Post module — with screenshots of the config." },
  { n: "05", title: "What I learned building mine", desc: "The mistakes I made (wrong field mapping, double-posting, mailto links that don't open). All fixed. All documented." },
  { n: "06", title: "What's coming next", desc: "The developer agent will auto-post the first comment with a link to the guide — so every post points somewhere useful." },
];

const flowSteps = [
  {
    n: "1",
    icon: "💬",
    tool: "Cowork (Claude)",
    action: "You say: \"Write a LinkedIn post about my new guide\"",
    result: "Agent writes a post in your brand voice — hook, body, CTA, hashtags",
  },
  {
    n: "2",
    icon: "📩",
    tool: "Gmail Compose Link",
    action: "One click opens Gmail with the post pre-filled and ready to send",
    result: "You hit Send. Email goes to your marketing inbox in seconds",
  },
  {
    n: "3",
    icon: "⚙️",
    tool: "Make.com",
    action: "Watches your inbox for emails with subject 'LinkedIn Post Ready'",
    result: "Picks up the email body automatically — no manual copy-paste",
  },
  {
    n: "4",
    icon: "💼",
    tool: "LinkedIn",
    action: "Make.com calls the LinkedIn API with the full post text",
    result: "Your post appears on your LinkedIn profile within seconds",
  },
];

const triggerTypes = [
  {
    emoji: "🖐️",
    type: "Manual trigger",
    desc: "You decide when to post. Just say: \"Write a LinkedIn post about [topic].\" The agent writes it, you click to send.",
    examples: [
      "Write a LinkedIn post about my new free guide",
      "Write a post about what I learned this week",
      "Write a post promoting my 1-hour AI coaching session",
    ],
  },
  {
    emoji: "⚡",
    type: "Event-based trigger",
    desc: "Something happens in your business, and you tell the agent what changed. It writes a post about that specific event.",
    examples: [
      "I just added a new guide to the website — write a post",
      "I updated my services page — write a post about what's new",
      "I just finished coaching my first client — write a post",
    ],
  },
];

const makecomSteps = [
  { n: "1", step: "Create a new Scenario in Make.com", detail: "Free plan is enough. Start from scratch." },
  { n: "2", step: "Add a Gmail Watch Emails module", detail: "Connect your Google account. Set the folder to Inbox or a dedicated label." },
  { n: "3", step: "Set the subject filter", detail: 'Filter: subject contains "LinkedIn Post Ready". This stops Make.com from picking up every email.' },
  { n: "4", step: "Add a LinkedIn Create Post module", detail: 'Connect your LinkedIn account. Set Content field to "Full text body" from the Gmail module — not HTML body.' },
  { n: "5", step: "Turn the scenario ON and run it once", detail: "Send a test email with the right subject. Check Make.com History to confirm the post was picked up." },
];

const mistakes = [
  {
    emoji: "❌",
    mistake: "Used HTML body instead of Full text body",
    fix: "LinkedIn received garbled HTML tags. Switch to Full text body in the LinkedIn module — that's the plain post text.",
  },
  {
    emoji: "❌",
    mistake: "Posts published twice",
    fix: "Make.com was watching already-processed emails. Turn on 'Mark email as read when fetched' in the Gmail module.",
  },
  {
    emoji: "❌",
    mistake: "mailto: link opened Chrome instead of mail app",
    fix: "mailto: requires a default desktop mail app. Use the Gmail web compose URL instead — it opens Gmail directly in the browser.",
  },
  {
    emoji: "❌",
    mistake: "Cowork sandbox blocked the webhook call",
    fix: "Cowork can't make outbound HTTP requests. The Gmail compose link workaround routes around this entirely.",
  },
];

export default function MarketingAgentClient() {
  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-16 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-card text-sm font-medium text-brand-cyan mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Free Guide · Guide 4 of 4
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Build a Marketing Agent
            <br />
            <span className="gradient-text">That Writes and Posts to LinkedIn</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            How I built a fully automated LinkedIn posting system using Cowork, Gmail,
            and Make.com — in one afternoon, no developer needed. Here&apos;s the exact setup.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#flow" className="btn-primary px-8 py-3 text-base">
              See How It Works →
            </a>
            <a href="#setup" className="btn-secondary px-8 py-3 text-base">
              Jump to Make.com Setup
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-4">Free · No email required · Built and tested by Vidhya</p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="grid grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden mt-14 border border-brand-border">
            {[
              { value: "4", label: "Tools connected" },
              { value: "15 min", label: "Make.com setup" },
              { value: "~5 sec", label: "Post to publish time" },
            ].map((s) => (
              <div key={s.label} className="bg-brand-navy py-7 px-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── THE PROBLEM ───────────────────────────────────────────────────── */}
      <section className="border-y border-brand-border bg-brand-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label">Why This Matters</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Consistent posting is hard.
                <br />
                <span className="gradient-text">Until it&apos;s automated.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "😩",
                heading: "Before",
                points: [
                  "Write the post in ChatGPT, copy to LinkedIn, reformat manually",
                  "Forget the brand voice halfway through",
                  "Spend 45 minutes on one post",
                  "Skip posting because it felt like too much work",
                ],
                color: "border-brand-border bg-brand-card",
                textColor: "text-gray-400",
                checkColor: "text-gray-600",
                check: "–",
              },
              {
                emoji: "✅",
                heading: "After",
                points: [
                  "Tell the agent what you want to post about",
                  "Post is written in your voice, with hook, CTA, and hashtags",
                  "Click one Gmail link — Make.com posts it to LinkedIn",
                  "Whole thing takes under 5 minutes",
                ],
                color: "border-brand-indigo/40 bg-brand-indigo/5",
                textColor: "text-gray-300",
                checkColor: "text-brand-cyan",
                check: "✓",
              },
            ].map((col, i) => (
              <AnimatedSection key={col.heading} delay={i * 100}>
                <div className={`rounded-xl border p-7 h-full ${col.color}`}>
                  <div className="text-3xl mb-3">{col.emoji}</div>
                  <h3 className={`font-bold text-base mb-4 ${i === 1 ? "text-white" : "text-gray-400"}`}>
                    {col.heading}
                  </h3>
                  <ul className="space-y-3">
                    {col.points.map((item, j) => (
                      <li key={j} className={`text-sm flex items-start gap-2 ${col.textColor}`}>
                        <span className={`mt-0.5 flex-shrink-0 ${col.checkColor}`}>{col.check}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE FLOW ──────────────────────────────────────────────────────── */}
      <section id="flow" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="section-label">The Full System</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                4 tools.{" "}
                <span className="gradient-text">One seamless flow.</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Each tool does one job. Together they take you from idea to published post in under 5 minutes.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {flowSteps.map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 80}>
                <div className="gradient-border-card p-6 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/30 flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                        Step {step.n}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{step.tool}</span>
                    </div>
                    <p className="text-white text-sm font-medium mb-1">{step.action}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">→ {step.result}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-8 rounded-xl border border-brand-indigo/30 bg-brand-indigo/5 p-6 text-center">
              <p className="text-lg text-white font-medium">
                &ldquo;You trigger it. The agent handles everything after that.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TRIGGER TYPES ─────────────────────────────────────────────────── */}
      <section className="border-y border-brand-border bg-brand-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label">How to Start a Post</p>
              <h2 className="text-3xl font-bold mb-4">
                Two ways to{" "}
                <span className="gradient-text">trigger your agent.</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                You don&apos;t need a schedule. You need one of these.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {triggerTypes.map((t, i) => (
              <AnimatedSection key={t.type} delay={i * 100}>
                <div className="gradient-border-card p-7 h-full flex flex-col">
                  <div className="text-3xl mb-3">{t.emoji}</div>
                  <h3 className="text-white font-bold text-base mb-3">{t.type}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{t.desc}</p>
                  <div className="mt-auto space-y-2">
                    {t.examples.map((ex, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="text-brand-cyan text-xs mt-1 flex-shrink-0">▸</span>
                        <p className="text-gray-500 text-xs italic">&ldquo;{ex}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                <span className="gradient-text">Every step documented.</span>
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

      {/* ── MAKE.COM SETUP ────────────────────────────────────────────────── */}
      <section id="setup" className="border-y border-brand-border bg-brand-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label">The Make.com Setup</p>
              <h2 className="text-3xl font-bold mb-4">
                5 steps.{" "}
                <span className="gradient-text">15 minutes.</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                You need a free Make.com account and a LinkedIn account. That&apos;s it.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {makecomSteps.map((s, i) => (
              <AnimatedSection key={s.n} delay={i * 70}>
                <div className="gradient-border-card p-6 flex gap-5 items-start">
                  <div className="w-9 h-9 rounded-lg bg-brand-indigo/20 border border-brand-indigo/40 flex items-center justify-center text-brand-indigo font-bold text-sm flex-shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{s.step}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-8 rounded-xl border border-brand-border bg-slate-900 p-6 font-mono">
              <div className="text-gray-500 text-xs mb-3 uppercase tracking-wider">Make.com — Gmail Watch module config</div>
              <div className="space-y-1.5 text-sm">
                <div><span className="text-brand-cyan">Subject filter:</span> <span className="text-gray-300">LinkedIn Post Ready</span></div>
                <div><span className="text-brand-cyan">Mark as read:</span> <span className="text-gray-300">Yes (prevents double-posting)</span></div>
                <div><span className="text-brand-cyan">Max results:</span> <span className="text-gray-300">1</span></div>
                <div className="pt-2 border-t border-brand-border mt-2">
                  <span className="text-brand-indigo">LinkedIn Content field:</span>{" "}
                  <span className="text-gray-300">Full text body</span>{" "}
                  <span className="text-gray-600">← not HTML body</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MISTAKES ──────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="section-label">Mistakes I Made So You Don&apos;t Have To</p>
              <h2 className="text-3xl font-bold mb-4">
                Every error.{" "}
                <span className="gradient-text">Every fix.</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                I hit all of these. Documenting them here means you won&apos;t spend hours on the same dead ends.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {mistakes.map((m, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="gradient-border-card p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-xl flex-shrink-0">{m.emoji}</span>
                    <div>
                      <p className="text-gray-400 text-sm mb-2 line-through">{m.mistake}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="text-brand-cyan font-semibold">Fix: </span>
                        {m.fix}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S NEXT ───────────────────────────────────────────────────── */}
      <section className="border-y border-brand-border bg-brand-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="section-label">Coming Next</p>
              <h2 className="text-3xl font-bold mb-4">
                The agent isn&apos;t done yet.{" "}
                <span className="gradient-text">Here&apos;s what&apos;s next.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "💬",
                title: "Auto-comment with guide link",
                desc: "When a post goes live, the developer agent will automatically post the first comment with a link to the relevant guide — so every post points somewhere useful without any extra work.",
                badge: "In progress",
              },
              {
                emoji: "📅",
                title: "Scheduled content triggers",
                desc: "Set a recurring trigger in Cowork — new guide drops every month, agent writes the post automatically. Zero manual effort for consistent, on-brand content.",
                badge: "Planned",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="gradient-border-card p-7 h-full">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-brand-border bg-brand-card py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label">Complete the Series</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All four guides.
              <br />
              <span className="gradient-text">All free. All practical.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              From your first AI tool to a fully automated marketing system — built step by step.
            </p>
            <div className="space-y-3 max-w-lg mx-auto mb-10">
              {[
                { n: "01", title: "Save 5 Hours a Week with AI", href: "/resources/5-hours-guide" },
                { n: "02", title: "Cowork for Beginners: Build a Website Without Coding", href: "/resources/cowork-guide" },
                { n: "03", title: "Your First AI Agent: What a Plugin Is and How to Build One", href: "/resources/agent-plugin-guide" },
                { n: "04", title: "Build a Marketing Agent That Posts to LinkedIn", href: "/resources/marketing-agent-guide", current: true },
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
            <p className="text-gray-600 text-sm mt-6 italic">
              This guide was built using the same marketing agent it describes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

// app/coaching/CoachingClient.tsx
// Client component — uses useInView scroll animations, matches real cliqai.ai design system
// Brand colors: navy bg (#050c1a), indigo primary (#6366f1), cyan accent (#22d3ee)

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "5 hrs", label: "Saved per week on average" },
  { value: "10 min", label: "Average tool setup time" },
  { value: "$0", label: "To get started" },
  { value: "5 fixes", label: "One per time drain" },
];

const painPoints = [
  {
    emoji: "😤",
    quote: "Everyone's talking about AI but I don't know where to start.",
  },
  {
    emoji: "⏱️",
    quote: "I tried a few tools but nothing stuck — it felt like work on top of work.",
  },
  {
    emoji: "😟",
    quote: "I'm worried bigger competitors are using AI and I'm already falling behind.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tell me your biggest time drain",
    body: "Customer emails? Writing content? Scheduling? Every business is different. We find the one place AI will help you most — fast.",
  },
  {
    n: "2",
    title: "Follow a step-by-step guide",
    body: "I point you to the right tool and walk you through setup — no assumptions, no skipped steps, no jargon.",
  },
  {
    n: "3",
    title: "Get your first quick win",
    body: "Most guides deliver a result in under 2 hours. You'll know it's working before you invest any more time.",
  },
];

const guides = [
  {
    emoji: "⏱️",
    title: "How to Save 5 Hours a Week with AI",
    desc: "5 specific time drains and one AI fix for each — with exact setup steps and free tools only.",
    badge: "Free Download",
    available: true,
  },
  {
    emoji: "💻",
    title: "Cowork for Beginners: Build a Website Without Coding",
    desc: "How I used Claude Cowork to deploy a live website in one afternoon — every mistake documented, every fix explained.",
    badge: "Free Download",
    available: true,
    href: "/resources/cowork-guide",
  },
  {
    emoji: "🤖",
    title: "Your First AI Agent: What a Plugin Is and How to Build One",
    desc: "What AI agents are, why your business needs one, and how to build your first plugin — with a SKILL.md template you can copy.",
    badge: "Free Download",
    available: true,
    href: "/resources/agent-plugin-guide",
  },
];

const whyPoints = [
  {
    title: "Practical, not theoretical",
    body: "Every guide comes from AI I've actually used to build my own businesses. No recycled blog content.",
  },
  {
    title: "Built for busy owners",
    body: "No 40-page PDFs. No 3-hour courses. Each fix delivers results in under 2 hours.",
  },
  {
    title: "No tech background needed",
    body: "If you can type a question, you can use these tools. Everything is explained from scratch.",
  },
  {
    title: "Free to start",
    body: "All guides are free. Every tool I recommend has a free tier that's more than enough to get started.",
  },
];

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

// ── Main component ────────────────────────────────────────────────────────────

export default function CoachingClient() {
  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-card text-sm font-medium text-brand-cyan mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Free resources for small business owners
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            AI for your business.
            <br />
            <span className="gradient-text">No tech degree required.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Free guides and practical walkthroughs to help small business owners
            start using AI — and actually see results.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#guides" className="btn-primary px-8 py-3 text-base">
              Get Free Guides →
            </a>
            <a href="#how-it-works" className="btn-secondary px-8 py-3 text-base">
              See How It Works
            </a>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-border rounded-2xl overflow-hidden mt-16 border border-brand-border">
            {stats.map((s) => (
              <div key={s.value} className="bg-brand-navy py-8 px-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="border-y border-brand-border bg-brand-card py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label">Sound Familiar?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You&apos;re not alone.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
              Most small business owners want to use AI — they just don&apos;t know
              where to start. That&apos;s exactly what this is for.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {painPoints.map((p, i) => (
              <AnimatedSection key={p.quote} delay={i * 100}>
                <div className="gradient-border-card p-6 text-left h-full">
                  <div className="text-3xl mb-4">{p.emoji}</div>
                  <p className="text-gray-300 italic leading-relaxed">
                    &ldquo;{p.quote}&rdquo;
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              You don&apos;t need to hire an AI team or spend months learning to code.
              You just need someone to show you{" "}
              <span className="text-white font-medium">
                which tools to use, how to set them up, and what to try first.
              </span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="section-label">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Getting started takes{" "}
                <span className="gradient-text">3 steps.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                No onboarding calls. No commitments. Just pick a guide and follow along.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 120}>
                <div className="gradient-border-card p-8 h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand-indigo/20 border border-brand-indigo/40 flex items-center justify-center text-brand-indigo font-bold text-lg mb-5">
                    {step.n}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUIDES ────────────────────────────────────────────────────────── */}
      <section id="guides" className="border-y border-brand-border bg-brand-card py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="section-label">Free Resources</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start here.{" "}
                <span className="gradient-text">It&apos;s all free.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Practical guides built around real small business problems. New guides added monthly.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <AnimatedSection key={g.title} delay={i * 100}>
                <div className="gradient-border-card p-7 flex flex-col h-full">
                  <div className="text-3xl mb-4">{g.emoji}</div>
                  <div className="mb-3">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        g.available
                          ? "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30"
                          : "bg-white/5 text-gray-500 border-brand-border"
                      }`}
                    >
                      {g.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{g.desc}</p>
                  {g.available ? (
                    <a
                      href={g.href || "/resources/5-hours-guide"}
                      className="text-sm font-medium text-brand-cyan hover:text-brand-indigo transition-colors"
                    >
                      Download Free →
                    </a>
                  ) : (
                    <a
                      href="#notify"
                      className="text-sm font-medium text-gray-500 hover:text-gray-400 transition-colors"
                    >
                      Notify me when ready →
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Email signup */}
          <AnimatedSection delay={300}>
            <div
              id="notify"
              className="mt-12 rounded-2xl border border-brand-indigo/30 bg-brand-indigo/5 p-8 md:p-12 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Get all three guides — free.
              </h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                New AI guides every month. Unsubscribe anytime. No spam — ever.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-brand-card border border-brand-border text-white placeholder-gray-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-brand-indigo transition-colors"
                  required
                />
                <button type="submit" className="btn-primary px-6 py-3 text-sm whitespace-nowrap">
                  Send Me the Guides
                </button>
              </form>
              <p className="text-gray-600 text-xs mt-4">
                Join other SMB owners learning AI — one step at a time.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY CLIQAI ────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="section-label">Why CliqAI</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built by a practitioner.
                <br />
                <span className="gradient-text">Not a theorist.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Everything here comes from AI I&apos;ve actually used to run my own businesses.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {whyPoints.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 80}>
                <div className="gradient-border-card p-7 h-full">
                  <div className="w-8 h-8 rounded-md bg-brand-indigo/20 border border-brand-indigo/30 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-indigo" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{w.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{w.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* About Vidhya */}
          <AnimatedSection delay={200}>
            <div className="gradient-border-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="section-label">About Vidhya</p>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hi — I built this because the gap bothered me.
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I&apos;m a data professional who has spent years working with AI at the
                  enterprise level. I kept seeing small business owners completely left out
                  of the AI conversation — not because they couldn&apos;t benefit, but because
                  no one was showing them where to start.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  So I started applying AI to my own businesses:{" "}
                  <span className="text-white">cliqai.ai</span> for data platform
                  consulting and{" "}
                  <span className="text-white">cliqhomes.in</span> for real estate in India.
                  Every guide I publish comes from something I&apos;ve actually tested.
                </p>
                <p className="text-white font-medium">
                  I&apos;m not teaching theory. I&apos;m sharing the playbook I&apos;m building in real
                  time — for you to use in yours.
                </p>
              </div>
              <div className="md:w-60 flex-shrink-0">
                <div className="bg-brand-navy border border-brand-border rounded-xl p-6 text-sm text-gray-400 space-y-3">
                  {[
                    "Data & AI professional, 10+ years",
                    "Founder — cliqai.ai data consulting",
                    "Founder — cliqhomes.in (India)",
                    "SMB AI advocate & coach",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3">
                      <span className="text-brand-cyan mt-0.5">▸</span>
                      <span>{line}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-brand-border">
                    <a
                      href="https://linkedin.com/company/cliqai"
                      className="text-brand-indigo hover:text-brand-cyan transition-colors text-sm"
                    >
                      Connect on LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-brand-border bg-brand-card py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label">Ready to Start?</p>
            <h2 className="text-4xl font-bold text-white mb-4">
              Your first quick win is{" "}
              <span className="gradient-text">one guide away.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              No jargon. No overwhelm. Just practical AI steps you can follow today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#guides" className="btn-primary px-8 py-3">
                Get the Free Guides →
              </a>
              <Link href="/" className="btn-secondary px-8 py-3">
                See Data Services
              </Link>
            </div>
            <p className="text-gray-600 text-sm mt-6">
              Also publishing at{" "}
              <a
                href="https://cliqai.blog"
                className="text-brand-cyan hover:text-brand-indigo transition-colors"
              >
                cliqai.blog
              </a>{" "}
              — the full AI journey, shared in public.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

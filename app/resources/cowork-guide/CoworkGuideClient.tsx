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
  { n: "01", title: "What is Claude Cowork?", desc: "What the tool actually does — and how it differs from just chatting with an AI." },
  { n: "02", title: "The journey: idea to live page", desc: "Every step from describing what I wanted to seeing it live at cliqai.ai." },
  { n: "03", title: "The mistakes (all 4 of them)", desc: "Wrong property names, overwritten files, git conflicts — documented honestly with fixes." },
  { n: "04", title: "How the workflow is set up now", desc: "The clean repeatable process I use every time I want to update my site." },
  { n: "05", title: "How all the tools connect", desc: "Cowork, GitHub, Vercel, Terminal — what each one does in plain English." },
  { n: "06", title: "What I actually learned", desc: "Not the technical things. The mindset things that matter more." },
  { n: "07", title: "How to do this yourself", desc: "The starting point for any SMB owner who wants to try this workflow." },
];

const mistakes = [
  {
    emoji: "🔤",
    title: "Wrong property name",
    what: "Used isInView — the hook returned inView",
    fix: "One find-and-replace in the file",
    lesson: "TypeScript errors tell you exactly what's wrong and on which line",
  },
  {
    emoji: "📄",
    title: "Overwrote Navbar.tsx",
    what: "Pasted the wrong file content into the wrong GitHub editor",
    fix: "GitHub History → last good commit → Browse files → copy → paste back",
    lesson: "You cannot permanently break something on GitHub. Every change is recorded.",
  },
  {
    emoji: "✏️",
    title: "Unescaped apostrophe",
    what: "React requires &apos; instead of ' in JSX text",
    fix: "Change What's to What&apos;s — one character",
    lesson: "These are tiny rules developers know by memory. AI knows them too.",
  },
  {
    emoji: "🔀",
    title: "Git conflict on push",
    what: "Local repo was behind GitHub — push rejected",
    fix: "git pull origin master --rebase then push",
    lesson: "Git is protecting you from data loss. The fix is almost always pull first.",
  },
];

export default function CoworkGuideClient() {
  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-16 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-card text-sm font-medium text-brand-cyan mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Free Guide · Cowork for Beginners
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            How I Built a Live Website
            <br />
            <span className="gradient-text">Without Writing a Single Line of Code</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            A real-world walkthrough of using Claude Cowork to deploy an AI coaching page —
            tools, mistakes, fixes, and everything in between. Every error documented. Nothing skipped.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/guides/cowork-beginners-guide.docx"
              download
              className="btn-primary px-8 py-3 text-base"
            >
              ↓ Download Free Guide
            </a>
            <a href="#chapters" className="btn-secondary px-8 py-3 text-base">
              Read It Here →
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Word document · Free · No email required
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="grid grid-cols-3 gap-px bg-brand-border rounded-2xl overflow-hidden mt-14 border border-brand-border">
            {[
              { value: "7", label: "Chapters" },
              { value: "4", label: "Mistakes documented" },
              { value: "1 day", label: "From idea to live" },
            ].map((s) => (
              <div key={s.label} className="bg-brand-navy py-7 px-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── HONEST CALLOUT ────────────────────────────────────────────────── */}
      <section className="border-y border-brand-border bg-brand-card py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-2xl font-bold text-white mb-4">
              &ldquo;I am not a developer. I had never written TypeScript.
              <br />
              <span className="gradient-text">I did not know what a git conflict was this morning.&rdquo;</span>
            </p>
            <p className="text-gray-400 text-lg">
              By the end of the session, I had shipped two new pages to a live website,
              fixed three build errors, and resolved a git conflict — all through conversation.
            </p>
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
                7 chapters.{" "}
                <span className="gradient-text">Nothing skipped.</span>
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

      {/* ── MISTAKES ──────────────────────────────────────────────────────── */}
      <section className="border-y border-brand-border bg-brand-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="section-label">The Honest Part</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                4 mistakes.{" "}
                <span className="gradient-text">All fixed in under 5 minutes.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Most AI guides skip the parts where things go wrong. This one doesn&apos;t.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {mistakes.map((m, i) => (
              <AnimatedSection key={m.title} delay={i * 80}>
                <div className="gradient-border-card p-7 h-full flex flex-col">
                  <div className="text-3xl mb-3">{m.emoji}</div>
                  <h3 className="text-white font-semibold text-base mb-3">{m.title}</h3>
                  <div className="space-y-2 flex-1">
                    <div className="text-sm">
                      <span className="text-gray-500 uppercase tracking-wider text-xs font-semibold">What happened: </span>
                      <span className="text-gray-300">{m.what}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-brand-cyan uppercase tracking-wider text-xs font-semibold">The fix: </span>
                      <span className="text-gray-300">{m.fix}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-brand-border">
                    <p className="text-sm text-brand-indigo italic">&ldquo;{m.lesson}&rdquo;</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE 3 COMMANDS ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="section-label">The Workflow</p>
              <h2 className="text-3xl font-bold mb-4">
                The only Terminal commands{" "}
                <span className="gradient-text">you need to know</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Copy these. Use them every time Cowork writes files you want to go live.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="rounded-xl border border-brand-border bg-slate-900 p-8 max-w-2xl mx-auto font-mono">
              <div className="text-gray-500 text-xs mb-4 uppercase tracking-wider">Terminal</div>
              {[
                { cmd: "git add .", comment: "# stage all changed files" },
                { cmd: 'git commit -m "describe your change"', comment: "# save a snapshot" },
                { cmd: "git push", comment: "# send to GitHub → Vercel deploys" },
              ].map((line, i) => (
                <div key={i} className="flex gap-4 mb-3 text-sm">
                  <span className="text-brand-indigo select-none">$</span>
                  <span className="text-brand-cyan">{line.cmd}</span>
                  <span className="text-gray-600 hidden sm:inline">{line.comment}</span>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-brand-border text-xs text-gray-500">
                Vercel deploys automatically within ~60 seconds of the push.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-brand-border bg-brand-card py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="section-label">Ready to Try It?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download the full guide.
              <br />
              <span className="gradient-text">All 7 chapters, free.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Includes the full workflow, every mistake documented, the tool comparison table,
              and your step-by-step starting point.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/guides/cowork-beginners-guide.docx"
                download
                className="btn-primary px-8 py-3"
              >
                ↓ Download Free Guide
              </a>
              <Link href="/coaching" className="btn-secondary px-8 py-3">
                See All Free Guides →
              </Link>
            </div>
            <p className="text-gray-600 text-sm mt-6 italic">
              This guide was built using Claude Cowork — the same tool it describes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

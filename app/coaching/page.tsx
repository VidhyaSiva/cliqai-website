// app/coaching/page.tsx
// Rebuilt to match the REAL cliqai.ai design system from tailwind.config.ts + globals.css
// Colors: brand-navy bg, brand-indigo primary, brand-cyan accent
// Imports: Navbar, Footer, useInView from existing project files

import type { Metadata } from "next";
import CoachingClient from "./CoachingClient";

export const metadata: Metadata = {
  title: "AI Coaching for Small Businesses — CliqAI",
  description:
    "Practical AI coaching for small business owners. Free guides, step-by-step walkthroughs, and hands-on support to help you start using AI — without the overwhelm.",
  openGraph: {
    title: "AI Coaching for Small Businesses — CliqAI",
    description:
      "No jargon. No tech background needed. Just practical AI steps that work for your business.",
    url: "https://cliqai.ai/coaching",
    siteName: "CliqAI",
    type: "website",
  },
};

export default function CoachingPage() {
  return <CoachingClient />;
}

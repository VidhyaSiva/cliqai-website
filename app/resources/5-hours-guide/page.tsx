import type { Metadata } from "next";
import GuideClient from "./GuideClient";

export const metadata: Metadata = {
  title: "How to Save 5 Hours a Week with AI — CliqAI",
  description:
    "5 specific time drains and one AI fix for each — with exact setup steps and free tools only. A free guide for small business owners.",
  openGraph: {
    title: "How to Save 5 Hours a Week with AI — CliqAI",
    description:
      "Free guide: 5 AI fixes for the biggest small business time drains. No tech background needed.",
    url: "https://cliqai.ai/resources/5-hours-guide",
    siteName: "CliqAI",
    type: "website",
  },
};

export default function GuidePage() {
  return <GuideClient />;
}

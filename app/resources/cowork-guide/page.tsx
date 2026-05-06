import type { Metadata } from "next";
import CoworkGuideClient from "./CoworkGuideClient";

export const metadata: Metadata = {
  title: "Cowork for Beginners: How I Built a Website Without Coding — CliqAI",
  description:
    "A real-world walkthrough of using Claude Cowork to deploy an AI coaching page — tools, mistakes, fixes, and everything in between. Free guide by Vidhya Sivakumar.",
  openGraph: {
    title: "Cowork for Beginners — CliqAI",
    description:
      "How I built a live website without writing a single line of code. Every mistake documented. Free guide.",
    url: "https://cliqai.ai/resources/cowork-guide",
    siteName: "CliqAI",
    type: "website",
  },
};

export default function CoworkGuidePage() {
  return <CoworkGuideClient />;
}

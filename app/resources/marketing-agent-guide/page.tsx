import type { Metadata } from "next";
import MarketingAgentClient from "./MarketingAgentClient";

export const metadata: Metadata = {
  title: "How to Build a Marketing Agent That Writes and Posts to LinkedIn — CliqAI",
  description:
    "How I built a fully automated LinkedIn posting system using Cowork, Gmail, and Make.com — no developer needed. Free guide by Vidhya Sivakumar.",
  openGraph: {
    title: "Build a Marketing Agent That Posts to LinkedIn — CliqAI",
    description:
      "Write a post, click one link, and it's on LinkedIn in seconds. Here's exactly how I built it.",
    url: "https://cliqai.ai/resources/marketing-agent-guide",
    siteName: "CliqAI",
    type: "website",
  },
};

export default function MarketingAgentPage() {
  return <MarketingAgentClient />;
}

import type { Metadata } from "next";
import AgentPluginClient from "./AgentPluginClient";

export const metadata: Metadata = {
  title: "Your First AI Agent: What a Plugin Is and How to Build One — CliqAI",
  description:
    "A plain-English guide to AI agents — what they are, why your business needs one, and how to build your first plugin today. Free guide by Vidhya Sivakumar.",
  openGraph: {
    title: "Your First AI Agent — CliqAI",
    description:
      "What a developer plugin is, why your business needs one, and how to build yours. Free guide.",
    url: "https://cliqai.ai/resources/agent-plugin-guide",
    siteName: "CliqAI",
    type: "website",
  },
};

export default function AgentPluginPage() {
  return <AgentPluginClient />;
}

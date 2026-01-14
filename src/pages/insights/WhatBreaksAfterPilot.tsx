import { insightArticles } from "@/data/insightsContent";
import { InsightTemplate } from "./InsightTemplate";
import NotFound from "@/pages/NotFound";

export default function WhatBreaksAfterPilot() {
  const content = insightArticles.find((a) => a.slug === "what-breaks-after-ai-pilot");
  
  if (!content) {
    return <NotFound />;
  }

  return <InsightTemplate content={content} />;
}

import { insightArticles } from "@/data/insightsContent";
import { InsightTemplate } from "./InsightTemplate";
import NotFound from "@/pages/NotFound";

export default function WhyAutomationsFailWithoutOwnership() {
  const content = insightArticles.find((a) => a.slug === "why-ai-automations-fail-without-ownership");
  
  if (!content) {
    return <NotFound />;
  }

  return <InsightTemplate content={content} />;
}

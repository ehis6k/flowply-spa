import { insightArticles } from "@/data/insightsContent";
import { InsightTemplate } from "./InsightTemplate";
import NotFound from "@/pages/NotFound";

export default function IncidentsInVoiceAgents() {
  const content = insightArticles.find((a) => a.slug === "incidents-in-voice-agents");
  
  if (!content) {
    return <NotFound />;
  }

  return <InsightTemplate content={content} />;
}

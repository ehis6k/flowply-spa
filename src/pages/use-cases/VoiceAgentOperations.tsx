import { useCasePages } from "@/data/useCaseContent";
import { UseCaseTemplate } from "./UseCaseTemplate";
import NotFound from "@/pages/NotFound";

export default function VoiceAgentOperations() {
  const content = useCasePages.find((p) => p.slug === "voice-agent-operations");
  
  if (!content) {
    return <NotFound />;
  }

  return <UseCaseTemplate content={content} />;
}

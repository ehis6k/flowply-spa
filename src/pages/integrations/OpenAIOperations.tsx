import { integrationPages } from "@/data/integrationContent";
import { IntegrationTemplate } from "./IntegrationTemplate";
import NotFound from "@/pages/NotFound";

export default function OpenAIOperations() {
  const content = integrationPages.find((p) => p.slug === "openai-operations");
  
  if (!content) {
    return <NotFound />;
  }

  return <IntegrationTemplate content={content} />;
}

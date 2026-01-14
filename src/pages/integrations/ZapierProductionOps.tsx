import { integrationPages } from "@/data/integrationContent";
import { IntegrationTemplate } from "./IntegrationTemplate";
import NotFound from "@/pages/NotFound";

export default function ZapierProductionOps() {
  const content = integrationPages.find((p) => p.slug === "zapier-production-ops");
  
  if (!content) {
    return <NotFound />;
  }

  return <IntegrationTemplate content={content} />;
}

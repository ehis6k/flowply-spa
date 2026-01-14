import { integrationPages } from "@/data/integrationContent";
import { IntegrationTemplate } from "./IntegrationTemplate";
import NotFound from "@/pages/NotFound";

export default function SalesforceAutomation() {
  const content = integrationPages.find((p) => p.slug === "salesforce-automation");
  
  if (!content) {
    return <NotFound />;
  }

  return <IntegrationTemplate content={content} />;
}

import { useCasePages } from "@/data/useCaseContent";
import { UseCaseTemplate } from "./UseCaseTemplate";
import NotFound from "@/pages/NotFound";

export default function CustomerSupportAutomation() {
  const content = useCasePages.find((p) => p.slug === "customer-support-automation");
  
  if (!content) {
    return <NotFound />;
  }

  return <UseCaseTemplate content={content} />;
}

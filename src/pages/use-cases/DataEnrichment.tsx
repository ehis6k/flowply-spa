import { useCasePages } from "@/data/useCaseContent";
import { UseCaseTemplate } from "./UseCaseTemplate";
import NotFound from "@/pages/NotFound";

export default function DataEnrichment() {
  const content = useCasePages.find((p) => p.slug === "data-enrichment");
  
  if (!content) {
    return <NotFound />;
  }

  return <UseCaseTemplate content={content} />;
}

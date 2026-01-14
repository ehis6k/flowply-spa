import { useCasePages } from "@/data/useCaseContent";
import { UseCaseTemplate } from "./UseCaseTemplate";
import NotFound from "@/pages/NotFound";

export default function AIIntakeOperations() {
  const content = useCasePages.find((p) => p.slug === "ai-intake-operations");
  
  if (!content) {
    return <NotFound />;
  }

  return <UseCaseTemplate content={content} />;
}

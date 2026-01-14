import { useCasePages } from "@/data/useCaseContent";
import { UseCaseTemplate } from "./UseCaseTemplate";
import NotFound from "@/pages/NotFound";

export default function ClaimsBackoffice() {
  const content = useCasePages.find((p) => p.slug === "claims-backoffice");
  
  if (!content) {
    return <NotFound />;
  }

  return <UseCaseTemplate content={content} />;
}

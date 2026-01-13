import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "primary";
  spacing?: "default" | "large" | "hero";
}

export function Section({ 
  children, 
  className, 
  id,
  background = "default",
  spacing = "default" 
}: SectionProps) {
  const bgClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    primary: "bg-primary text-primary-foreground",
  };

  const spacingClasses = {
    default: "py-20 lg:py-24",
    large: "py-24 lg:py-32",
    hero: "pt-32 pb-20 lg:pt-40 lg:pb-24",
  };

  return (
    <section 
      id={id}
      className={cn(
        bgClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}

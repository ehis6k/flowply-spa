import { useState } from "react";
import { motion, useReducedMotion, type Easing } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useCases, useCaseTags, type UseCaseTag } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";

const easeOut: Easing = "easeOut";

export function UseCases() {
  const [activeFilter, setActiveFilter] = useState<UseCaseTag | null>(null);
  const { trackUseCaseClick } = useAnalytics();
  const shouldReduceMotion = useReducedMotion();

  const filteredUseCases = activeFilter 
    ? useCases.filter(uc => uc.tags.includes(activeFilter))
    : useCases;

  return (
    <Section background="muted" id="use-cases">
      <SectionHeader 
        title="Use cases" 
        subtitle="From prototype to production ops."
      />

      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeFilter === null
              ? "bg-accent text-accent-foreground"
              : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
          }`}
        >
          All
        </button>
        {useCaseTags.map((tag) => (
          <button
            key={tag.value}
            onClick={() => setActiveFilter(tag.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === tag.value
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            {tag.label}
          </button>
        ))}
      </div>

      {/* Use Case Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {filteredUseCases.map((useCase, index) => (
          <motion.div
            key={useCase.slug}
            layout
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.08, ease: easeOut }}
            className="group"
          >
            <Link 
              to={`/scope#${useCase.slug}`}
              onClick={() => trackUseCaseClick(useCase.title)}
              className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary text-foreground flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:text-accent group-hover:scale-110 transition-all">
                <useCase.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground flex-1">
                {useCase.title}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

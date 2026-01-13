import { motion, useReducedMotion, type Easing } from "framer-motion";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { benefits } from "@/data/siteContent";

const easeOut: Easing = "easeOut";

export function WhyFlowPly() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section background="default">
      <SectionHeader 
        title="Why FlowPly" 
        subtitle="Deploy faster. Break less."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.1, ease: easeOut }}
            className="text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
              <benefit.icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {benefit.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

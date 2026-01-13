import { motion } from "framer-motion";
import type { Step } from "@/data/siteContent";

interface TimelineStepsProps {
  steps: Step[];
  className?: string;
}

export function TimelineSteps({ steps, className = "" }: TimelineStepsProps) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-border" />
        
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative text-center"
          >
            {/* Step indicator */}
            <div className="relative z-10 w-24 h-24 rounded-2xl bg-card border border-border shadow-sm flex flex-col items-center justify-center mx-auto mb-6">
              <step.icon className="h-8 w-8 text-accent mb-1" />
              <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
            </div>
            
            {/* Content */}
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {step.title}
            </h3>
            <span className="text-xs font-medium text-accent mb-3 block">
              {step.duration}
            </span>
            <p className="text-sm text-muted-foreground">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

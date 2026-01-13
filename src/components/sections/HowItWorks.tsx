import { motion } from "framer-motion";
import { ClipboardCheck, Shield, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Assessment",
    duration: "1–2 days",
    description: "We audit your current automation stack and identify operational gaps.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Deployment hardening",
    duration: "1–2 weeks",
    description: "Guardrails, monitoring, and incident response protocols get implemented.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Run & report",
    duration: "Ongoing",
    description: "Ongoing operations, proactive monitoring, and detailed performance reporting.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We take ownership of the run.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}

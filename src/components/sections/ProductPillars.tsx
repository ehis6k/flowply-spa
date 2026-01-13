import { motion } from "framer-motion";
import { ArrowRight, Activity, Brain, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Activity,
    title: "Managed Operations",
    href: "/scope#managed-operations",
    features: [
      "Monitoring, alerting, incident response",
      "Change management",
      "SLA & uptime guarantees",
    ],
  },
  {
    icon: Brain,
    title: "AI Orchestration",
    href: "/scope#ai-orchestration",
    features: [
      "Prompt/version control",
      "HITL (human-in-the-loop)",
      "Guardrails & audit trails",
    ],
  },
  {
    icon: Workflow,
    title: "Integrations & Workflows",
    href: "/scope#integrations",
    features: [
      "API connections",
      "Data sync & routing",
      "Automation reliability",
    ],
  },
];

export function ProductPillars() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-accent/50 transition-all duration-300">
                {/* Icon with animation */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <pillar.icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pillar.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="text-sm text-muted-foreground flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 + 0.3 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Link */}
                <Button asChild variant="link" className="p-0 h-auto text-accent group/btn">
                  <Link to={pillar.href}>
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

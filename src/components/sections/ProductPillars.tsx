import { motion } from "framer-motion";
import { ArrowRight, Activity, Brain, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Activity,
    title: "Managed Operations",
    features: [
      "Monitoring, alerting, incident response",
      "Change management",
      "SLA & uptime guarantees",
    ],
  },
  {
    icon: Brain,
    title: "AI Orchestration",
    features: [
      "Prompt/version control",
      "HITL (human-in-the-loop)",
      "Guardrails & audit trails",
    ],
  },
  {
    icon: Workflow,
    title: "Integrations & Workflows",
    features: [
      "API connections",
      "Data sync & routing",
      "Automation reliability",
    ],
  },
];

export function ProductPillars() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <pillar.icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {pillar.title}
              </h3>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pillar.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Button variant="link" className="p-0 h-auto text-accent group/btn">
                Learn more
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { TrendingDown, Zap, BarChart3, Shield } from "lucide-react";

const outcomes = [
  {
    icon: TrendingDown,
    title: "Fewer incidents",
    description: "Proactive monitoring catches issues before they impact users.",
  },
  {
    icon: Zap,
    title: "Faster deployments",
    description: "Streamlined change management accelerates your release cycles.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Clear metrics and reporting on automation performance.",
  },
  {
    icon: Shield,
    title: "Compliance-ready ops",
    description: "Audit trails and governance built into every workflow.",
  },
];

export function WhyFlowPly() {
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
            Why FlowPly
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Deploy faster. Break less.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <outcome.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {outcome.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const metrics = [
  { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
  { value: 24, suffix: "/7", label: "Operations", decimals: 0 },
  { prefix: "<", value: 15, suffix: "min", label: "Response", decimals: 0 },
  { value: 0, label: "SOC2", displayValue: "SOC2", decimals: 0 },
];

export function SocialProof() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-10">
            Trusted by teams running mission-critical automations
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground transition-colors group-hover:text-accent">
                  {metric.displayValue ? (
                    <span>{metric.displayValue}</span>
                  ) : (
                    <AnimatedCounter 
                      value={metric.value} 
                      prefix={metric.prefix}
                      suffix={metric.suffix} 
                      decimals={metric.decimals}
                      duration={2000}
                    />
                  )}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

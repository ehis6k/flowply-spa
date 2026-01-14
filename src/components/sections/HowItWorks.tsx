import { motion } from "framer-motion";
import { ClipboardCheck, Shield, BarChart3 } from "lucide-react";
import operationalFlowVideo from "@/assets/operational_flow.mp4";

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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-1 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-start gap-6 lg:text-left text-center lg:flex-row flex-col lg:items-start items-center"
              >
                {/* Step indicator */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-card border border-border shadow-sm flex flex-col items-center justify-center flex-shrink-0">
                  <step.icon className="h-7 w-7 text-accent mb-1" />
                  <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-medium text-accent mb-2 block">
                    {step.duration}
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <video 
                src={operationalFlowVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/10 via-transparent to-accent/5 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

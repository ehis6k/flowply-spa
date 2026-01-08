import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, FileSearch, AlertTriangle, Shield, ChevronRight } from "lucide-react";

const controls = [
  {
    id: "hitl",
    icon: UserCheck,
    title: "Human-in-the-Loop",
    shortDesc: "Expert oversight at critical decision points",
    fullDesc: "Our trained operators review and validate AI outputs at configurable checkpoints. From spot-checks to full review flows, we ensure accuracy before actions are taken.",
    features: ["Configurable review thresholds", "Domain-expert validation", "Correction feedback loops", "Real-time intervention"],
  },
  {
    id: "audit",
    icon: FileSearch,
    title: "Audit Trails",
    shortDesc: "Complete visibility into every operation",
    fullDesc: "Every prompt, response, and decision is logged with full context. Searchable, exportable, and ready for compliance reviews or debugging.",
    features: ["Immutable logging", "Full prompt history", "Decision rationale capture", "Export-ready reports"],
  },
  {
    id: "escalation",
    icon: AlertTriangle,
    title: "Escalation Protocols",
    shortDesc: "Tiered response for edge cases",
    fullDesc: "When AI confidence drops or anomalies are detected, issues escalate through defined tiers—from automated retry to human review to your internal team.",
    features: ["Confidence thresholds", "Tiered escalation paths", "SLA-backed response", "Direct client notification"],
  },
  {
    id: "compliance",
    icon: Shield,
    title: "Compliance Framework",
    shortDesc: "Built for regulated industries",
    fullDesc: "SOC2 Type II certified operations. HIPAA-ready workflows. GDPR-compliant data handling. We build compliance into every operational process.",
    features: ["SOC2 Type II certified", "HIPAA-ready workflows", "GDPR compliance", "Regular third-party audits"],
  },
];

export function GovernanceControls() {
  const [activeControl, setActiveControl] = useState(controls[0].id);

  const active = controls.find((c) => c.id === activeControl) || controls[0];

  return (
    <section id="controls" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            QEC Controls
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality, Escalation, and Compliance—baked into every operation. 
            Enterprise-grade governance for AI that actually works in production.
          </p>
        </motion.div>

        {/* Interactive Controls Display */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Control Selector */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {controls.map((control) => (
                <button
                  key={control.id}
                  onClick={() => setActiveControl(control.id)}
                  className={`
                    flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink
                    ${activeControl === control.id
                      ? "bg-accent text-accent-foreground shadow-lg"
                      : "bg-card border border-border hover:border-accent/30"
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                    ${activeControl === control.id
                      ? "bg-accent-foreground/20"
                      : "bg-accent/10 text-accent"
                    }
                  `}>
                    <control.icon className="h-5 w-5" />
                  </div>
                  <div className="hidden sm:block">
                    <div className="font-semibold text-sm">{control.title}</div>
                    <div className={`text-xs ${activeControl === control.id ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
                      {control.shortDesc}
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 ml-auto hidden lg:block ${activeControl === control.id ? "" : "text-muted-foreground"}`} />
                </button>
              ))}
            </div>

            {/* Control Detail */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center">
                      <active.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{active.title}</h3>
                      <p className="text-accent">{active.shortDesc}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {active.fullDesc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {active.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

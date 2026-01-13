import { motion } from "framer-motion";
import { Check, X, ArrowRight, Activity, Brain, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABand } from "@/components/shared/CTABand";
import { PageMeta } from "@/components/shared/PageMeta";
import { scopeContent, serviceCards, useCases, pageMeta } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";

const Scope = () => {
  const { trackUseCaseClick } = useAnalytics();

  // Get individual service cards for detailed sections
  const managedOps = serviceCards.find(c => c.slug === "managed-operations");
  const aiOrch = serviceCards.find(c => c.slug === "ai-orchestration");
  const integrations = serviceCards.find(c => c.slug === "integrations");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta title={pageMeta.scope.title} description={pageMeta.scope.description} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Scope of{" "}
                <span className="text-gradient-accent">services</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Clear boundaries, clear responsibilities. Here's exactly what 
                FlowPly manages — and what remains yours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* In Scope / Out of Scope */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* In Scope */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{scopeContent.inScope.title}</h2>
                    <p className="text-sm text-muted-foreground">{scopeContent.inScope.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {scopeContent.inScope.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Out of Scope */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-muted text-muted-foreground flex items-center justify-center">
                    <X className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{scopeContent.outOfScope.title}</h2>
                    <p className="text-sm text-muted-foreground">{scopeContent.outOfScope.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {scopeContent.outOfScope.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Managed Operations */}
        <section id="managed-operations" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Managed Operations" 
              subtitle="Monitoring, alerting & incident response for your automation stack"
            />
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">What's included</h3>
                    <p className="text-muted-foreground">
                      We take ownership of your automation infrastructure's health and performance.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "24/7 monitoring of all automation endpoints",
                    "Incident detection and response",
                    "Change management with approval workflows",
                    "SLA tracking and uptime guarantees",
                    "Performance optimization recommendations",
                    "Monthly reporting and reviews"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Orchestration */}
        <section id="ai-orchestration" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="AI Orchestration" 
              subtitle="HITL, guardrails & audit trails for your AI systems"
            />
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">What's included</h3>
                    <p className="text-muted-foreground">
                      We manage the operational complexity of your AI systems with proper controls.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Prompt version control and management",
                    "Human-in-the-loop approval gates",
                    "Output guardrails and quality checks",
                    "Complete audit trails for all AI decisions",
                    "Model performance monitoring",
                    "Escalation paths for edge cases"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integrations & Workflows */}
        <section id="integrations" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Integrations & Workflows" 
              subtitle="API connections & data routing across your stack"
            />
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">What's included</h3>
                    <p className="text-muted-foreground">
                      We configure and maintain your integrations — ensuring data flows reliably.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "API connection setup and management",
                    "Data sync and routing configuration",
                    "Retry logic and error handling",
                    "Rate limiting and queue management",
                    "Integration health monitoring",
                    "Workflow optimization"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Use cases" 
              subtitle="From prototype to production ops."
            />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  id={useCase.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary text-foreground flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      <useCase.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-foreground block">
                        {useCase.title}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {useCase.description}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <CTABand />
      </main>
      <Footer />
    </div>
  );
};

export default Scope;
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABand } from "@/components/shared/CTABand";
import { PageMeta } from "@/components/shared/PageMeta";
import { controlsContent, trustItems, pageMeta } from "@/data/siteContent";

const Controls = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta title={pageMeta.controls.title} description={pageMeta.controls.description} />
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
                Controls &{" "}
                <span className="text-gradient-accent">reliability</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Guardrails, human-in-the-loop, and audit trails that keep your 
                automations reliable and compliant.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Monitoring & Alerting */}
        <section id="monitoring" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title={controlsContent.monitoring.title}
              subtitle={controlsContent.monitoring.description}
            />
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {controlsContent.monitoring.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Human-in-the-Loop */}
        <section id="ai-orchestration" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title={controlsContent.humanInTheLoop.title}
              subtitle={controlsContent.humanInTheLoop.description}
            />
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {controlsContent.humanInTheLoop.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit & Compliance */}
        <section id="audit-compliance" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title={controlsContent.auditTrails.title}
              subtitle={controlsContent.auditTrails.description}
            />
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {controlsContent.auditTrails.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Trust */}
        <section id="security" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Enterprise-grade trust"
              subtitle="Built for teams that take security seriously."
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
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

export default Controls;

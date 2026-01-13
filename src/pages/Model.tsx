import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TimelineSteps } from "@/components/shared/TimelineSteps";
import { HeroDiagram } from "@/components/shared/HeroDiagram";
import { CTABand } from "@/components/shared/CTABand";
import { PageMeta } from "@/components/shared/PageMeta";
import { howItWorksSteps, modelContent, pageMeta } from "@/data/siteContent";

const Model = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta title={pageMeta.model.title} description={pageMeta.model.description} />
      <Header />
      <main>
        {/* Hero with Diagram */}
        <section className="pt-32 pb-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The FlowPly{" "}
                <span className="text-gradient-accent">ops layer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We sit between your SaaS platforms and your business processes, 
                handling the operational complexity so you can focus on outcomes.
              </p>
            </motion.div>

            <HeroDiagram />
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="How it works" 
              subtitle="We take ownership of the run."
            />
            <TimelineSteps steps={howItWorksSteps} />
          </div>
        </section>

        {/* Ownership Clarity */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title={modelContent.ownership.title}
              subtitle={modelContent.ownership.description}
            />
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* FlowPly owns */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-accent/5 rounded-2xl p-8 border-2 border-accent"
              >
                <h3 className="text-xl font-bold text-accent mb-6">
                  {modelContent.ownership.flowply.title}
                </h3>
                <ul className="space-y-3">
                  {modelContent.ownership.flowply.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Customer owns */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {modelContent.ownership.customer.title}
                </h3>
                <ul className="space-y-3">
                  {modelContent.ownership.customer.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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

export default Model;

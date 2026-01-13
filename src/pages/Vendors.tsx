import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTABand } from "@/components/shared/CTABand";
import { PageMeta } from "@/components/shared/PageMeta";
import { vendorsContent, pageMeta } from "@/data/siteContent";

const Vendors = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta title={pageMeta.vendors.title} description={pageMeta.vendors.description} />
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
                Vendor{" "}
                <span className="text-gradient-accent">integrations</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're vendor-agnostic. We configure and manage your existing tools — 
                not build custom integrations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Integration Categories */}
        <section id="integrations" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Integration categories"
              subtitle="How we connect and manage your stack"
            />
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {vendorsContent.integrationCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  id={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Tooling */}
        <section id="supported-tooling" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title={vendorsContent.supportedTooling.title}
              subtitle={vendorsContent.supportedTooling.description}
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {vendorsContent.supportedTooling.categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h3 className="text-sm font-semibold text-foreground mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding Checklist */}
        <section id="onboarding" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title={vendorsContent.onboardingChecklist.title}
              subtitle={vendorsContent.onboardingChecklist.description}
            />
            
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {vendorsContent.onboardingChecklist.steps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0 font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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

export default Vendors;

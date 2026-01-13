import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CardGrid } from "@/components/shared/CardGrid";
import { CTABand } from "@/components/shared/CTABand";
import { PageMeta } from "@/components/shared/PageMeta";
import { scopeContent, serviceCards, useCases, pageMeta } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";

const Scope = () => {
  const { trackUseCaseClick } = useAnalytics();

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

        {/* Service Areas */}
        <section id="managed-operations" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Service areas" 
              subtitle="Three pillars of managed operations"
            />
            <CardGrid cards={serviceCards} />
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
                  <Link 
                    to={`/scope#${useCase.slug}`}
                    onClick={() => trackUseCaseClick(useCase.title)}
                    className="flex items-center gap-4"
                  >
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
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </Link>
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

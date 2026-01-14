import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/shared/PageMeta";
import { CTABand } from "@/components/shared/CTABand";
import type { UseCasePageContent } from "@/data/useCaseContent";

interface UseCaseTemplateProps {
  content: UseCasePageContent;
}

export function UseCaseTemplate({ content }: UseCaseTemplateProps) {
  const Icon = content.icon;

  return (
    <div className="min-h-screen bg-background">
      <PageMeta title={content.meta.title} description={content.meta.description} />
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <Link 
              to="/scope#use-cases" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Use Cases
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Use Case
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {content.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {content.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {content.context.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {content.context.description}
                </p>
                <ul className="space-y-3">
                  {content.context.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Breaks Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {content.whatBreaks.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {content.whatBreaks.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {content.whatBreaks.items.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-destructive/10 rounded-lg flex-shrink-0">
                        <ItemIcon className="h-5 w-5 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Risks Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {content.risks.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {content.risks.description}
                </p>
                <ul className="space-y-4">
                  {content.risks.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Run Section */}
        <section className="py-16 md:py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {content.howWeRun.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {content.howWeRun.description}
                </p>
                <ul className="space-y-4">
                  {content.howWeRun.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Monitoring Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {content.monitoring.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {content.monitoring.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {content.monitoring.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-primary pl-6 py-2"
                >
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KPIs Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {content.kpis.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {content.kpis.items.map((kpi, index) => {
                const KpiIcon = kpi.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 text-center"
                  >
                    <KpiIcon className="h-6 w-6 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">{kpi.value}</div>
                    <div className="text-xs text-muted-foreground">{kpi.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {content.ctaTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {content.ctaDescription}
              </p>
              <Button asChild size="lg" variant="accent">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Schedule Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <CTABand />
      </main>

      <Footer />
    </div>
  );
}

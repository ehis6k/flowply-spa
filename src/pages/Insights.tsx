import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageMeta } from "@/components/shared/PageMeta";
import { CTABand } from "@/components/shared/CTABand";
import { insightArticles } from "@/data/insightsContent";

export default function Insights() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta 
        title="Insights | FlowPly - Operations Notes" 
        description="Operational insights from running AI automation in production. Real challenges, practical solutions, no marketing fluff." 
      />
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4 block">
                Operations Notes
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Insights
              </h1>
              <p className="text-xl text-muted-foreground">
                Operational lessons from running AI automation in production. 
                Real challenges, practical guidance, no marketing content.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 max-w-4xl">
              {insightArticles.map((article, index) => {
                const ArticleIcon = article.icon;
                return (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/insights/${article.slug}`}
                      className="block bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start gap-6">
                        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <ArticleIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <time dateTime={article.date}>
                              {new Date(article.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </time>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {article.readingTime}
                            </span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-muted-foreground mb-4">
                            {article.subtitle}
                          </p>
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                            Read article
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Subscription / CTA */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Prefer a conversation?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Schedule an operations assessment to discuss your specific challenges.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Book an assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <CTABand />
      </main>

      <Footer />
    </div>
  );
}

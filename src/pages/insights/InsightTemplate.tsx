import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/shared/PageMeta";
import { CTABand } from "@/components/shared/CTABand";
import type { InsightArticle } from "@/data/insightsContent";

interface InsightTemplateProps {
  content: InsightArticle;
}

export function InsightTemplate({ content }: InsightTemplateProps) {
  const Icon = content.icon;

  // Generate JSON-LD for article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.meta.description,
    datePublished: content.date,
    author: {
      "@type": "Organization",
      name: "FlowPly",
    },
    publisher: {
      "@type": "Organization",
      name: "FlowPly",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <PageMeta title={content.meta.title} description={content.meta.description} />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <Link 
              to="/insights" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
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
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={content.date}>
                    {new Date(content.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {content.readingTime}
                  </span>
                </div>
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

        {/* Article Content */}
        <article className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Intro */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed mb-12"
              >
                {content.content.intro}
              </motion.p>

              {/* Sections */}
              {content.content.sections.map((section, sectionIndex) => (
                <motion.section
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-muted-foreground leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.section>
              ))}

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-l-4 border-primary pl-6 py-2 my-12"
              >
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  {content.content.conclusion}
                </p>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Article CTA */}
        <section className="py-16 md:py-20 bg-primary/5">
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
                <Link to={content.ctaLink} className="inline-flex items-center gap-2">
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

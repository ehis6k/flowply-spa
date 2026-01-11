import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            We run your automations{" "}
            <span className="text-gradient-accent">in production.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            FlowPly manages, monitors and improves your deployed AI & workflow 
            systems — with SLAs, human escalation and measurable outcomes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero-accent" size="lg" className="w-full sm:w-auto group">
              Book an assessment
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="lg" className="w-full sm:w-auto group">
              <Play className="h-4 w-4 mr-2" />
              See how it works
            </Button>
          </motion.div>

          {/* Hero Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
              {/* SaaS Platform */}
              <div className="flex-1 max-w-[200px]">
                <div className="bg-secondary rounded-xl p-4 border border-border text-center">
                  <span className="text-sm font-medium text-foreground">SaaS Platform</span>
                  <p className="text-xs text-muted-foreground mt-1">Your AI tools</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="hidden md:flex items-center px-2">
                <div className="h-px w-8 bg-border" />
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="md:hidden h-6 w-px bg-border" />
              
              {/* Customer Process */}
              <div className="flex-1 max-w-[200px]">
                <div className="bg-secondary rounded-xl p-4 border border-border text-center">
                  <span className="text-sm font-medium text-foreground">Customer Process</span>
                  <p className="text-xs text-muted-foreground mt-1">Your workflows</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="hidden md:flex items-center px-2">
                <div className="h-px w-8 bg-border" />
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="md:hidden h-6 w-px bg-border" />
              
              {/* FlowPly Ops Layer */}
              <div className="flex-1 max-w-[220px]">
                <div className="bg-accent/10 rounded-xl p-4 border-2 border-accent text-center shadow-[0_0_30px_hsl(var(--amber)/0.2)]">
                  <span className="text-sm font-bold text-accent">FlowPly Ops Layer</span>
                  <p className="text-xs text-muted-foreground mt-1">Monitoring • Escalation • Optimization</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

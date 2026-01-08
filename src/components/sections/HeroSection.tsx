import { motion } from "framer-motion";
import { ArrowRight, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-network-pattern">
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Managed Operations for AI SaaS
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            We <span className="text-gradient-accent">Manage</span> Your AI Tools.
            <br />
            <span className="text-muted-foreground">We Don't Build Them.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            FlowPly sits between AI vendors and enterprise customers—running the 
            operational layer that makes AI actually work in production.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero-accent" size="lg" className="w-full sm:w-auto group">
              <Users className="h-5 w-5 mr-2" />
              For Customers
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="lg" className="w-full sm:w-auto group">
              <Building2 className="h-5 w-5 mr-2" />
              For Vendors
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-lg font-bold text-foreground">99%</span>
              </div>
              <span className="text-sm">Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-lg font-bold text-foreground">24/7</span>
              </div>
              <span className="text-sm">Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-lg font-bold text-foreground">SOC2</span>
              </div>
              <span className="text-sm">Compliant</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-accent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

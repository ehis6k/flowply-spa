import { motion, useReducedMotion, type Easing } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { heroContent, globalCTAs } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";

const easeOut: Easing = "easeOut";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const arrowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { trackCTAPrimary, trackCTASecondary } = useAnalytics();

  const getTransition = (delay: number) => 
    shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay, ease: easeOut };

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.1)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            {heroContent.headline}{" "}
            <span className="text-gradient-accent">{heroContent.headlineAccent}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.2)}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {heroContent.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getTransition(0.3)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              asChild
              variant="hero-accent" 
              size="lg" 
              className="w-full sm:w-auto group"
              onClick={() => trackCTAPrimary("hero")}
            >
              <Link to={globalCTAs.primary.href}>
                {globalCTAs.primary.label}
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="hero-outline" 
              size="lg" 
              className="w-full sm:w-auto group"
              onClick={() => trackCTASecondary("hero")}
            >
              <Link to={globalCTAs.secondary.href}>
                <Play className="h-4 w-4 mr-2" />
                {globalCTAs.secondary.label}
              </Link>
            </Button>
          </motion.div>

          {/* Hero Diagram */}
          <HeroDiagram />
        </div>
      </div>
    </section>
  );
}

function HeroDiagram() {
  const shouldReduceMotion = useReducedMotion();
  
  const getCardTransition = (delay: number) => 
    shouldReduceMotion 
      ? { duration: 0 } 
      : { duration: 0.4, delay, ease: easeOut };
  
  const getArrowTransition = (delay: number) => 
    shouldReduceMotion 
      ? { duration: 0 } 
      : { duration: 0.25, delay: delay + 0.15, ease: easeOut };

  const items = heroContent.diagram.items;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
        {items.map((item, index) => (
          <div key={item.title} className="contents">
            {/* Card */}
            <motion.div
              variants={cardVariants}
              transition={getCardTransition(index * 0.3)}
              className={`flex-1 ${item.isHighlighted ? "max-w-[220px]" : "max-w-[200px]"}`}
            >
              <div 
                className={`rounded-xl p-4 text-center transition-all duration-300 hover:scale-[1.02] ${
                  item.isHighlighted 
                    ? "bg-accent/10 border-2 border-accent shadow-[0_0_30px_hsl(var(--amber)/0.2)]"
                    : "bg-secondary border border-border hover:border-accent/30"
                }`}
              >
                <span className={`text-sm font-medium ${item.isHighlighted ? "font-bold text-accent" : "text-foreground"}`}>
                  {item.title}
                </span>
                <p className="text-xs text-muted-foreground mt-1">{item.subtitle}</p>
              </div>
            </motion.div>

            {/* Arrow (not after last item) */}
            {index < items.length - 1 && (
              <>
                {/* Desktop arrow */}
                <motion.div 
                  variants={arrowVariants}
                  transition={getArrowTransition(index * 0.3)}
                  className="hidden md:flex items-center px-2"
                >
                  <div className="h-px w-8 bg-border" />
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </motion.div>
                {/* Mobile arrow */}
                <motion.div 
                  variants={arrowVariants}
                  transition={getArrowTransition(index * 0.3)}
                  className="md:hidden h-6 w-px bg-border" 
                />
              </>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

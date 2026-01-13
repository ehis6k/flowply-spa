import { motion, useReducedMotion, type Easing } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { heroContent, globalCTAs } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";
import { FloatingOrbs } from "@/components/shared/FloatingOrbs";
import { FlowLines } from "@/components/shared/FlowLines";
import heroTeamImage from "@/assets/hero-team.png";

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
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden bg-background bg-network-pattern">
      {/* Floating orbs background */}
      <FloatingOrbs variant="hero" />
      
      {/* Flow lines animation */}
      <FlowLines />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
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
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              {heroContent.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(0.3)}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 lg:mb-0"
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
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={getTransition(0.4)}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroTeamImage} 
                alt="Team werkt samen aan data analytics dashboards"
                className="w-full h-auto object-cover opacity-90"
              />
              {/* Subtle overlay for brand cohesion */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/15 via-transparent to-accent/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Hero Diagram - below on desktop, after CTAs on mobile */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.5)}
          className="mt-16"
        >
          <HeroDiagram />
        </motion.div>
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
      className="max-w-3xl mx-auto relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0">
        {items.map((item, index) => (
          <div key={item.title} className="contents">
            {/* Card */}
            <motion.div
              variants={cardVariants}
              transition={getCardTransition(index * 0.3)}
              whileHover={item.isHighlighted ? { scale: 1.05 } : { scale: 1.02 }}
              className={`flex-1 ${item.isHighlighted ? "max-w-[220px]" : "max-w-[200px]"}`}
            >
              <div 
                className={`rounded-xl p-4 text-center transition-all duration-300 ${
                  item.isHighlighted 
                    ? "bg-accent/10 border-2 border-accent shadow-[0_0_30px_hsl(var(--amber)/0.2)] hover:shadow-[0_0_50px_hsl(var(--amber)/0.35)] animate-glow"
                    : "bg-secondary/80 backdrop-blur-sm border border-border hover:border-accent/30 hover:bg-secondary"
                }`}
              >
                <span className={`text-sm font-medium ${item.isHighlighted ? "font-bold text-accent" : "text-foreground"}`}>
                  {item.title}
                </span>
                <p className="text-xs text-muted-foreground mt-1">{item.subtitle}</p>
              </div>
            </motion.div>

            {/* Arrow with animated flow */}
            {index < items.length - 1 && (
              <>
                {/* Desktop arrow */}
                <motion.div 
                  variants={arrowVariants}
                  transition={getArrowTransition(index * 0.3)}
                  className="hidden md:flex items-center px-2 relative"
                >
                  <div className="h-px w-8 bg-border relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-y-0 w-4 bg-gradient-to-r from-transparent via-accent to-transparent"
                      animate={{ x: [-16, 32] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: index * 0.5,
                        ease: "linear" 
                      }}
                    />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </motion.div>
                {/* Mobile arrow */}
                <motion.div 
                  variants={arrowVariants}
                  transition={getArrowTransition(index * 0.3)}
                  className="md:hidden h-6 w-px bg-border relative overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-x-0 h-3 bg-gradient-to-b from-transparent via-accent to-transparent"
                    animate={{ y: [-12, 24] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: index * 0.5,
                      ease: "linear" 
                    }}
                  />
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, 
  Users, 
  FileCheck, 
  AlertTriangle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import builtInControlsVideo from "@/assets/Built-in_controls.mp4";

interface ControlSlide {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: "accent" | "primary";
}

const slides: ControlSlide[] = [
  {
    icon: Eye,
    title: "Real-time Monitoring",
    description: "24/7 visibility into every workflow execution with instant alerts.",
    features: ["Live dashboards", "Anomaly detection", "Custom thresholds"],
    color: "accent",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "Strategic checkpoints where human judgment enhances automation.",
    features: ["Approval workflows", "Exception handling", "Quality gates"],
    color: "primary",
  },
  {
    icon: FileCheck,
    title: "Audit Trails",
    description: "Complete traceability for every action and decision.",
    features: ["Immutable logs", "Export reports", "Compliance ready"],
    color: "accent",
  },
  {
    icon: AlertTriangle,
    title: "Escalation Protocols",
    description: "Tiered response paths ensure no issue goes unresolved.",
    features: ["L1 → L2 → L3", "SLA tracking", "Post-mortems"],
    color: "primary",
  },
];

export function ControlsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (index: number) => setCurrentIndex(index);
  const prev = () => setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setCurrentIndex((i) => (i + 1) % slides.length);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Built-in <span className="text-gradient-accent">controls</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Every automation runs with guardrails you can trust
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <video 
                src={builtInControlsVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/10 via-transparent to-accent/5 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Carousel */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel content */}
            <div className="relative h-[320px] md:h-[280px]">
            <AnimatePresence mode="wait">
              {slides.map((slide, index) => (
                index === currentIndex && (
                  <motion.div
                    key={slide.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <div className={`bg-card rounded-2xl p-8 md:p-10 border-2 transition-all duration-300 ${
                      slide.color === "accent" 
                        ? "border-accent/50 shadow-[0_0_40px_hsl(var(--amber)/0.15)]" 
                        : "border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
                    }`}>
                      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          slide.color === "accent" 
                            ? "bg-accent/10 text-accent" 
                            : "bg-primary/10 text-primary"
                        }`}>
                          <slide.icon className="h-8 w-8" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {slide.title}
                          </h3>
                          <p className="text-muted-foreground mb-5">
                            {slide.description}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {slide.features.map((feature) => (
                              <span 
                                key={feature}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                                  slide.color === "accent"
                                    ? "bg-accent/10 text-accent"
                                    : "bg-primary/10 text-primary"
                                }`}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 bg-accent" 
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

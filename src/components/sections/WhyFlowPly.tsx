import { motion, useReducedMotion, type Easing } from "framer-motion";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { benefits } from "@/data/siteContent";
import physicalMetaphorVideo from "@/assets/Physical-world_metaphor.mp4";

const easeOut: Easing = "easeOut";

export function WhyFlowPly() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section background="default">
      <SectionHeader 
        title="Why FlowPly" 
        subtitle="Deploy faster. Break less."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Left: Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.1, ease: easeOut }}
              className="text-center lg:text-left group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto lg:mx-0 mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right: Video */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2, ease: easeOut }}
          className="hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
            <video 
              src={physicalMetaphorVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/10 via-transparent to-accent/5 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

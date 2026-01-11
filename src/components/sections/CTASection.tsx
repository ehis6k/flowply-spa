import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book your assessment
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Let's scope your operational needs. 1–2 days to understand your stack, 
            no commitment required.
          </p>

          <Button 
            variant="hero-accent" 
            size="lg"
            className="group"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Schedule a call
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-sm text-primary-foreground/60"
          >
            Typically respond within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

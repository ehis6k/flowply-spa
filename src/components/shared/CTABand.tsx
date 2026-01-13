import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { globalCTAs } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";

interface CTABandProps {
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: "primary" | "accent";
}

export function CTABand({ 
  title = "Book your assessment", 
  subtitle = "Let's scope your operational needs. 1–2 days to understand your stack, no commitment required.",
  className = "",
  variant = "primary"
}: CTABandProps) {
  const { trackCTAPrimary } = useAnalytics();
  
  const bgClass = variant === "primary" 
    ? "bg-primary text-primary-foreground" 
    : "bg-accent text-accent-foreground";
  
  const subtitleClass = variant === "primary"
    ? "text-primary-foreground/80"
    : "text-accent-foreground/80";

  const responseClass = variant === "primary"
    ? "text-primary-foreground/60"
    : "text-accent-foreground/60";

  return (
    <section className={`py-24 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className={`text-lg ${subtitleClass} mb-10`}>
            {subtitle}
          </p>

          <Button 
            asChild
            variant="hero-accent" 
            size="lg"
            className="group"
            onClick={() => trackCTAPrimary("cta_band")}
          >
            <Link to={globalCTAs.primary.href}>
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a call
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`mt-6 text-sm ${responseClass}`}
          >
            Typically respond within 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

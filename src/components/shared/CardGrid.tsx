import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { ServiceCard } from "@/data/siteContent";
import { useAnalytics } from "@/hooks/useAnalytics";

interface CardGridProps {
  cards: ServiceCard[];
  className?: string;
}

export function CardGrid({ cards, className = "" }: CardGridProps) {
  const { trackLearnMore } = useAnalytics();
  
  return (
    <div className={`grid md:grid-cols-3 gap-6 max-w-5xl mx-auto ${className}`}>
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          id={card.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
            <card.icon className="h-6 w-6" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground mb-4">
            {card.title}
          </h3>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {card.features.map((feature) => (
              <li key={feature} className="text-sm text-muted-foreground">
                {feature}
              </li>
            ))}
          </ul>

          {/* Link */}
          <Button 
            asChild 
            variant="link" 
            className="p-0 h-auto text-accent group/btn"
            onClick={() => trackLearnMore(card.title)}
          >
            <Link to={card.destinationLink}>
              Learn more
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

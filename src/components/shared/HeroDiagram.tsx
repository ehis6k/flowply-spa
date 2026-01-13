import { motion, useReducedMotion, type Easing } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/data/siteContent";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const arrowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const easeOut: Easing = "easeOut";

export function HeroDiagram() {
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
              <div className={
                item.isHighlighted
                  ? "bg-accent/10 rounded-xl p-4 border-2 border-accent text-center shadow-[0_0_30px_hsl(var(--amber)/0.2)]"
                  : "bg-secondary rounded-xl p-4 border border-border text-center"
              }>
                <span className={`text-sm font-${item.isHighlighted ? "bold" : "medium"} ${item.isHighlighted ? "text-accent" : "text-foreground"}`}>
                  {item.title}
                </span>
                <p className="text-xs text-muted-foreground mt-1">{item.subtitle}</p>
              </div>
            </motion.div>
            
            {/* Arrow (not after last item) */}
            {index < items.length - 1 && (
              <>
                <motion.div 
                  variants={arrowVariants}
                  transition={getArrowTransition(index * 0.3)}
                  className="hidden md:flex items-center px-2"
                >
                  <div className="h-px w-8 bg-border" />
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </motion.div>
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

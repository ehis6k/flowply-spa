import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "accent" | "primary";
  delay?: number;
}

export function InteractiveCard({ 
  children, 
  className = "",
  glowColor = "accent",
  delay = 0
}: InteractiveCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative ${className}`}
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
        glowColor === "accent" 
          ? "bg-accent/20" 
          : "bg-primary/20"
      }`} />
      
      {/* Card content */}
      <div className={`relative bg-card rounded-2xl border transition-all duration-300 ${
        glowColor === "accent"
          ? "border-border group-hover:border-accent/50"
          : "border-border group-hover:border-primary/50"
      }`}>
        {children}
      </div>
    </motion.div>
  );
}

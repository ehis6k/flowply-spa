import { motion, useReducedMotion } from "framer-motion";

interface FloatingOrbsProps {
  variant?: "hero" | "section";
}

export function FloatingOrbs({ variant = "section" }: FloatingOrbsProps) {
  const shouldReduceMotion = useReducedMotion();

  const orbs = variant === "hero" 
    ? [
        { size: 400, x: "10%", y: "20%", color: "amber", delay: 0 },
        { size: 300, x: "80%", y: "60%", color: "primary", delay: 2 },
        { size: 200, x: "60%", y: "10%", color: "amber", delay: 4 },
      ]
    : [
        { size: 250, x: "5%", y: "30%", color: "primary", delay: 0 },
        { size: 180, x: "85%", y: "70%", color: "amber", delay: 1.5 },
      ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${
            orb.color === "amber" 
              ? "bg-accent/10" 
              : "bg-primary/10"
          }`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={shouldReduceMotion ? {} : {
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

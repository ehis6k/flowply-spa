import { motion, useReducedMotion } from "framer-motion";

export function FlowLines() {
  const shouldReduceMotion = useReducedMotion();
  
  const lines = [
    { x1: "0%", y1: "30%", x2: "100%", y2: "70%" },
    { x1: "0%", y1: "50%", x2: "100%", y2: "30%" },
    { x1: "0%", y1: "80%", x2: "100%", y2: "50%" },
  ];

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--amber))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(var(--amber))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--amber))" stopOpacity="0" />
        </linearGradient>
      </defs>
      {lines.map((line, index) => (
        <motion.line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#flowGradient)"
          strokeWidth="1"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 0.3 } : {
            pathLength: [0, 1],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: 4,
            delay: index * 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

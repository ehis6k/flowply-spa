import { useEffect, useState, useRef } from "react";
import { useReducedMotion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  duration = 2000,
  decimals = 0 
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    // If reduced motion, show final value immediately
    if (shouldReduceMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (value - startValue) * eased;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration, shouldReduceMotion, hasAnimated]);

  const formattedValue = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue).toString();

  return (
    <span ref={ref}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
}

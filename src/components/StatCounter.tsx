"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
  className = "",
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = value * easeOut;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

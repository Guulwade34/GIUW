import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "+", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = Number(value);
    const duration = 1800;
    const incrementTime = 20;
    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-slate-50 p-5 text-center shadow-sm dark:bg-white/10"
    >
      <h4 className="text-2xl font-black text-[#065F46] dark:text-emerald-300">
        {count.toLocaleString()}
        {suffix}
      </h4>

      <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-300">
        {label}
      </p>
    </div>
  );
}
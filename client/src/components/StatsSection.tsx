import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className="font-display text-[clamp(2.2rem,6vw,5rem)] text-[#C41E24] leading-none">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const stats = [
    { value: 15, suffix: "+", label: "Years of Operations" },
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 6, suffix: "", label: "IOC Partnerships" },
    { value: 100, suffix: "%", label: "Safety Compliance" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-20 lg:py-28 bg-[#2D2D2D]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(196,30,36,0.3) 100px, rgba(196,30,36,0.3) 101px)`,
        }} />
      </div>

      <div className="container relative z-10">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center md:text-left"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-1 md:mt-2 font-mono text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest text-[#8A8A8A]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

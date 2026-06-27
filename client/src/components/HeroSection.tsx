import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg_ee06398c.jpg"
          alt="Offshore oil platform at twilight"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/30" />
      </div>

      {/* Red accent line - vertical */}
      <div
        className={`absolute left-8 md:left-16 top-0 w-[2px] bg-[#C41E24] transition-all duration-[1500ms] ${
          visible ? "h-full opacity-100" : "h-0 opacity-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-industrial)" }}
      />

      {/* Content */}
      <div className="relative z-10 container pl-12 md:pl-24 max-w-5xl">
        {/* Tagline */}
        <div
          className={`transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C41E24]">
            Energy &bull; Infrastructure &bull; Execution
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`mt-6 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <span className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white block">
            CONCRETE
          </span>
          <span className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-[#C41E24] block">
            CONGLOMERATE
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mt-8 max-w-lg text-[#8A8A8A] text-base md:text-lg font-light leading-relaxed transition-all duration-700 delay-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          Nigeria's indigenous energy and infrastructure partner. Delivering
          integrated solutions from upstream exploration to downstream
          distribution with operational discipline.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-[1200ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <a
            href="#services"
            className="px-8 py-4 bg-[#C41E24] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#E8333A] transition-all duration-300 active:scale-[0.97]"
          >
            Our Capabilities
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:border-[#C41E24] hover:text-[#C41E24] transition-all duration-300 active:scale-[0.97]"
          >
            Request Brief
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A8A]">
          Scroll
        </span>
        <ChevronDown size={16} className="text-[#C41E24]" />
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#C41E24]/30" />
    </section>
  );
}

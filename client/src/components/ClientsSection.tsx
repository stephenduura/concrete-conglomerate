import { useInView } from "@/hooks/useInView";

const partners = [
  { name: "Chevron", logo: "/images/logo-chevron.png" },
  { name: "Shell", logo: "/images/logo-shell.png" },
  { name: "ENI", logo: "/images/logo-eni.jpg" },
  { name: "Oando", logo: "/images/logo-oando.png" },
  { name: "NPDC", logo: "/images/logo-npdc.jpg" },
  { name: "NDDC", logo: "/images/logo-nddc.jpg" },
  { name: "Concrete Petroleum & Gas", logo: "/images/logo.png" },
];

export default function ClientsSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Double the array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      id="clients"
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-[#1A1A1A]"
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 h-[2px] bg-[#C41E24] transition-all duration-[1200ms] ${
          inView ? "w-full" : "w-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-industrial)" }}
      />

      <div className="container">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#C41E24]">
            Industry Presence
          </span>
          <h2 className="mt-3 md:mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-white">
            TRUSTED BY
            <br />
            <span className="text-[#C41E24]">INDUSTRY LEADERS</span>
          </h2>
        </div>

        {/* Animated Logo Carousel */}
        <div
          className={`mt-10 md:mt-16 relative overflow-hidden transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex animate-scroll-left">
            {duplicatedPartners.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex-shrink-0 mx-3 md:mx-6 lg:mx-10 flex items-center justify-center"
              >
                <div className="group relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white/5 border border-white/10 hover:border-[#C41E24]/40 rounded-lg flex items-center justify-center p-3 md:p-5 lg:p-6 transition-all duration-500 hover:bg-white/10">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                  {/* Name tooltip on hover - hidden on mobile */}
                  <span className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-[#C41E24] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - reverse direction (hidden on small mobile) */}
        <div
          className={`mt-6 md:mt-16 relative overflow-hidden transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track - reverse */}
          <div className="flex animate-scroll-right">
            {[...duplicatedPartners].reverse().map((partner, i) => (
              <div
                key={`rev-${partner.name}-${i}`}
                className="flex-shrink-0 mx-3 md:mx-6 lg:mx-10 flex items-center justify-center"
              >
                <div className="group relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white/5 border border-white/10 hover:border-[#C41E24]/40 rounded-lg flex items-center justify-center p-3 md:p-5 lg:p-6 transition-all duration-500 hover:bg-white/10">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                  <span className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-[#C41E24] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional credibility */}
        <div
          className={`mt-12 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-16 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <div className="text-center">
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A]">
              Compliance
            </span>
            <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-[#8A8A8A]">ISO 9000 / 1400 / 4500</p>
          </div>
          <div className="text-center">
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A]">
              Regulatory
            </span>
            <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-[#8A8A8A]">NUPRC / NMDPRA / NOSDRA</p>
          </div>
          <div className="text-center">
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A]">
              Registration
            </span>
            <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-[#8A8A8A]">CAC RC 881354</p>
          </div>
        </div>
      </div>
    </section>
  );
}

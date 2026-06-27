import { useInView } from "@/hooks/useInView";

const clients = [
  { name: "CHEVRON", abbr: "CVX" },
  { name: "SHELL", abbr: "SPDC" },
  { name: "ENI", abbr: "ENI" },
  { name: "OANDO", abbr: "OAN" },
  { name: "NPDC", abbr: "NPDC" },
  { name: "NDDC", abbr: "NDDC" },
];

export default function ClientsSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="clients"
      ref={ref}
      className="relative py-24 md:py-32 bg-[#1A1A1A]"
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
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C41E24]">
            Industry Presence
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-white">
            TRUSTED BY
            <br />
            <span className="text-[#C41E24]">INDUSTRY LEADERS</span>
          </h2>
          <p className="mt-6 text-[#8A8A8A] text-base md:text-lg font-light leading-relaxed">
            We partner with International Oil Companies, EPC contractors, and
            government agencies across Nigeria's energy sector.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className={`group relative flex flex-col items-center justify-center p-8 bg-[#2D2D2D] border border-white/5 hover:border-[#C41E24]/30 transition-all duration-500 ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionTimingFunction: "var(--ease-out-smooth)",
                transitionDelay: `${i * 100 + 300}ms`,
              }}
            >
              <span className="font-display text-3xl text-[#8A8A8A] group-hover:text-white transition-colors duration-300">
                {client.abbr}
              </span>
              <span className="mt-2 font-mono text-[9px] uppercase tracking-widest text-[#4A4A4A] group-hover:text-[#C41E24] transition-colors duration-300">
                {client.name}
              </span>
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C41E24] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Additional credibility */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <div className="text-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
              Compliance
            </span>
            <p className="mt-1 text-sm text-[#8A8A8A]">ISO 9000 / 1400 / 4500</p>
          </div>
          <div className="text-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
              Regulatory
            </span>
            <p className="mt-1 text-sm text-[#8A8A8A]">NUPRC / NMDPRA / NOSDRA</p>
          </div>
          <div className="text-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
              Registration
            </span>
            <p className="mt-1 text-sm text-[#8A8A8A]">CAC RC 881354</p>
          </div>
        </div>
      </div>
    </section>
  );
}

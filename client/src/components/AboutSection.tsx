import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-[#1A1A1A]"
    >
      {/* Red accent line - horizontal */}
      <div
        className={`absolute top-0 left-0 h-[2px] bg-[#C41E24] transition-all duration-[1200ms] ${
          inView ? "w-full" : "w-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-industrial)" }}
      />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
          >
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#C41E24]">
              Who We Are
            </span>
            <h2 className="mt-3 md:mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-white">
              BUILT FOR THE
              <br />
              <span className="text-[#C41E24]">TOUGHEST</span> TERRAIN
            </h2>
            <p className="mt-5 md:mt-8 text-[#8A8A8A] text-sm md:text-base lg:text-lg leading-relaxed font-light">
              Concrete Petroleum and Gas Ltd is a Nigerian indigenous energy and
              infrastructure company delivering integrated solutions across the
              upstream, midstream, downstream, and power value chains.
            </p>
            <p className="mt-3 md:mt-4 text-[#8A8A8A] text-sm md:text-base lg:text-lg leading-relaxed font-light">
              Registered under the Companies and Allied Matters Act, we partner
              with International Oil Companies, EPC contractors, and government
              agencies to execute technically demanding projects with discipline,
              safety, and commercial rigor.
            </p>
            <p className="mt-3 md:mt-4 text-[#8A8A8A] text-sm md:text-base lg:text-lg leading-relaxed font-light">
              Headquartered in Warri, Delta State, we operate at the heart of
              Nigeria's oil and gas corridor, providing direct access to key
              fields, terminals, and industrial zones.
            </p>

            {/* Mission / Vision / Motto */}
            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="border-l-2 border-[#C41E24] pl-3 md:pl-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E24]">
                  Mission
                </span>
                <p className="mt-1 md:mt-2 text-xs md:text-sm text-[#8A8A8A] font-light">
                  Meeting clients' satisfaction through professional, first-class
                  service delivery.
                </p>
              </div>
              <div className="border-l-2 border-[#C41E24]/50 pl-3 md:pl-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E24]">
                  Vision
                </span>
                <p className="mt-1 md:mt-2 text-xs md:text-sm text-[#8A8A8A] font-light">
                  Operational excellence and incident-free workplace services
                  across all operations.
                </p>
              </div>
              <div className="border-l-2 border-[#C41E24]/30 pl-3 md:pl-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E24]">
                  Motto
                </span>
                <p className="mt-1 md:mt-2 text-xs md:text-sm text-[#8A8A8A] font-light">
                  Always meet and exceed our customer's requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
          >
            <div className="relative">
              <img
                src="/manus-storage/about-section_366499d5.jpg"
                alt="Marine support vessel in Nigerian waters"
                className="w-full h-[280px] md:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay frame - hidden on mobile */}
              <div className="hidden md:block absolute -top-4 -right-4 w-full h-full border-2 border-[#C41E24]/20 pointer-events-none" />
              {/* Corner accent */}
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-[#1A1A1A]/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 border-l-2 border-[#C41E24]">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#C41E24]">
                  RC 881354
                </span>
                <p className="text-[10px] md:text-xs text-white/70 mt-0.5 md:mt-1">
                  Warri, Delta State, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

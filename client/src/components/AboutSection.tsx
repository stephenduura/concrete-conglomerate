import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-[#1A1A1A]"
    >
      {/* Red accent line - horizontal */}
      <div
        className={`absolute top-0 left-0 h-[2px] bg-[#C41E24] transition-all duration-[1200ms] ${
          inView ? "w-full" : "w-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-industrial)" }}
      />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C41E24]">
              Who We Are
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-white">
              BUILT FOR THE
              <br />
              <span className="text-[#C41E24]">TOUGHEST</span> TERRAIN
            </h2>
            <p className="mt-8 text-[#8A8A8A] text-base md:text-lg leading-relaxed font-light">
              Concrete Petroleum and Gas Ltd is a Nigerian indigenous energy and
              infrastructure company delivering integrated solutions across the
              upstream, midstream, downstream, and power value chains.
            </p>
            <p className="mt-4 text-[#8A8A8A] text-base md:text-lg leading-relaxed font-light">
              Registered under the Companies and Allied Matters Act, we partner
              with International Oil Companies, EPC contractors, and government
              agencies to execute technically demanding projects with discipline,
              safety, and commercial rigor.
            </p>
            <p className="mt-4 text-[#8A8A8A] text-base md:text-lg leading-relaxed font-light">
              Headquartered in Warri, Delta State, we operate at the heart of
              Nigeria's oil and gas corridor, providing direct access to key
              fields, terminals, and industrial zones.
            </p>

            {/* Mission / Vision / Motto */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-l-2 border-[#C41E24] pl-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E24]">
                  Mission
                </span>
                <p className="mt-2 text-sm text-[#8A8A8A] font-light">
                  Meeting clients' satisfaction through professional, first-class
                  service delivery.
                </p>
              </div>
              <div className="border-l-2 border-[#C41E24]/50 pl-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E24]">
                  Vision
                </span>
                <p className="mt-2 text-sm text-[#8A8A8A] font-light">
                  Operational excellence and incident-free workplace services
                  across all operations.
                </p>
              </div>
              <div className="border-l-2 border-[#C41E24]/30 pl-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E24]">
                  Motto
                </span>
                <p className="mt-2 text-sm text-[#8A8A8A] font-light">
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
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C41E24]/20 pointer-events-none" />
              {/* Corner accent */}
              <div className="absolute bottom-4 left-4 bg-[#1A1A1A]/90 backdrop-blur-sm px-4 py-3 border-l-2 border-[#C41E24]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E24]">
                  RC 881354
                </span>
                <p className="text-xs text-white/70 mt-1">
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

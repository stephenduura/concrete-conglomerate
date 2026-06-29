import { useInView } from "@/hooks/useInView";
import { CheckCircle, ShieldCheck, Globe, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: FileCheck,
    title: "Single-Contractor Accountability",
    description: "Complete project ownership across drilling, logistics, EPC, and product supply — one point of contact, one standard of delivery.",
  },
  {
    icon: Globe,
    title: "Proven Niger Delta Presence",
    description: "Established vendor and community relationships with direct access to key fields, terminals, and industrial zones in Nigeria's oil corridor.",
  },
  {
    icon: CheckCircle,
    title: "Asset-Light, Responsive Model",
    description: "Scales to project demand without fixed overhead burden. We mobilize rapidly and deliver efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Governance",
    description: "Auditable records, contract management, and regulatory interfaces handled by experienced in-house counsel and compliance teams.",
  },
];

const principles = [
  {
    number: "01",
    title: "Compliance First",
    description: "All operations executed in line with Nigerian law, NUPRC, NMDPRA, and NOSDRA requirements. Documentation, HSE, and reporting are non-negotiable.",
  },
  {
    number: "02",
    title: "Execution Discipline",
    description: "Clear scope, controlled costs, and accountable delivery timelines. We manage interface risk between engineering, procurement, and operations.",
  },
  {
    number: "03",
    title: "Local Value, Global Standard",
    description: "We maximize Nigerian content and local capacity building while maintaining ISO-aligned quality and safety management systems.",
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-[#2D2D2D]"
    >
      <div className="container">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#C41E24]">
            Operating Philosophy
          </span>
          <h2 className="mt-3 md:mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-white">
            WE DON'T PITCH.
            <br />
            <span className="text-[#C41E24]">WE EXECUTE.</span>
          </h2>
        </div>

        {/* Principles */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {principles.map((principle, i) => (
            <div
              key={principle.number}
              className={`relative p-5 md:p-8 border border-white/5 bg-[#1A1A1A]/50 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionTimingFunction: "var(--ease-out-smooth)",
                transitionDelay: `${i * 150 + 200}ms`,
              }}
            >
              <span className="font-display text-4xl md:text-5xl text-[#C41E24]/20">
                {principle.number}
              </span>
              <h3 className="mt-2 md:mt-4 font-display text-xl md:text-2xl text-white tracking-wide">
                {principle.title}
              </h3>
              <p className="mt-2 md:mt-4 text-xs md:text-sm text-[#8A8A8A] font-light leading-relaxed">
                {principle.description}
              </p>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-12 md:w-16 h-[2px] bg-[#C41E24]" />
            </div>
          ))}
        </div>

        {/* Why Partner */}
        <div className="mt-12 md:mt-20">
          <h3
            className={`font-display text-2xl md:text-3xl text-white text-center mb-8 md:mb-12 transition-all duration-700 delay-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
          >
            WHY PARTNER WITH <span className="text-[#C41E24]">CONCRETE</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`group p-4 md:p-6 bg-[#1A1A1A] border border-white/5 hover:border-[#C41E24]/30 transition-all duration-500 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionTimingFunction: "var(--ease-out-smooth)",
                    transitionDelay: `${i * 100 + 600}ms`,
                  }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C41E24]/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#C41E24]/20 transition-colors duration-300">
                    <Icon size={20} className="text-[#C41E24]" />
                  </div>
                  <h4 className="font-display text-base md:text-lg text-white tracking-wide">
                    {reason.title}
                  </h4>
                  <p className="mt-2 md:mt-3 text-xs md:text-sm text-[#8A8A8A] font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

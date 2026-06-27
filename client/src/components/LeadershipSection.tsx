import { useInView } from "@/hooks/useInView";
import { Award, GraduationCap, Briefcase, Shield } from "lucide-react";

const experience = [
  "Pacific Drilling West Africa International",
  "Seadrill Mobile Unit",
  "Nicap Pipe-Line Section PLC",
  "Transocean — Akpo Field, Egina & Usan Oil Fields (TOTAL)",
  "Chevron Gas Pipeline — Abiteye, Nigeria",
];

const expertise = [
  "Mechanical Maintenance",
  "Drilling Operations",
  "HSE Management",
  "Community Conflict Resolution",
];

export default function LeadershipSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="leadership"
      ref={ref}
      className="relative py-24 md:py-32 bg-[#1A1A1A]"
    >
      {/* Red accent line */}
      <div
        className={`absolute top-0 left-0 h-[2px] bg-[#C41E24] transition-all duration-[1200ms] ${
          inView ? "w-full" : "w-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-industrial)" }}
      />

      <div className="container">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C41E24]">
            Leadership
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-white">
            THE FORCE
            <br />
            <span className="text-[#C41E24]">BEHIND EXECUTION</span>
          </h2>
        </div>

        {/* Leader Profile */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Photo Column */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
          >
            <div className="relative">
              {/* Photo */}
              <div className="relative overflow-hidden">
                <img
                  src="/manus-storage/IMG-20260626-WA0004_77d305cd.jpg"
                  alt="Chief Igbrú Odiri David"
                  className="w-full max-w-md mx-auto object-cover aspect-[3/4]"
                />
                {/* Red frame accent */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#C41E24]/30 pointer-events-none -z-10" />
              </div>

              {/* Name plate */}
              <div className="mt-6 border-l-2 border-[#C41E24] pl-4">
                <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide">
                  CHIEF IGBRÚ ODIRI DAVID
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[#C41E24] mt-1">
                  Executive Director / General Manager
                </p>
              </div>
            </div>
          </div>

          {/* Bio Column */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
          >
            {/* Bio Text */}
            <p className="text-[#8A8A8A] text-base md:text-lg font-light leading-relaxed">
              Chief Igbrú Odiri David brings over 15 years of experience in
              Nigeria's oil and gas industry. Before joining Concrete Petroleum &
              Gas Ltd, he served as Managing Director and CEO of Gredavio Nigeria
              Limited, an indigenous oil and gas company.
            </p>
            <p className="mt-4 text-[#8A8A8A] text-base md:text-lg font-light leading-relaxed">
              He has worked with leading international and indigenous oil and gas
              contractors across the upstream sector, delivering operational
              excellence in some of Nigeria's most demanding environments.
            </p>

            {/* Industry Experience */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#C41E24]/10 flex items-center justify-center">
                  <Briefcase size={16} className="text-[#C41E24]" />
                </div>
                <h4 className="font-display text-lg text-white tracking-wide">
                  INDUSTRY TRACK RECORD
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {experience.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#8A8A8A] font-light"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C41E24] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#C41E24]/10 flex items-center justify-center">
                  <Shield size={16} className="text-[#C41E24]" />
                </div>
                <h4 className="font-display text-lg text-white tracking-wide">
                  CORE EXPERTISE
                </h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-[#2D2D2D] border border-white/5 text-sm text-[#8A8A8A] font-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-5 bg-[#2D2D2D]/50 border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#C41E24]/10 flex items-center justify-center">
                    <GraduationCap size={16} className="text-[#C41E24]" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E24]">
                    Education
                  </span>
                </div>
                <p className="text-sm text-white font-light">
                  B.Eng. Mechanical/Production Engineering
                </p>
                <p className="text-sm text-white font-light mt-1">
                  M.Sc. Energy & Petroleum Economics
                </p>
              </div>
              <div className="p-5 bg-[#2D2D2D]/50 border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#C41E24]/10 flex items-center justify-center">
                    <Award size={16} className="text-[#C41E24]" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C41E24]">
                    Memberships
                  </span>
                </div>
                <p className="text-sm text-white font-light">
                  Associate Member, Institute of Mechanical Engineers (UK)
                </p>
                <p className="text-xs text-[#8A8A8A] font-light mt-1">
                  Multiple international oil & gas certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

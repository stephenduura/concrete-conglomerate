import { motion } from "framer-motion";
import { HardHat, ShieldCheck, TrendingUp, CheckCircle, Cpu, Calendar } from "lucide-react";

interface CaseStudy {
  title: string;
  client: string;
  scope: string;
  metrics: { label: string; value: string }[];
  description: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Escravos EGTL Facility Modifications",
    client: "Chevron Nigeria Limited / Coda Engineering",
    scope: "Engineering, Procurement & Piping Installation",
    metrics: [
      { label: "Incident-Free Hours", value: "120,000+" },
      { label: "Piping Specs Delivered", value: "100%" },
    ],
    description:
      "Successfully executed high-pressure piping design, fabrication, and brownfield installation under strict environmental and HSE conditions. Maintained zero downtime during tie-ins.",
    tags: ["EPC", "Brownfield", "Piping"],
  },
  {
    title: "Bonny Island Marine Asset Support",
    client: "Nigeria LNG (NLNG) / Joint Venture Partners",
    scope: "Marine Logistics & Security Patrol Operations",
    metrics: [
      { label: "Vessel Availability", value: "99.8%" },
      { label: "Security Patrols", value: "24/7" },
    ],
    description:
      "Provision and management of high-spec ballistic and non-ballistic patrol vessels. Ensuring uninterrupted shipping routes and maritime security monitoring for gas carriers.",
    tags: ["Marine Logistics", "Security", "Operations"],
  },
  {
    title: "Niger Delta Flare Gas Gathering System",
    client: "Upstream Joint Venture operators",
    scope: "Gas Processing & Power Plant Infrastructure",
    metrics: [
      { label: "Gathering Capacity", value: "15 MMSCFD" },
      { label: "Flare Emission Reduction", value: "92%" },
    ],
    description:
      "Engineered gathering pipelines and compressor stations to redirect associated gas from flare stacks to regional industrial power grids, converting waste energy to electricity.",
    tags: ["Power & Gas", "Midstream", "De-carbonization"],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-16 md:py-24 lg:py-32 bg-[#232323]">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C41E24]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C41E24]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#C41E24]">
            Project Executions
          </span>
          <h2 className="mt-3 md:mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-white">
            PROVEN TRACK RECORD
            <br />
            <span className="text-[#C41E24]">IN THE FIELD</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] text-sm md:text-base font-light max-w-lg mx-auto">
            Explore our featured project deliveries across upstream engineering, offshore logistics, and power infrastructure campaigns.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col justify-between bg-[#1D1D1D] border border-white/5 hover:border-[#C41E24]/30 rounded-lg p-6 md:p-8 transition-all duration-500 hover:bg-[#202020] hover:shadow-xl"
            >
              {/* Card top elements */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C41E24] px-2 py-0.5 bg-[#C41E24]/10 rounded">
                    Case Study
                  </span>
                  <span className="font-mono text-[9px] text-[#4A4A4A] uppercase">
                    Execution
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl text-white tracking-wide group-hover:text-[#C41E24] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex flex-col gap-1 mt-2 mb-4 border-l border-[#C41E24]/30 pl-3">
                  <span className="text-[10px] text-[#8A8A8A] font-mono uppercase tracking-wider">
                    Client: {project.client}
                  </span>
                  <span className="text-[11px] text-[#B0B0B0] font-light">
                    Scope: {project.scope}
                  </span>
                </div>

                <p className="text-[#8A8A8A] text-xs md:text-sm font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card bottom elements (Metrics & Tags) */}
              <div>
                {/* Metrics Box */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-[#171717] border border-white/5 rounded mb-5">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#4A4A4A] block">
                        {metric.label}
                      </span>
                      <span className="font-display text-lg md:text-xl text-[#C41E24] block mt-0.5">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#2D2D2D]/60 border border-white/5 text-[9px] md:text-[10px] text-[#8A8A8A] font-light rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C41E24] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

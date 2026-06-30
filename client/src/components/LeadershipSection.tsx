import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import {
  Award,
  GraduationCap,
  Briefcase,
  Shield,
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react";

interface BoardMember {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
  summary: string;
  fullBio: string[];
  highlights?: {
    icon: "briefcase" | "shield" | "graduation" | "award";
    title: string;
    items: string[];
  }[];
  education?: string[];
  memberships?: string[];
  location?: string;
}

const boardMembers: BoardMember[] = [
  {
    id: "ceo",
    name: "CHIEF OGHENEOVO EDEWOR",
    title: "Chief Executive Officer",
    company: "Concrete Petroleum and Gas Ltd",
    image: "/images/ceo-edewor.jpg",
    summary:
      "Chief Ogheneovo Edewor is Chief Executive Officer of Concrete Petroleum and Gas Ltd, a Nigerian energy company with activities across the Upstream and Downstream operations.",
    fullBio: [
      "He is a businessman, entrepreneur, and trained Lawyer with qualifications from the University of Hertfordshire and the University of Buckingham, with over 20 years' experience in the Oil and Gas sector. His career spans executive leadership across banking, real estate, and agriculture, giving him broad commercial and governance experience.",
      "In the energy sector, Chief Edewor has led projects across exploration, production, infrastructure, and supply, delivering over million litres of petroleum products annually across Nigeria. He has also expanded client coverage to commercial and industrial accounts while maintaining 100% NMDPRA/DPR compliance.",
      "At Concrete Petroleum and Gas Ltd, he provides strategic direction on business development, regulatory compliance, and client relations, while supporting community-focused initiatives in the Niger Delta region. He has led the company to execute engineering, procurement, and operations projects alongside the marketing, distribution, and supply of petroleum products and natural gas to commercial and industrial clients.",
      "Chief Edewor's leadership is guided by a practical understanding of the full Oil and Gas value chain, with emphasis on reliability, safety, compliance, and long-term partnerships.",
    ],
    location: "Nigeria",
  },
  {
    id: "ed",
    name: "CHIEF IGBRÚ ODIRI DAVID",
    title: "Executive Director / General Manager",
    company: "Concrete Petroleum and Gas Ltd",
    image: "/images/chief-igbru.jpg",
    summary:
      "Chief Igbrú Odiri David brings over 15 years of experience in Nigeria's oil and gas industry. Before joining Concrete Petroleum & Gas Ltd, he served as Managing Director and CEO of Gredavio Nigeria Limited, an indigenous oil and gas company.",
    fullBio: [
      "He has worked with leading international and indigenous oil and gas contractors across the upstream sector, delivering operational excellence in some of Nigeria's most demanding environments.",
    ],
    highlights: [
      {
        icon: "briefcase",
        title: "INDUSTRY TRACK RECORD",
        items: [
          "Pacific Drilling West Africa International",
          "Seadrill Mobile Unit",
          "Nicap Pipe-Line Section PLC",
          "Transocean — Akpo Field, Egina & Usan Oil Fields (TOTAL)",
          "Chevron Gas Pipeline — Abiteye, Nigeria",
        ],
      },
      {
        icon: "shield",
        title: "CORE EXPERTISE",
        items: [
          "Mechanical Maintenance",
          "Drilling Operations",
          "HSE Management",
          "Community Conflict Resolution",
        ],
      },
    ],
    education: [
      "B.Eng. Mechanical/Production Engineering",
      "M.Sc. Energy & Petroleum Economics",
    ],
    memberships: [
      "Associate Member, Institute of Mechanical Engineers (UK)",
      "Multiple international oil & gas certifications",
    ],
  },
  {
    id: "pd",
    name: "ENGR. OTAH DANIEL OMOSHOLA",
    title: "Project Director",
    company: "Concrete Petroleum and Gas Ltd",
    image: "/images/engr-otah.jpg",
    summary:
      "Engr. Otah Daniel Omoshola is Project Director at Concrete Petroleum and Gas Ltd, with 23 years of HSE and operational leadership across the Oil & Gas value chain.",
    fullBio: [
      "He is an engineer and former Chief Executive Officer of Coda Engineering Management Limited, an indigenous oil and gas company. His experience covers Exploration & Production (E&P), Engineering, Procurement, Installation & Commissioning (EPIC), and major contracting projects.",
      "Engr. Otah has delivered high-value projects including the Escravos Gas-To-Liquid (EGTL) Project, Agbami FPSO, Jack-up Drilling Rig and Offshore Platform revamps, and Crude Oil Terminal Expansion revamps. He has led multidisciplinary teams on complex EPIC and brownfield works while maintaining 100% HSE compliance on major offshore and onshore campaigns.",
      "At Concrete Petroleum and Gas Ltd, he oversees project execution, technical assurance, and safety governance across upstream and downstream engineering, procurement, and operations. He also supports community and workforce development initiatives in Nigeria's host communities.",
    ],
    education: [
      "MSc Engineering & Management",
      "PGD Petroleum Engineering",
      "HND Petroleum",
      "NEBOSH Certified in Occupational Health & Safety",
      "Diplomas in Project Management and Contract Management",
    ],
    memberships: [
      "Chartered Engineer, Engineering Council UK",
      "Chartered Member, IOSH UK",
      "Member, Energy Institute UK",
      "Registered Petroleum Engineering Technologist, COREN Nigeria",
    ],
    location: "Nigeria",
  },
  {
    id: "director",
    name: "ONORIODE S. IGBRU",
    title: "Director",
    company: "Concrete Petroleum and Gas Ltd",
    image: "/images/board-member-4.jpg",
    summary:
      "Onoriode S. Igbru is Director with 10+ years' experience in energy systems, offshore operations, and sustainable engineering. He combines oil & gas expertise with an M.Sc. in Sustainable Engineering: Energy from Nottingham Trent University.",
    fullBio: [
      "He has led energy distribution and asset reliability at major facilities including NLNG, improving system availability and reducing downtime by 75% through automation and data monitoring. Offshore, he managed power generation and preventive maintenance to increase platform uptime and safety.",
      "Onoriode specializes in solar and hybrid energy modelling, Environmental Impact Assessment (EIA), and energy transition planning. His work includes hybrid system design for universities, national energy performance analysis, and off-grid feasibility studies. Technical tools: Helioscope, ANSYS, COMSOL, energy data analysis.",
      "A Registered Engineer with COREN and SPE member, he focuses on delivering low-carbon, high-reliability energy solutions for the transition.",
    ],
    education: [
      "M.Sc. Sustainable Engineering: Energy — Nottingham Trent University",
    ],
    memberships: [
      "Registered Engineer, COREN",
      "Member, Society of Petroleum Engineers (SPE)",
    ],
    location: "Nottingham, UK",
  },
];

function HighlightIcon({ type }: { type: string }) {
  switch (type) {
    case "briefcase":
      return <Briefcase size={14} className="text-[#C41E24]" />;
    case "shield":
      return <Shield size={14} className="text-[#C41E24]" />;
    case "graduation":
      return <GraduationCap size={14} className="text-[#C41E24]" />;
    case "award":
      return <Award size={14} className="text-[#C41E24]" />;
    default:
      return <Briefcase size={14} className="text-[#C41E24]" />;
  }
}

function MemberCard({
  member,
  index,
  inView,
}: {
  member: BoardMember;
  index: number;
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionTimingFunction: "var(--ease-out-smooth)",
        transitionDelay: `${200 + index * 150}ms`,
      }}
    >
      {/* Photo */}
      <div className="relative overflow-hidden mx-auto">
        <div className="relative overflow-hidden aspect-[3/4] bg-[#2D2D2D]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        {/* Red accent bottom border */}
        <div className="h-[3px] bg-[#C41E24] w-0 group-hover:w-full transition-all duration-500" />
      </div>

      {/* Name & Title */}
      <div className="mt-4 md:mt-5">
        <h3 className="font-display text-lg md:text-xl lg:text-2xl text-white tracking-wide leading-tight">
          {member.name}
        </h3>
        <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#C41E24] mt-1">
          {member.title}
        </p>
        {member.location && (
          <div className="flex items-center gap-1 mt-2">
            <MapPin size={10} className="text-[#8A8A8A]" />
            <span className="font-mono text-[9px] text-[#8A8A8A] uppercase tracking-wider">
              {member.location}
            </span>
          </div>
        )}
      </div>

      {/* Summary */}
      <p className="mt-3 text-[#8A8A8A] text-xs md:text-sm font-light leading-relaxed">
        {member.summary}
      </p>

      {/* Expand/Collapse Button */}
      {(member.fullBio.length > 0 ||
        member.highlights ||
        member.education) && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1.5 text-[#C41E24] hover:text-[#E8333A] transition-colors duration-300 group/btn"
        >
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest">
            {expanded ? "Show Less" : "Read More"}
          </span>
          {expanded ? (
            <ChevronUp
              size={14}
              className="transition-transform duration-300"
            />
          ) : (
            <ChevronDown
              size={14}
              className="group-hover/btn:translate-y-0.5 transition-transform duration-300"
            />
          )}
        </button>
      )}

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          expanded ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 pt-4 space-y-4">
          {/* Full Bio */}
          {member.fullBio.map((paragraph, i) => (
            <p
              key={i}
              className="text-[#8A8A8A] text-xs md:text-sm font-light leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          {/* Highlights (Track Record, Expertise) */}
          {member.highlights?.map((highlight) => (
            <div key={highlight.title} className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#C41E24]/10 flex items-center justify-center">
                  <HighlightIcon type={highlight.icon} />
                </div>
                <h4 className="font-display text-sm md:text-base text-white tracking-wide">
                  {highlight.title}
                </h4>
              </div>
              {highlight.icon === "shield" ? (
                <div className="flex flex-wrap gap-1.5">
                  {highlight.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-[#2D2D2D] border border-white/5 text-[10px] md:text-xs text-[#8A8A8A] font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="space-y-1.5">
                  {highlight.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-[10px] md:text-xs text-[#8A8A8A] font-light"
                    >
                      <div className="w-1 h-1 bg-[#C41E24] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Education */}
          {member.education && (
            <div className="p-3 bg-[#2D2D2D]/50 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#C41E24]/10 flex items-center justify-center">
                  <GraduationCap size={12} className="text-[#C41E24]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C41E24]">
                  Education & Certifications
                </span>
              </div>
              {member.education.map((item) => (
                <p
                  key={item}
                  className="text-[10px] md:text-xs text-white font-light mt-1"
                >
                  {item}
                </p>
              ))}
            </div>
          )}

          {/* Memberships */}
          {member.memberships && (
            <div className="p-3 bg-[#2D2D2D]/50 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#C41E24]/10 flex items-center justify-center">
                  <Award size={12} className="text-[#C41E24]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C41E24]">
                  Professional Memberships
                </span>
              </div>
              {member.memberships.map((item) => (
                <p
                  key={item}
                  className="text-[10px] md:text-xs text-white font-light mt-1"
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="leadership"
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-[#1A1A1A]"
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
          className={`text-center max-w-2xl mx-auto mb-10 md:mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#C41E24]">
            Leadership
          </span>
          <h2 className="mt-3 md:mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-white">
            THE CONCRETE
            <br />
            <span className="text-[#C41E24]">TEAM</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] text-sm md:text-base font-light max-w-lg mx-auto">
            Meet the experienced leaders driving Concrete Petroleum & Gas Ltd's
            vision across Nigeria's oil and gas industry.
          </p>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {boardMembers.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

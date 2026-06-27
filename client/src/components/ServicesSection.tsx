import { useInView } from "@/hooks/useInView";
import { Anchor, Droplets, HardHat, Zap, Truck, Shield } from "lucide-react";

const services = [
  {
    icon: Anchor,
    title: "Upstream & Offshore Services",
    description: "Drilling and exploration support, crude oil trading, provision and management of rigs, vessels, and marine assets. Complete marine logistics and offshore support services.",
    image: "/manus-storage/drilling-platform_84d77d0d.jpg",
  },
  {
    icon: Droplets,
    title: "Downstream & Product Marketing",
    description: "Marketing and distribution of refined petroleum products. Supply of chemicals and industrial raw materials for energy and manufacturing sectors.",
    image: "/manus-storage/refinery-night_f7b4cf70.jpg",
  },
  {
    icon: HardHat,
    title: "Engineering, Procurement & Construction",
    description: "EPC and EPCm delivery for facilities, plants, and pipeline systems. Installation, commissioning, maintenance, and repair of energy infrastructure.",
    image: "/manus-storage/services-epc_e44ffc3e.jpg",
  },
  {
    icon: Zap,
    title: "Power & Gas Infrastructure",
    description: "Electricity generation and supply to industrial and commercial clients. Gas supply, processing, and related midstream activities.",
    image: "/manus-storage/power-plant_dcc1626d.jpg",
  },
  {
    icon: Truck,
    title: "Logistics & Industrial Support",
    description: "Transportation, haulage, and warehousing. Import and export of equipment, machinery, and spares. Lease, hire, and manufacturing support.",
    image: "/manus-storage/pipeline-construction_fe7f0a5a.jpg",
  },
  {
    icon: Shield,
    title: "Marine Security & Safety",
    description: "Ballistic and non-ballistic security vessel operations. Safety equipment supply, security surveillance, and site services for offshore installations.",
    image: "/manus-storage/marine-ops_7c647b2e.jpg",
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-[#1A1A1A]"
    >
      <div className="container">
        {/* Section Header */}
        <div
          className={`max-w-2xl transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
        >
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#C41E24]">
            Core Capabilities
          </span>
          <h2 className="mt-3 md:mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-white">
            INTEGRATED SOLUTIONS
            <br />
            <span className="text-[#C41E24]">ACROSS THE VALUE CHAIN</span>
          </h2>
          <p className="mt-4 md:mt-6 text-[#8A8A8A] text-sm md:text-base lg:text-lg font-light leading-relaxed">
            From exploration to distribution, we deliver technically demanding
            projects with discipline, safety, and commercial rigor.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} parentInView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  parentInView,
}: {
  service: typeof services[0];
  index: number;
  parentInView: boolean;
}) {
  const Icon = service.icon;

  return (
    <div
      className={`group relative overflow-hidden bg-[#2D2D2D] border border-white/5 hover:border-[#C41E24]/30 transition-all duration-500 ${
        parentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionTimingFunction: "var(--ease-out-smooth)",
        transitionDelay: `${index * 100 + 300}ms`,
      }}
    >
      {/* Image */}
      <div className="relative h-36 md:h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/30 to-transparent" />
        {/* Icon overlay */}
        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-8 h-8 md:w-10 md:h-10 bg-[#C41E24] flex items-center justify-center">
          <Icon size={16} className="text-white md:hidden" />
          <Icon size={20} className="text-white hidden md:block" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="font-display text-lg md:text-xl text-white tracking-wide">
          {service.title}
        </h3>
        <p className="mt-2 md:mt-3 text-xs md:text-sm text-[#8A8A8A] font-light leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C41E24] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}

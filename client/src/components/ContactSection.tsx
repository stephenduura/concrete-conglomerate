import { useInView } from "@/hooks/useInView";
import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { MapView } from "./Map";
import { toast } from "sonner";

const branches = {
  warri: {
    lat: 5.5279153,
    lng: 5.7734727,
    title: "Headquarters (Warri, Nigeria)",
  },
  london: {
    lat: 51.5325,
    lng: -0.0865,
    title: "International Office (London, UK)",
  },
};

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const [activeBranch, setActiveBranch] = useState<"warri" | "london">("warri");

  const handleBranchChange = (branch: "warri" | "london") => {
    setActiveBranch(branch);
    const selected = branches[branch];
    if (mapRef.current) {
      mapRef.current.setView([selected.lat, selected.lng], 15);
      if (markerRef.current && window.L) {
        markerRef.current.setLatLng([selected.lat, selected.lng]);
        markerRef.current.bindPopup(`<b>${selected.title}</b>`).openPopup();
      }
    }
  };

  const handleMapReady = (mapInstance: any) => {
    mapRef.current = mapInstance;
    const initial = branches[activeBranch];
    if (window.L) {
      const marker = window.L.marker([initial.lat, initial.lng])
        .addTo(mapInstance)
        .bindPopup(`<b>${initial.title}</b>`)
        .openPopup();
      markerRef.current = marker;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
        toast.success("Operational brief requested successfully");
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast.error("Failed to submit inquiry. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 bg-[#1A1A1A]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/support-vessel_abb6f437.png"
          alt="Support vessel"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/95 to-[#1A1A1A]/80" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
          >
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#C41E24]">
              Get in Touch
            </span>
            <h2 className="mt-3 md:mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-white">
              READY TO
              <br />
              <span className="text-[#C41E24]">DISCUSS?</span>
            </h2>
            <p className="mt-4 md:mt-6 text-[#8A8A8A] text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-md">
              Whether you need marine logistics, EPC delivery, or integrated
              energy solutions — we respond within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="mt-8 md:mt-10 space-y-4 md:space-y-6">
              <a
                href="mailto:contact@concreteconglomerate.com"
                className="flex items-start gap-3 md:gap-4 group"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-[#C41E24]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C41E24]/20 transition-colors duration-300">
                  <Mail size={16} className="text-[#C41E24]" />
                </div>
                <div>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                    Email
                  </span>
                  <p className="text-white text-xs md:text-sm group-hover:text-[#C41E24] transition-colors duration-300 break-all">
                    contact@concreteconglomerate.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+2348082061336"
                className="flex items-start gap-3 md:gap-4 group"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-[#C41E24]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C41E24]/20 transition-colors duration-300">
                  <Phone size={16} className="text-[#C41E24]" />
                </div>
                <div>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                    Phone
                  </span>
                  <p className="text-white text-xs md:text-sm group-hover:text-[#C41E24] transition-colors duration-300">
                    +234 808 206 1336
                  </p>
                  <p className="text-[#8A8A8A] text-[10px] md:text-xs mt-0.5 md:mt-1">
                    +234 807 759 8457
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-[#C41E24]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#C41E24]" />
                </div>
                <div>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                    Headquarters
                  </span>
                  <p className="text-white text-xs md:text-sm">
                    Block 5, Edewor Shopping Centre
                  </p>
                  <p className="text-[#8A8A8A] text-[10px] md:text-xs mt-0.5 md:mt-1">
                    Effurun/Sapele Road, Warri, Delta State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-[#C41E24]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#C41E24]" />
                </div>
                <div>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                    International Office
                  </span>
                  <p className="text-white text-xs md:text-sm">
                    22-22 Wenlock Road
                  </p>
                  <p className="text-[#8A8A8A] text-[10px] md:text-xs mt-0.5 md:mt-1">
                    London, England, N1 7GU, Great Britain
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#2D2D2D]/50 backdrop-blur-sm border border-white/5 p-5 md:p-8 lg:p-10"
            >
              <h3 className="font-display text-xl md:text-2xl text-white tracking-wide mb-6 md:mb-8">
                REQUEST OPERATIONAL BRIEF
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#8A8A8A] block mb-1.5 md:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white text-sm focus:border-[#C41E24] focus:outline-none transition-colors duration-300 placeholder:text-[#4A4A4A]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#8A8A8A] block mb-1.5 md:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white text-sm focus:border-[#C41E24] focus:outline-none transition-colors duration-300 placeholder:text-[#4A4A4A]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#8A8A8A] block mb-1.5 md:mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white text-sm focus:border-[#C41E24] focus:outline-none transition-colors duration-300 placeholder:text-[#4A4A4A]"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#8A8A8A] block mb-1.5 md:mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white text-sm focus:border-[#C41E24] focus:outline-none transition-colors duration-300 resize-none placeholder:text-[#4A4A4A]"
                    placeholder="Describe your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#C41E24] text-white font-mono text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#E8333A] transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Sending..."
                  ) : submitted ? (
                    "Inquiry Sent Successfully"
                  ) : (
                    <>
                      <Send size={14} />
                      Send Inquiry
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Interactive Map Section */}
        <div className="mt-16 md:mt-24 border border-white/5 bg-[#2D2D2D]/35 p-4 md:p-6 rounded-lg animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#C41E24]">
                Office Locations
              </span>
              <h3 className="font-display text-xl md:text-2xl text-white tracking-wide mt-1">
                INTERACTIVE DIRECTIONS
              </h3>
            </div>

            {/* Branch Switcher Tabs */}
            <div className="flex bg-[#1A1A1A] p-1 border border-white/5 rounded">
              <button
                type="button"
                onClick={() => handleBranchChange("warri")}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  activeBranch === "warri"
                    ? "bg-[#C41E24] text-white"
                    : "text-[#8A8A8A] hover:text-white"
                }`}
              >
                Warri HQ
              </button>
              <button
                type="button"
                onClick={() => handleBranchChange("london")}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  activeBranch === "london"
                    ? "bg-[#C41E24] text-white"
                    : "text-[#8A8A8A] hover:text-white"
                }`}
              >
                London Office
              </button>
            </div>
          </div>

          <div className="h-[350px] md:h-[450px] overflow-hidden rounded border border-white/5 relative">
            <MapView
              className="w-full h-full"
              initialCenter={{ lat: branches.warri.lat, lng: branches.warri.lng }}
              initialZoom={14}
              onMapReady={handleMapReady}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@concreteconglomerate.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 bg-[#1A1A1A]"
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
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out-smooth)" }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C41E24]">
              Get in Touch
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-white">
              READY TO
              <br />
              <span className="text-[#C41E24]">DISCUSS?</span>
            </h2>
            <p className="mt-6 text-[#8A8A8A] text-base md:text-lg font-light leading-relaxed max-w-md">
              Whether you need marine logistics, EPC delivery, or integrated
              energy solutions — we respond within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6">
              <a
                href="mailto:contact@concreteconglomerate.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-[#C41E24]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C41E24]/20 transition-colors duration-300">
                  <Mail size={18} className="text-[#C41E24]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                    Email
                  </span>
                  <p className="text-white text-sm group-hover:text-[#C41E24] transition-colors duration-300">
                    contact@concreteconglomerate.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+2348082061336"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-[#C41E24]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C41E24]/20 transition-colors duration-300">
                  <Phone size={18} className="text-[#C41E24]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                    Phone
                  </span>
                  <p className="text-white text-sm group-hover:text-[#C41E24] transition-colors duration-300">
                    +234 808 206 1336
                  </p>
                  <p className="text-[#8A8A8A] text-xs mt-1">
                    +234 807 759 8457
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C41E24]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#C41E24]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                    Headquarters
                  </span>
                  <p className="text-white text-sm">
                    Block 5, Edewor Shopping Centre
                  </p>
                  <p className="text-[#8A8A8A] text-xs mt-1">
                    Effurun/Sapele Road, Warri, Delta State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C41E24]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#C41E24]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
                    International Office
                  </span>
                  <p className="text-white text-sm">
                    22-22 Wenlock Road
                  </p>
                  <p className="text-[#8A8A8A] text-xs mt-1">
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
              className="bg-[#2D2D2D]/50 backdrop-blur-sm border border-white/5 p-8 md:p-10"
            >
              <h3 className="font-display text-2xl text-white tracking-wide mb-8">
                REQUEST OPERATIONAL BRIEF
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A8A] block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#C41E24] focus:outline-none transition-colors duration-300 placeholder:text-[#4A4A4A]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A8A] block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#C41E24] focus:outline-none transition-colors duration-300 placeholder:text-[#4A4A4A]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A8A] block mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#C41E24] focus:outline-none transition-colors duration-300 placeholder:text-[#4A4A4A]"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A8A] block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#C41E24] focus:outline-none transition-colors duration-300 resize-none placeholder:text-[#4A4A4A]"
                    placeholder="Describe your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#C41E24] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#E8333A] transition-all duration-300 active:scale-[0.97]"
                >
                  {submitted ? (
                    "Opening Email Client..."
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
      </div>
    </section>
  );
}

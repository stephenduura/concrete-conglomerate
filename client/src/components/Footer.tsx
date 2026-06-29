export default function Footer() {
  return (
    <footer className="relative bg-[#0F0F0F] border-t border-white/5">
      {/* Main Footer */}
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src="/manus-storage/1782362263601_1f8e9c3c.jpg"
                alt="Concrete Petroleum & Gas Ltd"
                className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
              />
              <div>
                <span className="font-display text-base md:text-lg tracking-wider text-white">
                  CONCRETE
                </span>
                <span className="font-display text-base md:text-lg tracking-wider text-[#C41E24] ml-1">
                  PETROLEUM & GAS
                </span>
              </div>
            </div>
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-[#8A8A8A] font-light leading-relaxed max-w-sm">
              Concrete Petroleum and Gas Ltd — Nigeria's indigenous energy and
              infrastructure company delivering integrated solutions with
              operational discipline.
            </p>
            <p className="mt-3 md:mt-4 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A]">
              RC 881354 &bull; CAC Registered
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base md:text-lg text-white tracking-wide mb-4 md:mb-6">
              QUICK LINKS
            </h4>
            <nav className="space-y-2 md:space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Our Clients", href: "#clients" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-[#C41E24] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base md:text-lg text-white tracking-wide mb-4 md:mb-6">
              CONTACT
            </h4>
            <div className="space-y-2 md:space-y-3">
              <a
                href="mailto:contact@concreteconglomerate.com"
                className="block text-xs md:text-sm text-[#8A8A8A] hover:text-[#C41E24] transition-colors duration-300 break-all"
              >
                contact@concreteconglomerate.com
              </a>
              <a
                href="tel:+2348082061336"
                className="block text-xs md:text-sm text-[#8A8A8A] hover:text-[#C41E24] transition-colors duration-300"
              >
                +234 808 206 1336
              </a>
              <a
                href="tel:+2348077598457"
                className="block text-xs md:text-sm text-[#8A8A8A] hover:text-[#C41E24] transition-colors duration-300"
              >
                +234 807 759 8457
              </a>
              <p className="text-xs md:text-sm text-[#4A4A4A] mt-3 md:mt-4">
                Block 5, Edewor Shopping Centre,
                <br />
                Effurun/Sapele Road, Warri,
                <br />
                Delta State, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A] text-center md:text-left">
            &copy; {new Date().getFullYear()} Concrete Petroleum and Gas Ltd. All
            rights reserved.
          </p>
          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-[#4A4A4A]">
            Energy &bull; Infrastructure &bull; Execution
          </p>
        </div>
      </div>
    </footer>
  );
}

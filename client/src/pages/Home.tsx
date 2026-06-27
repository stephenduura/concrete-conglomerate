import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

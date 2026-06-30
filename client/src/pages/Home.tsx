import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudies from "@/components/CaseStudies";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LeadershipSection from "@/components/LeadershipSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

export default function Home() {
  const scrollAnimateProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      
      <motion.div {...scrollAnimateProps}>
        <AboutSection />
      </motion.div>
      
      <motion.div {...scrollAnimateProps}>
        <StatsSection />
      </motion.div>
      
      <motion.div {...scrollAnimateProps}>
        <ServicesSection />
      </motion.div>
      
      <CaseStudies />
      
      <motion.div {...scrollAnimateProps}>
        <WhyChooseUs />
      </motion.div>
      
      <motion.div {...scrollAnimateProps}>
        <LeadershipSection />
      </motion.div>
      
      <motion.div {...scrollAnimateProps}>
        <ClientsSection />
      </motion.div>
      
      <motion.div {...scrollAnimateProps}>
        <ContactSection />
      </motion.div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

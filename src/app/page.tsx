'use client';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioPreviewSection from '@/components/sections/PortfolioPreviewSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioPreviewSection />
      <ContactSection />
    </main>
  );
}

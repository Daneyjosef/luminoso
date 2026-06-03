'use client';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioPreviewSection from '@/components/sections/PortfolioPreviewSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <PortfolioPreviewSection />
      <ContactSection />
    </main>
  );
}

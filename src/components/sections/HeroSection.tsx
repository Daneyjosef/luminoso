'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';

// Import easing directly from GSAP presets
const EASING = {
  smoothOut: 'Power2.easeOut',
  smooth: 'Power2.easeInOut',
};

const VIDEOS = [
  '/DOUBLE-FRAME-FANAL.mp4',
  '/HOME-PAGE-Video.mp4',
  '/LIFE-STYLE-1-FINAL.mp4',
];

const INTERVAL_MS = 8000;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VIDEOS.length);
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Stagger hero content animations
    const timeline = gsap.timeline({ delay: 0.3 });

    timeline
      .fromTo(
        heroHeadingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: EASING.smoothOut,
        },
        0
      )
      .fromTo(
        heroParagraphRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: EASING.smooth,
        },
        0.2
      )
      .fromTo(
        heroButtonsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: EASING.smooth,
        },
        0.4
      );

    // Floating animation for scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 15,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Fallback gradient — always visible, video layers on top */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#1a0f00] to-[#1a0505]" />

        {VIDEOS.map((src, i) => (
          <video
            key={src}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8" ref={heroContentRef}>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            ref={heroHeadingRef}
          >
            From Ideas We Sow to Brands{' '}
            <span className="bg-gradient-to-r from-primary-orange via-primary-red to-primary-orange bg-clip-text text-transparent">
              That Steal the Show
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-light/80 mb-10 max-w-2xl mx-auto"
            ref={heroParagraphRef}
          >
            Premium video production and content marketing that transforms your
            vision into powerful brand experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" ref={heroButtonsRef}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="px-10 py-4 bg-primary-orange text-dark font-bold text-lg rounded-lg hover:bg-primary-red transition-all duration-300 inline-block"
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="px-10 py-4 border-2 border-primary-orange text-primary-orange font-bold text-lg rounded-lg hover:bg-primary-orange hover:text-dark transition-all duration-300 inline-block"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" ref={scrollIndicatorRef}>
          <div className="text-primary-orange">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

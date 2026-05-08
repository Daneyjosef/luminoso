'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useGsapAnimation';
import {
  FiVideo,
  FiShare2,
  FiPenTool,
  FiTrendingUp,
} from 'react-icons/fi';

const EASING = { smoothOut: 'Power2.easeOut', smooth: 'Power2.easeInOut' };
const STAGGER_SETTINGS = { default: 0.15, tight: 0.08 };
const SCROLL_TRIGGERS = {
  default: { start: 'top 80%', end: 'top 20%' },
};

export default function ServicesSection() {
  const titleRef = useScrollAnimation({
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
  });

  const servicesContainerRef = useStaggerAnimation('.service-card', {
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
    stagger: STAGGER_SETTINGS.default,
  });

  const services = [
    {
      icon: FiVideo,
      title: 'Video Production',
      description:
        'From concept to final cut, we deliver cinematic-quality video content that captivates and converts',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiShare2,
      title: 'Social Media Marketing',
      description:
        'Strategic content creation and management across all platforms to amplify your brand voice',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiPenTool,
      title: 'Content Marketing',
      description:
        'Compelling narratives and valuable content that engage audiences and build lasting connections',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiTrendingUp,
      title: 'Video Marketing',
      description:
        'Data-driven video strategies that drive engagement, leads, and revenue growth for your business',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24" ref={titleRef}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-lg text-light/70 max-w-4xl mx-auto">
            LUMINOSO MEDIA is a super content organization, founded year 2010 which
            specializes in VIDEOGRAPHY AND PHOTOGRAPHY PRODUCTION, we have a proven
            track record in delivering quality Documentaries, TV Commercials, memorial
            events and facilitated trainings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={servicesContainerRef}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} className="service-card">
                <motion.div
                  className="h-full p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-primary-orange/50 transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -8, borderColor: '#F28C48' }}
                >
                  <motion.div
                    className="mb-6 inline-block p-4 rounded-lg bg-gradient-to-br from-primary-orange/20 to-primary-red/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-primary-orange" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-light/70 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-6 pt-6 border-t border-white/10 text-primary-orange font-semibold text-sm"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, x: 5 }}
                  >
                    Learn More →
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

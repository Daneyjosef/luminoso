'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useStaggerAnimation, useScrollAnimation } from '@/hooks/useGsapAnimation';

const EASING = { smoothOut: 'Power2.easeOut', smooth: 'Power2.easeInOut' };
const STAGGER_SETTINGS = { default: 0.15, relaxed: 0.25 };
const SCROLL_TRIGGERS = {
  default: { start: 'top 80%', end: 'top 20%' },
  relaxed: { start: 'top 90%', end: 'top 30%' },
};

export default function AboutSection() {
  const titleRef = useScrollAnimation({
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
  });

  const cardsContainerRef = useStaggerAnimation('.team-card', {
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
    stagger: STAGGER_SETTINGS.default,
  });

  const teamMembers = [
    {
      name: 'Michael Oladele',
      role: 'CEO/Creative Director',
      image: '/Michael Oladele.jpeg',
      bio: 'Michael is an experienced Creative Producer with 10+ years in content creation, cinematography, drone piloting, and post-production',
    },
    {
      name: 'Marcus Johnson',
      role: 'Video Producer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Technical maestro bringing cinematic quality to every frame',
    },
    {
      name: 'Daniel Joseph',
      role: 'IT Specialist',
      image: '/Daniel Joseph.JPG',
      bio: 'A digital executive and strategist with a strong background in business communications, operations, product design, networking, and cybersecurity',
    },
  ];

  return (
    <section id="about" className="py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-primary-red" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24" ref={titleRef}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            A collective of creative minds dedicated to delivering exceptional
            results and transforming visions into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" ref={cardsContainerRef}>
          {teamMembers.map((member, index) => (
            <motion.div key={index} className="team-card">
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-72 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-orange font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-light/60">{member.bio}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

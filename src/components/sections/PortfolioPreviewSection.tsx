'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useGsapAnimation';

const EASING = { smoothOut: 'Power2.easeOut', smooth: 'Power2.easeInOut' };
const STAGGER_SETTINGS = { tight: 0.08, default: 0.15, relaxed: 0.25 };
const SCROLL_TRIGGERS = {
  default: { start: 'top 80%', end: 'top 20%' },
  late: { start: 'top 70%', end: 'top 10%' },
};

export default function PortfolioPreviewSection() {
  const titleRef = useScrollAnimation({
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
  });

  const portfolioContainerRef = useStaggerAnimation('.portfolio-item', {
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.7,
    ease: EASING.smoothOut,
    stagger: STAGGER_SETTINGS.tight,
  });

  const buttonRef = useScrollAnimation({
    start: SCROLL_TRIGGERS.late.start,
    end: SCROLL_TRIGGERS.late.end,
    duration: 0.8,
    ease: EASING.smooth,
  });

  const portfolioItems = [
    {
      id: 1,
      title: 'Urban Exploration',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c04352fa?w=600&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Brand Identity',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Commercial Spot',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1574607746814-792c40ef7b11?w=600&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'Product Showcase',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    },
    {
      id: 5,
      title: 'Lifestyle Content',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop',
    },
    {
      id: 6,
      title: 'Corporate Event',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop',
    },
  ];

  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24" ref={titleRef}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Recent Work
          </h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            A curated selection of our latest projects showcasing our
            versatility and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" ref={portfolioContainerRef}>
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className="portfolio-item group cursor-pointer"
            >
              <motion.div
                className="relative h-80 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-orange text-sm font-semibold">
                    {item.category}
                  </p>
                </motion.div>

                {/* Play Icon for Videos */}
                {item.category === 'Video' && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-primary-orange/90 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-dark ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center" ref={buttonRef}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/portfolio"
              className="inline-block px-12 py-4 bg-primary-orange text-dark font-bold text-lg rounded-lg hover:bg-primary-red transition-all duration-300"
            >
              View Full Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

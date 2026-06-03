'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useGsapAnimation';

const EASING = { smoothOut: 'Power2.easeOut', smooth: 'Power2.easeInOut' };
const FRAMER_EASING = { smoothOut: 'easeOut', smooth: 'easeInOut' };
const STAGGER_SETTINGS = { tight: 0.08, default: 0.15 };
const SCROLL_TRIGGERS = { default: { start: 'top 80%', end: 'top 20%' } };

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const titleRef = useScrollAnimation({
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
  });

  const filterRef = useStaggerAnimation('.filter-btn', {
    start: 'top 95%',
    end: 'top 50%',
    duration: 0.6,
    ease: EASING.smooth,
    stagger: STAGGER_SETTINGS.tight,
  });

  const portfolioItems = [
    {
      id: 1,
      title: 'Urban Exploration',
      category: 'video',
      image: '/new image.jpg',
      description: 'A cinematic journey through urban landscapes',
    },
    {
      id: 2,
      title: 'Brand Identity',
      category: 'photography',
      image: '/new image 4.jpg',
      description: 'Corporate branding and identity work',
    },
    {
      id: 3,
      title: 'Commercial Spot',
      category: 'video',
      image: '/new image 5.jpg',
      description: '30-second commercial for premium brand',
    },
    {
      id: 4,
      title: 'Product Showcase',
      category: 'photography',
      image: '/new image 7.jpg',
      description: 'High-end product photography',
    },
    {
      id: 5,
      title: 'Lifestyle Content',
      category: 'video',
      image: '/new image 8.jpg',
      description: 'Modern lifestyle brand video',
    },
    {
      id: 6,
      title: 'Corporate Event',
      category: 'photography',
      image: '/new image 9.jpg',
      description: 'Annual conference documentation',
    },
    {
      id: 7,
      title: 'Fashion Campaign',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      description: 'Fashion brand campaign video',
    },
    {
      id: 8,
      title: 'Tech Product Launch',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop',
      description: 'Technology product launch event',
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Video', value: 'video' },
    { name: 'Photography', value: 'photography' },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  // Animate filter change
  useEffect(() => {
    const gridItems = document.querySelectorAll('.portfolio-grid-item');
    gsap.fromTo(
      gridItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: EASING.smoothOut,
        stagger: STAGGER_SETTINGS.tight,
      }
    );
  }, [activeFilter]);

  return (
    <main className="pt-32 pb-20 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={titleRef}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            A showcase of our finest work across video production, photography,
            and content creation
          </p>
        </div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          ref={filterRef}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className="filter-btn px-8 py-3 font-bold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor:
                  activeFilter === filter.value ? '#F28C48' : 'transparent',
                color: activeFilter === filter.value ? '#0F0F0F' : '#F28C48',
                borderColor: activeFilter === filter.value ? '#F28C48' : '#F28C48',
              }}
              initial={false}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                className="portfolio-grid-item group cursor-pointer"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: FRAMER_EASING.smooth }}
              >
                <motion.div
                  className="relative h-96 overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, ease: FRAMER_EASING.smooth }}
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
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-light/80 text-sm mb-4">
                      {item.description}
                    </p>
                    <p className="text-primary-orange text-sm font-semibold capitalize">
                      {item.category}
                    </p>
                  </motion.div>

                  {/* Play Icon for Videos */}
                  {item.category === 'video' && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 bg-primary-orange/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg
                          className="w-10 h-10 text-dark ml-1"
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
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedItem(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Modal Content */}
              <motion.div
                className="relative z-10 w-full max-w-4xl mx-auto px-4"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: FRAMER_EASING.smoothOut }}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary-orange transition-colors duration-300"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <motion.div className="rounded-xl overflow-hidden">
                  {portfolioItems.find((item) => item.id === selectedItem) && (
                    <>
                      <div className="relative w-full h-[60vh]">
                        <Image
                          src={
                            portfolioItems.find((item) => item.id === selectedItem)
                              ?.image || ''
                          }
                          alt="Portfolio item"
                          fill
                          className="object-contain"
                          sizes="100vw"
                        />
                      </div>
                      <div className="p-6 bg-dark/50 backdrop-blur-md">
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {
                            portfolioItems.find(
                              (item) => item.id === selectedItem
                            )?.title
                          }
                        </h2>
                        <p className="text-light/70">
                          {
                            portfolioItems.find(
                              (item) => item.id === selectedItem
                            )?.description
                          }
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

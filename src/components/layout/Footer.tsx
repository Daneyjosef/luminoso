'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useGsapAnimation';
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
} from 'react-icons/fi';

const EASING = { smoothOut: 'Power2.easeOut', smooth: 'Power2.easeInOut' };
const STAGGER_SETTINGS = { default: 0.15, relaxed: 0.25 };
const SCROLL_TRIGGERS = { default: { start: 'top 80%', end: 'top 20%' } };

export default function Footer() {
  const brandRef = useScrollAnimation({
    start: 'top 80%',
    end: 'top 20%',
    duration: 0.8,
    ease: EASING.smooth,
  });

  const colsContainerRef = useStaggerAnimation('.footer-col', {
    start: 'top 80%',
    end: 'top 20%',
    duration: 0.8,
    ease: EASING.smooth,
    stagger: STAGGER_SETTINGS.relaxed,
  });

  const bottomRef = useScrollAnimation({
    start: 'bottom 20%',
    end: 'bottom 5%',
    duration: 0.8,
    ease: EASING.smooth,
  });

  const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          ref={colsContainerRef}
        >
          {/* Brand */}
          <div className="footer-col" ref={brandRef}>
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-primary-orange to-primary-red bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Luminoso
            </motion.h3>
            <p className="text-light/60 text-sm">
              We tell stories that move brands and inspire audiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="text-light font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Portfolio', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/#${link.toLowerCase()}`}
                    className="text-light/60 hover:text-primary-orange transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="text-light font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Video Production', 'Social Media', 'Content Marketing', 'Video Marketing'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-light/60 hover:text-primary-orange transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer-col">
            <h4 className="text-light font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-light/60 hover:text-primary-orange transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8" ref={bottomRef}>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-light/40 text-sm">
              © 2026 Luminoso Media. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a
                href="#"
                className="text-light/40 hover:text-primary-orange transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-light/40 hover:text-primary-orange transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useGsapAnimation';

const EASING = { smoothOut: 'Power2.easeOut', smooth: 'Power2.easeInOut' };
const STAGGER_SETTINGS = { default: 0.15, relaxed: 0.25 };
const SCROLL_TRIGGERS = {
  default: { start: 'top 80%', end: 'top 20%' },
};
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const titleRef = useScrollAnimation({
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
  });

  const infoContainerRef = useStaggerAnimation('.contact-info-item', {
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
    stagger: STAGGER_SETTINGS.relaxed,
  });

  const formRef = useScrollAnimation({
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smooth,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'daniel@theluminosomedia.com',
      value2: 'moladele@luminosomedia.com',
      href: 'mailto:daniel@theluminosomedia.com',
      href2: 'mailto:moladele@luminosomedia.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+234 818 052 7219',
      href: 'tel:+2348180527219',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Nigeria: 9 Afolabi Aina street, Ikeja Lagos',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-darker relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-primary-red" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24" ref={titleRef}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Create Magic Together
          </h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let&apos;s bring your
            vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8" ref={infoContainerRef}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="contact-info-item flex items-start gap-6 group"
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-orange to-primary-red flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-light/60 text-sm font-semibold mb-1">
                      {info.label}
                    </p>
                    {'value2' in info && info.value2 ? (
                      <div className="space-y-1">
                        <a
                          href={info.href}
                          className="text-white font-medium hover:text-primary-orange transition-colors duration-300 block"
                        >
                          {info.value}
                        </a>
                        <a
                          href={info.href2 || '#'}
                          className="text-white font-medium hover:text-primary-orange transition-colors duration-300 block"
                        >
                          {info.value2}
                        </a>
                      </div>
                    ) : (
                      <a
                        href={info.href}
                        className="text-white font-medium hover:text-primary-orange transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10"
            >
              <div>
                <label className="block text-white font-medium mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-light/40 focus:border-primary-orange focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-light/40 focus:border-primary-orange focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-light/40 focus:border-primary-orange focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className={`w-full py-3 font-bold text-lg rounded-lg transition-all duration-300 ${isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-primary-orange text-dark hover:bg-primary-red'
                    }`}
                >
                  {isSubmitted ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

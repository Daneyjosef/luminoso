'use client';

import { useScrollAnimation } from '@/hooks/useGsapAnimation';

const EASING = { smoothOut: 'Power2.easeOut' };
const SCROLL_TRIGGERS = {
  default: { start: 'top 80%', end: 'top 20%' },
};

export default function AboutSection() {
  const titleRef = useScrollAnimation({
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
  });

  const contentRef = useScrollAnimation({
    start: 'top 85%',
    end: 'top 25%',
    duration: 0.8,
    ease: EASING.smoothOut,
  });

  const whyChooseRef = useScrollAnimation({
    start: 'top 85%',
    end: 'top 25%',
    duration: 0.8,
    ease: EASING.smoothOut,
  });

  const whyChooseItems = [
    'Professional Videography & Photography Production',
    'Creative Storytelling & Brand-Focused Content',
    'Strategic Brand Communication & Marketing Solutions',
    'Digital Marketing & Social Media Campaign Management',
    'TV Commercials, Documentaries & Corporate Video Production',
    'Event Coverage & Professional Media Production',
    'Content Strategy Designed to Drive Visibility and Engagement',
    'Experienced Creative, Marketing & Technical Team',
    'End-to-End Project Execution with Excellence',
    'Results-Driven Approach Focused on Brand Growth and Impact',
  ];

  return (
    <section id="about" className="py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-primary-red" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Luminoso Media
          </h2>
          <div className="w-24 h-1 bg-primary-orange mx-auto" />
        </div>

        <div className="space-y-6 text-lg text-light/80 leading-relaxed" ref={contentRef}>
          <p>
            Luminoso Media is a leading content production company established in 2010, specializing in
            videography, photography, creative media production, strategic brand communication, and
            marketing solutions. With a proven track record of delivering high-quality documentaries, TV
            commercials, corporate content, event coverage, digital marketing campaigns, and professional
            training facilitation, we are committed to transforming ideas into compelling visual experiences
            that leave a lasting impact. Through a results-driven approach focused on brand growth and
            impact, we help businesses, organizations, and individuals strengthen their visibility, connect
            with their audiences, and achieve meaningful outcomes through powerful storytelling and
            innovative media solutions.
          </p>

          <p>
            At Luminoso Media, we bring together a highly skilled team of creative strategists, visual
            storytellers, client service professionals, and production experts who manage every stage of a
            project, from concept development to final delivery. Our collaborative and detail-driven
            approach ensures excellence, creativity, and precision in every production.
          </p>

          <p>
            We are a fully registered and legally recognized company under the Nigerian Corporate Affairs
            Commission (CAC), authorized to operate within Nigeria and internationally. Our reputation is
            built on professionalism, innovation, and an unwavering commitment to delivering results that
            exceed client expectations.
          </p>

          <p>
            Our vision is to become one of the most respected and influential media production companies
            within our areas of expertise. We believe exceptional results are achieved through teamwork,
            creativity, strategic planning, and technical excellence. By combining innovation with purpose-
            driven storytelling, we strive to create content that not only elevates brands but also delivers
            meaningful impact to businesses, communities, and society.
          </p>
        </div>

        <div className="mt-20" ref={whyChooseRef}>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
            Why Choose Luminoso Media?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-primary-orange text-xl mt-0.5 flex-shrink-0">&#10003;</span>
                <span className="text-lg text-light/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

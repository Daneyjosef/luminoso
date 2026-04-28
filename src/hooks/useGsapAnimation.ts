'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  duration?: number;
  ease?: string;
}

/**
 * Hook for scroll-triggered animations using GSAP
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const {
    start = 'top 80%',
    end = 'top 20%',
    scrub = false,
    markers = false,
    duration = 0.8,
    ease = 'Power3.easeOut',
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        ease: ease || 'Power3.easeOut',
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
          markers,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [start, end, scrub, markers, duration, ease]);

  return elementRef;
};

/**
 * Hook for staggered animations on child elements
 */
export const useStaggerAnimation = (
  containerSelector: string,
  options: ScrollAnimationOptions & { stagger?: number } = {}
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    start = 'top 80%',
    end = 'top 20%',
    scrub = false,
    markers = false,
    duration = 0.6,
    ease = 'Power2.easeOut',
    stagger = 0.15,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(containerSelector);
    if (children.length === 0) return;

    gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: container,
          start,
          end,
          scrub,
          markers,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [containerSelector, start, end, scrub, markers, duration, ease, stagger]);

  return containerRef;
};

/**
 * Hook for parallax scroll effects
 */
export const useParallaxScroll = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(element, {
      yPercent: -50 * (1 - speed),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        scrub: 1,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return elementRef;
};

/**
 * Hook for number counting animations
 */
export const useCountUp = (
  targetValue: number,
  duration: number = 2,
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef({ value: 0 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(valueRef.current, {
      value: targetValue,
      duration,
      ease: 'power1.inOut',
      onUpdate: () => {
        if (element) {
          element.textContent = Math.floor(valueRef.current.value).toLocaleString();
        }
      },
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top 80%',
        end: options.end || 'top 20%',
        scrub: options.scrub || false,
        markers: options.markers || false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [targetValue, duration, options]);

  return elementRef;
};

/**
 * Utility function to create smooth scroll to element
 */
export const smoothScrollToElement = (elementId: string) => {
  gsap.to(window, {
    scrollTo: { y: `#${elementId}`, autoKill: false },
    duration: 1.5,
    ease: 'power3.inOut',
  });
};

/**
 * Utility to refresh ScrollTrigger (call after adding/removing elements)
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

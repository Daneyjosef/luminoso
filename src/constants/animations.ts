/**
 * GSAP Animation Constants and Easing Functions
 * Designed to match Ark Media House smooth, cinematic feel
 * Note: Using GSAP 3.x easing syntax (Power2.easeOut vs power2.out)
 */

// Easing functions for various effects
export const EASING = {
  // Smooth, natural easing (most common)
  smooth: 'Power2.easeInOut',
  smoothOut: 'Power2.easeOut',
  smoothIn: 'Power2.easeIn',

  // Faster, more energetic easing
  energetic: 'Power3.easeOut',
  energeticIn: 'Power3.easeIn',

  // Slower, more deliberate easing
  deliberate: 'Power1.easeOut',

  // Bounce effects
  bounce: 'Back.easeOut(1.7)',
  elastic: 'Elastic.easeOut(1.2, 0.5)',

  // Linear (no easing)
  linear: 'none',

  // Standard easing shortcuts
  easeOut: 'Power2.easeOut',
  easeInOut: 'Power2.easeInOut',
};

// Scroll trigger presets
export const SCROLL_TRIGGERS = {
  // Default - element animates when it reaches 80% from top
  default: {
    start: 'top 80%',
    end: 'top 20%',
  },

  // Early - animations trigger earlier
  early: {
    start: 'top 90%',
    end: 'top 30%',
  },

  // Late - animations trigger later
  late: {
    start: 'top 70%',
    end: 'top 10%',
  },

  // Full viewport
  full: {
    start: 'top bottom',
    end: 'top top',
  },

  // Parallax
  parallax: {
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
  },
};

// Animation presets
export const ANIMATION_PRESETS = {
  // Fade in
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 0.8,
    ease: EASING.smooth,
  },

  // Slide up
  slideUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: EASING.smoothOut,
  },

  // Slide down
  slideDown: {
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: EASING.smoothOut,
  },

  // Slide left
  slideLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    duration: 0.8,
    ease: EASING.smoothOut,
  },

  // Slide right
  slideRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
    duration: 0.8,
    ease: EASING.smoothOut,
  },

  // Zoom in
  zoomIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    duration: 0.8,
    ease: EASING.smoothOut,
  },

  // Scale up
  scaleUp: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    duration: 0.9,
    ease: EASING.energetic,
  },

  // Premium fade (slower, more deliberate)
  premiumFade: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 1.2,
    ease: EASING.deliberate,
  },

  // Hero slide
  heroSlide: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    duration: 1.0,
    ease: EASING.smoothOut,
  },
};

// Stagger settings
export const STAGGER_SETTINGS = {
  // Tight stagger (fast sequence)
  tight: 0.08,

  // Default stagger
  default: 0.15,

  // Relaxed stagger
  relaxed: 0.25,

  // Slow stagger (cinematic)
  slow: 0.35,

  // Ultra-slow (very cinematic)
  cinematic: 0.5,
};

// Parallax speed presets
export const PARALLAX_SPEEDS = {
  slow: 0.3,
  normal: 0.5,
  fast: 0.7,
  verySlow: 0.2,
  veryFast: 0.9,
};

// Scrub settings for scroll-linked animations
export const SCRUB_SETTINGS = {
  // Smooth, non-scrubbed animations
  smooth: false,

  // Light scrub (0.5 seconds of smoothing)
  light: 0.5,

  // Medium scrub (1 second of smoothing)
  medium: 1,

  // Heavy scrub (1.5 seconds of smoothing)
  heavy: 1.5,

  // Full scrub (direct scroll link)
  full: true,
};

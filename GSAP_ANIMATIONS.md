# GSAP Animation System Documentation

## Overview

This project uses **GSAP (GreenSock Animation Platform)** with ScrollTrigger for smooth, cinematic animations matching Ark Media House's aesthetic. All scroll-triggered animations are powered by GSAP for optimal performance and smooth easing.

## 🎬 Animation Features

### 1. **Scroll Triggers**
Animations trigger when elements enter the viewport with smooth easing and stagger effects.

**Used in:**
- Hero content fade-in
- Section titles
- Card animations
- Button reveals

### 2. **Stagger Effects**
Sequential animations with customizable timing create a professional cascade effect.

**Stagger Timings:**
- `tight` (0.08s) - Fast sequence
- `default` (0.15s) - Standard spacing
- `relaxed` (0.25s) - Casual spacing
- `slow` (0.35s) - Cinematic feel
- `cinematic` (0.5s) - Ultra-smooth

### 3. **Easing Functions**
Premium easing curves for natural, cinematic motion.

**Available Easings:**
```typescript
EASING.smooth       // power2.inOut - default smooth motion
EASING.smoothOut    // power2.out - exit animations
EASING.smoothIn     // power2.in - entrance animations
EASING.energetic    // power3.out - snappy, energetic feel
EASING.deliberate   // power1.out - slow, premium feel
EASING.bounce       // back.out(1.7) - bounce effect
EASING.elastic      // elastic.out(1.2, 0.5) - elastic bounce
EASING.linear       // none - no easing
```

---

## 🪝 Custom Hooks

### `useScrollAnimation(options)`
Trigger animations when elements enter viewport with fade + slide effect.

**Basic Usage:**
```typescript
const elementRef = useScrollAnimation({
  start: 'top 80%',
  end: 'top 20%',
  duration: 0.8,
  ease: EASING.smoothOut,
});

return <div ref={elementRef}>Content</div>;
```

**Options:**
- `start` - When animation starts (default: 'top 80%')
- `end` - When animation ends (default: 'top 20%')
- `duration` - Animation length in seconds (default: 0.8)
- `ease` - Easing function (default: 'power3.out')
- `scrub` - Scroll-linked animation (default: false)

---

### `useStaggerAnimation(containerSelector, options)`
Stagger child elements with automatic sequencing.

**Basic Usage:**
```typescript
const containerRef = useStaggerAnimation('.team-card', {
  start: SCROLL_TRIGGERS.default.start,
  end: SCROLL_TRIGGERS.default.end,
  duration: 0.8,
  ease: EASING.smoothOut,
  stagger: STAGGER_SETTINGS.default,
});

return (
  <div ref={containerRef}>
    <div className="team-card">Card 1</div>
    <div className="team-card">Card 2</div>
    <div className="team-card">Card 3</div>
  </div>
);
```

**Key Points:**
- Pass CSS selector for children to animate
- Each child will animate in sequence
- Use stagger values for timing control

---

### `useParallaxScroll(speed)`
Create depth effects with parallax scrolling.

**Basic Usage:**
```typescript
const elementRef = useParallaxScroll(0.5);

return (
  <div ref={elementRef} className="h-96">
    Background content moves slower than scroll
  </div>
);
```

**Speed Values:**
- `0.2` - Very slow (deep background)
- `0.5` - Normal parallax
- `0.7` - Fast parallax

---

### `useCountUp(targetValue, duration, options)`
Animate numbers counting up with ease.

**Basic Usage:**
```typescript
const countRef = useCountUp(100, 2, {
  start: 'top 80%',
  end: 'top 20%',
});

return <div ref={countRef}>0</div>; // animates to 100
```

---

## 📦 Constants & Presets

### Scroll Trigger Presets
```typescript
SCROLL_TRIGGERS.default   // Start at 80% from top
SCROLL_TRIGGERS.early     // Start at 90% from top
SCROLL_TRIGGERS.late      // Start at 70% from top
SCROLL_TRIGGERS.full      // Full viewport
SCROLL_TRIGGERS.parallax  // Parallax scroll settings
```

### Stagger Settings
```typescript
STAGGER_SETTINGS.tight      // 0.08s between items
STAGGER_SETTINGS.default    // 0.15s between items
STAGGER_SETTINGS.relaxed    // 0.25s between items
STAGGER_SETTINGS.slow       // 0.35s between items
STAGGER_SETTINGS.cinematic  // 0.5s between items
```

---

## 🔧 Utility Functions

### `smoothScroll(elementId)`
Smooth scroll to any element using GSAP.

```typescript
import { smoothScroll } from '@/utils/helpers';

smoothScroll('contact-section');
```

### `refreshScrollTrigger()`
Refresh ScrollTrigger when content changes dynamically.

```typescript
import { refreshScrollTrigger } from '@/utils/helpers';

// After adding new elements
refreshScrollTrigger();
```

### `killAllAnimations()`
Stop all GSAP animations (useful for cleanup).

```typescript
import { killAllAnimations } from '@/utils/helpers';

// On component unmount or state change
killAllAnimations();
```

---

## 🎯 Animation Examples

### Example 1: Section Title with Fade
```typescript
import { useScrollAnimation } from '@/hooks/useGsapAnimation';
import { EASING, SCROLL_TRIGGERS } from '@/constants/animations';

export default function Section() {
  const titleRef = useScrollAnimation({
    start: SCROLL_TRIGGERS.default.start,
    end: SCROLL_TRIGGERS.default.end,
    duration: 0.8,
    ease: EASING.smoothOut,
  });

  return (
    <h2 ref={titleRef} className="text-4xl font-bold">
      Section Title
    </h2>
  );
}
```

### Example 2: Staggered Cards
```typescript
import { useStaggerAnimation } from '@/hooks/useGsapAnimation';
import { STAGGER_SETTINGS } from '@/constants/animations';

export default function CardGrid() {
  const containerRef = useStaggerAnimation('.card', {
    stagger: STAGGER_SETTINGS.relaxed,
  });

  return (
    <div className="grid grid-cols-3 gap-8" ref={containerRef}>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
    </div>
  );
}
```

### Example 3: Parallax Background
```typescript
import { useParallaxScroll } from '@/hooks/useGsapAnimation';

export default function HeroSection() {
  const bgRef = useParallaxScroll(0.5);

  return (
    <div ref={bgRef} className="h-screen bg-cover">
      Background moves slower than scroll
    </div>
  );
}
```

---

## 🎨 Animation Workflow

### Step 1: Choose Animation Type
- **Scroll Trigger**: Use for on-scroll animations
- **Stagger**: Use for multiple elements
- **Parallax**: Use for depth effects
- **Instant**: Use Framer Motion's `whileHover` for interaction

### Step 2: Select Timing
```typescript
// Entrance animation (slower for polish)
duration: 0.8

// Card animations (quick)
duration: 0.6

// Page transitions (smooth)
duration: 1.0
```

### Step 3: Choose Easing
```typescript
// Entrance - smooth and natural
ease: EASING.smoothOut

// Premium feel - slower, deliberate
ease: EASING.deliberate

// Energy - snappy and quick
ease: EASING.energetic
```

### Step 4: Set Stagger (if multiple elements)
```typescript
// Sequential cards
stagger: STAGGER_SETTINGS.relaxed

// Fast sequence
stagger: STAGGER_SETTINGS.tight

// Very cinematic
stagger: STAGGER_SETTINGS.cinematic
```

---

## 🚀 Performance Tips

1. **Avoid excessive animations** - Too many simultaneous animations hurt performance
2. **Use scrub sparingly** - Scrubbed animations are expensive; prefer non-scrubbed
3. **Cleanup hooks** - Always return cleanup functions from useEffect
4. **Refresh on demand** - Only call `refreshScrollTrigger()` when needed
5. **Mobile considerations** - Consider disabling complex animations on mobile

---

## 🔌 Integrating with Existing Code

### Replacing Framer Motion `whileInView`
**Before (Framer Motion):**
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

**After (GSAP):**
```typescript
const ref = useScrollAnimation({
  duration: 0.6,
  ease: EASING.smoothOut,
});

<div ref={ref}>Content</div>
```

---

## 📱 Mobile-Friendly Animations

All animations are mobile-responsive:
- Animations trigger appropriately on smaller screens
- Touch events still work smoothly
- Performance optimized for mobile devices

---

## 🛠 Troubleshooting

### Animation Not Triggering
- Check viewport position with `markers: true`
- Ensure element ref is attached correctly
- Verify ScrollTrigger is registered

### Performance Issues
- Reduce number of simultaneous animations
- Use `scrub: false` instead of `scrub: 1`
- Profile with Chrome DevTools

### Animations Running Twice
- Remove duplicate ref assignments
- Clear animations on unmount
- Check for multiple providers

---

## 📚 Resources

- **GSAP Docs**: https://greensock.com/docs/
- **ScrollTrigger Guide**: https://greensock.com/scrolltrigger/
- **Easing Visualizer**: https://greensock.com/ease-visualizer/
- **Examples**: See component files for practical implementations

---

## ✅ Animation Checklist

- [ ] Import GSAP hook and constants
- [ ] Create ref with appropriate hook
- [ ] Attach ref to element
- [ ] Set duration and easing
- [ ] Configure scroll trigger if needed
- [ ] Test on mobile
- [ ] Check performance

---

This animation system provides a professional, cinematic feel while maintaining excellent performance and accessibility. 🎬✨

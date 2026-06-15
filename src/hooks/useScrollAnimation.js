import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapConfig';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const {
    from = { opacity: 0, y: 60 },
    to = { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    start = 'top 82%',
    stagger = false,
    selector = null,
    delay = 0,
  } = options;

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = ref.current;
    if (!el) return;

    const targets = selector ? el.querySelectorAll(selector) : [el];

    const animation = gsap.fromTo(targets, from, {
      ...to,
      delay,
      stagger: stagger ? 0.12 : 0,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return ref;
}

export function useStaggerAnimation(selector, options = {}) {
  const ref = useRef(null);
  const {
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    start = 'top 80%',
    stagger = 0.12,
  } = options;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(selector);
    if (!targets.length) return;

    const animation = gsap.fromTo(targets, from, {
      ...to,
      stagger,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return ref;
}

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2,
  className = '',
}) {
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (countRef.current) countRef.current.textContent = target + suffix;
      return;
    }

    const el = countRef.current;
    if (!el) return;

    const obj = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        gsap.to(obj, {
          value: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.value) + suffix;
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [target, suffix, duration]);

  return (
    <span
      ref={countRef}
      className={`font-display font-bold ${className}`}
    >
      0{suffix}
    </span>
  );
}

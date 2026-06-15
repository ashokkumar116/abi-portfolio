import { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../../data/testimonials';
import { gsap } from '../../utils/gsapConfig';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);

  const items = testimonialsData.items;

  const goTo = (index) => {
    if (index === activeIndex) return;

    if (cardRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const direction = index > activeIndex ? 30 : -30;
      gsap.to(cardRef.current, {
        opacity: 0,
        x: -direction,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          setActiveIndex(index);
          gsap.fromTo(
            cardRef.current,
            { opacity: 0, x: direction },
            { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
          );
        },
      });
    } else {
      setActiveIndex(index);
    }
  };

  const next = () => goTo((activeIndex + 1) % items.length);
  const prev = () => goTo((activeIndex - 1 + items.length) % items.length);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, isHovered]);

  const active = items[activeIndex];

  return (
    <div className="section-padding bg-bg-2">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow={testimonialsData.eyebrow}
          title={testimonialsData.heading}
          align="center"
        />

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
          id="testimonials-carousel"
        >
          {/* Card */}
          <GlassCard
            ref={cardRef}
            className="p-8 md:p-12 text-center"
            id="testimonials-active-card"
          >
            {/* Quote Mark */}
            <div className="text-6xl font-display text-accent opacity-30 leading-none mb-4 font-bold">
              "
            </div>

            {/* Quote */}
            <p className="text-text text-lg md:text-xl leading-relaxed mb-8 font-light">
              {active.quote}
            </p>

            {/* Author */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-display font-bold text-white text-lg shadow-[0_0_20px_rgba(192,57,43,0.4)]">
                {active.initial}
              </div>
              <div>
                <p className="text-text font-semibold">{active.name}</p>
                <p className="text-text-muted text-sm font-mono">
                  {active.role} · {active.company}
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-text hover:border-accent transition-all duration-200"
              id="testimonials-prev-btn"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2" id="testimonials-dots">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-accent' : 'w-1.5 bg-border hover:bg-text-muted'
                  }`}
                  id={`testimonials-dot-${i}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-text hover:border-accent transition-all duration-200"
              id="testimonials-next-btn"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

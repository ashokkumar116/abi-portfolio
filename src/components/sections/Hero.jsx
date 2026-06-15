import { useEffect, useRef } from 'react';
import { heroData } from '../../data/hero';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import Button from '../ui/Button';

const iconStyles = {
  Ps: { position: 'top-[8%] -left-[5%]', bg: 'bg-[#31A8FF]' },
  Ai: { position: 'top-[18%] -right-[4%]', bg: 'bg-[#FF9A00]' },
  Ae: { position: 'bottom-[32%] -left-[6%]', bg: 'bg-[#9999FF]' },
  Fg: { position: 'bottom-[18%] -right-[3%]', bg: 'bg-[#F24E1E]' },
  Id: { position: 'top-[52%] -left-[8%]', bg: 'bg-[#FF3366]' },
  Lr: { position: 'top-[68%] -right-[6%]', bg: 'bg-[#31A8FF]' },
};

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const eyebrowRef = useRef(null);
  const trustedRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.fonts.ready.then(() => {
      const ctx = gsap.context(() => {
        // Page load timeline
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(eyebrowRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6 })
          .fromTo(headingRef.current.querySelectorAll('.hero-word'),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
            '-=0.2'
          )
          .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
          .fromTo(trustedRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
          .fromTo(statsRef.current?.children ? Array.from(statsRef.current.children) : [],
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
            '-=0.3'
          )
          .fromTo(ctaRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
          .fromTo(imageRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.4');

        // Floating icons GSAP loop
        iconsRef.current.forEach((icon, i) => {
          if (!icon) return;
          gsap.to(icon, {
            y: `${(i % 2 === 0 ? -1 : 1) * 15}px`,
            rotation: (i % 2 === 0 ? -5 : 5),
            duration: 2 + i * 0.3,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: i * 0.2,
          });
        });
      }, containerRef);

      return () => ctx.revert();
    });
  }, []);

  const words = [heroData.heading.split(' '), [heroData.headingAccent]];
  const allWords = [...heroData.heading.split(' '), heroData.headingAccent];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent opacity-5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-accent-glow opacity-4 blur-[100px]" />
        {/* Ghost grid */}
        <div className="absolute inset-0 opacity-[0.03] grid-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              className="opacity-0 flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 eyebrow-label">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {heroData.eyebrow}
              </span>
            </div>

            <h1
              ref={headingRef}
              className="display-heading text-5xl md:text-6xl lg:text-7xl text-text leading-[1.05]"
            >
              <span className="flex flex-wrap gap-x-3 md:gap-x-4">
                {heroData.heading.split(' ').map((word, i) => (
                  <span key={i} className="hero-word opacity-0 inline-block">
                    {word}
                  </span>
                ))}
              </span>
              <span className="hero-word opacity-0 inline-block text-gradient mt-1 md:mt-2">
                {heroData.headingAccent}
              </span>
            </h1>

            {/* Subheading */}
            <p
              ref={subRef}
              className="opacity-0 text-text-muted text-lg leading-relaxed max-w-lg"
            >
              {heroData.subheading}
            </p>

            {/* Trusted By */}
            <div ref={trustedRef} className="opacity-0">
              <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-3">
                Trusted by
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {heroData.trustedBy.map((brand, i) => (
                  <span
                    key={brand.id}
                    className="text-text-muted text-xs font-mono px-3 py-1.5 border border-border rounded-full hover:border-accent transition-colors duration-200"
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex items-center gap-8">
              {heroData.stats.map((stat, i) => (
                <div key={i} className="opacity-0">
                  <div className="font-display font-bold text-3xl text-text">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  <div className="text-text-muted text-xs font-mono mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="opacity-0 flex items-center gap-4 flex-wrap">
              <Button
                href={heroData.cta.primary.href}
                variant="primary"
                size="lg"
                id="hero-cta-primary"
              >
                {heroData.cta.primary.label}
              </Button>
              <Button
                href={heroData.cta.secondary.href}
                variant="secondary"
                size="lg"
                id="hero-cta-secondary"
              >
                {heroData.cta.secondary.label}
              </Button>
            </div>
          </div>

          {/* Right Column — Image + Floating Icons */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            {/* Image container */}
            <div
              ref={imageRef}
              className="opacity-0 relative z-10 w-72 h-80 md:w-80 md:h-96 lg:w-88 lg:h-[420px]"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-2xl bg-accent opacity-10 blur-2xl scale-110" />

              {/* Image frame */}
              <div className="relative w-full h-full rounded-2xl border border-[rgba(192,57,43,0.3)] overflow-hidden shadow-[0_0_60px_rgba(192,57,43,0.2)]">
                {/* Photo placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-bg-3 to-bg-2 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-[0_0_30px_rgba(192,57,43,0.5)]">
                      <span className="font-display font-bold text-3xl text-white">AK</span>
                    </div>
                    <p className="text-text-muted text-sm font-mono">Abishek Kumar P</p>
                    <p className="text-accent text-xs font-mono">Graphic Designer</p>
                  </div>
                </div>

                {/* Corner accent lines */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-sm" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-sm" />
              </div>
            </div>

            {/* Floating Tool Icons */}
            {heroData.floatingIcons.map((icon, i) => (
              <div
                key={i}
                ref={(el) => (iconsRef.current[i] = el)}
                className={`absolute z-20 ${iconStyles[icon.name]?.position || ''}`}
              >
                <div className="flex items-center gap-2 px-3 py-2 glass-card rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] floating-icon">
                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold font-mono ${iconStyles[icon.name]?.bg || 'bg-accent'}`}
                  >
                    {icon.name}
                  </div>
                  <span className="text-text text-xs font-medium whitespace-nowrap">
                    {icon.fullName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <div className="flex flex-col items-center gap-2 opacity-50">
            <span className="text-text-muted text-xs font-mono">scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

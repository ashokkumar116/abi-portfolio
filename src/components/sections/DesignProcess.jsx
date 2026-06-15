import { useEffect, useRef } from 'react';
import { processData } from '../../data/process';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import SectionHeading from '../ui/SectionHeading';

const ProcessIcons = {
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  concept: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  refine: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
  ),
  deliver: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
};

export default function DesignProcess() {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!lineRef.current) return;

    const anim = gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'center 40%',
          scrub: true,
        },
      }
    );

    return () => anim.kill();
  }, []);

  return (
    <div ref={sectionRef} className="section-padding bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={processData.eyebrow}
          title={processData.heading}
          subtitle={processData.subtitle}
          align="center"
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
            <div
              ref={lineRef}
              className="absolute top-1/2 left-0 right-0 h-px bg-accent origin-left -translate-y-1/2"
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {processData.steps.map((step, i) => (
              <div key={step.step} className="flex flex-col gap-4" id={`process-step-${step.step}`}>
                {/* Step number + icon */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-accent border border-[rgba(192,57,43,0.3)] shadow-[0_0_15px_rgba(192,57,43,0.1)]">
                    {ProcessIcons[step.icon]}
                  </div>
                  <span className="font-mono text-accent text-xl font-bold">{step.step}</span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-lg text-text">{step.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{step.description}</p>
                  <span className="tag-style text-[10px] w-fit mt-1">{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {processData.steps.map((step, i) => (
            <div key={step.step} className="flex gap-5 relative" id={`process-step-mobile-${step.step}`}>
              {/* Vertical line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-accent border border-[rgba(192,57,43,0.3)] flex-shrink-0">
                  {ProcessIcons[step.icon]}
                </div>
                {i < processData.steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-accent to-border my-2 min-h-[40px]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-1">
                <span className="font-mono text-accent text-xs">{step.step}</span>
                <h3 className="font-display font-bold text-lg text-text mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-2">{step.description}</p>
                <span className="tag-style text-[10px]">{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

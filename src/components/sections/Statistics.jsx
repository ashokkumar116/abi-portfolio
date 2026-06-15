import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { statsData } from '../../data/stats';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function Statistics() {
  const gridRef = useStaggerAnimation('.stat-item', {
    stagger: 0.15,
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
  });

  return (
    <div className="section-padding bg-bg relative overflow-hidden">
      {/* Radial center glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent opacity-[0.04] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          eyebrow={statsData.eyebrow}
          title={statsData.heading}
          align="center"
        />

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.items.map((stat) => (
            <div
              key={stat.id}
              className="stat-item opacity-0 text-center group"
              id={`stat-item-${stat.id}`}
            >
              {/* Accent top line */}
              <div className="w-10 h-0.5 bg-accent mx-auto mb-6 group-hover:w-16 transition-all duration-300" />

              {/* Counter */}
              <div className="mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                  className="text-5xl md:text-6xl text-text"
                />
              </div>

              {/* Label */}
              <p className="font-display font-bold text-lg text-text mb-2">{stat.label}</p>

              {/* Description */}
              <p className="text-text-muted text-xs leading-relaxed font-mono">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

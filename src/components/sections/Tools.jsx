import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { toolsData } from '../../data/tools';
import SectionHeading from '../ui/SectionHeading';

const toolBgColors = {
  Ps: 'bg-[#31A8FF]',
  Ai: 'bg-[#FF9A00]',
  Ae: 'bg-[#9999FF]',
  Id: 'bg-[#FF3366]',
  Fg: 'bg-[#F24E1E]',
  Lr: 'bg-[#31A8FF]',
  Pr: 'bg-[#9999FF]',
  Ca: 'bg-[#00C4CC]',
  Pc: 'bg-[#C0392B]',
};

export default function Tools() {
  const gridRef = useStaggerAnimation('.tool-card', {
    stagger: 0.08,
    from: { opacity: 0, scale: 0.9, y: 20 },
    to: { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.4)' },
  });

  return (
    <div className="section-padding bg-bg-2">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={toolsData.eyebrow}
          title={toolsData.heading}
          align="center"
        />

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {toolsData.items.map((tool) => (
            <div
              key={tool.id}
              className="tool-card opacity-0 glass-card p-5 flex flex-col items-center gap-3 group hover:border-[rgba(192,57,43,0.4)] hover:shadow-[0_0_20px_rgba(192,57,43,0.1)] transition-all duration-300 hover:-translate-y-1 cursor-default text-center"
              id={`tool-card-${tool.id}`}
            >
              {/* Tool badge */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold font-mono text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 ${toolBgColors[tool.abbr] || 'bg-accent'}`}
              >
                {tool.abbr}
              </div>

              {/* Tool name */}
              <div>
                <p className="text-text text-sm font-semibold leading-tight">{tool.name}</p>
                <p className="text-text-muted text-xs font-mono mt-1">{tool.category}</p>
              </div>

              {/* Years badge */}
              <span className="tag-style text-[10px] py-0.5">
                {tool.years} yrs
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

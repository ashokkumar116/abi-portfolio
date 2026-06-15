import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { aboutData } from '../../data/about';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';

export default function About() {
  const leftRef = useScrollAnimation({ from: { opacity: 0, x: -40 }, to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' } });
  const rightRef = useScrollAnimation({ from: { opacity: 0, x: 40 }, to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' } });
  const skillsRef = useStaggerAnimation('.skill-tag', { stagger: 0.06 });

  return (
    <div className="section-padding bg-bg-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div ref={leftRef} className="opacity-0">
            <SectionHeading
              eyebrow={aboutData.eyebrow}
              title={aboutData.heading}
              align="left"
            />

            {/* Bio */}
            <div className="flex flex-col gap-5 mb-8">
              {aboutData.bio.map((para, i) => (
                <p key={i} className="text-text-muted leading-relaxed relative pl-5">
                  {i === 0 && (
                    <span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent to-transparent" />
                  )}
                  {para}
                </p>
              ))}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {aboutData.details.map((detail) => (
                <div key={detail.label} className="flex flex-col gap-1">
                  <span className="text-text-muted text-xs font-mono uppercase tracking-wider">
                    {detail.label}
                  </span>
                  <span className="text-text font-medium">{detail.value}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 flex-wrap">
              {aboutData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm font-mono hover:text-accent transition-colors duration-200 underline-offset-4 hover:underline"
                  id={`about-social-${social.name.toLowerCase()}`}
                >
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right — Image + Skills */}
          <div ref={rightRef} className="opacity-0 flex flex-col gap-8">
            {/* Styled image placeholder */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(192,57,43,0.2)] shadow-[0_0_40px_rgba(192,57,43,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-bg-3 via-bg-2 to-bg" />
              {/* Design element — abstract shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Large circle */}
                  <div className="w-40 h-40 rounded-full border-2 border-[rgba(192,57,43,0.3)] flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent to-accent-glow opacity-20" />
                  </div>
                  {/* Accent dot decorations */}
                  <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-accent" />
                  <div className="absolute -bottom-6 -left-6 w-5 h-5 rounded-full border-2 border-accent opacity-50" />
                  <div className="absolute top-1/2 -right-12 w-8 h-px bg-accent opacity-40" />
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-accent rounded-tl-sm" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-sm" />
              {/* Label */}
              <div className="absolute bottom-5 left-0 right-0 text-center">
                <span className="font-mono text-xs text-text-muted tracking-widest">GRAPHIC DESIGNER · TAMIL NADU</span>
              </div>
            </div>

            {/* Skills Tags */}
            <div ref={skillsRef}>
              <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">Skills & Expertise</p>
              <div className="flex flex-wrap gap-2">
                {aboutData.skills.map((skill) => (
                  <Tag key={skill} className="skill-tag opacity-0">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

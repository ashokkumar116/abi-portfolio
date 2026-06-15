import { Link } from 'react-router-dom';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { featuredProjects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';

const projectStyles = {
  1: {
    gradient: 'bg-gradient-to-br from-[#1a0000] to-[#3d0b0b]',
    border: 'border-accent',
    bg: 'bg-accent',
  },
  2: {
    gradient: 'bg-gradient-to-br from-[#0d0a1a] to-[#2d1035]',
    border: 'border-accent-2',
    bg: 'bg-accent-2',
  },
  3: {
    gradient: 'bg-gradient-to-br from-[#1a0800] to-[#3d1800]',
    border: 'border-accent-glow',
    bg: 'bg-accent-glow',
  },
  4: {
    gradient: 'bg-gradient-to-br from-[#0d0500] to-[#2a1200]',
    border: 'border-accent',
    bg: 'bg-accent',
  },
  5: {
    gradient: 'bg-gradient-to-br from-[#001a0d] to-[#003520]',
    border: 'border-accent-2',
    bg: 'bg-accent-2',
  },
  6: {
    gradient: 'bg-gradient-to-br from-[#0a001a] to-[#1f0040]',
    border: 'border-accent-glow',
    bg: 'bg-accent-glow',
  },
};

export default function FeaturedProjects() {
  const cardsRef = useStaggerAnimation('.fp-card', {
    stagger: 0.15,
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
  });

  return (
    <div className="section-padding bg-bg" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected Projects"
            align="left"
            className="mb-0"
          />
          <Link
            to="/projects"
            className="text-accent text-sm font-mono flex items-center gap-1.5 hover:gap-3 transition-all duration-200 whitespace-nowrap self-end"
            id="featured-view-all-btn"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div ref={cardsRef} className="flex flex-col gap-8">
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className={`fp-card opacity-0 group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[rgba(192,57,43,0.15)] hover:border-[rgba(192,57,43,0.4)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(192,57,43,0.12)] ${
                i % 2 === 1 ? 'lg:grid-cols-2' : ''
              }`}
              id={`featured-project-${project.id}`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[16/9] lg:aspect-auto lg:min-h-[320px] overflow-hidden ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div
                  className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${projectStyles[project.id]?.gradient || ''}`}
                />
                {/* Design element overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 opacity-40">
                    <div
                      className={`w-20 h-20 rounded-full border-2 opacity-60 ${projectStyles[project.id]?.border || 'border-accent'}`}
                    />
                    <div
                      className={`w-32 h-px ${projectStyles[project.id]?.bg || 'bg-accent'}`}
                    />
                    <div
                      className={`w-12 h-12 rounded-lg border opacity-40 ${projectStyles[project.id]?.border || 'border-accent'}`}
                    />
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-5 left-5">
                  <Tag>{project.category}</Tag>
                </div>
                {/* Year */}
                <div className="absolute bottom-5 right-5 text-text-muted text-xs font-mono">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div
                className={`p-8 lg:p-10 flex flex-col justify-center bg-bg-2 ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <p className="text-text-muted text-xs font-mono mb-2">{project.client}</p>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-text mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-accent text-sm font-mono hover:gap-3 transition-all duration-200"
                  id={`fp-view-${project.id}`}
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-14">
          <Link
            to="/projects"
            className="px-8 py-3.5 border border-accent text-accent font-semibold rounded-lg transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_0_30px_rgba(192,57,43,0.3)] hover:-translate-y-0.5 text-sm"
            id="featured-bottom-view-all"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </div>
  );
}

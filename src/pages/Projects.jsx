import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
import { gsap } from '../utils/gsapConfig';
import Tag from '../components/ui/Tag';
import GlassCard from '../components/ui/GlassCard';
import SectionHeading from '../components/ui/SectionHeading';

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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useRef(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return;

    if (gridRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.to(gridRef.current.children, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        stagger: 0.03,
        onComplete: () => setActiveCategory(cat),
      });
    } else {
      setActiveCategory(cat);
    }
  };

  useEffect(() => {
    if (gridRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out' }
      );
    } else if (gridRef.current) {
      Array.from(gridRef.current.children).forEach((c) => { c.style.opacity = 1; });
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-muted text-sm font-mono hover:text-accent transition-colors duration-200 mb-10"
          id="projects-back-link"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="Portfolio"
            title="All Projects"
            subtitle={`A collection of ${projects.length} projects across branding, UI/UX, social media, print, motion, and more.`}
            align="left"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-10" id="projects-page-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-accent text-white border-accent shadow-[0_0_15px_rgba(192,57,43,0.3)]'
                  : 'text-text-muted border-border hover:text-text hover:border-[rgba(192,57,43,0.4)] bg-transparent'
              }`}
              id={`projects-filter-${cat.toLowerCase()}`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-60">
                ({cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="projects-page-grid"
        >
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="group overflow-hidden"
              id={`project-page-card-${project.id}`}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div
                  className={`absolute inset-0 group-hover:scale-105 transition-transform duration-500 ${projectStyles[project.id]?.gradient || ''}`}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div
                    className={`w-12 h-12 rounded-lg border-2 ${projectStyles[project.id]?.border || 'border-accent'}`}
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Tag>{project.category}</Tag>
                </div>
                <div className="absolute bottom-4 right-4 text-text-muted text-xs font-mono">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-text-muted text-xs font-mono mb-2">{project.client}</p>
                <h3 className="font-display font-bold text-xl text-text mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted font-mono">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from 'react';
import { projects, categories } from '../../data/projects';
import { gsap } from '../../utils/gsapConfig';
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

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const gridRef = useRef(null);
  const lightboxRef = useRef(null);

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
        onComplete: () => {
          setActiveCategory(cat);
        },
      });
    } else {
      setActiveCategory(cat);
    }
  };

  useEffect(() => {
    if (gridRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power2.out' }
      );
    } else if (gridRef.current) {
      Array.from(gridRef.current.children).forEach((c) => (c.style.opacity = 1));
    }
  }, [activeCategory]);

  const openLightbox = (project) => {
    setSelectedProject(project);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      requestAnimationFrame(() => {
        if (lightboxRef.current) {
          gsap.fromTo(
            lightboxRef.current.querySelector('.lightbox-inner'),
            { scale: 0.85, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(1.7)' }
          );
        }
      });
    }
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && lightboxRef.current) {
      gsap.to(lightboxRef.current.querySelector('.lightbox-inner'), {
        scale: 0.9,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          setSelectedProject(null);
          document.body.style.overflow = '';
        },
      });
    } else {
      setSelectedProject(null);
      document.body.style.overflow = '';
    }
  };

  return (
    <div className="section-padding bg-bg-2">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="All Work"
          align="center"
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-accent text-white border-accent shadow-[0_0_15px_rgba(192,57,43,0.3)]'
                  : 'text-text-muted border-border hover:text-text hover:border-[rgba(192,57,43,0.4)] bg-transparent'
              }`}
              id={`gallery-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          id="gallery-grid"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-[rgba(192,57,43,0.1)] hover:border-[rgba(192,57,43,0.4)] transition-all duration-300"
              onClick={() => openLightbox(project)}
              id={`gallery-item-${project.id}`}
            >
              {/* Gradient image */}
              <div
                className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${projectStyles[project.id]?.gradient || ''}`}
              />
              {/* Design element */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div
                  className={`w-16 h-16 rounded-lg border-2 ${projectStyles[project.id]?.border || 'border-accent'}`}
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[rgba(10,10,10,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-5">
                <Tag>{project.category}</Tag>
                <h3 className="text-text font-display font-bold text-lg text-center">{project.title}</h3>
                <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent mt-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>

              {/* Always-visible category tab */}
              <div className="absolute top-3 left-3">
                <Tag>{project.category}</Tag>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.92)] flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
          id="gallery-lightbox"
        >
          <div
            className="lightbox-inner relative w-full max-w-4xl glass-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-bg-3 border border-border flex items-center justify-center text-text-muted hover:text-text transition-colors"
              id="lightbox-close-btn"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div
                className={`aspect-square md:aspect-auto min-h-[250px] relative ${projectStyles[selectedProject.id]?.gradient || ''}`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div
                    className={`w-24 h-24 rounded-2xl border-2 ${projectStyles[selectedProject.id]?.border || 'border-accent'}`}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col justify-center">
                <Tag className="mb-4">{selectedProject.category}</Tag>
                <h3 className="font-display font-bold text-2xl text-text mb-3">{selectedProject.title}</h3>
                <p className="text-text-muted text-xs font-mono mb-4">{selectedProject.client} · {selectedProject.year}</p>
                <p className="text-text-muted leading-relaxed mb-5">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../../utils/gsapConfig';
import { getLenis } from '../../hooks/useLenis';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section
      const sections = ['home', 'about', 'services', 'tools', 'projects', 'gallery', 'process', 'testimonials', 'stats', 'why', 'faq', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(menuRef.current, { opacity: 0, y: -10, duration: 0.2, ease: 'power2.in' });
    }
  }, [menuOpen]);

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    const lenis = getLenis();
    if (el && lenis) {
      lenis.scrollTo(el, { offset: -80 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-md border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-2xl text-accent">AK.</span>
          <span className="text-text-muted text-sm font-mono hidden sm:block">Abishek Kumar</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <li key={link.label}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className={`nav-link relative pb-1 transition-all duration-200 bg-transparent border-none ${
                    activeLink === id
                      ? 'text-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent'
                      : 'hover:text-text'
                  }`}
                  id={`nav-link-${id}`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-5 py-2 bg-accent text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-accent-2 hover:shadow-[0_0_20px_rgba(192,57,43,0.4)] hover:-translate-y-0.5"
            id="navbar-hire-me-btn"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-bg-3 transition-colors"
          id="navbar-mobile-toggle"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-bg-2 border-t border-border px-6 py-6 flex flex-col gap-4"
          id="navbar-mobile-menu"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-text-muted hover:text-text transition-colors font-medium py-1 bg-transparent border-none text-sm"
              id={`mobile-nav-${link.href.replace('#', '')}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="mt-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg text-center"
            id="mobile-hire-me-btn"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}

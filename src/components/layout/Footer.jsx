import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    name: 'Behance',
    href: 'https://behance.net',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.515 1.870 1.461 1.870.96 0 1.364-.453 1.493-1.150L23.726 17zM15.973 12.148h4.778c-.107-1.08-.73-1.767-2.261-1.767-1.51 0-2.283.782-2.517 1.767zM9.138 10.222c-.793-.352-1.714-.479-2.835-.479H1v10.5h5.498c1.166 0 2.223-.134 3.094-.522 1.027-.454 1.647-1.37 1.647-2.716 0-1.213-.583-1.953-1.5-2.38.635-.428 1.015-1.07 1.015-1.974 0-1.22-.579-2.003-1.616-2.429zm-5.263 1.59h2.358c.897 0 1.461.249 1.461 1.046 0 .77-.533 1.065-1.461 1.065H3.875v-2.11zm0 4.147h2.57c1.023 0 1.647.278 1.647 1.16 0 .854-.576 1.153-1.647 1.153H3.875v-2.313z" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm7.369 5.041c1.385 1.623 2.229 3.706 2.255 5.981-.33-.065-3.633-.736-6.961-.319-.075-.18-.144-.366-.223-.548-.21-.509-.439-1.016-.673-1.5 3.656-1.487 5.329-3.622 5.602-3.614zM12 2.188c2.52 0 4.826.962 6.569 2.528-.243.261-1.742 2.264-5.271 3.578C11.621 5.839 9.792 3.8 9.504 3.489c.803-.197 1.635-.301 2.496-.301zm-4.726.984c.283.296 2.075 2.34 3.764 5.174-4.744 1.26-8.929 1.235-9.372 1.23.654-2.87 2.668-5.233 5.608-6.404zM2.167 12.02c0-.088.003-.176.006-.263.431.009 5.34.082 10.404-1.44.29.566.567 1.14.82 1.72-3.717 1.047-6.648 4.133-7.84 6.906C3.273 17.336 2.167 14.81 2.167 12.02zm9.833 9.795c-2.26 0-4.348-.761-6.018-2.026 1.018-2.57 3.644-5.57 7.649-6.851 1.22 3.168 1.725 5.826 1.862 6.576a9.81 9.81 0 0 1-3.493.301zm5.48-1.548c-.12-.714-.592-3.233-1.73-6.352 3.157-.505 5.927.322 6.262.43-.449 2.529-1.87 4.722-4.532 5.922z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-2 border-t border-border">
      {/* Top border gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo + Tagline */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
              <span className="font-display font-bold text-3xl text-accent">AK.</span>
              <span className="text-text-muted text-sm font-mono">Abishek Kumar</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Graphic designer crafting visual identities that make brands impossible to ignore.
            </p>
            <p className="text-text-muted text-xs mt-3 font-mono">Tamil Nadu, India</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-text font-semibold mb-5 font-mono text-sm uppercase tracking-widest">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/projects"
                  className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
                >
                  All Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="text-text font-semibold mb-5 font-mono text-sm uppercase tracking-widest">Connect</h3>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:abishek@example.com"
                className="text-text-muted text-sm hover:text-accent transition-colors duration-200"
              >
                abishek@example.com
              </a>
              <span className="text-text-muted text-sm">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 glass-card flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all duration-200 rounded-lg"
                  id={`footer-social-${social.name.toLowerCase()}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            © {currentYear} Abishek Kumar P. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-mono">
            Designed by <span className="text-accent">Abishek</span> × Built by{' '}
            <span className="text-accent">KuBros</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

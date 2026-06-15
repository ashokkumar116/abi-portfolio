# AGENTS.md — Abishek Kumar P | Graphic Designer Portfolio

> Read this file completely before touching any code.
> This is the single source of truth for what we're building, why, and how.

---

## 1. PROJECT IDENTITY

**Project Name:** Abishek Kumar P — Graphic Designer Portfolio  
**Owner:** Abishek Kumar P  
**Built by:** KuBros (Ashok Kumar & Abishek Kumar)  
**Purpose:** A premium, animated, conversion-focused portfolio website for a graphic designer targeting clients in India and globally.  
**Primary Goal:** Generate inbound leads, showcase work, and build credibility — not just look good.

---

## 2. VISUAL IDENTITY

### Color Palette

| Token Name       | Hex Value  | Usage                                                  |
|------------------|------------|--------------------------------------------------------|
| `--color-bg`     | `#0A0A0A`  | Primary background (near-black)                        |
| `--color-bg-2`   | `#111111`  | Slightly elevated surfaces, cards                      |
| `--color-bg-3`   | `#1A1A1A`  | Card hover states, elevated panels                     |
| `--color-accent` | `#C0392B`  | Primary accent — deep red-orange                       |
| `--color-accent-2`| `#E74C3C` | Brighter accent — hover states, highlights             |
| `--color-accent-glow`| `#FF4500`| Fiery orange-red — glow effects, gradients            |
| `--color-text`   | `#F0F0F0`  | Primary text — near white                              |
| `--color-text-muted` | `#888888` | Secondary text, captions, metadata                  |
| `--color-border` | `#2A2A2A`  | Borders, dividers                                      |
| `--color-glass`  | `rgba(255,69,0,0.08)` | Glassmorphism overlay tint                  |

### Typography

- **Display / Headings:** `Clash Display` (or `Space Grotesk`) — Bold, modern, geometric
- **Body:** `Inter` — Clean, readable, neutral
- **Accent / Labels:** `JetBrains Mono` — For tags, labels, stats, code-adjacent UI
- **Source:** Google Fonts CDN in `index.html`

### Design Signature

A **molten ember aesthetic** — as if every section is lit from beneath by a dying fire. The accent is not cherry red but a deeper, almost burnt orange-red. Glows pulse rather than flash. Cards feel like dark volcanic glass with light leaking through cracks (borders glow, not fill).
The design should feel like a graphic deisgner with elements of adobe softwares etc,,

### Key Visual Rules

- No white backgrounds. Ever.
- Glow effects only on accent color — `box-shadow: 0 0 40px rgba(192, 57, 43, 0.3)`
- Grain texture overlay on hero via CSS `::before` pseudo-element
- Glassmorphism cards: `backdrop-filter: blur(12px)`, `background: rgba(255,69,0,0.05)`, `border: 1px solid rgba(192,57,43,0.2)`
- Floating design tool icons around hero image use `filter: drop-shadow(0 0 8px rgba(192,57,43,0.6))`
- Section transitions use GSAP ScrollTrigger `scrub` — not instant snaps

---

## 3. TECH STACK

### Frontend

| Tool              | Version      | Notes                                                        |
|-------------------|--------------|--------------------------------------------------------------|
| React             | 18+          | Vite + React, functional components, hooks only              |
| Tailwind CSS      | 4+           | **NO postcss.config.js, NO tailwind.config.js**              |
| GSAP              | 3.x          | Installed via npm, used with ScrollTrigger plugin            |
| @studio-freight/lenis | latest  | Smooth scroll — wraps the entire app                         |
| React Router DOM  | 6+           | For `/` (main) and `/projects` (all projects page)           |

### Tailwind v4 Implementation (CRITICAL)

Tailwind CSS 4 uses CSS-first configuration. The config lives in `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-bg: #0A0A0A;
  --color-accent: #C0392B;
  /* ...all tokens here */
}
```

- **NO** `postcss.config.js`  
- **NO** `tailwind.config.js`  
- **NO** `style={{}}` inline styles in JSX — use Tailwind utility classes only  
- Use `@utility` for custom classes in `index.css`  
- Use `@layer components` for reusable component classes

### Animation Rules

- **GSAP ScrollTrigger** — attach to all section reveals: `opacity: 0 → 1`, `y: 60 → 0`
- **Lenis** — initialized in `main.jsx` or `App.jsx`, hooked into GSAP ticker
- Floating icons in hero: GSAP `gsap.to()` with `yoyo: true, repeat: -1` on each icon
- Hero text: SplitText or char-by-char stagger reveal on page load
- Stats counter: GSAP `gsap.to()` with number interpolation on scroll into view
- No animation should run before the page is visible (`ScrollTrigger.refresh()` after fonts load)
- Honor `prefers-reduced-motion` — skip GSAP animations if set

---

## 4. FOLDER STRUCTURE

```
abishek-portfolio/
├── public/
│   └── images/
│       ├── abishek.png             ← His photo (placeholder initially)
│       ├── og-image.jpg            ← Social share image
│       └── projects/               ← Project screenshots
├── src/
│   ├── assets/
│   │   └── icons/                  ← SVG icons for tools, socials
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx          ← Reusable CTA button
│   │   │   ├── Tag.jsx             ← Skill/tech tags
│   │   │   ├── SectionHeading.jsx  ← Consistent section titles
│   │   │   ├── GlassCard.jsx       ← Reusable glassmorphism card
│   │   │   └── AnimatedCounter.jsx ← GSAP number counter
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Services.jsx
│   │       ├── Tools.jsx
│   │       ├── FeaturedProjects.jsx
│   │       ├── PortfolioGallery.jsx
│   │       ├── DesignProcess.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Statistics.jsx
│   │       ├── WhyWorkWithMe.jsx
│   │       ├── FAQ.jsx
│   │       ├── Contact.jsx
│   │       └── CTABanner.jsx       ← Optional between sections
│   ├── data/
│   │   ├── hero.js                 ← Hero heading, subheading, CTAs, trusted-by logos
│   │   ├── about.js                ← Bio, skills, background
│   │   ├── services.js             ← Service cards with icon, title, description
│   │   ├── tools.js                ← Design tools list with icons/logos
│   │   ├── projects.js             ← ALL projects data (used by both Featured + Projects page)
│   │   ├── process.js              ← Design process steps
│   │   ├── testimonials.js         ← Client reviews
│   │   ├── stats.js                ← Statistics numbers and labels
│   │   ├── whyMe.js                ← Why work with me bullet points
│   │   └── faq.js                  ← FAQ questions and answers
│   ├── hooks/
│   │   ├── useScrollAnimation.js   ← Reusable GSAP ScrollTrigger hook
│   │   └── useLenis.js             ← Lenis smooth scroll init hook
│   ├── pages/
│   │   ├── Home.jsx                ← Assembles all sections
│   │   └── Projects.jsx            ← Full projects listing page
│   ├── utils/
│   │   └── gsapConfig.js           ← GSAP plugin registration
│   ├── App.jsx                     ← Router setup
│   ├── main.jsx                    ← Entry point
│   └── index.css                   ← Tailwind v4 config + global styles + @utility
├── index.html
├── vite.config.js
├── package.json
├── AGENTS.md                       ← This file
└── MASTER_PROMPT.md                ← Full build instructions
```

---

## 5. PAGES & ROUTING

| Route       | Component        | Description                                 |
|-------------|------------------|---------------------------------------------|
| `/`         | `Home.jsx`       | All 13 sections assembled in order          |
| `/projects` | `Projects.jsx`   | Full project grid with filters by category  |

Navigation between pages uses React Router `<Link>` — no `<a>` tags with full reloads.

---

## 6. SECTIONS REFERENCE

### 6.1 Hero Section
- Left: Heading (large display type), subheading, "Trusted By" logo strip, 3 inline stats, 2 CTA buttons (primary: "View My Work" → scrolls to portfolio, secondary: "Let's Talk" → scrolls to contact)
- Right: Abishek's photo in a styled frame with 6–8 floating Adobe/design tool icons (Photoshop, Illustrator, After Effects, Figma, InDesign, Lightroom) as glassmorphism-styled overlays, animated with GSAP floating loops
- Background: grain texture + subtle radial glow behind image

### 6.2 About Section
- Two-column: left = text (bio, what he does, personality), right = skill tags + a styled image or illustration
- Include years of experience, location, what he specializes in

### 6.3 Services Section
- Grid of 6 cards (GlassCard component)
- Services: Brand Identity, Social Media Design, UI/UX Design, Print & Packaging, Motion Graphics, Pitch Deck Design
- Each card: icon, title, short description, "Learn More" subtle link

### 6.4 Tools Section
- Horizontal scrolling strip OR grid of tool logos
- Tools: Adobe Photoshop, Illustrator, After Effects, InDesign, Figma, Lightroom, Premiere Pro, Canva, Procreate
- Each tool: logo + name + years of experience badge

### 6.5 Featured Projects Section
- 3 highlighted projects (most impressive)
- Large card layout: project image, category tag, title, brief description, "View Project" link
- "View All Projects →" button at bottom → navigates to `/projects`
- Data sourced from `projects.js` (featured: true flag)

### 6.6 Portfolio Gallery
- Masonry or bento-style grid of project thumbnails
- Filterable by category (Branding, Social, Print, UI/UX, Motion)
- Hover: overlay with project title + "View" icon
- Lightbox on click (use a simple React state toggle, not a library)

### 6.7 Design Process
- 5-step process: Discovery → Strategy → Concept → Execution → Delivery
- Visual: horizontal timeline on desktop, vertical on mobile
- Each step: number (styled), title, description, icon

### 6.8 Testimonials
- Carousel (manual, no library — use GSAP or CSS transitions)
- Each card: quote, client name, company, role, avatar initial badge
- Auto-cycles every 5s, pause on hover

### 6.9 Statistics Section
- 4 animated counters: Clients Served, Projects Completed, Years Experience, Happy Returns %
- GSAP counter animation triggers on scroll into viewport
- Dark background with accent glow behind each number

### 6.10 Why Work With Me
- 4–6 value proposition cards
- Icons + bold title + 2-line description
- Can be grid or alternating row layout

### 6.11 FAQ Section
- Accordion (custom, no library)
- 8–10 questions relevant to graphic design clients
- Smooth open/close using GSAP height animation

### 6.12 Contact Section
- Left: Contact info (email, phone, location, social links), availability badge, quick turnaround note
- Right: Contact form (Name, Email, Project Type dropdown, Message, Submit)
- Form does not need backend — just `mailto:` or a `console.log` placeholder

### 6.13 Footer
- Logo, short tagline, nav links, social icons
- Copyright line with current year
- "Designed by Abishek × Built by KuBros" credit

---

## 7. DATA FILE CONTRACTS

Every data file exports a plain JS object or array. No API calls. No async. Just data.

```js
// src/data/projects.js — example shape
export const projects = [
  {
    id: 1,
    title: "Project Name",
    category: "Branding",          // Branding | Social | Print | UI/UX | Motion
    description: "Short description of what was done and the result.",
    tags: ["Logo Design", "Brand Guidelines", "Typography"],
    image: "/images/projects/project-1.jpg",
    featured: true,                 // Only 3 should be true
    color: "#C0392B",               // Accent color for this project card
    year: "2024",
    client: "Client Name",
  }
];
```

---

## 8. COMPONENT CONTRACTS

### Button.jsx
```jsx
// Props: variant ("primary" | "secondary" | "ghost"), children, onClick, href, className
```

### GlassCard.jsx
```jsx
// Props: children, className, glowColor (optional hex)
// Renders: glass background, accent border, optional glow
```

### SectionHeading.jsx
```jsx
// Props: eyebrow (small label above), title, subtitle
// Renders consistently for every section
```

### AnimatedCounter.jsx
```jsx
// Props: target (number), suffix (string like "+" or "%"), label
// Uses GSAP and ScrollTrigger to count from 0 to target
```

---

## 9. ANIMATION ARCHITECTURE

### Lenis Setup (main.jsx)
```js
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### ScrollTrigger Pattern (useScrollAnimation hook)
```js
// Every section uses this pattern:
gsap.fromTo(el, { opacity: 0, y: 60 }, {
  opacity: 1, y: 0, duration: 0.8,
  scrollTrigger: { trigger: el, start: "top 80%", end: "top 40%", scrub: false }
});
```

### Hero Floating Icons Pattern
```js
icons.forEach((icon, i) => {
  gsap.to(icon, {
    y: `${(i % 2 === 0 ? -1 : 1) * 15}px`,
    rotation: (i % 2 === 0 ? -5 : 5),
    duration: 2 + i * 0.3,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    delay: i * 0.2
  });
});
```

---

## 10. STRICT RULES (DO NOT VIOLATE)

1. **No `style={{}}` in JSX** — All styling via Tailwind utility classes or `@utility` in CSS
2. **No `postcss.config.js`** — Tailwind v4 does not need it
3. **No `tailwind.config.js`** — Config lives in `@theme {}` block in `index.css`
4. **No external animation libraries except GSAP + Lenis** — No Framer Motion, AOS, etc.
5. **No accordion/carousel/lightbox libraries** — Build them with React state + GSAP
6. **All data in `src/data/`** — No hardcoded strings in JSX components
7. **`projects.js` is the single source for all project data** — FeaturedProjects and Projects page both read from it
8. **Responsive first** — Mobile layout first, desktop via `md:` and `lg:` prefixes
9. **No white or light backgrounds** — The darkest the palette goes is `#1A1A1A`
10. **Semantic HTML** — `<section>`, `<article>`, `<nav>`, `<main>`, `<header>`, `<footer>` appropriately

---

## 11. PLACEHOLDER CONTENT GUIDE

Until real content is provided, use these placeholders:

- **Photo:** A styled placeholder div with initials "AK" in accent color, or `/public/images/abishek.png`
- **Project images:** Use aspect-ratio boxes with gradient fills using the accent palette
- **Testimonials:** Use 3 fictional but realistic Indian client names and companies
- **Stats:** 50+ clients, 120+ projects, 4+ years, 98% satisfaction
- **Trusted By:** Use generic company name badges (no real logos to avoid IP issues)

---

## 12. BUILD ORDER (FOR AGENTS)

Build in this exact sequence to avoid dependency issues:

1. `index.html` + `vite.config.js` + `package.json`
2. `src/index.css` — Tailwind v4 theme config + global styles + @utility classes
3. `src/utils/gsapConfig.js` — GSAP plugin registration
4. `src/hooks/useLenis.js` + `src/hooks/useScrollAnimation.js`
5. `src/data/` — ALL data files (hero, about, services, tools, projects, process, testimonials, stats, whyMe, faq)
6. `src/components/ui/` — Button, Tag, SectionHeading, GlassCard, AnimatedCounter
7. `src/components/layout/` — Navbar, Footer
8. `src/components/sections/` — All 13 sections in order
9. `src/pages/` — Home.jsx, Projects.jsx
10. `src/App.jsx` + `src/main.jsx`
11. Final pass: verify all imports, animation triggers, and responsive breakpoints

---

## 13. QUALITY CHECKLIST (BEFORE MARKING DONE)

- [ ] All 13 sections render without errors
- [ ] `/projects` page shows all projects with category filter working
- [ ] Lenis smooth scroll working (no janky scroll)
- [ ] All GSAP ScrollTrigger animations fire correctly on scroll
- [ ] Hero floating icons animate continuously
- [ ] Stats counters animate on scroll into view
- [ ] FAQ accordion opens/closes with smooth animation
- [ ] Testimonials carousel auto-cycles and pauses on hover
- [ ] Portfolio gallery filter works correctly
- [ ] Contact form is functional (mailto or console.log)
- [ ] Fully responsive on 375px (mobile) and 1440px (desktop)
- [ ] No `style={{}}` in any JSX file
- [ ] No hardcoded content strings in JSX (all from data files)
- [ ] No Tailwind config files outside `index.css`
- [ ] `prefers-reduced-motion` respected
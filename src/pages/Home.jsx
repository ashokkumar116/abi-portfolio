import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Tools from '../components/sections/Tools';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import PortfolioGallery from '../components/sections/PortfolioGallery';
import DesignProcess from '../components/sections/DesignProcess';
import Testimonials from '../components/sections/Testimonials';
import Statistics from '../components/sections/Statistics';
import WhyWorkWithMe from '../components/sections/WhyWorkWithMe';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <div className="section-divider" />
      <section id="about">
        <About />
      </section>
      <div className="section-divider" />
      <section id="services">
        <Services />
      </section>
      <div className="section-divider" />
      <section id="tools">
        <Tools />
      </section>
      <div className="section-divider" />
      <section id="projects">
        <FeaturedProjects />
      </section>
      <div className="section-divider" />
      <section id="gallery">
        <PortfolioGallery />
      </section>
      <div className="section-divider" />
      <section id="process">
        <DesignProcess />
      </section>
      <div className="section-divider" />
      <section id="testimonials">
        <Testimonials />
      </section>
      <div className="section-divider" />
      <section id="stats">
        <Statistics />
      </section>
      <div className="section-divider" />
      <section id="why">
        <WhyWorkWithMe />
      </section>
      <div className="section-divider" />
      <section id="faq">
        <FAQ />
      </section>
      <div className="section-divider" />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

import { useState, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const projectTypes = [
  'Brand Identity',
  'Social Media Design',
  'UI/UX Design',
  'Print & Packaging',
  'Motion Graphics',
  'Pitch Deck',
  'Other',
];

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'abishek@example.com',
    href: 'mailto:abishek@example.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const leftRef = useScrollAnimation({ from: { opacity: 0, x: -30 }, to: { opacity: 1, x: 0, duration: 0.7 } });
  const rightRef = useScrollAnimation({ from: { opacity: 0, x: 30 }, to: { opacity: 1, x: 0, duration: 0.7 } });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // In production: replace with mailto or API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="section-padding bg-bg-2" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <div ref={leftRef} className="opacity-0 flex flex-col gap-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-text mb-3">
                Let's Create Something Great
              </h3>
              <p className="text-text-muted leading-relaxed">
                Have a project in mind? I'd love to hear about it. Send a message
                and I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(192,57,43,0.1)] flex items-center justify-center text-accent flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-text hover:text-accent transition-colors duration-200"
                        id={`contact-info-${info.label.toLowerCase()}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-mono">Currently Available</span>
              </div>
              <p className="text-text-muted text-sm font-mono">
                ⚡ Typical response within 24 hours
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div ref={rightRef} className="opacity-0">
            <GlassCard className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-[0_0_30px_rgba(192,57,43,0.4)]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-xl text-text">Message Sent!</h3>
                  <p className="text-text-muted text-sm">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-form">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Karthik Ramasamy"
                      className="input-field"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="karthik@example.com"
                      className="input-field"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="contact-project-type" className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select project type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-bg-3">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, and timeline..."
                      className="input-field resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-accent text-white font-semibold rounded-lg transition-all duration-300 hover:bg-accent-2 hover:shadow-[0_0_30px_rgba(192,57,43,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                    id="contact-submit-btn"
                  >
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}

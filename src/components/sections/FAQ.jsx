import { useState, useRef, useEffect } from 'react';
import { faqData } from '../../data/faq';
import { gsap } from '../../utils/gsapConfig';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../ui/SectionHeading';

function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const inner = innerRef.current;
    if (!content || !inner) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      content.style.height = isOpen ? 'auto' : '0px';
      content.style.opacity = isOpen ? '1' : '0';
      return;
    }

    if (isOpen) {
      const height = inner.offsetHeight;
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        { height, opacity: 1, duration: 0.35, ease: 'power2.out', onComplete: () => { content.style.height = 'auto'; } }
      );
    } else {
      const height = content.offsetHeight;
      gsap.fromTo(
        content,
        { height, opacity: 1 },
        { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' }
      );
    }
  }, [isOpen]);

  return (
    <div
      className={`border-b border-border last:border-b-0 ${isOpen ? 'border-[rgba(192,57,43,0.3)]' : ''}`}
      id={`faq-item-${item.id}`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent border-none cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-toggle-${item.id}`}
      >
        <span className={`font-semibold text-base transition-colors duration-200 ${isOpen ? 'text-accent' : 'text-text group-hover:text-accent'}`}>
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'border-accent bg-accent text-white rotate-45'
              : 'border-border text-text-muted group-hover:border-accent group-hover:text-accent'
          }`}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
        <div ref={innerRef} className="pb-5">
          <p className="text-text-muted leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const containerRef = useScrollAnimation({ from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0, duration: 0.7 } });

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="section-padding bg-bg">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          eyebrow={faqData.eyebrow}
          title={faqData.heading}
          align="center"
        />

        <div
          ref={containerRef}
          className="opacity-0 glass-card rounded-2xl overflow-hidden divide-y-0"
          id="faq-accordion"
        >
          {faqData.items.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

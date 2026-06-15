import { forwardRef } from 'react';

const GlassCard = forwardRef(function GlassCard(
  { children, className = '', glowAccent = false, hover = true, id },
  ref
) {
  const glowClass = glowAccent
    ? 'shadow-[0_0_40px_rgba(192,57,43,0.2)]'
    : '';

  const hoverClass = hover
    ? 'hover:bg-[rgba(255,69,0,0.08)] hover:border-[rgba(192,57,43,0.4)] hover:shadow-[0_0_30px_rgba(192,57,43,0.15)] transition-all duration-300'
    : '';

  return (
    <div
      ref={ref}
      id={id}
      className={`glass-card ${glowClass} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
});

export default GlassCard;

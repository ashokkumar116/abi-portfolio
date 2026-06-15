export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  gradient = false,
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className={`eyebrow-label mb-4 flex items-center gap-3 flex-wrap ${align === 'left' ? 'justify-start' : 'justify-center'}`}>
          <span className="block w-8 h-px bg-accent" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={`display-heading text-4xl md:text-5xl lg:text-6xl text-text mb-4 ${
          gradient ? 'text-gradient' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg leading-relaxed mt-4">{subtitle}</p>
      )}
    </div>
  );
}

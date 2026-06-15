import { Link } from 'react-router-dom';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  to,
  external = false,
  className = '',
  type = 'button',
  disabled = false,
  id,
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    primary:
      'bg-accent text-white font-semibold rounded-lg transition-all duration-300 hover:bg-accent-2 hover:shadow-[0_0_30px_rgba(192,57,43,0.5)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2',
    secondary:
      'border border-accent text-accent font-semibold rounded-lg transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(192,57,43,0.3)] hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'text-text-muted font-medium transition-colors duration-200 hover:text-text flex items-center gap-1 underline-offset-4 hover:underline',
  };

  const classes = `${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  // Render as React Router Link
  if (to) {
    return (
      <Link to={to} className={classes} id={id}>
        {children}
        {variant === 'primary' && (
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </Link>
    );
  }

  // External anchor link
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        id={id}
      >
        {children}
      </a>
    );
  }

  // Internal anchor (scroll)
  if (href) {
    return (
      <a href={href} className={classes} id={id}>
        {children}
        {variant === 'primary' && (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </a>
    );
  }

  // Button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      id={id}
    >
      {children}
      {variant === 'primary' && (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
    </button>
  );
}

export default function Tag({ children, className = '' }) {
  return (
    <span className={`tag-style ${className}`}>
      {children}
    </span>
  );
}

export default function CircularButton({ children, className = '', href = '#', ...props }) {
  return (
    <a className={`circular-button ${className}`.trim()} href={href} {...props}>
      {children}
    </a>
  )
}
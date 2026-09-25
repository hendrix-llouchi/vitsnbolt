export default function Divider({ className = '', ...props }) {
  return <hr className={`hairline ${className}`.trim()} {...props} />
}
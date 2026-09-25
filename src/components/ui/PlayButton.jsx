import { Play } from 'lucide-react'

export default function PlayButton({ label = 'Play media', ...props }) {
  return (
    <button className="circular-button play-button" type="button" aria-label={label} {...props}>
      <Play size={16} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
    </button>
  )
}
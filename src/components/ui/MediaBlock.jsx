import PlayButton from './PlayButton.jsx'

export default function MediaBlock({ label = 'Project work in progress', meta, image, children, className = '', ...props }) {
  return (
    <figure
      className={`media-block ${className}`.trim()}
      data-media-src={image || undefined}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
      {...props}
    >
      {children}
      <div className="media-block__content">
        <div>
          {meta && <p className="media-block__meta">{meta}</p>}
          <figcaption className="media-block__label">{label}</figcaption>
        </div>
        <PlayButton />
      </div>
    </figure>
  )
}
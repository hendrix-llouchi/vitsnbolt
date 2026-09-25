import Divider from './ui/Divider.jsx'

export default function ProcessStep({ number, title, description, outcomes }) {
  return (
    <li className="process-step">
      <Divider />
      <article className="process-step__content">
        <div className="process-step__marker" aria-hidden="true">
          <span>{number}</span>
        </div>
        <p className="process-step__label">{number} / {title}</p>
        <h3 className="process-step__title">{title}</h3>
        <p className="process-step__description">{description}</p>
        <div className="process-step__outcomes">
          <p className="process-step__outcomes-label">Key outcomes</p>
          <ul>
            {outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
        </div>
      </article>
    </li>
  )
}

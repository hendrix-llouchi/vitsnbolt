import Divider from './ui/Divider.jsx'

export default function PrincipleItem({ number, title, description }) {
  return (
    <li className="principle-item">
      <Divider />
      <article className="principle-item__content">
        <span className="principle-item__number" aria-hidden="true">{number}</span>
        <h3 className="principle-item__title">{title}</h3>
        <p className="principle-item__description">{description}</p>
      </article>
    </li>
  )
}

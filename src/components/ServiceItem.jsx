import { ArrowUpRight } from 'lucide-react'
import Divider from './ui/Divider.jsx'

export default function ServiceItem({ number, title, description }) {
  return (
    <li className="service-item">
      <Divider />
      <article className="service-item__content">
        <span className="service-item__number" aria-hidden="true">{number}</span>
        <div className="service-item__body">
          <h3 className="service-item__title">{title}</h3>
          <p className="service-item__description">{description}</p>
        </div>
        <span className="service-item__arrow" aria-hidden="true">
          <ArrowUpRight size={22} strokeWidth={1.5} />
        </span>
      </article>
    </li>
  )
}

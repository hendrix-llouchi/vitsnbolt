import ServiceItem from './ServiceItem.jsx'
import Eyebrow from './ui/Eyebrow.jsx'

const services = [
  {
    number: '01',
    title: 'Machine Learning & AI Integration',
    description: 'Evaluate models, algorithms, datasets, training workflows, and AI integration strategies for real-world academic projects.',
  },
  {
    number: '02',
    title: 'Focused Research & Gap Analysis',
    description: 'Review existing research, identify meaningful gaps, refine the problem statement, and establish a defensible project direction.',
  },
  {
    number: '03',
    title: 'Software & IoT Project Development',
    description: 'Design and prototype web, mobile, full-stack, embedded, and connected systems using technologies suited to your project scope.',
  },
  {
    number: '04',
    title: 'Software Integration',
    description: 'Add dashboards, APIs, databases, automation, control interfaces, and software layers to existing hardware or research projects.',
  },
  {
    number: '05',
    title: 'Guided Project Discovery & Mentorship',
    description: 'Turn broad ideas into feasible project concepts with realistic scope, technical direction, and phased milestones.',
  },
]

export default function Services() {
  return (
    <section className="services section-space" id="services" aria-labelledby="services-heading">
      <div className="content-wrap">
        <div className="section-intro section-intro--split">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="section-heading" id="services-heading">
              From research to implementation.
            </h2>
          </div>
          <p className="section-intro__copy">
            Technical guidance, research direction, and hands-on development support tailored to the scope of your final-year project.
          </p>
        </div>

        <ol className="service-list">
          {services.map((service) => (
            <ServiceItem key={service.number} {...service} />
          ))}
        </ol>
      </div>
    </section>
  )
}

import PrincipleItem from './PrincipleItem.jsx'
import Eyebrow from './ui/Eyebrow.jsx'

const principles = [
  {
    number: '01',
    title: 'Clarity',
    description: 'We help turn broad ideas into clear, achievable project directions.',
  },
  {
    number: '02',
    title: 'Technical Depth',
    description: 'We help you understand the technologies, architectures, models, tools, and implementation decisions behind your project.',
  },
  {
    number: '03',
    title: 'Guided Building',
    description: 'We work through technical challenges with you—from planning and implementation to debugging and integration.',
  },
  {
    number: '04',
    title: 'Confident Defense',
    description: 'The goal is not only a working project. You should be able to explain your decisions and defend your work.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-us section-space" id="about" aria-labelledby="why-us-heading">
      <div className="content-wrap">
        <div className="section-intro section-intro--split">
          <div>
            <Eyebrow>Why Vits&amp;Bolts</Eyebrow>
            <h2 className="section-heading" id="why-us-heading">
              Technical guidance. Human mentorship.
            </h2>
          </div>
          <p className="section-intro__copy">
            Final-year projects often sit at the intersection of research, software, hardware, deadlines, and unfamiliar technologies. Our role is to help you navigate that complexity with a clear technical direction.
          </p>
        </div>

        <ol className="principle-list">
          {principles.map((principle) => <PrincipleItem key={principle.number} {...principle} />)}
        </ol>
      </div>
    </section>
  )
}

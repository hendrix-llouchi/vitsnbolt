import Divider from './ui/Divider.jsx'
import Eyebrow from './ui/Eyebrow.jsx'

const situations = [
  {
    number: '01',
    title: "I have an idea, but I don't know where to start.",
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
    alt: 'Student planning a final-year software project at a laptop',
  },
  {
    number: '02',
    title: "I have a topic, but I'm struggling with the research.",
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=85',
    alt: 'Research notes and academic material arranged on a desk',
  },
  {
    number: '03',
    title: "I know what I want to build, but I'm stuck implementing it.",
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85',
    alt: 'Student developing a software project in a code editor',
  },
  {
    number: '04',
    title: 'I already have a prototype and need help integrating the software.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    alt: 'Electronics hardware for a connected software prototype',
  },
  {
    number: '05',
    title: 'My project is almost complete and I need help preparing for my defense.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85',
    alt: 'Student preparing notes for a final-year project defense',
  },
]

export default function WhoWeHelp() {
  return (
    <section className="who-we-help section-space" id="who-we-help" aria-labelledby="who-we-help-heading">
      <div className="content-wrap">
        <div className="section-intro section-intro--split">
          <div>
            <Eyebrow>Wherever you are in the journey</Eyebrow>
            <h2 className="section-heading" id="who-we-help-heading">
              <span>You don&apos;t have to have</span>
              <em>it all figured out.</em>
            </h2>
          </div>
          <p className="section-intro__copy">
            Whether you have a rough idea, a research problem, a working prototype, or a project that&apos;s almost ready for defense, we help you figure out what comes next.
          </p>
        </div>

        <ol className="situation-list">
          {situations.map((situation) => (
            <li className={`situation-item ${situation.image ? `situation-item--${Number(situation.number) % 2 === 0 ? 'reverse' : 'forward'}` : 'situation-item--text-only'}`} key={situation.number}>
              <Divider />
              <div className="situation-item__content">
                <span className="situation-item__number" aria-hidden="true">{situation.number}</span>
                <div className="situation-item__text">
                  <h3 className="situation-item__title">{situation.title}</h3>
                </div>
                {situation.image && (
                  <figure className="situation-item__media">
                    <img src={situation.image} alt={situation.alt} loading="lazy" decoding="async" />
                  </figure>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

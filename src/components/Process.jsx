import ProcessStep from './ProcessStep.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import MediaBlock from './ui/MediaBlock.jsx'

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We start by understanding your degree or discipline, interests, current skill level, project constraints, available resources, and submission deadline.',
    outcomes: [
      "Understand the student's starting point",
      'Identify the actual problem',
      'Explore feasible project directions',
      'Establish realistic constraints',
    ],
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We turn the direction into a concrete project plan—from the problem statement and technical scope to the technology stack, system architecture, and milestones.',
    outcomes: [
      'Define the problem',
      'Establish project scope',
      'Select suitable technologies',
      'Design the system architecture',
      'Create realistic milestones',
    ],
  },
  {
    number: '03',
    title: 'Build',
    description: 'This is where the project takes shape. We provide technical mentorship, implementation guidance, debugging support, dataset and tool recommendations, and help with the agreed technical scope.',
    outcomes: [
      'Implement the system',
      'Solve technical blockers',
      'Integrate required technologies',
      'Test and refine the implementation',
    ],
  },
  {
    number: '04',
    title: 'Document',
    description: 'We help turn the work into a clear technical story through documentation, architecture diagrams, milestone reporting, presentation preparation, and defense guidance.',
    outcomes: [
      'Document the implementation',
      'Explain architecture and decisions',
      'Prepare project reports',
      'Prepare presentation materials',
      'Prepare for project defense',
    ],
  },
]

export default function Process() {
  return (
    <section className="process section-space" id="process" aria-labelledby="process-heading">
      <div className="content-wrap">
        <div className="section-intro section-intro--split">
          <div>
            <Eyebrow>The Vits&amp;Bolts method</Eyebrow>
            <h2 className="section-heading" id="process-heading">
              From a rough idea to a project you can defend.
            </h2>
          </div>
          <p className="section-intro__copy">
            We guide you through a structured process that keeps your project technically realistic, academically meaningful, and understandable from beginning to end.
          </p>
        </div>

        <ol className="process-steps" aria-label="The four stages of the Vits&Bolts method">
          {processSteps.map((step) => <ProcessStep key={step.number} {...step} />)}
        </ol>

        <div className="process-statement__layout">
          <p className="process-statement">
            YOU DON&apos;T JUST SUBMIT THE PROJECT. <span>YOU UNDERSTAND IT.</span>
          </p>
          <MediaBlock
            className="process-statement__media"
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            meta="V&B / PROJECT SUPPORT"
            label="Research, build, document, and defend with clarity."
          />
        </div>
      </div>
    </section>
  )
}

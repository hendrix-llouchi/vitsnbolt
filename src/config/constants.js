/**
 * Project Configuration & Constants for vitsnbolt
 * 
 * Single source of truth for links, copy, and structural content
 * grounded in PROJECT_DOCUMENTATION.md.
 */

// Replace with your real Google Form URL when ready
export const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-id-placeholder'

// Primary brand navigation items
export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'FAQ', href: '#faq' },
]

// Core Brand Metadata & Copy
export const BRAND_INFO = {
  name: 'vitsnbolt',
  tagline: 'Technical Mentorship & Practical Engineering for Final-Year Projects',
  promise: 'Your idea. Our expertise. Let’s build it together.',
  heroLabel: 'YOUR FINAL-YEAR PROJECT, REIMAGINED',
  heroHeadline: 'Bring Your Final-Year Project Idea to Life.',
  heroParagraph:
    'From AI and machine learning to software and IoT, we help students research, plan, build, and integrate practical solutions—with technical mentorship at every stage.',
  primaryCtaText: 'Tell Us About Your Project',
  secondaryCtaText: 'Explore Our Services',
  navCtaText: 'Start Your Project',
}

// 4 Core Services from Section 3 of PROJECT_DOCUMENTATION.md
export const SERVICES_DATA = [
  {
    id: 'ai-ml',
    title: 'Machine Learning & AI Integration',
    summary:
      'Incorporate practical machine learning into your final-year project with model selection, data preprocessing, and production-ready system integration.',
    focusAreas: [
      'Model architecture selection & benchmarking',
      'Data cleaning, labeling, and augmentation pipelines',
      'Edge inference and local/cloud deployment',
      'Evaluation metrics, confusion matrices, and validation rigor'
    ],
    idealFor: 'Computer science and data science students building predictive, computer vision, or NLP projects.',
  },
  {
    id: 'research-gaps',
    title: 'Focused Research on Existing Projects & Gaps',
    summary:
      'Conduct a thorough investigation of existing literature, open-source repositories, and state-of-the-art implementations to uncover defensible research gaps.',
    focusAreas: [
      'Systematic literature and codebase review',
      'Formulating clear, academically rigorous problem statements',
      'Benchmarking limitations in prior published work',
      'Scoping feasible technical novelty for degree requirements'
    ],
    idealFor: 'Students needing a validated, distinct problem statement before writing code or sourcing hardware.',
  },
  {
    id: 'software-iot',
    title: 'Software & IoT Projects',
    summary:
      'End-to-end design and prototype construction spanning embedded hardware, sensor arrays, microcontrollers, and modern connected software.',
    focusAreas: [
      'Microcontroller firmware (ESP32, Arduino, Raspberry Pi)',
      'Sensor interfacing, analog/digital calibration, and bus protocols',
      'Lightweight communication protocols (MQTT, WebSockets, HTTP)',
      'Schematic review and hardware-to-software bridge design'
    ],
    idealFor: 'Electrical, mechatronics, and computer engineering students with physical prototype requirements.',
  },
  {
    id: 'software-integration',
    title: 'Software Integration into Existing Projects',
    summary:
      'Develop modern software layers for projects that already have physical hardware, laboratory rigs, or experimental testbenches in place.',
    focusAreas: [
      'Interactive control dashboards (React, Tailwind, Electron)',
      'REST APIs and real-time backend synchronization',
      'Local and cloud telemetry storage (PostgreSQL, SQLite, InfluxDB)',
      'Data visualization and live experiment logging'
    ],
    idealFor: 'Students with existing mechanical or electrical setups who need clean software to present and record data.',
  },
]

// 4-Step Linear Journey: Discover -> Plan -> Build -> Document
export const JOURNEY_STEPS = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Scope & Skill Evaluation',
    description:
      'We review your degree programme, university rubric, existing ideas, technical background, and project constraints to map out viable technical directions.',
    outcomes: ['Clarified problem statement', 'Constraint & deadline mapping', 'Skill baseline assessment'],
  },
  {
    number: '02',
    name: 'Plan',
    tagline: 'Objectives, Tools & Roadmap',
    description:
      'We formulate precise project milestones, select the right tech stack, identify hardware/dataset dependencies, and structure a realistic timeline.',
    outcomes: ['Architecture blueprint', 'Dataset & hardware BOM sourcing', 'Milestone breakdown'],
  },
  {
    number: '03',
    name: 'Build',
    tagline: 'Implementation & Integration',
    description:
      'Hands-on technical mentorship as you write code, solder circuits, train models, and integrate software layers—with ongoing code review and debugging support.',
    outcomes: ['Working code & firmware', 'Hardware-software integration', 'Debugging & optimization'],
  },
  {
    number: '04',
    name: 'Document',
    tagline: 'Reports, Code & Presentations',
    description:
      'We guide you in structuring technical documentation, architectural flowcharts, methodology chapters, and defense slide decks so you can defend your work with confidence.',
    outcomes: ['System architecture diagrams', 'Methodology & chapter structure', 'Viva / defense preparedness'],
  },
]

// Why Work With Us: Trust Pillars (Strictly grounded in reality & academic integrity)
export const TRUST_PILLARS = [
  {
    title: 'Technical Mentorship, Not Ghostwriting',
    description:
      'We uphold strict academic integrity. We do not write your thesis or build black-box deliverables. We mentor you through the implementation so you understand every single design choice, algorithm, and line of code.',
    highlight: 'Defend your project with genuine mastery',
  },
  {
    title: 'Full-Stack Hardware + Software Breadth',
    description:
      'Many final-year projects stall at the boundary between circuits and code. We bridge the gap between ESP32 microcontrollers, sensor buses, Python ML pipelines, and web dashboards under one cohesive architecture.',
    highlight: 'Unified hardware-software engineering',
  },
  {
    title: 'Literature-Grounded Scoping',
    description:
      'Academic projects fail when they lack a defined problem. We help you review prior studies, pinpoint real limitations, and establish a clear technical novelty that your evaluators will respect.',
    highlight: 'Rigorous academic positioning',
  },
  {
    title: 'Structured, Deadline-Driven Milestones',
    description:
      'Final-year timelines are unforgiving. We structure our engagement around your institutional submission calendar—ensuring interim demos, test data, and reports are ready well ahead of finals week.',
    highlight: 'Zero last-minute submission panic',
  },
]

// Real Project Archetypes & Capabilities (Grounded demonstrations of problem-space architectures)
export const PROJECT_CAPABILITIES = [
  {
    title: 'Edge Computer Vision & Defect Detection Rig',
    discipline: 'AI & Embedded Systems',
    description:
      'A compact hardware setup combining a camera module with an edge neural network to classify surface irregularities in real-time, logging classification confidence to a local monitor.',
    techStack: ['Python', 'PyTorch / ONNX', 'Raspberry Pi / Jetson', 'OpenCV'],
    keyContribution: 'Optimized lightweight inference model running at 24 FPS on constrained edge hardware.',
  },
  {
    title: 'Distributed IoT Environmental Telemetry Mesh',
    discipline: 'IoT & Telemetry',
    description:
      'Multi-node sensor network gathering microclimate metrics across distributed points, transmitting payload via MQTT over WiFi/LoRa to a centralized time-series visualization dashboard.',
    techStack: ['ESP32', 'C++ / FreeRTOS', 'MQTT', 'InfluxDB', 'React Dashboard'],
    keyContribution: 'Low-power sleep-cycle management and reliable packet delivery across intermittent links.',
  },
  {
    title: 'Comparative Algorithmic Benchmark & Gap Analysis',
    discipline: 'Applied Machine Learning',
    description:
      'A research study evaluating baseline regression and ensemble models against an engineered multi-modal pipeline on public domain datasets, complete with cross-validation and statistical tests.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib / Seaborn'],
    keyContribution: 'Statistically rigorous evaluation identifying performance trade-offs under noisy inputs.',
  },
  {
    title: 'Hardware Testbench Web Control Interface',
    discipline: 'Software Integration',
    description:
      'A full-stack software layer enabling real-time telemetry streaming, motor calibration, and test run logging for an existing mechanical engineering dynamometer test rig.',
    techStack: ['Node.js', 'WebSockets', 'SerialPort API', 'React', 'Tailwind CSS'],
    keyContribution: 'Sub-50ms latency bidirectional telemetry bridge between industrial sensor bus and browser.',
  },
]

// FAQ Data from Section 5 & 6 of PROJECT_DOCUMENTATION.md
export const FAQ_DATA = [
  {
    question: 'Who is this project support service for?',
    answer:
      'We support undergraduate and postgraduate students in computer science, software engineering, electrical and electronics engineering, mechatronics, and related technical disciplines working on final-year, capstone, or research projects.',
  },
  {
    question: 'What stage of my project do I need to be in to get started?',
    answer:
      'You can reach out at any stage: whether you only have a broad area of interest and need help defining a scope, have a rough concept, or already have code or hardware in progress that requires debugging, integration, or optimization.',
  },
  {
    question: 'Will you write my project or thesis for me?',
    answer:
      'No. We adhere strictly to academic integrity guidelines. We do not write thesis chapters, complete assignments on your behalf, or provide black-box submissions. We provide technical mentorship, architectural consulting, code reviews, and structured debugging guidance so you fully understand and build your own project.',
  },
  {
    question: 'How are mentorship and consulting sessions conducted?',
    answer:
      'All sessions are conducted remotely via one-on-one video calls, collaborative code reviews, asynchronous architectural feedback, and schematic/circuit inspection. You receive actionable step-by-step guidance tailored to your specific project milestones.',
  },
  {
    question: 'How do you handle university submission deadlines?',
    answer:
      'When you submit the project inquiry form, you provide your degree submission deadline. We structure an agreed timeline backwards from that date, establishing clear milestones for literature review, prototype build, system testing, and report documentation.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Click "Tell Us About Your Project" to open our intake Google Form. Fill in your degree programme, current project stage, technical tools in use, and main challenges. Our team will review your submission and reach out to schedule an initial scoping session.',
  },
]

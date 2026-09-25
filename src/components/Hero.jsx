import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { INQUIRY_URL } from '../config.js'
import Button from './ui/Button.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import MediaBlock from './ui/MediaBlock.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="content-wrap hero__inner">
        <div className="hero__copy">
          <Eyebrow>Final-year project support</Eyebrow>
          <h1 className="hero__heading" id="hero-heading">
            <span>YOUR IDEA.</span>
            <span>OUR <em>EXPERTISE.</em></span>
            <span>LET&apos;S BUILD IT</span>
            <span className="hero__heading-last">TOGETHER.</span>
          </h1>
          <p className="hero__description">
            From research and project discovery to implementation, documentation, and defense preparation&mdash;we help final-year students turn ambitious ideas into projects they understand and can confidently defend.
          </p>
          <div className="hero__actions">
            <Button
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tell Us About Your Project
              <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
            </Button>
            <a className="hero__process-link" href="#process">
              Explore Our Process
              <ArrowDown size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </div>

        <MediaBlock
          className="hero__media"
          label="A considered place for project photography, prototypes, or technical work."
          meta="V&B / PROJECT SUPPORT"
        >
          <div className="hero-media-art" aria-hidden="true">
            <span className="hero-media-art__index">01</span>
            <span className="hero-media-art__line hero-media-art__line--one" />
            <span className="hero-media-art__line hero-media-art__line--two" />
            <span className="hero-media-art__label">Research <strong>&rarr;</strong> Build <strong>&rarr;</strong> Document</span>
            <span className="hero-media-art__mark">V&amp;B</span>
          </div>
        </MediaBlock>
      </div>
    </section>
  )
}

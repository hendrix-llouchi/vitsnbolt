import { ArrowUpRight } from 'lucide-react'
import { INQUIRY_URL } from '../config.js'
import Divider from './ui/Divider.jsx'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-wrap">
        <Divider />
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <p className="site-footer__wordmark">Vits&amp;Bolts</p>
            <p className="site-footer__description">
              Guiding final-year students from project idea to confident defense.
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            <h2 className="site-footer__label">Navigate</h2>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href={INQUIRY_URL} target="_blank" rel="noopener noreferrer">
                  Start Your Project
                </a>
              </li>
            </ul>
          </nav>

          <div className="site-footer__contact">
            <h2 className="site-footer__label">Have a project in mind?</h2>
            <a className="site-footer__contact-link" href={INQUIRY_URL} target="_blank" rel="noopener noreferrer">
              Tell us about it
              <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </div>

        <Divider />
        <div className="site-footer__bottom">
          <p>&copy; 2026 Vits&amp;Bolts. All rights reserved.</p>
          <p>Built to help students understand, build, and confidently defend their work.</p>
        </div>
      </div>
    </footer>
  )
}

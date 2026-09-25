import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { INQUIRY_URL } from '../config.js'
import Button from './ui/Button.jsx'

const navigationLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="content-wrap site-header__inner">
        <a className="brand-mark" href="#top" aria-label="Volts&Bits home">
          Volts&Bits
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <div
            className={`site-nav__links ${isMenuOpen ? 'site-nav__links--open' : ''}`}
            id="mobile-navigation"
          >
            {navigationLinks.map((link) => (
              <a key={link.href} className="site-nav__link" href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <Button
              className="site-nav__cta"
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Start Your Project
              <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>

          <button
            className="site-nav__menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} strokeWidth={1.8} aria-hidden="true" /> : <Menu size={20} strokeWidth={1.8} aria-hidden="true" />}
          </button>
        </nav>
      </div>
    </header>
  )
}

import React, { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { GOOGLE_FORM_URL, NAV_LINKS, BRAND_INFO } from '../config/constants'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#D0CFC8]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Studio Brand Mark & Wordmark */}
          <a 
            href="#" 
            className="flex items-center gap-3.5 group rounded-lg p-1 transition-opacity hover:opacity-90"
            aria-label={`${BRAND_INFO.name} homepage`}
          >
            {/* Atelier Seal Mark */}
            <div className="w-10 h-10 rounded-lg bg-[#2D3741] border border-[#AE824B]/50 flex items-center justify-center text-white shadow-xs transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-xl font-bold tracking-tight text-[#AE824B]">
                V
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-[#2D3741] tracking-tight leading-none">
                {BRAND_INFO.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#A26B38] font-semibold pt-1">
                Project Mentorship Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-[14px] font-medium text-[#2D3741]/80 hover:text-[#2D3741] hover:bg-[#D0CFC8]/30 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#2D3741] hover:bg-[#1C232A] text-white text-[13px] font-semibold tracking-wide uppercase rounded-full shadow-xs hover:shadow transition-all duration-300 border border-[#AE824B]/40 active:scale-[0.98]"
            >
              <span>{BRAND_INFO.navCtaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#AE824B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2.5 rounded-lg text-[#2D3741] hover:bg-[#D0CFC8]/30 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-t border-[#D0CFC8]/70 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 shadow-lg"
          id="mobile-navigation"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg text-base font-medium text-[#2D3741] hover:bg-[#D0CFC8]/30 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2D3741] text-white text-sm font-semibold tracking-wide uppercase rounded-full shadow-xs border border-[#AE824B]/40"
            >
              <span>{BRAND_INFO.navCtaText}</span>
              <ArrowUpRight className="w-4 h-4 text-[#AE824B]" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

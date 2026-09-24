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
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#D0CFC8]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AE824B] rounded-lg p-1"
            aria-label={`${BRAND_INFO.name} homepage`}
          >
            {/* Vintage Craftsman Monogram / Mark */}
            <div className="w-10 h-10 rounded-xl bg-[#2D3741] border border-[#AE824B]/40 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-xl font-bold tracking-tight text-[#AE824B]">
                V
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-[26px] font-semibold text-[#2D3741] tracking-tight group-hover:text-[#AE824B] transition-colors leading-none">
                {BRAND_INFO.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#A26B38] font-medium pt-1">
                Project Mentorship
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[14px] font-medium text-[#2D3741]/80 hover:text-[#2D3741] hover:bg-[#D0CFC8]/25 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AE824B]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Prominent CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#2D3741] hover:bg-[#1E252C] text-white text-[13px] font-medium tracking-wide uppercase rounded-full shadow-sm hover:shadow transition-all duration-300 active:scale-[0.98] border border-[#AE824B]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AE824B]"
            >
              <span>{BRAND_INFO.navCtaText}</span>
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#AE824B] group-hover:text-white group-hover:bg-[#AE824B] transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2.5 rounded-lg text-[#2D3741] hover:bg-[#D0CFC8]/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AE824B]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden border-t border-[#D0CFC8]/60 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200"
          id="mobile-menu"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg text-base font-medium text-[#2D3741] hover:bg-[#D0CFC8]/30 hover:text-[#185B6C] transition-colors"
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
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2D3741] hover:bg-[#1E252C] text-white text-sm font-medium tracking-wide uppercase rounded-full shadow-sm border border-[#AE824B]/40 active:scale-[0.98] transition-all"
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

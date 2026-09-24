import React, { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

export default function Navbar({ onOpenForm }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#E8E4DA]/60 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Name in elegant serif */}
        <a href="#" className="font-serif text-2xl font-normal text-[#1C232A] tracking-tight hover:opacity-80 transition-opacity">
          vitsnbolt
        </a>

        {/* Center / Right Links */}
        <div className="hidden md:flex items-center gap-9">
          <nav className="flex items-center gap-8 text-[13px] tracking-wide text-[#5F6B78]">
            <a href="#services" className="hover:text-[#1C232A] transition-colors">
              Services
            </a>
            <a href="#dilemmas" className="hover:text-[#1C232A] transition-colors">
              The Dilemmas
            </a>
            <a href="#how-it-works" className="hover:text-[#1C232A] transition-colors">
              How It Works
            </a>
          </nav>

          {/* Right Action Button */}
          <button
            onClick={onOpenForm}
            className="px-5 py-2.5 bg-[#1C232A] hover:bg-[#2D3741] text-white text-[13px] font-medium transition-all shadow-sm"
          >
            Tell Us About Your Project
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1C232A]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-[#FAF8F5] border-b border-[#E8E4DA] space-y-3 text-sm">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#5F6B78]">Services</a>
          <a href="#dilemmas" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#5F6B78]">The Dilemmas</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-[#5F6B78]">How It Works</a>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenForm(); }}
            className="w-full mt-2 py-2.5 bg-[#1C232A] text-white text-xs font-medium text-center"
          >
            Tell Us About Your Project
          </button>
        </div>
      )}
    </header>
  )
}

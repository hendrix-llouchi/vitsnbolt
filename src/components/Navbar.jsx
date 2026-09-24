import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onOpenForm }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[#FAF8F5] pt-6 pb-4 px-6 md:px-12 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Name in elegant serif */}
        <a href="#" className="font-serif text-2xl md:text-3xl font-normal text-[#1C232A] tracking-tight hover:opacity-85 transition-opacity">
          vitsnbolt
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7 text-[13px] font-sans">
            <a href="#" className="text-[#B88E56] font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-[#5F6B78] hover:text-[#1C232A] transition-colors">
              About
            </a>
            <a href="#services" className="text-[#5F6B78] hover:text-[#1C232A] transition-colors">
              Services
            </a>
          </nav>

          <button
            onClick={onOpenForm}
            className="px-5 py-2.5 bg-[#1C232A] hover:bg-[#2D3741] text-white text-[13px] font-sans font-medium transition-colors"
          >
            Tell Us About Your Project
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1C232A]"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t border-[#E8E4DA] mt-3 space-y-3 text-sm">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="block text-[#B88E56] font-medium">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-[#5F6B78]">About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-[#5F6B78]">Services</a>
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

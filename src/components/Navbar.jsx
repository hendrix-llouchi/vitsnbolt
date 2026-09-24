import React, { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export default function Navbar({ onOpenForm }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-[#D0CFC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#2D3741] flex items-center justify-center text-white font-display font-bold text-sm tracking-wider">
            VB
          </div>
          <span className="font-display font-bold text-xl text-[#2D3741] tracking-tight">
            vitsnbolt
          </span>
        </a>

        {/* Navigation links (from Section 01 of PDF doc) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#536474]">
          <a href="#services" className="hover:text-[#2D3741] transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="hover:text-[#2D3741] transition-colors">
            How It Works
          </a>
          <a href="#about" className="hover:text-[#2D3741] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#2D3741] transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2D3741] hover:bg-[#AE824B] text-white text-sm font-semibold transition-colors shadow-sm"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-[#2D3741] hover:bg-gray-100"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-white border-b border-[#D0CFC8] space-y-3 text-sm">
          <a href="#services" onClick={() => setMenuOpen(false)} className="block py-2 text-[#536474] font-medium">Services</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block py-2 text-[#536474] font-medium">How It Works</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block py-2 text-[#536474] font-medium">About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 text-[#536474] font-medium">Contact</a>
          <button
            onClick={() => { setMenuOpen(false); onOpenForm(); }}
            className="w-full mt-2 py-3 rounded-lg bg-[#2D3741] text-white font-semibold text-center"
          >
            Start Your Project
          </button>
        </div>
      )}
    </header>
  )
}

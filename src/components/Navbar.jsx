import React, { useState } from 'react'
import { Sparkles, ArrowUpRight, Menu, X, Cpu, Layers } from 'lucide-react'

export default function Navbar({ onOpenForm }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#2D3741]/90 border-b border-[#445363]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#AE824B] to-[#A26B38] flex items-center justify-center shadow-md shadow-[#AE824B]/20 border border-[#C7985D]/40 group-hover:scale-105 transition-transform">
            <span className="font-display font-bold text-lg text-white tracking-wider">VB</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-[#D0CFC8] transition-colors">
                vitsnbolt
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-[#185B6C]/40 text-[#39A5BE] border border-[#185B6C]">
                Mentorship Lab
              </span>
            </div>
            <p className="text-[11px] text-[#D0CFC8] hidden md:block">
              Final-Year Engineering & Tech Project Guidance
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <a href="#hero" className="text-white font-medium hover:text-[#AE824B] transition-colors">
            Overview
          </a>
          <a href="#the-problem" className="text-[#D0CFC8] hover:text-white transition-colors flex items-center gap-1.5">
            <span>The Dilemmas</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#34404C] text-[#AE824B] font-mono font-semibold">
              Preview
            </span>
          </a>
          <a href="#the-journey" className="text-[#D0CFC8] hover:text-white transition-colors flex items-center gap-1.5">
            <span>How We Help</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#34404C] text-[#AE824B] font-mono font-semibold">
              Preview
            </span>
          </a>
          <a href="#documentation" className="text-[#D0CFC8] hover:text-white transition-colors">
            Blueprint
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenForm}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#AE824B] to-[#C7985D] hover:from-[#C7985D] hover:to-[#AE824B] text-white font-semibold text-sm shadow-lg shadow-[#AE824B]/25 hover:shadow-[#AE824B]/40 transition-all hover:translate-y-[-1px] active:translate-y-[0px]"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#D0CFC8] hover:text-white hover:bg-[#34404C] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-[#1C232A] border-b border-[#445363] space-y-3">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-white font-medium hover:bg-[#34404C]"
          >
            Overview
          </a>
          <a
            href="#the-problem"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-[#D0CFC8] hover:text-white hover:bg-[#34404C]"
          >
            <span>The Dilemmas (The Problem)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#34404C] text-[#AE824B] font-mono">Upcoming</span>
          </a>
          <a
            href="#the-journey"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-[#D0CFC8] hover:text-white hover:bg-[#34404C]"
          >
            <span>How We Help (The Journey)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#34404C] text-[#AE824B] font-mono">Upcoming</span>
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenForm()
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#AE824B] hover:bg-[#C7985D] text-white font-semibold text-sm shadow-md"
            >
              <span>Start Your Project (Google Form)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

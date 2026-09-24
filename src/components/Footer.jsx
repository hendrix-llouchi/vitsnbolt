import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Footer({ onOpenForm }) {
  return (
    <footer className="border-t border-[#E8E4DA] bg-[#FAF8F5] text-[#5F6B78] py-14 text-xs font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6">
          
          <div className="space-y-1">
            <span className="font-serif text-xl font-normal text-[#1C232A]">vitsnbolt</span>
            <p className="text-xs text-[#5F6B78]">
              Final-year project mentorship & engineering atelier.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="#services" className="hover:text-[#1C232A] transition-colors">Services</a>
            <a href="#dilemmas" className="hover:text-[#1C232A] transition-colors">The Dilemmas</a>
            <a href="#how-it-works" className="hover:text-[#1C232A] transition-colors">How It Works</a>
            <button onClick={onOpenForm} className="text-[#B88E56] hover:text-[#1C232A] transition-colors font-medium">
              Intake Form
            </button>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-[#E8E4DA] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8C96A0]">
          <p>© {new Date().getFullYear()} vitsnbolt. All rights reserved.</p>
          <p className="font-serif italic text-[#B88E56]">“Your idea. Our expertise. Let’s build it together.”</p>
        </div>
      </div>
    </footer>
  )
}

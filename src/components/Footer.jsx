import React from 'react'
import { Sparkles, ArrowUpRight, Mail, ShieldCheck } from 'lucide-react'

export default function Footer({ onOpenForm }) {
  return (
    <footer className="border-t border-[#445363] bg-[#1C232A] text-[#D0CFC8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#AE824B] flex items-center justify-center font-display font-bold text-white text-sm">
                VB
              </div>
              <span className="font-display font-bold text-lg text-white">vitsnbolt</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-[#B4B2A8]">
              Final-year project mentorship, software-hardware development, and technical research support for undergraduate and graduate students.
            </p>
            <p className="text-xs italic text-[#AE824B]">
              “Your idea. Our expertise. Let’s build it together.”
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2">
              Sections & Blueprint
            </p>
            <div><a href="#hero" className="hover:text-white transition-colors">Section 1: Hero & Vision</a></div>
            <div><a href="#the-problem" className="hover:text-white transition-colors">Section 2: The 3 Dilemmas (Upcoming)</a></div>
            <div><a href="#the-journey" className="hover:text-white transition-colors">Section 3: How We Help (Upcoming)</a></div>
            <div><a href="#documentation" onClick={onOpenForm} className="hover:text-[#AE824B] transition-colors">Google Form Intake</a></div>
          </div>

          {/* Trust & Academic Policy */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-white font-semibold uppercase tracking-wider text-[11px]">
              <ShieldCheck className="w-4 h-4 text-[#AE824B]" />
              <span>Academic Integrity Notice</span>
            </div>
            <p className="text-[11px] text-[#B4B2A8] leading-relaxed">
              vitsnbolt provides technical mentorship, engineering consultation, debugging assistance, and educational support. We do not write unearned dissertations or guarantee grades. Students remain full authors and owners of their academic work.
            </p>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-[#252E37] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#B4B2A8]">
          <p>© {new Date().getFullYear()} vitsnbolt. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={onOpenForm} className="hover:text-white transition-colors">
              Intake Form
            </button>
            <span>•</span>
            <span className="font-mono text-[#AE824B]">Sprint: feature/hero-section</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

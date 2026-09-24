import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Footer({ onOpenForm }) {
  return (
    <footer className="border-t border-[#D0CFC8] bg-[#F8F8F6] text-[#536474] py-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-display font-bold text-base text-[#2D3741]">vitsnbolt</span>
              <span className="text-[#B4B2A8]">•</span>
              <span className="text-xs text-[#2D3741]">Final-Year Project Support</span>
            </div>
            <p className="text-xs italic text-[#A26B38]">
              “Your idea. Our expertise. Let’s build it together.”
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-[#2D3741] transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-[#2D3741] transition-colors">How It Works</a>
            <button onClick={onOpenForm} className="text-[#AE824B] font-semibold hover:underline flex items-center gap-1">
              <span>Google Form</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#D0CFC8] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#536474]">
          <p>© {new Date().getFullYear()} vitsnbolt. All rights reserved.</p>
          <p>Branch: feature/hero-section</p>
        </div>
      </div>
    </footer>
  )
}

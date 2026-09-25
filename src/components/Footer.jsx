import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { BRAND_INFO, GOOGLE_FORM_URL, NAV_LINKS } from '../config/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1C232A] text-white border-t border-[#AE824B]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#2D3741] border border-[#AE824B]/60 flex items-center justify-center text-white">
                <span className="font-serif text-lg font-bold text-[#AE824B]">V</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {BRAND_INFO.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#D0CFC8] leading-relaxed max-w-sm">
              Hands-on engineering mentorship and technical consulting for university students working on final-year, capstone, AI, and IoT projects.
            </p>

            <div className="pt-2">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#AE824B] hover:text-white transition-colors"
              >
                <span>Submit Intake Form</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#A26B38] font-bold">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D0CFC8]">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Support Areas */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#185B6C] font-bold">
              Support Capabilities
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D0CFC8]">
              <li>Machine Learning & AI Integration</li>
              <li>Research Gap Analysis & Literature Review</li>
              <li>Microcontroller Firmware & Circuit Schematics</li>
              <li>Interactive Dashboards & Telemetry Logging</li>
              <li>Oral Presentation & Defense Coaching</li>
            </ul>
          </div>

        </div>

        {/* Academic Integrity Notice */}
        <div className="pt-8 pb-4 text-[11px] leading-relaxed text-[#D0CFC8]/60 border-b border-white/5">
          <p>
            <strong className="text-[#AE824B] font-semibold">Academic Integrity Commitment: </strong> 
            vitsnbolt provides technical mentorship, architectural consulting, and debugging support. All software, code, schematics, and reports remain the sole academic intellectual property of the student. We strictly refuse ghostwriting, unauthorized assignment completion, or examination circumvention.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D0CFC8]/60">
          <p>© {currentYear} {BRAND_INFO.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#AE824B]">
            Craftsmanship • Integrity • Engineering Rigor
          </p>
        </div>

      </div>
    </footer>
  )
}

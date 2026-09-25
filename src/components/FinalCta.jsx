import React from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { GOOGLE_FORM_URL, BRAND_INFO } from '../config/constants'

export default function FinalCta() {
  return (
    <section 
      id="contact" 
      aria-label="Get Started" 
      className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Slate Studio Atelier Callout Card */}
        <div className="rounded-3xl bg-[#2D3741] text-white p-8 sm:p-12 md:p-16 border border-[#AE824B]/40 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Radial Highlight */}
          <div 
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-15 blur-3xl -z-0"
            style={{
              background: 'radial-gradient(circle, #AE824B 0%, #185B6C 60%, transparent 80%)'
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#AE824B]/50 bg-white/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AE824B]" aria-hidden="true" />
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#AE824B]">
                Begin Your Project Journey
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              "{BRAND_INFO.promise}"
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-[#D0CFC8] leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you are framing your initial problem statement, untangling hardware schematics, or preparing for your oral defense—our engineering team is ready to mentor you.
            </p>

            {/* Big Action Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#AE824B] hover:bg-[#976E3B] text-white text-[15px] font-semibold tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98] border border-white/20"
                aria-label={`${BRAND_INFO.primaryCtaText} (opens external intake form)`}
              >
                <span>{BRAND_INFO.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center text-xs text-[#D0CFC8]/90">
              <div className="flex items-center sm:justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#AE824B] flex-shrink-0" />
                <span>Zero Obligation Scoping</span>
              </div>
              <div className="flex items-center sm:justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#185B6C] flex-shrink-0" />
                <span>Strict Academic Integrity</span>
              </div>
              <div className="flex items-center sm:justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#AE824B] flex-shrink-0" />
                <span>Full Intellectual Property Ownership</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

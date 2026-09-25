import React from 'react'
import { ShieldCheck, Cpu, BookOpen, Clock, ArrowRight } from 'lucide-react'
import { TRUST_PILLARS, GOOGLE_FORM_URL } from '../config/constants'

const iconMap = [
  ShieldCheck,
  Cpu,
  BookOpen,
  Clock,
]

export default function WhyUs() {
  return (
    <section 
      id="why-us" 
      aria-label="Why Work With Us" 
      className="py-20 md:py-28 bg-[#F3EFEA]/70 border-t border-b border-[#D0CFC8]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#AE824B]/40 bg-white shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AE824B]" aria-hidden="true" />
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#AE824B]">
              Principles & Trust
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3741] tracking-tight">
            Why Students Trust Our Mentorship
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D3741]/80 leading-relaxed font-normal">
            We don't take shortcuts, fabricate deliverables, or make inflated claims. We provide rigorous, hands-on technical guidance that empowers you to produce credible academic work.
          </p>
        </div>

        {/* Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRUST_PILLARS.map((pillar, index) => {
            const Icon = iconMap[index] || ShieldCheck
            return (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white border border-[#D0CFC8] p-8 shadow-xs hover:border-[#AE824B]/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#2D3741] text-[#AE824B] flex items-center justify-center border border-[#AE824B]/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#FAF8F5] text-[#A26B38] border border-[#D0CFC8]/80">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#2D3741] tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#2D3741]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D0CFC8]/50 flex items-center justify-between text-xs text-[#185B6C] font-semibold">
                  <span>Student Centered • Academic Grade Standard</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Academic Integrity Manifesto Box */}
        <div className="mt-12 p-8 rounded-2xl bg-[#2D3741] text-white border border-[#AE824B]/40 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#AE824B] font-bold">
                Our Commitment to Academic Integrity
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                "Your idea. Our expertise. Let’s build it together."
              </h3>
              <p className="text-xs sm:text-sm text-[#D0CFC8] leading-relaxed">
                We believe true mentorship prepares you for both your viva defense and your post-graduation career. We will challenge your assumptions, debug your blockers, and refine your architecture—so you can stand in front of your examiners with total confidence.
              </p>
            </div>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#AE824B] hover:bg-[#976E3B] text-white text-xs font-semibold tracking-wide uppercase transition-colors shadow-sm flex-shrink-0"
            >
              <span>Schedule Initial Scoping</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

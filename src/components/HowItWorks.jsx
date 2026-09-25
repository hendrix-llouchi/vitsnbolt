import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { JOURNEY_STEPS, GOOGLE_FORM_URL } from '../config/constants'

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      aria-label="How It Works" 
      className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#AE824B]/40 bg-white shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AE824B]" aria-hidden="true" />
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#AE824B]">
              Service Methodology
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3741] tracking-tight">
            Discover → Plan → Build → Document
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D3741]/80 leading-relaxed font-normal">
            A structured, transparent roadmap aligned with your university's submission deadlines—ensuring you remain in control of your project from early concept to final oral defense.
          </p>
        </div>

        {/* 4-Step Linear Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {JOURNEY_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white border border-[#D0CFC8] p-7 shadow-xs hover:border-[#AE824B]/70 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#2D3741] text-[#AE824B]">
                    STAGE {step.number}
                  </span>
                  <span className="text-xs font-mono text-[#D0CFC8] font-bold">
                    0{index + 1}/04
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="font-serif text-2xl font-bold text-[#2D3741] tracking-tight">
                  {step.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#A26B38] mt-1 uppercase tracking-wide">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-[#2D3741]/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Concrete Deliverables / Outcomes */}
              <div className="mt-6 pt-5 border-t border-[#D0CFC8]/60">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#185B6C] font-bold mb-2.5">
                  Milestone Outcomes:
                </p>
                <ul className="space-y-2">
                  {step.outcomes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#2D3741]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#AE824B] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner on Academic Integrity */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F3EFEA] border border-[#D0CFC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#2D3741]">
              Collaborative Mentorship, Zero Ghostwriting
            </h4>
            <p className="text-xs sm:text-sm text-[#2D3741]/80 mt-1 max-w-3xl">
              We guide the design, structure, and debugging, but you write the code and build the hardware. When examiners ask deep technical questions at your defense, you will know every answer.
            </p>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D3741] text-white text-xs font-semibold tracking-wide uppercase hover:bg-[#1C232A] transition-colors flex-shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#AE824B]" />
          </a>
        </div>

      </div>
    </section>
  )
}

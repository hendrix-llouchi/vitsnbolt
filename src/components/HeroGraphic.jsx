import React from 'react'
import { CheckCircle2, Compass, Layers, Wrench, FileText, ArrowRight } from 'lucide-react'

/**
 * HeroGraphic Component
 * 
 * Replaces fake futuristic dashboards with an authentic, tangible 
 * engineering studio "Project Dossier & Mentorship Blueprint".
 * Emphasizes craftsmanship, methodology, and student outcomes.
 */
export default function HeroGraphic({ imageSrc = null }) {
  if (imageSrc) {
    return (
      <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
        <div className="p-3 rounded-2xl bg-white border border-[#D0CFC8] shadow-md">
          <img
            src={imageSrc}
            alt="Final-year engineering and software project workspace"
            className="w-full h-auto rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none select-none">
      
      {/* Studio Drafting Board / Dossier Card */}
      <div className="rounded-2xl bg-white border border-[#D0CFC8] shadow-lg overflow-hidden">
        
        {/* Studio Dossier Header */}
        <div className="bg-[#2D3741] text-white px-6 py-4 flex items-center justify-between border-b border-[#AE824B]/30">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-[#AE824B]/20 border border-[#AE824B]/40 flex items-center justify-center text-[#AE824B]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-[#AE824B] font-semibold">
                Project Dossier & Blueprint
              </p>
              <p className="text-sm font-serif font-medium text-white/95">
                Final-Year Engineering Architecture
              </p>
            </div>
          </div>
          
          <span className="hidden sm:inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-white/10 text-[#D0CFC8] border border-white/10">
            University Capstone Standard
          </span>
        </div>

        {/* Studio Body: Project Breakdown Phases */}
        <div className="p-6 sm:p-7 space-y-5 bg-[#FAF8F5]/50">
          
          {/* Phase 1: Problem Scoping */}
          <div className="p-4 rounded-xl bg-white border border-[#D0CFC8]/80 shadow-xs hover:border-[#AE824B]/60 transition-colors">
            <div className="flex items-start gap-3.5">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#AE824B]/15 text-[#AE824B] font-mono text-xs font-bold flex items-center justify-center mt-0.5">
                01
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[#2D3741]">
                    Scope & Literature Gap Formulation
                  </h4>
                  <span className="text-[11px] font-mono text-[#A26B38] font-medium">Stage: Scoping</span>
                </div>
                <p className="text-xs text-[#2D3741]/75 mt-1 leading-relaxed">
                  Pinpoint limitations in prior studies and establish a clear, defensible problem statement aligned with your degree rubric.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 2: Hardware & Software Stack Selection */}
          <div className="p-4 rounded-xl bg-white border border-[#D0CFC8]/80 shadow-xs hover:border-[#AE824B]/60 transition-colors">
            <div className="flex items-start gap-3.5">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#185B6C]/15 text-[#185B6C] font-mono text-xs font-bold flex items-center justify-center mt-0.5">
                02
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[#2D3741]">
                    System Architecture & Tech Stack
                  </h4>
                  <span className="text-[11px] font-mono text-[#185B6C] font-medium">Stage: Design</span>
                </div>
                <p className="text-xs text-[#2D3741]/75 mt-1 leading-relaxed">
                  Select feasible microcontrollers (ESP32/Arduino), machine learning frameworks (PyTorch/TensorFlow), and database layers without over-engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 3: Collaborative Build & Mentorship */}
          <div className="p-4 rounded-xl bg-white border border-[#AE824B]/40 shadow-xs bg-gradient-to-r from-white to-[#FAF8F5]">
            <div className="flex items-start gap-3.5">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2D3741] text-[#AE824B] font-mono text-xs font-bold flex items-center justify-center mt-0.5">
                03
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[#2D3741]">
                    Hands-on Build, Review & Debugging
                  </h4>
                  <span className="text-[11px] font-mono text-[#AE824B] font-bold">Stage: Active Build</span>
                </div>
                <p className="text-xs text-[#2D3741]/75 mt-1 leading-relaxed">
                  Iterative 1-on-1 code reviews, circuit verification, pipeline debugging, and performance optimization before final integration.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 4: Thesis Documentation & Defense */}
          <div className="p-4 rounded-xl bg-white border border-[#D0CFC8]/80 shadow-xs hover:border-[#AE824B]/60 transition-colors">
            <div className="flex items-start gap-3.5">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A26B38]/15 text-[#A26B38] font-mono text-xs font-bold flex items-center justify-center mt-0.5">
                04
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[#2D3741]">
                    Technical Documentation & Defense Prep
                  </h4>
                  <span className="text-[11px] font-mono text-[#A26B38] font-medium">Stage: Defense</span>
                </div>
                <p className="text-xs text-[#2D3741]/75 mt-1 leading-relaxed">
                  Format architectural diagrams, methodology chapters, and presentation slides so you can answer examiner questions with genuine technical mastery.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Studio Footer: Real Mentorship Guarantee */}
        <div className="px-6 py-4 bg-[#F3EFEA] border-t border-[#D0CFC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#2D3741]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#AE824B] flex-shrink-0" />
            <span className="font-medium">Strict Academic Integrity: You build & understand your work</span>
          </div>
          <span className="font-mono text-[11px] text-[#A26B38] font-semibold">
            One-on-One Guidance
          </span>
        </div>

      </div>

    </div>
  )
}

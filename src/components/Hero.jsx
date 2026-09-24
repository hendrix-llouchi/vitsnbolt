import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero({ onOpenForm }) {
  return (
    <section className="flex-1 flex flex-col justify-center items-center text-center px-6 pt-16 pb-24 md:pt-24 md:pb-32 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto space-y-7">
        
        {/* Main Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-[68px] lg:text-[74px] font-normal text-[#1C232A] tracking-tight leading-[1.12]">
          From idea to completed<br className="hidden sm:inline" />
          {' '}final-year project — <span className="text-[#C59B63]">without</span><br className="hidden sm:inline" />
          {' '}<span className="text-[#C59B63]">losing yourself in the build.</span>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-sm sm:text-base md:text-[16px] text-[#5F6B78] max-w-2xl mx-auto leading-relaxed font-normal">
          vitsnbolt partners with final-year engineering and computer science students to design, structure, and ship practical technology using modern tools and AI — so your project succeeds, without the panic.
        </p>

        {/* Two Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C232A] hover:bg-[#2D3741] text-white text-[13px] font-sans font-medium transition-colors"
          >
            <span>Tell Us About Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-[#D5D0C5] bg-transparent hover:bg-[#F2EFE9] text-[#1C232A] text-[13px] font-sans font-medium transition-colors"
          >
            See Our Services
          </button>
        </div>

      </div>
    </section>
  )
}

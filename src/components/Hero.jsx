import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero({ onOpenForm }) {
  return (
    <section className="pt-24 pb-28 md:pt-32 md:pb-36 bg-[#FAF8F5] text-center px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Main Headline with the exact two-tone editorial serif styling */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#1C232A] tracking-tight leading-[1.14]">
          <span>From idea to completed </span>
          <span className="block sm:inline">final-year project — </span>
          <span className="text-[#B88E56] italic font-normal">
            without losing yourself in the build.
          </span>
        </h1>

        {/* Subtitle paragraph */}
        <p className="font-sans text-base sm:text-lg text-[#5F6B78] max-w-2xl mx-auto leading-relaxed font-normal">
          vitsnbolt partners with final-year engineering and computer science students to research, plan, build, and integrate practical solutions—so your project succeeds, without the panic.
        </p>

        {/* Dual Centered CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1C232A] hover:bg-[#2D3741] text-white text-[13px] font-medium transition-all shadow-sm"
          >
            <span>Tell Us About Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#dilemmas"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-[#D5D0C5] bg-white hover:bg-[#F4F1EA] text-[#1C232A] text-[13px] font-medium transition-colors"
          >
            See How We Help
          </a>
        </div>

      </div>
    </section>
  )
}

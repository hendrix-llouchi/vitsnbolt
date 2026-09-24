import React from 'react'
import { ArrowRight, ChevronDown, CheckCircle2, Cpu, Sparkles, BookOpen, Layers } from 'lucide-react'
import HeroGraphic from './HeroGraphic'
import { GOOGLE_FORM_URL, BRAND_INFO } from '../config/constants'

export default function Hero({ onPrimaryClick = null }) {
  // Smooth scroll handler for Secondary CTA
  const handleScrollToServices = (e) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = '#services'
    }
  }

  return (
    <section 
      aria-label="Hero Section" 
      className="relative overflow-hidden bg-vintage-grid pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32"
    >
      {/* Subtle warm accent gradients in background */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 opacity-25 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 20%, #AE824B 0%, #D0CFC8 40%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            
            {/* Introductory Label (Eyebrow Badge) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#AE824B]/50 bg-white/80 backdrop-blur-sm shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#AE824B] animate-pulse" aria-hidden="true" />
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#AE824B]">
                {BRAND_INFO.label}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] text-[#2D3741] font-bold tracking-tight leading-[1.12]">
              Bring Your Final-Year Project{' '}
              <span className="relative inline-block text-[#AE824B] italic font-medium">
                Idea to Life.
                <span 
                  className="absolute bottom-1 left-0 w-full h-[3px] bg-[#AE824B]/30 rounded-full" 
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg md:text-[19px] text-[#2D3741]/85 leading-relaxed max-w-2xl font-normal">
              {BRAND_INFO.paragraph}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              
              {/* Primary CTA */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onPrimaryClick}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#2D3741] hover:bg-[#1C232A] text-white text-sm sm:text-[15px] font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] border border-[#AE824B]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AE824B] focus-visible:ring-offset-2"
                aria-label={`${BRAND_INFO.primaryCtaText} (opens external intake form)`}
              >
                <span>{BRAND_INFO.primaryCtaText}</span>
                <span 
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#AE824B] group-hover:bg-[#AE824B] group-hover:text-white transition-all duration-300"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/80 hover:bg-[#D0CFC8]/30 text-[#2D3741] hover:text-[#185B6C] text-sm sm:text-[15px] font-semibold tracking-wide rounded-full border border-[#D0CFC8] hover:border-[#AE824B] transition-all duration-300 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#185B6C] focus-visible:ring-offset-2"
                aria-label="Explore our core services and mentorship offerings"
              >
                <span>{BRAND_INFO.secondaryCtaText}</span>
                <ChevronDown className="w-4 h-4 text-[#A26B38] transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>

            </div>

            {/* Trust Points / Academic Disciplines Grid */}
            <div className="pt-4 border-t border-[#D0CFC8]/60 w-full">
              <p className="text-xs uppercase font-mono tracking-wider text-[#A26B38] font-bold mb-3">
                Disciplines Supported:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#2D3741]/80 font-medium">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#185B6C]" aria-hidden="true" />
                  <span>AI & Machine Learning</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#AE824B]" aria-hidden="true" />
                  <span>Software & IoT</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#A26B38]" aria-hidden="true" />
                  <span>System Integration</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#185B6C]" aria-hidden="true" />
                  <span>Technical Defense</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Hardware & Visual Workbench Composition */}
          <div className="lg:col-span-5 w-full">
            <HeroGraphic />
          </div>

        </div>
      </div>
    </section>
  )
}

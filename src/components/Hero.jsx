import React from 'react'
import { ArrowRight, ChevronDown, Cpu, Layers, Sparkles, BookOpen } from 'lucide-react'
import HeroGraphic from './HeroGraphic'
import { GOOGLE_FORM_URL, BRAND_INFO } from '../config/constants'

export default function Hero() {
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
      className="relative overflow-hidden bg-studio-canvas pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
            
            {/* Introductory Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#AE824B]/40 bg-white/90 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AE824B]" aria-hidden="true" />
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#AE824B]">
                {BRAND_INFO.heroLabel}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-[#2D3741] font-bold tracking-tight leading-[1.12]">
              Bring Your Final-Year Project{' '}
              <span className="relative inline-block text-[#AE824B] italic font-medium">
                Idea to Life.
                <span 
                  className="absolute bottom-1 left-0 w-full h-[2px] bg-[#AE824B]/30 rounded-full" 
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg md:text-[19px] text-[#2D3741]/85 leading-relaxed max-w-2xl font-normal">
              {BRAND_INFO.heroParagraph}
            </p>

            {/* Dual Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              
              {/* Primary CTA */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2D3741] hover:bg-[#1C232A] text-white text-[15px] font-semibold tracking-wide rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98] border border-[#AE824B]/40"
                aria-label={`${BRAND_INFO.primaryCtaText} (opens inquiry form in new tab)`}
              >
                <span>{BRAND_INFO.primaryCtaText}</span>
                <span 
                  className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#AE824B] group-hover:bg-[#AE824B] group-hover:text-white transition-all duration-300"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-[#F3EFEA] text-[#2D3741] text-[15px] font-semibold tracking-wide rounded-full border border-[#D0CFC8] hover:border-[#AE824B] transition-all duration-300 shadow-xs"
                aria-label="Explore our core services and mentorship offerings"
              >
                <span>{BRAND_INFO.secondaryCtaText}</span>
                <ChevronDown className="w-4 h-4 text-[#A26B38] transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>

            </div>

            {/* Core Technical Disciplines */}
            <div className="pt-6 border-t border-[#D0CFC8]/70 w-full">
              <p className="text-xs uppercase font-mono tracking-wider text-[#A26B38] font-bold mb-3">
                Disciplines Supported:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#2D3741]/85 font-medium">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#185B6C]" aria-hidden="true" />
                  <span>AI & Machine Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#AE824B]" aria-hidden="true" />
                  <span>Software & IoT</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A26B38]" aria-hidden="true" />
                  <span>Software Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#185B6C]" aria-hidden="true" />
                  <span>Thesis Defense Prep</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Tangible Project Dossier Blueprint */}
          <div className="lg:col-span-5 w-full">
            <HeroGraphic />
          </div>

        </div>
      </div>
    </section>
  )
}

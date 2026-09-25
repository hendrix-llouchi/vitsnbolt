import React from 'react'
import { Brain, Search, Cpu, GitMerge, Check, ArrowRight } from 'lucide-react'
import { SERVICES_DATA, GOOGLE_FORM_URL } from '../config/constants'

const iconMap = {
  'ai-ml': Brain,
  'research-gaps': Search,
  'software-iot': Cpu,
  'software-integration': GitMerge,
}

export default function Services() {
  return (
    <section 
      id="services" 
      aria-label="Core Services" 
      className="py-20 md:py-28 bg-[#F3EFEA]/60 border-t border-b border-[#D0CFC8]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#AE824B]/40 bg-white shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AE824B]" aria-hidden="true" />
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#AE824B]">
              Core Service Offerings
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3741] tracking-tight">
            Tailored Engineering & Research Mentorship
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D3741]/80 leading-relaxed font-normal">
            We partner with university students across every critical phase of their capstone or final-year project—bridging the gap between theory, literature, code, and hardware.
          </p>
        </div>

        {/* Services Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.id] || Brain
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-white border border-[#D0CFC8] p-8 shadow-xs hover:border-[#AE824B]/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#2D3741] text-[#AE824B] flex items-center justify-center border border-[#AE824B]/30 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#D0CFC8] text-right">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="font-serif text-2xl font-bold text-[#2D3741] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#2D3741]/80 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Focus Areas */}
                  <div className="mt-6 pt-6 border-t border-[#D0CFC8]/60">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#A26B38] font-bold mb-3">
                      Key Technical Deliverables:
                    </p>
                    <ul className="space-y-2.5">
                      {service.focusAreas.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#2D3741]/85">
                          <Check className="w-4 h-4 text-[#185B6C] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Ideal For & CTA */}
                <div className="mt-8 pt-6 border-t border-[#D0CFC8]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#2D3741]/70">
                    <span className="font-semibold text-[#2D3741]">Best suited for: </span>
                    <span>{service.idealFor}</span>
                  </div>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#AE824B] hover:text-[#2D3741] transition-colors flex-shrink-0"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

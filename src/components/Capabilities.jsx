import React from 'react'
import { Cpu, Network, BarChart3, Sliders, ArrowRight } from 'lucide-react'
import { PROJECT_CAPABILITIES, GOOGLE_FORM_URL } from '../config/constants'

const iconMap = [
  Cpu,
  Network,
  BarChart3,
  Sliders,
]

export default function Capabilities() {
  return (
    <section 
      id="capabilities" 
      aria-label="Capabilities and Project Archetypes" 
      className="py-20 md:py-28 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#AE824B]/40 bg-white shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AE824B]" aria-hidden="true" />
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#AE824B]">
              Engineering Breadth
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3741] tracking-tight">
            Project Archetypes & Technical Setups
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D3741]/80 leading-relaxed font-normal">
            Representative problem-space architectures we regularly mentor across computer science, electronics, and mechatronics. No fabricated case studies—just real engineering stacks and practical integration patterns.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_CAPABILITIES.map((project, index) => {
            const Icon = iconMap[index] || Cpu
            return (
              <div
                key={project.title}
                className="rounded-2xl bg-white border border-[#D0CFC8] p-8 shadow-xs hover:border-[#AE824B]/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#2D3741] text-[#AE824B]">
                      {project.discipline}
                    </span>
                    <Icon className="w-5 h-5 text-[#A26B38]" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#2D3741] tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#2D3741]/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Core Challenge */}
                  <div className="mt-5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#D0CFC8]/60 text-xs text-[#2D3741]">
                    <span className="font-semibold text-[#A26B38]">Key Technical Focus: </span>
                    <span>{project.keyContribution}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-5 border-t border-[#D0CFC8]/60">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#185B6C] font-bold mb-2.5">
                      Architecture & Toolchain:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#F3EFEA] text-[#2D3741] border border-[#D0CFC8]/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-4 border-t border-[#D0CFC8]/60">
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#AE824B] hover:text-[#2D3741] transition-colors"
                  >
                    <span>Discuss a similar project</span>
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

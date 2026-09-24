import React from 'react'
import { ArrowUpRight, ArrowRight, BrainCircuit, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react'

export default function Hero({ onOpenForm }) {
  return (
    <section className="bg-white pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#D0CFC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Brand Promise Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F8F6] border border-[#D0CFC8] text-xs font-semibold text-[#A26B38]">
              <Sparkles className="w-3.5 h-3.5 text-[#AE824B]" />
              <span>“Your idea. Our expertise. Let’s build it together.”</span>
            </div>

            {/* Headline from Documentation */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-[#2D3741] tracking-tight leading-[1.15]">
              Bring Your Final-Year Project Idea to{' '}
              <span className="text-[#AE824B]">
                Life.
              </span>
            </h1>

            {/* Supporting Text from Documentation */}
            <p className="text-base sm:text-lg text-[#536474] leading-relaxed max-w-xl">
              From AI and machine learning to software and IoT, we help students research, plan, build, and integrate practical solutions—with technical mentorship at every stage.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#2D3741] hover:bg-[#AE824B] text-white font-semibold text-sm transition-all shadow-sm"
              >
                <span>Tell Us About Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#F8F8F6] hover:bg-[#EFEFEA] border border-[#D0CFC8] text-[#2D3741] font-semibold text-sm transition-colors"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#AE824B]" />
              </a>
            </div>

            {/* Core Capability Tags */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-medium text-[#536474]">
              <span className="px-3 py-1.5 rounded-md bg-[#F8F8F6] border border-[#D0CFC8]">
                AI & Machine Learning
              </span>
              <span className="px-3 py-1.5 rounded-md bg-[#F8F8F6] border border-[#D0CFC8]">
                Software & IoT
              </span>
              <span className="px-3 py-1.5 rounded-md bg-[#F8F8F6] border border-[#D0CFC8]">
                System Integration
              </span>
              <span className="px-3 py-1.5 rounded-md bg-[#F8F8F6] border border-[#D0CFC8]">
                Research & Gap Analysis
              </span>
            </div>

          </div>

          {/* Right Column: Clean Project Support Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#F8F8F6] border border-[#D0CFC8] p-6 sm:p-7 shadow-sm space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#D0CFC8]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#AE824B]"></div>
                  <span className="text-xs font-bold text-[#2D3741] uppercase tracking-wider">
                    Project Mentorship Workspace
                  </span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-white border border-[#D0CFC8] text-[#185B6C] font-semibold">
                  Active
                </span>
              </div>

              {/* Mentorship Points */}
              <div className="space-y-3.5 text-xs text-[#2D3741]">
                <div className="p-3.5 rounded-xl bg-white border border-[#D0CFC8] flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#185B6C]/10 text-[#185B6C] flex items-center justify-center shrink-0 mt-0.5">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2D3741]">Concept & Research Direction</p>
                    <p className="text-[#536474] mt-0.5">Defining the research gap and approved project scope with supervisor alignment.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#D0CFC8] flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#AE824B]/10 text-[#AE824B] flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2D3741]">Software & Hardware Implementation</p>
                    <p className="text-[#536474] mt-0.5">Code architecture, model training, IoT sensors, APIs, and real debugging.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#D0CFC8] flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#A26B38]/10 text-[#A26B38] flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2D3741]">Documentation & Defense Preparation</p>
                    <p className="text-[#536474] mt-0.5">Report methodology, system architecture diagrams, and viva presentation readiness.</p>
                  </div>
                </div>
              </div>

              {/* Bottom quick CTA in visual */}
              <div className="pt-2">
                <button
                  onClick={onOpenForm}
                  className="w-full py-2.5 rounded-lg bg-white hover:bg-gray-50 border border-[#D0CFC8] text-[#2D3741] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Submit your project details via Google Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AE824B]" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

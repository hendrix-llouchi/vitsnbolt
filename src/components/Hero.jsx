import React from 'react'
import { 
  ArrowUpRight, 
  ChevronRight, 
  Cpu, 
  BrainCircuit, 
  Layers, 
  CheckCircle, 
  Terminal, 
  Compass, 
  FileCheck2,
  Sparkles,
  Workflow
} from 'lucide-react'

export default function Hero({ onOpenForm }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle background ambient gradients & grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#185B6C] blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#AE824B] blur-3xl"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(208, 207, 200, 0.08) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement / Audience Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#34404C]/80 border border-[#445363] text-xs font-medium text-[#D0CFC8] mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-[#AE824B] animate-pulse"></span>
          <span className="text-white font-semibold">2026/2027 Capstone Intake Open</span>
          <span className="text-[#B4B2A8]">•</span>
          <span>Computer Science, AI & Engineering Students</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.12]">
              Bring Your Final-Year Project Idea to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7985D] via-[#AE824B] to-[#D0CFC8]">
                Life.
              </span>
            </h1>

            {/* Subtitle / Core Description */}
            <p className="text-base sm:text-lg text-[#D0CFC8] leading-relaxed max-w-2xl font-normal">
              From AI and machine learning to software and IoT, we help final-year students research, plan, build, and integrate practical solutions—with dedicated technical mentorship at every stage.
            </p>

            {/* Brand Promise Callout */}
            <div className="p-4 rounded-xl bg-[#1C232A]/70 border-l-4 border-[#AE824B] border-y border-r border-[#445363]/60 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#AE824B] mb-1">
                The Brand Promise
              </p>
              <p className="text-sm font-medium text-white italic">
                “Your idea. Our expertise. Let’s build it together.”
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenForm}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#AE824B] hover:bg-[#C7985D] text-white font-bold text-base shadow-xl shadow-[#AE824B]/30 hover:shadow-[#AE824B]/50 transition-all hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                <span>Tell Us About Your Project</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <a
                href="#the-problem"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#34404C]/70 hover:bg-[#34404C] border border-[#445363] text-[#D0CFC8] hover:text-white font-semibold text-sm transition-all"
              >
                <span>Explore The Dilemmas</span>
                <ChevronRight className="w-4 h-4 text-[#AE824B]" />
              </a>
            </div>

            {/* Capability highlights */}
            <div className="pt-4 border-t border-[#445363]/50">
              <p className="text-xs uppercase tracking-wider text-[#B4B2A8] font-semibold mb-3">
                Supported Technical Domains
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: BrainCircuit, label: 'Machine Learning & AI' },
                  { icon: Cpu, label: 'Software & IoT Hardware' },
                  { icon: Layers, label: 'System Integration & APIs' },
                  { icon: FileCheck2, label: 'Literature Gaps & Defense' },
                ].map((domain, idx) => (
                  <div 
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1C232A]/80 border border-[#445363] text-xs font-medium text-[#D0CFC8]"
                  >
                    <domain.icon className="w-3.5 h-3.5 text-[#AE824B]" />
                    <span>{domain.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Tactile Engineering Workbench Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#1C232A] border border-[#AE824B]/40 shadow-2xl shadow-black/60 overflow-hidden">
              
              {/* Window Header / Status Bar */}
              <div className="px-4 py-3 bg-[#171D23] border-b border-[#34404C] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#A26B38]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#AE824B]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#185B6C]/80"></div>
                  <span className="text-xs font-mono text-[#B4B2A8] ml-2">vitsnbolt://workspace</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#185B6C]/30 text-[#39A5BE] text-[10px] font-mono border border-[#185B6C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39A5BE] animate-ping"></span>
                  <span>SESSION ACTIVE</span>
                </div>
              </div>

              {/* Workbench Body */}
              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Active Mentorship Project Card */}
                <div className="p-4 rounded-xl bg-[#2D3741]/90 border border-[#445363]">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-[#AE824B] uppercase tracking-wider font-semibold">
                      Student Case File #2409
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#AE824B]/20 text-[#C7985D] font-mono text-[10px] font-semibold border border-[#AE824B]/40">
                      Discovery → Build
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base leading-snug">
                    Autonomous Multi-Sensor UAV with Edge-AI Crop Health Assessment
                  </h3>
                  <p className="text-xs text-[#D0CFC8] mt-1.5 line-clamp-2">
                    Resolving sensor calibration drift, Edge TPU inference bottleneck, and telemetry dashboard integration.
                  </p>
                </div>

                {/* Technical Stack Decomposition */}
                <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#252E37] border border-[#34404C]">
                    <div className="text-[10px] text-[#AE824B] uppercase font-semibold">AI Architecture</div>
                    <div className="text-white font-medium mt-0.5">YOLOv8-Nano (PyTorch)</div>
                    <div className="text-[10px] text-[#B4B2A8] mt-1">Quantized for Coral Edge</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#252E37] border border-[#34404C]">
                    <div className="text-[10px] text-[#39A5BE] uppercase font-semibold">Hardware Layer</div>
                    <div className="text-white font-medium mt-0.5">ESP32-S3 + Multispectral</div>
                    <div className="text-[10px] text-[#B4B2A8] mt-1">UART Telemetry Protocol</div>
                  </div>
                </div>

                {/* Mentorship Terminal Log */}
                <div className="p-3.5 rounded-xl bg-[#12161A] border border-[#2B3540] font-mono text-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#AE824B] text-[11px] pb-1 border-b border-[#252E37]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Mentorship Guidance Engine</span>
                  </div>
                  <div className="text-[#39A5BE] text-[11px]">
                    $ vitsnbolt audit --project "CropHealth-UAV"
                  </div>
                  <div className="text-[#D0CFC8] text-[11px] leading-relaxed">
                    [OK] Research gap validated: real-time edge spectral indices.<br/>
                    [FIX] Refactored camera buffer overflow in FreeRTOS queue.<br/>
                    [NEXT] Structuring IEEE Chapter 3: System Methodology.
                  </div>
                </div>

                {/* Bottom Callout in card */}
                <div className="p-3 rounded-lg bg-[#AE824B]/10 border border-[#AE824B]/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-white">
                    <Sparkles className="w-4 h-4 text-[#AE824B]" />
                    <span className="font-medium">Have an idea or feeling stuck?</span>
                  </div>
                  <button 
                    onClick={onOpenForm}
                    className="text-[#C7985D] hover:text-white font-semibold underline text-xs transition-colors"
                  >
                    Get Mentored →
                  </button>
                </div>

              </div>

              {/* Wood / Barbershop Craftsman Bottom Accent */}
              <div className="h-1.5 bg-gradient-to-r from-[#A26B38] via-[#AE824B] to-[#185B6C]"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

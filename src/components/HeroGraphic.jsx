import React from 'react'
import { Cpu, Network, ShieldCheck, Sparkles, Terminal, Activity, Layers } from 'lucide-react'

/**
 * HeroGraphic Component
 * 
 * Provides a high-end, responsive CSS/SVG architectural composition 
 * depicting an engineering and AI project workbench.
 * If an imageSrc prop is supplied, it displays the image with matching hardware bezel.
 */
export default function HeroGraphic({ imageSrc = null }) {
  if (imageSrc) {
    return (
      <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
        <div className="p-2 sm:p-3 rounded-[2rem] bg-[#2D3741]/5 border border-[#AE824B]/30 shadow-xl backdrop-blur-sm">
          <img
            src={imageSrc}
            alt="Final-year engineering and AI project workspace"
            className="w-full h-auto rounded-[calc(2rem-0.75rem)] object-cover shadow-inner"
            loading="lazy"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none select-none">
      
      {/* Decorative ambient glow */}
      <div 
        className="absolute -inset-4 rounded-[2.5rem] opacity-30 blur-2xl -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #AE824B 0%, #185B6C 50%, transparent 80%)'
        }}
      />

      {/* Outer Shell: Machined Slate Chassis (Double-Bezel) */}
      <div className="p-3 sm:p-4 rounded-[2rem] bg-[#2D3741] border border-[#AE824B]/40 shadow-2xl">
        
        {/* Inner Core: Precision Terminal & System Blueprint */}
        <div className="rounded-[calc(2rem-0.75rem)] bg-[#1F2730] border border-white/10 overflow-hidden text-white">
          
          {/* Hardware Header / Rivet Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#171D24] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A26B38]/80 border border-[#AE824B]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#AE824B] border border-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#185B6C] border border-[#185B6C]" />
              <span className="ml-3 font-mono text-[11px] text-[#D0CFC8]/70 tracking-wider">
                vitsnbolt://engine.core
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-[#185B6C]/30 text-[#67C2D4] border border-[#185B6C]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#185B6C] animate-pulse" />
                SYSTEM ACTIVE
              </span>
            </div>
          </div>

          {/* Workbench Canvas */}
          <div className="p-5 sm:p-7 space-y-6">
            
            {/* Top Stat Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#2D3741]/60 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#D0CFC8]/70">Pipeline</p>
                <p className="font-serif text-lg font-semibold text-[#AE824B] mt-0.5">AI / ML</p>
                <span className="text-[10px] text-[#D0CFC8]/60">TensorCore</span>
              </div>
              <div className="bg-[#2D3741]/60 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#D0CFC8]/70">Hardware</p>
                <p className="font-serif text-lg font-semibold text-white mt-0.5">IoT & Micro</p>
                <span className="text-[10px] text-[#D0CFC8]/60">ESP32 / MQTT</span>
              </div>
              <div className="bg-[#2D3741]/60 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#D0CFC8]/70">Outcome</p>
                <p className="font-serif text-lg font-semibold text-[#67C2D4] mt-0.5">Defensible</p>
                <span className="text-[10px] text-[#D0CFC8]/60">Thesis Ready</span>
              </div>
            </div>

            {/* Architectural Flow Diagram (SVG) */}
            <div className="relative bg-[#171D24]/80 p-4 rounded-xl border border-white/10">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[11px] font-mono text-[#D0CFC8]/70">
                <span className="flex items-center gap-1.5 text-white/90">
                  <Terminal className="w-3.5 h-3.5 text-[#AE824B]" />
                  Architecture Schematic
                </span>
                <span className="text-[#AE824B]">v4.2.0 Spec</span>
              </div>

              {/* Schematic Node Network */}
              <div className="pt-4 pb-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center relative">
                  
                  {/* Step 1 Node */}
                  <div className="p-3 rounded-lg bg-[#2D3741]/90 border border-[#AE824B]/30 flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-lg bg-[#1F2730] text-[#AE824B] flex items-center justify-center mb-2">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white">Sensor Edge</span>
                    <span className="text-[10px] text-[#D0CFC8]/60 font-mono mt-0.5">Telemetry Ingest</span>
                  </div>

                  {/* Step 2 Node */}
                  <div className="p-3 rounded-lg bg-[#2D3741]/90 border border-[#185B6C]/60 flex flex-col items-center text-center relative">
                    <div className="w-8 h-8 rounded-lg bg-[#185B6C]/30 text-[#67C2D4] flex items-center justify-center mb-2">
                      <Network className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white">Neural Engine</span>
                    <span className="text-[10px] text-[#D0CFC8]/60 font-mono mt-0.5">Inference Model</span>
                  </div>

                  {/* Step 3 Node */}
                  <div className="p-3 rounded-lg bg-[#2D3741]/90 border border-[#A26B38]/40 flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-lg bg-[#1F2730] text-[#AE824B] flex items-center justify-center mb-2">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white">Interactive App</span>
                    <span className="text-[10px] text-[#D0CFC8]/60 font-mono mt-0.5">Live UI & API</span>
                  </div>

                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="mt-3 p-3 rounded-lg bg-[#0F1418] border border-white/5 font-mono text-[11px] leading-relaxed text-[#D0CFC8]/90 overflow-x-auto">
                <div className="flex items-center justify-between text-[10px] text-[#AE824B] mb-1">
                  <span>// Real-time integration pipeline</span>
                  <span className="text-emerald-400">● 100% test coverage</span>
                </div>
                <code>
                  <span className="text-purple-400">const</span> <span className="text-blue-300">project</span> = <span className="text-purple-400">await</span> vitsnbolt.<span className="text-yellow-300">synthesize</span>({'{'}<br />
                  &nbsp;&nbsp;domain: <span className="text-emerald-300">'AI + Embedded IoT'</span>,<br />
                  &nbsp;&nbsp;mentorship: <span className="text-emerald-300">'End-to-End'</span>,<br />
                  &nbsp;&nbsp;status: <span className="text-[#AE824B]">'Defense Ready'</span><br />
                  {'}'})
                </code>
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-[#D0CFC8]/70">
              <span className="flex items-center gap-1.5 text-white/90 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#AE824B]" />
                University Standard Compliant
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#AE824B]">
                <Activity className="w-3 h-3 text-[#185B6C]" />
                Mentorship Live
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Milestone Badges (Overlapping with subtle shadow) */}
      <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#FAF8F5] border border-[#AE824B]/40 px-4 py-2.5 rounded-2xl shadow-xl items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#2D3741] text-[#AE824B] flex items-center justify-center shadow-inner">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-mono tracking-wider text-[#A26B38] font-bold">Proven Methodology</p>
          <p className="text-xs font-semibold text-[#2D3741]">Discover → Plan → Build → Document</p>
        </div>
      </div>

    </div>
  )
}

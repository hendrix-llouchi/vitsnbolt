import React from 'react'
import { 
  HelpCircle, 
  Wrench, 
  GraduationCap, 
  Compass, 
  Layers, 
  Cpu, 
  FileCheck2, 
  ArrowRight, 
  ExternalLink,
  Lock,
  Clock,
  Sparkles
} from 'lucide-react'

export default function UpcomingSections({ onOpenForm }) {
  return (
    <div className="space-y-24 py-16 border-t border-[#445363]/60 bg-[#1F272F]/50">
      
      {/* SECTION 2: THE PROBLEM (Upcoming Preview) */}
      <section id="the-problem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Upcoming Status Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-[#34404C]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A26B38]/20 border border-[#A26B38]/50 text-xs font-mono text-[#C7985D] mb-2 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>SECTION 2 // WIREFRAME IN QUEUE</span>
            </div>
            <h2 className="text-3xl font-bold font-display text-white">
              The 3 Final-Year Dilemmas
            </h2>
            <p className="text-sm text-[#D0CFC8] mt-1 max-w-xl">
              We identified the exact three roadblocks that derail university final-year and research students.
            </p>
          </div>
          <span className="self-start sm:self-center px-3 py-1 rounded bg-[#2D3741] border border-[#445363] text-xs font-mono text-[#B4B2A8]">
            Status: Next Sprint Implementation
          </span>
        </div>

        {/* 3 Difficulty Cards from Wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Where do I start? */}
          <div className="relative rounded-2xl bg-[#252E37] border-2 border-dashed border-[#AE824B]/50 p-6 sm:p-7 hover:border-[#AE824B] transition-all group">
            <div className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded bg-[#1C232A] text-[#AE824B] border border-[#34404C]">
              Dilemma 01
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#AE824B]/20 border border-[#AE824B]/40 flex items-center justify-center text-[#C7985D] mb-5">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-[#C7985D] transition-colors">
              “Where do I start?”
            </h3>
            <p className="text-sm text-[#D0CFC8] leading-relaxed mb-4">
              You have an area of interest or a vague title, but you cannot pinpoint an approved research gap, define technical scope, or structure a defensible proposal.
            </p>
            <div className="p-3 rounded-lg bg-[#1C232A] border border-[#34404C] text-xs text-[#B4B2A8] space-y-1">
              <div className="font-semibold text-white">Common Symptoms:</div>
              <div>• Topic rejected by project supervisor</div>
              <div>• Unrealistic or overly broad feature scope</div>
              <div>• No clear scientific novelty or practical gap</div>
            </div>
          </div>

          {/* Card 2: How do I build it? */}
          <div className="relative rounded-2xl bg-[#252E37] border-2 border-dashed border-[#AE824B]/50 p-6 sm:p-7 hover:border-[#AE824B] transition-all group">
            <div className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded bg-[#1C232A] text-[#AE824B] border border-[#34404C]">
              Dilemma 02
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#185B6C]/30 border border-[#185B6C] flex items-center justify-center text-[#39A5BE] mb-5">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-[#39A5BE] transition-colors">
              “How do I build it?”
            </h3>
            <p className="text-sm text-[#D0CFC8] leading-relaxed mb-4">
              Your design is approved on paper, but the implementation hits a wall. Sensor readings are corrupted, AI models fail to converge, or the API refuses to talk to your hardware.
            </p>
            <div className="p-3 rounded-lg bg-[#1C232A] border border-[#34404C] text-xs text-[#B4B2A8] space-y-1">
              <div className="font-semibold text-white">Common Symptoms:</div>
              <div>• Edge hardware & microcontroller bugs</div>
              <div>• Untrained / overfitted neural networks</div>
              <div>• Broken communication between hardware & web</div>
            </div>
          </div>

          {/* Card 3: How do I finish it? */}
          <div className="relative rounded-2xl bg-[#252E37] border-2 border-dashed border-[#AE824B]/50 p-6 sm:p-7 hover:border-[#AE824B] transition-all group">
            <div className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded bg-[#1C232A] text-[#AE824B] border border-[#34404C]">
              Dilemma 03
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#A26B38]/30 border border-[#A26B38] flex items-center justify-center text-[#C7985D] mb-5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-[#C7985D] transition-colors">
              “How do I finish it?”
            </h3>
            <p className="text-sm text-[#D0CFC8] leading-relaxed mb-4">
              The submission deadline is two weeks away. You have scattered code files, unfinished documentation, unverified test data, and severe anxiety about the viva defense.
            </p>
            <div className="p-3 rounded-lg bg-[#1C232A] border border-[#34404C] text-xs text-[#B4B2A8] space-y-1">
              <div className="font-semibold text-white">Common Symptoms:</div>
              <div>• Incomplete thesis methodology & system diagrams</div>
              <div>• Unreproducible demo with live glitches</div>
              <div>• Inability to explain underlying algorithms</div>
            </div>
          </div>

        </div>

      </section>


      {/* SECTION 3: WHAT WE DO & HOW WE HELP (Upcoming Preview) */}
      <section id="the-journey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-[#34404C]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#185B6C]/30 border border-[#185B6C] text-xs font-mono text-[#39A5BE] mb-2 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>SECTION 3 // WIREFRAME IN QUEUE</span>
            </div>
            <h2 className="text-3xl font-bold font-display text-white">
              What We Do & How We Help
            </h2>
            <p className="text-sm text-[#D0CFC8] mt-1 max-w-xl">
              Our 4-step guided engineering methodology takes you from early ambiguity to a validated, documented submission.
            </p>
          </div>
          <span className="self-start sm:self-center px-3 py-1 rounded bg-[#2D3741] border border-[#445363] text-xs font-mono text-[#B4B2A8]">
            Status: Next Sprint Implementation
          </span>
        </div>

        {/* 4 Cards from Wireframe: Discover, Plan, Build, Launch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Discover */}
          <div className="rounded-2xl bg-[#252E37] border-2 border-dashed border-[#445363] p-6 relative hover:border-[#AE824B] transition-colors">
            <div className="text-xs font-mono font-bold text-[#AE824B] uppercase tracking-wider mb-2">
              Card 01
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#34404C] flex items-center justify-center text-white mb-4">
              <Compass className="w-5 h-5 text-[#AE824B]" />
            </div>
            <h4 className="text-xl font-bold font-display text-white mb-2">
              Discover
            </h4>
            <p className="text-xs text-[#D0CFC8] leading-relaxed">
              We audit your discipline, course guidelines, current skill level, and requirements. We mentor you in exploring viable, novel directions.
            </p>
          </div>

          {/* Card 2: Plan */}
          <div className="rounded-2xl bg-[#252E37] border-2 border-dashed border-[#445363] p-6 relative hover:border-[#AE824B] transition-colors">
            <div className="text-xs font-mono font-bold text-[#AE824B] uppercase tracking-wider mb-2">
              Card 02
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#34404C] flex items-center justify-center text-white mb-4">
              <Layers className="w-5 h-5 text-[#39A5BE]" />
            </div>
            <h4 className="text-xl font-bold font-display text-white mb-2">
              Plan
            </h4>
            <p className="text-xs text-[#D0CFC8] leading-relaxed">
              Formulate concrete objectives, choose right tools & hardware, evaluate dependencies, and establish a week-by-week development roadmap.
            </p>
          </div>

          {/* Card 3: Build */}
          <div className="rounded-2xl bg-[#252E37] border-2 border-dashed border-[#445363] p-6 relative hover:border-[#AE824B] transition-colors">
            <div className="text-xs font-mono font-bold text-[#AE824B] uppercase tracking-wider mb-2">
              Card 03
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#34404C] flex items-center justify-center text-white mb-4">
              <Cpu className="w-5 h-5 text-[#C7985D]" />
            </div>
            <h4 className="text-xl font-bold font-display text-white mb-2">
              Build
            </h4>
            <p className="text-xs text-[#D0CFC8] leading-relaxed">
              Direct technical guidance, circuit schematics, AI model training scripts, software integration, API bridges, and hands-on bug resolution.
            </p>
          </div>

          {/* Card 4: Launch */}
          <div className="rounded-2xl bg-[#252E37] border-2 border-dashed border-[#445363] p-6 relative hover:border-[#AE824B] transition-colors">
            <div className="text-xs font-mono font-bold text-[#AE824B] uppercase tracking-wider mb-2">
              Card 04
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#34404C] flex items-center justify-center text-white mb-4">
              <FileCheck2 className="w-5 h-5 text-[#39A5BE]" />
            </div>
            <h4 className="text-xl font-bold font-display text-white mb-2">
              Launch & Document
            </h4>
            <p className="text-xs text-[#D0CFC8] leading-relaxed">
              System deployment, test reports, thesis methodology writing, presentation slide design, and mock viva questions for your defense.
            </p>
          </div>

        </div>

        {/* Lead Generation & Google Form Integration Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1C232A] via-[#252E37] to-[#1C232A] border border-[#AE824B]/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#AE824B] font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Active Lead-Generation Endpoint</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Ready to begin? Share your project details now.
            </h3>
            <p className="text-sm text-[#D0CFC8] max-w-xl">
              Even as we build out the full platform interface, our technical mentors are actively reviewing student submissions via our official Google Form.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenForm}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#AE824B] hover:bg-[#C7985D] text-white font-bold text-sm shadow-lg shadow-[#AE824B]/30 transition-all hover:translate-y-[-1px]"
            >
              Fill Out Intake Form
            </button>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#185B6C] hover:bg-[#24758A] text-white font-semibold text-sm transition-colors"
            >
              <span>Google Form Link</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </section>

    </div>
  )
}

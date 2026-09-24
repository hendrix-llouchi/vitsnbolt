import React from 'react'
import { ArrowUpRight, ExternalLink, HelpCircle, Wrench, GraduationCap, Compass, Layers, Cpu, CheckCircle } from 'lucide-react'

export default function UpcomingSections({ onOpenForm }) {
  return (
    <div className="bg-white space-y-24 py-16">
      
      {/* SECTION 2: THE PROBLEM */}
      <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#D0CFC8]">
          <div>
            <div className="inline-block px-2.5 py-1 rounded bg-[#F8F8F6] border border-[#D0CFC8] text-xs font-semibold text-[#AE824B] uppercase tracking-wider mb-2">
              Section 2 • The Problem (Upcoming)
            </div>
            <h2 className="text-3xl font-bold font-display text-[#2D3741]">
              The Problem
            </h2>
            <p className="text-sm text-[#536474] mt-1">
              Common difficulties students face across the project lifecycle.
            </p>
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F8F8F6] text-[#536474] border border-[#D0CFC8] self-start sm:self-auto">
            Wireframe Preview
          </span>
        </div>

        {/* 3 Difficulty Cards from Wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Where do I start? */}
          <div className="rounded-xl border border-dashed border-[#D0CFC8] bg-[#F8F8F6] p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#D0CFC8] flex items-center justify-center text-[#AE824B]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display text-[#2D3741]">
              Where do I start?
            </h3>
            <p className="text-sm text-[#536474] leading-relaxed">
              Struggling to find an approved research gap, define realistic project boundaries, or formulate a concrete proposal that your supervisor will accept.
            </p>
          </div>

          {/* Card 2: How do I build it? */}
          <div className="rounded-xl border border-dashed border-[#D0CFC8] bg-[#F8F8F6] p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#D0CFC8] flex items-center justify-center text-[#185B6C]">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display text-[#2D3741]">
              How do I build it?
            </h3>
            <p className="text-sm text-[#536474] leading-relaxed">
              Stuck in technical implementation: hardware circuit errors, untrainable machine learning models, database issues, or broken API integrations.
            </p>
          </div>

          {/* Card 3: How do I finish it? */}
          <div className="rounded-xl border border-dashed border-[#D0CFC8] bg-[#F8F8F6] p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-[#D0CFC8] flex items-center justify-center text-[#A26B38]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display text-[#2D3741]">
              How do I finish it?
            </h3>
            <p className="text-sm text-[#536474] leading-relaxed">
              Nearing submission with disorganized code, missing thesis methodology writeups, incomplete test results, and anxiety about the oral presentation.
            </p>
          </div>

        </div>

      </section>


      {/* SECTION 3: WHAT WE DO & HOW WE HELP */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#D0CFC8]">
          <div>
            <div className="inline-block px-2.5 py-1 rounded bg-[#F8F8F6] border border-[#D0CFC8] text-xs font-semibold text-[#185B6C] uppercase tracking-wider mb-2">
              Section 3 • What We Do & How We Help (Upcoming)
            </div>
            <h2 className="text-3xl font-bold font-display text-[#2D3741]">
              What We Do & How We Help
            </h2>
            <p className="text-sm text-[#536474] mt-1">
              Discover, Plan, Build, and Launch with direct mentorship.
            </p>
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F8F8F6] text-[#536474] border border-[#D0CFC8] self-start sm:self-auto">
            Wireframe Preview
          </span>
        </div>

        {/* 4 Cards from Wireframe: Discover, Plan, Build, Launch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Discover */}
          <div className="rounded-xl border border-dashed border-[#D0CFC8] bg-[#F8F8F6] p-6 space-y-2">
            <span className="text-xs font-bold text-[#AE824B] uppercase tracking-wider font-mono">
              Card 1
            </span>
            <div className="w-9 h-9 rounded-lg bg-white border border-[#D0CFC8] flex items-center justify-center text-[#2D3741]">
              <Compass className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold font-display text-[#2D3741]">
              Discover
            </h4>
            <p className="text-xs text-[#536474] leading-relaxed">
              Understand the student's degree, concept, challenges, and goals. Explore and refine viable technical directions.
            </p>
          </div>

          {/* Card 2: Plan */}
          <div className="rounded-xl border border-dashed border-[#D0CFC8] bg-[#F8F8F6] p-6 space-y-2">
            <span className="text-xs font-bold text-[#AE824B] uppercase tracking-wider font-mono">
              Card 2
            </span>
            <div className="w-9 h-9 rounded-lg bg-white border border-[#D0CFC8] flex items-center justify-center text-[#2D3741]">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold font-display text-[#2D3741]">
              Plan
            </h4>
            <p className="text-xs text-[#536474] leading-relaxed">
              Define scope, tools, architecture, timeline, and methodology. Establish a realistic development roadmap.
            </p>
          </div>

          {/* Card 3: Build */}
          <div className="rounded-xl border border-dashed border-[#D0CFC8] bg-[#F8F8F6] p-6 space-y-2">
            <span className="text-xs font-bold text-[#AE824B] uppercase tracking-wider font-mono">
              Card 3
            </span>
            <div className="w-9 h-9 rounded-lg bg-white border border-[#D0CFC8] flex items-center justify-center text-[#2D3741]">
              <Cpu className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold font-display text-[#2D3741]">
              Build
            </h4>
            <p className="text-xs text-[#536474] leading-relaxed">
              Hands-on implementation guidance, AI model workflows, IoT circuits, software features, and debugging support.
            </p>
          </div>

          {/* Card 4: Launch */}
          <div className="rounded-xl border border-dashed border-[#D0CFC8] bg-[#F8F8F6] p-6 space-y-2">
            <span className="text-xs font-bold text-[#AE824B] uppercase tracking-wider font-mono">
              Card 4
            </span>
            <div className="w-9 h-9 rounded-lg bg-white border border-[#D0CFC8] flex items-center justify-center text-[#2D3741]">
              <CheckCircle className="w-4 h-4" />
            </div>
            <h4 className="text-lg font-bold font-display text-[#2D3741]">
              Launch
            </h4>
            <p className="text-xs text-[#536474] leading-relaxed">
              Final testing, project report organization, technical documentation, and presentation defense preparation.
            </p>
          </div>

        </div>

        {/* Google Form Link Integration (from Wireframe note) */}
        <div className="mt-8 p-6 rounded-xl bg-[#F8F8F6] border border-[#D0CFC8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-[#2D3741]">
              Ready to submit your project requirements?
            </h3>
            <p className="text-xs text-[#536474] mt-0.5">
              Fill out our intake form to get matched with technical mentorship support.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenForm}
              className="px-5 py-2.5 rounded-lg bg-[#2D3741] hover:bg-[#AE824B] text-white text-xs font-semibold transition-colors shadow-sm"
            >
              Open Intake Form
            </button>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white hover:bg-gray-100 border border-[#D0CFC8] text-[#2D3741] text-xs font-semibold transition-colors"
            >
              <span>Google Form Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </section>

    </div>
  )
}

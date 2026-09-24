import React from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function UpcomingSections({ onOpenForm }) {
  return (
    <div className="bg-[#FAF8F5] pb-32">
      
      {/* SECTION 2: THE DILEMMAS (The Problem) */}
      <section id="dilemmas" className="max-w-4xl mx-auto px-6 pt-16 pb-24 border-t border-[#E8E4DA]">
        
        {/* Section Title matching 'What I Do' style */}
        <div className="space-y-3 mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C232A] tracking-tight">
            The Dilemmas
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#5F6B78] max-w-2xl leading-relaxed">
            I help students who have coursework, deadlines, or early concepts—but feel stuck translating their ideas into a real, defensible submission.
          </p>
        </div>

        {/* 3 Clean Editorial Cards from Wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Where do I start? */}
          <div className="bg-white border border-[#E8E4DA] p-8 space-y-4 hover:border-[#B88E56]/60 transition-colors">
            <span className="font-serif text-xs italic tracking-wider text-[#B88E56] font-medium">
              01 — Orientation
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1C232A]">
              Where do I start?
            </h3>
            <p className="text-sm text-[#5F6B78] leading-relaxed font-sans">
              You have a rough area of interest, but no approved research gap. The scope feels overwhelming, and you need direction before writing the proposal.
            </p>
          </div>

          {/* Card 2: How do I build it? */}
          <div className="bg-white border border-[#E8E4DA] p-8 space-y-4 hover:border-[#B88E56]/60 transition-colors">
            <span className="font-serif text-xs italic tracking-wider text-[#B88E56] font-medium">
              02 — Implementation
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1C232A]">
              How do I build it?
            </h3>
            <p className="text-sm text-[#5F6B78] leading-relaxed font-sans">
              Your concept is approved, but the technical execution hits a wall. AI models fail to converge, hardware sensors drift, or the frontend won't communicate with your API.
            </p>
          </div>

          {/* Card 3: How do I finish it? */}
          <div className="bg-white border border-[#E8E4DA] p-8 space-y-4 hover:border-[#B88E56]/60 transition-colors">
            <span className="font-serif text-xs italic tracking-wider text-[#B88E56] font-medium">
              03 — Defense
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#1C232A]">
              How do I finish it?
            </h3>
            <p className="text-sm text-[#5F6B78] leading-relaxed font-sans">
              The submission deadline is closing in. You have working pieces, but the code is fragile, the methodology writeup is incomplete, and defense day is looming.
            </p>
          </div>

        </div>

      </section>


      {/* SECTION 3: WHAT WE DO & HOW WE HELP */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 pt-16 pb-12 border-t border-[#E8E4DA]">
        
        {/* Section Title */}
        <div className="space-y-3 mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C232A] tracking-tight">
            What We Do
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#5F6B78] max-w-2xl leading-relaxed">
            A quiet, disciplined 4-stage partnership through your project lifecycle.
          </p>
        </div>

        {/* 4 Cards from Wireframe: Discover, Plan, Build, Launch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Discover */}
          <div className="bg-white border border-[#E8E4DA] p-6 space-y-2.5">
            <span className="font-serif text-xs italic text-[#B88E56]">Stage 01</span>
            <h4 className="font-serif text-xl font-normal text-[#1C232A]">
              Discover
            </h4>
            <p className="text-xs text-[#5F6B78] leading-relaxed font-sans">
              We audit your coursework requirements, explore viable topics, and carve out a distinct, approved project scope.
            </p>
          </div>

          {/* Card 2: Plan */}
          <div className="bg-white border border-[#E8E4DA] p-6 space-y-2.5">
            <span className="font-serif text-xs italic text-[#B88E56]">Stage 02</span>
            <h4 className="font-serif text-xl font-normal text-[#1C232A]">
              Plan
            </h4>
            <p className="text-xs text-[#5F6B78] leading-relaxed font-sans">
              We define system architecture, tool selection, datasets, and a realistic week-by-week delivery roadmap.
            </p>
          </div>

          {/* Card 3: Build */}
          <div className="bg-white border border-[#E8E4DA] p-6 space-y-2.5">
            <span className="font-serif text-xs italic text-[#B88E56]">Stage 03</span>
            <h4 className="font-serif text-xl font-normal text-[#1C232A]">
              Build
            </h4>
            <p className="text-xs text-[#5F6B78] leading-relaxed font-sans">
              Direct technical mentorship: code reviews, ML model training, IoT wiring, integration bridges, and hands-on debugging.
            </p>
          </div>

          {/* Card 4: Launch */}
          <div className="bg-white border border-[#E8E4DA] p-6 space-y-2.5">
            <span className="font-serif text-xs italic text-[#B88E56]">Stage 04</span>
            <h4 className="font-serif text-xl font-normal text-[#1C232A]">
              Launch
            </h4>
            <p className="text-xs text-[#5F6B78] leading-relaxed font-sans">
              System stress-testing, thesis methodology writeup, diagram polish, and defense question preparation.
            </p>
          </div>

        </div>

        {/* Quiet, refined Google Form Callout */}
        <div className="mt-12 p-8 bg-white border border-[#E8E4DA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-normal text-[#1C232A]">
              Ready to share your project idea?
            </h3>
            <p className="text-xs text-[#5F6B78] font-sans">
              Submit your project context through our intake form to explore how we can build it together.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenForm}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#1C232A] hover:bg-[#2D3741] text-white text-xs font-medium transition-colors"
            >
              Fill Intake Form
            </button>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border border-[#D5D0C5] text-[#1C232A] hover:bg-[#FAF8F5] text-xs font-medium transition-colors"
            >
              <span>Google Form</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5F6B78]" />
            </a>
          </div>
        </div>

      </section>

    </div>
  )
}

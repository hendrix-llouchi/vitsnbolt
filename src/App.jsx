import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D3741] flex flex-col font-sans selection:bg-[#AE824B] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 01: Hero Section */}
        <Hero />

        {/* Section 02: Services Target Anchor (Prepared for next phase) */}
        <section 
          id="services" 
          tabIndex={-1} 
          className="scroll-mt-24 focus:outline-none" 
          aria-label="Services section"
        />
      </main>
    </div>
  )
}

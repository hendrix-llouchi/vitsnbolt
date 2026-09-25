import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Capabilities from './components/Capabilities'
import FAQ from './components/FAQ'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D3741] flex flex-col font-sans selection:bg-[#AE824B] selection:text-white">
      {/* 01 Navigation Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 02 Hero Section */}
        <Hero />

        {/* 03 Services */}
        <Services />

        {/* 04 How It Works (Discover -> Plan -> Build -> Document) */}
        <HowItWorks />

        {/* 05 Why Work With Us */}
        <WhyUs />

        {/* 06 Capabilities & Real Project Archetypes */}
        <Capabilities />

        {/* 07 FAQ Accordion */}
        <FAQ />

        {/* 08 Final Call to Action */}
        <FinalCta />
      </main>

      {/* 09 Footer */}
      <Footer />
    </div>
  )
}

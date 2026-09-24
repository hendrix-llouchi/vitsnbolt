import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UpcomingSections from './components/UpcomingSections'
import Footer from './components/Footer'
import GoogleFormModal from './components/GoogleFormModal'

export default function App() {
  const [formModalOpen, setFormModalOpen] = useState(false)

  const handleOpenForm = () => setFormModalOpen(true)
  const handleCloseForm = () => setFormModalOpen(false)

  return (
    <div className="min-h-screen bg-[#2D3741] text-[#FFFFFF] flex flex-col font-sans selection:bg-[#AE824B] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenForm={handleOpenForm} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1: Hero / Landing */}
        <Hero onOpenForm={handleOpenForm} />

        {/* Section 2 & 3: Upcoming Wireframe Previews */}
        <UpcomingSections onOpenForm={handleOpenForm} />
      </main>

      {/* Footer */}
      <Footer onOpenForm={handleOpenForm} />

      {/* Interactive Google Form Intake Modal */}
      <GoogleFormModal isOpen={formModalOpen} onClose={handleCloseForm} />
    </div>
  )
}

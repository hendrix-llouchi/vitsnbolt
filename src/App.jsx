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
    <div className="min-h-screen bg-white text-[#2D3741] flex flex-col font-sans selection:bg-[#AE824B] selection:text-white">
      <Navbar onOpenForm={handleOpenForm} />
      <main className="flex-1">
        <Hero onOpenForm={handleOpenForm} />
        <UpcomingSections onOpenForm={handleOpenForm} />
      </main>
      <Footer onOpenForm={handleOpenForm} />
      <GoogleFormModal isOpen={formModalOpen} onClose={handleCloseForm} />
    </div>
  )
}

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GoogleFormModal from './components/GoogleFormModal'

export default function App() {
  const [formModalOpen, setFormModalOpen] = useState(false)

  const handleOpenForm = () => setFormModalOpen(true)
  const handleCloseForm = () => setFormModalOpen(false)

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C232A] flex flex-col font-sans selection:bg-[#B88E56] selection:text-white">
      <Navbar onOpenForm={handleOpenForm} />
      <main className="flex-1 flex flex-col">
        <Hero onOpenForm={handleOpenForm} />
      </main>
      <GoogleFormModal isOpen={formModalOpen} onClose={handleCloseForm} />
    </div>
  )
}

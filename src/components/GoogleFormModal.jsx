import React, { useState } from 'react'
import { X, ExternalLink, CheckCircle2 } from 'lucide-react'

export default function GoogleFormModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    stage: 'rough_concept',
    description: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs font-sans">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-[#E8E4DA] shadow-2xl p-8 text-[#1C232A]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1 text-[#8C96A0] hover:text-[#1C232A] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <h3 className="font-serif text-2xl text-[#1C232A]">Inquiry Received</h3>
            <p className="text-sm text-[#5F6B78] max-w-xs mx-auto leading-relaxed">
              Thank you for sharing your project details. We will review your context and reach out via email.
            </p>
            <div className="pt-4">
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-2.5 bg-[#1C232A] text-white text-xs font-medium hover:bg-[#2D3741]"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#E8E4DA] pb-5 mb-6">
              <h2 className="font-serif text-3xl font-normal text-[#1C232A] tracking-tight">
                Tell Us About Your Project
              </h2>
              <p className="text-xs text-[#5F6B78] mt-1.5 leading-relaxed">
                Share a few details below, or jump directly to our official Google Form.
              </p>

              <div className="mt-4 p-3 bg-[#FAF8F5] border border-[#E8E4DA] flex items-center justify-between text-xs">
                <span className="text-[#5F6B78]">Official intake link:</span>
                <a
                  href="https://forms.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C232A] text-white text-xs font-medium hover:bg-[#2D3741]"
                >
                  <span>Open Google Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#1C232A] font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 border border-[#E8E4DA] bg-white text-[#1C232A] focus:outline-none focus:border-[#1C232A]"
                />
              </div>

              <div>
                <label className="block text-[#1C232A] font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@university.edu"
                  className="w-full px-3.5 py-2.5 border border-[#E8E4DA] bg-white text-[#1C232A] focus:outline-none focus:border-[#1C232A]"
                />
              </div>

              <div>
                <label className="block text-[#1C232A] font-medium mb-1">Institution & Course</label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({...formData, institution: e.target.value})}
                  placeholder="e.g. BEng Computer Engineering, Final Year"
                  className="w-full px-3.5 py-2.5 border border-[#E8E4DA] bg-white text-[#1C232A] focus:outline-none focus:border-[#1C232A]"
                />
              </div>

              <div>
                <label className="block text-[#1C232A] font-medium mb-1">Where are you currently stuck?</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Tell us about your project topic, tools, and biggest hurdle..."
                  className="w-full px-3.5 py-2.5 border border-[#E8E4DA] bg-white text-[#1C232A] focus:outline-none focus:border-[#1C232A]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-[#E8E4DA] text-[#5F6B78] hover:text-[#1C232A]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#1C232A] hover:bg-[#2D3741] text-white font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

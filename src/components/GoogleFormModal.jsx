import React, { useState } from 'react'
import { X, ExternalLink, Send, CheckCircle2, Sparkles, BookOpen, Layers } from 'lucide-react'

export default function GoogleFormModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    program: '',
    deadline: '',
    stage: 'rough_concept',
    description: '',
    supportTypes: [],
    currentTools: '',
    challenges: '',
    consent: false
  })

  if (!isOpen) return null

  const handleSupportToggle = (type) => {
    setFormData(prev => ({
      ...prev,
      supportTypes: prev.supportTypes.includes(type)
        ? prev.supportTypes.filter(t => t !== type)
        : [...prev.supportTypes, type]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission for the prototype
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1C232A] border border-[#AE824B]/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#FFFFFF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#D0CFC8] hover:text-white hover:bg-[#34404C] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#185B6C]/30 border border-[#39A5BE] flex items-center justify-center text-[#39A5BE]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">Project Inquiry Received</h3>
            <p className="text-[#D0CFC8] max-w-md mx-auto text-sm leading-relaxed">
              Thank you for sharing your project! Our mentorship team will review your requirements, technical stack, and timeline within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false)
                  onClose()
                }}
                className="px-6 py-2.5 bg-[#AE824B] hover:bg-[#C7985D] text-white font-semibold rounded-lg text-sm transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="border-b border-[#34404C] pb-5 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#AE824B] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Project Intake & Mentorship Inquiry</span>
              </div>
              <h2 className="text-2xl font-bold font-display text-white">
                Tell Us About Your Final-Year Project
              </h2>
              <p className="text-sm text-[#D0CFC8] mt-1.5 leading-relaxed">
                Whether you have an early concept or need urgent implementation support, fill in the details below or access our official Google Form directly.
              </p>

              {/* Direct Google Form Callout */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#2D3741]/80 border border-[#445363] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-[#D0CFC8]">
                  Prefer the official standalone form?
                </span>
                <a
                  href="https://forms.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#185B6C] hover:bg-[#24758A] text-white font-medium transition-colors"
                >
                  <span>Open Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              {/* Contact info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#D0CFC8] mb-1">
                    Full Name <span className="text-[#AE824B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#2D3741] border border-[#445363] text-white placeholder-gray-400 focus:outline-none focus:border-[#AE824B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#D0CFC8] mb-1">
                    Email Address <span className="text-[#AE824B]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="alex@university.edu"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#2D3741] border border-[#445363] text-white placeholder-gray-400 focus:outline-none focus:border-[#AE824B] transition-colors"
                  />
                </div>
              </div>

              {/* Institution and deadline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#D0CFC8] mb-1">
                    Institution & Course
                  </label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({...formData, institution: e.target.value})}
                    placeholder="BSc Computer Science / BEng Electrical"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#2D3741] border border-[#445363] text-white placeholder-gray-400 focus:outline-none focus:border-[#AE824B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#D0CFC8] mb-1">
                    Submission Deadline / Date
                  </label>
                  <input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#2D3741] border border-[#445363] text-white placeholder-gray-400 focus:outline-none focus:border-[#AE824B] transition-colors"
                  />
                </div>
              </div>

              {/* Current Project Stage */}
              <div>
                <label className="block text-xs font-semibold text-[#D0CFC8] mb-2">
                  Current Project Stage <span className="text-[#AE824B]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'rough_concept', label: 'Rough concept / Idea search' },
                    { id: 'defined_idea', label: 'Defined topic & objectives' },
                    { id: 'started_building', label: 'Already started building (Stuck)' },
                    { id: 'need_documentation', label: 'Finishing & documentation phase' },
                  ].map((stage) => (
                    <label
                      key={stage.id}
                      className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                        formData.stage === stage.id
                          ? 'border-[#AE824B] bg-[#AE824B]/15 text-white font-medium'
                          : 'border-[#445363] bg-[#2D3741] text-[#D0CFC8] hover:border-[#D0CFC8]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="stage"
                        checked={formData.stage === stage.id}
                        onChange={() => setFormData({ ...formData, stage: stage.id })}
                        className="text-[#AE824B] focus:ring-[#AE824B]"
                      />
                      <span>{stage.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Support Required Checkboxes */}
              <div>
                <label className="block text-xs font-semibold text-[#D0CFC8] mb-2">
                  Support Required (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Machine Learning & AI Integration',
                    'Software & IoT Hardware Prototyping',
                    'Research Gap Analysis & Literature Review',
                    'Full-Stack & API / Database Integration',
                    'Algorithm Planning & Scoping',
                    'Thesis Documentation & Defense Preparation'
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => handleSupportToggle(item)}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border text-left transition-all ${
                        formData.supportTypes.includes(item)
                          ? 'border-[#185B6C] bg-[#185B6C]/25 text-white font-medium'
                          : 'border-[#445363] bg-[#2D3741] text-[#D0CFC8] hover:border-gray-500'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                        formData.supportTypes.includes(item) ? 'bg-[#185B6C] border-[#39A5BE]' : 'border-gray-500'
                      }`}>
                        {formData.supportTypes.includes(item) && '✓'}
                      </div>
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-[#D0CFC8] mb-1">
                  Brief Project Overview & Biggest Blocker
                </label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Tell us what problem your project solves and where you need the most help..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#2D3741] border border-[#445363] text-white placeholder-gray-400 focus:outline-none focus:border-[#AE824B] transition-colors"
                ></textarea>
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-2 pt-1 text-xs text-[#D0CFC8]">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                  className="mt-0.5 rounded border-gray-600 text-[#AE824B] focus:ring-[#AE824B]"
                />
                <label htmlFor="consent" className="cursor-pointer leading-tight">
                  I agree to let the vitsnbolt mentorship team contact me regarding my final-year project inquiry.
                </label>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-[#445363] text-[#D0CFC8] hover:text-white hover:bg-[#34404C] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#AE824B] hover:bg-[#C7985D] text-white font-semibold shadow-lg shadow-[#AE824B]/20 transition-all hover:translate-y-[-1px]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

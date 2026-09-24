import React, { useState } from 'react'
import { X, ExternalLink, Send, CheckCircle2, Sparkles } from 'lucide-react'

export default function GoogleFormModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    deadline: '',
    stage: 'rough_concept',
    description: '',
    supportTypes: [],
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
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white border border-[#D0CFC8] rounded-xl shadow-2xl p-6 sm:p-8 text-[#2D3741]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#536474] hover:text-[#2D3741] hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display text-[#2D3741]">Project Inquiry Received</h3>
            <p className="text-sm text-[#536474] max-w-sm mx-auto">
              We received your project details! We will review your requirements and reach out via email.
            </p>
            <div className="pt-3">
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-5 py-2.5 bg-[#2D3741] text-white rounded-lg text-sm font-semibold hover:bg-[#AE824B] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#D0CFC8] pb-4 mb-5">
              <h2 className="text-xl font-bold font-display text-[#2D3741]">
                Tell Us About Your Final-Year Project
              </h2>
              <p className="text-xs text-[#536474] mt-1">
                Fill out the quick fields below or open our official Google Form directly.
              </p>

              <div className="mt-3 p-3 rounded-lg bg-[#F8F8F6] border border-[#D0CFC8] flex items-center justify-between text-xs">
                <span className="text-[#536474]">Official form:</span>
                <a
                  href="https://forms.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#2D3741] text-white font-medium hover:bg-[#AE824B] transition-colors"
                >
                  <span>Open Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#2D3741] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                    className="w-full px-3 py-2 rounded-lg border border-[#D0CFC8] bg-white text-[#2D3741] focus:outline-none focus:border-[#2D3741]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#2D3741] mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="student@university.edu"
                    className="w-full px-3 py-2 rounded-lg border border-[#D0CFC8] bg-white text-[#2D3741] focus:outline-none focus:border-[#2D3741]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#2D3741] mb-1">Institution & Degree</label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({...formData, institution: e.target.value})}
                  placeholder="e.g. BSc Computer Science, Year 4"
                  className="w-full px-3 py-2 rounded-lg border border-[#D0CFC8] bg-white text-[#2D3741] focus:outline-none focus:border-[#2D3741]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#2D3741] mb-1.5">Project Stage *</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'rough_concept', label: 'Rough concept / Idea search' },
                    { id: 'defined_idea', label: 'Defined topic & proposal' },
                    { id: 'started_building', label: 'Started building (Stuck)' },
                    { id: 'need_documentation', label: 'Documentation / Defense' },
                  ].map((stage) => (
                    <label
                      key={stage.id}
                      className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer ${
                        formData.stage === stage.id
                          ? 'border-[#2D3741] bg-[#F8F8F6] font-medium'
                          : 'border-[#D0CFC8] bg-white text-[#536474]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="stage"
                        checked={formData.stage === stage.id}
                        onChange={() => setFormData({ ...formData, stage: stage.id })}
                      />
                      <span>{stage.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#2D3741] mb-1">Brief Description / Challenges</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Tell us what problem your project solves and where you need the most help..."
                  className="w-full px-3 py-2 rounded-lg border border-[#D0CFC8] bg-white text-[#2D3741] focus:outline-none focus:border-[#2D3741]"
                ></textarea>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-[#D0CFC8] text-[#536474] hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#2D3741] hover:bg-[#AE824B] text-white font-semibold transition-colors"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

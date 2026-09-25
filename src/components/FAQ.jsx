import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_DATA, GOOGLE_FORM_URL } from '../config/constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0) // Default first FAQ open

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section 
      id="faq" 
      aria-label="Frequently Asked Questions" 
      className="py-20 md:py-28 bg-[#F3EFEA]/70 border-t border-b border-[#D0CFC8]/70"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#AE824B]/40 bg-white shadow-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AE824B]" aria-hidden="true" />
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#AE824B]">
              Common Inquiries
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3741] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D3741]/80 leading-relaxed font-normal">
            Clear answers about our mentorship model, academic integrity commitments, project eligibility, and scheduling.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="rounded-2xl bg-white border border-[#D0CFC8] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AE824B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#2D3741] tracking-tight">
                    {item.question}
                  </span>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#2D3741] text-[#AE824B]' : 'bg-[#FAF8F5] text-[#2D3741] border border-[#D0CFC8]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-sm sm:text-[15px] text-[#2D3741]/85 leading-relaxed border-t border-[#D0CFC8]/40 pt-4 bg-[#FAF8F5]/30">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#2D3741]/75">
          <span>Have a question specific to your university rubric? </span>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#AE824B] hover:text-[#2D3741] underline underline-offset-4 transition-colors"
          >
            Submit an inquiry through our project form
          </a>
        </div>

      </div>
    </section>
  )
}

import { useState } from 'react';
import { HelpCircle, ChevronRight, ChevronDown, Award } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative py-24 bg-brand-dark overflow-hidden border-t border-neutral-900"
    >
      <div className="absolute top-0 left-0 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-red-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ff1033]/10 text-[#ff1033] uppercase tracking-widest mb-4">
            ❓ SUPPORT CENTER
          </span>
          <h2 className="font-display text-3xl font-extrabold text-white tracking-tight uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-4 text-sm text-neutral-400">
            Got questions about compatibility, safety, setup and payment verification? Find quick answers below.
          </p>
        </div>

        {/* FAQ Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.question}
                className={`rounded-2xl border transition-all duration-305 overflow-hidden ${
                  isOpen 
                    ? 'bg-neutral-900/80 border-red-500/40' 
                    : 'bg-neutral-950/40 border-neutral-900 hover:border-neutral-800'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                      isOpen ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                    }`}>
                      <HelpCircle className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <span className={`transition-transform duration-200 text-neutral-500 ${isOpen ? 'rotate-90 text-red-500' : ''}`}>
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </button>

                {/* Animated Accordion body expanded */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'max-h-56 border-t border-neutral-900/80 p-5 opacity-100' 
                      : 'max-h-0 p-0 pointer-events-none opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Support Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-neutral-950 border border-neutral-900">
          <p className="text-xs text-neutral-400">
            Cannot find what you are looking for? Contact our 24/7 technical desk.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-3">
            <a 
              href="https://wa.me/8801763774782"
              target="_blank"
              rel="noopener"
              className="text-xs font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-wider"
            >
              Consult On WhatsApp →
            </a>
            <span className="text-neutral-700">•</span>
            <a 
              href="https://discord.com/invite/gHMNBqgTnu"
              target="_blank"
              rel="noopener"
              className="text-xs font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-wider"
            >
              Join Our Discord Server →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

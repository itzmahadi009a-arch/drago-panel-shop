import { Star, MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSection() {
  return (
    <section 
      id="testimonials" 
      className="relative py-24 bg-brand-dark overflow-hidden border-t border-neutral-900"
    >
      <div className="absolute top-0 right-0 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-20 w-80 h-80 bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ff1033]/10 text-[#ff1033] uppercase tracking-widest mb-4">
            ⭐️ CUSTOMER TRUST
          </span>
          <h2 className="font-display text-3xl font-extrabold text-white tracking-tight uppercase">
            FEEDBACK FROM THE GAMEPLAYERS
          </h2>
          <p className="mt-4 text-sm text-neutral-400">
            Read real client reactions. Hear from streamers, competitive gamers, and daily lobby players who trust our security systems.
          </p>
        </div>

        {/* Testimonials Matrix Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="glass-card text-left p-6 rounded-2xl relative border border-neutral-900 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top quotes decor */}
              <div className="absolute top-6 right-6 text-neutral-800 pointer-events-none group-hover:text-red-500/10 transition-colors duration-300">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-4 text-red-500">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current stroke-none" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-6 italic">
                  "{test.content}"
                </p>
              </div>

              {/* Profile Card metadata */}
              <div className="flex items-center space-x-3 pt-4 border-t border-neutral-900">
                <img 
                  src={test.avatar} 
                  alt={test.name} 
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 rounded-full border border-neutral-800 object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{test.name}</h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5">{test.role}</p>
                </div>
                <span className="ml-auto text-[10px] font-mono text-neutral-600 uppercase">
                  {test.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live counter trust banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 bg-neutral-950 p-4 sm:px-8 border border-neutral-900 rounded-2xl">
            <div className="text-center sm:text-left">
              <span className="font-mono text-lg font-bold text-white mr-2">99%</span>
              <span className="text-xs text-neutral-400">Excellent Customer Satisfaction Score</span>
            </div>
            <div className="hidden sm:block h-8 w-px bg-neutral-900" />
            <div className="text-center sm:text-left">
              <span className="font-mono text-lg font-bold text-red-500 mr-2">4,800+</span>
              <span className="text-xs text-neutral-400">Verified Reviews across communities</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

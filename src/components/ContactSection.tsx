import { MessageSquare, Headset, ShieldQuestion, Send, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="relative py-24 bg-brand-dark overflow-hidden border-t border-neutral-900"
    >
      {/* Decorative glows */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ff1033]/15 text-[#ff1033] uppercase tracking-widest mb-4">
            📞 LIVE CHAT
          </span>
          <h2 className="font-display text-3xl font-extrabold text-white tracking-tight uppercase">
            CONTACT DRAGO SERVICE
          </h2>
          <p className="mt-4 text-sm text-neutral-400">
            Have custom installation requests or custom deals? Click on either node below to interact directly with real checkout dispatchers.
          </p>
        </div>

        {/* Contact options with details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* WhatsApp element */}
          <a
            href="https://wa.me/8801763774782"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-neutral-900 bg-neutral-950/60 p-8 hover:border-[#25D366]/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background dynamic blur accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/0 via-transparent to-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="flex items-center justify-between mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:scale-105 transition-transform">
                <MessageSquare className="h-6 w-6 stroke-[2]" />
              </span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/20">
                ACTIVE 24/7
              </span>
            </div>

            <h3 className="font-display text-lg font-bold text-white tracking-wide uppercase">
              WHATSAPP MAIN CHAT
            </h3>
            <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
              Message us instantly. Best for Bangladesh domestic payments (bKash/Nagad), regional license delivery, and step-by-step key tutorials over mobile support.
            </p>

            <div className="mt-8 flex items-center text-xs font-bold text-[#25D366] uppercase tracking-widest">
              <span>Launch WhatsApp Chat</span>
              <span className="ml-2 group-hover:translate-x-1.5 transition-transform">→</span>
            </div>
          </a>

          {/* Discord element */}
          <a
            href="https://discord.com/invite/gHMNBqgTnu"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-neutral-900 bg-neutral-950/60 p-8 hover:border-[#5865F2]/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/0 via-transparent to-[#5865F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-center justify-between mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5865F2]/10 text-[#5865F2] group-hover:scale-105 transition-transform">
                <Send className="h-5 w-5" />
              </span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-[#5865F2]/10 text-[#5865F2] px-2.5 py-1 rounded border border-[#5865F2]/20">
                COMMUNITY CHANNELS
              </span>
            </div>

            <h3 className="font-display text-lg font-bold text-white tracking-wide uppercase">
              DISCORD FORUM SERVER
            </h3>
            <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
              Join 12,000+ active gaming members. Access secure announcement logs, public update changelogs, open tickets for automated credit transfers, and game reviews.
            </p>

            <div className="mt-8 flex items-center text-xs font-bold text-[#5865F2] uppercase tracking-widest">
              <span>Join Discord Guild</span>
              <span className="ml-2 group-hover:translate-x-1.5 transition-transform">→</span>
            </div>
          </a>

        </div>

        {/* Support hours guarantees */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center border-t border-neutral-900 pt-10">
          <div className="space-y-1.5">
            <Clock className="h-5 w-5 text-red-500 mx-auto" />
            <span className="block text-xs font-bold text-white uppercase tracking-wider">RESPONSE METRIC</span>
            <span className="block text-[10px] text-neutral-500">Average response is under 3 minutes</span>
          </div>

          <div className="space-y-1.5">
            <Headset className="h-5 w-5 text-red-500 mx-auto" />
            <span className="block text-xs font-bold text-white uppercase tracking-wider">GUIDED SETUP</span>
            <span className="block text-[10px] text-neutral-500">1-on-1 desktop setup assistance via TeamViewer</span>
          </div>

          <div className="space-y-1.5">
            <ShieldQuestion className="h-5 w-5 text-red-500 mx-auto" />
            <span className="block text-xs font-bold text-white uppercase tracking-wider">FREE HWID RESET</span>
            <span className="block text-[10px] text-neutral-500">Reset your license keys to play on new PCs</span>
          </div>
        </div>

      </div>
    </section>
  );
}

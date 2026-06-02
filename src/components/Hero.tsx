import { ArrowRight, MessageSquare, ShieldCheck, Flame, DownloadCloud, Radio } from 'lucide-react';

interface HeroProps {
  onBuyClick: () => void;
  onSupportClick: () => void;
}

export default function Hero({ onBuyClick, onSupportClick }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-dark"
    >
      {/* Background neon grid container */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      
      {/* Floating background glowing clouds */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-red-600/10 blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[150px] pointer-events-none animate-float-slow" style={{ animationDelay: '2s' }} />

      {/* Decorative vertical lines on side margins */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/10 to-transparent hidden xl:block" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/10 to-transparent hidden xl:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center z-10">
        
        {/* Anti-cheat safe badge indicator */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 mb-8 animate-neon-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
            KERNEL DRIVER INJECTION SYSTEM • STATUS: UNDETECTED
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase">
          PREMIUM GAMING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-600 animate-pulse">
            PANELS & SERVICES
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto font-sans font-normal tracking-wide">
          Fast <span className="mx-2 text-red-500">•</span> Secure <span className="mx-2 text-red-500">•</span> Professional Support
        </p>

        {/* Action Button Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onBuyClick}
            className="w-full sm:w-auto h-13 px-8 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl shadow-red-600/20 cursor-pointer"
          >
            <span>Buy Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button 
            onClick={onSupportClick}
            className="w-full sm:w-auto h-13 px-8 bg-neutral-950 hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 hover:border-red-500/40 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
          >
            <MessageSquare className="h-4 w-4 text-red-500 animate-pulse" />
            <span>Contact Support</span>
          </button>
        </div>

        {/* Direct WhatsApp and Discord shortcuts */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/8801763774782"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#25D366]/40 text-xs text-neutral-400 hover:text-[#25D366] transition-all"
          >
            <span className="h-2 w-2 rounded-full bg-[#25D366]" />
            <span className="font-mono">WhatsApp Support</span>
          </a>

          <a
            href="https://discord.com/invite/gHMNBqgTnu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#5865F2]/40 text-xs text-neutral-400 hover:text-[#5865F2] transition-all"
          >
            <span className="h-2 w-2 rounded-full bg-[#5865F2]" />
            <span className="font-mono">Discord Server</span>
          </a>
        </div>

        {/* Live gaming stats counters row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-neutral-900">
          <div className="p-4 rounded-xl glass-card text-center">
            <span className="block font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">50K+</span>
            <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-1">Active Users</span>
          </div>

          <div className="p-4 rounded-xl glass-card text-center">
            <span className="block font-display text-2xl lg:text-3xl font-bold text-red-500 tracking-tight">100%</span>
            <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-1">Safe Injection</span>
          </div>

          <div className="p-4 rounded-xl glass-card text-center">
            <span className="block font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">3 Sec</span>
            <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-1">Auto updates</span>
          </div>

          <div className="p-4 rounded-xl glass-card text-center">
            <span className="block font-display text-2xl lg:text-3xl font-bold text-red-500 tracking-tight">24/7</span>
            <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-1">Live Agents</span>
          </div>
        </div>

      </div>

      {/* Decorative slant wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
}

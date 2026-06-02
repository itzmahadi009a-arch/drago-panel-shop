import { Flame, ShieldAlert, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="app-footer" className="bg-[#050505] border-t border-neutral-900 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo element */}
          <div className="flex items-center space-x-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 p-0.5">
              <Flame className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="font-display text-md font-bold tracking-wider text-white">
              DRAGO<span className="text-red-500"> PANEL</span> SHOP
            </span>
          </div>

          {/* Copyright description */}
          <div className="text-center md:text-left">
            <p className="text-xs text-neutral-500">
              DRAGO PANEL SHOP © 2026 • All Rights Reserved.
            </p>
            <p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-widest font-mono">
              Designed for competitive system administration. Use with fair play and respect.
            </p>
          </div>

          {/* Scroll to Top control */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rounded-xl border border-neutral-800 bg-neutral-950 p-2 text-neutral-400 hover:text-white hover:border-red-500/40 transition-colors cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Disclaimer warning banner */}
        <div className="mt-8 pt-8 border-t border-neutral-950 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-red-500/10 text-red-500">
            <ShieldAlert className="h-3 w-3" />
          </span>
          <p className="text-[10px] text-neutral-600 leading-normal max-w-4xl font-sans uppercase tracking-tight">
            Compliance notice: Drago Panel Shop provides software tools configured to custom administrative specs. We hold zero liability for terms deviations with external third-party multiplayer platforms. Full responsibilities rest in administrative usages globally.
          </p>
        </div>

      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Check, ShieldCheck, EyeOff, Sparkles, Monitor, AppWindow, Cpu } from 'lucide-react';
import { Product, PricingPlan } from '../types';

interface StreamerSectionProps {
  product: Product;
  currency: 'BDT' | 'USD';
  onSelectPlan: (product: Product, plan: PricingPlan) => void;
}

export default function StreamerSection({ product, currency, onSelectPlan }: StreamerSectionProps) {
  // Simulator State variables for premium overlay interactive panel representation
  const [obsVisibleState, setObsVisibleState] = useState(false);
  const [streamerMode, setStreamerMode] = useState(true);
  const [privacyOverlay, setPrivacyOverlay] = useState(true);
  const [performanceBoost, setPerformanceBoost] = useState(true);

  return (
    <section 
      id="streamer-panel" 
      className="relative py-24 bg-brand-dark overflow-hidden border-t border-neutral-900"
    >
      <div className="absolute top-0 right-1/4 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/10 text-pink-500 uppercase tracking-widest mb-4 animate-pulse">
            🚨 CREATOR ARCHITECTURE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            🚨 STREAMER PANEL
          </h2>
          <p className="mt-4 text-sm text-neutral-400 font-sans">
            Render layouts invisibly. Bypasses OBS, Discord Screenshares, and video captures. Deliver raw entertainment to fans while custom indicators stay hidden on your desktop display.
          </p>
        </div>

        {/* Layout with Features + Interactive Panel Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Interactive Live Screen Capture Overlay Simulator */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-neutral-800 bg-neutral-950 p-6 overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-red-500" />
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#25D366]">
                    LIVE STREAM SAFE OVERLAY CONTROLLER
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 font-mono">
                  EXE V4.8
                </div>
              </div>

              {/* Toggles Container */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <div className="flex items-center space-x-3">
                    <EyeOff className="h-4.5 w-4.5 text-pink-500" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">OBS Screen-Share Hide</h4>
                      <p className="text-[10px] text-neutral-500">Injects custom driver layer to mask visuals.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setObsVisibleState(!obsVisibleState)}
                    className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 outline-none ${obsVisibleState ? 'bg-pink-600' : 'bg-neutral-800'}`}
                  >
                    <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ${obsVisibleState ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <div className="flex items-center space-x-3">
                    <Monitor className="h-4.5 w-4.5 text-pink-500" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Streamer Safe Mode</h4>
                      <p className="text-[10px] text-neutral-500">Filters keyboard inputs and coordinates.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setStreamerMode(!streamerMode)}
                    className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 outline-none ${streamerMode ? 'bg-pink-600' : 'bg-neutral-800'}`}
                  >
                    <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ${streamerMode ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <div className="flex items-center space-x-3">
                    <AppWindow className="h-4.5 w-4.5 text-pink-500" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Privacy Mode Active</h4>
                      <p className="text-[10px] text-neutral-500">Redacts premium accounts profiles dynamically.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setPrivacyOverlay(!privacyOverlay)}
                    className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 outline-none ${privacyOverlay ? 'bg-pink-600' : 'bg-neutral-800'}`}
                  >
                    <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ${privacyOverlay ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <div className="flex items-center space-x-3">
                    <Cpu className="h-4.5 w-4.5 text-pink-500" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Low CPU Resource Usage</h4>
                      <p className="text-[10px] text-neutral-500">Limits background cycles to maintain high FPS.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setPerformanceBoost(!performanceBoost)}
                    className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 outline-none ${performanceBoost ? 'bg-pink-600' : 'bg-neutral-800'}`}
                  >
                    <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ${performanceBoost ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>
              </div>

              {/* Status Simulation Bar */}
              <div className="mt-6 rounded-xl bg-neutral-900 p-3.5 border border-neutral-850 text-center">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Simulation View:</span>
                  <span className={`font-bold font-mono tracking-wide ${obsVisibleState ? 'text-red-500' : 'text-green-500'}`}>
                    {obsVisibleState ? '❌ OVERLAYS IMMINENT ON BROADCAST!' : '✅ 100% EXCLUSIVE VISIBILITY ACTIVE'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="font-display text-lg font-bold text-white tracking-widest uppercase mb-4">
                CORE FEATURES LIST:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((featureItem) => (
                  <div key={featureItem} className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-pink-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300">{featureItem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-white tracking-widest uppercase mb-4">
                INTERFACE & LAYOUT BENEFITS:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Modern UI Client', 'Customizable HUD Layout', 'Realtime Status Feedback', 'Full Privacy Sandbox Option', 'Extremely Low Memory footprint'].map((ben) => (
                  <div key={ben} className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300">{ben}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {product.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border border-pink-500/60 shadow-xl shadow-pink-600/10 hover:border-pink-500'
                  : 'bg-neutral-950/30 border border-neutral-900 hover:border-pink-500/20'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 text-[8px] font-mono font-bold uppercase tracking-widest text-white bg-pink-600 rounded-full shadow-md">
                  BEST SELLER
                </span>
              )}

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">
                  Validity Package
                </h4>
                <h3 className="font-display text-md font-bold text-white uppercase tracking-wide">
                  {plan.duration}
                </h3>
                <div className="h-px bg-neutral-900 my-3" />
              </div>

              <div>
                <div className="my-6">
                  <span className="block font-mono text-2xl font-black text-white">
                    {currency === 'BDT' ? `${plan.bdtPrice} BDT` : `${plan.usdPrice}`}
                  </span>
                  <span className="text-[9px] font-mono text-neutral-550 uppercase tracking-wide block mt-1">
                    Flexible Checkout Currency
                  </span>
                </div>

                <button
                  onClick={() => onSelectPlan(product, plan)}
                  className={`w-full py-2.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
                    plan.isPopular
                      ? 'bg-pink-600 hover:bg-pink-500 text-white shadow-lg'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-850'
                  }`}
                >
                  Confirm Plan
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

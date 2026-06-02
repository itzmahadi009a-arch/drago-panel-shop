import { useState } from 'react';
import { Check, Zap, Cpu, Award, RefreshCw, Layers } from 'lucide-react';
import { Product, PricingPlan } from '../types';

interface PremiumPanelProps {
  product: Product;
  currency: 'BDT' | 'USD';
  onSelectPlan: (product: Product, plan: PricingPlan) => void;
}

export default function PremiumPanel({ product, currency, onSelectPlan }: PremiumPanelProps) {
  const iconsMap: Record<string, any> = {
    'No Lag Performance': Cpu,
    'One Click Injection': Zap,
    'Custom Key Bind': Layers,
    'All Server Support': Award,
    'Auto Updates': RefreshCw
  };

  return (
    <section 
      id="premium-panel" 
      className="relative py-24 bg-brand-dark overflow-hidden border-t border-neutral-900"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/10 text-red-500 uppercase tracking-widest mb-4">
            🚀 PRO STREAM BUILD
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            🚀 PREMIUM PANEL
          </h2>
          <p className="mt-4 text-sm text-neutral-400">
            Our gold-standard injection client built for competitive precision. Enjoy ring-0 kernel virtualization, low CPU load, and real-time auto updates.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {product.features.map((feature) => {
            const IconComponent = iconsMap[feature] || Check;
            return (
              <div 
                key={feature} 
                className="glass-card p-5 rounded-2xl relative border border-neutral-800 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-8 h-px bg-red-500/30 group-hover:w-full transition-all duration-500" />
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/5 text-red-500 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="h-5 w-5" />
                </span>
                <h4 className="font-display text-sm font-bold text-white tracking-wide uppercase">
                  {feature}
                </h4>
                <p className="text-xs text-neutral-500 mt-1.5 font-sans">
                  Undetectable driver thread routing.
                </p>
              </div>
            );
          })}
        </div>

        {/* Pricing Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-neutral-900 border border-red-500/50 shadow-2xl shadow-red-600/5 hover:border-red-500'
                  : 'bg-neutral-950/40 border border-neutral-900 hover:border-red-500/20'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-white bg-red-600 rounded-full shadow-lg shadow-red-600/30 animate-pulse">
                  POPULAR SAVESHIP
                </span>
              )}

              <div>
                <span className="block text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-1">
                  License Validity
                </span>
                <h3 className="font-display text-lg font-extrabold text-white uppercase tracking-wide">
                  {plan.duration}
                </h3>
                
                <div className="h-px bg-neutral-900 my-4" />

                {/* Micro details list */}
                <div className="space-y-2 mb-8">
                  <div className="flex items-center text-xs text-neutral-400">
                    <Check className="h-3.5 w-3.5 text-red-500 mr-2 shrink-0" />
                    <span>Auto updater active</span>
                  </div>
                  <div className="flex items-center text-xs text-neutral-400">
                    <Check className="h-3.5 w-3.5 text-red-500 mr-2 shrink-0" />
                    <span>24/7 technical chat support</span>
                  </div>
                  <div className="flex items-center text-xs text-neutral-400">
                    <Check className="h-3.5 w-3.5 text-red-500 mr-2 shrink-0" />
                    <span>HWID reset protection</span>
                  </div>
                </div>
              </div>

              {/* Pricing & Checkout trigger button */}
              <div>
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-mono text-3xl font-black text-white tracking-tight">
                      {currency === 'BDT' ? `${plan.bdtPrice} BDT` : `$${plan.usdPrice}`}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mt-1">
                    Value parity {currency === 'BDT' ? `(~ $${plan.usdPrice} USD)` : `(~ ${plan.bdtPrice} BDT)`}
                  </span>
                </div>

                <button
                  onClick={() => onSelectPlan(product, plan)}
                  className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
                    plan.isPopular
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-850 hover:border-neutral-700'
                  }`}
                >
                  Buy {plan.duration} Plan
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

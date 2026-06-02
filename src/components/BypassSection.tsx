import { Check, Flame, ShieldAlert, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';
import { Product, PricingPlan } from '../types';

interface BypassSectionProps {
  product: Product;
  currency: 'BDT' | 'USD';
  onSelectPlan: (product: Product, plan: PricingPlan) => void;
}

export default function BypassSection({ product, currency, onSelectPlan }: BypassSectionProps) {
  const customIcons = [Flame, ShieldAlert, Sparkles, TrendingUp];

  return (
    <section 
      id="uid-bypass" 
      className="relative py-24 bg-brand-dark overflow-hidden border-t border-neutral-900"
    >
      {/* Decorative vertical grid line */}
      <div className="absolute top-0 bottom-0 left-[15%] w-px bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-10 left-12 w-80 h-80 rounded-full bg-red-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ff1033]/10 text-[#ff1033] uppercase tracking-widest">
              🔥 DATABASE SHIELD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              🔥 UID BYPASS
            </h2>
            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              Evade identification logs using instant custom routing protocols. Built to spoof device IDs, bypass dynamic telemetry reporting, and secure competitive ranking brackets effortlessly.
            </p>

            <div className="h-px bg-neutral-900 my-6" />

            {/* Micro checks */}
            <div className="space-y-3">
              {product.features.map((feat, index) => {
                const IconComponent = customIcons[index % customIcons.length] || Check;
                return (
                  <div key={feat} className="flex items-center space-x-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-red-500/10 text-red-500">
                      <IconComponent className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                      {feat}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pricing cards grid wrapper */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {product.plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border border-red-500/60 shadow-xl shadow-red-600/10 hover:border-red-500'
                    : 'bg-neutral-950/30 border border-neutral-900 hover:border-red-500/20'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 text-[8px] font-mono font-bold uppercase tracking-widest text-white bg-[#ff1033] rounded-full shadow-md">
                    POPULAR
                  </span>
                )}

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">
                    Validity Period
                  </h4>
                  <h3 className="font-display text-md font-bold text-white tracking-wide uppercase">
                    {plan.duration}
                  </h3>

                  <div className="h-px bg-neutral-900 my-4" />

                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-[10px] text-neutral-400">
                      <Check className="h-3 w-3 text-red-500 mr-2 shrink-0" />
                      <span>Instant injection</span>
                    </li>
                    <li className="flex items-center text-[10px] text-neutral-400">
                      <Check className="h-3 w-3 text-red-500 mr-2 shrink-0" />
                      <span>Bypass dynamic locks</span>
                    </li>
                    <li className="flex items-center text-[10px] text-neutral-400">
                      <Check className="h-3 w-3 text-red-500 mr-2 shrink-0" />
                      <span>Full key replacement</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-6">
                    <span className="block font-mono text-xl sm:text-2xl font-black text-white">
                      {currency === 'BDT' ? `${plan.bdtPrice} BDT` : `$${plan.usdPrice}`}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wide block mt-1">
                      Exchange rate match
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectPlan(product, plan)}
                    className={`w-full py-2.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
                      plan.isPopular
                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-850'
                    }`}
                  >
                    Buy Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

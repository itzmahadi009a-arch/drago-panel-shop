import { CreditCard, Wallet, Smartphone, ShieldCheck, Globe, HelpCircle } from 'lucide-react';
import { PAYMENT_METHODS } from '../data';

export default function PaymentSection() {
  const localGatewayMethods = PAYMENT_METHODS.filter((p) => p.type === 'local');
  const globalGatewayMethods = PAYMENT_METHODS.filter((p) => p.type === 'international');

  return (
    <section 
      id="payment" 
      className="relative py-24 bg-brand-dark overflow-hidden border-t border-neutral-900"
    >
      <div className="absolute top-0 bottom-0 right-[20%] w-px bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ff1033]/10 text-[#ff1033] uppercase tracking-widest mb-4">
            💳 DISPATCH SECURITY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            💳 PAYMENT METHODS
          </h2>
          <p className="mt-4 text-sm text-neutral-400">
            We provide local and international processing systems. All licenses are dispatched securely within minutes of verification.
          </p>
        </div>

        {/* Gateways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Bangladesh Region payments */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                <Smartphone className="h-4.5 w-4.5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white tracking-wide">BANGLADESH GATEWAYS</h3>
                <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono">Domestic Instant TFR</p>
              </div>
            </div>

            <div className="space-y-4">
              {localGatewayMethods.map((gw) => (
                <div 
                  key={gw.method}
                  className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-5 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 px-3 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800">
                        <img 
                          src={gw.logo} 
                          alt={gw.name} 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                          className="h-6 object-contain"
                        />
                        <span className="font-display text-sm font-bold text-white">{gw.name}</span>
                      </div>
                      <span className="text-[10px] bg-red-500/10 text-red-500 border border-red-500/20 px-2 py-0.5 rounded uppercase font-mono font-bold">
                        FAST CHECKOUT
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-neutral-500">
                      Currency support: BDT Only
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mb-2 leading-relaxed">{gw.details}</p>
                  <p className="text-[11px] text-neutral-500 font-sans italic">Instruction: {gw.instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* International Region payments */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                <Globe className="h-4.5 w-4.5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">INTERNATIONAL GATEWAYS</h3>
                <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono">Crypto & Direct Debit Card</p>
              </div>
            </div>

            <div className="space-y-4">
              {globalGatewayMethods.map((gw) => (
                <div 
                  key={gw.method}
                  className="rounded-2xl border border-neutral-900 bg-neutral-950/40 p-5 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 px-3 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800">
                        <img 
                          src={gw.logo} 
                          alt={gw.name} 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                          className="h-6 object-contain"
                        />
                        <span className="font-display text-sm font-bold text-white">{gw.name}</span>
                      </div>
                      <span className="text-[10px] bg-neutral-800 text-neutral-300 border border-neutral-700 px-2 py-0.5 rounded uppercase font-mono font-bold">
                        SECURE ROUTE
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-neutral-500">
                      Currency support: USD / USDT
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mb-2 leading-relaxed">{gw.details}</p>
                  <p className="text-[11px] text-neutral-500 font-sans italic">Instruction: {gw.instruction}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Security and Guarantee info card */}
        <div className="mt-16 rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-950/15 via-red-900/10 to-transparent p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-500">
            <ShieldCheck className="h-6 w-6 stroke-[2]" />
          </div>
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">INSTANT SECURE KEY INTAKE GUARANTEE</h4>
            <p className="text-xs text-neutral-300 font-sans">
              All transactions are encrypted securely at ring levels. License keys are provisioned and sent automatically via WhatsApp/Discord within 5 minutes of payment verification.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

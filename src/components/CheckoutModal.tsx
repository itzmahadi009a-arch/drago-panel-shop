import { useState, useMemo } from 'react';
import { X, Check, ArrowRight, MessageSquare, CreditCard, ShieldCheck } from 'lucide-react';
import { Product, PricingPlan, PaymentGateway } from '../types';
import { PAYMENT_METHODS } from '../data';

interface CheckoutModalProps {
  product: Product;
  plan: PricingPlan;
  onClose: () => void;
}

export default function CheckoutModal({ product, plan, onClose }: CheckoutModalProps) {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');
  const [selectedGateway, setSelectedGateway] = useState<PaymentGateway>(PAYMENT_METHODS[0]);
  const [username, setUsername] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<1 | 2>(1);

  // Auto-detect best pricing depending on selection / currency
  const finalPriceString = useMemo(() => {
    if (currency === 'BDT') {
      return `${plan.bdtPrice} BDT`;
    } else {
      if (typeof plan.usdPrice === 'number') {
        return `$${plan.usdPrice} USD`;
      }
      return `${plan.usdPrice}`; // For USDT format
    }
  }, [currency, plan]);

  // Handle WhatsApp API query parameters construction
  const handleSupportMessage = (type: 'whatsapp' | 'discord') => {
    const defaultText = `Hi Drago Panel, I would like to order:
- Product: ${product.title}
- Plan/Duration: ${plan.duration}
- Selected Price: ${finalPriceString}
- Paid via: ${selectedGateway.name}
- TxID (if applicable): ${transactionId || 'Not provided'}
- Client Username: ${username || 'Not provided'}

Please verify and send my license key!`;

    if (type === 'whatsapp') {
      const waLink = `https://wa.me/8801763774782?text=${encodeURIComponent(defaultText)}`;
      window.open(waLink, '_blank');
    } else {
      window.open('https://discord.com/invite/gHMNBqgTnu', '_blank');
    }
  };

  return (
    <div id="checkout-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div 
        id="checkout-modal-content"
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-red-500/30 bg-neutral-900 shadow-2xl transition-all duration-300"
      >
        {/* Glow Element */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-rose-600 to-red-500 animate-pulse" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 p-6">
          <div className="flex items-center space-x-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-white tracking-wide">SECURE CHECKOUT</h3>
              <p className="text-xs text-neutral-400">Step {checkoutStep} of 2 • Official License Key Issuance</p>
            </div>
          </div>
          <button 
            id="close-checkout"
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="p-6">
          {checkoutStep === 1 ? (
            <div className="space-y-6">
              {/* Info panel */}
              <div className="rounded-xl bg-neutral-950 p-4 border border-neutral-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">{product.badge}</span>
                  <h4 className="font-display font-semibold text-white mt-1">{product.title}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Duration: <span className="text-white font-medium">{plan.duration}</span></p>
                </div>
                <div className="text-right">
                  <div className="flex bg-neutral-900 rounded-lg p-1 border border-neutral-800 space-x-1 mb-2">
                    <button
                      onClick={() => setCurrency('BDT')}
                      className={`px-2 py-1 text-[10px] font-bold rounded transition-colors ${currency === 'BDT' ? 'bg-red-500 text-white' : 'text-neutral-400 hover:text-white'}`}
                    >
                      BDT
                    </button>
                    <button
                      onClick={() => setCurrency('USD')}
                      className={`px-2 py-1 text-[10px] font-bold rounded transition-colors ${currency === 'USD' ? 'bg-red-500 text-white' : 'text-neutral-400 hover:text-white'}`}
                    >
                      USD/USDT
                    </button>
                  </div>
                  <p className="font-mono text-xl font-bold text-red-500 glow-red">
                    {finalPriceString}
                  </p>
                </div>
              </div>

              {/* Choose Gateway */}
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">
                  Select Payment Gateway
                </label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {PAYMENT_METHODS.map((gw) => (
                    <button
                      key={gw.method}
                      onClick={() => setSelectedGateway(gw)}
                      className={`relative flex flex-col items-center justify-between p-3 rounded-xl border text-center transition-all duration-200 ${
                        selectedGateway.method === gw.method
                          ? 'bg-neutral-800 border-red-500 text-white shadow-lg shadow-red-500/10'
                          : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      {selectedGateway.method === gw.method && (
                        <span className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[8px] font-bold">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                      )}
                      
                      {/* Gateway Logo */}
                      <div className="h-10 w-full flex items-center justify-center mb-2 px-1">
                        <img 
                          src={gw.logo} 
                          alt={gw.name} 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            // Fallback if logo fails
                            e.currentTarget.style.display = 'none';
                          }}
                          className="max-h-7 object-contain"
                        />
                        <span className="block font-mono text-[11px] uppercase font-bold tracking-wider text-white">
                          {gw.name}
                        </span>
                      </div>
                      
                      <span className="text-[10px] font-bold tracking-tight text-neutral-300">
                        {gw.type === 'local' ? 'Local BDT' : 'Global Crypto'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Basic Instructions */}
              <div className="rounded-xl bg-red-500/5 border border-red-500/15 p-4 text-xs text-neutral-300 space-y-2">
                <div className="flex items-center space-x-2 text-red-500 font-bold mb-1">
                  <CreditCard className="h-4 w-4" />
                  <span className="uppercase tracking-wider">PAYMENT DETAILS FOR {selectedGateway.name}</span>
                </div>
                <p className="text-neutral-400">{selectedGateway.details}</p>
                <p className="text-red-400/90 font-medium">📜 {selectedGateway.instruction}</p>
              </div>

              {/* Action */}
              <button
                onClick={() => setCheckoutStep(2)}
                className="w-full h-11 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer shadow-lg shadow-red-600/20 hover:scale-[1.01]"
              >
                <span>Proceed to Verification Step</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Back to gateway button */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCheckoutStep(1)}
                  className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>← Select different method</span>
                </button>
                <div className="text-xs font-mono bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/20">
                  Method: {selectedGateway.name}
                </div>
              </div>

              {/* Form Validation Controls */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1.5">
                    Your Username (Discord or WhatsApp)
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. Gamer#1234 or Sagor"
                    className="w-full h-10 px-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  <p className="text-[10px] text-neutral-500 mt-1">So we can contact you instantly to send instructions.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1.5">
                    Transaction ID / Reference Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="e.g. BIKASH-TRX99203 or Binance Hash"
                    className="w-full h-10 px-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  <p className="text-[10px] text-neutral-500 mt-1">Proof of send-money allows us to instantly verify your key.</p>
                </div>
              </div>

              {/* Dynamic instruction detail card */}
              <div className="bg-neutral-950 rounded-xl p-5 border border-neutral-800 space-y-4">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase">HOW TO GET LICENSE KEY INSTANTLY:</h4>
                <ol className="list-decimal list-inside space-y-2 text-xs text-neutral-400">
                  <li>Send <span className="text-white font-mono font-bold text-red-400">{finalPriceString}</span> via <strong className="text-white">{selectedGateway.name}</strong> as instructed in step 1.</li>
                  <li>Click either WhatsApp or Discord verified link below.</li>
                  <li>The support chat will open automatically with pre-filled billing information.</li>
                  <li>Our support technician will instantly unlock your security access hash key!</li>
                </ol>
              </div>

              {/* Support confirmation buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleSupportMessage('whatsapp')}
                  className="flex h-11 items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-black text-sm font-bold rounded-xl transition-transform hover:scale-[1.01] cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Verify via WhatsApp Chat</span>
                </button>

                <button
                  onClick={() => handleSupportMessage('discord')}
                  className="flex h-11 items-center justify-center space-x-2 bg-[#5865F2] hover:bg-[#4752c4] text-white text-sm font-bold rounded-xl transition-transform hover:scale-[1.01] cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Verify via Discord Server</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

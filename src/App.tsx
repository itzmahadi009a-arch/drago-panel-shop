import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PremiumPanel from './components/PremiumPanel';
import BypassSection from './components/BypassSection';
import StreamerSection from './components/StreamerSection';
import PaymentSection from './components/PaymentSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';

import { PRODUCTS } from './data';
import { Product, PricingPlan } from './types';
import { Coins, CircleDollarSign, Shield, VolumeX, Volume2 } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');
  const [checkoutData, setCheckoutData] = useState<{ product: Product; plan: PricingPlan } | null>(null);

  // Quick select dynamic checkout functions
  const openCheckout = (currProduct: Product, currPlan: PricingPlan) => {
    setCheckoutData({
      product: currProduct,
      plan: currPlan
    });
  };

  const handleSupportInstantLink = () => {
    window.open('https://wa.me/8801763774782', '_blank');
  };

  const handleBuyNowScroller = () => {
    const el = document.getElementById('premium-panel');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="drago-root" className="min-h-screen bg-brand-dark text-white font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">
      
      {/* Dynamic Background Particle Aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle red stars/particles floating using CSS animation coordinates */}
        <div className="absolute top-1/5 left-[15%] w-1 h-30 bg-gradient-to-b from-red-600 to-transparent opacity-30 h-10 animate-pulse" />
        <div className="absolute top-1/2 right-[25%] w-1.5 h-1.5 rounded-full bg-red-500 opacity-20" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-rose-500 opacity-40 animate-ping duration-1000" />
        <div className="absolute top-2/3 right-1/12 w-1.5 h-1.5 rounded-full bg-red-400 opacity-30" />
      </div>

      {/* Primary Navigation Header */}
      <Header onOpenSupport={handleSupportInstantLink} />

      {/* Main Container */}
      <main className="flex-grow">
        
        {/* Hero Banner Section */}
        <Hero 
          onBuyClick={handleBuyNowScroller}
          onSupportClick={handleSupportInstantLink}
        />

        {/* Global Premium Currency Selector Widget */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-32px] mb-8 z-25 text-center">
          <div className="inline-flex items-center space-x-3 p-2.5 rounded-2xl bg-neutral-900 border border-neutral-850 shadow-xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 px-2">
              Viewing Currency:
            </span>
            <button
              onClick={() => setCurrency('BDT')}
              className={`flex items-center space-x-1.5 px-4 h-9 rounded-xl text-xs font-bold transition-all ${
                currency === 'BDT'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <Coins className="h-3.5 w-3.5" />
              <span>BDT (৳)</span>
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`flex items-center space-x-1.5 px-4 h-9 rounded-xl text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <CircleDollarSign className="h-3.5 w-3.5" />
              <span>USD/USDT ($)</span>
            </button>
          </div>
        </div>

        {/* PREMIUM PANEL SECTION */}
        <PremiumPanel 
          product={PRODUCTS[0]}
          currency={currency}
          onSelectPlan={openCheckout}
        />

        {/* UID BYPASS SECTION */}
        <BypassSection 
          product={PRODUCTS[1]}
          currency={currency}
          onSelectPlan={openCheckout}
        />

        {/* STREAMER PANEL SECTION */}
        <StreamerSection 
          product={PRODUCTS[2]}
          currency={currency}
          onSelectPlan={openCheckout}
        />

        {/* PAYMENT METHODS SECTION */}
        <PaymentSection />

        {/* ACCORDION FAQS SECTION */}
        <FAQSection />

        {/* CUSTOMER REVIEWS TESTIMONIALS SECTION */}
        <TestimonialsSection />

        {/* LIVE CONTACT ACTIONS SECTION */}
        <ContactSection />
        
      </main>

      {/* FOOTER SECTION */}
      <Footer />

      {/* Interactive Modal Portal popup when selecting packages */}
      {checkoutData && (
        <CheckoutModal 
          product={checkoutData.product}
          plan={checkoutData.plan}
          onClose={() => setCheckoutData(null)}
        />
      )}

    </div>
  );
}

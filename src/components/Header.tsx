import { useState, useEffect } from 'react';
import { Menu, X, Shield, MessageSquare, Flame } from 'lucide-react';

interface HeaderProps {
  onOpenSupport: () => void;
}

export default function Header({ onOpenSupport }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Premium Panel', id: 'premium-panel' },
    { label: 'UID Bypass', id: 'uid-bypass' },
    { label: 'Streamer Panel', id: 'streamer-panel' },
    { label: 'Payment', id: 'payment' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracking on scroll
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header 
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-red-500/10 py-3 shadow-lg shadow-neutral-950/50' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo element */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 p-0.5 shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform duration-300">
              <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-neutral-950">
                <Flame className="h-5 w-5 text-red-500 animate-pulse" />
              </span>
              <div className="absolute inset-0 -z-10 rounded-xl bg-red-500/40 blur-sm group-hover:blur-md transition-all duration-300" />
            </div>
            
            <div className="text-left">
              <span className="font-display text-xl font-black tracking-wider text-white">
                DRAGO<span className="text-red-500"> PANEL</span>
              </span>
              <span className="block text-[9px] font-mono font-bold tracking-[0.25em] text-red-400 mt-[-2px]">
                SHOP SERVICE
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-red-500 bg-red-500/5 border-b border-red-500' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onOpenSupport}
              className="relative px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 hover:border-red-500/40 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-red-500/5 group"
            >
              <MessageSquare className="h-3.5 w-3.5 text-red-500 group-hover:scale-110 transition-transform" />
              <span>Get Support</span>
            </button>

            <button 
              onClick={() => scrollToSection('premium-panel')}
              className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-red-600/10 hover:shadow-red-600/30 transition-all duration-200 hover:scale-[1.02]"
            >
              Buy Panel
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden absolute top-full left-0 right-0 border-b border-red-500/20 bg-neutral-950/95 backdrop-blur-lg px-4 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`py-3 px-4 rounded-xl text-left text-sm font-semibold uppercase tracking-wider transition-colors ${
                  activeSection === item.id 
                    ? 'text-red-500 bg-red-500/5' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="h-px bg-neutral-900 my-4" />

          {/* Mobile actions */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSupport();
              }}
              className="flex h-11 items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              <MessageSquare className="h-4 w-4 text-red-500" />
              <span>Support</span>
            </button>
            <button 
              onClick={() => scrollToSection('premium-panel')}
              className="flex h-11 items-center justify-center bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/20 transition-all"
            >
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

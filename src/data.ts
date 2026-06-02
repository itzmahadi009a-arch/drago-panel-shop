import { Product, FAQItem, Testimonial, PaymentGateway } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'premium-panel',
    title: 'PREMIUM PANEL',
    badge: '🚀 BEST SELLER',
    description: 'Elevate your competitive edge with our advanced driver-level kernel bypass injection system. Designed for undetectable execution, low-latency rendering, and flawless auto-tuning.',
    features: [
      'No Lag Performance',
      'One Click Injection',
      'Custom Key Bind',
      'All Server Support',
      'Auto Updates'
    ],
    color: 'red',
    iconName: 'Zap',
    plans: [
      { id: 'pp-1m', duration: '1 Month', usdPrice: 9, bdtPrice: 800 },
      { id: 'pp-2m', duration: '2 Month', usdPrice: 16, bdtPrice: 1200 },
      { id: 'pp-3m', duration: '3 Month', usdPrice: 24, bdtPrice: 1600 },
      { id: 'pp-perm', duration: 'Permanent', usdPrice: '35', bdtPrice: 2600, isPopular: true }
    ]
  },
  {
    id: 'uid-bypass',
    title: 'UID BYPASS',
    badge: '🔥 HOT SELL',
    description: 'Safeguard your accounts with direct database routing bypass mechanisms. Prevent identity detection, protect hardware IDs (HWID), and secure premium matchmaking lobbies.',
    features: [
      'Fast Connection',
      'Anti-Detect Safe',
      'Trusted HWID Spoof',
      'Instant 24/7 Support'
    ],
    color: 'amber',
    iconName: 'ShieldAlert',
    plans: [
      { id: 'ub-1m', duration: '1 Month', usdPrice: 10, bdtPrice: 1000 },
      { id: 'ub-2m', duration: '2 Month', usdPrice: 19, bdtPrice: 1900, isPopular: true },
      { id: 'ub-perm', duration: 'Permanent', usdPrice: 25, bdtPrice: 2500 }
    ]
  },
  {
    id: 'streamer-panel',
    title: 'STREAMER PANEL',
    badge: '🚨 STREAMER SPECIAL',
    description: 'Perfect for content creators, entertainers and casual streamers. Our panel bypasses screen recording software (OBS, Discord, XSplit) to render visuals exclusively for your eyes.',
    features: [
      'Full Overlay Hide (OBS Screen Capture Invisible)',
      'Streamer Safe Mode',
      'Polished Full Hide EXE Loader',
      'No Glitch or Rendering Artifacts',
      'Highly Optimized Low Resource Usage',
      'Regular Anti-Cheat Updates'
    ],
    color: 'rose',
    iconName: 'Tv',
    plans: [
      { id: 'sp-1m', duration: '1 Month', usdPrice: '5 USDT', bdtPrice: 500 },
      { id: 'sp-2m', duration: '2 Month', usdPrice: '8 USDT', bdtPrice: 800, isPopular: true },
      { id: 'sp-lifetime', duration: 'Lifetime', usdPrice: '12 USDT', bdtPrice: 1200 }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'general',
    question: 'How do I download and activate my panel after payment?',
    answer: 'Once your payment is approved, our automated checkout modal will generate a support redirect link to WhatsApp or Discord. After confirmation, you will receive a secure license key and a download link with installation instructions immediately!'
  },
  {
    category: 'safety',
    question: 'Is the panel safe to use on main accounts?',
    answer: 'Yes, our premium panels utilize unique virtualization and ring-0 driver loaders that run undetected. For maximum security, we recommend using recommended configurations and keeping auto-updates enabled.'
  },
  {
    category: 'compatibility',
    question: 'Which server zones and operating systems are supported?',
    answer: 'All versions of Windows 10 and Windows 11 (including standard 21H1 through latest 23H2 builds) are supported. Our panels support all global gaming server regions and clients seamlessly.'
  },
  {
    category: 'payments',
    question: 'What happens if a panel gets patched?',
    answer: 'Thanks to our Auto Update feature, our developer network updates our files in real-time. If a major update is deployed, our panel is automatically paused and secure safe builds are re-issued to extend user times fairly.'
  },
  {
    category: 'general',
    question: 'Can I change my key binds later?',
    answer: 'Absolutely! Our internal panel configuration interface allows you to define custom hotkeys, save toggle bindings, and set layout coordinates easily.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sagor Ahmed',
    role: 'Competitive esports player',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    content: 'Best service in Bangladesh! No lag at all, bKash payments make purchasing incredibly fast. Auto injection is flawless.',
    date: '3 days ago'
  },
  {
    id: 't2',
    name: 'Xavier Gaming',
    role: 'YouTube Content Creator',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    content: 'The Streamer Panel OBS hide feature works exactly like magic. Safe, completely invisible on screen-share, and my stream quality is super smooth!',
    date: '1 week ago'
  },
  {
    id: 't3',
    name: 'Mahim Hasan',
    role: 'Apex Master Competitor',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=120',
    rating: 5,
    content: 'The UID bypass bypasses modern anti-cheat easily. I have been using the Permanent plan for over a month now without any ban issues. Highly recommended.',
    date: '2 weeks ago'
  }
];

export const PAYMENT_METHODS: PaymentGateway[] = [
  {
    name: 'bKash',
    method: 'BIKASH',
    type: 'local',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A6R9Xp_N5X97B3U9C9c8F1w9p1BfN2_Nng&s', // Compact fallback logic will render beautiful placeholder if image fails, but this is bkash logo URL
    details: 'Send Money to Personal Number (Check WhatsApp/Discord for active merchant numbers).',
    instruction: 'Complete the send money transfer, copy the Transaction ID (TrxID) and payment screenshot, then click verify below to activate.'
  },
  {
    name: 'Nagad',
    method: 'NAGAD',
    type: 'local',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwV5Zid3Iq0WwJIdY6-vV5JEq22mG08tAIA&s',
    details: 'Send Money directly to Nagad Personal. Fastest domestic confirmation.',
    instruction: 'Transfer the amount to the current premium number. Save the transfer slip and forward details to live support agents for instant key generation.'
  },
  {
    name: 'Binance Pay / USDT',
    method: 'BINANCE',
    type: 'international',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXW_T_m2gG97eW1HTo9IayVqfeqRzDPhxHA&s',
    details: 'Pay via Binance Pay QR, Binance Merchant, or direct USDT TRC20 Wallet Address.',
    instruction: 'Scan the Binance QR or send exact funds. Verification takes less than 3 minutes once confirmed on the blockchain.'
  },
  {
    name: 'Credit / Debit Card',
    method: 'CARD',
    type: 'international',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYN-tT6Nisg557bAnE4SSTTylN4L5QhOmsbQ&s',
    details: 'Secure payment gateway checkout for Visa, MasterCard, and American Express.',
    instruction: 'Checkout using international gateway secure payment forms. Auto receipt generates the license credentials to your registered email.'
  }
];

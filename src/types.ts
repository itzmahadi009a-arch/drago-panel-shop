export interface Feature {
  text: string;
  highlighted?: boolean;
}

export interface PricingPlan {
  id: string;
  duration: string;
  usdPrice: number | string;
  bdtPrice: number | string;
  usdtPrice?: number | string; // Custom for streamer panel if specified
  isPopular?: boolean;
}

export interface Product {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  plans: PricingPlan[];
  color: string; // 'red', 'rose', 'cyan' etc.
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

export interface PaymentGateway {
  name: string;
  method: string;
  type: 'local' | 'international';
  logo: string;
  details: string;
  instruction: string;
}

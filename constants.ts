
import { Testimonial, FAQItem, ComparisonRow } from './types';

export const COLORS = {
  primary: '#1a365d', // Navy
  secondary: '#fdfbf7', // Cream
  accent: '#2f855a', // Nature Green
  gold: '#d4af37'
};

export const EXTERNAL_URL = "https://thekerabiotics.com/video.php?aff_id=11611";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Robert M.",
    location: "Chicago, IL",
    text: "I was skeptical at first, but after 12 years of hiding my feet at the gym, I finally feel confident again. The results were visible in just weeks.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Sarah L.",
    location: "Austin, TX",
    text: "My doctor couldn't believe the difference. This ritual is so simple I actually stick to it every single morning.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "David K.",
    location: "Miami, FL",
    text: "I've tried every cream and pill on the market. Nothing worked like this Amazonian secret. My nails look healthy for the first time in a decade.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does it take to see results?",
    answer: "While everyone is different, most users report a noticeable difference in texture and color within the first 14 to 21 days of consistent use."
  },
  {
    question: "Is this safe for sensitive skin?",
    answer: "Yes. Our protocol uses 100% natural ingredients sourced from sustainable environments. We recommend a patch test, but irritation is extremely rare."
  },
  {
    question: "Can I use this alongside other treatments?",
    answer: "Our protocol is designed to address the root cause from the inside out. We suggest consulting with your healthcare provider if you are currently on prescription medication."
  },
  {
    question: "What is the 60-day guarantee?",
    answer: "If you don't see the results you desire within 60 days, simply contact our support team for a full, no-questions-asked refund."
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: "Active Ingredients", traditional: "Harsh Chemicals & Toxins", protocol: "Pure Amazonian Botanicals", isPositive: true },
  { feature: "Target Area", traditional: "Surface Level Only", protocol: "Deep Internal Microbiome", isPositive: true },
  { feature: "Long Term Results", traditional: "Temporary Relief", protocol: "Lasting Protection", isPositive: true },
  { feature: "Ease of Use", traditional: "Messy Creams & Bandages", protocol: "3-Second Daily Ritual", isPositive: true }
];

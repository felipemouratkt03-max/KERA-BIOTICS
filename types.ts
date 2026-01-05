
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  traditional: string;
  protocol: string;
  isPositive: boolean;
}

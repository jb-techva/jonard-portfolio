export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  type: string;
  clientContext?: string;
  responsibilities: string[];
  tools: string[];
  highlightMetric: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'ecommerce' | 'shopify' | 'marketing' | 'inventory';
  categoryLabel: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  toolsUsed: string[];
  image: string;
  galleryCaptions?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

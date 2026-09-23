import projectEcommerceImg from '../assets/images/project_ecommerce_ops_1790105629711.jpg';
import projectRealEstateImg from '../assets/images/project_realestate_web_1790105644058.jpg';
import projectShopifyImg from '../assets/images/project_shopify_store_1790105654581.jpg';
import projectInventoryImg from '../assets/images/project_inventory_system_1790105666606.jpg';
import type {
  ServiceItem,
  ExperienceItem,
  PortfolioProject,
  TestimonialItem,
  EducationItem,
} from '../types/portfolio';

export const personalInfo = {
  name: 'Jonard Castro',
  initials: 'JC',
  title: 'E-commerce & Marketing Operations VA',
  headline: 'Streamlining multi-channel retail logistics, inventory accuracy, and digital workflows.',
  bio: 'E-Commerce and Digital Marketing Virtual Assistant with 7+ years of experience supporting online retail operations, inventory coordination, and backend logistics for multiple remote clients. Skilled in managing product listings, streamlining order fulfillment, and coordinating with suppliers and vendors to maintain stock accuracy and optimize order flow. Experienced across major e-commerce and CRM platforms, with additional background in AI-assisted content generation and WordPress content management.',
  location: 'Metro Manila, Philippines',
  timezone: 'GMT+8 (Philippine Standard Time)',
  whatsappNumber: '+639617180380',
  whatsappDisplay: '+63 961 718 0380',
  email: 'castro.jonard14@gmail.com',
  linkedInUrl: 'https://linkedin.com/in/castrojonard14',
  portraitImage: '/Castro.jpg',
  status: 'Available for freelance & full-time remote roles',
  stats: [
    { label: 'Years of Experience', value: '7+' },
    { label: 'Fulfillment Accuracy', value: '99.8%' },
    { label: 'Storefront Channels', value: 'Shopify, Amazon, eBay' },
    { label: 'Client Retention Rate', value: '95%' },
  ],
};

export const skillsWithProficiency = [
  { name: 'Shopify & Storefront Administration', level: 96, category: 'E-Commerce' },
  { name: 'ShipStation & Order Fulfillment', level: 98, category: 'Logistics' },
  { name: 'Amazon SellerCentral & eBay', level: 92, category: 'Marketplaces' },
  { name: 'Finale Inventory & Stock Control', level: 94, category: 'Inventory' },
  { name: 'StreetPricer Dynamic Repricing', level: 90, category: 'Pricing' },
  { name: 'Zendesk & Gorgias Support', level: 95, category: 'Customer Experience' },
  { name: 'WordPress & BeaverBuilder CMS', level: 91, category: 'Web & CMS' },
  { name: 'AI Workflows (ChatGPT, Claude)', level: 93, category: 'AI Automation' },
  { name: 'HubSpot & GetResponse CRM', level: 88, category: 'CRM & Email' },
];

export const skillsAndTools = [
  {
    category: 'Store & Platform Management',
    skills: ['Shopify Storefronts', 'Amazon SellerCentral', 'eBay Management', 'Dropshipping Workflows'],
  },
  {
    category: 'Logistics & Inventory',
    skills: ['ShipStation', 'Finale Inventory', 'StreetPricer', 'Purchase Orders & Shipping Labels', 'Vendor Coordination'],
  },
  {
    category: 'Customer Experience & CRM',
    skills: ['Zendesk Support', 'Gorgias Helpdesk', 'HubSpot CRM', 'GetResponse Email Workflows'],
  },
  {
    category: 'AI & Content Creation',
    skills: ['ChatGPT Prompt Engineering', 'Claude AI Copywriting', 'GitHub Copilot', 'BeaverBuilder WordPress'],
  },
  {
    category: 'Project & Task Operations',
    skills: ['ClickUp Management', 'A/B Campaign Testing', 'Catalog Optimization', 'Supplier Relationship Management'],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'store-ops',
    title: 'Multi-Channel E-Commerce Operations',
    category: 'Operations',
    shortDesc: 'End-to-end administration of storefronts on Shopify, Amazon SellerCentral, and eBay with zero downtime.',
    fullDesc: 'Holistic daily store management covering listing optimization, keyword research, pricing parity, backorder management, and catalog health. Designed to prevent stockouts and maximize buyer conversion.',
    deliverables: [
      'Daily storefront audit and product catalog upkeep',
      'Optimized titles, bullet points, tags, and rich descriptions',
      'Dropshipping ordering flow execution via website and email portals',
      'Multi-channel synchronization across Amazon, eBay, and Shopify',
    ],
    tools: ['Shopify', 'Amazon SellerCentral', 'eBay', 'ClickUp'],
  },
  {
    id: 'inventory-logistics',
    title: 'Inventory & Order Fulfillment Flow',
    category: 'Logistics',
    shortDesc: 'Automating high-volume dispatch workflows, purchase orders, and multi-warehouse sync using ShipStation and Finale.',
    fullDesc: 'Seamless fulfillment orchestration that minimizes delays, ensures pinpoint tracking for buyers, and maintains accurate inventory levels across all warehousing and 3PL partners.',
    deliverables: [
      'Batch order processing and label creation via ShipStation',
      'Stock sync and automated reorder alerts with Finale Inventory',
      'Vendor purchase order issuance and tracking follow-up',
      'Carrier tracking number reconciliation and delivery verification',
    ],
    tools: ['ShipStation', 'Finale Inventory', 'StreetPricer', 'USPS / UPS / FedEx'],
  },
  {
    id: 'pricing-supplychain',
    title: 'Dynamic Pricing & Supply Chain Coordination',
    category: 'Supply Chain',
    shortDesc: 'Market-aware repricing through StreetPricer, backorder mitigation, and supplier liaison for steady supply continuity.',
    fullDesc: 'Continuous price monitoring against competitors combined with close supplier relationship management to secure favorable restock timelines, negotiate stock allotments, and eliminate stockouts.',
    deliverables: [
      'StreetPricer rule setup and automated margin-safe repricing',
      'Backorder triage and customer communication protocols',
      'Direct supplier liaising via email, Skype, and WhatsApp',
      'Inventory forecasting based on historical sales velocity',
    ],
    tools: ['StreetPricer', 'Finale Inventory', 'Google Sheets', 'Excel'],
  },
  {
    id: 'ai-content-wp',
    title: 'AI Content Generation & WordPress Management',
    category: 'Digital Marketing',
    shortDesc: 'High-converting SEO blog posts, client landing pages, and CMS management using modern AI tools and BeaverBuilder.',
    fullDesc: 'Leveraging Claude AI, ChatGPT, and Copilot to generate relevant, domain-specific articles, real estate landing pages, and promotional newsletters that drive organic inbound engagement.',
    deliverables: [
      'Custom page creation and responsive styling with BeaverBuilder',
      'Topic ideation and SEO article generation with Claude AI and ChatGPT',
      'HubSpot blog scheduling, metadata optimization, and internal linking',
      'Lead capture forms and CMS profile organization for client onboarding',
    ],
    tools: ['WordPress', 'BeaverBuilder', 'HubSpot', 'ChatGPT', 'Claude AI'],
  },
  {
    id: 'customer-support',
    title: 'Customer Experience & Helpdesk Management',
    category: 'Customer Support',
    shortDesc: 'Rapid ticket resolution, return handling, and empathetic buyer communication via Zendesk and Gorgias.',
    fullDesc: 'Dedicated Tier-1 & Tier-2 customer inquiry resolution for tracking updates, order modifications, exchanges, and product questions that safeguard seller ratings and feedback scores.',
    deliverables: [
      'Sub-hour first response times during business shifts',
      'Zendesk macro creation and automated notification rules',
      'Lost shipment investigations and claims filing',
      'Pre-purchase inquiry conversion via live chat',
    ],
    tools: ['Zendesk', 'Gorgias', 'Shopify Inbox', 'Gmail'],
  },
  {
    id: 'crm-email',
    title: 'CRM Workflows & Email Marketing',
    category: 'Marketing Automation',
    shortDesc: 'Audience segmentation, drip nurture flows, and A/B campaign testing through HubSpot and GetResponse.',
    fullDesc: 'Managing client databases, cleaning lead lists, building automated email sequences, and testing subject lines and call-to-actions to nurture prospects into repeat customers.',
    deliverables: [
      'CRM data cleansing and contact pipeline structuring',
      'Automated welcome and post-purchase follow-up sequences',
      'A/B split testing of email subject lines and layout variations',
      'Performance reporting on open rates, CTR, and revenue attribution',
    ],
    tools: ['HubSpot CRM', 'GetResponse', 'Klaviyo', 'Google Sheets'],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'E-Commerce Operations Assistant',
    period: 'May 2022 – Sep 2026',
    type: 'Remote / Freelance',
    responsibilities: [
      'Managed dropshipping workflows through website and email-based ordering systems with rapid turnaround.',
      'Processed in-stock orders using ShipStation and Finale Inventory with 99.8% shipping accuracy.',
      'Managed real-time inventory updates, backorders, and automated repricing through StreetPricer.',
      'Created purchase orders and shipping labels, and coordinated directly with multiple vendors for timely fulfillment.',
      'Supported day-to-day operations across eBay, Amazon SellerCentral, and Shopify storefronts simultaneously.',
      'Delivered daily customer support via Zendesk and maintained meticulous delivery tracking records.',
      'Assisted with end-to-end supply chain management and multi-facility inventory handling.',
    ],
    tools: ['ShipStation', 'Finale Inventory', 'StreetPricer', 'Shopify', 'Amazon SellerCentral', 'eBay', 'Zendesk'],
    highlightMetric: '99.8% order fulfillment accuracy across 3 storefronts',
  },
  {
    id: 'exp-2',
    role: 'Digital Marketing, AI & WordPress Assistant',
    period: 'Apr 2024 – Jan 2025',
    type: 'Remote / Freelance',
    clientContext: 'Real Estate Client',
    responsibilities: [
      'Built and revised a high-conversion WordPress website for real estate agents using BeaverBuilder.',
      'Generated authoritative blog concepts and localized SEO articles using ChatGPT, Claude AI, and Copilot.',
      'Developed blog content pipelines and coordinated publishing schedules through HubSpot CMS.',
      'Supported CRM and email campaign workflows, executing rigorous A/B testing on headlines and CTAs.',
      'Organized CMS agent profiles, client CRM contact records, and web assets for seamless onboarding.',
    ],
    tools: ['WordPress', 'BeaverBuilder', 'HubSpot CRM', 'Claude AI', 'ChatGPT', 'GitHub Copilot'],
    highlightMetric: '40+ optimized real estate articles & automated lead workflows',
  },
  {
    id: 'exp-3',
    role: 'Shopify Virtual Assistant',
    period: 'Mar 2020 – Apr 2022',
    type: 'Remote / Freelance',
    responsibilities: [
      'Listed and optimized dozens of trending products on Shopify, conducting keyword research and writing compelling product copy.',
      'Managed end-to-end order fulfillment, processing customer orders and monitoring shipment statuses.',
      'Coordinated closely with manufacturers and dropship suppliers to ensure steady stock and verify packaging guidelines.',
      'Delivered responsive customer support via live chat and email, handling returns, exchanges, and tracking questions.',
      'Structured operational workflows, sprint tasks, and standard operating procedures (SOPs) using ClickUp.',
    ],
    tools: ['Shopify', 'ClickUp', 'Live Chat Support', 'Supplier Portals', 'Excel'],
    highlightMetric: 'Over 12,000 orders fulfilled with 4.9/5 customer satisfaction',
  },
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Science in Mechanical Engineering',
  institution: 'Polytechnic University of the Philippines',
  period: '2014 – 2018',
  details: 'Rooted in systematic problem solving, process optimization, quantitative modeling, and rigorous operational logic applied to digital supply chains and business systems.',
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'project-multi-channel',
    title: 'Multi-Channel Retail & Logistics Hub',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Operations',
    tagline: 'Synchronized fulfillment across Amazon, eBay, and Shopify with zero stockouts.',
    overview: 'Managed daily operations for a fast-scaling multi-channel merchant selling thousands of SKUs across Amazon SellerCentral, eBay, and a custom Shopify store.',
    challenge: 'The client struggled with out-of-sync inventory counts between Amazon and eBay, resulting in frequent cancellations, buyer dissatisfaction, and manual shipping bottlenecks.',
    solution: 'Integrated ShipStation and Finale Inventory into a unified order pipeline. Created automated routing rules, synced stock counts every 15 minutes, and established StreetPricer automated rules to balance competitor pricing and margins.',
    impactMetrics: [
      { label: 'Order Processing Speed', value: '3x Faster' },
      { label: 'Fulfillment Accuracy', value: '99.8%' },
      { label: 'Stockout Cancellations', value: '-85%' },
      { label: 'Channels Synced', value: '3 Major Platforms' },
    ],
    toolsUsed: ['ShipStation', 'Finale Inventory', 'Amazon SellerCentral', 'Shopify', 'eBay', 'StreetPricer'],
    image: projectEcommerceImg,
  },
  {
    id: 'project-shopify-scale',
    title: 'Shopify Storefront Scaling & Catalog Architecture',
    category: 'shopify',
    categoryLabel: 'Shopify Operations',
    tagline: 'High-converting product architecture and automated supplier order dispatching.',
    overview: 'Operated daily catalog management, product launches, and vendor dispatch for a high-growth lifestyle retail brand on Shopify.',
    challenge: 'Manual product uploads were prone to formatting errors, missing variants, uncompressed images, and delayed order transmissions to Chinese and domestic suppliers.',
    solution: 'Created a standardized product upload workflow in ClickUp with automated image optimization, conversion-focused bullet points, variant mapping, and direct supplier batch CSV exports.',
    impactMetrics: [
      { label: 'Orders Processed', value: '12,000+' },
      { label: 'Daily Dispatch Latency', value: '< 4 Hours' },
      { label: 'Customer Rating', value: '4.9 / 5.0' },
      { label: 'Catalog SKU Count', value: '450+ Products' },
    ],
    toolsUsed: ['Shopify Admin', 'ClickUp SOPs', 'CSV Batch Exporter', 'Photoshop', 'Canva'],
    image: projectShopifyImg,
  },
  {
    id: 'project-real-estate',
    title: 'Real Estate Digital Platform & AI Content Engine',
    category: 'marketing',
    categoryLabel: 'Marketing & AI',
    tagline: 'Built responsive agency website with BeaverBuilder and AI-driven localized content pipeline.',
    overview: 'Collaborated with a premier real estate agency to redesign their client-facing WordPress web experience and establish an automated content publishing engine.',
    challenge: 'The client needed regular neighborhood guides, property buyer checklists, and market updates but lacked internal copywriting bandwidth to produce high-volume content.',
    solution: 'Designed and deployed responsive pages using BeaverBuilder. Built an AI copywriting workflow using Claude AI and ChatGPT to produce SEO-researched neighborhood spotlights, scheduled through HubSpot with A/B tested email drip campaigns.',
    impactMetrics: [
      { label: 'Organic Inbound Reach', value: '+140%' },
      { label: 'Published Articles', value: '40+ Guides' },
      { label: 'Lead Form Conversion', value: '+28%' },
      { label: 'Client Onboarding Time', value: '-50%' },
    ],
    toolsUsed: ['WordPress', 'BeaverBuilder', 'HubSpot CMS', 'Claude AI', 'ChatGPT', 'Copilot'],
    image: projectRealEstateImg,
  },
  {
    id: 'project-inventory-repricing',
    title: 'Dynamic Repricing & Supply Chain Continuity',
    category: 'inventory',
    categoryLabel: 'Inventory & Supply Chain',
    tagline: 'Automated repricing algorithms and vendor purchase order tracking.',
    overview: 'Implemented StreetPricer dynamic repricing rules, backorder tracking protocols, and vendor purchase order coordination across multiple 3PL centers.',
    challenge: 'Volatile competitor price shifts caused missed sales during peak buying windows and eroded profit margins when material costs spiked.',
    solution: 'Configured StreetPricer margin-floor algorithms that automatically defended Buy Box positions while safeguarding minimum profit. Established weekly vendor purchase order schedules and proactive tracking reconciliation.',
    impactMetrics: [
      { label: 'Buy Box Win Rate', value: '+34%' },
      { label: 'Vendor Fill Rate', value: '98.5%' },
      { label: 'Backorder Resolution', value: '< 24 Hours' },
      { label: 'Active Monitored SKUs', value: '800+' },
    ],
    toolsUsed: ['StreetPricer', 'Finale Inventory', 'Zendesk', 'Excel Formulas', 'Google Sheets'],
    image: projectInventoryImg,
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Founder & Managing Director',
    company: 'Vanguard Retail Logistics',
    relationship: 'Direct Client · 3+ Years Collaboration',
    quote: 'Jonard is hands-down the most reliable e-commerce operations VA I have ever worked with. His engineering background really shows in how he structures ShipStation batches and Finale inventory counts. We never had a single major fulfillment slip-up during our peak Q4 season.',
    rating: 5,
    highlight: 'Zero major fulfillment slip-ups during peak Q4',
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Principal Broker & Managing Partner',
    company: 'Apex Realty Group',
    relationship: 'Client · Real Estate Digital Project',
    quote: 'Jonard rebuilt our BeaverBuilder WordPress site and set up our HubSpot content calendar with Claude and ChatGPT. His attention to detail, responsiveness, and ability to grasp complex marketing workflows made our client onboarding seamless.',
    rating: 5,
    highlight: 'Rebuilt our BeaverBuilder site & automated HubSpot content',
  },
  {
    id: 'test-3',
    name: 'David Steinberg',
    role: 'Head of E-Commerce',
    company: 'Lumina Brands International',
    relationship: 'Client · Multi-Channel Store Operations',
    quote: 'Managing Amazon, eBay, and Shopify at once is a logistical nightmare unless you have someone like Jonard. He handled StreetPricer repricing, purchase orders, and Zendesk tickets with complete ownership. He doesn’t just execute tasks—he improves the entire system.',
    rating: 5,
    highlight: 'Doesn’t just execute tasks—he improves the entire system',
  },
];

// SEO Optimization utilities and monitoring

export interface SEOAnalysis {
  score: number;
  issues: string[];
  recommendations: string[];
  strengths: string[];
}

export interface PageSEOData {
  title: string;
  description: string;
  keywords: string[];
  headings: { level: number; text: string }[];
  images: { src: string; alt: string; hasAlt: boolean }[];
  links: { href: string; text: string; isInternal: boolean }[];
  wordCount: number;
  readingTime: number;
}

// SEO Best Practices for Rwanda/East Africa IT Companies
export const seoGuidelines = {
  title: {
    minLength: 30,
    maxLength: 60,
    shouldInclude: ['Rwanda', 'Kigali', 'East Africa', 'IT', 'CyLaCon']
  },
  description: {
    minLength: 120,
    maxLength: 160,
    shouldInclude: ['Rwanda', 'IT solutions', 'contact', 'phone number']
  },
  keywords: {
    primary: ['IT solutions Rwanda', 'CyLaCon', 'Kigali IT company'],
    local: ['Rwanda', 'Kigali', 'East Africa', 'Rwanda IT', 'Kigali technology'],
    services: ['web development', 'cybersecurity', 'cloud solutions', 'software development']
  },
  content: {
    minWordCount: 300,
    keywordDensity: { min: 0.5, max: 3.0 },
    headingStructure: true
  }
};

// Competitor keyword analysis based on research
export const competitorKeywords = {
  saltel: ['network infrastructure', 'servers', 'datacenters', 'CCTV', 'ICT training'],
  washahost: ['web hosting', 'cloud hosting', 'domain registration', 'managed hosting'],
  diolichat: ['software development', 'AI', 'mobile apps', 'digital marketing', 'eBiz', 'SARMS'],
  mixventure: ['web development', 'digital marketing', 'multimedia', 'ed-tech'],
  
  // Opportunities for CyLaCon to target
  opportunities: [
    'ISO 27001 certified Rwanda',
    'enterprise IT solutions Rwanda',
    'cybersecurity consulting Rwanda',
    'digital transformation East Africa',
    'custom software development Kigali',
    'IT infrastructure Rwanda',
    'business automation Rwanda',
    'cloud migration services Rwanda'
  ]
};

// Local SEO optimization for Rwanda
export const localSEOKeywords = [
  // City-specific
  'IT services Kigali',
  'software company Kigali',
  'web development Kigali',
  'cybersecurity Kigali',
  
  // Country-specific
  'IT solutions Rwanda',
  'technology company Rwanda',
  'software development Rwanda',
  'digital transformation Rwanda',
  
  // Regional
  'IT services East Africa',
  'technology solutions East Africa',
  'software company East Africa',
  
  // District-specific (Kigali districts)
  'IT services Nyarugenge',
  'IT services Gasabo',
  'IT services Kicukiro',
  
  // Neighboring countries
  'IT solutions Uganda',
  'IT solutions Tanzania',
  'IT solutions Kenya',
  'IT solutions Burundi'
];

// Industry-specific keywords for different sectors
export const industryKeywords = {
  healthcare: ['healthcare IT Rwanda', 'medical software Rwanda', 'hospital management system'],
  education: ['education technology Rwanda', 'school management system', 'e-learning platform'],
  finance: ['fintech Rwanda', 'banking software', 'financial management system'],
  government: ['government IT solutions', 'public sector technology', 'e-governance Rwanda'],
  ngo: ['NGO management system', 'donor management software', 'project management system'],
  retail: ['retail management system', 'e-commerce Rwanda', 'POS system Rwanda']
};

// SEO content templates for different pages
export const contentTemplates = {
  servicePageIntro: (service: string) => 
    `Looking for professional ${service} services in Rwanda? CyLaCon provides expert ${service} solutions for businesses across Kigali and East Africa. With ISO 27001 certification and 150+ successful projects, we deliver reliable, secure, and scalable solutions.`,
  
  localBusinessDescription: (city: string) =>
    `CyLaCon is a leading IT company serving ${city} and surrounding areas. We specialize in web development, cybersecurity, cloud solutions, and custom software development. Contact us at +250780115764 for a free consultation.`,
  
  callToAction: (service?: string) =>
    service 
      ? `Ready to transform your business with ${service}? Contact CyLaCon today for a free consultation. Call +250780115764 or email info@cylacon.com.`
      : `Ready to transform your business with innovative IT solutions? Contact CyLaCon today for a free consultation. Call +250780115764 or email info@cylacon.com.`
};

// Performance tracking keywords for monitoring
export const trackingKeywords = [
  // Primary brand terms
  'CyLaCon',
  'CyLaCon Rwanda',
  'CyLaCon IT solutions',
  
  // Service + location combinations
  'IT solutions Rwanda',
  'web development Kigali',
  'cybersecurity Rwanda',
  'cloud solutions East Africa',
  'software development Rwanda',
  'IT consulting Kigali',
  
  // Competitive terms
  'best IT company Rwanda',
  'top software company Kigali',
  'leading IT solutions Rwanda',
  'ISO 27001 certified Rwanda',
  
  // Long-tail keywords
  'custom software development company Rwanda',
  'cybersecurity services Kigali',
  'cloud hosting provider Rwanda',
  'enterprise IT solutions East Africa'
];

// SEO analysis function
export function analyzePage(data: PageSEOData): SEOAnalysis {
  const issues: string[] = [];
  const recommendations: string[] = [];
  const strengths: string[] = [];
  let score = 100;

  // Title analysis
  if (data.title.length < seoGuidelines.title.minLength) {
    issues.push('Title is too short');
    score -= 10;
  }
  if (data.title.length > seoGuidelines.title.maxLength) {
    issues.push('Title is too long');
    score -= 5;
  }
  if (!seoGuidelines.title.shouldInclude.some(keyword => 
    data.title.toLowerCase().includes(keyword.toLowerCase())
  )) {
    recommendations.push('Include location keywords (Rwanda, Kigali) in title');
    score -= 15;
  } else {
    strengths.push('Title includes important location keywords');
  }

  // Description analysis
  if (data.description.length < seoGuidelines.description.minLength) {
    issues.push('Meta description is too short');
    score -= 10;
  }
  if (data.description.length > seoGuidelines.description.maxLength) {
    issues.push('Meta description is too long');
    score -= 5;
  }

  // Content analysis
  if (data.wordCount < seoGuidelines.content.minWordCount) {
    issues.push('Content is too short for good SEO');
    score -= 20;
  } else {
    strengths.push('Content has sufficient word count');
  }

  // Image optimization
  const imagesWithoutAlt = data.images.filter(img => !img.hasAlt);
  if (imagesWithoutAlt.length > 0) {
    issues.push(`${imagesWithoutAlt.length} images missing alt text`);
    score -= imagesWithoutAlt.length * 2;
  }

  // Heading structure
  const hasH1 = data.headings.some(h => h.level === 1);
  if (!hasH1) {
    issues.push('Missing H1 heading');
    score -= 15;
  } else {
    strengths.push('Proper H1 heading structure');
  }

  // Local SEO
  const hasLocalKeywords = localSEOKeywords.some(keyword =>
    data.title.toLowerCase().includes(keyword.toLowerCase()) ||
    data.description.toLowerCase().includes(keyword.toLowerCase())
  );
  
  if (hasLocalKeywords) {
    strengths.push('Good local SEO keyword usage');
  } else {
    recommendations.push('Add more local SEO keywords (Rwanda, Kigali, East Africa)');
    score -= 10;
  }

  return {
    score: Math.max(0, score),
    issues,
    recommendations,
    strengths
  };
}

// Generate sitemap entries for dynamic content
export function generateSitemapEntries() {
  const baseUrl = 'https://cylacon.com';
  const currentDate = new Date().toISOString();
  
  return [
    // Service pages
    ...seoGuidelines.keywords.services.map(service => ({
      url: `${baseUrl}/services/${service.replace(/\s+/g, '-').toLowerCase()}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    })),
    
    // Location pages
    ...localSEOKeywords.slice(0, 10).map(location => ({
      url: `${baseUrl}/locations/${location.replace(/\s+/g, '-').toLowerCase()}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    })),
    
    // Industry pages
    ...Object.keys(industryKeywords).map(industry => ({
      url: `${baseUrl}/industries/${industry}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    }))
  ];
}

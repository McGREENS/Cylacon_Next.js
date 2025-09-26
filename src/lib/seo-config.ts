export const seoConfig = {
  // Company Information
  company: {
    name: 'CyLaCon',
    fullName: 'CyLaCon IT Solutions',
    description: 'Leading IT company in Rwanda providing cybersecurity, software development, IT consulting, and digital transformation services across East Africa.',
    url: 'https://cylacon.com',
    logo: 'https://cylacon.com/logo.png',
    email: 'info@cylacon.com',
    phone: '+250780115764',
    address: {
      street: 'KG 541 St',
      city: 'Kigali',
      country: 'Rwanda',
      postalCode: '00000'
    }
  },

  // SEO Keywords by Category
  keywords: {
    primary: [
      'IT solutions Rwanda',
      'CyLaCon',
      'IT company Kigali',
      'cybersecurity Rwanda',
      'software development Rwanda'
    ],
    services: [
      'web development Kigali',
      'cloud solutions East Africa',
      'custom software development',
      'IT consulting Rwanda',
      'network infrastructure Rwanda',
      'digital transformation Rwanda',
      'enterprise software Rwanda',
      'mobile app development Rwanda'
    ],
    location: [
      'IT services Kigali',
      'technology company Rwanda',
      'East Africa IT solutions',
      'Rwanda software development',
      'Kigali web development',
      'IT support Rwanda',
      'tech company East Africa'
    ],
    industry: [
      'ISO 27001 certified',
      'enterprise IT solutions',
      'business automation Rwanda',
      'digital innovation Rwanda',
      'technology consulting East Africa'
    ]
  },

  // Social Media
  social: {
    linkedin: 'https://www.linkedin.com/company/cylacon/about/',
    instagram: 'https://www.instagram.com/cylacon_rw/',
    tiktok: 'https://www.tiktok.com/@cylacon_rw',
    twitter: '@cylacon_rw'
  },

  // Service Areas
  serviceAreas: [
    'Rwanda',
    'Kigali',
    'East Africa',
    'Rubavu',
    'Huye',
    'Goma',
    'Burundi',
    'Uganda',
    'Tanzania',
    'Kenya'
  ],

  // Services for SEO
  services: [
    {
      name: 'Web Development',
      slug: 'web-development',
      description: 'Custom web applications and responsive websites',
      keywords: ['web development Rwanda', 'website design Kigali', 'responsive web design']
    },
    {
      name: 'Cybersecurity Services',
      slug: 'cybersecurity',
      description: 'Comprehensive security solutions and ISO 27001 compliance',
      keywords: ['cybersecurity Rwanda', 'IT security Kigali', 'ISO 27001 Rwanda']
    },
    {
      name: 'Cloud Solutions',
      slug: 'cloud-solutions',
      description: 'Cloud migration, hosting, and infrastructure management',
      keywords: ['cloud hosting Rwanda', 'cloud migration East Africa', 'cloud infrastructure']
    },
    {
      name: 'Custom Software Development',
      slug: 'custom-software',
      description: 'Tailored software solutions for business automation',
      keywords: ['custom software Rwanda', 'business automation', 'enterprise software']
    },
    {
      name: 'IT Consulting',
      slug: 'it-consulting',
      description: 'Strategic IT planning and digital transformation',
      keywords: ['IT consulting Rwanda', 'digital transformation', 'technology strategy']
    },
    {
      name: 'Network Infrastructure',
      slug: 'network-infrastructure',
      description: 'Network design, implementation, and maintenance',
      keywords: ['network infrastructure Rwanda', 'IT infrastructure Kigali', 'network security']
    }
  ],

  // Local SEO Data
  localSEO: {
    businessType: 'Technology Company',
    categories: [
      'Computer Software Company',
      'IT Services Company',
      'Web Development Company',
      'Cybersecurity Company',
      'Software Development Company'
    ],
    coordinates: {
      latitude: -1.9441,
      longitude: 30.0619
    },
    operatingHours: {
      monday: '08:00-17:00',
      tuesday: '08:00-17:00',
      wednesday: '08:00-17:00',
      thursday: '08:00-17:00',
      friday: '08:00-17:00',
      saturday: '09:00-13:00',
      sunday: 'Closed'
    }
  }
};

// Generate meta description for different pages
export const generateMetaDescription = (page: string, customDescription?: string): string => {
  if (customDescription) return customDescription;
  
  const baseDescription = seoConfig.company.description;
  
  switch (page) {
    case 'home':
      return `${baseDescription} ISO 27001 certified with 150+ successful projects. Contact us for free consultation.`;
    case 'services':
      return `Comprehensive IT services in Rwanda: web development, cybersecurity, cloud solutions, custom software. Serving Kigali and East Africa.`;
    case 'about':
      return `Learn about CyLaCon, Rwanda's leading IT company. ISO 27001 certified team delivering innovative technology solutions across East Africa.`;
    case 'contact':
      return `Contact CyLaCon for IT solutions in Rwanda. Located in Kigali, serving East Africa. Call +250780115764 or email info@cylacon.com.`;
    default:
      return baseDescription;
  }
};

// Generate structured data for different page types
export const generateStructuredData = (type: 'organization' | 'service' | 'article', data?: any) => {
  const baseOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seoConfig.company.name,
    "alternateName": seoConfig.company.fullName,
    "url": seoConfig.company.url,
    "logo": seoConfig.company.logo,
    "description": seoConfig.company.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": seoConfig.company.address.street,
      "addressLocality": seoConfig.company.address.city,
      "addressCountry": seoConfig.company.address.country,
      "postalCode": seoConfig.company.address.postalCode
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": seoConfig.company.phone,
      "contactType": "customer service",
      "email": seoConfig.company.email,
      "availableLanguage": ["English", "Kinyarwanda", "French"]
    },
    "sameAs": [
      seoConfig.social.linkedin,
      seoConfig.social.instagram,
      seoConfig.social.tiktok
    ],
    "areaServed": seoConfig.serviceAreas.map(area => ({
      "@type": area === 'Rwanda' ? "Country" : "City",
      "name": area
    })),
    "serviceType": seoConfig.services.map(service => service.name),
    "foundingDate": "2018",
    "numberOfEmployees": "10-50",
    "slogan": "Transforming Businesses Through Innovative IT Solutions"
  };

  switch (type) {
    case 'organization':
      return baseOrg;
    case 'service':
      return {
        ...baseOrg,
        "@type": "ProfessionalService",
        "priceRange": "$$",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "currenciesAccepted": "RWF, USD"
      };
    default:
      return baseOrg;
  }
};

import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import RetailOverview from '@/components/sections/solutions/retail/RetailOverview';
import RetailSolutions from '@/components/sections/solutions/retail/RetailSolutions';
import RetailTechnology from '@/components/sections/solutions/retail/RetailTechnology';
import RetailSecurity from '@/components/sections/solutions/retail/RetailSecurity';
import CallToAction from '@/components/sections/CallToAction';
import SectionTransition from '@/components/ui/SectionTransition';

const retailSolution = {
  name: 'Retail IT Solutions',
  slug: 'retail',
  description: 'Comprehensive IT solutions designed to transform retail operations and enhance customer experiences',
  keywords: [
    'retail IT solutions Rwanda',
    'POS systems Kigali',
    'retail management software Rwanda',
    'e-commerce platforms Rwanda',
    'inventory management systems Rwanda',
    'retail technology Rwanda',
    'digital retail solutions Rwanda',
    'retail automation Rwanda',
    'omnichannel retail Rwanda',
    'retail analytics Rwanda'
  ],
  features: [
    'Point of Sale (POS) Systems',
    'Inventory Management',
    'E-commerce Platforms',
    'Customer Relationship Management',
    'Retail Analytics & Reporting',
    'Supply Chain Management'
  ],
  benefits: [
    'Increased Sales Revenue',
    'Improved Customer Experience',
    'Better Inventory Control',
    'Enhanced Operational Efficiency',
    'Data-Driven Insights',
    'Omnichannel Integration'
  ]
};

export const metadata: Metadata = {
  title: 'Retail IT Solutions Rwanda | POS Systems Kigali | E-commerce Platforms - CyLaCon',
  description: 'Transform your retail business with comprehensive IT solutions in Rwanda. POS systems, inventory management, e-commerce platforms, and retail technology. Call +250780115764.',
  keywords: 'retail IT solutions Rwanda, POS systems Kigali, retail management software Rwanda, e-commerce platforms Rwanda, inventory management systems Rwanda, retail technology Rwanda, digital retail solutions Rwanda, retail automation Rwanda, omnichannel retail Rwanda, retail analytics Rwanda',
  openGraph: {
    title: 'Retail IT Solutions Rwanda | Digital Retail Transformation | CyLaCon',
    description: 'Transform your retail business with comprehensive IT solutions designed for Rwanda\'s retail sector. Enhance customer experience and operational efficiency.',
    url: 'https://cylacon.com/solutions/retail',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Retail IT Solutions Rwanda - Digital Retail Transformation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail IT Solutions Rwanda | Digital Retail Transformation | CyLaCon',
    description: 'Transform your retail business with comprehensive IT solutions designed for Rwanda\'s retail sector.',
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/solutions/retail',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RetailPage() {
  return (
    <>
      {/* Retail Solution Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Retail IT Solutions",
            "description": "Comprehensive IT solutions for retail businesses including POS systems, inventory management, and e-commerce platforms",
            "provider": {
              "@type": "Organization",
              "name": "CyLaCon",
              "url": "https://cylacon.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "KG 541 St",
                "addressLocality": "Kigali",
                "addressCountry": "Rwanda"
              },
              "telephone": "+250780115764"
            },
            "areaServed": ["Rwanda", "East Africa", "Kigali", "DRC", "Uganda", "Tanzania", "Kenya"],
            "serviceType": "Retail IT Solutions and Digital Commerce Services",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceRange": "$$$"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <ServiceHero 
          title="Digital Retail Transformation for Rwanda"
          subtitle="Empower your retail business with innovative IT solutions that enhance customer experiences, streamline operations, and drive growth in Rwanda's dynamic retail market."
          backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          service="retail"
        />
        
        <SectionTransition variant="wave" />
        
        {/* Retail Overview */}
        <RetailOverview 
          solution={retailSolution}
        />
        
        <SectionTransition variant="curve" />
        
        {/* Retail Solutions */}
        <RetailSolutions />
        
        <SectionTransition variant="diagonal" />
        
        {/* Retail Technology */}
        <RetailTechnology />
        
        <SectionTransition variant="wave" />
        
        {/* Retail Security */}
        <RetailSecurity />
        
        <SectionTransition variant="curve" />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

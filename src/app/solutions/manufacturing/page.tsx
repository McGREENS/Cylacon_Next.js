import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ManufacturingOverview from '@/components/sections/solutions/manufacturing/ManufacturingOverview';
import ManufacturingSolutions from '@/components/sections/solutions/manufacturing/ManufacturingSolutions';
import Industry4Solutions from '@/components/sections/solutions/manufacturing/Industry4Solutions';
import ManufacturingSecurity from '@/components/sections/solutions/manufacturing/ManufacturingSecurity';
import CallToAction from '@/components/sections/CallToAction';

const manufacturingSolution = {
  name: 'Manufacturing IT Solutions',
  slug: 'manufacturing',
  description: 'Comprehensive IT solutions designed to transform manufacturing operations and drive Industry 4.0 adoption',
  keywords: [
    'manufacturing IT solutions Rwanda',
    'industrial automation Kigali',
    'smart manufacturing Rwanda',
    'ERP systems manufacturing Rwanda',
    'production management software Rwanda',
    'manufacturing technology Rwanda',
    'Industry 4.0 solutions Rwanda',
    'factory automation Rwanda',
    'manufacturing digitization Rwanda',
    'industrial IoT Rwanda'
  ],
  features: [
    'Enterprise Resource Planning (ERP)',
    'Manufacturing Execution Systems (MES)',
    'Industrial IoT Solutions',
    'Production Planning & Scheduling',
    'Quality Management Systems',
    'Supply Chain Management'
  ],
  benefits: [
    'Increased Production Efficiency',
    'Improved Quality Control',
    'Reduced Operational Costs',
    'Enhanced Supply Chain Visibility',
    'Better Resource Utilization',
    'Real-time Production Insights'
  ]
};

export const metadata: Metadata = {
  title: 'Manufacturing IT Solutions Rwanda | Industrial Automation Kigali | Smart Manufacturing - CyLaCon',
  description: 'Transform your manufacturing operations with comprehensive IT solutions in Rwanda. ERP systems, industrial automation, smart manufacturing, and Industry 4.0 solutions. Call +250780115764.',
  keywords: 'manufacturing IT solutions Rwanda, industrial automation Kigali, smart manufacturing Rwanda, ERP systems manufacturing Rwanda, production management software Rwanda, manufacturing technology Rwanda, Industry 4.0 solutions Rwanda, factory automation Rwanda, manufacturing digitization Rwanda, industrial IoT Rwanda',
  openGraph: {
    title: 'Manufacturing IT Solutions Rwanda | Smart Manufacturing Transformation | CyLaCon',
    description: 'Transform your manufacturing operations with comprehensive IT solutions designed for Rwanda\'s manufacturing sector. Drive efficiency and Industry 4.0 adoption.',
    url: 'https://cylacon.com/solutions/manufacturing',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Manufacturing IT Solutions Rwanda - Smart Manufacturing Transformation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing IT Solutions Rwanda | Smart Manufacturing Transformation | CyLaCon',
    description: 'Transform your manufacturing operations with comprehensive IT solutions designed for Rwanda\'s manufacturing sector.',
    images: ['https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/solutions/manufacturing',
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

export default function ManufacturingPage() {
  return (
    <>
      {/* Manufacturing Solution Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Manufacturing IT Solutions",
            "description": "Comprehensive IT solutions for manufacturing companies including ERP systems, industrial automation, and smart manufacturing technologies",
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
            "serviceType": "Manufacturing IT Solutions and Industrial Technology Services",
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
          title="Smart Manufacturing Transformation for Rwanda"
          subtitle="Empower your manufacturing operations with cutting-edge IT solutions that drive efficiency, enhance quality, and accelerate Rwanda's industrial development through Industry 4.0 adoption."
          backgroundImage="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          service="Manufacturing IT Solutions"
        />
        
        {/* Manufacturing Overview */}
        <ManufacturingOverview 
          solution={manufacturingSolution}
        />
        
        {/* Manufacturing Solutions */}
        <ManufacturingSolutions />
        
        {/* Industry 4.0 Solutions */}
        <Industry4Solutions />
        
        {/* Manufacturing Security */}
        <ManufacturingSecurity />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

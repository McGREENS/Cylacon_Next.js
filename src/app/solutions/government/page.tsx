import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import GovernmentOverview from '@/components/sections/solutions/government/GovernmentOverview';
import GovernmentSolutions from '@/components/sections/solutions/government/GovernmentSolutions';
import DigitalGovernment from '@/components/sections/solutions/government/DigitalGovernment';
import GovernmentSecurity from '@/components/sections/solutions/government/GovernmentSecurity';
import CallToAction from '@/components/sections/CallToAction';

const governmentSolution = {
  name: 'Government IT Solutions',
  slug: 'government',
  description: 'Digital transformation solutions for government agencies and public sector institutions',
  keywords: [
    'government IT solutions Rwanda',
    'e-government Rwanda',
    'digital government Kigali',
    'public sector IT Rwanda',
    'government software Rwanda',
    'citizen services digital Rwanda',
    'government digitization Rwanda',
    'public administration IT Rwanda',
    'smart government Rwanda',
    'government technology solutions Rwanda'
  ],
  features: [
    'E-Government Platforms',
    'Citizen Service Portals',
    'Digital Identity Systems',
    'Government Data Management',
    'Public Sector Analytics',
    'Interagency Integration'
  ],
  benefits: [
    'Enhanced Citizen Services',
    'Improved Transparency',
    'Operational Efficiency',
    'Cost Reduction',
    'Better Governance',
    'Digital Inclusion'
  ]
};

export const metadata: Metadata = {
  title: 'Government IT Solutions Rwanda | E-Government Kigali | Digital Government - CyLaCon',
  description: 'Transform public service delivery with comprehensive government IT solutions in Rwanda. E-government platforms, citizen services, and digital transformation for public sector. Call +250780115764.',
  keywords: 'government IT solutions Rwanda, e-government Rwanda, digital government Kigali, public sector IT Rwanda, government software Rwanda, citizen services digital Rwanda, government digitization Rwanda, public administration IT Rwanda, smart government Rwanda, government technology solutions Rwanda',
  openGraph: {
    title: 'Government IT Solutions Rwanda | Digital Government Transformation | CyLaCon',
    description: 'Transform public service delivery with comprehensive government IT solutions designed for Rwanda\'s public sector. Enhance citizen services and governance.',
    url: 'https://cylacon.com/solutions/government',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://cylacon.com/Rwanda.jpg',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Government IT Solutions Rwanda - Digital Government Transformation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Government IT Solutions Rwanda | Digital Government Transformation | CyLaCon',
    description: 'Transform public service delivery with comprehensive government IT solutions designed for Rwanda\'s public sector.',
    images: ['https://cylacon.com/Rwanda.jpg'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/solutions/government',
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

export default function GovernmentPage() {
  return (
    <>
      {/* Government Solution Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Government IT Solutions",
            "description": "Comprehensive IT solutions for government agencies including e-government platforms, citizen services, and digital transformation",
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
            "serviceType": "Government IT Solutions and Digital Government Services",
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
          title="Digital Government Transformation for Rwanda"
          subtitle="Empower public institutions with innovative IT solutions that enhance citizen services, improve governance, and drive Rwanda's digital transformation agenda."
          backgroundImage="/Rwanda.jpg"
          service="Government IT Solutions"
        />
        
        {/* Government Overview */}
        <GovernmentOverview 
          solution={governmentSolution}
        />
        
        {/* Government Solutions */}
        <GovernmentSolutions />
        
        {/* Digital Government */}
        <DigitalGovernment />
        
        {/* Government Security */}
        <GovernmentSecurity />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

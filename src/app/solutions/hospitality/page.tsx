import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import HospitalityOverview from '@/components/sections/solutions/hospitality/HospitalityOverview';
import HospitalitySolutions from '@/components/sections/solutions/hospitality/HospitalitySolutions';
import HospitalityTechnology from '@/components/sections/solutions/hospitality/HospitalityTechnology';
import HospitalitySecurity from '@/components/sections/solutions/hospitality/HospitalitySecurity';
import CallToAction from '@/components/sections/CallToAction';
import SectionTransition from '@/components/ui/SectionTransition';

const hospitalitySolution = {
  name: 'Hospitality IT Solutions',
  slug: 'hospitality',
  description: 'Comprehensive IT solutions designed to transform hospitality operations and enhance guest experiences',
  keywords: [
    'hospitality IT solutions Rwanda',
    'hotel management systems Kigali',
    'restaurant POS systems Rwanda',
    'tourism technology Rwanda',
    'hotel software Rwanda',
    'hospitality technology Rwanda',
    'guest management systems Rwanda',
    'hotel booking systems Rwanda',
    'hospitality digitization Rwanda',
    'tourism IT solutions Rwanda'
  ],
  features: [
    'Hotel Management Systems (HMS)',
    'Property Management Systems (PMS)',
    'Restaurant POS Systems',
    'Guest Experience Platforms',
    'Revenue Management Systems',
    'Hospitality Analytics'
  ],
  benefits: [
    'Enhanced Guest Experience',
    'Improved Operational Efficiency',
    'Increased Revenue',
    'Better Staff Productivity',
    'Data-Driven Insights',
    'Streamlined Operations'
  ]
};

export const metadata: Metadata = {
  title: 'Hospitality IT Solutions Rwanda | Hotel Management Systems Kigali | Tourism Technology - CyLaCon',
  description: 'Transform your hospitality business with comprehensive IT solutions in Rwanda. Hotel management systems, restaurant POS, guest experience platforms, and tourism technology. Call +250780115764.',
  keywords: 'hospitality IT solutions Rwanda, hotel management systems Kigali, restaurant POS systems Rwanda, tourism technology Rwanda, hotel software Rwanda, hospitality technology Rwanda, guest management systems Rwanda, hotel booking systems Rwanda, hospitality digitization Rwanda, tourism IT solutions Rwanda',
  openGraph: {
    title: 'Hospitality IT Solutions Rwanda | Digital Hospitality Transformation | CyLaCon',
    description: 'Transform your hospitality business with comprehensive IT solutions designed for Rwanda\'s tourism and hospitality sector. Enhance guest experiences and operational efficiency.',
    url: 'https://cylacon.com/solutions/hospitality',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Hospitality IT Solutions Rwanda - Digital Hospitality Transformation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospitality IT Solutions Rwanda | Digital Hospitality Transformation | CyLaCon',
    description: 'Transform your hospitality business with comprehensive IT solutions designed for Rwanda\'s tourism and hospitality sector.',
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/solutions/hospitality',
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

export default function HospitalityPage() {
  return (
    <>
      {/* Hospitality Solution Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Hospitality IT Solutions",
            "description": "Comprehensive IT solutions for hospitality businesses including hotel management systems, restaurant POS, and guest experience platforms",
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
            "serviceType": "Hospitality IT Solutions and Tourism Technology Services",
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
          title="Digital Hospitality Transformation for Rwanda"
          subtitle="Empower your hospitality business with innovative IT solutions that enhance guest experiences, streamline operations, and drive growth in Rwanda's thriving tourism sector."
          backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          service="hospitality"
        />
        
        <SectionTransition variant="wave" color="gray" />
        
        {/* Hospitality Overview */}
        <HospitalityOverview 
          solution={hospitalitySolution}
        />
        
        <SectionTransition variant="curve" color="white" />
        
        {/* Hospitality Solutions */}
        <HospitalitySolutions />
        
        <SectionTransition variant="diagonal" color="gray" />
        
        {/* Hospitality Technology */}
        <HospitalityTechnology />
        
        <SectionTransition variant="wave" color="white" />
        
        {/* Hospitality Security */}
        <HospitalitySecurity />
        
        <SectionTransition variant="curve" color="primary" />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import HealthcareOverview from '@/components/sections/solutions/healthcare/HealthcareOverview';
import HealthcareSolutions from '@/components/sections/solutions/healthcare/HealthcareSolutions';
import HealthcareTechnology from '@/components/sections/solutions/healthcare/HealthcareTechnology';
import HealthcareCompliance from '@/components/sections/solutions/healthcare/HealthcareCompliance';
import CallToAction from '@/components/sections/CallToAction';

const healthcareSolution = {
  name: 'Healthcare IT Solutions',
  slug: 'healthcare',
  description: 'Comprehensive IT solutions designed specifically for healthcare providers and medical institutions',
  keywords: [
    'healthcare IT solutions Rwanda',
    'hospital management systems Kigali',
    'medical IT Rwanda',
    'healthcare technology Rwanda',
    'EHR systems Rwanda',
    'telemedicine solutions Rwanda',
    'healthcare software Rwanda',
    'medical records systems Rwanda',
    'healthcare digitization Rwanda',
    'clinic management software Rwanda'
  ],
  features: [
    'Electronic Health Records (EHR)',
    'Hospital Management Systems',
    'Telemedicine Platforms',
    'Medical Imaging Solutions',
    'Healthcare Analytics',
    'Patient Portal Systems'
  ],
  benefits: [
    'Improved Patient Care',
    'Enhanced Efficiency',
    'Regulatory Compliance',
    'Cost Reduction',
    'Better Outcomes',
    'Secure Data Management'
  ]
};

export const metadata: Metadata = {
  title: 'Healthcare IT Solutions Rwanda | Hospital Management Systems Kigali | Medical Technology - CyLaCon',
  description: 'Transform healthcare delivery with comprehensive IT solutions for hospitals, clinics, and medical practices in Rwanda. EHR systems, telemedicine, and healthcare management solutions. Call +250780115764.',
  keywords: 'healthcare IT solutions Rwanda, hospital management systems Kigali, medical IT Rwanda, healthcare technology Rwanda, EHR systems Rwanda, telemedicine solutions Rwanda, healthcare software Rwanda, medical records systems Rwanda, healthcare digitization Rwanda, clinic management software Rwanda',
  openGraph: {
    title: 'Healthcare IT Solutions Rwanda | Digital Healthcare Transformation | CyLaCon',
    description: 'Transform healthcare delivery with comprehensive IT solutions designed for Rwanda\'s healthcare sector. Improve patient care and operational efficiency.',
    url: 'https://cylacon.com/solutions/healthcare',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Healthcare IT Solutions Rwanda - Digital Healthcare Transformation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare IT Solutions Rwanda | Digital Healthcare Transformation | CyLaCon',
    description: 'Transform healthcare delivery with comprehensive IT solutions designed for Rwanda\'s healthcare sector.',
    images: ['https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/solutions/healthcare',
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

export default function HealthcarePage() {
  return (
    <>
      {/* Healthcare Solution Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Healthcare IT Solutions",
            "description": "Comprehensive IT solutions for healthcare providers including EHR systems, hospital management, and telemedicine platforms",
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
            "serviceType": "Healthcare IT Solutions and Digital Health Services",
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
          title="Digital Healthcare Transformation for Rwanda"
          subtitle="Empower healthcare providers with cutting-edge IT solutions that improve patient care, enhance operational efficiency, and drive better health outcomes across Rwanda."
          backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          service="Healthcare IT Solutions"
        />
        
        {/* Healthcare Overview */}
        <HealthcareOverview 
          solution={healthcareSolution}
        />
        
        {/* Healthcare Solutions */}
        <HealthcareSolutions />
        
        {/* Healthcare Technology */}
        <HealthcareTechnology />
        
        {/* Healthcare Compliance */}
        <HealthcareCompliance />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

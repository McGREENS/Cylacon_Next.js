import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import CybersecurityOverview from '@/components/sections/services/cybersecurity/CybersecurityOverview';
import CybersecurityCapabilities from '@/components/sections/services/cybersecurity/CybersecurityCapabilities';
import CybersecurityProcess from '@/components/sections/services/cybersecurity/CybersecurityProcess';
import CybersecuritySolutions from '@/components/sections/services/cybersecurity/CybersecuritySolutions';
import CybersecurityCompliance from '@/components/sections/services/cybersecurity/CybersecurityCompliance';
import CybersecurityPricing from '@/components/sections/services/cybersecurity/CybersecurityPricing';
import CallToAction from '@/components/sections/CallToAction';
import { generateServiceMetadata, generateServiceStructuredData } from '@/components/seo/ServicePageSEO';

const cybersecurityService = {
  name: 'Cybersecurity',
  slug: 'cybersecurity',
  description: 'Comprehensive cybersecurity solutions to protect your business from digital threats and ensure regulatory compliance',
  keywords: [
    'cybersecurity Rwanda',
    'cyber security Kigali',
    'information security Rwanda',
    'network security East Africa',
    'cybersecurity consulting Rwanda',
    'ISO 27001 implementation Rwanda',
    'security audit Rwanda',
    'penetration testing Kigali',
    'data protection Rwanda',
    'cybersecurity company Rwanda'
  ],
  features: [
    'Security Assessments',
    'Penetration Testing',
    'ISO 27001 Implementation',
    'Network Security',
    'Data Protection',
    'Incident Response'
  ],
  benefits: [
    'Enhanced Security Posture',
    'Regulatory Compliance',
    'Risk Mitigation',
    'Business Continuity',
    '24/7 Monitoring',
    'Expert Guidance'
  ]
};

export const metadata: Metadata = {
  title: 'Cybersecurity Services Rwanda | ISO 27001 Certified | Network Security Kigali - CyLaCon',
  description: 'Protect your business with CyLaCon\'s comprehensive cybersecurity services in Rwanda. ISO 27001 certified experts providing security assessments, penetration testing, compliance, and 24/7 monitoring across East Africa. Call +250780115764.',
  keywords: 'cybersecurity Rwanda, cyber security Kigali, information security Rwanda, network security East Africa, cybersecurity consulting Rwanda, ISO 27001 implementation Rwanda, security audit Rwanda, penetration testing Kigali, data protection Rwanda, cybersecurity company Rwanda, security compliance Rwanda, cyber threats protection',
  openGraph: {
    title: 'Cybersecurity Services Rwanda | ISO 27001 Certified | CyLaCon',
    description: 'Protect your business with comprehensive cybersecurity solutions from Rwanda\'s ISO 27001 certified experts. Security assessments, compliance, and 24/7 monitoring.',
    url: 'https://cylacon.com/services/cybersecurity',
    siteName: 'CyLaCon',
    images: [
      {
        url: '/cyber_1.jpg',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Cybersecurity Services Rwanda - Network Security and Data Protection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Services Rwanda | ISO 27001 Certified | CyLaCon',
    description: 'Protect your business with comprehensive cybersecurity solutions from Rwanda\'s leading IT security experts.',
    images: ['/cyber_1.jpg'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/services/cybersecurity',
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

export default function CybersecurityPage() {
  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cybersecurity Services",
            "description": "Comprehensive cybersecurity solutions including security assessments, penetration testing, ISO 27001 implementation, and 24/7 monitoring",
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
            "serviceType": "Cybersecurity Consulting",
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
          title="Advanced Cybersecurity Services in Rwanda"
          subtitle="Protect your business from cyber threats with ISO 27001 certified security experts. Comprehensive solutions for network security, compliance, and risk management."
          backgroundImage="/cyber_1.jpg"
          service="Cybersecurity"
        />
        
        {/* Service Overview */}
        <CybersecurityOverview 
          service={cybersecurityService}
        />
        
        {/* Capabilities & Services */}
        <CybersecurityCapabilities />
        
        {/* Security Solutions */}
        <CybersecuritySolutions />
        
        {/* Security Process */}
        <CybersecurityProcess />
        
        {/* Compliance & Standards */}
        <CybersecurityCompliance />
        
        {/* Pricing Plans */}
        <CybersecurityPricing />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

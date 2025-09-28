import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import CustomSoftwareOverview from '@/components/sections/services/custom-software/CustomSoftwareOverview';
import CustomSoftwareCapabilities from '@/components/sections/services/custom-software/CustomSoftwareCapabilities';
import CustomSoftwareProcess from '@/components/sections/services/custom-software/CustomSoftwareProcess';
import CustomSoftwareSolutions from '@/components/sections/services/custom-software/CustomSoftwareSolutions';
import CallToAction from '@/components/sections/CallToAction';
import SectionTransition from '@/components/ui/SectionTransition';

const customSoftwareService = {
  name: 'Custom Software Development',
  slug: 'custom-software',
  description: 'Tailored software solutions designed specifically for your business needs and processes',
  keywords: [
    'custom software development Rwanda',
    'bespoke software Kigali',
    'software development Rwanda',
    'custom applications Rwanda',
    'enterprise software Rwanda',
    'software solutions East Africa',
    'custom web applications Rwanda',
    'mobile app development Rwanda',
    'software consulting Kigali',
    'digital transformation Rwanda'
  ],
  features: [
    'Custom Web Applications',
    'Mobile App Development',
    'Enterprise Software',
    'API Development',
    'Database Design',
    'System Integration'
  ],
  benefits: [
    'Perfect Fit for Business',
    'Scalable Architecture',
    'Competitive Advantage',
    'Process Automation',
    'Data-Driven Insights',
    'Future-Proof Technology'
  ]
};

export const metadata: Metadata = {
  title: 'Custom Software Development Rwanda | Bespoke Applications Kigali - CyLaCon',
  description: 'Transform your business with custom software solutions from Rwanda\'s leading developers. Bespoke web applications, mobile apps, and enterprise software. ISO 27001 certified. Call +250780115764.',
  keywords: 'custom software development Rwanda, bespoke software Kigali, software development Rwanda, custom applications Rwanda, enterprise software Rwanda, software solutions East Africa, custom web applications Rwanda, mobile app development Rwanda, software consulting Kigali, digital transformation Rwanda',
  openGraph: {
    title: 'Custom Software Development Rwanda | Bespoke Applications | CyLaCon',
    description: 'Transform your business with tailored software solutions designed specifically for your needs. Expert custom development in Rwanda.',
    url: 'https://cylacon.com/services/custom-software',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Custom Software Development Rwanda - Bespoke Applications',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Rwanda | Bespoke Applications | CyLaCon',
    description: 'Transform your business with tailored software solutions designed specifically for your needs.',
    images: ['https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/services/custom-software',
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

export default function CustomSoftwarePage() {
  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions including custom web applications, mobile apps, and enterprise software development",
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
            "serviceType": "Custom Software Development",
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
          title="Custom Software Development for Rwanda's Digital Future"
          subtitle="Transform your business with bespoke software solutions designed specifically for your unique needs and processes."
          backgroundImage="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          service="custom-software"
        />
        
        <SectionTransition variant="wave" color="gray" />
        
        {/* Service Overview */}
        <CustomSoftwareOverview 
          service={customSoftwareService}
        />
        
        <SectionTransition variant="curve" color="white" />
        
        {/* Software Capabilities */}
        <CustomSoftwareCapabilities />
        
        <SectionTransition variant="diagonal" color="gray" />
        
        {/* Development Process */}
        <CustomSoftwareProcess />
        
        <SectionTransition variant="wave" color="white" />
        
        {/* Software Solutions */}
        <CustomSoftwareSolutions />
        
        <SectionTransition variant="curve" color="primary" />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

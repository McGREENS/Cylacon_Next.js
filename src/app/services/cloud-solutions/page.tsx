import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import CloudOverview from '@/components/sections/services/cloud/CloudOverview';
import CloudCapabilities from '@/components/sections/services/cloud/CloudCapabilities';
import CloudServices from '@/components/sections/services/cloud/CloudServices';
import CloudMigration from '@/components/sections/services/cloud/CloudMigration';
import CloudSecurity from '@/components/sections/services/cloud/CloudSecurity';
import CloudPricing from '@/components/sections/services/cloud/CloudPricing';
import CallToAction from '@/components/sections/CallToAction';
import SectionTransition, { SectionDivider } from '@/components/ui/SectionTransition';

const cloudService = {
  name: 'Cloud Solutions',
  slug: 'cloud-solutions',
  description: 'Comprehensive cloud computing services to modernize your infrastructure and accelerate digital transformation',
  keywords: [
    'cloud solutions Rwanda',
    'cloud computing Kigali',
    'AWS services Rwanda',
    'Azure cloud Rwanda',
    'cloud migration Rwanda',
    'cloud hosting East Africa',
    'cloud infrastructure Rwanda',
    'cloud consulting Kigali',
    'managed cloud services Rwanda',
    'cloud security Rwanda'
  ],
  features: [
    'Cloud Migration',
    'Infrastructure as a Service',
    'Platform as a Service',
    'Cloud Security',
    'Disaster Recovery',
    'Cloud Monitoring'
  ],
  benefits: [
    'Cost Optimization',
    'Scalability',
    'Enhanced Security',
    'Business Continuity',
    'Global Accessibility',
    'Automatic Updates'
  ]
};

export const metadata: Metadata = {
  title: 'Cloud Solutions Rwanda | AWS & Azure Services | Cloud Migration Kigali - CyLaCon',
  description: 'Transform your business with CyLaCon\'s comprehensive cloud solutions in Rwanda. Expert AWS & Azure services, cloud migration, hosting, and security. ISO 27001 certified cloud consulting. Call +250780115764.',
  keywords: 'cloud solutions Rwanda, cloud computing Kigali, AWS services Rwanda, Azure cloud Rwanda, cloud migration Rwanda, cloud hosting East Africa, cloud infrastructure Rwanda, cloud consulting Kigali, managed cloud services Rwanda, cloud security Rwanda, digital transformation Rwanda',
  openGraph: {
    title: 'Cloud Solutions Rwanda | AWS & Azure Services | CyLaCon',
    description: 'Transform your business with comprehensive cloud solutions from Rwanda\'s leading cloud experts. AWS, Azure, migration, and security services.',
    url: 'https://cylacon.com/services/cloud-solutions',
    siteName: 'CyLaCon',
    images: [
      {
        url: '/cloud_1.jpg',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Cloud Solutions Rwanda - AWS Azure Cloud Migration Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Solutions Rwanda | AWS & Azure Services | CyLaCon',
    description: 'Transform your business with comprehensive cloud solutions from Rwanda\'s leading cloud computing experts.',
    images: ['/cloud_1.jpg'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/services/cloud-solutions',
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

export default function CloudSolutionsPage() {
  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cloud Solutions",
            "description": "Comprehensive cloud computing services including AWS, Azure, cloud migration, hosting, and security solutions",
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
            "serviceType": "Cloud Computing Services",
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
          title="Advanced Cloud Solutions for Rwanda's Digital Future"
          subtitle="Accelerate your digital transformation with scalable cloud infrastructure, expert migration services, and 24/7 managed cloud solutions."
          backgroundImage="/cloud_1.jpg"
          service="cloud-solutions"
        />
        
        <SectionDivider type="wave" color="text-gray-50" height="h-16" />
        
        {/* Service Overview */}
        <CloudOverview 
          service={cloudService}
        />
        
        <SectionDivider type="curve" color="text-white" height="h-16" />
        
        {/* Cloud Capabilities */}
        <CloudCapabilities />
        
        <SectionDivider type="diagonal" color="text-gray-50" height="h-16" />
        
        {/* Cloud Services */}
        <CloudServices />
        <SectionDivider type="wave" color="text-white" height="h-16" />
        
        {/* Cloud Migration */}
        <CloudMigration />
        
        <SectionDivider type="curve" color="text-primary-50" height="h-16" />
        
        {/* Cloud Security */}
        <CloudSecurity />
        
        <SectionDivider type="diagonal" color="text-white" height="h-16" />
        {/* Pricing Plans */}
        <CloudPricing />
        
        <SectionDivider type="wave" color="text-primary-50" height="h-16" />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

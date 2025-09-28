import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ServiceOverview from '@/components/sections/services/ServiceOverview';
import ServiceFeatures from '@/components/sections/services/ServiceFeatures';
import ServiceProcess from '@/components/sections/services/ServiceProcess';
import ServiceTechnologies from '@/components/sections/services/ServiceTechnologies';
import ServicePortfolio from '@/components/sections/services/ServicePortfolio';
import ServicePricing from '@/components/sections/services/ServicePricing';
import CallToAction from '@/components/sections/CallToAction';
import SectionTransition from '@/components/ui/SectionTransition';
import { generateServiceMetadata, generateServiceStructuredData } from '@/components/seo/ServicePageSEO';

const webDevelopmentService = {
  name: 'Web Development',
  slug: 'web-development',
  description: 'Custom web applications and responsive websites that drive business growth and enhance user experience',
  keywords: [
    'web development Rwanda',
    'website design Kigali',
    'responsive web design',
    'custom web applications',
    'e-commerce development Rwanda',
    'web development company Kigali',
    'professional website development',
    'business website Rwanda'
  ],
  features: [
    'Responsive Design',
    'Custom Web Applications',
    'E-commerce Solutions',
    'Content Management Systems',
    'Progressive Web Apps',
    'API Integration'
  ],
  benefits: [
    'Enhanced Online Presence',
    'Improved User Experience',
    'Mobile-First Approach',
    'SEO Optimization',
    'Fast Loading Times',
    'Secure & Scalable'
  ]
};

export const metadata: Metadata = generateServiceMetadata(webDevelopmentService);

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceStructuredData(webDevelopmentService))
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <ServiceHero 
          title="Professional Web Development Services in Rwanda"
          subtitle="Transform your business with custom websites and web applications that engage users and drive results"
          backgroundImage="/three.jpg"
          service="Web Development"
        />
        
        <SectionTransition variant="wave" color="gray" />
        
        {/* Service Overview */}
        <ServiceOverview 
          service={webDevelopmentService}
        />
        
        <SectionTransition variant="curve" color="white" />
        
        {/* Features & Capabilities */}
        <ServiceFeatures 
          service={webDevelopmentService}
        />
        
        <SectionTransition variant="diagonal" color="gray" />
        
        {/* Development Process */}
        <ServiceProcess 
          service="web-development"
        />
        
        <SectionTransition variant="wave" color="white" />
        
        {/* Technologies We Use */}
        <ServiceTechnologies 
          service="web-development"
        />
        
        <SectionTransition variant="curve" color="gray" />
        
        {/* Portfolio Examples */}
        <ServicePortfolio 
          service="web-development"
        />
        
        <SectionTransition variant="wave" color="white" />
        
        {/* Pricing Plans */}
        <ServicePricing 
          service="web-development"
        />
        
        <SectionTransition variant="diagonal" color="primary" />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

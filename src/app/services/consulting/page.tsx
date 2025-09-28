import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import ConsultingOverview from '@/components/sections/services/consulting/ConsultingOverview';
import ConsultingServices from '@/components/sections/services/consulting/ConsultingServices';
import ConsultingProcess from '@/components/sections/services/consulting/ConsultingProcess';
import ConsultingExpertise from '@/components/sections/services/consulting/ConsultingExpertise';
import CallToAction from '@/components/sections/CallToAction';
import SectionTransition from '@/components/ui/SectionTransition';

const consultingService = {
  name: 'IT Consulting Services',
  slug: 'consulting',
  description: 'Strategic IT consulting to guide your digital transformation and technology decisions',
  keywords: [
    'IT consulting Rwanda',
    'technology consulting Kigali',
    'digital transformation Rwanda',
    'IT strategy Rwanda',
    'technology advisory Rwanda',
    'IT consulting East Africa',
    'business technology consulting Rwanda',
    'IT consulting services Kigali',
    'technology planning Rwanda',
    'digital strategy Rwanda'
  ],
  features: [
    'IT Strategy Development',
    'Digital Transformation',
    'Technology Assessment',
    'System Architecture',
    'Vendor Selection',
    'Project Management'
  ],
  benefits: [
    'Strategic Alignment',
    'Cost Optimization',
    'Risk Mitigation',
    'Technology Roadmap',
    'Expert Guidance',
    'Competitive Advantage'
  ]
};

export const metadata: Metadata = {
  title: 'IT Consulting Services Rwanda | Technology Strategy Kigali | Digital Transformation - CyLaCon',
  description: 'Expert IT consulting services in Rwanda. Strategic technology planning, digital transformation, and IT advisory services. ISO 27001 certified consultants. Transform your business with CyLaCon. Call +250780115764.',
  keywords: 'IT consulting Rwanda, technology consulting Kigali, digital transformation Rwanda, IT strategy Rwanda, technology advisory Rwanda, IT consulting East Africa, business technology consulting Rwanda, IT consulting services Kigali, technology planning Rwanda, digital strategy Rwanda',
  openGraph: {
    title: 'IT Consulting Services Rwanda | Technology Strategy | CyLaCon',
    description: 'Expert IT consulting services to guide your digital transformation and technology strategy in Rwanda. Strategic planning and advisory services.',
    url: 'https://cylacon.com/services/consulting',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon IT Consulting Services Rwanda - Technology Strategy and Digital Transformation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Consulting Services Rwanda | Technology Strategy | CyLaCon',
    description: 'Expert IT consulting services to guide your digital transformation and technology strategy in Rwanda.',
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/services/consulting',
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

export default function ConsultingPage() {
  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IT Consulting Services",
            "description": "Strategic IT consulting services including digital transformation, technology strategy, and IT advisory services",
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
            "serviceType": "IT Consulting and Advisory Services",
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
          title="Strategic IT Consulting for Rwanda's Digital Future"
          subtitle="Navigate your digital transformation with expert guidance. We help businesses make informed technology decisions that drive growth and innovation."
          backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          service="consulting"
        />
        
        <SectionTransition variant="wave" color="gray" />
        
        {/* Service Overview */}
        <ConsultingOverview 
          service={consultingService}
        />
        
        <SectionTransition variant="curve" color="white" />
        
        {/* Consulting Services */}
        <ConsultingServices />
        
        <SectionTransition variant="diagonal" color="gray" />
        
        {/* Consulting Process */}
        <ConsultingProcess />
        
        <SectionTransition variant="wave" color="white" />
        
        {/* Consulting Expertise */}
        <ConsultingExpertise />
        
        <SectionTransition variant="curve" color="primary" />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

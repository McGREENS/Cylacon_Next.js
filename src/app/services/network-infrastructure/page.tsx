import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import NetworkOverview from '@/components/sections/services/network/NetworkOverview';
import NetworkServices from '@/components/sections/services/network/NetworkServices';
import NetworkSolutions from '@/components/sections/services/network/NetworkSolutions';
import NetworkSecurity from '@/components/sections/services/network/NetworkSecurity';
import CallToAction from '@/components/sections/CallToAction';
import SectionTransition from '@/components/ui/SectionTransition';

const networkService = {
  name: 'Network Infrastructure Services',
  slug: 'network-infrastructure',
  description: 'Comprehensive network infrastructure design, implementation, and management services',
  keywords: [
    'network infrastructure Rwanda',
    'network setup Kigali',
    'network installation Rwanda',
    'IT infrastructure Rwanda',
    'network design Rwanda',
    'network management East Africa',
    'enterprise networking Rwanda',
    'network security Rwanda',
    'wireless network Rwanda',
    'network consulting Kigali'
  ],
  features: [
    'Network Design & Planning',
    'Infrastructure Installation',
    'Network Security',
    'Wireless Solutions',
    'Network Monitoring',
    'Maintenance & Support'
  ],
  benefits: [
    'Reliable Connectivity',
    'Enhanced Security',
    'Scalable Infrastructure',
    'Improved Performance',
    'Cost Optimization',
    '24/7 Support'
  ]
};

export const metadata: Metadata = {
  title: 'Network Infrastructure Services Rwanda | Network Setup Kigali | IT Infrastructure - CyLaCon',
  description: 'Professional network infrastructure services in Rwanda. Network design, installation, security, and management. Enterprise networking solutions for businesses in Kigali and East Africa. Call +250780115764.',
  keywords: 'network infrastructure Rwanda, network setup Kigali, network installation Rwanda, IT infrastructure Rwanda, network design Rwanda, network management East Africa, enterprise networking Rwanda, network security Rwanda, wireless network Rwanda, network consulting Kigali',
  openGraph: {
    title: 'Network Infrastructure Services Rwanda | Enterprise Networking | CyLaCon',
    description: 'Professional network infrastructure services for businesses in Rwanda. Design, installation, security, and management of enterprise networks.',
    url: 'https://cylacon.com/services/network-infrastructure',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Network Infrastructure Services Rwanda - Enterprise Networking Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Network Infrastructure Services Rwanda | Enterprise Networking | CyLaCon',
    description: 'Professional network infrastructure services for businesses in Rwanda. Design, installation, and management.',
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/services/network-infrastructure',
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

export default function NetworkInfrastructurePage() {
  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Network Infrastructure Services",
            "description": "Comprehensive network infrastructure design, installation, security, and management services for businesses",
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
            "serviceType": "Network Infrastructure and IT Services",
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
          title="Enterprise Network Infrastructure for Rwanda's Digital Economy"
          subtitle="Build reliable, secure, and scalable network infrastructure that powers your business growth and digital transformation."
          backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          service="network-infrastructure"
        />
        
        <SectionTransition variant="wave" />
        
        {/* Service Overview */}
        <NetworkOverview 
          service={networkService}
        />
        
        <SectionTransition variant="curve" />
        
        {/* Network Services */}
        <NetworkServices />
        
        <SectionTransition variant="diagonal" />
        
        {/* Network Solutions */}
        <NetworkSolutions />
        
        <SectionTransition variant="wave" />
        
        {/* Network Security */}
        <NetworkSecurity />
        
        <SectionTransition variant="curve" />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

import React from 'react';
import { Metadata } from 'next';
import ConsultationHero from '@/components/sections/consultation/ConsultationHero';
import ConsultationForm from '@/components/sections/consultation/ConsultationForm';
import ConsultationBenefits from '@/components/sections/consultation/ConsultationBenefits';
import ConsultationProcess from '@/components/sections/consultation/ConsultationProcess';

export const metadata: Metadata = {
  title: 'Free IT Consultation | CyLaCon Rwanda | Expert Technology Assessment',
  description: 'Get a free IT consultation from CyLaCon experts. Assess your technology needs, identify opportunities, and receive personalized recommendations for your business in Rwanda.',
  keywords: 'free IT consultation Rwanda, technology assessment Kigali, IT consulting services, business technology audit, digital transformation consultation, IT strategy Rwanda',
  openGraph: {
    title: 'Free IT Consultation | CyLaCon Rwanda | Expert Technology Assessment',
    description: 'Get expert IT consultation from CyLaCon. Free assessment of your technology needs and personalized recommendations for your business.',
    url: 'https://cylacon.com/consultation',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon IT Consultation Services Rwanda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free IT Consultation | CyLaCon Rwanda | Expert Technology Assessment',
    description: 'Get expert IT consultation from CyLaCon. Free assessment and personalized recommendations.',
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/consultation',
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

export default function ConsultationPage() {
  return (
    <>
      {/* Consultation Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IT Consultation Services",
            "provider": {
              "@type": "Organization",
              "name": "CyLaCon",
              "url": "https://cylacon.com",
              "logo": "https://cylacon.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+250780115764",
                "contactType": "customer service",
                "email": "info@cylacon.com",
                "availableLanguage": ["English", "Kinyarwanda", "French"],
                "areaServed": ["Rwanda", "East Africa"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kigali",
                "addressCountry": "Rwanda"
              }
            },
            "description": "Professional IT consultation services including technology assessment, digital transformation planning, and strategic IT recommendations for businesses in Rwanda.",
            "serviceType": "IT Consultation",
            "areaServed": ["Rwanda", "East Africa"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IT Consultation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free IT Assessment",
                    "description": "Comprehensive evaluation of your current IT infrastructure and recommendations for improvement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Transformation Planning",
                    "description": "Strategic planning for digital transformation initiatives"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technology Strategy Consultation",
                    "description": "Expert guidance on technology strategy and implementation"
                  }
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Consultation Hero Section */}
        <ConsultationHero />
        
        {/* Consultation Benefits */}
        <ConsultationBenefits />
        
        {/* Consultation Process */}
        <ConsultationProcess />
        
        {/* Consultation Form */}
        <ConsultationForm />
      </main>
    </>
  );
}

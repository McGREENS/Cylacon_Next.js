import React from 'react';
import { Metadata } from 'next';
import TrackingHero from '@/components/sections/track/TrackingHero';
import TrackingForm from '@/components/sections/track/TrackingForm';

export const metadata: Metadata = {
  title: 'Project Tracking | CyLaCon Rwanda | Track IT Project Progress',
  description: 'Track your IT project progress in real-time with CyLaCon. Monitor web development, software development, CCTV installation, and IT solutions projects in Rwanda.',
  keywords: 'project tracking Rwanda, IT project progress, web development tracking, software project status, CyLaCon project portal, project management Rwanda',
  openGraph: {
    title: 'Project Tracking | CyLaCon Rwanda | Track IT Project Progress',
    description: 'Track your IT project progress in real-time with CyLaCon. Monitor project status, milestones, and deliverables.',
    url: 'https://cylacon.com/track',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Project Tracking Dashboard Rwanda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Tracking | CyLaCon Rwanda | Track IT Project Progress',
    description: 'Track your IT project progress in real-time with CyLaCon project tracking portal.',
    images: ['https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/track',
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

export default function TrackPage() {
  return (
    <>
      {/* Project Tracking Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "CyLaCon Project Tracking Portal",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
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
            "description": "Real-time project tracking portal for CyLaCon clients to monitor IT project progress, milestones, and deliverables.",
            "featureList": [
              "Real-time project progress tracking",
              "Milestone and phase monitoring",
              "Document and file access",
              "Project manager communication",
              "Timeline and deadline tracking"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free project tracking access for all CyLaCon clients"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Tracking Hero Section */}
        <TrackingHero />
        
        {/* Tracking Form */}
        <TrackingForm />
      </main>
    </>
  );
}

import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustrySolutions from '@/components/sections/IndustrySolutions';
import MetricsSection from '@/components/sections/MetricsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQStructuredData, { itServicesFAQs } from '@/components/seo/FAQStructuredData';

export const metadata: Metadata = {
  title: 'CyLaCon | #1 IT Solutions Provider in Rwanda | Web Development, Cybersecurity & Cloud Solutions Kigali',
  description: 'Transform your business with CyLaCon\'s innovative IT solutions in Rwanda. Expert web development, cybersecurity, cloud solutions, and custom software development in Kigali, East Africa. ISO 27001 certified with 150+ successful projects. Call +250780115764 for free consultation.',
  keywords: 'IT solutions Rwanda, web development Kigali, cybersecurity Rwanda, cloud solutions East Africa, custom software development Rwanda, IT consulting Kigali, digital transformation Rwanda, technology partner East Africa, CyLaCon Rwanda, IT company Kigali, software development Rwanda, network infrastructure Kigali, enterprise IT solutions Rwanda, business automation Kigali',
  authors: [{ name: 'CyLaCon' }],
  creator: 'CyLaCon',
  publisher: 'CyLaCon',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cylacon.com',
    siteName: 'CyLaCon',
    title: 'CyLaCon | Leading IT Solutions Provider in Rwanda | Web Development, Cybersecurity & Cloud Solutions',
    description: 'Transform your business with CyLaCon\'s innovative IT solutions. Expert web development, cybersecurity, cloud solutions, and custom software development in Rwanda, Kigali, East Africa.',
    images: [
      {
        url: 'https://cylacon.com/assets/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CyLaCon - IT Solutions Provider in Rwanda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cylacon_rw',
    creator: '@cylacon_rw',
    title: 'CyLaCon | Leading IT Solutions Provider in Rwanda',
    description: 'Transform your business with innovative IT solutions. Expert web development, cybersecurity, cloud solutions in Rwanda, East Africa.',
    images: ['https://cylacon.com/assets/blog-twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://cylacon.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function HomePage() {
  return (
    <>
      <FAQStructuredData 
        faqs={itServicesFAQs} 
        pageUrl="https://cylacon.com" 
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Trust Bar */}
        <TrustBar />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Industry Solutions */}
        <IndustrySolutions />
        
        {/* Metrics Section */}
        <MetricsSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>
    </>
  );
}
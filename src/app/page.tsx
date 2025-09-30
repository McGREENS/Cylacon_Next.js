import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustrySolutions from '@/components/sections/IndustrySolutions';
import MetricsSection from '@/components/sections/MetricsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQStructuredData, { itServicesFAQs } from '@/components/seo/FAQStructuredData';
import SectionTransition, { SectionDivider } from '@/components/ui/SectionTransition';

export const metadata: Metadata = {
  title: 'CyLaCon | 1st IT Solutions Provider in Rwanda | Web Development, Cybersecurity & Cloud Solutions Kigali',
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
      <main className="min-h-screen overflow-hidden">
        {/* Hero Section - No transition wrapper needed as it's the first section */}
        <HeroSection />
        
        {/* Smooth Divider */}
        <SectionDivider type="wave" color="text-white" height="h-20" />
        
        {/* Trust Bar with Slide Transition */}
        <SectionTransition variant="slide" direction="up" delay={0.2} duration={1}>
          <TrustBar />
        </SectionTransition>
        
        {/* Curved Divider */}
        <SectionDivider type="curve" color="text-gray-50" height="h-16" />
        
        {/* Services Section with Scale Transition */}
        <SectionTransition variant="scale" delay={0.3} duration={1.2}>
          <ServicesSection />
        </SectionTransition>
        
        {/* Wave Divider */}
        <SectionDivider type="wave" color="text-primary-50" height="h-20" flip={true} />
        
        {/* Industry Solutions with Reveal Transition */}
        <SectionTransition variant="reveal" direction="left" delay={0.1} duration={1.5}>
          <IndustrySolutions />
        </SectionTransition>
        
        {/* Diagonal Divider */}
        <SectionDivider type="diagonal" color="text-slate-100" height="h-24" />
        
        {/* Metrics Section with Wave Transition */}
        <SectionTransition variant="wave" delay={0.4} duration={1.8}>
          <MetricsSection />
        </SectionTransition>
        
        {/* Zigzag Divider */}
        <SectionDivider type="zigzag" color="text-primary-100" height="h-16" />
        
        {/* Testimonials Section with Spiral Transition */}
        <SectionTransition variant="spiral" delay={0.2} duration={2}>
          <TestimonialsSection />
        </SectionTransition>
        
        {/* Final Dots Divider */}
        <SectionDivider type="dots" color="text-primary-500" height="h-12" />
      </main>
    </>
  );
}
import React from 'react';
import { Metadata } from 'next';
import ServiceHero from '@/components/sections/services/ServiceHero';
import EducationOverview from '@/components/sections/solutions/education/EducationOverview';
import EducationSolutions from '@/components/sections/solutions/education/EducationSolutions';
import EdTechSolutions from '@/components/sections/solutions/education/EdTechSolutions';
import EducationCompliance from '@/components/sections/solutions/education/EducationCompliance';
import CallToAction from '@/components/sections/CallToAction';

const educationSolution = {
  name: 'Education IT Solutions',
  slug: 'education',
  description: 'Comprehensive IT solutions designed to transform education delivery and enhance learning outcomes',
  keywords: [
    'education IT solutions Rwanda',
    'school management systems Kigali',
    'educational technology Rwanda',
    'e-learning platforms Rwanda',
    'student information systems Rwanda',
    'digital classroom Rwanda',
    'education software Rwanda',
    'school digitization Rwanda',
    'learning management systems Rwanda',
    'educational apps Rwanda'
  ],
  features: [
    'School Management Systems',
    'Learning Management Platforms',
    'Student Information Systems',
    'Digital Classroom Solutions',
    'E-Learning Platforms',
    'Educational Analytics'
  ],
  benefits: [
    'Enhanced Learning Outcomes',
    'Improved Administration',
    'Better Parent Engagement',
    'Cost Efficiency',
    'Digital Literacy',
    'Data-Driven Decisions'
  ]
};

export const metadata: Metadata = {
  title: 'Education IT Solutions Rwanda | School Management Systems Kigali | EdTech - CyLaCon',
  description: 'Transform education delivery with comprehensive IT solutions for schools and universities in Rwanda. School management systems, e-learning platforms, and educational technology. Call +250780115764.',
  keywords: 'education IT solutions Rwanda, school management systems Kigali, educational technology Rwanda, e-learning platforms Rwanda, student information systems Rwanda, digital classroom Rwanda, education software Rwanda, school digitization Rwanda, learning management systems Rwanda, educational apps Rwanda',
  openGraph: {
    title: 'Education IT Solutions Rwanda | Digital Education Transformation | CyLaCon',
    description: 'Transform education delivery with comprehensive IT solutions designed for Rwanda\'s education sector. Enhance learning outcomes and educational administration.',
    url: 'https://cylacon.com/solutions/education',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Education IT Solutions Rwanda - Digital Education Transformation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education IT Solutions Rwanda | Digital Education Transformation | CyLaCon',
    description: 'Transform education delivery with comprehensive IT solutions designed for Rwanda\'s education sector.',
    images: ['https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/solutions/education',
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

export default function EducationPage() {
  return (
    <>
      {/* Education Solution Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Education IT Solutions",
            "description": "Comprehensive IT solutions for educational institutions including school management systems, e-learning platforms, and educational technology",
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
            "serviceType": "Education IT Solutions and Educational Technology Services",
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
          title="Digital Education Transformation for Rwanda"
          subtitle="Empower educational institutions with innovative IT solutions that enhance learning outcomes, improve administration, and prepare students for the digital future."
          backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          service="Education IT Solutions"
        />
        
        {/* Education Overview */}
        <EducationOverview 
          solution={educationSolution}
        />
        
        {/* Education Solutions */}
        <EducationSolutions />
        
        {/* EdTech Solutions */}
        <EdTechSolutions />
        
        {/* Education Compliance */}
        <EducationCompliance />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

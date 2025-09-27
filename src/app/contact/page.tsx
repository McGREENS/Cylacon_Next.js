import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactInfo from '@/components/sections/contact/ContactInfo';
import OfficeLocation from '@/components/sections/contact/OfficeLocation';

export const metadata: Metadata = {
  title: 'Contact CyLaCon | IT Solutions Rwanda | Get Free Consultation',
  description: 'Contact CyLaCon for expert IT solutions in Rwanda. Get free consultation, request quotes, and connect with our team. Phone: +250 780 115 764 | Email: info@cylacon.com',
  keywords: 'contact CyLaCon, IT consultation Rwanda, IT support Kigali, technology services Rwanda, free IT consultation, CyLaCon office Rwanda, IT company contact',
  openGraph: {
    title: 'Contact CyLaCon | IT Solutions Rwanda | Get Free Consultation',
    description: 'Contact CyLaCon for expert IT solutions in Rwanda. Get free consultation and connect with our ISO 27001 certified team.',
    url: 'https://cylacon.com/contact',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Contact - IT Solutions Rwanda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact CyLaCon | IT Solutions Rwanda | Get Free Consultation',
    description: 'Contact CyLaCon for expert IT solutions in Rwanda. Get free consultation and connect with our team.',
    images: ['https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/contact',
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

export default function ContactPage() {
  return (
    <>
      {/* Contact Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
              "streetAddress": "KG 541 St",
              "addressLocality": "Kigali",
              "addressCountry": "Rwanda"
            },
            "sameAs": [
              "https://linkedin.com/company/cylacon",
              "https://twitter.com/cylacon_rw"
            ],
            "description": "Leading IT solutions provider in Rwanda offering cybersecurity, cloud computing, software development, and digital transformation services.",
            "foundingDate": "2019",
            "numberOfEmployees": "50-100",
            "slogan": "Transforming Businesses Through Innovative IT Solutions"
          })
        }}
      />

      <main className="min-h-screen">
        {/* Contact Hero Section */}
        <ContactHero />
        
        {/* Contact Form */}
        <ContactForm />
        
        {/* Contact Information */}
        <ContactInfo />
        
        {/* Office Location */}
        <OfficeLocation />
      </main>
    </>
  );
}

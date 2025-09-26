import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import MissionVision from '@/components/sections/about/MissionVision';
import CompanyStory from '@/components/sections/about/CompanyStory';
import LeadershipTeam from '@/components/sections/about/LeadershipTeam';
import CompanyStats from '@/components/sections/about/CompanyStats';
import Certifications from '@/components/sections/about/Certifications';
import CallToAction from '@/components/sections/CallToAction';

export const metadata: Metadata = {
  title: 'About CyLaCon | Leading IT Company Rwanda | Our Story, Mission & Team',
  description: 'Learn about CyLaCon, Rwanda\'s leading IT company since 2022. Discover our mission, values, expert team, and how we drive digital transformation across East Africa. Meet our leadership team and explore our journey from startup to regional IT giant.',
  keywords: 'about CyLaCon, IT company Rwanda history, CyLaCon team, Rwanda IT leaders, Laurier HABIYAREMYE, technology company Rwanda, IT consulting team, cybersecurity experts Rwanda, software development team Kigali',
  openGraph: {
    title: 'About CyLaCon | Leading IT Company Rwanda | Our Story, Mission & Team',
    description: 'Learn about CyLaCon, Rwanda\'s leading IT company since 2022. Meet our expert team and discover our mission to transform businesses across East Africa.',
    url: 'https://cylacon.com/about',
    siteName: 'CyLaCon',
    images: [
      {
        url: '/assets/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CyLaCon Team - Leading IT Company in Rwanda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CyLaCon | Leading IT Company Rwanda',
    description: 'Learn about CyLaCon, Rwanda\'s leading IT company since 2022. Meet our expert team and discover our mission.',
    images: ['/assets/about-twitter-image.jpg'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/about',
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

export default function AboutPage() {
  return (
    <>
      {/* About Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About CyLaCon",
            "description": "Learn about CyLaCon, Rwanda's leading IT company since 2022",
            "url": "https://cylacon.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "CyLaCon",
              "foundingDate": "2022",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Laurier HABIYAREMYE",
                  "jobTitle": "CEO & Founder"
                }
              ],
              "numberOfEmployees": "35",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "KG 541 St",
                "addressLocality": "Kigali",
                "addressCountry": "Rwanda"
              },
              "description": "Leading IT company in Rwanda providing cybersecurity, software development, and IT consulting services across East Africa"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <AboutHero />
        
        {/* Company Stats */}
        <CompanyStats />
        
        {/* Mission & Vision */}
        <MissionVision />
        
        {/* Company Story Timeline */}
        <CompanyStory />
        
        {/* Leadership Team */}
        <LeadershipTeam />
        
        {/* Certifications & Partnerships */}
        <Certifications />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}

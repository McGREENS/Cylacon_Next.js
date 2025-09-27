import React from 'react';
import { Metadata } from 'next';
import BlogHero from '@/components/sections/blog/BlogHero';
import FeaturedPosts from '@/components/sections/blog/FeaturedPosts';
import BlogCategories from '@/components/sections/blog/BlogCategories';
import RecentPosts from '@/components/sections/blog/RecentPosts';

export const metadata: Metadata = {
  title: 'IT Insights & Technology Blog Rwanda | CyLaCon Expert Articles',
  description: 'Stay updated with the latest IT trends, technology insights, and digital transformation strategies from CyLaCon\'s expert team. Rwanda\'s leading IT blog for businesses.',
  keywords: 'IT blog Rwanda, technology insights Rwanda, digital transformation blog, cybersecurity articles Rwanda, cloud computing blog, software development Rwanda, IT trends East Africa, technology news Rwanda',
  openGraph: {
    title: 'IT Insights & Technology Blog Rwanda | CyLaCon Expert Articles',
    description: 'Stay updated with the latest IT trends, technology insights, and digital transformation strategies from CyLaCon\'s expert team.',
    url: 'https://cylacon.com/blog',
    siteName: 'CyLaCon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'CyLaCon IT Blog Rwanda - Technology Insights and Expert Articles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Insights & Technology Blog Rwanda | CyLaCon Expert Articles',
    description: 'Stay updated with the latest IT trends and technology insights from CyLaCon\'s expert team.',
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
    creator: '@cylacon_rw',
  },
  alternates: {
    canonical: 'https://cylacon.com/blog',
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

export default function BlogPage() {
  return (
    <>
      {/* Blog Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "CyLaCon IT Blog",
            "description": "Expert insights on IT solutions, digital transformation, and technology trends in Rwanda and East Africa",
            "url": "https://cylacon.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "CyLaCon",
              "url": "https://cylacon.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cylacon.com/logo.png"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "KG 541 St",
                "addressLocality": "Kigali",
                "addressCountry": "Rwanda"
              },
              "telephone": "+250780115764"
            },
            "inLanguage": "en-US",
            "keywords": ["IT solutions", "digital transformation", "cybersecurity", "cloud computing", "Rwanda technology"]
          })
        }}
      />

      <main className="min-h-screen">
        {/* Blog Hero Section */}
        <BlogHero />
        
        {/* Featured Posts */}
        <FeaturedPosts />
        
        {/* Blog Categories */}
        <BlogCategories />
        
        {/* Recent Posts */}
        <RecentPosts />
      </main>
    </>
  );
}

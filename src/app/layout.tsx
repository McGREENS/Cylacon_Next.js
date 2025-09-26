import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { seoConfig, generateStructuredData } from '@/lib/seo-config';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CyLaCon | Leading IT Solutions Provider in Rwanda',
    template: '%s | CyLaCon',
  },
  description: 'Transform your business with CyLaCon\'s innovative IT solutions. Expert web development, cybersecurity, cloud solutions, and custom software development in Rwanda, Kigali, East Africa.',
  keywords: [
    ...seoConfig.keywords.primary,
    ...seoConfig.keywords.services,
    ...seoConfig.keywords.location,
    ...seoConfig.keywords.industry,
    'enterprise software Rwanda',
    'mobile app development Kigali',
    'IT support East Africa',
    'business automation Rwanda',
    'digital innovation Kigali',
    'technology consulting Rwanda',
    'software company Rwanda',
    'web design Kigali',
    'database development Rwanda',
    'system integration East Africa',
    'IT infrastructure Kigali'
  ],
  authors: [{ name: 'CyLaCon', url: 'https://cylacon.com' }],
  creator: 'CyLaCon',
  publisher: 'CyLaCon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cylacon.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cylacon.com',
    siteName: 'CyLaCon',
    title: 'CyLaCon | Leading IT Solutions Provider in Rwanda',
    description: 'Transform your business with CyLaCon\'s innovative IT solutions. Expert web development, cybersecurity, cloud solutions, and custom software development in Rwanda, Kigali, East Africa.',
    images: [
      {
        url: '/assets/blog-og-image.jpg',
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
    images: ['/assets/blog-twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00B255" />
        <meta name="msapplication-TileColor" content="#00B255" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CyLaCon" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="RW" />
        <meta name="geo.placename" content="Kigali, Rwanda" />
        <meta name="geo.position" content="-1.9441;30.0619" />
        <meta name="ICBM" content="-1.9441, 30.0619" />
        
        {/* Language and Revisit */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData('organization'))
          }}
        />
        
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": seoConfig.company.name,
              "image": seoConfig.company.logo,
              "description": seoConfig.company.description,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": seoConfig.company.address.street,
                "addressLocality": seoConfig.company.address.city,
                "addressCountry": seoConfig.company.address.country,
                "postalCode": seoConfig.company.address.postalCode
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": seoConfig.localSEO.coordinates.latitude,
                "longitude": seoConfig.localSEO.coordinates.longitude
              },
              "url": seoConfig.company.url,
              "telephone": seoConfig.company.phone,
              "email": seoConfig.company.email,
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "13:00"
                }
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "currenciesAccepted": "RWF, USD"
            })
          }}
        />
        
        {/* Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": seoConfig.company.name,
              "url": seoConfig.company.url,
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://cylacon.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
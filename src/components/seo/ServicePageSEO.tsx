import { Metadata } from 'next';
import { seoConfig } from '@/lib/seo-config';

interface ServicePageSEOProps {
  service: {
    name: string;
    slug: string;
    description: string;
    keywords: string[];
    features?: string[];
    benefits?: string[];
  };
}

export function generateServiceMetadata(service: ServicePageSEOProps['service']): Metadata {
  const title = `${service.name} Services in Rwanda | CyLaCon IT Solutions`;
  const description = `Professional ${service.name.toLowerCase()} services in Rwanda and East Africa. ${service.description} Contact CyLaCon for expert IT solutions in Kigali.`;
  
  return {
    title,
    description,
    keywords: [
      ...service.keywords,
      `${service.name.toLowerCase()} Rwanda`,
      `${service.name.toLowerCase()} Kigali`,
      `${service.name.toLowerCase()} East Africa`,
      'CyLaCon',
      'IT solutions Rwanda'
    ],
    openGraph: {
      title,
      description,
      url: `https://cylacon.com/services/${service.slug}`,
      siteName: 'CyLaCon',
      images: [
        {
          url: `/assets/services/${service.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} Services by CyLaCon`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/assets/services/${service.slug}-twitter.jpg`],
      creator: '@cylacon_rw',
    },
    alternates: {
      canonical: `https://cylacon.com/services/${service.slug}`,
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
}

export function generateServiceStructuredData(service: ServicePageSEOProps['service']) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": seoConfig.company.name,
      "url": seoConfig.company.url,
      "logo": seoConfig.company.logo,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.company.address.street,
        "addressLocality": seoConfig.company.address.city,
        "addressCountry": seoConfig.company.address.country,
        "postalCode": seoConfig.company.address.postalCode
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": seoConfig.company.phone,
        "email": seoConfig.company.email,
        "contactType": "customer service"
      }
    },
    "areaServed": seoConfig.serviceAreas.map(area => ({
      "@type": area === 'Rwanda' ? "Country" : "City",
      "name": area
    })),
    "serviceType": service.name,
    "url": `https://cylacon.com/services/${service.slug}`,
    "offers": {
      "@type": "Offer",
      "description": `Professional ${service.name} services`,
      "priceRange": "$$",
      "availability": "https://schema.org/InStock"
    }
  };
}

interface ServicePageSEOComponentProps extends ServicePageSEOProps {
  children?: React.ReactNode;
}

export default function ServicePageSEO({ service, children }: ServicePageSEOComponentProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceStructuredData(service))
        }}
      />
      {children}
    </>
  );
}

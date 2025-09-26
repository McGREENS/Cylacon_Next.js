import { Metadata } from 'next';
import { seoConfig } from '@/lib/seo-config';

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified?: string;
  tags: string[];
  category: string;
  readingTime?: number;
  featuredImage?: string;
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  const title = `${post.title} | CyLaCon IT Blog`;
  const description = post.description || `${post.content.substring(0, 155)}...`;
  
  return {
    title,
    description,
    keywords: [
      ...post.tags,
      'IT blog Rwanda',
      'technology insights',
      'CyLaCon blog',
      'Rwanda tech news',
      'IT solutions blog'
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title,
      description,
      url: `https://cylacon.com/blog/${post.slug}`,
      siteName: 'CyLaCon',
      images: [
        {
          url: post.featuredImage || `/assets/blog/${post.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.lastModified || post.publishDate,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.featuredImage || `/assets/blog/${post.slug}-twitter.jpg`],
      creator: '@cylacon_rw',
    },
    alternates: {
      canonical: `https://cylacon.com/blog/${post.slug}`,
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

export function generateBlogStructuredData(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.featuredImage || `/assets/blog/${post.slug}-featured.jpg`,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": `https://cylacon.com/team/${post.author.toLowerCase().replace(' ', '-')}`
    },
    "publisher": {
      "@type": "Organization",
      "name": seoConfig.company.name,
      "logo": {
        "@type": "ImageObject",
        "url": seoConfig.company.logo
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.lastModified || post.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cylacon.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(', '),
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${post.readingTime || Math.ceil(post.content.split(' ').length / 200)}M`,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "Blog",
      "@id": "https://cylacon.com/blog",
      "name": "CyLaCon IT Blog",
      "description": "Latest insights on IT solutions, cybersecurity, and technology trends in Rwanda and East Africa"
    }
  };
}

interface BlogSEOProps {
  post: BlogPost;
  children?: React.ReactNode;
}

export default function BlogSEO({ post, children }: BlogSEOProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogStructuredData(post))
        }}
      />
      {children}
    </>
  );
}

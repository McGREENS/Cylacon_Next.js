interface FAQ {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQ[];
  pageUrl?: string;
}

export const itServicesFAQs: FAQ[] = [
  {
    question: "What IT services does CyLaCon provide in Rwanda?",
    answer: "CyLaCon provides comprehensive IT services including web development, cybersecurity solutions, cloud hosting, custom software development, network infrastructure, IT consulting, and digital transformation services across Rwanda and East Africa."
  },
  {
    question: "Is CyLaCon ISO 27001 certified?",
    answer: "Yes, CyLaCon is ISO 27001 certified, ensuring the highest standards of information security management for all our clients' data and systems."
  },
  {
    question: "Does CyLaCon serve clients outside Rwanda?",
    answer: "Yes, CyLaCon serves clients across East Africa including Rwanda, Uganda, Tanzania, Kenya, Burundi, and the Democratic Republic of Congo, with our headquarters in Kigali, Rwanda."
  },
  {
    question: "What programming languages and technologies does CyLaCon use?",
    answer: "CyLaCon works with modern technologies including React, Next.js, Node.js, Python, PHP, Java, .NET, cloud platforms (AWS, Azure, Google Cloud), and various databases to deliver cutting-edge solutions."
  },
  {
    question: "How can I get a free consultation from CyLaCon?",
    answer: "You can get a free consultation by calling +250780115764, emailing info@cylacon.com, or visiting our office at KG 541 St, Kigali, Rwanda. We offer comprehensive assessments of your IT needs."
  },
  {
    question: "What industries does CyLaCon serve?",
    answer: "CyLaCon serves various industries including healthcare, education, finance, government, NGOs, retail, manufacturing, and startups across Rwanda and East Africa."
  },
  {
    question: "Does CyLaCon provide 24/7 IT support?",
    answer: "Yes, CyLaCon offers 24/7 IT support and monitoring services to ensure your systems are always running smoothly with 99.9% uptime guarantee."
  },
  {
    question: "What cybersecurity services does CyLaCon offer?",
    answer: "CyLaCon offers comprehensive cybersecurity services including security audits, penetration testing, firewall configuration, antivirus solutions, data backup and recovery, and ISO 27001 compliance consulting."
  },
  {
    question: "Can CyLaCon help with digital transformation?",
    answer: "Yes, CyLaCon specializes in digital transformation, helping businesses modernize their operations through custom software, cloud migration, process automation, and strategic IT planning."
  },
  {
    question: "What is CyLaCon's project delivery timeline?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, custom software 2-6 months, and enterprise solutions 6-12 months. We provide detailed project timelines during consultation."
  }
];

export function generateFAQStructuredData(faqs: FAQ[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    ...(pageUrl && { "url": pageUrl })
  };
}

export default function FAQStructuredData({ faqs, pageUrl }: FAQStructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateFAQStructuredData(faqs, pageUrl))
      }}
    />
  );
}

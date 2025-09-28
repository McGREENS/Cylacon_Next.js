'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Code, 
  Palette, 
  Search, 
  Shield, 
  Zap,
  Smartphone,
  Globe,
  Database,
  Settings
} from 'lucide-react';

interface ServiceFeaturesProps {
  service: {
    name: string;
    features: string[];
  };
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ service }) => {
  const webDevCapabilities = [
    {
      category: 'Frontend Development',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      features: [
        'React & Next.js Applications',
        'Vue.js & Angular Development',
        'Responsive CSS & Tailwind',
        'Interactive UI/UX Design',
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)'
      ]
    },
    {
      category: 'Backend Development',
      icon: <Database className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      features: [
        'Node.js & Express.js APIs',
        'PHP & Laravel Development',
        'Python & Django Solutions',
        'Database Design & Management',
        'RESTful API Development',
        'GraphQL Implementation'
      ]
    },
    {
      category: 'E-commerce Solutions',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      features: [
        'Custom Online Stores',
        'Payment Gateway Integration',
        'Inventory Management Systems',
        'Multi-vendor Marketplaces',
        'Mobile Commerce Apps',
        'B2B & B2C Platforms'
      ]
    },
    {
      category: 'Performance & Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      features: [
        'SSL Certificate Implementation',
        'Security Audits & Testing',
        'Performance Optimization',
        'CDN Integration',
        'Backup & Recovery Systems',
        'GDPR Compliance'
      ]
    }
  ];

  const technicalSpecs = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile-First Design',
      description: 'Every website we build is designed mobile-first, ensuring perfect performance on smartphones and tablets.'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help your website rank higher in Google and attract more customers.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with advanced caching, image optimization, and efficient code structure.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Easy Management',
      description: 'User-friendly content management systems that allow you to update your website easily.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Web Development <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple business websites to complex web applications, we have the expertise 
            to bring your digital vision to life with cutting-edge technology.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {webDevCapabilities.map((capability, index) => (
            <motion.div
              key={capability.category}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary-200"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${capability.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{capability.category}</h3>
              </div>

              <div className="space-y-3">
                {capability.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Success in Rwanda's <span className="gradient-text">Digital Market</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every website we develop is optimized for the Rwandan market, with features 
              that matter most to local businesses and their customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {spec.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{spec.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Industries We Serve in <span className="gradient-text">Rwanda</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Healthcare', 'Education', 'Government', 'NGOs', 'Retail', 'Manufacturing',
              'Hospitality', 'Finance', 'Agriculture', 'Technology', 'Real Estate', 'Tourism'
            ].map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-200"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFeatures;

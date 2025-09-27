'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Monitor,
  Zap,
  BarChart3,
  CheckCircle,
  Store,
  Database,
  Smartphone,
  Globe,
  CreditCard
} from 'lucide-react';

interface RetailOverviewProps {
  solution: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const RetailOverview: React.FC<RetailOverviewProps> = ({ solution }) => {
  const retailServices = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Point of Sale (POS) Systems',
      description: 'Modern POS systems with integrated payment processing, inventory tracking, and customer management.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking, automated reordering, and comprehensive stock management solutions.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'E-commerce Platforms',
      description: 'Custom e-commerce websites and mobile apps for online retail and omnichannel experiences.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Relationship Management',
      description: 'CRM systems to manage customer data, loyalty programs, and personalized marketing campaigns.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Retail Analytics & Reporting',
      description: 'Business intelligence tools for sales analysis, customer insights, and performance tracking.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Retail Solutions',
      description: 'Mobile POS systems, retail apps, and mobile payment solutions for modern retail operations.'
    }
  ];

  const retailBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Increased Sales Revenue',
      description: 'Boost sales through better customer experience and efficient operations.',
      stat: '25% Increase'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Enhanced Customer Experience',
      description: 'Improved customer satisfaction through personalized service and faster checkout.',
      stat: '40% Satisfaction'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Better Inventory Control',
      description: 'Reduced stockouts and overstock through real-time inventory management.',
      stat: '30% Efficiency'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Operational Efficiency',
      description: 'Streamlined processes and automated workflows for better productivity.',
      stat: '50% Faster'
    }
  ];

  const rwandaRetailStats = [
    { number: '85%', label: 'Retail Growth', description: 'Annual growth in Rwanda\'s retail sector' },
    { number: '70%', label: 'Digital Adoption', description: 'Retailers adopting digital solutions' },
    { number: '200+', label: 'Retail Businesses', description: 'Successfully digitized by CyLaCon' },
    { number: '24/7', label: 'System Uptime', description: 'Reliable retail system availability' }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Transforming Retail Business in Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.description}. We help retail businesses across Rwanda leverage technology 
            to enhance customer experiences, optimize operations, and drive sustainable growth in the digital economy.
          </p>
        </motion.div>

        {/* Rwanda Retail Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <div className="text-center mb-8">
            <Store className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rwanda's Retail Sector Transformation
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Rwanda's retail sector is experiencing rapid growth and digital transformation. 
              From traditional markets to modern shopping centers, technology is reshaping how businesses serve customers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rwandaRetailStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Retail Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            Comprehensive Retail IT Solutions
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Retail Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CyLaCon for Retail IT?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our retail IT solutions are designed specifically for Rwanda's retail landscape, 
              ensuring compatibility with local payment systems and alignment with business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <div className="text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Retail Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Retail Technology Stack</h3>
            <p className="text-blue-100 text-lg">
              We implement retail IT solutions using modern technologies and 
              industry standards to ensure scalability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'Shopify Plus', 'WooCommerce', 'Magento', 'Square POS', 'Stripe', 'PayPal',
              'Salesforce', 'HubSpot', 'Mailchimp', 'Google Analytics', 'Facebook Pixel', 'WhatsApp Business'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-colors duration-200"
              >
                <div className="text-sm font-medium">{tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RetailOverview;

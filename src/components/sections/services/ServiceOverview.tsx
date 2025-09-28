'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Zap, 
  Shield,
  Search,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';

interface ServiceOverviewProps {
  service: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({ service }) => {
  const webDevFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Responsive Design',
      description: 'Mobile-first websites that work perfectly on all devices and screen sizes.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Custom Web Applications',
      description: 'Tailored web solutions built specifically for your business requirements.'
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Content Management Systems',
      description: 'Easy-to-use CMS platforms for managing your website content independently.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Progressive Web Apps',
      description: 'Fast, reliable web applications that work offline and feel like native apps.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Performance',
      description: 'Built with security best practices and optimized for lightning-fast performance.'
    }
  ];

  const benefits = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Enhanced Online Presence',
      description: 'Professional websites that represent your brand and attract customers.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Improved User Experience',
      description: 'Intuitive interfaces that keep visitors engaged and convert them to customers.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Business Growth',
      description: 'Scalable solutions that grow with your business and support expansion.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Fast Development',
      description: 'Efficient development process with regular updates and timely delivery.'
    }
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
            Professional <span className="gradient-text">Web Development</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}. We combine cutting-edge technology with creative design 
            to deliver websites that not only look great but perform exceptionally.
          </p>
        </motion.div>

        {/* Service Features */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            What We <span className="gradient-text">Offer</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-primary-200"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">CyLaCon</span> for Web Development?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We don't just build websites - we create digital experiences that drive business results 
              and help you stand out in Rwanda's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors duration-300">
                  <div className="text-secondary-600 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Web Development <span className="text-primary-200">Track Record</span></h3>
            <p className="text-primary-100 text-lg">
              Trusted by businesses across Rwanda and East Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-200">Websites Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview;

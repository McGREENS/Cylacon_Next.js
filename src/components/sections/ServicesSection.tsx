'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Cloud, 
  Code, 
  Network, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ServicesSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive design, e-commerce, PWAs',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps', 'Custom CMS'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      href: '/services/web-development'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Threat intelligence, penetration testing',
      features: ['Security Audits', 'Penetration Testing', 'Threat Intelligence', 'Compliance'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500',
      href: '/services/cybersecurity'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'AWS/Azure migration, hybrid cloud',
      features: ['Cloud Migration', 'Hybrid Cloud', 'DevOps', 'Auto-scaling'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
      href: '/services/cloud-solutions'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Enterprise apps, mobile apps, integration',
      features: ['Enterprise Apps', 'Mobile Development', 'API Integration', 'Custom Solutions'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
      href: '/services/custom-software'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'SD-WAN, wireless networks, security',
      features: ['SD-WAN Solutions', 'Wireless Networks', 'Network Security', 'Monitoring'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
      href: '/services/network-infrastructure'
    },
    {
      icon: Users,
      title: 'IT Consultation',
      description: 'Digital transformation, roadmaps',
      features: ['Digital Strategy', 'Technology Roadmaps', 'Process Optimization', 'Training'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-500',
      href: '/services/consulting'
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business and 
            drive measurable results across all industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <Card
                className={`h-full p-8 transition-all duration-300 ${
                  hoveredService === index ? 'shadow-2xl scale-105' : ''
                }`}
                hover={false}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center`}
                  >
                    {React.createElement(service.icon, { 
                      className: `w-8 h-8 ${service.iconColor}` 
                    })}
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredService === index ? 1 : 0,
                        height: hoveredService === index ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 overflow-hidden"
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: hoveredService === index ? 1 : 0,
                            x: hoveredService === index ? 0 : -20
                          }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-primary-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="pt-4"
                  >
                    <Button
                      variant="ghost"
                      href={service.href}
                      className="group w-full justify-between"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team specializes in creating tailored IT solutions that perfectly 
              match your business requirements and industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/consultation">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

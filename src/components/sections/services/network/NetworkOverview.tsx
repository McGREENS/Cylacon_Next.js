'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Wifi, 
  Shield, 
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Settings,
  Globe,
  Server,
  Monitor,
  Router
} from 'lucide-react';

interface NetworkOverviewProps {
  service: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const NetworkOverview: React.FC<NetworkOverviewProps> = ({ service }) => {
  const networkServices = [
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Network Design & Planning',
      description: 'Comprehensive network architecture design tailored to your business requirements and growth plans.'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Infrastructure Installation',
      description: 'Professional installation of network equipment, cabling, and infrastructure components.'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Wireless Solutions',
      description: 'Enterprise-grade wireless networks with seamless coverage and high-performance connectivity.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Network Security',
      description: 'Advanced security measures to protect your network from threats and unauthorized access.'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Network Monitoring',
      description: '24/7 network monitoring and management to ensure optimal performance and uptime.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your network running smoothly.'
    }
  ];

  const networkBenefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'High Performance',
      description: 'Optimized network performance for fast data transfer and minimal latency.',
      stat: '99.9% Uptime'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enhanced Security',
      description: 'Multi-layered security protection against cyber threats and data breaches.',
      stat: 'Bank-Grade Security'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Scalable Growth',
      description: 'Network infrastructure that grows with your business needs.',
      stat: 'Future-Ready'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Support',
      description: 'Professional support from certified network engineers.',
      stat: '24/7 Support'
    }
  ];

  const rwandaNetworkStats = [
    { number: '85%', label: 'Businesses Need Better Networks', description: 'In Rwanda (2024)' },
    { number: '60%', label: 'Productivity Increase', description: 'With proper network infrastructure' },
    { number: '99.9%', label: 'Network Uptime', description: 'Our service guarantee' },
    { number: '24/7', label: 'Monitoring & Support', description: 'Continuous network management' }
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
            Professional Network Infrastructure for Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}. We design, install, and manage enterprise-grade network 
            infrastructure that supports Rwanda's growing digital economy and business transformation.
          </p>
        </motion.div>

        {/* Rwanda Network Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <div className="text-center mb-8">
            <Network className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rwanda's Network Infrastructure Transformation
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As Rwanda becomes a digital hub in East Africa, businesses need robust network 
              infrastructure to support growth, innovation, and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rwandaNetworkStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Network Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            Comprehensive Network Infrastructure Services
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Network Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CyLaCon for Network Infrastructure?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our certified network engineers bring years of experience and industry best practices 
              to deliver network solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkBenefits.map((benefit, index) => (
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
                <div className="text-2xl font-bold text-primary-600 mb-2">{benefit.stat}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Network Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Enterprise Network Technologies</h3>
            <p className="text-primary-100 text-lg">
              We work with leading network technology brands to deliver reliable, 
              high-performance infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'Cisco', 'HP Enterprise', 'Ubiquiti', 'Fortinet', 'Juniper', 'Aruba',
              'Dell EMC', 'Mikrotik', 'Ruckus', 'Meraki', 'SonicWall', 'Palo Alto'
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

export default NetworkOverview;

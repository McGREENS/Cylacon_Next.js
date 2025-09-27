'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Globe, 
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  FileText,
  Monitor,
  Database,
  Smartphone,
  Award
} from 'lucide-react';

interface GovernmentOverviewProps {
  solution: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const GovernmentOverview: React.FC<GovernmentOverviewProps> = ({ solution }) => {
  const governmentServices = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'E-Government Platforms',
      description: 'Comprehensive digital platforms for delivering government services online to citizens and businesses.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Citizen Service Portals',
      description: 'User-friendly online portals enabling citizens to access government services 24/7 from anywhere.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Digital Identity Systems',
      description: 'Secure digital identity management systems for citizens, businesses, and government employees.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Government Data Management',
      description: 'Centralized data management systems for efficient storage, processing, and sharing of government data.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Government Services',
      description: 'Mobile applications and SMS-based services for accessing government services on mobile devices.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Government Security Systems',
      description: 'Advanced cybersecurity solutions to protect government data and critical infrastructure.'
    }
  ];

  const governmentBenefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Better Citizen Services',
      description: 'Improved service delivery with faster processing and 24/7 availability.',
      stat: '80% Faster'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Operational Efficiency',
      description: 'Streamlined government processes and reduced administrative burden.',
      stat: '60% Efficient'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enhanced Transparency',
      description: 'Improved transparency and accountability in government operations.',
      stat: '100% Transparent'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Cost Reduction',
      description: 'Significant cost savings through process automation and digitization.',
      stat: '40% Savings'
    }
  ];

  const rwandaGovStats = [
    { number: '90%', label: 'Government Services', description: 'To be digitized by 2030 (Vision 2050)' },
    { number: '75%', label: 'Citizen Satisfaction', description: 'Increase with digital services' },
    { number: '25+', label: 'Government Agencies', description: 'Successfully digitized by CyLaCon' },
    { number: '24/7', label: 'Service Availability', description: 'Round-the-clock government services' }
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
            Transforming Government Services in Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.description}. We help government agencies across Rwanda leverage technology 
            to improve citizen services, enhance transparency, and achieve the goals of Vision 2050.
          </p>
        </motion.div>

        {/* Rwanda Government Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <div className="text-center mb-8">
            <Building className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rwanda's Digital Government Vision
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As Rwanda pursues its Vision 2050 to become a high-income country, digital transformation 
              of government services is crucial for improving citizen experience and achieving sustainable development goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rwandaGovStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Government Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            Comprehensive Government IT Solutions
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentServices.map((service, index) => (
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

        {/* Government Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CyLaCon for Government IT?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our government IT solutions are designed specifically for Rwanda's public sector, 
              ensuring compliance with local regulations and alignment with national development goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governmentBenefits.map((benefit, index) => (
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

        {/* Government Technology Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Government Technology Standards</h3>
            <p className="text-blue-100 text-lg">
              We implement government IT solutions using international standards and 
              best practices to ensure interoperability, security, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'ISO 27001', 'NIST Framework', 'GDPR Compliant', 'Open Standards', 'Cloud Security', 'Data Protection',
              'API Standards', 'Accessibility', 'Interoperability', 'Digital Identity', 'E-Signature', 'Blockchain'
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

export default GovernmentOverview;

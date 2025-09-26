'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  Zap,
  Globe,
  Settings
} from 'lucide-react';

interface ConsultingOverviewProps {
  service: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const ConsultingOverview: React.FC<ConsultingOverviewProps> = ({ service }) => {
  const consultingServices = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'IT Strategy Development',
      description: 'Comprehensive technology strategies aligned with your business objectives and growth plans.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation initiatives and technology adoption.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Technology Assessment',
      description: 'Evaluate your current technology landscape and identify opportunities for improvement.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'System Architecture',
      description: 'Design scalable and efficient technology architectures for your business needs.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Vendor Selection',
      description: 'Expert guidance in selecting the right technology vendors and solutions for your business.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Assessment',
      description: 'Identify and mitigate technology risks to protect your business operations.'
    }
  ];

  const whyConsulting = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Expert Guidance',
      description: 'Leverage our deep technology expertise to make informed decisions.',
      stat: '15+ Years'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Cost Optimization',
      description: 'Optimize your technology investments and reduce operational costs.',
      stat: '30% Savings'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Strategic Alignment',
      description: 'Ensure your technology strategy supports your business goals.',
      stat: '100% Aligned'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Competitive Edge',
      description: 'Stay ahead of competitors with innovative technology solutions.',
      stat: 'Market Leader'
    }
  ];

  const rwandaContext = [
    { number: '70%', label: 'Digital Adoption Growth', description: 'In Rwanda businesses (2023-2024)' },
    { number: '85%', label: 'Need IT Strategy', description: 'SMEs require technology guidance' },
    { number: '60%', label: 'Cost Reduction', description: 'With proper IT consulting' },
    { number: '24/7', label: 'Expert Support', description: 'Ongoing advisory services' }
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
            Strategic IT Consulting for Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}. We help businesses across Rwanda and East Africa navigate 
            the complex technology landscape and make strategic decisions that drive growth.
          </p>
        </motion.div>

        {/* Rwanda Digital Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <div className="text-center mb-8">
            <Globe className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rwanda's Digital Transformation Opportunity
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As Rwanda positions itself as a digital hub in East Africa, businesses need strategic 
              IT guidance to capitalize on emerging opportunities and stay competitive.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rwandaContext.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Consulting Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            How We Can Guide Your Technology Journey
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
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

        {/* Why Choose Our Consulting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CyLaCon for IT Consulting?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our ISO 27001 certified consultants bring deep technical expertise and local market 
              knowledge to help you make the right technology decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyConsulting.map((benefit, index) => (
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

        {/* Consulting Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Consulting Approach</h3>
            <p className="text-primary-100 text-lg">
              We combine global best practices with local market insights to deliver 
              consulting services that truly understand your business context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Strategic Thinking</h4>
              <p className="text-primary-100 text-sm">
                Long-term technology vision aligned with business objectives
              </p>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Collaborative Partnership</h4>
              <p className="text-primary-100 text-sm">
                Work closely with your team to ensure successful implementation
              </p>
            </div>

            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Results-Focused</h4>
              <p className="text-primary-100 text-sm">
                Measurable outcomes that deliver real business value
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingOverview;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target,
  TrendingUp,
  Shield,
  DollarSign,
  Clock,
  Users,
  Lightbulb,
  BarChart3,
  CheckCircle
} from 'lucide-react';

const ConsultationBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Assessment',
      description: 'Comprehensive evaluation of your current IT infrastructure, identifying strengths, weaknesses, and opportunities for improvement.',
      features: [
        'Current system analysis',
        'Gap identification',
        'Risk assessment',
        'Performance evaluation'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth Planning',
      description: 'Technology roadmap aligned with your business goals, ensuring scalable solutions that grow with your company.',
      features: [
        'Scalability planning',
        'Future-proofing strategies',
        'Growth projections',
        'Technology evolution path'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Enhancement',
      description: 'Identify security vulnerabilities and receive recommendations for protecting your business from cyber threats.',
      features: [
        'Security audit',
        'Vulnerability assessment',
        'Compliance guidance',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Cost Optimization',
      description: 'Discover opportunities to reduce IT costs while improving efficiency and performance across your organization.',
      features: [
        'Cost analysis',
        'ROI projections',
        'Budget optimization',
        'Resource allocation'
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation Opportunities',
      description: 'Explore cutting-edge technologies and innovative solutions that can give your business a competitive advantage.',
      features: [
        'Technology trends analysis',
        'Innovation roadmap',
        'Competitive advantages',
        'Digital transformation'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Performance Metrics',
      description: 'Establish KPIs and measurement frameworks to track the success of your technology investments.',
      features: [
        'KPI definition',
        'Performance benchmarks',
        'Success metrics',
        'Progress tracking'
      ]
    }
  ];

  const consultationValue = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Save Time',
      description: 'Avoid costly mistakes and accelerate your technology initiatives with expert guidance.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Reduce Costs',
      description: 'Identify cost-saving opportunities and optimize your technology investments.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Knowledge',
      description: 'Access to experienced professionals with deep industry knowledge.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Mitigation',
      description: 'Identify and address potential risks before they become costly problems.'
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
            Why Choose Our <span className="text-primary-600">IT Consultation</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive consultation process delivers actionable insights and strategic recommendations 
            tailored to your business needs and objectives.
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-primary-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>
              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The Value of Professional IT Consultation
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Investing in professional IT consultation can save you time, money, and resources 
              while positioning your business for long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationValue.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm opacity-90">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Free Consultation
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '100%', label: 'Free Assessment' },
            { number: '60min', label: 'Consultation Duration' },
            { number: '24hrs', label: 'Report Delivery' },
            { number: '0', label: 'Obligations' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationBenefits;

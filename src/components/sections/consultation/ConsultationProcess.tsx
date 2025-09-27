'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  MessageSquare,
  Search,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Lightbulb
} from 'lucide-react';

const ConsultationProcess: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      icon: <Calendar className="w-8 h-8" />,
      title: 'Schedule Your Session',
      description: 'Book a convenient time for your free consultation through our online form.',
      details: [
        'Choose your preferred date and time',
        'Select consultation type',
        'Provide basic company information',
        'Receive confirmation within 24 hours'
      ],
      duration: '5 minutes'
    },
    {
      step: 2,
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Initial Discovery Call',
      description: 'We conduct a detailed discussion about your business needs and current challenges.',
      details: [
        'Understand your business objectives',
        'Identify current IT pain points',
        'Discuss your technology goals',
        'Clarify project scope and requirements'
      ],
      duration: '30-45 minutes'
    },
    {
      step: 3,
      icon: <Search className="w-8 h-8" />,
      title: 'Technical Assessment',
      description: 'Our experts analyze your current IT infrastructure and identify improvement opportunities.',
      details: [
        'Review existing systems and processes',
        'Evaluate security posture',
        'Assess scalability and performance',
        'Identify integration opportunities'
      ],
      duration: '1-2 hours'
    },
    {
      step: 4,
      icon: <FileText className="w-8 h-8" />,
      title: 'Recommendations Report',
      description: 'Receive a comprehensive report with actionable recommendations and strategic insights.',
      details: [
        'Detailed findings and analysis',
        'Prioritized recommendations',
        'Implementation roadmap',
        'Cost-benefit analysis'
      ],
      duration: '24-48 hours'
    },
    {
      step: 5,
      icon: <Users className="w-8 h-8" />,
      title: 'Results Presentation',
      description: 'We present our findings and recommendations in a follow-up meeting.',
      details: [
        'Walk through the report findings',
        'Explain recommended solutions',
        'Answer your questions',
        'Discuss next steps (optional)'
      ],
      duration: '30 minutes'
    }
  ];

  const whatToExpect = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Tailored Assessment',
      description: 'Every consultation is customized to your specific industry, company size, and business objectives.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Expert Insights',
      description: 'Benefit from our team\'s extensive experience across various industries and technology domains.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Actionable Recommendations',
      description: 'Receive practical, implementable solutions with clear priorities and expected outcomes.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'No Time Wasted',
      description: 'Focused sessions designed to maximize value and provide immediate insights for your business.'
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
            Our <span className="text-primary-600">Consultation Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to understanding your needs and delivering valuable insights 
            that drive your business forward.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <div className="flex items-center text-sm text-primary-600 mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Icon */}
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What to Expect from Your Consultation
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our consultation process is designed to provide maximum value while respecting your time and business priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {whatToExpect.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-primary-50 rounded-2xl p-6 border border-primary-200"
          >
            <h4 className="text-lg font-semibold text-primary-900 mb-4 text-center">
              Complete Process Timeline
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-primary-700">Booking: 5 minutes</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary-400" />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-primary-700">Discovery: 45 minutes</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary-400" />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-primary-700">Assessment: 1-2 hours</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary-400" />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-primary-700">Report: 24-48 hours</span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary-400" />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-primary-700">Presentation: 30 minutes</span>
              </div>
            </div>
            <p className="text-center text-primary-700 mt-4 text-sm">
              <strong>Total time investment:</strong> Approximately 2-3 hours spread over 3-5 days
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8"
          >
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 group"
            >
              Start Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationProcess;

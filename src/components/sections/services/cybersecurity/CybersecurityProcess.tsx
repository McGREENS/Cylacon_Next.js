'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Shield, 
  Settings, 
  Eye, 
  Headphones,
  CheckCircle,
  Clock,
  Users,
  AlertTriangle
} from 'lucide-react';

const CybersecurityProcess: React.FC = () => {
  const securityProcess = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture, identifying vulnerabilities and risks across all systems.',
      icon: <Search className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: [
        'Security risk assessment report',
        'Vulnerability scan results',
        'Compliance gap analysis',
        'Risk prioritization matrix'
      ],
      activities: [
        'Network security scanning',
        'Application security testing',
        'Policy and procedure review',
        'Staff security awareness evaluation'
      ]
    },
    {
      step: '02',
      title: 'Security Strategy & Planning',
      description: 'Development of a comprehensive cybersecurity strategy aligned with your business objectives and risk tolerance.',
      icon: <FileText className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: [
        'Cybersecurity strategy document',
        'Implementation roadmap',
        'Budget and resource planning',
        'Security policy framework'
      ],
      activities: [
        'Risk analysis and treatment planning',
        'Security architecture design',
        'Compliance requirements mapping',
        'Business impact assessment'
      ]
    },
    {
      step: '03',
      title: 'Security Implementation',
      description: 'Deployment of security controls, tools, and processes based on the approved strategy and best practices.',
      icon: <Shield className="w-8 h-8" />,
      duration: '4-8 weeks',
      deliverables: [
        'Security controls deployment',
        'Network security configuration',
        'Endpoint protection setup',
        'Access control implementation'
      ],
      activities: [
        'Firewall and IDS configuration',
        'Antivirus and anti-malware deployment',
        'User access management setup',
        'Data encryption implementation'
      ]
    },
    {
      step: '04',
      title: 'Security Configuration',
      description: 'Fine-tuning and optimization of security systems to ensure maximum protection with minimal business disruption.',
      icon: <Settings className="w-8 h-8" />,
      duration: '2-3 weeks',
      deliverables: [
        'Optimized security configurations',
        'Custom security rules',
        'Integration testing results',
        'Performance optimization report'
      ],
      activities: [
        'Security tool integration',
        'Custom rule development',
        'Performance testing',
        'User acceptance testing'
      ]
    },
    {
      step: '05',
      title: 'Monitoring & Detection',
      description: 'Establishment of 24/7 security monitoring and incident detection capabilities to identify threats in real-time.',
      icon: <Eye className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: [
        'Security monitoring setup',
        'Incident detection rules',
        'Alert notification system',
        'Security dashboard configuration'
      ],
      activities: [
        'SIEM deployment and configuration',
        'Log aggregation setup',
        'Threat intelligence integration',
        'Alert tuning and optimization'
      ]
    },
    {
      step: '06',
      title: 'Ongoing Support & Maintenance',
      description: 'Continuous security management, updates, and improvement to maintain strong security posture over time.',
      icon: <Headphones className="w-8 h-8" />,
      duration: 'Ongoing',
      deliverables: [
        '24/7 security monitoring',
        'Regular security updates',
        'Incident response services',
        'Monthly security reports'
      ],
      activities: [
        'Continuous threat monitoring',
        'Security patch management',
        'Incident investigation and response',
        'Security awareness training updates'
      ]
    }
  ];

  const processAdvantages = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'ISO 27001 certified security professionals with deep Rwanda market knowledge'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Rapid Deployment',
      description: 'Efficient implementation process that minimizes business disruption'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Proven Methodology',
      description: 'Battle-tested security implementation process with measurable results'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Risk-Based Approach',
      description: 'Prioritized security investments based on actual business risks'
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
            Our Cybersecurity Implementation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic, risk-based approach to cybersecurity implementation that ensures 
            comprehensive protection while maintaining business continuity and operational efficiency.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>

          <div className="space-y-16">
            {securityProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4 justify-center lg:justify-start">
                      <span className="text-3xl font-bold text-primary-600 mr-4">{step.step}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">{step.description}</p>
                    
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <Clock className="w-5 h-5 text-primary-500 mr-2" />
                      <span className="text-primary-600 font-semibold">{step.duration}</span>
                    </div>

                    {/* Key Activities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                      <div className="space-y-2">
                        {step.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-secondary-500 rounded-full flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our structured approach ensures successful cybersecurity implementation 
              with measurable results and long-term protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <div className="text-primary-600">
                    {advantage.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Response */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h3 className="text-3xl font-bold mb-4">Emergency Cybersecurity Response</h3>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Already experiencing a security incident? Our emergency response team is available 24/7 
            to help contain threats and minimize damage to your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+250780115764"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors duration-200"
            >
              Emergency Hotline: +250 780 115 764
            </a>
            <a 
              href="mailto:security@cylacon.com"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              security@cylacon.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CybersecurityProcess;

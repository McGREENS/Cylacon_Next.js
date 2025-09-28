'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CreditCard,
  CheckCircle,
  Users,
  Database,
  Wifi,
  AlertTriangle,
  Zap,
  Hotel,
  Award
} from 'lucide-react';

const HospitalitySecurity: React.FC = () => {
  const securityStandards = [
    {
      standard: 'PCI DSS Compliance',
      icon: <CreditCard className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      description: 'Payment Card Industry compliance for secure guest payment processing and data protection.',
      requirements: [
        'Secure payment processing',
        'Cardholder data protection',
        'Network security measures',
        'Regular security testing'
      ],
      benefits: [
        'Secure guest payments',
        'Reduced fraud liability',
        'Guest trust and confidence',
        'Regulatory compliance'
      ]
    },
    {
      standard: 'Guest Data Protection',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      description: 'Comprehensive protection for guest personal information and privacy data.',
      requirements: [
        'Guest data encryption',
        'Privacy policy compliance',
        'Data retention management',
        'Consent management systems'
      ],
      benefits: [
        'Guest privacy protection',
        'GDPR compliance readiness',
        'Reduced data breach risks',
        'Enhanced reputation'
      ]
    },
    {
      standard: 'Hotel Network Security',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Secure network infrastructure for guest Wi-Fi and hotel operations.',
      requirements: [
        'Segregated guest networks',
        'Secure Wi-Fi authentication',
        'Network monitoring systems',
        'Firewall protection'
      ],
      benefits: [
        'Secure guest connectivity',
        'Protected hotel systems',
        'Network performance optimization',
        'Threat prevention'
      ]
    },
    {
      standard: 'Hospitality System Security',
      icon: <Hotel className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      description: 'Comprehensive security for hotel management systems and operations.',
      requirements: [
        'System access controls',
        'Data backup and recovery',
        'Security monitoring',
        'Incident response procedures'
      ],
      benefits: [
        'Operational continuity',
        'System integrity protection',
        'Business data security',
        'Compliance assurance'
      ]
    }
  ];

  const securityServices = [
    {
      title: 'Payment Security',
      description: 'Secure payment processing and PCI DSS compliance for hospitality transactions.',
      icon: <CreditCard className="w-6 h-6" />,
      features: ['PCI DSS compliance', 'Payment tokenization', 'Fraud detection', 'Secure transactions']
    },
    {
      title: 'Guest Data Protection',
      description: 'Comprehensive protection for guest personal and booking information.',
      icon: <Users className="w-6 h-6" />,
      features: ['Data encryption', 'Privacy controls', 'Access management', 'Consent tracking']
    },
    {
      title: 'Network Security',
      description: 'Secure network infrastructure for guest services and hotel operations.',
      icon: <Wifi className="w-6 h-6" />,
      features: ['Guest Wi-Fi security', 'Network segmentation', 'Intrusion detection', 'Bandwidth management']
    },
    {
      title: 'System Monitoring',
      description: '24/7 security monitoring and threat detection for hospitality systems.',
      icon: <Eye className="w-6 h-6" />,
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security analytics']
    }
  ];

  const hospitalityThreats = [
    {
      threat: 'Guest Data Breaches',
      impact: '67%',
      description: 'of hospitality data breaches involve guest information',
      protection: 'Comprehensive data encryption and access controls'
    },
    {
      threat: 'Payment Card Fraud',
      impact: '58%',
      description: 'of hospitality fraud involves payment systems',
      protection: 'PCI DSS compliance and secure payment processing'
    },
    {
      threat: 'Wi-Fi Security Attacks',
      impact: '45%',
      description: 'of hotel networks experience security incidents',
      protection: 'Segregated networks and secure authentication'
    },
    {
      threat: 'Ransomware Attacks',
      impact: '38%',
      description: 'increase in ransomware targeting hotels',
      protection: 'Backup systems and security monitoring'
    }
  ];

  const securityProcess = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive security assessment of hospitality systems and guest data handling.',
      deliverables: ['Security audit report', 'Vulnerability assessment', 'PCI DSS gap analysis', 'Risk evaluation']
    },
    {
      step: '02',
      title: 'Security Architecture',
      description: 'Design of comprehensive security architecture for hospitality operations.',
      deliverables: ['Security framework design', 'Network architecture', 'Data protection plan', 'Compliance roadmap']
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Implementation of security controls and compliance measures.',
      deliverables: ['Security system deployment', 'PCI DSS implementation', 'Staff training', 'Policy documentation']
    },
    {
      step: '04',
      title: 'Monitoring & Maintenance',
      description: 'Ongoing security monitoring and compliance maintenance.',
      deliverables: ['24/7 monitoring', 'Regular audits', 'Compliance reporting', 'Continuous improvement']
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
            <span className="gradient-text">Hospitality Security</span> & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your hospitality business and guests with comprehensive security solutions 
            that ensure PCI DSS compliance and safeguard sensitive guest information.
          </p>
        </motion.div>

        {/* Hospitality Threat Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-16 border border-red-100"
        >
          <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Hospitality Cybersecurity</span> Threat Landscape
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The hospitality industry faces unique cybersecurity challenges due to the sensitive nature of guest data, 
              payment processing, and open network environments. Protect your business and guests with comprehensive security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitalityThreats.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">{item.impact}</div>
                <div className="text-gray-700 font-medium mb-2">{item.threat}</div>
                <div className="text-sm text-gray-600 mb-3">{item.description}</div>
                <div className="text-xs text-green-600 font-medium">{item.protection}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {securityStandards.map((standard, index) => (
            <motion.div
              key={standard.standard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {standard.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{standard.standard}</h3>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{standard.description}</p>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                <div className="space-y-2">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <div className="space-y-2">
                  {standard.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Hospitality Security</span> Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security services designed specifically for hospitality businesses 
              to protect guest data and ensure secure operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-primary-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Implementation Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Hospitality Security</span> Implementation Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures comprehensive security implementation 
              that protects guest data and maintains hospitality operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">{step.step}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                
                <div className="space-y-1">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="text-xs text-green-600 font-medium">
                      • {deliverable}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Hospitality Security Guarantee</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We guarantee that our hospitality security solutions meet all PCI DSS requirements and industry standards. 
            Our ISO 27001 certified team ensures maximum protection for your guests and business operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-primary-200">PCI DSS Compliance</div>
              <div className="text-sm text-primary-100">All implementations certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Security Monitoring</div>
              <div className="text-sm text-primary-100">Continuous guest data protection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-primary-200">Guest Data Breaches</div>
              <div className="text-sm text-primary-100">Perfect hospitality security record</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/consultation"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Get Security Assessment
            </a>
            <a 
              href="tel:+250780115764"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Call +250 780 115 764
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HospitalitySecurity;

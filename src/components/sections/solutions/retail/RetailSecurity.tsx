'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  CreditCard, 
  Eye,
  CheckCircle,
  Users,
  Database,
  Globe,
  AlertTriangle,
  Zap,
  ShoppingCart,
  Award
} from 'lucide-react';

const RetailSecurity: React.FC = () => {
  const securityStandards = [
    {
      standard: 'PCI DSS Compliance',
      icon: <CreditCard className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      description: 'Payment Card Industry Data Security Standard compliance for secure payment processing.',
      requirements: [
        'Secure cardholder data storage',
        'Encrypted payment transmission',
        'Regular security testing',
        'Access control implementation'
      ],
      benefits: [
        'Secure payment processing',
        'Customer trust and confidence',
        'Reduced fraud liability',
        'Regulatory compliance'
      ]
    },
    {
      standard: 'Data Protection & Privacy',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      description: 'Comprehensive data protection measures for customer and business information.',
      requirements: [
        'Customer data encryption',
        'Privacy policy implementation',
        'Data retention management',
        'Consent management systems'
      ],
      benefits: [
        'Customer privacy protection',
        'GDPR compliance readiness',
        'Reduced data breach risks',
        'Enhanced brand reputation'
      ]
    },
    {
      standard: 'E-commerce Security',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      description: 'Advanced security measures for online retail platforms and e-commerce websites.',
      requirements: [
        'SSL/TLS encryption',
        'Secure authentication systems',
        'Anti-fraud mechanisms',
        'Regular security updates'
      ],
      benefits: [
        'Secure online transactions',
        'Protected customer accounts',
        'Fraud prevention',
        'Search engine trust signals'
      ]
    },
    {
      standard: 'Retail System Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-primary-600 to-secondary-600',
      description: 'Comprehensive security framework for retail IT systems and infrastructure.',
      requirements: [
        'Network security implementation',
        'Endpoint protection',
        'Regular security audits',
        'Incident response procedures'
      ],
      benefits: [
        'System integrity protection',
        'Business continuity assurance',
        'Cyber threat mitigation',
        'Operational security'
      ]
    }
  ];

  const securityServices = [
    {
      title: 'Payment Security',
      description: 'Secure payment processing and PCI DSS compliance for retail transactions.',
      icon: <CreditCard className="w-6 h-6" />,
      features: ['PCI DSS compliance', 'Tokenization', 'Encrypted transactions', 'Fraud detection']
    },
    {
      title: 'Customer Data Protection',
      description: 'Comprehensive protection for customer personal and financial information.',
      icon: <Users className="w-6 h-6" />,
      features: ['Data encryption', 'Access controls', 'Privacy management', 'Consent tracking']
    },
    {
      title: 'System Monitoring',
      description: '24/7 security monitoring and threat detection for retail systems.',
      icon: <Eye className="w-6 h-6" />,
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security analytics']
    },
    {
      title: 'Backup & Recovery',
      description: 'Secure backup systems and disaster recovery for retail operations.',
      icon: <Database className="w-6 h-6" />,
      features: ['Automated backups', 'Disaster recovery', 'Data integrity', 'Business continuity']
    }
  ];

  const retailThreats = [
    {
      threat: 'Payment Card Fraud',
      impact: '73%',
      description: 'of retail data breaches involve payment card information',
      protection: 'PCI DSS compliance and tokenization'
    },
    {
      threat: 'E-commerce Attacks',
      impact: '65%',
      description: 'increase in attacks on online retail platforms',
      protection: 'Advanced web application security'
    },
    {
      threat: 'Customer Data Breaches',
      impact: '58%',
      description: 'of retailers experienced customer data breaches',
      protection: 'Comprehensive data protection measures'
    },
    {
      threat: 'POS System Malware',
      impact: '45%',
      description: 'of retail malware targets POS systems',
      protection: 'Endpoint protection and monitoring'
    }
  ];

  const securityProcess = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive security assessment of retail systems and payment processes.',
      deliverables: ['Security audit report', 'Vulnerability assessment', 'PCI DSS gap analysis', 'Risk evaluation']
    },
    {
      step: '02',
      title: 'Security Architecture',
      description: 'Design of comprehensive security architecture for retail operations.',
      deliverables: ['Security framework design', 'Payment security plan', 'Data protection strategy', 'Compliance roadmap']
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Implementation of security controls and compliance measures.',
      deliverables: ['Security system deployment', 'PCI DSS implementation', 'Staff training', 'Process documentation']
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
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Retail Security</span> & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your retail business and customers with comprehensive security solutions 
            that ensure PCI DSS compliance and safeguard against cyber threats.
          </p>
        </motion.div>

        {/* Retail Threat Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-16 border border-red-100"
        >
          <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Retail Cybersecurity</span> Threat Landscape
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Retail businesses are prime targets for cybercriminals due to the valuable customer and payment data they handle. 
              Protect your business with comprehensive security measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retailThreats.map((item, index) => (
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
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
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
                      <Zap className="w-4 h-4 text-secondary-500 flex-shrink-0" />
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
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Retail Security</span> Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security services designed specifically for retail businesses 
              to protect customer data and ensure secure transactions.
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
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
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
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Retail Security</span> Implementation Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures comprehensive security implementation 
              that meets PCI DSS requirements and protects your retail business.
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
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary-600">{step.step}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                
                <div className="space-y-1">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="text-xs text-secondary-600 font-medium">
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
          transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4"><span className="text-primary-200">Retail Security</span> Guarantee</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We guarantee that our retail security solutions meet all PCI DSS requirements and industry standards. 
            Our ISO 27001 certified team ensures maximum protection for your retail business and customers.
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
              <div className="text-sm text-primary-100">Continuous threat protection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-primary-200">Payment Breaches</div>
              <div className="text-sm text-primary-100">Perfect retail security record</div>
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

export default RetailSecurity;

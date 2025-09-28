'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Wifi,
  CheckCircle,
  Factory,
  Database,
  Globe,
  AlertTriangle,
  Zap,
  Settings,
  Award
} from 'lucide-react';

const ManufacturingSecurity: React.FC = () => {
  const securityFrameworks = [
    {
      framework: 'Industrial Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      description: 'Comprehensive cybersecurity framework for industrial control systems and manufacturing networks.',
      requirements: [
        'Network segmentation and isolation',
        'Industrial firewall implementation',
        'Endpoint protection for OT systems',
        'Security monitoring and incident response'
      ],
      benefits: [
        'Protected industrial systems',
        'Reduced cyber attack risks',
        'Business continuity assurance',
        'Regulatory compliance'
      ]
    },
    {
      framework: 'OT/IT Security Integration',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      description: 'Secure integration of operational technology (OT) and information technology (IT) systems.',
      requirements: [
        'Secure communication protocols',
        'Identity and access management',
        'Data encryption in transit',
        'Secure remote access solutions'
      ],
      benefits: [
        'Seamless OT/IT integration',
        'Secure data exchange',
        'Controlled system access',
        'Enhanced visibility'
      ]
    },
    {
      framework: 'IoT Security Management',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      description: 'Security measures for Industrial IoT devices and connected manufacturing systems.',
      requirements: [
        'Device authentication and authorization',
        'Secure device provisioning',
        'IoT data protection',
        'Device lifecycle management'
      ],
      benefits: [
        'Secure IoT deployment',
        'Protected sensor networks',
        'Trusted device communication',
        'Scalable IoT security'
      ]
    },
    {
      framework: 'Data Protection & Privacy',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Comprehensive data protection for manufacturing data and intellectual property.',
      requirements: [
        'Data classification and labeling',
        'Encryption at rest and in transit',
        'Access controls and permissions',
        'Data backup and recovery'
      ],
      benefits: [
        'Intellectual property protection',
        'Compliance with regulations',
        'Data integrity assurance',
        'Business continuity'
      ]
    }
  ];

  const securityServices = [
    {
      title: 'Industrial Network Security',
      description: 'Comprehensive security solutions for manufacturing networks and industrial systems.',
      icon: <Factory className="w-6 h-6" />,
      features: ['Network segmentation', 'Industrial firewalls', 'Intrusion detection', 'Security monitoring']
    },
    {
      title: 'OT System Protection',
      description: 'Specialized security measures for operational technology and control systems.',
      icon: <Settings className="w-6 h-6" />,
      features: ['SCADA security', 'PLC protection', 'HMI security', 'Control system hardening']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and threat detection for manufacturing environments.',
      icon: <Eye className="w-6 h-6" />,
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security analytics']
    },
    {
      title: 'Compliance Management',
      description: 'Security compliance management for manufacturing industry standards.',
      icon: <Award className="w-6 h-6" />,
      features: ['Regulatory compliance', 'Audit preparation', 'Policy development', 'Risk assessment']
    }
  ];

  const manufacturingThreats = [
    {
      threat: 'Industrial Cyber Attacks',
      impact: '68%',
      description: 'of manufacturers experienced cyber attacks in 2024',
      protection: 'Comprehensive industrial cybersecurity framework'
    },
    {
      threat: 'Ransomware on OT Systems',
      impact: '45%',
      description: 'increase in ransomware targeting manufacturing',
      protection: 'Network segmentation and backup systems'
    },
    {
      threat: 'IoT Device Vulnerabilities',
      impact: '78%',
      description: 'of IoT devices have security vulnerabilities',
      protection: 'Secure IoT device management and monitoring'
    },
    {
      threat: 'Intellectual Property Theft',
      impact: '56%',
      description: 'of manufacturers report IP theft attempts',
      protection: 'Data protection and access control systems'
    }
  ];

  const securityProcess = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive security assessment of manufacturing systems and infrastructure.',
      deliverables: ['Security audit report', 'Vulnerability assessment', 'Risk analysis', 'Compliance evaluation']
    },
    {
      step: '02',
      title: 'Security Architecture',
      description: 'Design of comprehensive security architecture for manufacturing operations.',
      deliverables: ['Security framework design', 'Network architecture', 'Security policies', 'Implementation plan']
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Implementation of security controls and protective measures.',
      deliverables: ['Security system deployment', 'Network segmentation', 'Staff training', 'Process implementation']
    },
    {
      step: '04',
      title: 'Monitoring & Maintenance',
      description: 'Ongoing security monitoring and maintenance of manufacturing security systems.',
      deliverables: ['24/7 monitoring', 'Incident response', 'Regular updates', 'Continuous improvement']
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
            <span className="gradient-text">Manufacturing Cybersecurity</span> & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your manufacturing operations with comprehensive cybersecurity solutions 
            designed specifically for industrial environments and operational technology systems.
          </p>
        </motion.div>

        {/* Manufacturing Threat Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-16 border border-primary-100"
        >
          <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Manufacturing Cybersecurity</span> Threat Landscape
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Manufacturing operations face increasing cyber threats targeting industrial control systems, 
              IoT devices, and critical production infrastructure. Protect your operations with comprehensive security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manufacturingThreats.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">{item.impact}</div>
                <div className="text-gray-700 font-medium mb-2">{item.threat}</div>
                <div className="text-sm text-gray-600 mb-3">{item.description}</div>
                <div className="text-xs text-green-600 font-medium">{item.protection}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Frameworks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {securityFrameworks.map((framework, index) => (
            <motion.div
              key={framework.framework}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {framework.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{framework.framework}</h3>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{framework.description}</p>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                <div className="space-y-2">
                  {framework.requirements.map((requirement, reqIndex) => (
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
                  {framework.benefits.map((benefit, benefitIndex) => (
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
              <span className="gradient-text">Manufacturing Security</span> Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security services designed specifically for manufacturing environments 
              to protect industrial systems and operational technology.
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
              <span className="gradient-text">Manufacturing Security</span> Implementation Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures comprehensive security implementation 
              that protects manufacturing operations without disrupting production.
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Manufacturing Security Guarantee</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We guarantee that our manufacturing security solutions meet all industrial cybersecurity standards 
            and best practices. Our ISO 27001 certified team ensures maximum protection for your operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-primary-200">Security Compliance</div>
              <div className="text-sm text-primary-100">All implementations certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Security Monitoring</div>
              <div className="text-sm text-primary-100">Continuous threat protection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-primary-200">Production Disruptions</div>
              <div className="text-sm text-primary-100">Security without downtime</div>
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

export default ManufacturingSecurity;

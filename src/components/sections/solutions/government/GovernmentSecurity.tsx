'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText,
  CheckCircle,
  Users,
  Database,
  Globe,
  AlertTriangle,
  Zap,
  Building,
  Award
} from 'lucide-react';

const GovernmentSecurity: React.FC = () => {
  const securityFrameworks = [
    {
      framework: 'National Cybersecurity Framework',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      description: 'Comprehensive cybersecurity framework aligned with national security policies.',
      requirements: [
        'National security standards',
        'Critical infrastructure protection',
        'Incident response protocols',
        'Threat intelligence sharing'
      ],
      benefits: [
        'National security compliance',
        'Critical asset protection',
        'Coordinated threat response',
        'Enhanced resilience'
      ]
    },
    {
      framework: 'Government Data Protection',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      description: 'Robust data protection measures for sensitive government information.',
      requirements: [
        'Data classification systems',
        'Access control mechanisms',
        'Encryption standards',
        'Data retention policies'
      ],
      benefits: [
        'Sensitive data protection',
        'Privacy compliance',
        'Controlled access',
        'Audit trail maintenance'
      ]
    },
    {
      framework: 'Public Sector Security Standards',
      icon: <Building className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      description: 'Security standards specifically designed for public sector organizations.',
      requirements: [
        'Multi-level security clearance',
        'Secure communication channels',
        'Physical security integration',
        'Personnel security screening'
      ],
      benefits: [
        'Layered security approach',
        'Secure government operations',
        'Trusted communications',
        'Vetted personnel access'
      ]
    },
    {
      framework: 'International Security Compliance',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-primary-600 to-secondary-600',
      description: 'Compliance with international security standards and best practices.',
      requirements: [
        'ISO 27001 compliance',
        'NIST framework alignment',
        'International cooperation protocols',
        'Cross-border data protection'
      ],
      benefits: [
        'Global security standards',
        'International recognition',
        'Enhanced cooperation',
        'Best practice implementation'
      ]
    }
  ];

  const securityServices = [
    {
      title: 'Government Network Security',
      description: 'Comprehensive network security solutions for government infrastructure.',
      icon: <Shield className="w-6 h-6" />,
      features: ['Firewall management', 'Intrusion detection', 'Network monitoring', 'Secure VPN access']
    },
    {
      title: 'Data Security & Privacy',
      description: 'Advanced data protection and privacy solutions for government data.',
      icon: <Lock className="w-6 h-6" />,
      features: ['Data encryption', 'Access controls', 'Privacy protection', 'Data loss prevention']
    },
    {
      title: 'Security Monitoring & Response',
      description: '24/7 security monitoring and incident response for government systems.',
      icon: <Eye className="w-6 h-6" />,
      features: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security analytics']
    },
    {
      title: 'Compliance & Audit',
      description: 'Security compliance management and audit support services.',
      icon: <FileText className="w-6 h-6" />,
      features: ['Compliance assessment', 'Audit preparation', 'Policy development', 'Risk management']
    }
  ];

  const threatLandscape = [
    {
      threat: 'Cyber Attacks on Government',
      impact: '87%',
      description: 'of governments experienced cyber attacks in 2024',
      protection: 'Advanced threat detection and response systems'
    },
    {
      threat: 'Data Breaches',
      impact: '65%',
      description: 'of government data breaches involve insider threats',
      protection: 'Comprehensive access controls and monitoring'
    },
    {
      threat: 'Nation-State Attacks',
      impact: '45%',
      description: 'increase in sophisticated nation-state attacks',
      protection: 'National cybersecurity frameworks and intelligence'
    },
    {
      threat: 'Critical Infrastructure Threats',
      impact: '78%',
      description: 'of critical infrastructure is at risk',
      protection: 'Specialized critical infrastructure protection'
    }
  ];

  const securityProcess = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive security assessment of government systems and infrastructure.',
      deliverables: ['Security audit report', 'Vulnerability assessment', 'Risk analysis', 'Compliance gap analysis']
    },
    {
      step: '02',
      title: 'Security Architecture',
      description: 'Design of comprehensive security architecture for government systems.',
      deliverables: ['Security architecture design', 'Security policies', 'Implementation plan', 'Technology selection']
    },
    {
      step: '03',
      title: 'Implementation & Deployment',
      description: 'Implementation of security controls and deployment of security systems.',
      deliverables: ['Security system deployment', 'Staff training', 'Process implementation', 'Testing and validation']
    },
    {
      step: '04',
      title: 'Monitoring & Maintenance',
      description: 'Ongoing security monitoring and maintenance of government security systems.',
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
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Government Cybersecurity</span> & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect government systems and sensitive data with comprehensive cybersecurity solutions 
            designed specifically for public sector requirements and national security needs.
          </p>
        </motion.div>

        {/* Government Threat Landscape */}
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
              <span className="gradient-text">Government Cybersecurity</span> Threat Landscape
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Government agencies face increasingly sophisticated cyber threats. 
              Protect your critical systems and sensitive data with comprehensive security measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threatLandscape.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">{item.impact}</div>
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
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
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
              <span className="gradient-text">Government Security</span> Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security services designed specifically for government agencies 
              and public sector organizations.
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
              <span className="gradient-text">Government Security</span> Implementation Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures comprehensive security implementation 
              that meets government requirements and national security standards.
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
          <h3 className="text-3xl font-bold mb-4"><span className="text-primary-200">Government Security</span> Guarantee</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We guarantee that our government security solutions meet all national security requirements 
            and international standards. Our ISO 27001 certified team ensures maximum protection for your critical systems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-primary-200">Security Compliance</div>
              <div className="text-sm text-primary-100">All implementations meet standards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Security Monitoring</div>
              <div className="text-sm text-primary-100">Continuous threat detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-primary-200">Security Incidents</div>
              <div className="text-sm text-primary-100">Perfect government security record</div>
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

export default GovernmentSecurity;

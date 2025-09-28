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
  GraduationCap,
  Award
} from 'lucide-react';

const EducationCompliance: React.FC = () => {
  const complianceStandards = [
    {
      standard: 'FERPA Compliance',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      description: 'Family Educational Rights and Privacy Act compliance for student data protection.',
      requirements: [
        'Student record privacy protection',
        'Parental consent management',
        'Data access controls',
        'Educational record security'
      ],
      benefits: [
        'Student privacy protection',
        'Legal compliance assurance',
        'Trust from parents and students',
        'Reduced liability risks'
      ]
    },
    {
      standard: 'COPPA Compliance',
      icon: <Users className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      description: 'Children\'s Online Privacy Protection Act compliance for educational platforms.',
      requirements: [
        'Parental consent for data collection',
        'Age-appropriate data handling',
        'Limited data collection practices',
        'Secure data storage and transmission'
      ],
      benefits: [
        'Child privacy protection',
        'Regulatory compliance',
        'Enhanced trust from families',
        'Safe learning environments'
      ]
    },
    {
      standard: 'Accessibility Standards (WCAG)',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      description: 'Web Content Accessibility Guidelines for inclusive educational technology.',
      requirements: [
        'Screen reader compatibility',
        'Keyboard navigation support',
        'Color contrast compliance',
        'Alternative text for images'
      ],
      benefits: [
        'Inclusive learning access',
        'Legal compliance',
        'Better user experience',
        'Expanded user base'
      ]
    },
    {
      standard: 'Data Security Standards',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-primary-600 to-secondary-600',
      description: 'Comprehensive data security measures for educational institutions.',
      requirements: [
        'End-to-end encryption',
        'Secure authentication systems',
        'Regular security audits',
        'Incident response procedures'
      ],
      benefits: [
        'Data breach prevention',
        'Secure learning environment',
        'Compliance with regulations',
        'Institutional reputation protection'
      ]
    }
  ];

  const securityMeasures = [
    {
      title: 'Student Data Protection',
      description: 'Comprehensive protection measures for sensitive student information.',
      icon: <Shield className="w-6 h-6" />,
      features: ['Data encryption', 'Access controls', 'Audit trails', 'Privacy controls']
    },
    {
      title: 'Secure Authentication',
      description: 'Multi-factor authentication and secure login systems for all users.',
      icon: <Lock className="w-6 h-6" />,
      features: ['Single sign-on (SSO)', 'Multi-factor authentication', 'Role-based access', 'Session management']
    },
    {
      title: 'Content Filtering & Safety',
      description: 'Safe browsing and content filtering for educational environments.',
      icon: <Eye className="w-6 h-6" />,
      features: ['Content filtering', 'Safe search', 'Inappropriate content blocking', 'Activity monitoring']
    },
    {
      title: 'Backup & Recovery',
      description: 'Reliable backup systems and disaster recovery for educational data.',
      icon: <Database className="w-6 h-6" />,
      features: ['Automated backups', 'Cloud storage', 'Disaster recovery', 'Data integrity checks']
    }
  ];

  const educationThreats = [
    {
      threat: 'Student Data Breaches',
      impact: '78%',
      description: 'of education data breaches involve student records',
      protection: 'Advanced encryption and access controls'
    },
    {
      threat: 'Cyberbullying & Online Safety',
      impact: '65%',
      description: 'of students experience online safety issues',
      protection: 'Content filtering and monitoring systems'
    },
    {
      threat: 'Ransomware Attacks',
      impact: '56%',
      description: 'increase in ransomware attacks on schools',
      protection: 'Comprehensive backup and security measures'
    },
    {
      threat: 'Inappropriate Content Access',
      impact: '43%',
      description: 'of schools report inappropriate content issues',
      protection: 'Advanced content filtering and safe browsing'
    }
  ];

  const complianceProcess = [
    {
      step: '01',
      title: 'Compliance Assessment',
      description: 'Comprehensive evaluation of current compliance status and requirements.',
      deliverables: ['Compliance audit', 'Gap analysis', 'Risk assessment', 'Remediation plan']
    },
    {
      step: '02',
      title: 'Policy Development',
      description: 'Development of education-specific policies and procedures.',
      deliverables: ['Privacy policies', 'Security procedures', 'Acceptable use policies', 'Training materials']
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Implementation of compliance controls and security measures.',
      deliverables: ['Security controls', 'Privacy safeguards', 'Access controls', 'Staff training']
    },
    {
      step: '04',
      title: 'Monitoring & Maintenance',
      description: 'Ongoing compliance monitoring and continuous improvement.',
      deliverables: ['Regular audits', 'Compliance reports', 'Policy updates', 'Training refreshers']
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
            <span className="gradient-text">Education Compliance</span> & Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure your educational technology meets all regulatory requirements and security standards. 
            We help you protect student data and create safe learning environments.
          </p>
        </motion.div>

        {/* Education Threat Landscape */}
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
              <span className="gradient-text">Education Cybersecurity</span> Threat Landscape
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Educational institutions face unique cybersecurity challenges. 
              Protect your students and staff with comprehensive security measures designed for education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationThreats.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">{item.impact}</div>
                <div className="text-gray-700 font-medium mb-2">{item.threat}</div>
                <div className="text-sm text-gray-600 mb-3">{item.description}</div>
                <div className="text-xs text-green-600 font-medium">{item.protection}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {complianceStandards.map((standard, index) => (
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

        {/* Security Measures */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Education Security</span> Measures
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security measures designed specifically for educational environments 
              to protect students, staff, and institutional data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
              >
                <div className="w-14 h-14 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-secondary-600">
                    {measure.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{measure.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{measure.description}</p>
                
                <div className="space-y-1">
                  {measure.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-secondary-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Implementation Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Education Compliance</span> Implementation Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures comprehensive compliance implementation 
              that meets educational requirements and protects student privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                
                <div className="space-y-1">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="text-xs text-primary-600 font-medium">
                      • {deliverable}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-secondary-600 to-primary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-secondary-200" />
          <h3 className="text-3xl font-bold mb-4"><span className="text-secondary-200">Education Compliance</span> Guarantee</h3>
          <p className="text-secondary-100 text-lg mb-8 max-w-2xl mx-auto">
            We guarantee that our education IT solutions meet all applicable compliance requirements. 
            Our certified team ensures your educational technology is secure, compliant, and audit-ready.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-secondary-200">Compliance Rate</div>
              <div className="text-sm text-secondary-100">All implementations pass audits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-secondary-200">Security Monitoring</div>
              <div className="text-sm text-secondary-100">Continuous compliance monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-secondary-200">Data Breaches</div>
              <div className="text-sm text-secondary-100">Perfect education security record</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/consultation"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-secondary-600 font-semibold rounded-lg hover:bg-secondary-50 transition-colors duration-200"
            >
              Get Compliance Assessment
            </a>
            <a 
              href="tel:+250780115764"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary-600 transition-colors duration-200"
            >
              Call +250 780 115 764
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationCompliance;

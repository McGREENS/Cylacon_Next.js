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
  Heart,
  Award
} from 'lucide-react';

const HealthcareCompliance: React.FC = () => {
  const complianceStandards = [
    {
      standard: 'HIPAA Compliance',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      description: 'Comprehensive HIPAA compliance for patient data protection and privacy.',
      requirements: [
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
        'Risk assessment and management'
      ],
      benefits: [
        'Patient data protection',
        'Legal compliance',
        'Trust and credibility',
        'Reduced liability risks'
      ]
    },
    {
      standard: 'ISO 27001 Healthcare',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      description: 'Information security management system specifically for healthcare organizations.',
      requirements: [
        'Information security policies',
        'Risk management framework',
        'Security controls implementation',
        'Continuous monitoring'
      ],
      benefits: [
        'Enhanced security posture',
        'International recognition',
        'Systematic risk management',
        'Continuous improvement'
      ]
    },
    {
      standard: 'Rwanda Health Data Protection',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      description: 'Compliance with Rwanda\'s health data protection laws and regulations.',
      requirements: [
        'Local data residency',
        'Patient consent management',
        'Data breach notification',
        'Healthcare provider obligations'
      ],
      benefits: [
        'Legal compliance in Rwanda',
        'Local regulatory alignment',
        'Patient rights protection',
        'Operational legitimacy'
      ]
    },
    {
      standard: 'HL7 FHIR Standards',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-primary-600 to-secondary-600',
      description: 'Healthcare data exchange standards for interoperability and integration.',
      requirements: [
        'FHIR resource implementation',
        'API standardization',
        'Data mapping protocols',
        'Interoperability testing'
      ],
      benefits: [
        'System interoperability',
        'Data exchange efficiency',
        'Future-proof integration',
        'Vendor independence'
      ]
    }
  ];

  const securityMeasures = [
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all healthcare data in transit and at rest.',
      icon: <Lock className="w-6 h-6" />,
      features: ['AES-256 encryption', 'Key management', 'Secure transmission', 'Database encryption']
    },
    {
      title: 'Access Control',
      description: 'Role-based access control with multi-factor authentication.',
      icon: <Users className="w-6 h-6" />,
      features: ['Role-based permissions', 'Multi-factor authentication', 'Session management', 'Audit logging']
    },
    {
      title: 'Audit & Monitoring',
      description: 'Comprehensive audit trails and real-time security monitoring.',
      icon: <Eye className="w-6 h-6" />,
      features: ['Activity logging', 'Real-time monitoring', 'Compliance reporting', 'Incident detection']
    },
    {
      title: 'Backup & Recovery',
      description: 'Secure backup systems with disaster recovery capabilities.',
      icon: <Database className="w-6 h-6" />,
      features: ['Automated backups', 'Disaster recovery', 'Data integrity checks', 'Recovery testing']
    }
  ];

  const complianceProcess = [
    {
      step: '01',
      title: 'Compliance Assessment',
      description: 'Comprehensive evaluation of current compliance status and gap analysis.',
      deliverables: ['Compliance audit report', 'Gap analysis', 'Risk assessment', 'Remediation plan']
    },
    {
      step: '02',
      title: 'Policy Development',
      description: 'Development of healthcare-specific policies and procedures.',
      deliverables: ['Security policies', 'Privacy procedures', 'Incident response plan', 'Training materials']
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Implementation of compliance controls and security measures.',
      deliverables: ['Security controls', 'Technical safeguards', 'Administrative procedures', 'Staff training']
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
            <span className="gradient-text">Healthcare Compliance</span> & Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure your healthcare IT systems meet all regulatory requirements and security standards. 
            We help you maintain compliance while protecting sensitive patient data and healthcare information.
          </p>
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
              <span className="gradient-text">Healthcare Security</span> Measures
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security measures designed specifically for healthcare environments 
              to protect patient data and ensure system integrity.
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
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {measure.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{measure.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{measure.description}</p>
                
                <div className="space-y-1">
                  {measure.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-primary-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Compliance Implementation</span> Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We follow a systematic approach to ensure your healthcare organization 
              achieves and maintains full compliance with all relevant regulations.
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

        {/* Compliance Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-secondary-600 to-primary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-secondary-200" />
          <h3 className="text-3xl font-bold mb-4"><span className="text-secondary-200">Compliance</span> Guarantee</h3>
          <p className="text-secondary-100 text-lg mb-8 max-w-2xl mx-auto">
            We guarantee that our healthcare IT solutions meet all applicable compliance requirements. 
            Our ISO 27001 certified team ensures your systems are secure, compliant, and audit-ready.
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
              <div className="text-sm text-secondary-100">Perfect security track record</div>
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

export default HealthcareCompliance;

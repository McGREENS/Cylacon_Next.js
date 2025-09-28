'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  AlertTriangle,
  CheckCircle,
  Users,
  Database,
  Cloud,
  Server,
  Wifi,
  FileText,
  Settings
} from 'lucide-react';

const CloudSecurity: React.FC = () => {
  const securityLayers = [
    {
      layer: 'Identity & Access Management',
      icon: <Key className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      description: 'Control who can access your cloud resources and what they can do',
      capabilities: [
        'Multi-factor authentication (MFA)',
        'Single sign-on (SSO) integration',
        'Role-based access control (RBAC)',
        'Privileged access management',
        'Identity federation',
        'Access monitoring and auditing'
      ]
    },
    {
      layer: 'Data Protection & Encryption',
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      description: 'Protect your data at rest, in transit, and in processing',
      capabilities: [
        'End-to-end encryption',
        'Key management services',
        'Data loss prevention (DLP)',
        'Database encryption',
        'Backup encryption',
        'Secure data sharing'
      ]
    },
    {
      layer: 'Network Security',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      description: 'Secure your cloud network infrastructure and communications',
      capabilities: [
        'Virtual private clouds (VPC)',
        'Network segmentation',
        'Web application firewalls',
        'DDoS protection',
        'VPN connectivity',
        'Network monitoring'
      ]
    },
    {
      layer: 'Threat Detection & Response',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      description: 'Continuous monitoring and rapid response to security threats',
      capabilities: [
        'Security information and event management (SIEM)',
        'Threat intelligence integration',
        'Automated incident response',
        'Vulnerability scanning',
        'Behavioral analytics',
        '24/7 security monitoring'
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: 'ISO 27001',
      description: 'Information security management system certification',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['International recognition', 'Risk-based approach', 'Continuous improvement']
    },
    {
      standard: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      icon: <FileText className="w-6 h-6" />,
      benefits: ['Customer trust', 'Operational excellence', 'Third-party validation']
    },
    {
      standard: 'GDPR Compliance',
      description: 'European data protection regulation compliance',
      icon: <Lock className="w-6 h-6" />,
      benefits: ['Data privacy protection', 'Global market access', 'Regulatory compliance']
    },
    {
      standard: 'Rwanda Data Protection',
      description: 'Local data protection law compliance',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Legal compliance', 'Local market trust', 'Regulatory alignment']
    }
  ];

  const securityServices = [
    {
      title: 'Cloud Security Assessment',
      description: 'Comprehensive evaluation of your cloud security posture and vulnerabilities.',
      icon: <Eye className="w-6 h-6" />,
      deliverables: [
        'Security posture analysis',
        'Vulnerability assessment report',
        'Compliance gap analysis',
        'Remediation recommendations'
      ]
    },
    {
      title: 'Security Architecture Design',
      description: 'Design secure cloud architectures that meet your business and compliance needs.',
      icon: <Shield className="w-6 h-6" />,
      deliverables: [
        'Security architecture blueprints',
        'Security control selection',
        'Implementation roadmap',
        'Security policy framework'
      ]
    },
    {
      title: 'Security Implementation',
      description: 'Deploy and configure security controls across your cloud infrastructure.',
      icon: <Settings className="w-6 h-6" />,
      deliverables: [
        'Security control deployment',
        'Configuration management',
        'Security testing',
        'Documentation and training'
      ]
    },
    {
      title: 'Continuous Security Monitoring',
      description: '24/7 monitoring and management of your cloud security infrastructure.',
      icon: <AlertTriangle className="w-6 h-6" />,
      deliverables: [
        'Real-time threat monitoring',
        'Security incident response',
        'Regular security reports',
        'Continuous improvement'
      ]
    }
  ];

  const threatLandscape = [
    { threat: 'Data Breaches', impact: '95%', description: 'of breaches involve cloud misconfigurations' },
    { threat: 'Insider Threats', impact: '60%', description: 'of security incidents involve insiders' },
    { threat: 'Ransomware', impact: '300%', description: 'increase in cloud-targeted attacks' },
    { threat: 'API Vulnerabilities', impact: '80%', description: 'of cloud apps have API security issues' }
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
            Comprehensive Cloud <span className="gradient-text">Security</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your cloud infrastructure with enterprise-grade security measures. We implement 
            multi-layered security controls to safeguard your data and applications in the cloud.
          </p>
        </motion.div>

        {/* Cloud Threat Landscape */}
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
              Cloud Security <span className="gradient-text">Threats</span> Are Real and Growing
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As more businesses move to the cloud, cybercriminals are adapting their tactics. 
              Don't become a statistic - secure your cloud infrastructure properly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threatLandscape.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">{item.impact}</div>
                <div className="text-gray-700 font-medium mb-2">{item.threat}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Layers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {securityLayers.map((layer, index) => (
            <motion.div
              key={layer.layer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${layer.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {layer.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{layer.layer}</h3>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{layer.description}</p>

              <div className="space-y-3">
                {layer.capabilities.map((capability, capabilityIndex) => (
                  <div key={capabilityIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{capability}</span>
                  </div>
                ))}
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
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Cloud Security <span className="gradient-text">Services</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From assessment to ongoing monitoring, we provide comprehensive cloud security services 
              that protect your business at every level.
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
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{service.description}</p>
                
                <div className="space-y-1">
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="text-xs text-primary-600 font-medium">
                      • {deliverable}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cloud <span className="gradient-text">Compliance</span> & Standards
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We help you achieve and maintain compliance with international and local standards, 
              ensuring your cloud infrastructure meets all regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-secondary-600">
                    {standard.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{standard.standard}</h4>
                <p className="text-gray-600 text-sm mb-4">{standard.description}</p>
                
                <div className="space-y-1">
                  {standard.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-xs text-secondary-600 font-medium">
                      • {benefit}
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
          <Shield className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Your Cloud Security is Our Priority</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We don't just implement security - we take responsibility for it. Our ISO 27001 certified 
            team ensures your cloud infrastructure is protected against evolving threats.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">&lt;15min</div>
              <div className="text-primary-200">Incident Response Time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudSecurity;

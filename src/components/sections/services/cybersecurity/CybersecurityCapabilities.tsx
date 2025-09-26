'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Users,
  Server,
  Smartphone,
  Cloud,
  Database,
  Wifi,
  FileText
} from 'lucide-react';

const CybersecurityCapabilities: React.FC = () => {
  const securityDomains = [
    {
      category: 'Network Security',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      capabilities: [
        'Firewall Configuration & Management',
        'Intrusion Detection Systems (IDS)',
        'Network Segmentation',
        'VPN Setup & Management',
        'Network Access Control (NAC)',
        'Wireless Security Implementation'
      ]
    },
    {
      category: 'Application Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      capabilities: [
        'Web Application Security Testing',
        'Mobile App Security Assessment',
        'Secure Code Review',
        'API Security Implementation',
        'Authentication & Authorization',
        'Security Development Lifecycle'
      ]
    },
    {
      category: 'Data Protection',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      capabilities: [
        'Data Encryption Solutions',
        'Database Security Hardening',
        'Data Loss Prevention (DLP)',
        'Backup & Recovery Security',
        'Data Classification & Governance',
        'Privacy Impact Assessments'
      ]
    },
    {
      category: 'Cloud Security',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      capabilities: [
        'Cloud Security Architecture',
        'AWS/Azure Security Configuration',
        'Container Security',
        'Cloud Access Security Broker',
        'Multi-Cloud Security Management',
        'DevSecOps Implementation'
      ]
    }
  ];

  const securityServices = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive scanning and analysis to identify security weaknesses in your infrastructure.',
      deliverables: ['Vulnerability scan reports', 'Risk prioritization matrix', 'Remediation roadmap']
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Penetration Testing',
      description: 'Ethical hacking to simulate real-world attacks and test your security defenses.',
      deliverables: ['Executive summary report', 'Technical findings', 'Proof of concept demos']
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Security Audits',
      description: 'Thorough evaluation of security policies, procedures, and compliance requirements.',
      deliverables: ['Audit findings report', 'Compliance gap analysis', 'Policy recommendations']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Security Awareness Training',
      description: 'Employee education programs to build a strong human firewall against cyber threats.',
      deliverables: ['Training materials', 'Phishing simulations', 'Awareness metrics']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Infrastructure Hardening',
      description: 'Securing servers, workstations, and network devices against potential attacks.',
      deliverables: ['Hardening checklists', 'Configuration baselines', 'Security monitoring']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Device Management',
      description: 'Comprehensive security for mobile devices and BYOD environments.',
      deliverables: ['MDM implementation', 'Device policies', 'App security controls']
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
            Our Cybersecurity Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end cybersecurity solutions covering every aspect of your digital infrastructure. 
            Our comprehensive approach ensures no security gap is left unaddressed.
          </p>
        </motion.div>

        {/* Security Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {securityDomains.map((domain, index) => (
            <motion.div
              key={domain.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${domain.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {domain.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{domain.category}</h3>
              </div>

              <div className="space-y-3">
                {domain.capabilities.map((capability, capabilityIndex) => (
                  <div key={capabilityIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Security Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From assessment to implementation, we provide complete cybersecurity solutions 
              tailored to Rwanda's business environment and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-primary-600">
                    {service.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 text-sm">Key Deliverables:</h5>
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rwanda-Specific Security Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Tailored for Rwanda's Digital Landscape
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We understand the unique cybersecurity challenges facing Rwandan businesses 
              and provide solutions that address local threats and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Local Compliance</h4>
              <p className="text-gray-600 text-sm">
                Rwanda's data protection laws and financial regulations compliance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Mobile-First Security</h4>
              <p className="text-gray-600 text-sm">
                Securing mobile payments and banking applications widely used in Rwanda
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Local Language Support</h4>
              <p className="text-gray-600 text-sm">
                Security awareness training in Kinyarwanda, French, and English
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Regional Threats</h4>
              <p className="text-gray-600 text-sm">
                Protection against cyber threats specifically targeting East African businesses
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CybersecurityCapabilities;

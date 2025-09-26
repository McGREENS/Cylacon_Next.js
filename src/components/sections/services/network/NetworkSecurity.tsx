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
  Network,
  Wifi,
  Server,
  Settings,
  Zap,
  Globe
} from 'lucide-react';

const NetworkSecurity: React.FC = () => {
  const securityLayers = [
    {
      layer: 'Perimeter Security',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      description: 'First line of defense protecting your network from external threats',
      capabilities: [
        'Next-generation firewalls (NGFW)',
        'Intrusion prevention systems (IPS)',
        'DDoS protection',
        'Web application firewalls',
        'Email security gateways',
        'DNS filtering and protection'
      ]
    },
    {
      layer: 'Network Access Control',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Control and monitor who and what can access your network resources',
      capabilities: [
        '802.1X authentication',
        'Network access control (NAC)',
        'Identity and access management',
        'Multi-factor authentication',
        'Device compliance checking',
        'Guest network isolation'
      ]
    },
    {
      layer: 'Network Monitoring',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      description: 'Continuous monitoring and threat detection across your network',
      capabilities: [
        'Network traffic analysis',
        'Behavioral analytics',
        'Threat intelligence integration',
        'Security information and event management (SIEM)',
        'Network forensics',
        'Real-time alerting'
      ]
    },
    {
      layer: 'Data Protection',
      icon: <Server className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Protect sensitive data in transit and at rest across your network',
      capabilities: [
        'Network encryption (IPSec, SSL/TLS)',
        'Data loss prevention (DLP)',
        'Network segmentation',
        'Micro-segmentation',
        'Secure remote access (VPN)',
        'Encrypted wireless networks'
      ]
    }
  ];

  const securityThreats = [
    {
      threat: 'Malware & Ransomware',
      impact: '78%',
      description: 'of businesses affected by network-based malware attacks',
      protection: 'Advanced threat protection and network segmentation'
    },
    {
      threat: 'Unauthorized Access',
      impact: '65%',
      description: 'of data breaches involve network access violations',
      protection: 'Multi-factor authentication and access controls'
    },
    {
      threat: 'DDoS Attacks',
      impact: '45%',
      description: 'increase in network DDoS attacks in 2024',
      protection: 'DDoS mitigation and traffic filtering'
    },
    {
      threat: 'Insider Threats',
      impact: '34%',
      description: 'of security incidents involve internal actors',
      protection: 'Network monitoring and behavioral analysis'
    }
  ];

  const securityServices = [
    {
      title: 'Network Security Assessment',
      description: 'Comprehensive evaluation of your network security posture and vulnerabilities.',
      icon: <Eye className="w-6 h-6" />,
      deliverables: [
        'Security vulnerability report',
        'Network topology analysis',
        'Risk assessment matrix',
        'Security recommendations'
      ]
    },
    {
      title: 'Firewall Implementation',
      description: 'Deploy and configure advanced firewalls to protect your network perimeter.',
      icon: <Shield className="w-6 h-6" />,
      deliverables: [
        'Firewall deployment',
        'Security policy configuration',
        'Traffic monitoring setup',
        'Performance optimization'
      ]
    },
    {
      title: 'Network Access Control',
      description: 'Implement comprehensive access controls to manage network resource access.',
      icon: <Lock className="w-6 h-6" />,
      deliverables: [
        'NAC system deployment',
        'Authentication integration',
        'Device compliance policies',
        'Access monitoring'
      ]
    },
    {
      title: 'Security Monitoring',
      description: '24/7 network security monitoring and incident response services.',
      icon: <AlertTriangle className="w-6 h-6" />,
      deliverables: [
        'Real-time monitoring',
        'Threat detection alerts',
        'Incident response',
        'Security reporting'
      ]
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
            Comprehensive Network Security Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your network infrastructure with multi-layered security solutions that defend 
            against evolving cyber threats while maintaining optimal network performance.
          </p>
        </motion.div>

        {/* Network Threat Landscape */}
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
              Network Security Threats Are Increasing
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As networks become more complex and connected, the attack surface grows. 
              Protect your business with comprehensive network security measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityThreats.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">{item.impact}</div>
                <div className="text-gray-700 font-medium mb-2">{item.threat}</div>
                <div className="text-sm text-gray-600 mb-3">{item.description}</div>
                <div className="text-xs text-green-600 font-medium">{item.protection}</div>
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
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
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
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Network Security Services We Provide
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From assessment to implementation and ongoing monitoring, we provide comprehensive 
              network security services that protect your business assets.
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

        {/* Rwanda Network Security Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Shield className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Securing Rwanda's Digital Infrastructure</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            As Rwanda's digital economy grows, network security becomes critical for business success. 
            We provide world-class security solutions tailored to local needs and threats.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-200">Networks Secured</div>
              <div className="text-sm text-primary-100">Across Rwanda & East Africa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200">Threat Detection Rate</div>
              <div className="text-sm text-primary-100">Advanced security monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Security Monitoring</div>
              <div className="text-sm text-primary-100">Continuous protection</div>
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

export default NetworkSecurity;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap,
  Globe,
  CheckCircle,
  Settings,
  BarChart3,
  Smartphone,
  Lock,
  RefreshCw
} from 'lucide-react';

const CloudCapabilities: React.FC = () => {
  const cloudPlatforms = [
    {
      category: 'Amazon Web Services (AWS)',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      capabilities: [
        'EC2 Virtual Servers & Auto Scaling',
        'S3 Storage & CloudFront CDN',
        'RDS Database Services',
        'Lambda Serverless Computing',
        'VPC Network Configuration',
        'IAM Security & Access Management'
      ]
    },
    {
      category: 'Microsoft Azure',
      icon: <Server className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      capabilities: [
        'Azure Virtual Machines & Scale Sets',
        'Azure Storage & Blob Services',
        'Azure SQL Database',
        'Azure Functions & Logic Apps',
        'Virtual Networks & ExpressRoute',
        'Azure Active Directory Integration'
      ]
    },
    {
      category: 'Google Cloud Platform',
      icon: <Database className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      capabilities: [
        'Compute Engine & Kubernetes',
        'Cloud Storage & Firebase',
        'Cloud SQL & BigQuery',
        'Cloud Functions & App Engine',
        'VPC Networks & Cloud CDN',
        'Identity & Access Management'
      ]
    },
    {
      category: 'Hybrid & Multi-Cloud',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      capabilities: [
        'Multi-cloud architecture design',
        'Hybrid cloud connectivity',
        'Cloud workload optimization',
        'Cross-platform data migration',
        'Unified monitoring & management',
        'Cost optimization across platforms'
      ]
    }
  ];

  const cloudServices = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Cloud Architecture Design',
      description: 'Design scalable, resilient cloud architectures tailored to your business requirements.',
      deliverables: ['Architecture blueprints', 'Scalability planning', 'Cost optimization strategy']
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Cloud Migration Services',
      description: 'Seamless migration of applications, data, and workloads to the cloud with minimal disruption.',
      deliverables: ['Migration assessment', 'Data transfer planning', 'Application modernization']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cloud Security Implementation',
      description: 'Comprehensive security measures to protect your cloud infrastructure and data.',
      deliverables: ['Security assessments', 'Compliance configuration', 'Threat monitoring setup']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Cloud Monitoring & Management',
      description: '24/7 monitoring and proactive management of your cloud resources and applications.',
      deliverables: ['Monitoring dashboards', 'Alert configuration', 'Performance optimization']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backup & Disaster Recovery',
      description: 'Robust backup solutions and disaster recovery planning for business continuity.',
      deliverables: ['Backup strategies', 'Recovery procedures', 'Business continuity planning']
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'DevOps & Automation',
      description: 'Implement DevOps practices and automation to accelerate development and deployment.',
      deliverables: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated deployments']
    }
  ];

  const rwandaSpecific = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile-First Cloud Solutions',
      description: 'Optimized for Rwanda\'s mobile-first economy with mobile app backends and APIs.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Local Data Residency',
      description: 'Ensure compliance with Rwanda\'s data protection laws and local hosting requirements.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Financial Services Integration',
      description: 'Secure cloud solutions for mobile money, banking, and fintech applications.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Government Cloud Services',
      description: 'Compliant cloud solutions for government agencies and public sector organizations.'
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
            Our Cloud Platform <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're certified experts across all major cloud platforms, providing you with the flexibility 
            to choose the best solution for your business needs and budget.
          </p>
        </motion.div>

        {/* Cloud Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {cloudPlatforms.map((platform, index) => (
            <motion.div
              key={platform.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {platform.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{platform.category}</h3>
              </div>

              <div className="space-y-3">
                {platform.capabilities.map((capability, capabilityIndex) => (
                  <div key={capabilityIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cloud Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Cloud <span className="gradient-text">Services</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From strategy to implementation, we provide end-to-end cloud services 
              that drive digital transformation and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
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

        {/* Rwanda-Specific Cloud Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cloud Solutions Tailored for <span className="gradient-text">Rwanda</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We understand Rwanda's unique business environment and provide cloud solutions 
              that address local requirements, regulations, and market opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rwandaSpecific.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {solution.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{solution.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Our Cloud <span className="gradient-text">Certifications</span> & Partnerships
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              'AWS Certified Solutions Architect',
              'Microsoft Azure Expert',
              'Google Cloud Professional',
              'Kubernetes Certified',
              'DevOps Professional',
              'Cloud Security Specialist'
            ].map((cert, index) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-200"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudCapabilities;

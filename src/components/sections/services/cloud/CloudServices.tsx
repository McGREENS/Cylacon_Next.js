'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Landmark,
  Users,
  Cloud,
  Server,
  Database,
  Shield
} from 'lucide-react';

const CloudServices: React.FC = () => {
  const industryCloudSolutions = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare Cloud Solutions',
      description: 'HIPAA-compliant cloud infrastructure for hospitals, clinics, and healthcare providers.',
      image: '/cloud_2.jpg',
      capabilities: [
        'Electronic Health Records (EHR) hosting',
        'Medical imaging storage and processing',
        'Telemedicine platform infrastructure',
        'Patient data security and compliance'
      ],
      benefits: [
        'Improved patient care coordination',
        'Secure data sharing between facilities',
        'Scalable telehealth services',
        'Reduced IT infrastructure costs'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: 'Financial Services Cloud',
      description: 'Secure, compliant cloud solutions for banks, microfinance, and fintech companies.',
      image: '/cloud_1.jpg',
      capabilities: [
        'Core banking system migration',
        'Mobile banking app infrastructure',
        'Payment processing platforms',
        'Risk management and compliance tools'
      ],
      benefits: [
        'Enhanced security and compliance',
        'Faster time-to-market for services',
        'Improved customer experience',
        'Cost-effective scalability'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Government Cloud Services',
      description: 'Secure cloud infrastructure for government agencies and public sector organizations.',
      image: '/cloud_2.jpg',
      capabilities: [
        'Citizen service portals',
        'Document management systems',
        'Inter-agency data sharing',
        'Digital identity management'
      ],
      benefits: [
        'Improved citizen services',
        'Enhanced data security',
        'Reduced operational costs',
        'Better inter-agency collaboration'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Education Cloud Platform',
      description: 'Scalable cloud solutions for schools, universities, and educational institutions.',
      image: '/cloud_1.jpg',
      capabilities: [
        'Learning management systems',
        'Student information systems',
        'Virtual classroom infrastructure',
        'Educational content delivery'
      ],
      benefits: [
        'Enhanced remote learning',
        'Improved student engagement',
        'Streamlined administration',
        'Cost-effective IT management'
      ],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const cloudServiceTypes = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Infrastructure as a Service (IaaS)',
      description: 'Virtual servers, storage, and networking resources that scale with your needs.',
      features: ['Virtual machines', 'Block storage', 'Load balancers', 'Auto-scaling']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Platform as a Service (PaaS)',
      description: 'Complete development and deployment platforms for modern applications.',
      features: ['Application hosting', 'Database services', 'Development tools', 'API management']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Software as a Service (SaaS)',
      description: 'Ready-to-use software applications accessible from anywhere.',
      features: ['Business applications', 'Collaboration tools', 'CRM systems', 'ERP solutions']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security as a Service (SECaaS)',
      description: 'Comprehensive security services delivered through the cloud.',
      features: ['Threat monitoring', 'Security analytics', 'Compliance management', 'Incident response']
    }
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
            Industry-Specific Cloud Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that every industry has unique requirements. Our cloud solutions are tailored 
            to meet the specific needs, compliance requirements, and challenges of your sector.
          </p>
        </motion.div>

        {/* Industry Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industryCloudSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Industry Image */}
              <div className={`h-48 bg-gradient-to-br ${solution.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                  style={{
                    backgroundImage: `url(${solution.image})`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {solution.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                {/* Capabilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">What We Can Provide:</h4>
                  <div className="space-y-2">
                    {solution.capabilities.map((capability, capabilityIndex) => (
                      <div key={capabilityIndex} className="flex items-center space-x-2">
                        <Cloud className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cloud Service Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Cloud Service Portfolio
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From infrastructure to applications, we provide comprehensive cloud services 
              that cover all aspects of your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServiceTypes.map((serviceType, index) => (
              <motion.div
                key={serviceType.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {serviceType.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{serviceType.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{serviceType.description}</p>
                
                <div className="space-y-1">
                  {serviceType.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-primary-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SME Cloud Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Cloud Solutions for Small & Medium Enterprises
            </h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              We make enterprise-grade cloud technology accessible to SMEs in Rwanda. 
              Start small, scale as you grow, and only pay for what you use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Start Small, Scale Big</h4>
              <p className="text-primary-100 text-sm">
                Begin with basic cloud services and expand as your business grows
              </p>
            </div>

            <div className="text-center">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Pay-As-You-Use</h4>
              <p className="text-primary-100 text-sm">
                No upfront costs - pay only for the resources you actually consume
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Enterprise Security</h4>
              <p className="text-primary-100 text-sm">
                Get the same level of security as large enterprises at SME prices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudServices;

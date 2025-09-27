'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Cloud, 
  Shield, 
  Database,
  Monitor,
  Wifi,
  Brain,
  Activity,
  CheckCircle,
  Zap,
  Globe,
  Lock
} from 'lucide-react';

const HealthcareTechnology: React.FC = () => {
  const technologyAreas = [
    {
      category: 'Cloud Healthcare Solutions',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      backgroundImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Cloud-based EHR systems',
        'Healthcare data analytics',
        'Scalable infrastructure',
        'Multi-site connectivity',
        'Disaster recovery solutions',
        'Real-time data synchronization'
      ]
    },
    {
      category: 'Mobile Health (mHealth)',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      backgroundImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Mobile health applications',
        'Patient engagement platforms',
        'Remote monitoring apps',
        'Medication reminder systems',
        'Health tracking solutions',
        'Teleconsultation mobile apps'
      ]
    },
    {
      category: 'Healthcare Analytics & AI',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Predictive analytics',
        'Clinical decision support',
        'Population health management',
        'Risk stratification',
        'Outcome prediction models',
        'Healthcare business intelligence'
      ]
    },
    {
      category: 'Medical Device Integration',
      icon: <Activity className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      backgroundImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'IoT medical device connectivity',
        'Real-time monitoring systems',
        'Wearable device integration',
        'Vital signs monitoring',
        'Remote patient monitoring',
        'Medical equipment management'
      ]
    }
  ];

  const implementationApproach = [
    {
      title: 'Assessment & Planning',
      description: 'Comprehensive evaluation of current healthcare IT infrastructure and needs.',
      icon: <Monitor className="w-6 h-6" />,
      steps: ['Current system analysis', 'Workflow assessment', 'Technology gap identification', 'Implementation roadmap']
    },
    {
      title: 'System Design & Integration',
      description: 'Custom healthcare system design with seamless integration capabilities.',
      icon: <Database className="w-6 h-6" />,
      steps: ['Architecture design', 'Integration planning', 'Data migration strategy', 'Security implementation']
    },
    {
      title: 'Deployment & Training',
      description: 'Careful system deployment with comprehensive staff training programs.',
      icon: <Zap className="w-6 h-6" />,
      steps: ['Phased deployment', 'Staff training', 'System testing', 'Go-live support']
    },
    {
      title: 'Support & Optimization',
      description: 'Ongoing support and continuous system optimization for better performance.',
      icon: <Shield className="w-6 h-6" />,
      steps: ['24/7 monitoring', 'Performance optimization', 'Regular updates', 'Continuous improvement']
    }
  ];

  const technologyStandards = [
    {
      standard: 'HL7 FHIR',
      description: 'Healthcare data exchange standard for interoperability',
      icon: <Globe className="w-6 h-6" />,
      benefits: ['Data interoperability', 'System integration', 'Standard compliance', 'Future-proofing']
    },
    {
      standard: 'DICOM',
      description: 'Medical imaging communication and storage standard',
      icon: <Monitor className="w-6 h-6" />,
      benefits: ['Image standardization', 'Cross-platform compatibility', 'Efficient storage', 'Quality assurance']
    },
    {
      standard: 'HIPAA Compliance',
      description: 'Healthcare data privacy and security regulations',
      icon: <Lock className="w-6 h-6" />,
      benefits: ['Data protection', 'Privacy compliance', 'Risk mitigation', 'Trust building']
    },
    {
      standard: 'ICD-10/SNOMED',
      description: 'Medical coding and terminology standards',
      icon: <Database className="w-6 h-6" />,
      benefits: ['Standardized coding', 'Clinical accuracy', 'Billing efficiency', 'Quality reporting']
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
            Advanced Healthcare Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge technology to transform healthcare delivery, improve patient outcomes, 
            and enhance operational efficiency across your healthcare organization.
          </p>
        </motion.div>

        {/* Technology Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {technologyAreas.map((area, index) => (
            <motion.div
              key={area.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image Header */}
              <div className={`h-48 bg-gradient-to-br ${area.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                  style={{
                    backgroundImage: `url(${area.backgroundImage})`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {area.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{area.category}</h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-3">
                  {area.capabilities.map((capability, capabilityIndex) => (
                    <div key={capabilityIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Healthcare IT Implementation Approach
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful healthcare IT implementations 
              with minimal disruption to your healthcare operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationApproach.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {approach.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{approach.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{approach.description}</p>
                
                <div className="space-y-1">
                  {approach.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="text-xs text-blue-600 font-medium">
                      • {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Healthcare Technology Standards & Compliance
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We implement healthcare IT solutions following international standards 
              to ensure interoperability, security, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-green-600">
                    {standard.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{standard.standard}</h4>
                <p className="text-gray-600 text-sm mb-4">{standard.description}</p>
                
                <div className="space-y-1">
                  {standard.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-xs text-green-600 font-medium">
                      • {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthcareTechnology;

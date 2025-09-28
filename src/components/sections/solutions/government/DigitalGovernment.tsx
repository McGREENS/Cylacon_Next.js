'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Cloud, 
  Globe, 
  Database,
  Monitor,
  Wifi,
  Brain,
  Users,
  CheckCircle,
  Zap,
  Building,
  Award
} from 'lucide-react';

const DigitalGovernment: React.FC = () => {
  const digitalInitiatives = [
    {
      category: 'Digital Service Delivery',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Online government services',
        'Digital document processing',
        'Electronic payments',
        'Service status tracking',
        'Multi-channel service delivery',
        'Citizen feedback systems'
      ]
    },
    {
      category: 'Smart Government Analytics',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Government performance dashboards',
        'Predictive analytics for planning',
        'Citizen behavior insights',
        'Resource optimization',
        'Policy impact analysis',
        'Real-time monitoring systems'
      ]
    },
    {
      category: 'Cloud Government Infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      backgroundImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Government cloud platforms',
        'Scalable infrastructure',
        'Data backup and recovery',
        'Multi-agency collaboration',
        'Cost-effective computing',
        'Disaster recovery solutions'
      ]
    },
    {
      category: 'Mobile Government (mGov)',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-primary-600 to-secondary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Mobile government apps',
        'SMS-based services',
        'USSD government services',
        'Mobile payment integration',
        'Location-based services',
        'Offline service capabilities'
      ]
    }
  ];

  const implementationFramework = [
    {
      title: 'Assessment & Strategy',
      description: 'Comprehensive assessment of current government systems and digital strategy development.',
      icon: <Database className="w-6 h-6" />,
      steps: ['Current system audit', 'Digital readiness assessment', 'Strategy development', 'Roadmap planning']
    },
    {
      title: 'Platform Development',
      description: 'Custom government platform development with citizen-centric design.',
      icon: <Building className="w-6 h-6" />,
      steps: ['Platform architecture', 'User experience design', 'System development', 'Integration planning']
    },
    {
      title: 'Deployment & Training',
      description: 'Careful system deployment with comprehensive staff and citizen training.',
      icon: <Users className="w-6 h-6" />,
      steps: ['Phased deployment', 'Staff training', 'Citizen education', 'Change management']
    },
    {
      title: 'Support & Evolution',
      description: 'Ongoing support and continuous platform evolution based on user feedback.',
      icon: <Zap className="w-6 h-6" />,
      steps: ['24/7 monitoring', 'Performance optimization', 'Feature updates', 'Continuous improvement']
    }
  ];

  const rwandaDigitalGovernment = [
    {
      initiative: 'Irembo Platform',
      description: 'Rwanda\'s flagship e-government platform for citizen services',
      icon: <Globe className="w-6 h-6" />,
      achievements: ['100+ services online', '2M+ users registered', '24/7 availability', 'Multi-language support']
    },
    {
      initiative: 'Digital ID System',
      description: 'National digital identity system for secure government services',
      icon: <Users className="w-6 h-6" />,
      achievements: ['12M+ citizens registered', 'Biometric authentication', 'Secure verification', 'Multi-purpose use']
    },
    {
      initiative: 'Smart Rwanda Initiative',
      description: 'Comprehensive smart city and digital government program',
      icon: <Building className="w-6 h-6" />,
      achievements: ['IoT infrastructure', 'Smart city services', 'Data-driven governance', 'Innovation hubs']
    },
    {
      initiative: 'Government Cloud',
      description: 'Centralized cloud infrastructure for government agencies',
      icon: <Cloud className="w-6 h-6" />,
      achievements: ['Centralized hosting', 'Cost optimization', 'Security compliance', 'Scalable resources']
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
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Digital Government</span> Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge digital technologies to transform government operations, 
            improve citizen services, and create a more efficient and transparent public sector.
          </p>
        </motion.div>

        {/* Digital Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {digitalInitiatives.map((initiative, index) => (
            <motion.div
              key={initiative.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
            >
              {/* Background Image Header */}
              <div className={`h-48 bg-gradient-to-br ${initiative.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                  style={{
                    backgroundImage: `url(${initiative.backgroundImage})`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {initiative.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{initiative.category}</h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-3">
                  {initiative.capabilities.map((capability, capabilityIndex) => (
                    <div key={capabilityIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Digital Government</span> Implementation Framework
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful digital government implementations 
              that deliver real value to citizens and government agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationFramework.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {framework.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{framework.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{framework.description}</p>
                
                <div className="space-y-1">
                  {framework.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="text-xs text-primary-600 font-medium">
                      • {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rwanda Digital Government Success */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Rwanda's <span className="gradient-text">Digital Government</span> Success Stories
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Rwanda is a leader in digital government transformation in Africa. 
              We're proud to contribute to these groundbreaking initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rwandaDigitalGovernment.map((initiative, index) => (
              <motion.div
                key={initiative.initiative}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-secondary-600">
                    {initiative.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{initiative.initiative}</h4>
                <p className="text-gray-600 text-sm mb-4">{initiative.description}</p>
                
                <div className="space-y-1">
                  {initiative.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="text-xs text-secondary-600 font-medium">
                      • {achievement}
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

export default DigitalGovernment;

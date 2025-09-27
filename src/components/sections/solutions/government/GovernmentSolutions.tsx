'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  FileText, 
  Globe,
  Smartphone,
  Monitor,
  Database,
  Shield,
  CheckCircle,
  Zap
} from 'lucide-react';

const GovernmentSolutions: React.FC = () => {
  const governmentSolutions = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'E-Government Platforms',
      description: 'Comprehensive digital government platforms for delivering public services online.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Online service delivery portals',
        'Government workflow automation',
        'Inter-agency integration systems',
        'Public information management'
      ],
      benefits: [
        'Improved service delivery',
        'Reduced processing time',
        'Enhanced transparency',
        'Better citizen experience'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Citizen Service Portals',
      description: 'User-friendly online portals enabling citizens to access government services 24/7.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Online application systems',
        'Document submission portals',
        'Payment gateway integration',
        'Service tracking systems'
      ],
      benefits: [
        '24/7 service availability',
        'Reduced waiting times',
        'Convenient access',
        'Digital service delivery'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Digital Identity & Records',
      description: 'Secure digital identity management and electronic records systems.',
      image: '/Rwanda 1.jpg',
      solutions: [
        'National ID management systems',
        'Birth and death registration',
        'Land registry systems',
        'Business registration portals'
      ],
      benefits: [
        'Secure identity verification',
        'Reduced fraud',
        'Efficient record keeping',
        'Improved data accuracy'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Government Data Management',
      description: 'Centralized data management systems for efficient government operations.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Central data repositories',
        'Data analytics platforms',
        'Reporting and dashboards',
        'Data integration systems'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved planning',
        'Better resource allocation',
        'Enhanced monitoring'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const specializedSolutions = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Smart City Solutions',
      description: 'IoT and smart technology solutions for modern city management.',
      features: ['Traffic management', 'Smart lighting', 'Waste management', 'Environmental monitoring']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Government Services',
      description: 'Mobile applications and SMS services for government service delivery.',
      features: ['Mobile apps', 'SMS services', 'USSD integration', 'Mobile payments']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Public Information Systems',
      description: 'Platforms for government transparency and public information sharing.',
      features: ['Open data portals', 'Public announcements', 'News and updates', 'Document libraries']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Government Security Systems',
      description: 'Comprehensive cybersecurity solutions for government infrastructure.',
      features: ['Network security', 'Data protection', 'Access control', 'Incident response']
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
            Comprehensive Government IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From e-government platforms to citizen services, we provide end-to-end digital solutions 
            that transform how government agencies serve citizens and operate efficiently.
          </p>
        </motion.div>

        {/* Government Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {governmentSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image Header */}
              <div className={`h-48 bg-gradient-to-br ${solution.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
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

                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {solution.solutions.map((sol, solIndex) => (
                      <div key={solIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{sol}</span>
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
                        <Zap className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Government Solutions
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced government IT solutions designed for specific public sector needs 
              and modern governance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {solution.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{solution.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-1">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-blue-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rwanda Government Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Building className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Supporting Rwanda's Digital Government Vision</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We're proud to support Rwanda's journey towards becoming a digitally transformed nation. 
            Our government IT solutions align with Vision 2050 and contribute to improved governance and citizen services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Government Agencies</div>
              <div className="text-sm text-blue-100">Successfully digitized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-blue-200">Citizens Served</div>
              <div className="text-sm text-blue-100">Through digital platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Service Availability</div>
              <div className="text-sm text-blue-100">Round-the-clock government services</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernmentSolutions;

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
  Code,
  Smartphone,
  Database,
  Zap
} from 'lucide-react';

const CustomSoftwareSolutions: React.FC = () => {
  const industrySolutions = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare Software',
      description: 'Custom healthcare management systems, patient portals, and medical applications.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Hospital Management Systems',
        'Electronic Health Records (EHR)',
        'Telemedicine Platforms',
        'Patient Appointment Systems'
      ],
      benefits: [
        'Improved patient care',
        'Streamlined operations',
        'Regulatory compliance',
        'Enhanced data security'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: 'Financial Software',
      description: 'Secure financial management systems, banking solutions, and fintech applications.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Banking Management Systems',
        'Mobile Payment Solutions',
        'Loan Management Systems',
        'Financial Analytics Platforms'
      ],
      benefits: [
        'Enhanced security',
        'Regulatory compliance',
        'Improved customer experience',
        'Operational efficiency'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Enterprise Solutions',
      description: 'Comprehensive business management systems and enterprise resource planning solutions.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'ERP Systems',
        'CRM Platforms',
        'Inventory Management',
        'HR Management Systems'
      ],
      benefits: [
        'Unified business processes',
        'Real-time reporting',
        'Improved productivity',
        'Cost reduction'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Education Technology',
      description: 'Learning management systems, student portals, and educational applications.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Learning Management Systems',
        'Student Information Systems',
        'Online Examination Platforms',
        'Virtual Classroom Solutions'
      ],
      benefits: [
        'Enhanced learning experience',
        'Administrative efficiency',
        'Remote learning capabilities',
        'Progress tracking'
      ],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const solutionTypes = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Applications',
      description: 'Custom web-based solutions accessible from any device with a browser.',
      features: ['Responsive design', 'Real-time updates', 'Cloud-based', 'Cross-platform']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['Native performance', 'Offline capabilities', 'Push notifications', 'App store ready']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Desktop Applications',
      description: 'Powerful desktop software for complex business operations.',
      features: ['High performance', 'Advanced features', 'Local data storage', 'System integration']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'API & Integrations',
      description: 'Connect your systems with custom APIs and third-party integrations.',
      features: ['RESTful APIs', 'Real-time sync', 'Secure connections', 'Scalable architecture']
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
            Industry-Specific Software Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build custom software solutions tailored to the unique needs of different industries. 
            Our expertise spans across various sectors, ensuring your software perfectly fits your business.
          </p>
        </motion.div>

        {/* Industry Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industrySolutions.map((solution, index) => (
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
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">What We Can Build:</h4>
                  <div className="space-y-2">
                    {solution.solutions.map((sol, solIndex) => (
                      <div key={solIndex} className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-primary-500 flex-shrink-0" />
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
                        <Zap className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Software We Develop
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From web applications to mobile apps, we build software solutions 
              across all platforms and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {type.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{type.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                
                <div className="space-y-1">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-primary-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Code className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Ready to Build Your Custom Software?</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your unique requirements and create a software solution 
            that perfectly fits your business needs and drives growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-primary-200">Custom Solutions Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-primary-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Support & Maintenance</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/consultation"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Start Your Project
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

export default CustomSoftwareSolutions;

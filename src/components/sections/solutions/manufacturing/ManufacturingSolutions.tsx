'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Database, 
  Settings, 
  BarChart3,
  Award,
  Globe,
  Cog,
  Monitor,
  CheckCircle,
  Zap
} from 'lucide-react';

const ManufacturingSolutions: React.FC = () => {
  const manufacturingSolutions = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Integrated ERP systems for comprehensive manufacturing resource management and planning.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Production planning and scheduling',
        'Inventory and materials management',
        'Financial management and accounting',
        'Human resources management'
      ],
      benefits: [
        'Integrated business processes',
        'Real-time data visibility',
        'Improved resource utilization',
        'Better decision-making'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Manufacturing Execution Systems (MES)',
      description: 'Real-time production monitoring and control systems for shop floor operations.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Real-time production tracking',
        'Quality control and assurance',
        'Equipment performance monitoring',
        'Work order management'
      ],
      benefits: [
        'Improved production efficiency',
        'Enhanced quality control',
        'Reduced downtime',
        'Better compliance tracking'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Industrial IoT Solutions',
      description: 'Connected manufacturing systems with sensors and smart devices for data collection.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Sensor integration and monitoring',
        'Predictive maintenance systems',
        'Energy management solutions',
        'Asset tracking and optimization'
      ],
      benefits: [
        'Predictive maintenance',
        'Energy efficiency',
        'Asset optimization',
        'Data-driven insights'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Management Systems',
      description: 'Comprehensive quality control and assurance systems for manufacturing excellence.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Quality control processes',
        'Statistical process control',
        'Non-conformance management',
        'Supplier quality management'
      ],
      benefits: [
        'Consistent product quality',
        'Reduced defects and waste',
        'Compliance assurance',
        'Customer satisfaction'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const specializedSolutions = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Production Analytics',
      description: 'Advanced analytics and reporting for manufacturing performance optimization.',
      features: ['OEE monitoring', 'Performance dashboards', 'Trend analysis', 'Predictive insights']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Supply Chain Integration',
      description: 'End-to-end supply chain visibility and management solutions.',
      features: ['Supplier integration', 'Demand planning', 'Logistics optimization', 'Inventory management']
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'Maintenance Management',
      description: 'Computerized maintenance management systems for equipment reliability.',
      features: ['Preventive maintenance', 'Work order management', 'Spare parts inventory', 'Equipment history']
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: 'Plant Floor Systems',
      description: 'Integrated plant floor systems for seamless manufacturing operations.',
      features: ['SCADA systems', 'HMI interfaces', 'Data historians', 'Alarm management']
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
            Comprehensive Manufacturing IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From small production facilities to large industrial complexes, we provide end-to-end digital solutions 
            that transform manufacturing operations and drive Industry 4.0 adoption across Rwanda.
          </p>
        </motion.div>

        {/* Manufacturing Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {manufacturingSolutions.map((solution, index) => (
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
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
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
                        <Zap className="w-4 h-4 text-blue-500 flex-shrink-0" />
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
              Specialized Manufacturing Solutions
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced manufacturing technology solutions designed for specific operational needs 
              and modern industrial requirements.
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

        {/* Rwanda Manufacturing Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Factory className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Driving Rwanda's Industrial Growth</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We're proud to support Rwanda's manufacturing sector transformation with innovative technology solutions. 
            From textile production to food processing, we help manufacturers achieve operational excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Manufacturers</div>
              <div className="text-sm text-blue-100">Successfully digitized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">35%</div>
              <div className="text-blue-200">Efficiency Increase</div>
              <div className="text-sm text-blue-100">Average improvement achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">System Uptime</div>
              <div className="text-sm text-blue-100">Reliable manufacturing operations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManufacturingSolutions;

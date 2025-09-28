'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Cog, 
  TrendingUp, 
  BarChart3,
  Zap,
  Settings,
  CheckCircle,
  Database,
  Monitor,
  Smartphone,
  Globe,
  Award
} from 'lucide-react';

interface ManufacturingOverviewProps {
  solution: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const ManufacturingOverview: React.FC<ManufacturingOverviewProps> = ({ solution }) => {
  const manufacturingServices = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Integrated ERP systems for comprehensive manufacturing resource management and planning.'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Manufacturing Execution Systems (MES)',
      description: 'Real-time production monitoring and control systems for shop floor operations.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Industrial IoT Solutions',
      description: 'Connected manufacturing systems with sensors and smart devices for data collection.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Production Planning & Scheduling',
      description: 'Advanced planning systems for optimized production schedules and resource allocation.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Management Systems',
      description: 'Comprehensive quality control and assurance systems for manufacturing excellence.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain visibility and management for manufacturing operations.'
    }
  ];

  const manufacturingBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Production Efficiency',
      description: 'Increased manufacturing efficiency through automation and optimization.',
      stat: '35% Increase'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Improvement',
      description: 'Enhanced product quality through systematic quality management.',
      stat: '40% Better'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Cost Reduction',
      description: 'Reduced operational costs through process optimization and waste reduction.',
      stat: '25% Savings'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data-Driven Insights',
      description: 'Real-time production insights for better decision-making.',
      stat: '100% Visibility'
    }
  ];

  const rwandaManufacturingStats = [
    { number: '12%', label: 'GDP Contribution', description: 'Manufacturing contributes to Rwanda\'s GDP' },
    { number: '80%', label: 'Growth Potential', description: 'Manufacturing sector growth opportunity' },
    { number: '50+', label: 'Manufacturers', description: 'Successfully digitized by CyLaCon' },
    { number: '24/7', label: 'System Monitoring', description: 'Continuous manufacturing system support' }
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
            Transforming <span className="gradient-text">Manufacturing</span> in Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.description}. We help manufacturing companies across Rwanda leverage technology 
            to improve efficiency, enhance quality, and drive industrial growth through smart manufacturing solutions.
          </p>
        </motion.div>

        {/* Rwanda Manufacturing Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-16 border border-primary-100"
        >
          <div className="text-center mb-8">
            <Factory className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rwanda's <span className="gradient-text">Manufacturing Sector</span> Growth
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Rwanda is positioning itself as a regional manufacturing hub with significant investments in industrial development. 
              Digital transformation is key to achieving competitive manufacturing capabilities and driving economic growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rwandaManufacturingStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Manufacturing Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            Comprehensive <span className="gradient-text">Manufacturing IT Solutions</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Manufacturing Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">CyLaCon</span> for Manufacturing IT?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our manufacturing IT solutions are designed specifically for Rwanda's industrial landscape, 
              ensuring compatibility with local infrastructure and alignment with national industrial development goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors duration-300">
                  <div className="text-secondary-600 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">{benefit.stat}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Manufacturing Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Manufacturing <span className="text-primary-200">Technology Stack</span></h3>
            <p className="text-primary-100 text-lg">
              We implement manufacturing IT solutions using industry-leading technologies and 
              standards to ensure scalability, reliability, and integration with existing systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'SAP ERP', 'Oracle MES', 'Siemens PLM', 'Rockwell', 'Schneider Electric', 'GE Digital',
              'Microsoft Azure IoT', 'AWS IoT', 'ThingWorx', 'Wonderware', 'Ignition SCADA', 'OSIsoft PI'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-colors duration-200"
              >
                <div className="text-sm font-medium">{tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManufacturingOverview;

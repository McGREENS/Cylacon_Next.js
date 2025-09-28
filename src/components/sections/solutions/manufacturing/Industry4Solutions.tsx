'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Wifi, 
  Brain, 
  Cloud,
  Bot,
  BarChart3,
  Settings,
  Monitor,
  CheckCircle,
  Zap,
  Factory,
  Globe
} from 'lucide-react';

const Industry4Solutions: React.FC = () => {
  const industry4Categories = [
    {
      category: 'Smart Factory Automation',
      icon: <Bot className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Automated production lines',
        'Robotic process automation',
        'Intelligent material handling',
        'Adaptive manufacturing systems',
        'Human-robot collaboration',
        'Flexible manufacturing cells'
      ]
    },
    {
      category: 'Industrial IoT & Connectivity',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Sensor networks and monitoring',
        'Edge computing solutions',
        'Real-time data collection',
        'Machine-to-machine communication',
        'Wireless connectivity solutions',
        'Industrial network infrastructure'
      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      backgroundImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Predictive maintenance algorithms',
        'Quality prediction models',
        'Production optimization AI',
        'Anomaly detection systems',
        'Computer vision for inspection',
        'Intelligent scheduling systems'
      ]
    },
    {
      category: 'Digital Twin Technology',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Virtual factory modeling',
        'Process simulation and optimization',
        'Predictive performance analysis',
        'Virtual commissioning',
        'Real-time synchronization',
        'Scenario testing and planning'
      ]
    }
  ];

  const implementationRoadmap = [
    {
      phase: 'Assessment & Strategy',
      description: 'Comprehensive evaluation of current manufacturing capabilities and Industry 4.0 readiness.',
      icon: <BarChart3 className="w-6 h-6" />,
      activities: ['Digital maturity assessment', 'Technology gap analysis', 'ROI evaluation', 'Implementation roadmap']
    },
    {
      phase: 'Infrastructure Development',
      description: 'Building the foundational technology infrastructure for smart manufacturing.',
      icon: <Cloud className="w-6 h-6" />,
      activities: ['Network infrastructure', 'Cloud platform setup', 'Security implementation', 'Data architecture']
    },
    {
      phase: 'System Integration',
      description: 'Integrating smart manufacturing technologies with existing systems.',
      icon: <Settings className="w-6 h-6" />,
      activities: ['IoT sensor deployment', 'System integration', 'Data flow configuration', 'Testing and validation']
    },
    {
      phase: 'Optimization & Scale',
      description: 'Continuous optimization and scaling of Industry 4.0 capabilities.',
      icon: <Zap className="w-6 h-6" />,
      activities: ['Performance monitoring', 'Process optimization', 'Capability expansion', 'Continuous improvement']
    }
  ];

  const industry4Benefits = [
    {
      benefit: 'Predictive Maintenance',
      description: 'AI-powered maintenance scheduling to prevent equipment failures',
      icon: <Cpu className="w-6 h-6" />,
      impact: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Improved reliability']
    },
    {
      benefit: 'Real-time Optimization',
      description: 'Continuous process optimization based on real-time data analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      impact: ['Increased efficiency', 'Reduced waste', 'Energy optimization', 'Quality improvement']
    },
    {
      benefit: 'Flexible Manufacturing',
      description: 'Adaptive production systems that respond to changing demands',
      icon: <Factory className="w-6 h-6" />,
      impact: ['Mass customization', 'Shorter lead times', 'Reduced inventory', 'Market responsiveness']
    },
    {
      benefit: 'Data-Driven Decisions',
      description: 'Advanced analytics providing insights for strategic decision-making',
      icon: <Globe className="w-6 h-6" />,
      impact: ['Better forecasting', 'Risk mitigation', 'Strategic planning', 'Competitive advantage']
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
            <span className="gradient-text">Industry 4.0</span> & Smart Manufacturing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your manufacturing operations with cutting-edge Industry 4.0 technologies 
            that enable smart, connected, and autonomous manufacturing capabilities.
          </p>
        </motion.div>

        {/* Industry 4.0 Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industry4Categories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image Header */}
              <div className={`h-48 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                  style={{
                    backgroundImage: `url(${category.backgroundImage})`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-3">
                  {category.capabilities.map((capability, capabilityIndex) => (
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

        {/* Implementation Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Industry 4.0</span> Implementation Roadmap
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures successful Industry 4.0 transformation 
              that delivers measurable improvements in manufacturing performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationRoadmap.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {phase.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{phase.phase}</h4>
                <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                
                <div className="space-y-1">
                  {phase.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="text-xs text-primary-600 font-medium">
                      • {activity}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry 4.0 Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Industry 4.0</span> Business Benefits
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the transformative benefits of Industry 4.0 technologies 
              that are revolutionizing manufacturing operations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industry4Benefits.map((benefit, index) => (
              <motion.div
                key={benefit.benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-secondary-600">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.benefit}</h4>
                <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                
                <div className="space-y-1">
                  {benefit.impact.map((impact, impactIndex) => (
                    <div key={impactIndex} className="text-xs text-secondary-600 font-medium">
                      • {impact}
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

export default Industry4Solutions;

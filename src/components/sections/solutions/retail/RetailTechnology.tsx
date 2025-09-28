'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Cloud, 
  Brain, 
  Wifi,
  CreditCard,
  BarChart3,
  Users,
  ShoppingCart,
  CheckCircle,
  Zap,
  Store,
  Globe
} from 'lucide-react';

const RetailTechnology: React.FC = () => {
  const technologyCategories = [
    {
      category: 'AI-Powered Retail Solutions',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      backgroundImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Personalized product recommendations',
        'Dynamic pricing optimization',
        'Inventory demand forecasting',
        'Customer behavior analytics',
        'Chatbot customer service',
        'Fraud detection and prevention'
      ]
    },
    {
      category: 'Cloud Retail Infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Scalable e-commerce platforms',
        'Cloud-based POS systems',
        'Multi-store inventory sync',
        'Real-time data analytics',
        'Automated backup and recovery',
        'Global content delivery'
      ]
    },
    {
      category: 'Mobile Commerce Solutions',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Native mobile shopping apps',
        'Progressive web applications',
        'Mobile payment integration',
        'Push notification campaigns',
        'Location-based services',
        'Offline shopping capabilities'
      ]
    },
    {
      category: 'IoT & Smart Retail',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-primary-600 to-secondary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Smart shelf monitoring',
        'RFID inventory tracking',
        'Beacon-based marketing',
        'Environmental monitoring',
        'Automated checkout systems',
        'Smart security systems'
      ]
    }
  ];

  const implementationApproach = [
    {
      title: 'Business Analysis',
      description: 'Comprehensive analysis of retail business needs and current technology landscape.',
      icon: <BarChart3 className="w-6 h-6" />,
      steps: ['Business requirements analysis', 'Technology audit', 'Competitive analysis', 'ROI assessment']
    },
    {
      title: 'Solution Design',
      description: 'Custom retail technology solution design aligned with business objectives.',
      icon: <Brain className="w-6 h-6" />,
      steps: ['Architecture planning', 'User experience design', 'Integration strategy', 'Scalability planning']
    },
    {
      title: 'Implementation & Integration',
      description: 'Careful deployment with seamless integration to existing systems.',
      icon: <Users className="w-6 h-6" />,
      steps: ['Phased rollout', 'Staff training', 'System integration', 'Performance testing']
    },
    {
      title: 'Optimization & Support',
      description: 'Ongoing optimization and support to maximize retail performance.',
      icon: <Zap className="w-6 h-6" />,
      steps: ['Performance monitoring', 'Analytics insights', 'Continuous improvement', 'Technical support']
    }
  ];

  const retailTrends = [
    {
      trend: 'Omnichannel Commerce',
      description: 'Seamless integration of online and offline retail experiences',
      icon: <Globe className="w-6 h-6" />,
      impact: ['Unified customer experience', 'Cross-channel inventory', 'Consistent branding', 'Integrated loyalty programs']
    },
    {
      trend: 'Social Commerce',
      description: 'Shopping directly through social media platforms and influencer marketing',
      icon: <Users className="w-6 h-6" />,
      impact: ['Social media integration', 'Influencer partnerships', 'User-generated content', 'Social proof marketing']
    },
    {
      trend: 'Contactless Shopping',
      description: 'Touch-free shopping experiences and contactless payment solutions',
      icon: <CreditCard className="w-6 h-6" />,
      impact: ['QR code payments', 'Mobile wallets', 'Curbside pickup', 'Self-service options']
    },
    {
      trend: 'Sustainability Tech',
      description: 'Technology solutions for sustainable and eco-friendly retail practices',
      icon: <Store className="w-6 h-6" />,
      impact: ['Carbon footprint tracking', 'Sustainable packaging', 'Waste reduction', 'Green supply chain']
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
            Advanced <span className="gradient-text">Retail Technology</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge technology to create exceptional shopping experiences, 
            optimize operations, and stay ahead in Rwanda's competitive retail landscape.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {technologyCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
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
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
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
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Retail Technology</span> Implementation Methodology
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven approach ensures successful retail technology implementations 
              that deliver measurable improvements in sales and customer satisfaction.
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
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {approach.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{approach.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{approach.description}</p>
                
                <div className="space-y-1">
                  {approach.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="text-xs text-primary-600 font-medium">
                      • {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Retail Technology Trends */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Latest <span className="gradient-text">Retail Technology</span> Trends
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay ahead with the latest retail technology trends that are shaping the future of commerce 
              and transforming how customers shop and businesses operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailTrends.map((trend, index) => (
              <motion.div
                key={trend.trend}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-secondary-600">
                    {trend.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{trend.trend}</h4>
                <p className="text-gray-600 text-sm mb-4">{trend.description}</p>
                
                <div className="space-y-1">
                  {trend.impact.map((impact, impactIndex) => (
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

export default RetailTechnology;

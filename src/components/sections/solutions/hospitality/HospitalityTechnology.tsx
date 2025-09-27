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
  Hotel,
  CheckCircle,
  Zap,
  Star,
  Globe
} from 'lucide-react';

const HospitalityTechnology: React.FC = () => {
  const technologyCategories = [
    {
      category: 'Smart Hotel Technology',
      icon: <Hotel className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      backgroundImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'IoT-enabled room controls',
        'Smart lighting and climate',
        'Voice-activated assistants',
        'Automated check-in/check-out',
        'Digital room keys and access',
        'Energy management systems'
      ]
    },
    {
      category: 'Guest Experience Technology',
      icon: <Star className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      backgroundImage: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Personalized guest portals',
        'Mobile concierge services',
        'In-room entertainment systems',
        'Digital menu and ordering',
        'Guest feedback platforms',
        'Loyalty program integration'
      ]
    },
    {
      category: 'Cloud Hospitality Platforms',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      backgroundImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Cloud-based PMS systems',
        'Multi-property management',
        'Real-time data synchronization',
        'Scalable infrastructure',
        'Remote system access',
        'Automated backup solutions'
      ]
    },
    {
      category: 'AI & Analytics',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Predictive analytics for demand',
        'AI-powered chatbots',
        'Revenue optimization algorithms',
        'Guest behavior analysis',
        'Automated pricing strategies',
        'Operational efficiency insights'
      ]
    }
  ];

  const implementationApproach = [
    {
      title: 'Hospitality Assessment',
      description: 'Comprehensive evaluation of current hospitality operations and technology needs.',
      icon: <BarChart3 className="w-6 h-6" />,
      steps: ['Operations analysis', 'Guest journey mapping', 'Technology audit', 'ROI planning']
    },
    {
      title: 'Solution Design',
      description: 'Custom hospitality technology design aligned with guest experience goals.',
      icon: <Brain className="w-6 h-6" />,
      steps: ['System architecture', 'User experience design', 'Integration planning', 'Staff workflow design']
    },
    {
      title: 'Implementation & Training',
      description: 'Careful deployment with comprehensive staff training and guest onboarding.',
      icon: <Users className="w-6 h-6" />,
      steps: ['Phased rollout', 'Staff training', 'Guest education', 'System testing']
    },
    {
      title: 'Optimization & Support',
      description: 'Ongoing optimization and support to maximize guest satisfaction and efficiency.',
      icon: <Zap className="w-6 h-6" />,
      steps: ['Performance monitoring', 'Guest feedback analysis', 'Continuous improvement', 'Technical support']
    }
  ];

  const hospitalityTrends = [
    {
      trend: 'Contactless Guest Services',
      description: 'Touch-free experiences from check-in to room service and payments',
      icon: <Smartphone className="w-6 h-6" />,
      impact: ['Mobile check-in/out', 'Digital room keys', 'Contactless payments', 'QR code menus']
    },
    {
      trend: 'Personalized Guest Experiences',
      description: 'AI-driven personalization for tailored guest services and recommendations',
      icon: <Star className="w-6 h-6" />,
      impact: ['Custom recommendations', 'Personalized offers', 'Preference tracking', 'Tailored communications']
    },
    {
      trend: 'Sustainable Technology',
      description: 'Green technology solutions for environmentally conscious hospitality',
      icon: <Globe className="w-6 h-6" />,
      impact: ['Energy management', 'Waste reduction', 'Carbon tracking', 'Sustainable practices']
    },
    {
      trend: 'Revenue Optimization',
      description: 'Advanced analytics and AI for dynamic pricing and revenue management',
      icon: <BarChart3 className="w-6 h-6" />,
      impact: ['Dynamic pricing', 'Demand forecasting', 'Competitor analysis', 'Yield optimization']
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
            Advanced Hospitality Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge technology to create exceptional guest experiences, 
            optimize operations, and stay competitive in Rwanda's dynamic hospitality market.
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
              Hospitality Technology Implementation Methodology
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven approach ensures successful hospitality technology implementations 
              that enhance guest experiences while improving operational efficiency.
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
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">
                    {approach.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{approach.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{approach.description}</p>
                
                <div className="space-y-1">
                  {approach.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="text-xs text-green-600 font-medium">
                      • {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hospitality Technology Trends */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Hospitality Technology Trends
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay ahead with the latest hospitality technology trends that are transforming 
              guest experiences and operational efficiency in the hospitality industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hospitalityTrends.map((trend, index) => (
              <motion.div
                key={trend.trend}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-blue-600">
                    {trend.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{trend.trend}</h4>
                <p className="text-gray-600 text-sm mb-4">{trend.description}</p>
                
                <div className="space-y-1">
                  {trend.impact.map((impact, impactIndex) => (
                    <div key={impactIndex} className="text-xs text-blue-600 font-medium">
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

export default HospitalityTechnology;

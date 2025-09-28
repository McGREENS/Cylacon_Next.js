'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  CreditCard, 
  Database, 
  Globe,
  Smartphone,
  Users,
  BarChart3,
  Store,
  CheckCircle,
  Zap
} from 'lucide-react';

const RetailSolutions: React.FC = () => {
  const retailSolutions = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Point of Sale (POS) Systems',
      description: 'Modern POS systems with integrated payment processing and inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Cloud-based POS systems',
        'Mobile payment processing',
        'Inventory integration',
        'Customer loyalty programs'
      ],
      benefits: [
        'Faster checkout process',
        'Real-time sales tracking',
        'Integrated payment options',
        'Better customer experience'
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'E-commerce Platforms',
      description: 'Custom e-commerce websites and mobile apps for online retail success.',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Custom e-commerce websites',
        'Mobile shopping apps',
        'Payment gateway integration',
        'Order management systems'
      ],
      benefits: [
        'Expanded market reach',
        '24/7 sales capability',
        'Reduced operational costs',
        'Better customer insights'
      ],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and automated stock management solutions.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Real-time stock tracking',
        'Automated reorder alerts',
        'Multi-location inventory',
        'Supplier management'
      ],
      benefits: [
        'Reduced stockouts',
        'Optimized inventory levels',
        'Cost savings',
        'Improved efficiency'
      ],
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Relationship Management',
      description: 'CRM systems to manage customer relationships and drive loyalty.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Customer database management',
        'Loyalty program systems',
        'Personalized marketing',
        'Customer service tools'
      ],
      benefits: [
        'Increased customer retention',
        'Personalized experiences',
        'Higher customer lifetime value',
        'Better customer insights'
      ],
      color: 'from-primary-600 to-secondary-600'
    }
  ];

  const specializedSolutions = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Retail Solutions',
      description: 'Mobile POS systems and retail apps for modern commerce.',
      features: ['Mobile POS terminals', 'Retail mobile apps', 'Mobile payments', 'Offline capabilities']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Retail Analytics',
      description: 'Business intelligence and analytics for data-driven decisions.',
      features: ['Sales analytics', 'Customer insights', 'Inventory reports', 'Performance dashboards']
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: 'Omnichannel Solutions',
      description: 'Integrated solutions for seamless online and offline experiences.',
      features: ['Unified inventory', 'Cross-channel promotions', 'Customer journey tracking', 'Integrated loyalty']
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization and management systems.',
      features: ['Supplier management', 'Purchase orders', 'Logistics tracking', 'Cost optimization']
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
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="gradient-text">Retail IT Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From small shops to large retail chains, we provide end-to-end digital solutions 
            that transform retail operations and enhance customer experiences across all touchpoints.
          </p>
        </motion.div>

        {/* Retail Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {retailSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
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
                        <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
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
                        <Zap className="w-4 h-4 text-primary-500 flex-shrink-0" />
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
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized <span className="gradient-text">Retail Solutions</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced retail technology solutions designed for specific business needs 
              and modern commerce requirements.
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
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {solution.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{solution.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-1">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-primary-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rwanda Retail Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Store className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Empowering Rwanda's <span className="text-primary-200">Retail Sector</span></h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We're proud to support Rwanda's growing retail sector with innovative technology solutions. 
            From traditional markets to modern shopping centers, we help businesses thrive in the digital age.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-primary-200">Retail Businesses</div>
              <div className="text-sm text-primary-100">Successfully digitized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-primary-200">Transactions Processed</div>
              <div className="text-sm text-primary-100">Through our retail systems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200">System Uptime</div>
              <div className="text-sm text-primary-100">Reliable retail operations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RetailSolutions;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hotel, 
  Utensils, 
  Users, 
  BarChart3,
  Smartphone,
  CreditCard,
  Star,
  Calendar,
  CheckCircle,
  Zap
} from 'lucide-react';

const HospitalitySolutions: React.FC = () => {
  const hospitalitySolutions = [
    {
      icon: <Hotel className="w-8 h-8" />,
      title: 'Hotel Management Systems',
      description: 'Comprehensive hotel management solutions for reservations, operations, and guest services.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Front desk operations management',
        'Reservation and booking systems',
        'Housekeeping management',
        'Guest communication platforms'
      ],
      benefits: [
        'Streamlined hotel operations',
        'Improved guest satisfaction',
        'Efficient resource management',
        'Enhanced service delivery'
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Restaurant & F&B Systems',
      description: 'Modern point-of-sale and management systems for restaurants and food service operations.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Restaurant POS systems',
        'Kitchen display systems',
        'Inventory management',
        'Menu and pricing management'
      ],
      benefits: [
        'Faster order processing',
        'Improved kitchen efficiency',
        'Better inventory control',
        'Enhanced customer experience'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Guest Experience Platforms',
      description: 'Digital platforms designed to enhance guest experiences and personalize services.',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Guest portal and mobile apps',
        'Concierge service platforms',
        'Loyalty program management',
        'Feedback and review systems'
      ],
      benefits: [
        'Personalized guest experiences',
        'Increased guest loyalty',
        'Better service coordination',
        'Improved guest satisfaction'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Revenue Management Systems',
      description: 'Advanced analytics and pricing optimization tools for maximizing hospitality revenue.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Dynamic pricing algorithms',
        'Demand forecasting',
        'Competitor analysis tools',
        'Performance dashboards'
      ],
      benefits: [
        'Optimized room rates',
        'Increased revenue per room',
        'Better demand prediction',
        'Data-driven pricing decisions'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const specializedSolutions = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Event Management Systems',
      description: 'Comprehensive event planning and management solutions for hotels and venues.',
      features: ['Event booking', 'Resource scheduling', 'Catering management', 'Guest coordination']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Hospitality Apps',
      description: 'Custom mobile applications for guests and staff operations.',
      features: ['Guest mobile check-in', 'Room service ordering', 'Staff communication', 'Digital concierge']
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Payment Solutions',
      description: 'Secure payment processing and financial management for hospitality businesses.',
      features: ['Multi-currency support', 'Mobile payments', 'Split billing', 'Financial reporting']
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Quality Management',
      description: 'Systems to monitor and maintain service quality standards.',
      features: ['Service monitoring', 'Quality audits', 'Staff performance', 'Guest feedback analysis']
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
            Comprehensive <span className="gradient-text">Hospitality IT Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From boutique hotels to large resorts, we provide end-to-end digital solutions 
            that transform hospitality operations and create exceptional guest experiences across Rwanda.
          </p>
        </motion.div>

        {/* Hospitality Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {hospitalitySolutions.map((solution, index) => (
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized <span className="gradient-text">Hospitality Solutions</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced hospitality technology solutions designed for specific operational needs 
              and modern guest service requirements.
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

        {/* Rwanda Tourism Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Hotel className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Supporting Rwanda's <span className="gradient-text">Tourism Excellence</span></h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We're proud to support Rwanda's hospitality sector with innovative technology solutions. 
            From luxury lodges to urban hotels, we help businesses deliver world-class guest experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-primary-200">Hotels & Restaurants</div>
              <div className="text-sm text-primary-100">Successfully digitized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">45%</div>
              <div className="text-primary-200">Guest Satisfaction</div>
              <div className="text-sm text-primary-100">Average improvement achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200">System Uptime</div>
              <div className="text-sm text-primary-100">Reliable hospitality operations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HospitalitySolutions;

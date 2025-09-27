'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hotel, 
  Users, 
  TrendingUp, 
  BarChart3,
  Zap,
  Star,
  CheckCircle,
  Utensils,
  Monitor,
  Smartphone,
  Globe,
  CreditCard
} from 'lucide-react';

interface HospitalityOverviewProps {
  solution: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const HospitalityOverview: React.FC<HospitalityOverviewProps> = ({ solution }) => {
  const hospitalityServices = [
    {
      icon: <Hotel className="w-6 h-6" />,
      title: 'Hotel Management Systems (HMS)',
      description: 'Comprehensive hotel management solutions for reservations, guest services, and operations.'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Property Management Systems (PMS)',
      description: 'Advanced PMS for front desk operations, housekeeping, and guest relationship management.'
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Restaurant POS Systems',
      description: 'Modern point-of-sale systems for restaurants, bars, and food service operations.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Guest Experience Platforms',
      description: 'Digital platforms to enhance guest experiences and streamline service delivery.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Revenue Management Systems',
      description: 'Dynamic pricing and revenue optimization tools for maximizing profitability.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Hospitality Apps',
      description: 'Custom mobile applications for guest services, bookings, and hotel operations.'
    }
  ];

  const hospitalityBenefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Guest Satisfaction',
      description: 'Enhanced guest experiences through personalized and efficient service.',
      stat: '45% Increase'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Revenue Growth',
      description: 'Increased revenue through optimized pricing and operational efficiency.',
      stat: '30% Growth'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Operational Efficiency',
      description: 'Streamlined operations and reduced manual processes.',
      stat: '50% Faster'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data Insights',
      description: 'Real-time analytics for better decision-making and performance tracking.',
      stat: '100% Visibility'
    }
  ];

  const rwandaTourismStats = [
    { number: '15%', label: 'GDP Contribution', description: 'Tourism contributes to Rwanda\'s GDP' },
    { number: '1.4M', label: 'Annual Visitors', description: 'International tourists visit Rwanda yearly' },
    { number: '100+', label: 'Hotels Digitized', description: 'Hospitality businesses served by CyLaCon' },
    { number: '24/7', label: 'Guest Support', description: 'Round-the-clock hospitality system support' }
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
            Transforming Hospitality in Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.description}. We help hospitality businesses across Rwanda leverage technology 
            to enhance guest experiences, optimize operations, and capitalize on the country's growing tourism sector.
          </p>
        </motion.div>

        {/* Rwanda Tourism Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <div className="text-center mb-8">
            <Hotel className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rwanda's Tourism & Hospitality Growth
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Rwanda has emerged as a premier destination in East Africa, known for its stunning landscapes, 
              wildlife, and cultural experiences. The hospitality sector is rapidly growing, creating opportunities 
              for technology-driven service excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rwandaTourismStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hospitality Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            Comprehensive Hospitality IT Solutions
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <div className="text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hospitality Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CyLaCon for Hospitality IT?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our hospitality IT solutions are designed specifically for Rwanda's tourism landscape, 
              ensuring seamless integration with local payment systems and alignment with hospitality best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hospitalityBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{benefit.stat}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hospitality Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Hospitality Technology Stack</h3>
            <p className="text-green-100 text-lg">
              We implement hospitality IT solutions using industry-leading technologies and 
              platforms to ensure reliability, scalability, and exceptional guest experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'Oracle Hospitality', 'Amadeus', 'Sabre', 'Booking.com', 'Expedia', 'TripAdvisor',
              'Square POS', 'Toast POS', 'Resy', 'OpenTable', 'Salesforce', 'HubSpot'
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

export default HospitalityOverview;

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Building, 
  GraduationCap, 
  ShoppingCart, 
  Factory, 
  Hotel,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Button from '@/components/ui/Button';

const IndustrySolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      name: 'Healthcare',
      icon: Heart,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-500',
      description: 'Digital health solutions transforming patient care and medical operations across Rwanda',
      image: '/healthcare-tech.jpg',
      features: [
        'Electronic Health Records (EHR)',
        'Telemedicine Platforms',
        'HIPAA Compliance Solutions',
        'Patient Management Systems',
        'Medical Device Integration',
        'Health Data Analytics'
      ]
    },
    {
      name: 'Government',
      icon: Building,
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-500',
      description: 'Digital government solutions enhancing citizen services and public administration',
      image: '/government-tech.jpg',
      features: [
        'E-Government Portals',
        'Citizen Service Platforms',
        'Digital Document Management',
        'Public Service Automation',
        'Data Security & Compliance',
        'Multi-language Support'
      ]
    },
    {
      name: 'Education',
      icon: GraduationCap,
      color: 'from-primary-400 to-primary-500',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-400',
      description: 'Modern educational technology empowering learning institutions across East Africa',
      image: '/education-tech.jpg',
      features: [
        'Learning Management Systems (LMS)',
        'Virtual Classroom Platforms',
        'Student Information Systems',
        'Online Assessment Tools',
        'Educational Analytics',
        'Mobile Learning Apps'
      ]
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
      iconColor: 'text-accent-500',
      description: 'Comprehensive retail technology solutions driving commerce growth and customer satisfaction',
      image: '/retail-tech.jpg',
      features: [
        'E-commerce Platforms',
        'Inventory Management Systems',
        'Point of Sale (POS) Solutions',
        'Customer Relationship Management',
        'Supply Chain Optimization',
        'Mobile Commerce Apps'
      ]
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-500',
      description: 'Smart manufacturing solutions with IoT integration and advanced automation systems',
      image: '/manufacturing-tech.jpg',
      features: [
        'IoT Integration',
        'Production Monitoring Systems',
        'Quality Control Automation',
        'Supply Chain Management',
        'Predictive Maintenance',
        'Real-time Analytics'
      ]
    },
    {
      name: 'Hospitality',
      icon: Hotel,
      color: 'from-primary-600 to-primary-700',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      description: 'Complete hospitality technology solutions enhancing guest experiences and operations',
      image: '/hospitality-tech.jpg',
      features: [
        'Hotel Management Systems',
        'Online Booking Platforms',
        'Guest Service Applications',
        'Revenue Management Tools',
        'Staff Management Systems',
        'Customer Experience Analytics'
      ]
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industry <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored technology solutions designed specifically for your industry, 
            with deep understanding of sector-specific challenges and requirements.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {industries.map((industry, index) => (
            <button
              key={industry.name}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                {React.createElement(industry.icon, { className: "w-5 h-5" })}
                <span>{industry.name}</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className={`w-16 h-16 ${industries[activeTab].bgColor} rounded-2xl flex items-center justify-center`}>
                  {React.createElement(industries[activeTab].icon, { 
                    className: `w-8 h-8 ${industries[activeTab].iconColor}` 
                  })}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {industries[activeTab].name} Solutions
                </h3>
                <p className="text-xl text-gray-600">
                  {industries[activeTab].description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {industries[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" href="/consultation">
                  Get Industry Consultation
                </Button>
                <Button variant="outline" size="lg" href={`/solutions/${industries[activeTab].name.toLowerCase()}`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Content - Industry Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                {/* Main Industry Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div 
                    className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${industries[activeTab].image})`,
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industries[activeTab].color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Floating Icon */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 right-6"
                  >
                    <div className={`w-16 h-16 ${industries[activeTab].bgColor} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/20`}>
                      {React.createElement(industries[activeTab].icon, { 
                        className: `w-8 h-8 ${industries[activeTab].iconColor}` 
                      })}
                    </div>
                  </motion.div>
                  
                  {/* Bottom Info Card */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {industries[activeTab].name} Solutions
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Cutting-edge technology solutions designed specifically for the {industries[activeTab].name.toLowerCase()} industry
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">150+</div>
                          <div className="text-xs text-gray-500">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">99%</div>
                          <div className="text-xs text-gray-500">Success Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">24/7</div>
                          <div className="text-xs text-gray-500">Support</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustrySolutions;

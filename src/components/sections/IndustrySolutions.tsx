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
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500',
      description: 'EHR systems, telemedicine, HIPAA compliance',
      features: [
        'Electronic Health Records (EHR)',
        'Telemedicine Platforms',
        'HIPAA Compliance Solutions',
        'Patient Management Systems',
        'Medical Device Integration',
        'Health Data Analytics'
      ],
      caseStudy: {
        title: 'MedGet Platform',
        description: 'Developed a comprehensive healthcare management system for a leading medical facility in Kigali.',
        results: ['40% increase in patient satisfaction', '60% reduction in administrative tasks', '100% HIPAA compliance']
      }
    },
    {
      name: 'Government',
      icon: Building,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      description: 'E-government portals, citizen services',
      features: [
        'E-Government Portals',
        'Citizen Service Platforms',
        'Digital Document Management',
        'Public Service Automation',
        'Data Security & Compliance',
        'Multi-language Support'
      ],
      caseStudy: {
        title: 'Rwanda Digital Services',
        description: 'Implemented digital transformation solutions for government agencies across Rwanda.',
        results: ['50% faster service delivery', '80% reduction in paperwork', '95% citizen satisfaction']
      }
    },
    {
      name: 'Education',
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
      description: 'LMS, virtual classroom platforms',
      features: [
        'Learning Management Systems (LMS)',
        'Virtual Classroom Platforms',
        'Student Information Systems',
        'Online Assessment Tools',
        'Educational Analytics',
        'Mobile Learning Apps'
      ],
      caseStudy: {
        title: 'EduTech Rwanda',
        description: 'Created a comprehensive digital learning platform for universities and schools.',
        results: ['70% improvement in student engagement', '90% reduction in administrative overhead', '85% increase in course completion rates']
      }
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
      description: 'E-commerce, inventory management, POS systems',
      features: [
        'E-commerce Platforms',
        'Inventory Management Systems',
        'Point of Sale (POS) Solutions',
        'Customer Relationship Management',
        'Supply Chain Optimization',
        'Mobile Commerce Apps'
      ],
      caseStudy: {
        title: 'RetailTech Solutions',
        description: 'Developed integrated retail management systems for local and international retailers.',
        results: ['45% increase in online sales', '30% reduction in inventory costs', '65% improvement in customer retention']
      }
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-500',
      description: 'IoT integration, production monitoring, quality control',
      features: [
        'IoT Integration',
        'Production Monitoring Systems',
        'Quality Control Automation',
        'Supply Chain Management',
        'Predictive Maintenance',
        'Real-time Analytics'
      ],
      caseStudy: {
        title: 'Smart Manufacturing',
        description: 'Implemented IoT and AI solutions for a leading manufacturing company in Rwanda.',
        results: ['35% increase in production efficiency', '50% reduction in downtime', '25% improvement in quality control']
      }
    },
    {
      name: 'Hospitality',
      icon: Hotel,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
      description: 'Hotel management, booking systems, guest services',
      features: [
        'Hotel Management Systems',
        'Online Booking Platforms',
        'Guest Service Applications',
        'Revenue Management Tools',
        'Staff Management Systems',
        'Customer Experience Analytics'
      ],
      caseStudy: {
        title: 'HotelTech Rwanda',
        description: 'Created comprehensive hospitality management solutions for hotels and resorts.',
        results: ['55% increase in bookings', '40% improvement in guest satisfaction', '30% reduction in operational costs']
      }
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

            {/* Right Content - Case Study */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Case Study: {industries[activeTab].caseStudy.title}
                </h4>
                <p className="text-gray-600 mb-6">
                  {industries[activeTab].caseStudy.description}
                </p>
                
                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900">Key Results:</h5>
                  {industries[activeTab].caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Placeholder for Industry Image */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className={`w-16 h-16 ${industries[activeTab].bgColor} rounded-xl flex items-center justify-center mx-auto`}>
                      {React.createElement(industries[activeTab].icon, { 
                        className: `w-8 h-8 ${industries[activeTab].iconColor}` 
                      })}
                    </div>
                    <p className="text-gray-600 font-medium">{industries[activeTab].name} Industry Image</p>
                    <p className="text-sm text-gray-500">Replace with relevant industry visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustrySolutions;

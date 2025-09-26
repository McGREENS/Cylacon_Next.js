'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Building, Award, Handshake, TrendingUp } from 'lucide-react';

const CompanyStory: React.FC = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Foundation',
      description: 'Founded in Kigali with 3 team members focused on web development and network solutions for local businesses.',
      icon: <Building className="w-6 h-6" />,
      color: 'bg-primary-500'
    },
    {
      year: '2022',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, implementing a complete cybersecurity solution for a regional industry.',
      icon: <Award className="w-6 h-6" />,
      color: 'bg-secondary-500'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Expanded our team to 15 professionals and opened our first branch in Goma, DRC.',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-accent-500'
    },
    {
      year: '2024',
      title: 'Client Portal Launch',
      description: 'Launched our innovative project tracking system to enhance client communication and transparency.',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-primary-600'
    },
    {
      year: '2024',
      title: 'Strategic Partnerships',
      description: 'Established key partnerships with global technology providers to enhance our service offerings.',
      icon: <Handshake className="w-6 h-6" />,
      color: 'bg-secondary-600'
    },
    {
      year: '2025',
      title: 'Current',
      description: 'Serving 50+ clients across 5 countries with a team of 35 technology experts.',
      icon: <Calendar className="w-6 h-6" />,
      color: 'bg-green-500'
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
            Our Growth Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup in Kigali to Rwanda's leading IT company. 
            Here's how we've grown and evolved to serve clients across East Africa.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4 justify-center lg:justify-start">
                      <span className="text-2xl font-bold text-primary-600 mr-3">{item.year}</span>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Growth Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Growth in Numbers</h3>
            <p className="text-gray-600 text-lg">
              Consistent growth and expansion across East Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">3→35</div>
              <div className="text-gray-700 font-medium">Team Growth</div>
              <div className="text-sm text-gray-500">Since 2022</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">1→5</div>
              <div className="text-gray-700 font-medium">Countries</div>
              <div className="text-sm text-gray-500">Regional Expansion</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">0→50+</div>
              <div className="text-gray-700 font-medium">Clients</div>
              <div className="text-sm text-gray-500">Trusted Partners</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-700 font-medium">Projects</div>
              <div className="text-sm text-gray-500">Successfully Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Star } from 'lucide-react';

const MissionVision: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Integrity',
      description: 'We build trust through transparent communication and ethical business practices.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Partnership',
      description: 'We work closely with clients as trusted partners in their digital journey.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in every project and client interaction.'
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
            Mission, Vision & Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our core principles guide every decision and drive our commitment to 
            transforming businesses across East Africa through innovative technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower African businesses with secure, scalable technology solutions 
              that drive growth and innovation in the digital economy. We believe in 
              making advanced IT accessible to organizations of all sizes across Rwanda 
              and East Africa.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be East Africa's most trusted technology partner, recognized for 
              transforming businesses through innovative IT solutions. We envision 
              a digitally empowered Africa where technology drives sustainable 
              economic growth.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These values guide every interaction and solution we provide, ensuring 
              we deliver trusted and impactful technology services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;

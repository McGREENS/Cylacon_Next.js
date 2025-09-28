'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Shield } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/two.jpg)', // Using the modern building image
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-transparent to-secondary-600/30" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-100/90 text-primary-700 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm"
          >
            <Award className="w-5 h-5" />
            <span>Innovating IT Solutions Since 2022</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
          >
            Transforming Businesses Through{' '}
            <span className="gradient-text">Technology Excellence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            From a small team of 3 in Kigali to Rwanda's leading IT company serving 50+ clients 
            across 5 countries. Discover our journey, meet our team, and learn how we're 
            driving East Africa's digital transformation.
          </motion.p>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-2xl mx-auto mb-4 backdrop-blur-sm">
                <Users className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white">35+</div>
              <div className="text-sm text-gray-300">Expert Team Members</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-2xl mx-auto mb-4 backdrop-blur-sm">
                <Globe className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-gray-300">Countries Served</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-2xl mx-auto mb-4 backdrop-blur-sm">
                <Shield className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-2xl mx-auto mb-4 backdrop-blur-sm">
                <Award className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white">ISO</div>
              <div className="text-sm text-gray-300">27001 Certified</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const BlogHero: React.FC = () => {
  const blogStats = [
    { number: '200+', label: 'Expert Articles' },
    { number: '50K+', label: 'Monthly Readers' },
    { number: '15+', label: 'Technology Topics' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-60" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-200 rounded-full opacity-40" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-primary-50 rounded-full opacity-70" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Expert IT Insights • Rwanda's Leading Tech Blog</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Technology Insights for{' '}
            <span className="text-primary-600">Modern Businesses</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Stay ahead with expert insights on digital transformation, cybersecurity, 
            cloud computing, and emerging technologies from CyLaCon's team of IT professionals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 group">
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200">
              <TrendingUp className="w-5 h-5 mr-2" />
              Popular Topics
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {blogStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Popular Topics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Popular Topics</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Digital Transformation',
                'Cybersecurity',
                'Cloud Computing',
                'Software Development',
                'AI & Machine Learning',
                'IT Infrastructure'
              ].map((topic, index) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                  className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors duration-200"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

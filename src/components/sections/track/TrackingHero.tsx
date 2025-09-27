'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Clock,
  CheckCircle,
  BarChart3,
  FileText,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const TrackingHero: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: 'Real-time Updates'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: 'Progress Tracking'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: 'Document Access'
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Team Communication'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Access',
      description: 'Get immediate access to your project status and progress updates'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Portal',
      description: 'Your project information is protected with enterprise-grade security'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Complete Transparency',
      description: 'View detailed progress, milestones, and upcoming deliverables'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-60" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-200 rounded-full opacity-40" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-primary-50 rounded-full opacity-70" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Search className="w-4 h-4" />
              <span>Project Tracking Portal • Real-time Updates</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Track Your{' '}
              <span className="text-primary-600">Project Progress</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Stay updated with real-time progress on your project development and implementation. 
              Monitor milestones, access documents, and communicate with your project team.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-primary-600">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#tracking-form"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 group"
              >
                <Search className="w-5 h-5 mr-2" />
                Track Your Project
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-primary-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Project Tracking Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Access Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Real-time</div>
                  <div className="text-sm opacity-90">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Secure</div>
                  <div className="text-sm opacity-90">Portal</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Mobile</div>
                  <div className="text-sm opacity-90">Friendly</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrackingHero;

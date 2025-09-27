'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight,
  Users,
  Award,
  Clock,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const ConsultationHero: React.FC = () => {
  const keyBenefits = [
    {
      icon: <Target className="w-5 h-5" />,
      text: 'Identify Technology Gaps'
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      text: 'Strategic Recommendations'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: 'Growth-Focused Solutions'
    }
  ];

  const trustIndicators = [
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Expert Consultants'
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: 'Proven Results'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: 'Quick Turnaround'
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
              <CheckCircle className="w-4 h-4" />
              <span>Free IT Consultation • No Commitment Required</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Get Expert{' '}
              <span className="text-primary-600">IT Consultation</span>{' '}
              for Your Business
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Discover how technology can transform your business. Our experts will assess your current setup, 
              identify opportunities, and provide actionable recommendations tailored to your goals.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-primary-600">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="text-primary-600">
                    {indicator.icon}
                  </div>
                  <span className="text-sm text-gray-600">{indicator.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 group"
              >
                Book Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* What You Get Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h3>
              <div className="space-y-4">
                {[
                  'Comprehensive IT infrastructure assessment',
                  'Personalized technology recommendations',
                  'Strategic roadmap for digital transformation',
                  'Cost-benefit analysis of proposed solutions',
                  'Implementation timeline and next steps'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Consultation Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-primary-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Why Choose Our Consultation?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-90">Free Assessment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">60min</div>
                  <div className="text-sm opacity-90">Consultation Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24hrs</div>
                  <div className="text-sm opacity-90">Report Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">0</div>
                  <div className="text-sm opacity-90">Obligations</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;

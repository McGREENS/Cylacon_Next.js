'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Phone, Cloud, Zap, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';

const CloudPricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Cloud Starter',
      description: 'Perfect for small businesses starting their cloud journey',
      price: '$300',
      rwfPrice: '300,000 RWF',
      duration: 'per month',
      popular: false,
      features: [
        'Basic cloud infrastructure setup',
        'Up to 2 virtual servers',
        '100GB cloud storage',
        'Basic monitoring & alerts',
        'Email support',
        'Monthly backup',
        'Basic security configuration',
        'Cloud migration assistance'
      ],
      ideal: 'Small businesses, startups, basic cloud needs',
      setupFee: '$500 setup fee'
    },
    {
      name: 'Cloud Professional',
      description: 'Comprehensive cloud solution for growing businesses',
      price: '$800',
      rwfPrice: '800,000 RWF',
      duration: 'per month',
      popular: true,
      features: [
        'Advanced cloud architecture',
        'Up to 10 virtual servers',
        '500GB cloud storage',
        'Auto-scaling capabilities',
        '24/7 monitoring & support',
        'Daily automated backups',
        'Advanced security controls',
        'Load balancing',
        'Disaster recovery setup',
        'Performance optimization'
      ],
      ideal: 'Growing businesses, medium enterprises, high availability needs',
      setupFee: '$1,500 setup fee'
    },
    {
      name: 'Cloud Enterprise',
      description: 'Full-scale cloud infrastructure for large organizations',
      price: '$2,500',
      rwfPrice: '2,500,000 RWF',
      duration: 'per month',
      popular: false,
      features: [
        'Enterprise cloud architecture',
        'Unlimited virtual servers',
        '2TB+ cloud storage',
        'Multi-region deployment',
        'Dedicated cloud architect',
        'Real-time backup & sync',
        'Enterprise security suite',
        'Advanced analytics',
        'Compliance management',
        'Custom integrations',
        'Priority support',
        'SLA guarantees'
      ],
      ideal: 'Large enterprises, government, mission-critical applications',
      setupFee: '$5,000 setup fee'
    }
  ];

  const migrationServices = [
    { 
      name: 'Cloud Assessment', 
      price: 'From $1,000', 
      description: 'Comprehensive cloud readiness evaluation',
      duration: '1-2 weeks'
    },
    { 
      name: 'Cloud Migration', 
      price: 'From $5,000', 
      description: 'Complete migration of systems to cloud',
      duration: '4-8 weeks'
    },
    { 
      name: 'Cloud Architecture Design', 
      price: 'From $3,000', 
      description: 'Custom cloud infrastructure design',
      duration: '2-3 weeks'
    },
    { 
      name: 'Disaster Recovery Setup', 
      price: 'From $2,000', 
      description: 'Business continuity and backup solutions',
      duration: '1-2 weeks'
    },
    { 
      name: 'Cloud Security Audit', 
      price: 'From $2,500', 
      description: 'Comprehensive security assessment',
      duration: '2-3 weeks'
    },
    { 
      name: 'Performance Optimization', 
      price: 'From $1,500', 
      description: 'Cloud performance tuning and optimization',
      duration: '1-2 weeks'
    }
  ];

  const cloudPlatformPricing = [
    {
      platform: 'Amazon Web Services (AWS)',
      description: 'Industry-leading cloud platform with comprehensive services',
      pricing: 'Pay-as-you-use + 15% management fee',
      benefits: ['Global infrastructure', 'Extensive service catalog', 'Enterprise-grade security']
    },
    {
      platform: 'Microsoft Azure',
      description: 'Integrated cloud platform with Microsoft ecosystem',
      pricing: 'Pay-as-you-use + 15% management fee',
      benefits: ['Office 365 integration', 'Hybrid cloud capabilities', 'AI and ML services']
    },
    {
      platform: 'Google Cloud Platform',
      description: 'Data analytics and machine learning focused cloud',
      pricing: 'Pay-as-you-use + 15% management fee',
      benefits: ['Advanced analytics', 'Machine learning tools', 'Competitive pricing']
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
            Cloud Solutions Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, flexible pricing for comprehensive cloud solutions. Choose the plan that 
            fits your needs and scale as your business grows. All plans include expert support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-lg text-gray-600">{plan.rwfPrice}</div>
                    <div className="text-sm text-gray-500">{plan.duration}</div>
                    <div className="text-xs text-red-600 mt-1">{plan.setupFee}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mb-8 p-4 bg-gray-50 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Ideal for:</h4>
                  <p className="text-sm text-gray-600">{plan.ideal}</p>
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  href="/consultation"
                  className="w-full justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Migration & Consulting Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cloud Migration & Consulting Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              One-time services to help you plan, migrate, and optimize your cloud infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {migrationServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-primary-600">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Platform Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cloud Platform Management
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We manage your cloud infrastructure across all major platforms with transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudPlatformPricing.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{platform.platform}</h4>
                <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                <div className="text-primary-600 font-semibold mb-4">{platform.pricing}</div>
                
                <div className="space-y-2">
                  {platform.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Custom Cloud Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Cloud className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Need a Custom Cloud Solution?</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Every business has unique cloud requirements. Our cloud architects will design 
            a custom solution that perfectly fits your needs, budget, and growth plans.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              href="/consultation"
              className="bg-white text-primary-600 hover:bg-primary-50"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a 
              href="tel:+250780115764"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +250 780 115 764
            </a>
          </div>

          {/* Value Propositions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Fast Deployment</h4>
              <p className="text-primary-100 text-sm">
                Get your cloud infrastructure up and running in days, not months
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Enterprise Security</h4>
              <p className="text-primary-100 text-sm">
                ISO 27001 certified security practices built into every deployment
              </p>
            </div>

            <div className="text-center">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Multi-Cloud Expertise</h4>
              <p className="text-primary-100 text-sm">
                Certified experts across AWS, Azure, and Google Cloud platforms
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">Free Cloud Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">24/7 Expert Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">Flexible Scaling</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudPricing;

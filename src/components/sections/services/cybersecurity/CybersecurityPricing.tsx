'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Phone, Shield, AlertTriangle } from 'lucide-react';
import Button from '@/components/ui/Button';

const CybersecurityPricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Essential Security',
      description: 'Basic cybersecurity protection for small businesses',
      price: '$500',
      rwfPrice: '500,000 RWF',
      duration: 'per month',
      popular: false,
      features: [
        'Basic security assessment',
        'Antivirus deployment',
        'Firewall configuration',
        'Email security setup',
        'Monthly security reports',
        'Business hours support',
        'Security awareness training',
        'Incident response (basic)'
      ],
      ideal: 'Small businesses, startups, basic protection needs',
      setupFee: '$1,000 setup fee'
    },
    {
      name: 'Advanced Security',
      description: 'Comprehensive security solution for growing businesses',
      price: '$1,500',
      rwfPrice: '1,500,000 RWF',
      duration: 'per month',
      popular: true,
      features: [
        'Comprehensive security assessment',
        'Advanced threat protection',
        'Network security monitoring',
        'Vulnerability management',
        'Security incident response',
        '24/7 security monitoring',
        'Compliance assistance',
        'Regular penetration testing',
        'Security policy development',
        'Staff security training'
      ],
      ideal: 'Growing businesses, medium enterprises, compliance requirements',
      setupFee: '$2,500 setup fee'
    },
    {
      name: 'Enterprise Security',
      description: 'Full-scale security operations for large organizations',
      price: '$5,000',
      rwfPrice: '5,000,000 RWF',
      duration: 'per month',
      popular: false,
      features: [
        'Enterprise security architecture',
        'Advanced threat hunting',
        'Security operations center (SOC)',
        'Compliance management',
        'Risk assessment & management',
        'Incident response team',
        'Security governance',
        'Regular security audits',
        'Custom security solutions',
        'Executive security reporting',
        'Dedicated security manager',
        'Emergency response hotline'
      ],
      ideal: 'Large enterprises, government, critical infrastructure',
      setupFee: '$10,000 setup fee'
    }
  ];

  const oneTimeServices = [
    { 
      name: 'Security Assessment', 
      price: 'From $2,000', 
      description: 'Comprehensive evaluation of your security posture',
      duration: '2-3 weeks'
    },
    { 
      name: 'Penetration Testing', 
      price: 'From $3,000', 
      description: 'Ethical hacking to identify vulnerabilities',
      duration: '1-2 weeks'
    },
    { 
      name: 'ISO 27001 Implementation', 
      price: 'From $15,000', 
      description: 'Complete ISO 27001 certification process',
      duration: '6-12 months'
    },
    { 
      name: 'Incident Response', 
      price: 'From $5,000', 
      description: 'Emergency cybersecurity incident handling',
      duration: 'Immediate'
    },
    { 
      name: 'Security Training', 
      price: 'From $1,000', 
      description: 'Staff cybersecurity awareness programs',
      duration: '1-2 days'
    },
    { 
      name: 'Compliance Audit', 
      price: 'From $2,500', 
      description: 'Regulatory compliance assessment',
      duration: '2-4 weeks'
    }
  ];

  const emergencyServices = [
    {
      title: 'Data Breach Response',
      description: 'Immediate response to data breaches and cyber incidents',
      price: '$10,000+',
      responseTime: '< 2 hours'
    },
    {
      title: 'Ransomware Recovery',
      description: 'Complete ransomware incident response and recovery',
      price: '$15,000+',
      responseTime: '< 1 hour'
    },
    {
      title: 'Forensic Investigation',
      description: 'Digital forensics and incident investigation services',
      price: '$8,000+',
      responseTime: '< 4 hours'
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
            Cybersecurity Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for comprehensive cybersecurity protection. Choose the plan that 
            matches your security needs and budget. All plans include Rwanda-specific compliance support.
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

        {/* One-Time Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              One-Time Security Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Specific security services for immediate needs or project-based requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oneTimeServices.map((service, index) => (
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

        {/* Emergency Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-200" />
            <h3 className="text-3xl font-bold mb-4">
              Emergency Cybersecurity Services
            </h3>
            <p className="text-red-100 text-lg max-w-2xl mx-auto">
              Immediate response services for active cyber threats and security incidents. 
              Available 24/7 with rapid response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-red-100 text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold">{service.price}</div>
                  <div className="text-sm text-red-200">Response: {service.responseTime}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="tel:+250780115764"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors duration-200 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency Hotline: +250 780 115 764
            </a>
          </div>
        </motion.div>

        {/* Custom Security Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Shield className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Need Custom Security Solutions?</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Every organization has unique security requirements. Our experts will design 
            a custom cybersecurity solution tailored to your specific needs and budget.
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

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">Free Security Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">No Long-term Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">24/7 Emergency Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">ISO 27001 Certified Team</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CybersecurityPricing;

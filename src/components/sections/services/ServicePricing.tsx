'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ServicePricingProps {
  service: string;
}

const ServicePricing: React.FC<ServicePricingProps> = ({ service }) => {
  const pricingPlans = [
    {
      name: 'Starter Website',
      description: 'Perfect for small businesses and startups',
      price: '$800',
      rwfPrice: '800,000 RWF',
      duration: '2-3 weeks',
      popular: false,
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        'Social media integration',
        '1 month free support',
        'SSL certificate',
        'Mobile optimization'
      ],
      ideal: 'Small businesses, personal websites, portfolios'
    },
    {
      name: 'Business Website',
      description: 'Comprehensive solution for growing businesses',
      price: '$2,500',
      rwfPrice: '2,500,000 RWF',
      duration: '4-6 weeks',
      popular: true,
      features: [
        'Up to 15 pages',
        'Custom design',
        'Content management system',
        'Advanced SEO optimization',
        'Google Analytics setup',
        'Blog functionality',
        'Contact forms & maps',
        '3 months free support',
        'Performance optimization',
        'Security features'
      ],
      ideal: 'Growing businesses, service companies, agencies'
    },
    {
      name: 'E-commerce Platform',
      description: 'Full-featured online store solution',
      price: '$5,000',
      rwfPrice: '5,000,000 RWF',
      duration: '6-10 weeks',
      popular: false,
      features: [
        'Unlimited products',
        'Payment gateway integration',
        'Inventory management',
        'Order management system',
        'Customer accounts',
        'Product reviews',
        'Shipping calculator',
        '6 months free support',
        'Mobile app ready',
        'Multi-currency support',
        'Analytics dashboard',
        'Marketing tools'
      ],
      ideal: 'Retail businesses, online stores, marketplaces'
    }
  ];

  const additionalServices = [
    { name: 'Custom Web Application', price: 'From $3,000', description: 'Tailored solutions for specific business needs' },
    { name: 'Website Redesign', price: 'From $1,500', description: 'Modernize your existing website' },
    { name: 'Maintenance & Support', price: '$200/month', description: 'Ongoing updates and technical support' },
    { name: 'SEO Optimization', price: '$500', description: 'Improve search engine rankings' },
    { name: 'Performance Audit', price: '$300', description: 'Comprehensive website analysis' },
    { name: 'Security Audit', price: '$400', description: 'Security assessment and improvements' }
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
            Web Development Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for professional web development services in Rwanda. 
            Choose the package that best fits your business needs and budget.
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
                    <div className="text-sm text-gray-500">Delivery: {plan.duration}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
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

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enhance your website with our additional services and ongoing support options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
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
                <div className="text-xl font-bold text-primary-600">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. If our standard packages don't fit your needs, 
            let's discuss a custom solution tailored specifically for your requirements.
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
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">No Hidden Costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">Money-Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePricing;

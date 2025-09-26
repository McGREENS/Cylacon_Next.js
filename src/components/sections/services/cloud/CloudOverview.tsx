'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  Globe, 
  Database,
  TrendingUp,
  DollarSign,
  Lock,
  RefreshCw,
  Users,
  BarChart3
} from 'lucide-react';

interface CloudOverviewProps {
  service: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const CloudOverview: React.FC<CloudOverviewProps> = ({ service }) => {
  const cloudServices = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to the cloud with minimal downtime and maximum efficiency.'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Infrastructure as a Service (IaaS)',
      description: 'Scalable virtual servers, storage, and networking resources that grow with your business needs.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Platform as a Service (PaaS)',
      description: 'Complete development and deployment platforms for building modern applications in the cloud.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cloud Security',
      description: 'Advanced security measures to protect your data and applications in the cloud environment.'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Disaster Recovery',
      description: 'Robust backup and recovery solutions to ensure business continuity and data protection.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Cloud Monitoring',
      description: '24/7 monitoring and management of your cloud infrastructure for optimal performance.'
    }
  ];

  const cloudBenefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cost Optimization',
      description: 'Reduce IT costs by up to 40% with pay-as-you-use cloud resources and eliminated hardware maintenance.',
      stat: '40% Cost Reduction'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Scalability',
      description: 'Scale your resources up or down instantly based on demand without infrastructure limitations.',
      stat: 'Instant Scaling'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with advanced threat protection and compliance certifications.',
      stat: '99.9% Security'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Accessibility',
      description: 'Access your applications and data from anywhere in the world with reliable internet connectivity.',
      stat: '24/7 Access'
    }
  ];

  const rwandaCloudStats = [
    { number: '85%', label: 'Businesses Moving to Cloud', description: 'In Rwanda by 2025' },
    { number: '60%', label: 'Cost Savings', description: 'Average for SMEs' },
    { number: '99.9%', label: 'Uptime Guarantee', description: 'Enterprise-grade reliability' },
    { number: '24/7', label: 'Expert Support', description: 'Local and global assistance' }
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
            Comprehensive Cloud Solutions for Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}. We help businesses across Rwanda and East Africa leverage 
            the power of cloud computing to drive innovation, reduce costs, and accelerate growth.
          </p>
        </motion.div>

        {/* Cloud Transformation Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <div className="text-center mb-8">
            <Cloud className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rwanda's Cloud Transformation is Here
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As Rwanda positions itself as a digital hub in East Africa, cloud adoption is accelerating. 
              Don't get left behind - transform your business with modern cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rwandaCloudStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            What We Can Do for Your Business
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cloud Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Move to the Cloud with CyLaCon?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're not just cloud providers - we're your digital transformation partners, 
              helping you unlock the full potential of cloud computing for your Rwanda-based business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors duration-300">
                  <div className="text-secondary-600 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-2">{benefit.stat}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Readiness Assessment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Is Your Business Cloud-Ready?</h3>
            <p className="text-primary-100 text-lg">
              Get a free cloud readiness assessment and discover how cloud solutions can transform your operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Expert Consultation</h4>
              <p className="text-primary-100 text-sm">
                Our cloud experts will assess your current infrastructure and business needs
              </p>
            </div>

            <div className="text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Custom Strategy</h4>
              <p className="text-primary-100 text-sm">
                Receive a tailored cloud migration and optimization strategy for your business
              </p>
            </div>

            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Quick Implementation</h4>
              <p className="text-primary-100 text-sm">
                Fast-track your cloud journey with our proven implementation methodology
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudOverview;

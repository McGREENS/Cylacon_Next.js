'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, CheckCircle, Star } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'ISO 27001 Certified',
      description: 'International standard for information security management systems',
      status: 'Certified',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'PMP Certification',
      description: 'Project Management Professional certification for our operations team',
      status: 'Certified',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Microsoft Partner',
      description: 'Certified Microsoft technology partner for enterprise solutions',
      status: 'Partner',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'AWS Solutions Provider',
      description: 'Amazon Web Services certified solutions provider',
      status: 'Certified',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const partnerships = [
    {
      name: 'Microsoft',
      description: 'Enterprise software and cloud solutions',
      logo: '/partnerships/microsoft.png' // Placeholder
    },
    {
      name: 'Amazon Web Services',
      description: 'Cloud infrastructure and services',
      logo: '/partnerships/aws.png' // Placeholder
    },
    {
      name: 'Cisco',
      description: 'Network infrastructure and security',
      logo: '/partnerships/cisco.png' // Placeholder
    },
    {
      name: 'VMware',
      description: 'Virtualization and cloud computing',
      logo: '/partnerships/vmware.png' // Placeholder
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Highlighted Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              <motion.span
                className="text-gray-900"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Certifications &{' '}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                Partnerships
              </motion.span>
            </motion.h2>

            {/* Animated Text Decoration */}
            <motion.div
              className="relative max-w-lg mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
              <motion.div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
                animate={{ x: [0, 180, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '60px' }}
              />
            </motion.div>
          </motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Our certifications and strategic partnerships ensure we deliver world-class 
            solutions with the highest standards of quality and security.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Industry <span className="gradient-text">Certifications</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {cert.icon}
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm font-semibold text-green-600">{cert.status}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <motion.div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold leading-tight"
              >
                <motion.span
                  className="text-gray-900"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Strategic Technology{' '}
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  Partnerships
                </motion.span>
              </motion.h3>

              {/* Animated Text Decoration */}
              <motion.div
                className="relative max-w-lg mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
                <motion.div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
                  animate={{ x: [0, 180, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '60px' }}
                />
              </motion.div>
            </motion.div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We partner with leading technology companies to provide our clients 
              with cutting-edge solutions and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Placeholder for partner logo */}
                <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-400">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Premium Support</h4>
              <p className="text-gray-600 text-sm">Direct access to vendor support and latest updates</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Certified Expertise</h4>
              <p className="text-gray-600 text-sm">Trained and certified professionals on all platforms</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">Guaranteed compatibility and performance standards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

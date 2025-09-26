'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TrustBar: React.FC = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  const clients = [
    { name: 'Client 1', logo: '/images/clients/client-1.svg' },
    { name: 'Client 2', logo: '/images/clients/client-2.svg' },
    { name: 'Client 3', logo: '/images/clients/client-3.svg' },
    { name: 'Client 4', logo: '/images/clients/client-4.svg' },
    { name: 'Client 5', logo: '/images/clients/client-5.svg' },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container-custom">
        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-8">
            Trusted by Leading Organizations
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-24 h-16 grayscale hover:grayscale-0 transition-all duration-300"
              >
                {/* Placeholder for client logo */}
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certification Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">ISO</span>
              </div>
              <span className="text-sm font-medium text-gray-700">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary-50 px-4 py-2 rounded-full">
              <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">AWS</span>
              </div>
              <span className="text-sm font-medium text-gray-700">AWS Partner</span>
            </div>
            <div className="flex items-center space-x-2 bg-accent-50 px-4 py-2 rounded-full">
              <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">MS</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Microsoft Partner</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;

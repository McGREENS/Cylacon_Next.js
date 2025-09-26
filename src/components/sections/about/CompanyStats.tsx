'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, Shield, Clock, TrendingUp } from 'lucide-react';

const CompanyStats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '35+',
      label: 'Expert Team Members',
      description: 'Skilled professionals across all IT disciplines',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: '5',
      label: 'Countries Served',
      description: 'Rwanda, DRC, Uganda, Tanzania, Kenya',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '150+',
      label: 'Projects Completed',
      description: 'Successfully delivered across all sectors',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: 'ISO',
      label: '27001 Certified',
      description: 'International security management standard',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable systems and infrastructure',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '50+',
      label: 'Happy Clients',
      description: 'Trusted by leading organizations',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B255' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            CyLaCon by the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our growth and achievements reflect our commitment to excellence 
            and our clients' trust in our capabilities.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-700">
                    {stat.label}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose CyLaCon?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself. We're not just another IT company - 
              we're Rwanda's technology transformation partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Industry Recognition</h4>
              <p className="text-gray-600">ISO 27001 certified with proven expertise in cybersecurity and enterprise solutions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Regional Leader</h4>
              <p className="text-gray-600">Serving clients across East Africa with local expertise and global standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Proven Growth</h4>
              <p className="text-gray-600">From 3 to 35+ team members, consistently growing and expanding our capabilities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStats;

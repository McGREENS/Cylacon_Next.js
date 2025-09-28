'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving digital transformation across East Africa with innovative technology solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our <span className="gradient-text">Mission</span></h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To empower businesses across East Africa with cutting-edge technology solutions that drive growth, 
              enhance security, and foster digital transformation. We are committed to delivering excellence 
              through innovation, expertise, and unwavering dedication to our clients' success.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-primary-600 mr-3" />
                <span className="text-gray-700">Client-centric approach</span>
              </div>
              <div className="flex items-center">
                <Lightbulb className="w-5 h-5 text-primary-600 mr-3" />
                <span className="text-gray-700">Innovation-driven solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 shadow-xl text-white"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Our <span className="text-primary-200">Vision</span></h3>
            </div>
            <p className="text-lg leading-relaxed mb-6 text-primary-50">
              To be East Africa's most trusted technology partner, recognized for transforming businesses 
              through innovative IT solutions. We envision a digitally empowered region where every 
              organization, regardless of size, has access to world-class technology services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-300 rounded-full mr-3"></div>
                <span className="text-primary-100">Regional technology leadership</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-300 rounded-full mr-3"></div>
                <span className="text-primary-100">Sustainable digital growth</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core <span className="gradient-text">Values</span></h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Excellence', desc: 'Delivering superior quality in every project' },
              { title: 'Innovation', desc: 'Embracing cutting-edge technologies' },
              { title: 'Integrity', desc: 'Building trust through transparency' },
              { title: 'Partnership', desc: 'Growing together with our clients' }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
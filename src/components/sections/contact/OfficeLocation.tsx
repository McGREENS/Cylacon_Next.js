'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone,
  Mail
} from 'lucide-react';

const OfficeLocation: React.FC = () => {
  const locationDetails = {
    city: 'Kigali',
    country: 'Rwanda'
  };

  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Location</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're based in Kigali, Rwanda, serving clients across East Africa and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Location Card */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>{locationDetails.city}, {locationDetails.country}</p>
                    <p>East Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-primary-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Get in Touch</h3>
              <p className="mb-4 opacity-90">
                Ready to discuss your IT needs? Contact us to learn more about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+250780115764"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
                <a
                  href="mailto:info@cylacon.com"
                  className="inline-flex items-center justify-center px-4 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;

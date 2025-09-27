'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Users, 
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  Stethoscope,
  Monitor,
  Database,
  Smartphone,
  Globe
} from 'lucide-react';

interface HealthcareOverviewProps {
  solution: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const HealthcareOverview: React.FC<HealthcareOverviewProps> = ({ solution }) => {
  const healthcareServices = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Electronic Health Records (EHR)',
      description: 'Comprehensive digital patient records system for improved care coordination and clinical decision-making.'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Hospital Management Systems',
      description: 'Integrated systems for managing hospital operations, from patient admission to discharge and billing.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Telemedicine Platforms',
      description: 'Remote healthcare delivery solutions enabling virtual consultations and remote patient monitoring.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Medical Imaging Solutions',
      description: 'Digital imaging systems for storing, managing, and sharing medical images and diagnostic reports.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Patient Portal Systems',
      description: 'Secure online platforms for patients to access their health information and communicate with providers.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Healthcare Data Security',
      description: 'Advanced security measures to protect sensitive patient data and ensure regulatory compliance.'
    }
  ];

  const healthcareBenefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Better Patient Care',
      description: 'Improved clinical outcomes through better data access and care coordination.',
      stat: '40% Improvement'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Operational Efficiency',
      description: 'Streamlined workflows and reduced administrative burden on healthcare staff.',
      stat: '60% Faster'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Data Security',
      description: 'HIPAA-compliant security measures protecting sensitive patient information.',
      stat: '99.9% Secure'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Cost Reduction',
      description: 'Reduced operational costs through automation and improved resource utilization.',
      stat: '30% Savings'
    }
  ];

  const rwandaHealthStats = [
    { number: '85%', label: 'Healthcare Facilities', description: 'Need digital transformation in Rwanda' },
    { number: '70%', label: 'Efficiency Gain', description: 'With proper healthcare IT systems' },
    { number: '50+', label: 'Health Facilities', description: 'Successfully digitized by CyLaCon' },
    { number: '24/7', label: 'System Support', description: 'Continuous healthcare IT support' }
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
            Transforming Healthcare Delivery in Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.description}. We help healthcare providers across Rwanda leverage technology 
            to improve patient outcomes, enhance operational efficiency, and deliver world-class healthcare services.
          </p>
        </motion.div>

        {/* Rwanda Healthcare Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rwanda's Healthcare Digital Transformation
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As Rwanda continues to strengthen its healthcare system, digital transformation 
              is key to achieving universal health coverage and improving health outcomes for all citizens.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rwandaHealthStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Healthcare Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            Comprehensive Healthcare IT Solutions
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <div className="text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Healthcare Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CyLaCon for Healthcare IT?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our healthcare IT solutions are designed specifically for Rwanda's healthcare landscape, 
              ensuring compliance, security, and seamless integration with existing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{benefit.stat}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Healthcare Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Healthcare Technology Standards</h3>
            <p className="text-green-100 text-lg">
              We implement healthcare IT solutions using international standards and 
              best practices to ensure interoperability and compliance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'HL7 FHIR', 'DICOM', 'ICD-10', 'SNOMED CT', 'HIPAA', 'ISO 27001',
              'Epic', 'Cerner', 'OpenMRS', 'DHIS2', 'mHealth', 'Telemedicine'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-colors duration-200"
              >
                <div className="text-sm font-medium">{tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthcareOverview;

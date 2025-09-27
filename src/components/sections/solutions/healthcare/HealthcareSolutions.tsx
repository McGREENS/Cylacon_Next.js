'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Users, 
  Building,
  Stethoscope,
  Monitor,
  Smartphone,
  Database,
  CheckCircle,
  Zap
} from 'lucide-react';

const HealthcareSolutions: React.FC = () => {
  const healthcareSolutions = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Hospital Management Systems',
      description: 'Comprehensive hospital management solutions for large healthcare facilities and medical centers.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Patient admission and discharge',
        'Bed management and allocation',
        'Pharmacy and inventory management',
        'Laboratory information systems'
      ],
      benefits: [
        'Streamlined hospital operations',
        'Improved patient flow',
        'Better resource utilization',
        'Enhanced staff productivity'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Electronic Health Records (EHR)',
      description: 'Digital patient record systems that improve care coordination and clinical decision-making.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Comprehensive patient records',
        'Clinical decision support',
        'Medication management',
        'Care plan coordination'
      ],
      benefits: [
        'Improved patient safety',
        'Better clinical outcomes',
        'Reduced medical errors',
        'Enhanced care coordination'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Telemedicine Platforms',
      description: 'Remote healthcare delivery solutions enabling virtual consultations and patient monitoring.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Video consultation platforms',
        'Remote patient monitoring',
        'Mobile health applications',
        'Teleconsultation networks'
      ],
      benefits: [
        'Expanded healthcare access',
        'Reduced travel costs',
        'Improved rural healthcare',
        'Better chronic disease management'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Clinic Management Systems',
      description: 'Tailored solutions for small to medium-sized clinics and private practices.',
      image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Appointment scheduling',
        'Patient registration',
        'Billing and payments',
        'Medical records management'
      ],
      benefits: [
        'Simplified clinic operations',
        'Improved patient experience',
        'Efficient appointment management',
        'Streamlined billing processes'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const specializedSolutions = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Medical Imaging Solutions',
      description: 'DICOM-compliant imaging systems for radiology and diagnostic services.',
      features: ['PACS systems', 'Image archiving', 'Diagnostic reporting', 'Image sharing']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Laboratory Information Systems',
      description: 'Comprehensive lab management for test ordering, processing, and reporting.',
      features: ['Test management', 'Result reporting', 'Quality control', 'Inventory tracking']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Patient Portal Systems',
      description: 'Secure online platforms for patient engagement and self-service.',
      features: ['Online appointments', 'Test results access', 'Prescription refills', 'Health records']
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Clinical Decision Support',
      description: 'AI-powered tools to assist healthcare providers in clinical decision-making.',
      features: ['Drug interaction alerts', 'Diagnosis assistance', 'Treatment recommendations', 'Risk assessment']
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
            Comprehensive Healthcare IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From large hospitals to small clinics, we provide tailored healthcare IT solutions 
            that improve patient care, enhance operational efficiency, and support better health outcomes.
          </p>
        </motion.div>

        {/* Healthcare Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {healthcareSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image Header */}
              <div className={`h-48 bg-gradient-to-br ${solution.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                  style={{
                    backgroundImage: `url(${solution.image})`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {solution.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {solution.solutions.map((sol, solIndex) => (
                      <div key={solIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Healthcare Solutions
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced healthcare IT solutions designed for specific medical departments 
              and specialized healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">
                    {solution.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{solution.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-1">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-green-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rwanda Healthcare Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Heart className="w-16 h-16 mx-auto mb-6 text-green-200" />
          <h3 className="text-3xl font-bold mb-4">Supporting Rwanda's Health Sector</h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            We're committed to supporting Rwanda's vision of universal health coverage 
            through innovative healthcare IT solutions that improve access, quality, and efficiency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-200">Healthcare Facilities</div>
              <div className="text-sm text-green-100">Successfully digitized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100K+</div>
              <div className="text-green-200">Patient Records</div>
              <div className="text-sm text-green-100">Securely managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-200">System Support</div>
              <div className="text-sm text-green-100">Continuous healthcare IT support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthcareSolutions;

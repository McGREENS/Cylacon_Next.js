'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Landmark,
  Users,
  Shield,
  Lock,
  Eye,
  AlertTriangle
} from 'lucide-react';

const CybersecuritySolutions: React.FC = () => {
  const industrySolutions = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare Security',
      description: 'Protect patient data and medical systems with HIPAA-compliant security solutions.',
      image: '/Cyber_2.jpg',
      threats: ['Patient data breaches', 'Medical device vulnerabilities', 'Ransomware attacks'],
      solutions: [
        'Electronic Health Record (EHR) security',
        'Medical device network segmentation',
        'Patient data encryption',
        'Compliance monitoring and reporting'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: 'Financial Services Security',
      description: 'Comprehensive security for banks, microfinance, and fintech companies.',
      image: '/cyber_3.jpg',
      threats: ['Payment fraud', 'Account takeovers', 'Regulatory violations'],
      solutions: [
        'PCI DSS compliance implementation',
        'Transaction monitoring systems',
        'Multi-factor authentication',
        'Anti-fraud detection systems'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Government & Public Sector',
      description: 'Secure digital government services and protect citizen data.',
      image: '/cyber_1.jpg',
      threats: ['Nation-state attacks', 'Data breaches', 'Service disruptions'],
      solutions: [
        'Critical infrastructure protection',
        'Citizen data privacy controls',
        'Secure communication channels',
        'Incident response planning'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Education Security',
      description: 'Protect student data and educational technology infrastructure.',
      image: '/cyber_1.jpg',
      threats: ['Student data exposure', 'Online learning disruptions', 'Cyber bullying'],
      solutions: [
        'Student information system security',
        'Safe online learning environments',
        'Content filtering and monitoring',
        'Digital citizenship training'
      ],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const securityFrameworks = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify - comprehensive security model for modern businesses.',
      benefits: ['Reduced attack surface', 'Better access control', 'Enhanced monitoring']
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Defense in Depth',
      description: 'Multiple layers of security controls to protect against various attack vectors.',
      benefits: ['Layered protection', 'Redundant security', 'Comprehensive coverage']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring and threat detection across all systems.',
      benefits: ['Real-time alerts', 'Rapid response', 'Threat intelligence']
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Risk-Based Approach',
      description: 'Prioritize security investments based on actual business risks and threats.',
      benefits: ['Optimized spending', 'Focused protection', 'Business alignment']
    }
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
            Industry-Specific Security Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every industry faces unique cybersecurity challenges. We provide tailored security solutions 
            that address the specific threats and compliance requirements of your sector.
          </p>
        </motion.div>

        {/* Industry Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industrySolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Industry Image */}
              <div className={`h-48 bg-gradient-to-br ${solution.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
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

                {/* Common Threats */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Common Threats We Address:</h4>
                  <div className="space-y-2">
                    {solution.threats.map((threat, threatIndex) => (
                      <div key={threatIndex} className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{threat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Solutions */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Our Security Solutions:</h4>
                  <div className="space-y-2">
                    {solution.solutions.map((sol, solIndex) => (
                      <div key={solIndex} className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Security Frameworks & Methodologies
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We implement proven security frameworks and methodologies to ensure comprehensive 
              protection aligned with international best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFrameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {framework.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{framework.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{framework.description}</p>
                
                <div className="space-y-1">
                  {framework.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-xs text-primary-600 font-medium">
                      • {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SME Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Cybersecurity for Small & Medium Enterprises
            </h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              We understand that SMEs in Rwanda need enterprise-level security at affordable prices. 
              Our solutions are designed to protect growing businesses without breaking the budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Scalable Solutions</h4>
              <p className="text-primary-100 text-sm">
                Security solutions that grow with your business, from startup to enterprise
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Affordable Protection</h4>
              <p className="text-primary-100 text-sm">
                Enterprise-grade security at SME-friendly prices with flexible payment options
              </p>
            </div>

            <div className="text-center">
              <Eye className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Managed Services</h4>
              <p className="text-primary-100 text-sm">
                Full security management so you can focus on growing your business
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CybersecuritySolutions;

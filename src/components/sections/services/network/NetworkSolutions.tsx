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
  Network,
  Wifi,
  Server,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const NetworkSolutions: React.FC = () => {
  const industrySolutions = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare Network Infrastructure',
      description: 'Secure, reliable networks for hospitals, clinics, and healthcare facilities.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'HIPAA-compliant network design',
        'Medical device connectivity',
        'Telemedicine infrastructure',
        'Electronic health record systems'
      ],
      benefits: [
        'Patient data security',
        'Reliable medical equipment connectivity',
        'Improved patient care coordination',
        'Regulatory compliance'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: 'Financial Services Networks',
      description: 'High-security network infrastructure for banks, microfinance, and fintech.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Banking network security',
        'ATM network connectivity',
        'Mobile banking infrastructure',
        'Payment processing networks'
      ],
      benefits: [
        'Enhanced transaction security',
        'Reliable ATM operations',
        'Secure mobile banking',
        'PCI DSS compliance'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Government Network Solutions',
      description: 'Secure, scalable networks for government agencies and public institutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Government network security',
        'Inter-agency connectivity',
        'Citizen service networks',
        'Emergency communication systems'
      ],
      benefits: [
        'Secure government communications',
        'Improved citizen services',
        'Inter-agency collaboration',
        'Emergency preparedness'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Education Network Infrastructure',
      description: 'Robust networks for schools, universities, and educational institutions.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Campus-wide Wi-Fi networks',
        'Student information systems',
        'E-learning infrastructure',
        'Digital classroom connectivity'
      ],
      benefits: [
        'Enhanced learning experience',
        'Reliable internet access',
        'Digital education support',
        'Administrative efficiency'
      ],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const networkTypes = [
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Local Area Networks (LAN)',
      description: 'High-performance networks for offices and campuses.',
      features: ['Gigabit Ethernet', 'Managed switches', 'VLAN segmentation', 'Network redundancy']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Wide Area Networks (WAN)',
      description: 'Connect multiple locations with reliable WAN solutions.',
      features: ['MPLS networks', 'SD-WAN solutions', 'VPN connectivity', 'Bandwidth optimization']
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Wireless Networks',
      description: 'Enterprise-grade wireless connectivity solutions.',
      features: ['Wi-Fi 6/6E', 'Mesh networks', 'Guest access', 'Mobile device management']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Data Center Networks',
      description: 'High-speed networks for data centers and server farms.',
      features: ['Core switching', 'Storage networks', 'Virtualization', 'Load balancing']
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
            Industry-Specific Network Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every industry has unique networking requirements. We design and implement 
            tailored network solutions that address specific industry challenges and compliance needs.
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
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Network Solutions:</h4>
                  <div className="space-y-2">
                    {solution.solutions.map((sol, solIndex) => (
                      <div key={solIndex} className="flex items-center space-x-2">
                        <Network className="w-4 h-4 text-primary-500 flex-shrink-0" />
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
                        <Zap className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Network Infrastructure Types We Deploy
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From local area networks to complex data center infrastructures, 
              we design and implement all types of network solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{type.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{type.description}</p>
                
                <div className="space-y-1">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-primary-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SME Network Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Users className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Network Solutions for SMEs in Rwanda</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We understand that small and medium enterprises need enterprise-grade networking 
            at affordable prices. Our SME solutions are designed to grow with your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Network className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Scalable Networks</h4>
              <p className="text-primary-100 text-sm">
                Start small and expand your network as your business grows
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Enterprise Security</h4>
              <p className="text-primary-100 text-sm">
                Get the same level of security as large enterprises at SME prices
              </p>
            </div>

            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <h4 className="text-lg font-bold mb-2">Managed Services</h4>
              <p className="text-primary-100 text-sm">
                Full network management so you can focus on your business
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkSolutions;

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
  Router,
  Cable
} from 'lucide-react';

const NetworkServices: React.FC = () => {
  const networkSolutions = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Enterprise Network Design',
      description: 'Scalable network architecture for large organizations and corporate offices.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      services: [
        'Campus network design',
        'Data center networking',
        'WAN/LAN integration',
        'Network redundancy planning'
      ],
      benefits: [
        'High availability and reliability',
        'Scalable infrastructure',
        'Centralized management',
        'Cost-effective operations'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Wireless Network Solutions',
      description: 'Enterprise-grade wireless networks with seamless coverage and high performance.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      services: [
        'Wi-Fi 6/6E deployment',
        'Wireless site surveys',
        'Guest network setup',
        'Wireless security implementation'
      ],
      benefits: [
        'Seamless connectivity',
        'High-speed wireless access',
        'Secure guest access',
        'Mobile device support'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Network Security Infrastructure',
      description: 'Comprehensive security solutions to protect your network from cyber threats.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      services: [
        'Firewall implementation',
        'Intrusion detection systems',
        'VPN setup and management',
        'Network access control'
      ],
      benefits: [
        'Advanced threat protection',
        'Secure remote access',
        'Compliance adherence',
        'Real-time monitoring'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Data Center Networking',
      description: 'High-performance networking solutions for data centers and server environments.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      services: [
        'Core switching infrastructure',
        'Storage area networks (SAN)',
        'Network virtualization',
        'Load balancing solutions'
      ],
      benefits: [
        'High-speed data transfer',
        'Optimized performance',
        'Scalable architecture',
        'Reduced latency'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const serviceTypes = [
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Network Planning & Design',
      description: 'Comprehensive network architecture planning and design services.',
      features: ['Site surveys', 'Capacity planning', 'Network topology design', 'Future-proofing']
    },
    {
      icon: <Cable className="w-6 h-6" />,
      title: 'Infrastructure Installation',
      description: 'Professional installation of network equipment and cabling systems.',
      features: ['Structured cabling', 'Equipment installation', 'Testing & certification', 'Documentation']
    },
    {
      icon: <Router className="w-6 h-6" />,
      title: 'Network Configuration',
      description: 'Expert configuration and optimization of network devices and systems.',
      features: ['Router configuration', 'Switch setup', 'VLAN implementation', 'QoS optimization']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Managed Services',
      description: '24/7 network monitoring, management, and support services.',
      features: ['Proactive monitoring', 'Performance optimization', 'Troubleshooting', 'Regular maintenance']
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
            Comprehensive Network Infrastructure Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From design to deployment and ongoing management, we provide end-to-end network 
            infrastructure services that ensure reliable, secure, and high-performance connectivity.
          </p>
        </motion.div>

        {/* Network Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {networkSolutions.map((solution, index) => (
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

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Our Services:</h4>
                  <div className="space-y-2">
                    {solution.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2">
                        <Network className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{service}</span>
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
                        <Shield className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Network Infrastructure Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide comprehensive network services covering every aspect of your 
              infrastructure needs, from initial planning to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {type.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{type.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                
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

        {/* Rwanda Network Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Network className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Supporting Rwanda's Digital Infrastructure</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We're committed to building robust network infrastructure that supports Rwanda's 
            vision of becoming a digital hub in East Africa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-200">Networks Deployed</div>
              <div className="text-sm text-primary-100">Across Rwanda & East Africa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200">Network Uptime</div>
              <div className="text-sm text-primary-100">Guaranteed reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Expert Support</div>
              <div className="text-sm text-primary-100">Continuous monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkServices;

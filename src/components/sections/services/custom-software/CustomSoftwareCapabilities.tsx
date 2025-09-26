'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud,
  CheckCircle,
  Settings,
  Globe,
  Zap,
  Users,
  Monitor
} from 'lucide-react';

const CustomSoftwareCapabilities: React.FC = () => {
  const developmentAreas = [
    {
      category: 'Web Applications',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Progressive Web Applications (PWA)',
        'Single Page Applications (SPA)',
        'E-commerce Platforms',
        'Content Management Systems',
        'Customer Portals',
        'Admin Dashboards'
      ]
    },
    {
      category: 'Mobile Applications',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      backgroundImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Native iOS & Android Apps',
        'Cross-platform Development',
        'Mobile Banking Solutions',
        'E-commerce Mobile Apps',
        'Healthcare Mobile Apps',
        'Educational Apps'
      ]
    },
    {
      category: 'Enterprise Software',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      backgroundImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'ERP Systems',
        'CRM Solutions',
        'Inventory Management',
        'HR Management Systems',
        'Financial Management',
        'Business Intelligence'
      ]
    },
    {
      category: 'Cloud Solutions',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      backgroundImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Cloud-native Applications',
        'Microservices Architecture',
        'API Development',
        'Serverless Solutions',
        'DevOps Implementation',
        'Cloud Migration'
      ]
    }
  ];

  const technicalExpertise = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces that provide exceptional user experiences.',
      icon: <Monitor className="w-6 h-6" />,
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions that power your applications efficiently.',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Go']
    },
    {
      title: 'Database Design',
      description: 'Optimized database architectures for performance and scalability.',
      icon: <Settings className="w-6 h-6" />,
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for all devices.',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment pipelines.',
      icon: <Cloud className="w-6 h-6" />,
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform']
    },
    {
      title: 'Integration & APIs',
      description: 'Seamless integration between systems and third-party services.',
      icon: <Zap className="w-6 h-6" />,
      technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'Message Queues', 'ESB', 'Microservices']
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
            Our Software Development Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we have the expertise to build any type of software solution 
            your business needs. Our team covers the full spectrum of modern development technologies.
          </p>
        </motion.div>

        {/* Development Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {developmentAreas.map((area, index) => (
            <motion.div
              key={area.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Image Header */}
              <div className={`h-48 bg-gradient-to-br ${area.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                  style={{
                    backgroundImage: `url(${area.backgroundImage})`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {area.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{area.category}</h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-3">
                  {area.capabilities.map((capability, capabilityIndex) => (
                    <div key={capabilityIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Expertise & Technologies
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We stay current with the latest technologies and best practices to deliver 
              cutting-edge software solutions that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalExpertise.map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-primary-600">
                    {expertise.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{expertise.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{expertise.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {expertise.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rwanda-Specific Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Solutions Tailored for Rwanda's Market
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We understand Rwanda's unique business environment and build software solutions 
              that address local needs, regulations, and market opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Multi-Language Support</h4>
              <p className="text-gray-600 text-sm">
                Applications supporting Kinyarwanda, French, and English languages
              </p>
            </div>

            <div className="text-center">
              <Smartphone className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Mobile-First Design</h4>
              <p className="text-gray-600 text-sm">
                Optimized for Rwanda's mobile-first digital ecosystem
              </p>
            </div>

            <div className="text-center">
              <Database className="w-12 h-12 text-accent-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Local Compliance</h4>
              <p className="text-gray-600 text-sm">
                Built-in compliance with Rwanda's data protection and business regulations
              </p>
            </div>

            <div className="text-center">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Payment Integration</h4>
              <p className="text-gray-600 text-sm">
                Integration with local payment systems and mobile money platforms
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomSoftwareCapabilities;

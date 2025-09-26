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
  Lightbulb,
  TrendingUp,
  Shield,
  Settings,
  BarChart3,
  Globe
} from 'lucide-react';

const ConsultingServices: React.FC = () => {
  const consultingAreas = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Digital Strategy & Planning',
      description: 'Comprehensive digital transformation roadmaps and technology strategy development.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      services: [
        'Digital transformation strategy',
        'Technology roadmap development',
        'Business process optimization',
        'Change management planning'
      ],
      outcomes: [
        'Clear technology vision',
        'Aligned business objectives',
        'Reduced implementation risks',
        'Faster time-to-market'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'IT Assessment & Audit',
      description: 'Comprehensive evaluation of your current IT infrastructure and processes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      services: [
        'Infrastructure assessment',
        'Security audit and compliance',
        'Performance evaluation',
        'Cost optimization analysis'
      ],
      outcomes: [
        'Identified improvement areas',
        'Risk mitigation strategies',
        'Cost reduction opportunities',
        'Performance optimization'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Technology Architecture',
      description: 'Design scalable and efficient technology architectures for your business needs.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      services: [
        'System architecture design',
        'Cloud architecture planning',
        'Integration strategy',
        'Scalability planning'
      ],
      outcomes: [
        'Scalable infrastructure',
        'Improved system integration',
        'Enhanced performance',
        'Future-proof architecture'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity Consulting',
      description: 'Strategic cybersecurity planning and risk management for your organization.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      services: [
        'Security strategy development',
        'Risk assessment and management',
        'Compliance planning',
        'Security awareness training'
      ],
      outcomes: [
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced security risks',
        'Improved incident response'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const industryExpertise = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Healthcare',
      description: 'Digital health solutions and healthcare IT strategy',
      expertise: ['EHR implementation', 'Telemedicine platforms', 'Healthcare compliance', 'Medical data security']
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: 'Financial Services',
      description: 'Fintech innovation and banking technology strategy',
      expertise: ['Digital banking', 'Payment systems', 'Regulatory compliance', 'Risk management']
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Government',
      description: 'Digital government and public sector transformation',
      expertise: ['E-government services', 'Citizen portals', 'Data governance', 'Public sector security']
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education',
      description: 'Educational technology and digital learning solutions',
      expertise: ['Learning management', 'Student information systems', 'Digital classrooms', 'Educational analytics']
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Retail & E-commerce',
      description: 'Digital commerce and retail technology strategy',
      expertise: ['E-commerce platforms', 'Inventory management', 'Customer analytics', 'Omnichannel solutions']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'SME & Startups',
      description: 'Technology strategy for growing businesses',
      expertise: ['Scalable solutions', 'Cost-effective technology', 'Growth planning', 'Digital marketing']
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
            Comprehensive IT Consulting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy development to implementation guidance, we provide end-to-end consulting 
            services that help you navigate the complex technology landscape with confidence.
          </p>
        </motion.div>

        {/* Consulting Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {consultingAreas.map((area, index) => (
            <motion.div
              key={area.title}
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
                    backgroundImage: `url(${area.image})`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {area.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Our Services:</h4>
                  <div className="space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2">
                        <Lightbulb className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Expected Outcomes:</h4>
                  <div className="space-y-2">
                    {area.outcomes.map((outcome, outcomeIndex) => (
                      <div key={outcomeIndex} className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Consulting Expertise
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We understand that every industry has unique technology challenges and requirements. 
              Our consultants bring deep sector knowledge to deliver targeted solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExpertise.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-primary-600">
                    {industry.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                
                <div className="space-y-1">
                  {industry.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-primary-600 font-medium">
                      • {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rwanda Market Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Globe className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Rwanda & East Africa Market Expertise</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Our deep understanding of Rwanda's business environment, regulatory landscape, 
            and market dynamics ensures our consulting advice is practical and actionable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-primary-200">Consulting Projects</div>
              <div className="text-sm text-primary-100">Across East Africa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-primary-200">Years Experience</div>
              <div className="text-sm text-primary-100">In Rwanda market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-primary-200">Client Satisfaction</div>
              <div className="text-sm text-primary-100">Successful outcomes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingServices;

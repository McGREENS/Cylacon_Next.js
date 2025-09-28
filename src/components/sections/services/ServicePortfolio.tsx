'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Smartphone, ShoppingCart, Building, Heart, GraduationCap } from 'lucide-react';

interface ServicePortfolioProps {
  service: string;
}

const ServicePortfolio: React.FC<ServicePortfolioProps> = ({ service }) => {
  const portfolioItems = [
    {
      title: 'Rwanda Healthcare Portal',
      category: 'Healthcare',
      description: 'Comprehensive healthcare management system for hospitals and clinics across Rwanda.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      features: ['Patient Management', 'Appointment Scheduling', 'Medical Records', 'Billing System'],
      icon: <Heart className="w-6 h-6" />,
      image: '/portfolio/healthcare-portal.jpg', // Placeholder
      link: '#',
      stats: { users: '10,000+', uptime: '99.9%', performance: 'A+' }
    },
    {
      title: 'Kigali E-Commerce Platform',
      category: 'E-commerce',
      description: 'Multi-vendor marketplace connecting local businesses with customers across Rwanda.',
      technologies: ['Next.js', 'Laravel', 'MySQL', 'Stripe'],
      features: ['Multi-vendor Support', 'Mobile Payments', 'Inventory Management', 'Analytics Dashboard'],
      icon: <ShoppingCart className="w-6 h-6" />,
      image: '/portfolio/ecommerce-platform.jpg', // Placeholder
      link: '#',
      stats: { transactions: '50,000+', vendors: '500+', growth: '+150%' }
    },
    {
      title: 'Rwanda Education Hub',
      category: 'Education',
      description: 'Online learning platform for schools and universities with integrated assessment tools.',
      technologies: ['Vue.js', 'Django', 'MongoDB', 'WebRTC'],
      features: ['Virtual Classrooms', 'Assignment Management', 'Progress Tracking', 'Video Conferencing'],
      icon: <GraduationCap className="w-6 h-6" />,
      image: '/portfolio/education-hub.jpg', // Placeholder
      link: '#',
      stats: { students: '25,000+', courses: '1,000+', completion: '85%' }
    },
    {
      title: 'Government Services Portal',
      category: 'Government',
      description: 'Digital transformation platform for government services and citizen engagement.',
      technologies: ['Angular', 'PHP', 'Oracle', 'Azure'],
      features: ['Document Processing', 'Citizen Services', 'Digital Payments', 'Service Tracking'],
      icon: <Building className="w-6 h-6" />,
      image: '/portfolio/government-portal.jpg', // Placeholder
      link: '#',
      stats: { services: '100+', citizens: '1M+', efficiency: '+200%' }
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Healthcare': return 'from-red-500 to-pink-500';
      case 'E-commerce': return 'from-green-500 to-emerald-500';
      case 'Education': return 'from-primary-500 to-secondary-500';
      case 'Government': return 'from-purple-500 to-violet-500';
      default: return 'from-primary-500 to-secondary-500';
    }
  };

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
            Our Web Development <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our successful web development projects across various industries in Rwanda. 
            Each project showcases our commitment to quality, innovation, and client success.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-primary-200"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${getCategoryColor(item.category)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                {/* Placeholder for actual project screenshot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/80 text-center">
                    <Code className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(item.stats).map(([key, value], statIndex) => (
                      <div key={statIndex}>
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <a 
                  href={item.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-transform duration-200"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Portfolio <span className="gradient-text">Highlights</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our web development projects have made a real impact across Rwanda's digital landscape
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-700 font-medium">Websites Built</div>
              <div className="text-sm text-gray-500">Since 2022</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Happy Clients</div>
              <div className="text-sm text-gray-500">Across East Africa</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-600 mb-2">99.9%</div>
              <div className="text-gray-700 font-medium">Uptime</div>
              <div className="text-sm text-gray-500">Average Performance</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support</div>
              <div className="text-sm text-gray-500">Always Available</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful clients. Let's discuss how we can bring your 
              web development vision to life with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                Get Free Consultation
              </a>
              <a 
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                View Full Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePortfolio;

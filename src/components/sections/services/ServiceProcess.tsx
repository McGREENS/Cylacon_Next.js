'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  Headphones,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

interface ServiceProcessProps {
  service: string;
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ service }) => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements through detailed consultations.',
      icon: <MessageSquare className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: ['Project scope document', 'Technical requirements', 'Timeline & budget', 'Wireframes & mockups']
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our design team creates beautiful, user-friendly interfaces while our developers plan the technical architecture.',
      icon: <Lightbulb className="w-8 h-8" />,
      duration: '2-3 weeks',
      deliverables: ['UI/UX designs', 'System architecture', 'Database design', 'Technology stack selection']
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your website using modern technologies, following best practices for security, performance, and scalability.',
      icon: <Code className="w-8 h-8" />,
      duration: '4-8 weeks',
      deliverables: ['Frontend development', 'Backend development', 'Database implementation', 'API integration']
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing across all devices and browsers to ensure your website works flawlessly for all users.',
      icon: <TestTube className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: ['Functionality testing', 'Performance testing', 'Security testing', 'Cross-browser testing']
    },
    {
      step: '05',
      title: 'Launch & Deployment',
      description: 'We deploy your website to production servers and ensure everything is running smoothly for your go-live.',
      icon: <Rocket className="w-8 h-8" />,
      duration: '1 week',
      deliverables: ['Production deployment', 'DNS configuration', 'SSL certificate', 'Performance monitoring']
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your website secure, fast, and up-to-date.',
      icon: <Headphones className="w-8 h-8" />,
      duration: 'Ongoing',
      deliverables: ['24/7 monitoring', 'Regular updates', 'Security patches', 'Technical support']
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
            Our Web Development <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven, systematic approach to deliver high-quality websites on time and within budget. 
            Our process ensures transparency, quality, and client satisfaction at every step.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary-200">
                    <div className="flex items-center mb-4 justify-center lg:justify-start">
                      <span className="text-3xl font-bold text-primary-600 mr-4">{step.step}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">{step.description}</p>
                    
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <Clock className="w-5 h-5 text-primary-500 mr-2" />
                      <span className="text-primary-600 font-semibold">{step.duration}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Process <span className="gradient-text">Works</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our structured approach ensures project success and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Collaborative Approach</h4>
              <p className="text-gray-600">
                We work closely with you at every step, ensuring your vision is realized 
                and your feedback is incorporated throughout the process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-secondary-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h4>
              <p className="text-gray-600">
                Rigorous testing and quality checks at each phase ensure your website 
                meets the highest standards of performance and reliability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">On-Time Delivery</h4>
              <p className="text-gray-600">
                Our systematic approach and experienced team ensure projects are 
                delivered on schedule without compromising on quality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;

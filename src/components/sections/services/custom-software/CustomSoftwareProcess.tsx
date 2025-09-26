'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Code, 
  TestTube, 
  Rocket, 
  Headphones,
  CheckCircle,
  Clock,
  Users,
  Zap
} from 'lucide-react';

const CustomSoftwareProcess: React.FC = () => {
  const developmentProcess = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business requirements, processes, and goals to understand exactly what you need.',
      icon: <Search className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: [
        'Requirements documentation',
        'User stories and use cases',
        'Technical feasibility study',
        'Project roadmap'
      ],
      activities: [
        'Stakeholder interviews',
        'Business process analysis',
        'Technical requirements gathering',
        'Competitive analysis'
      ]
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Create detailed designs, architecture, and project plans that align with your vision and requirements.',
      icon: <FileText className="w-8 h-8" />,
      duration: '2-3 weeks',
      deliverables: [
        'UI/UX designs and prototypes',
        'System architecture design',
        'Database schema design',
        'Development timeline'
      ],
      activities: [
        'User interface design',
        'User experience optimization',
        'Technical architecture planning',
        'Technology stack selection'
      ]
    },
    {
      step: '03',
      title: 'Development & Coding',
      description: 'Build your software using agile methodologies with regular updates and feedback cycles.',
      icon: <Code className="w-8 h-8" />,
      duration: '8-16 weeks',
      deliverables: [
        'Working software modules',
        'Regular progress demos',
        'Code documentation',
        'Version control history'
      ],
      activities: [
        'Agile development sprints',
        'Code reviews and quality assurance',
        'Regular client demonstrations',
        'Continuous integration setup'
      ]
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing to ensure your software is bug-free, secure, and performs optimally.',
      icon: <TestTube className="w-8 h-8" />,
      duration: '2-3 weeks',
      deliverables: [
        'Test plans and results',
        'Bug reports and fixes',
        'Performance optimization',
        'Security audit report'
      ],
      activities: [
        'Functional testing',
        'Performance testing',
        'Security testing',
        'User acceptance testing'
      ]
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Deploy your software to production with proper monitoring and launch support.',
      icon: <Rocket className="w-8 h-8" />,
      duration: '1 week',
      deliverables: [
        'Production deployment',
        'User training materials',
        'System documentation',
        'Monitoring setup'
      ],
      activities: [
        'Production environment setup',
        'Data migration (if needed)',
        'User training sessions',
        'Go-live support'
      ]
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and enhancements to keep your software running smoothly.',
      icon: <Headphones className="w-8 h-8" />,
      duration: 'Ongoing',
      deliverables: [
        'Bug fixes and updates',
        'Feature enhancements',
        'Performance monitoring',
        'Technical support'
      ],
      activities: [
        'Continuous monitoring',
        'Regular updates and patches',
        'Feature development',
        '24/7 technical support'
      ]
    }
  ];

  const processAdvantages = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative Approach',
      description: 'Work closely with our team throughout the development process'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Agile Methodology',
      description: 'Flexible development with regular feedback and iterations'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures bug-free, high-performance software'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Delivery',
      description: 'Efficient processes that deliver results on time and within budget'
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
            Our Software Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven, collaborative development process that ensures your custom software 
            is delivered on time, within budget, and exceeds your expectations.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>

          <div className="space-y-16">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4 justify-center lg:justify-start">
                      <span className="text-3xl font-bold text-primary-600 mr-4">{step.step}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">{step.description}</p>
                    
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <Clock className="w-5 h-5 text-primary-500 mr-2" />
                      <span className="text-primary-600 font-semibold">{step.duration}</span>
                    </div>

                    {/* Key Activities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                      <div className="space-y-2">
                        {step.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-secondary-500 rounded-full flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
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

        {/* Process Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven development methodology ensures successful project delivery 
              with high-quality results and satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {advantage.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomSoftwareProcess;

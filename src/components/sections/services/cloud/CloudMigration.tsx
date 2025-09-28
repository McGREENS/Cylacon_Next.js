'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Clock,
  Shield,
  Database,
  Server,
  Cloud,
  Settings,
  BarChart3,
  Zap
} from 'lucide-react';

const CloudMigration: React.FC = () => {
  const migrationProcess = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive evaluation of your current infrastructure and migration readiness assessment.',
      icon: <BarChart3 className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: [
        'Current infrastructure audit',
        'Cloud readiness assessment',
        'Migration strategy document',
        'Cost-benefit analysis'
      ],
      activities: [
        'Application dependency mapping',
        'Performance baseline establishment',
        'Security requirements analysis',
        'Compliance gap identification'
      ]
    },
    {
      step: '02',
      title: 'Migration Strategy Design',
      description: 'Develop a detailed migration plan with timelines, resource requirements, and risk mitigation.',
      icon: <Settings className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: [
        'Detailed migration roadmap',
        'Resource allocation plan',
        'Risk mitigation strategies',
        'Testing and validation plan'
      ],
      activities: [
        'Migration approach selection',
        'Timeline and milestone planning',
        'Team role definition',
        'Communication plan development'
      ]
    },
    {
      step: '03',
      title: 'Cloud Environment Setup',
      description: 'Prepare and configure the target cloud environment with security and compliance measures.',
      icon: <Cloud className="w-8 h-8" />,
      duration: '2-3 weeks',
      deliverables: [
        'Cloud infrastructure setup',
        'Security configuration',
        'Network connectivity',
        'Monitoring and logging setup'
      ],
      activities: [
        'Virtual network configuration',
        'Identity and access management',
        'Security policy implementation',
        'Backup and recovery setup'
      ]
    },
    {
      step: '04',
      title: 'Data & Application Migration',
      description: 'Execute the migration of data and applications with minimal business disruption.',
      icon: <Database className="w-8 h-8" />,
      duration: '3-6 weeks',
      deliverables: [
        'Migrated applications',
        'Data synchronization',
        'Performance optimization',
        'Integration testing'
      ],
      activities: [
        'Phased data migration',
        'Application deployment',
        'Performance tuning',
        'User acceptance testing'
      ]
    },
    {
      step: '05',
      title: 'Testing & Validation',
      description: 'Comprehensive testing to ensure all systems function correctly in the cloud environment.',
      icon: <CheckCircle className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: [
        'Test execution reports',
        'Performance validation',
        'Security verification',
        'Go-live approval'
      ],
      activities: [
        'Functional testing',
        'Performance testing',
        'Security testing',
        'Disaster recovery testing'
      ]
    },
    {
      step: '06',
      title: 'Go-Live & Support',
      description: 'Execute the final cutover and provide ongoing support for the new cloud environment.',
      icon: <Zap className="w-8 h-8" />,
      duration: 'Ongoing',
      deliverables: [
        'Production cutover',
        'User training materials',
        'Support documentation',
        'Monitoring dashboards'
      ],
      activities: [
        'Production deployment',
        'User training delivery',
        'Performance monitoring',
        'Continuous optimization'
      ]
    }
  ];

  const migrationApproaches = [
    {
      title: 'Lift and Shift (Rehosting)',
      description: 'Move applications to the cloud with minimal changes',
      icon: <Server className="w-6 h-6" />,
      benefits: ['Fastest migration', 'Lower risk', 'Immediate cost savings'],
      bestFor: 'Legacy applications, quick cloud adoption'
    },
    {
      title: 'Replatforming',
      description: 'Make minimal optimizations to leverage cloud benefits',
      icon: <Settings className="w-6 h-6" />,
      benefits: ['Better performance', 'Cost optimization', 'Improved scalability'],
      bestFor: 'Applications needing minor updates'
    },
    {
      title: 'Refactoring',
      description: 'Redesign applications to be cloud-native',
      icon: <Cloud className="w-6 h-6" />,
      benefits: ['Maximum cloud benefits', 'Enhanced agility', 'Future-proof'],
      bestFor: 'Critical applications, long-term strategy'
    },
    {
      title: 'Hybrid Migration',
      description: 'Combine on-premises and cloud infrastructure',
      icon: <ArrowRight className="w-6 h-6" />,
      benefits: ['Gradual transition', 'Risk mitigation', 'Compliance flexibility'],
      bestFor: 'Regulated industries, large enterprises'
    }
  ];

  const migrationChallenges = [
    {
      challenge: 'Data Security Concerns',
      solution: 'End-to-end encryption and compliance-first approach',
      icon: <Shield className="w-5 h-5" />
    },
    {
      challenge: 'Application Downtime',
      solution: 'Phased migration with zero-downtime strategies',
      icon: <Clock className="w-5 h-5" />
    },
    {
      challenge: 'Staff Training Needs',
      solution: 'Comprehensive training programs and documentation',
      icon: <Users className="w-5 h-5" />
    },
    {
      challenge: 'Cost Overruns',
      solution: 'Detailed planning and continuous cost monitoring',
      icon: <BarChart3 className="w-5 h-5" />
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
            Seamless Cloud <span className="gradient-text">Migration</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make cloud migration simple and risk-free. Our proven methodology ensures your business 
            continues to operate smoothly while we move your systems to the cloud.
          </p>
        </motion.div>

        {/* Migration Process */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>

          <div className="space-y-16">
            {migrationProcess.map((step, index) => (
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
                  <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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

        {/* Migration Approaches */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Migration <span className="gradient-text">Approaches</span> We Offer
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We tailor our migration approach based on your specific needs, timeline, and business objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationApproaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-primary-600">
                    {approach.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{approach.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{approach.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 text-xs mb-2">Benefits:</h5>
                  {approach.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-xs text-primary-600 mb-1">
                      • {benefit}
                    </div>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500">
                  <strong>Best for:</strong> {approach.bestFor}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Migration Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Common Migration <span className="gradient-text">Challenges</span> & Our Solutions
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We've helped dozens of businesses overcome migration challenges. Here's how we address common concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {migrationChallenges.map((item, index) => (
              <motion.div
                key={item.challenge}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2">{item.challenge}</h4>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <p className="text-gray-600 text-sm">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Migration Success Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <CheckCircle className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Migration Success Guarantee</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We're so confident in our migration process that we guarantee successful completion 
            within the agreed timeline and budget. Your success is our commitment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-primary-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-primary-200">Data Loss</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Migration Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudMigration;

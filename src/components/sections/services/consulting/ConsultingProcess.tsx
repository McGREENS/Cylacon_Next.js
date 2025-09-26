'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Lightbulb, 
  Settings, 
  Rocket, 
  Headphones,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3,
  TrendingUp
} from 'lucide-react';

const ConsultingProcess: React.FC = () => {
  const consultingProcess = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current technology landscape, business processes, and strategic objectives.',
      icon: <Search className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: [
        'Current state assessment',
        'Technology inventory',
        'Business process analysis',
        'Stakeholder interviews'
      ],
      activities: [
        'Infrastructure evaluation',
        'Process mapping',
        'Risk assessment',
        'Competitive analysis'
      ]
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive technology strategy aligned with your business goals and market opportunities.',
      icon: <Lightbulb className="w-8 h-8" />,
      duration: '2-3 weeks',
      deliverables: [
        'Technology strategy document',
        'Digital transformation roadmap',
        'Investment priorities',
        'Risk mitigation plan'
      ],
      activities: [
        'Strategic planning sessions',
        'Technology roadmap creation',
        'Budget planning',
        'Timeline development'
      ]
    },
    {
      step: '03',
      title: 'Solution Design',
      description: 'Design detailed solutions and architectures that address your specific business needs and challenges.',
      icon: <Settings className="w-8 h-8" />,
      duration: '2-4 weeks',
      deliverables: [
        'Solution architecture',
        'Implementation plan',
        'Vendor recommendations',
        'Technical specifications'
      ],
      activities: [
        'Architecture design',
        'Vendor evaluation',
        'Solution prototyping',
        'Cost-benefit analysis'
      ]
    },
    {
      step: '04',
      title: 'Implementation Planning',
      description: 'Develop detailed implementation plans with timelines, resources, and change management strategies.',
      icon: <FileText className="w-8 h-8" />,
      duration: '1-2 weeks',
      deliverables: [
        'Project implementation plan',
        'Resource allocation',
        'Change management strategy',
        'Success metrics definition'
      ],
      activities: [
        'Project planning',
        'Team formation',
        'Training planning',
        'Communication strategy'
      ]
    },
    {
      step: '05',
      title: 'Implementation Support',
      description: 'Provide ongoing guidance and support during the implementation phase to ensure successful delivery.',
      icon: <Rocket className="w-8 h-8" />,
      duration: 'Variable',
      deliverables: [
        'Implementation oversight',
        'Progress monitoring',
        'Issue resolution',
        'Quality assurance'
      ],
      activities: [
        'Project management',
        'Regular reviews',
        'Problem solving',
        'Performance monitoring'
      ]
    },
    {
      step: '06',
      title: 'Optimization & Support',
      description: 'Continuous optimization and ongoing advisory services to maximize the value of your technology investments.',
      icon: <Headphones className="w-8 h-8" />,
      duration: 'Ongoing',
      deliverables: [
        'Performance optimization',
        'Regular health checks',
        'Strategic updates',
        'Continuous improvement'
      ],
      activities: [
        'Performance monitoring',
        'Regular assessments',
        'Strategy updates',
        'Advisory services'
      ]
    }
  ];

  const processAdvantages = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative Approach',
      description: 'Work closely with your team to ensure buy-in and successful adoption'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Business-Focused',
      description: 'Technology recommendations aligned with business objectives'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data-Driven Decisions',
      description: 'Evidence-based recommendations supported by thorough analysis'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Measurable Results',
      description: 'Clear success metrics and regular progress tracking'
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
            Our Proven Consulting Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured, collaborative approach that ensures your technology strategy 
            is well-planned, properly implemented, and delivers measurable business value.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>

          <div className="space-y-16">
            {consultingProcess.map((step, index) => (
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
              Why Our Consulting Process Works
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our methodology is designed to deliver practical, actionable results 
              that drive real business value and sustainable technology transformation.
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

        {/* Consulting Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Target className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Our Consulting Commitment</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            We're committed to your success. Our consulting engagements are designed to deliver 
            measurable results and long-term value for your organization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-primary-200">Actionable Recommendations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30-Day</div>
              <div className="text-primary-200">Follow-up Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">ROI</div>
              <div className="text-primary-200">Focused Outcomes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingProcess;

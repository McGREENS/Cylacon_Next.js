'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Cloud, 
  Brain, 
  Monitor,
  Wifi,
  Database,
  Users,
  BookOpen,
  CheckCircle,
  Zap,
  GraduationCap,
  Globe
} from 'lucide-react';

const EdTechSolutions: React.FC = () => {
  const edTechCategories = [
    {
      category: 'AI-Powered Learning',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-accent-500 to-accent-600',
      backgroundImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Personalized learning paths',
        'Intelligent tutoring systems',
        'Automated content generation',
        'Learning analytics and insights',
        'Adaptive assessment tools',
        'Natural language processing for education'
      ]
    },
    {
      category: 'Cloud-Based Education Platforms',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Scalable learning management systems',
        'Cloud-based content delivery',
        'Multi-device accessibility',
        'Real-time collaboration tools',
        'Secure data storage and backup',
        'Integration with third-party tools'
      ]
    },
    {
      category: 'Mobile Learning Solutions',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-secondary-500 to-secondary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Native mobile learning apps',
        'Offline content synchronization',
        'Push notifications for engagement',
        'Mobile-first responsive design',
        'Gamification elements',
        'Social learning features'
      ]
    },
    {
      category: 'Virtual & Augmented Reality',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-primary-600 to-secondary-600',
      backgroundImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      capabilities: [
        'Immersive virtual classrooms',
        'AR-enhanced learning materials',
        '3D educational simulations',
        'Virtual laboratory experiences',
        'Interactive historical recreations',
        'Skill-based VR training modules'
      ]
    }
  ];

  const implementationApproach = [
    {
      title: 'Educational Assessment',
      description: 'Comprehensive evaluation of current educational technology needs and infrastructure.',
      icon: <BookOpen className="w-6 h-6" />,
      steps: ['Technology audit', 'Learning objectives analysis', 'Infrastructure assessment', 'Stakeholder consultation']
    },
    {
      title: 'Solution Design',
      description: 'Custom EdTech solution design aligned with educational goals and curriculum.',
      icon: <Brain className="w-6 h-6" />,
      steps: ['Learning experience design', 'Technology architecture', 'Content strategy', 'Integration planning']
    },
    {
      title: 'Implementation & Training',
      description: 'Careful deployment with comprehensive training for educators and students.',
      icon: <Users className="w-6 h-6" />,
      steps: ['Phased rollout', 'Educator training', 'Student onboarding', 'Technical support']
    },
    {
      title: 'Optimization & Support',
      description: 'Ongoing optimization and support to maximize educational impact.',
      icon: <Zap className="w-6 h-6" />,
      steps: ['Performance monitoring', 'Learning analytics', 'Continuous improvement', 'Technical maintenance']
    }
  ];

  const edTechTrends = [
    {
      trend: 'Artificial Intelligence in Education',
      description: 'AI-powered personalized learning and intelligent tutoring systems',
      icon: <Brain className="w-6 h-6" />,
      impact: ['Personalized learning paths', 'Automated grading', 'Predictive analytics', 'Intelligent content curation']
    },
    {
      trend: 'Microlearning & Bite-sized Content',
      description: 'Short, focused learning modules for better knowledge retention',
      icon: <BookOpen className="w-6 h-6" />,
      impact: ['Improved retention rates', 'Flexible learning schedules', 'Mobile-friendly content', 'Just-in-time learning']
    },
    {
      trend: 'Collaborative Learning Platforms',
      description: 'Social learning environments that promote peer-to-peer interaction',
      icon: <Users className="w-6 h-6" />,
      impact: ['Enhanced engagement', 'Peer learning opportunities', 'Community building', 'Knowledge sharing']
    },
    {
      trend: 'Data-Driven Education',
      description: 'Learning analytics to track progress and optimize educational outcomes',
      icon: <Database className="w-6 h-6" />,
      impact: ['Evidence-based decisions', 'Early intervention', 'Performance insights', 'Curriculum optimization']
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
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced <span className="gradient-text">Educational Technology</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge educational technology to create engaging learning experiences, 
            improve educational outcomes, and prepare students for the digital future.
          </p>
        </motion.div>

        {/* EdTech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {edTechCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
            >
              {/* Background Image Header */}
              <div className={`h-48 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                  style={{
                    backgroundImage: `url(${category.backgroundImage})`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-3">
                  {category.capabilities.map((capability, capabilityIndex) => (
                    <div key={capabilityIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Implementation Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">EdTech Implementation</span> Methodology
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven approach ensures successful educational technology implementations 
              that deliver measurable improvements in learning outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationApproach.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-secondary-600">
                    {approach.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{approach.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{approach.description}</p>
                
                <div className="space-y-1">
                  {approach.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="text-xs text-secondary-600 font-medium">
                      • {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EdTech Trends */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Latest <span className="gradient-text">Educational Technology</span> Trends
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay ahead with the latest EdTech trends that are shaping the future of education 
              and transforming how students learn and teachers teach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edTechTrends.map((trend, index) => (
              <motion.div
                key={trend.trend}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-primary-600">
                    {trend.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{trend.trend}</h4>
                <p className="text-gray-600 text-sm mb-4">{trend.description}</p>
                
                <div className="space-y-1">
                  {trend.impact.map((impact, impactIndex) => (
                    <div key={impactIndex} className="text-xs text-primary-600 font-medium">
                      • {impact}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EdTechSolutions;

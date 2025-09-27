'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  School, 
  BookOpen, 
  Users, 
  Monitor,
  Smartphone,
  Database,
  GraduationCap,
  Globe,
  CheckCircle,
  Zap
} from 'lucide-react';

const EducationSolutions: React.FC = () => {
  const educationSolutions = [
    {
      icon: <School className="w-8 h-8" />,
      title: 'School Management Systems',
      description: 'Comprehensive school administration and management solutions for educational institutions.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Student enrollment and records',
        'Staff management and payroll',
        'Academic calendar and scheduling',
        'Fee management and billing'
      ],
      benefits: [
        'Streamlined administration',
        'Improved record keeping',
        'Better resource management',
        'Enhanced communication'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Learning Management Systems',
      description: 'Digital platforms for course delivery, content management, and interactive learning.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Course content management',
        'Assignment and assessment tools',
        'Discussion forums and collaboration',
        'Progress tracking and analytics'
      ],
      benefits: [
        'Enhanced learning experience',
        'Flexible learning schedules',
        'Better student engagement',
        'Improved learning outcomes'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Digital Classroom Solutions',
      description: 'Interactive digital learning environments with multimedia content and collaboration tools.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Interactive whiteboards and displays',
        'Virtual classroom platforms',
        'Multimedia content delivery',
        'Real-time collaboration tools'
      ],
      benefits: [
        'Interactive learning experience',
        'Improved student participation',
        'Enhanced visual learning',
        'Better knowledge retention'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Student Information Systems',
      description: 'Centralized systems for managing student data, academic records, and enrollment.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      solutions: [
        'Student profile management',
        'Academic transcript systems',
        'Attendance tracking',
        'Parent communication portals'
      ],
      benefits: [
        'Centralized student data',
        'Improved data accuracy',
        'Better parent engagement',
        'Streamlined reporting'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const specializedSolutions = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Learning Apps',
      description: 'Educational mobile applications for students, teachers, and parents.',
      features: ['Offline content access', 'Interactive exercises', 'Progress tracking', 'Parent notifications']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Educational Analytics',
      description: 'Data analytics tools to track performance and improve outcomes.',
      features: ['Student performance analytics', 'Learning pattern analysis', 'Predictive insights', 'Custom reporting']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'E-Learning Platforms',
      description: 'Online learning platforms for distance and blended education.',
      features: ['Video conferencing', 'Content libraries', 'Assessment tools', 'Certification systems']
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Examination Systems',
      description: 'Digital examination and assessment management systems.',
      features: ['Online examinations', 'Automated grading', 'Result management', 'Anti-cheating measures']
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
            Comprehensive Education IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From primary schools to universities, we provide end-to-end digital solutions 
            that transform education delivery and enhance learning experiences for all stakeholders.
          </p>
        </motion.div>

        {/* Education Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {educationSolutions.map((solution, index) => (
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

                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {solution.solutions.map((sol, solIndex) => (
                      <div key={solIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
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
                        <Zap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Education Solutions
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced education technology solutions designed for specific educational needs 
              and modern learning requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">
                    {solution.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{solution.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-1">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-green-600 font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rwanda Education Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-green-200" />
          <h3 className="text-3xl font-bold mb-4">Supporting Rwanda's Education Excellence</h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            We're proud to support Rwanda's journey towards educational excellence. 
            Our education IT solutions help institutions deliver quality education and prepare students for the future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-green-200">Schools Digitized</div>
              <div className="text-sm text-green-100">Educational institutions served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-green-200">Students Impacted</div>
              <div className="text-sm text-green-100">Through digital learning platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-200">Learning Access</div>
              <div className="text-sm text-green-100">Round-the-clock educational resources</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSolutions;

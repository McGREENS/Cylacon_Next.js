'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Monitor,
  Zap,
  TrendingUp,
  CheckCircle,
  School,
  Database,
  Smartphone,
  Globe,
  Award
} from 'lucide-react';

interface EducationOverviewProps {
  solution: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const EducationOverview: React.FC<EducationOverviewProps> = ({ solution }) => {
  const educationServices = [
    {
      icon: <School className="w-6 h-6" />,
      title: 'School Management Systems',
      description: 'Comprehensive school administration systems for managing students, staff, and academic operations.'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Learning Management Systems',
      description: 'Digital platforms for course delivery, content management, and online learning experiences.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Student Information Systems',
      description: 'Centralized systems for managing student data, academic records, and enrollment information.'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Digital Classroom Solutions',
      description: 'Interactive digital learning environments with multimedia content and collaboration tools.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Learning Apps',
      description: 'Educational mobile applications for students, teachers, and parents to access learning resources.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Educational Analytics',
      description: 'Data analytics tools to track student performance and improve educational outcomes.'
    }
  ];

  const educationBenefits = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Better Learning Outcomes',
      description: 'Improved student performance through personalized and interactive learning.',
      stat: '35% Improvement'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Administrative Efficiency',
      description: 'Streamlined school operations and reduced administrative workload.',
      stat: '50% Faster'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Enhanced Engagement',
      description: 'Increased student and parent engagement through digital platforms.',
      stat: '70% Engagement'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Cost Efficiency',
      description: 'Reduced operational costs through digital transformation and automation.',
      stat: '30% Savings'
    }
  ];

  const rwandaEducationStats = [
    { number: '95%', label: 'Primary Enrollment', description: 'Rwanda has achieved near-universal primary education' },
    { number: '80%', label: 'Digital Readiness', description: 'Schools ready for digital transformation' },
    { number: '100+', label: 'Schools Digitized', description: 'Educational institutions served by CyLaCon' },
    { number: '24/7', label: 'Learning Access', description: 'Round-the-clock access to educational resources' }
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
            Transforming <span className="gradient-text">Education</span> in Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {solution.description}. We help educational institutions across Rwanda leverage technology 
            to improve learning outcomes, enhance administration, and prepare students for the digital economy.
          </p>
        </motion.div>

        {/* Rwanda Education Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-16 border border-primary-100"
        >
          <div className="text-center mb-8">
            <GraduationCap className="w-16 h-16 text-secondary-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rwanda's <span className="gradient-text">Education Transformation</span> Journey
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Rwanda has made remarkable progress in education, achieving near-universal primary education. 
              Now, digital transformation is key to enhancing quality and preparing students for the knowledge economy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {rwandaEducationStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            Comprehensive <span className="gradient-text">Education IT Solutions</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-primary-200"
              >
                <div className="w-14 h-14 bg-secondary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary-200 transition-colors duration-300">
                  <div className="text-secondary-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">CyLaCon</span> for Education IT?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our education IT solutions are designed specifically for Rwanda's educational landscape, 
              ensuring compatibility with local curricula and alignment with national education goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-secondary-600 mb-2">{benefit.stat}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Technology Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="mt-20 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Education <span className="text-secondary-200">Technology Standards</span></h3>
            <p className="text-secondary-100 text-lg">
              We implement education IT solutions using international standards and 
              best practices to ensure quality, accessibility, and future compatibility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'SCORM', 'xAPI (Tin Can)', 'LTI Standards', 'QTI', 'WCAG 2.1', 'FERPA Compliant',
              'Canvas LMS', 'Moodle', 'Google Classroom', 'Microsoft Teams', 'Zoom Education', 'Khan Academy'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-colors duration-200"
              >
                <div className="text-sm font-medium">{tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationOverview;

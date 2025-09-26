'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Shield,
  BarChart3,
  Settings,
  Zap,
  Target,
  Clock
} from 'lucide-react';

const ConsultingExpertise: React.FC = () => {
  const expertiseAreas = [
    {
      category: 'Digital Transformation',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      capabilities: [
        'Digital strategy development',
        'Process automation',
        'Legacy system modernization',
        'Change management',
        'Digital culture transformation',
        'Innovation frameworks'
      ]
    },
    {
      category: 'Cloud Strategy',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      capabilities: [
        'Cloud adoption strategy',
        'Multi-cloud architecture',
        'Cloud cost optimization',
        'Migration planning',
        'Cloud governance',
        'Hybrid cloud solutions'
      ]
    },
    {
      category: 'Cybersecurity Strategy',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      capabilities: [
        'Security strategy development',
        'Risk assessment frameworks',
        'Compliance planning',
        'Security architecture',
        'Incident response planning',
        'Security awareness programs'
      ]
    },
    {
      category: 'Data & Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      capabilities: [
        'Data strategy development',
        'Analytics roadmap',
        'Business intelligence',
        'Data governance',
        'AI/ML implementation',
        'Data-driven decision making'
      ]
    }
  ];

  const consultingTeam = [
    {
      title: 'Senior Technology Consultants',
      description: 'Experienced consultants with deep technical expertise and business acumen.',
      icon: <Users className="w-6 h-6" />,
      qualifications: ['15+ years experience', 'Industry certifications', 'Business strategy expertise', 'Technical leadership']
    },
    {
      title: 'Industry Specialists',
      description: 'Sector-specific experts who understand unique industry challenges.',
      icon: <Target className="w-6 h-6" />,
      qualifications: ['Domain expertise', 'Regulatory knowledge', 'Best practices', 'Market insights']
    },
    {
      title: 'Technical Architects',
      description: 'Solution architects who design scalable and efficient technology solutions.',
      icon: <Settings className="w-6 h-6" />,
      qualifications: ['Architecture design', 'System integration', 'Scalability planning', 'Technology evaluation']
    },
    {
      title: 'Project Managers',
      description: 'Certified project managers who ensure successful delivery of consulting engagements.',
      icon: <Clock className="w-6 h-6" />,
      qualifications: ['PMP certification', 'Agile methodologies', 'Risk management', 'Stakeholder management']
    }
  ];

  const clientSuccessStories = [
    {
      industry: 'Healthcare',
      challenge: 'Digital transformation of patient care systems',
      solution: 'Comprehensive EHR implementation strategy',
      result: '40% improvement in patient care efficiency',
      icon: <Award className="w-6 h-6" />
    },
    {
      industry: 'Financial Services',
      challenge: 'Legacy system modernization',
      solution: 'Cloud-first digital banking strategy',
      result: '60% reduction in operational costs',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      industry: 'Government',
      challenge: 'Citizen service digitization',
      solution: 'E-government platform strategy',
      result: '80% increase in citizen satisfaction',
      icon: <Users className="w-6 h-6" />
    },
    {
      industry: 'Education',
      challenge: 'Remote learning infrastructure',
      solution: 'Scalable online education platform',
      result: '300% increase in student engagement',
      icon: <Lightbulb className="w-6 h-6" />
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
            Our Consulting Expertise & Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of certified consultants brings deep expertise across multiple domains, 
            ensuring you receive world-class advisory services tailored to your specific needs.
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{area.category}</h3>
              </div>

              <div className="space-y-3">
                {area.capabilities.map((capability, capabilityIndex) => (
                  <div key={capabilityIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consulting Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Consulting Team
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our multidisciplinary team combines technical expertise with business acumen 
              to deliver consulting services that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingTeam.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {role.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{role.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{role.description}</p>
                
                <div className="space-y-1">
                  {role.qualifications.map((qualification, qualificationIndex) => (
                    <div key={qualificationIndex} className="text-xs text-primary-600 font-medium">
                      • {qualification}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our consulting engagements deliver measurable results that transform businesses 
              and drive sustainable growth across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientSuccessStories.map((story, index) => (
              <motion.div
                key={story.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mr-3">
                    <div className="text-primary-600">
                      {story.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{story.industry}</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Challenge: </span>
                    <span className="text-sm text-gray-600">{story.challenge}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Solution: </span>
                    <span className="text-sm text-gray-600">{story.solution}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-primary-600">Result: </span>
                    <span className="text-sm font-bold text-primary-600">{story.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consulting CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Lightbulb className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our expert consultants guide your technology journey. Schedule a consultation 
            to discuss your challenges and explore how we can help you achieve your goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-primary-200">Successful Engagements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-primary-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-primary-200">Client Satisfaction</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/consultation"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="tel:+250780115764"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Call +250 780 115 764
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingExpertise;

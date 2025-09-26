'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  FileText, 
  CheckCircle, 
  Globe,
  Lock,
  Eye,
  Users,
  Building,
  Gavel
} from 'lucide-react';

const CybersecurityCompliance: React.FC = () => {
  const complianceStandards = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'ISO 27001',
      subtitle: 'Information Security Management',
      description: 'International standard for information security management systems (ISMS).',
      color: 'from-blue-500 to-blue-600',
      benefits: [
        'Systematic approach to managing sensitive information',
        'Risk-based security controls',
        'Continuous improvement process',
        'International recognition and trust'
      ],
      whatWeProvide: [
        'Gap analysis and readiness assessment',
        'ISMS documentation and policies',
        'Risk assessment and treatment',
        'Internal audit and certification support'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'GDPR Compliance',
      subtitle: 'Data Protection Regulation',
      description: 'European data protection regulation applicable to organizations handling EU citizen data.',
      color: 'from-green-500 to-green-600',
      benefits: [
        'Enhanced data protection and privacy',
        'Improved customer trust',
        'Reduced risk of data breaches',
        'Compliance with international standards'
      ],
      whatWeProvide: [
        'Data protection impact assessments',
        'Privacy policy development',
        'Data mapping and inventory',
        'Staff training and awareness programs'
      ]
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      title: 'Rwanda Data Protection Law',
      subtitle: 'Local Regulatory Compliance',
      description: 'Compliance with Rwanda\'s data protection and privacy regulations.',
      color: 'from-purple-500 to-purple-600',
      benefits: [
        'Legal compliance in Rwanda',
        'Protection of citizen data',
        'Reduced regulatory risks',
        'Enhanced business reputation'
      ],
      whatWeProvide: [
        'Local law compliance assessment',
        'Data protection officer services',
        'Regulatory reporting assistance',
        'Legal framework implementation'
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Industry Standards',
      subtitle: 'Sector-Specific Compliance',
      description: 'Compliance with industry-specific security and regulatory requirements.',
      color: 'from-orange-500 to-orange-600',
      benefits: [
        'Industry-specific protection',
        'Regulatory compliance',
        'Competitive advantage',
        'Customer confidence'
      ],
      whatWeProvide: [
        'PCI DSS for payment processing',
        'HIPAA for healthcare organizations',
        'SOX for financial reporting',
        'Custom compliance frameworks'
      ]
    }
  ];

  const complianceProcess = [
    {
      step: '1',
      title: 'Compliance Assessment',
      description: 'Evaluate current compliance status against required standards and regulations.',
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: '2',
      title: 'Gap Analysis',
      description: 'Identify gaps between current state and compliance requirements.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: '3',
      title: 'Implementation Planning',
      description: 'Develop detailed roadmap for achieving and maintaining compliance.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      step: '4',
      title: 'Controls Implementation',
      description: 'Deploy necessary security controls and compliance measures.',
      icon: <Lock className="w-6 h-6" />
    },
    {
      step: '5',
      title: 'Documentation & Training',
      description: 'Create compliance documentation and train staff on new procedures.',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: '6',
      title: 'Ongoing Monitoring',
      description: 'Continuous monitoring and maintenance of compliance status.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const complianceBenefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Reduction',
      description: 'Minimize legal, financial, and reputational risks through proper compliance.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Competitive Advantage',
      description: 'Stand out from competitors with certified security and compliance standards.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Trust',
      description: 'Build stronger customer relationships through demonstrated security commitment.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Market Access',
      description: 'Access new markets and customers that require compliance certifications.'
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
            Compliance & Regulatory Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate complex regulatory requirements with confidence. We help you achieve and maintain 
            compliance with international standards and local regulations in Rwanda and East Africa.
          </p>
        </motion.div>

        {/* Compliance Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {complianceStandards.map((standard, index) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {standard.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{standard.title}</h3>
                  <p className="text-gray-600">{standard.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{standard.description}</p>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <div className="space-y-2">
                  {standard.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Provide */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What We Provide:</h4>
                <div className="space-y-2">
                  {standard.whatWeProvide.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Compliance Implementation Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Systematic approach to achieving and maintaining compliance with regulatory standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary-200 transition-colors duration-300">
                    <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Why Compliance Matters for Your Business
            </h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Compliance is not just about avoiding penalties - it's about building trust, 
              reducing risks, and creating competitive advantages in the marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-3">{benefit.title}</h4>
                <p className="text-primary-100 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Achieve Compliance?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your compliance journey today with a free assessment. We'll help you understand 
              your current status and create a roadmap to achieve your compliance goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Free Compliance Assessment
              </a>
              <a 
                href="tel:+250780115764"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Call +250 780 115 764
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CybersecurityCompliance;

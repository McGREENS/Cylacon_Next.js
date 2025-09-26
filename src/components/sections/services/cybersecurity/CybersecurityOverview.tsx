'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Users,
  TrendingUp,
  Clock,
  Award,
  Globe
} from 'lucide-react';

interface CybersecurityOverviewProps {
  service: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const CybersecurityOverview: React.FC<CybersecurityOverviewProps> = ({ service }) => {
  const securityServices = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Assessments',
      description: 'Comprehensive evaluation of your current security posture to identify vulnerabilities and risks.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Penetration Testing',
      description: 'Ethical hacking to test your systems and identify potential security weaknesses before attackers do.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Network Security',
      description: 'Advanced firewall configuration, intrusion detection, and network monitoring solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Compliance Management',
      description: 'ISO 27001, GDPR, and local regulatory compliance implementation and maintenance.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Incident Response',
      description: '24/7 security incident response and recovery services to minimize business impact.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Security Training',
      description: 'Employee cybersecurity awareness training to build your human firewall.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'ISO 27001 Certified',
      description: 'We practice what we preach with internationally recognized security standards.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Rwanda Expertise',
      description: 'Deep understanding of local regulatory requirements and business environment.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Proven Track Record',
      description: 'Successfully secured businesses across East Africa with zero major incidents.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and rapid incident response capabilities.'
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
            Comprehensive Cybersecurity Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}. In today's digital landscape, cybersecurity isn't optional - 
            it's essential for business survival and growth in Rwanda and East Africa.
          </p>
        </motion.div>

        {/* Threat Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-16 border border-red-100"
        >
          <div className="text-center mb-8">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Growing Cyber Threat Landscape in Rwanda
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              As Rwanda's digital economy grows, so do the cyber threats. Businesses face increasing 
              risks from ransomware, data breaches, and sophisticated attacks targeting financial systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">300%</div>
              <div className="text-gray-700 font-medium">Increase in Cyber Attacks</div>
              <div className="text-sm text-gray-600">In East Africa (2023-2024)</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$2.4M</div>
              <div className="text-gray-700 font-medium">Average Cost of Data Breach</div>
              <div className="text-sm text-gray-600">For African businesses</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Attacks Target Small Business</div>
              <div className="text-sm text-gray-600">Often unprepared for threats</div>
            </div>
          </div>
        </motion.div>

        {/* Security Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            What We Can Do for Your Business
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose CyLaCon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CyLaCon for Cybersecurity?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're not just another cybersecurity company - we're Rwanda's trusted security partners 
              with deep local expertise and international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-200 transition-colors duration-300">
                  <div className="text-secondary-600 group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Cybersecurity Commitment</h3>
            <p className="text-primary-100 text-lg">
              Protecting Rwanda's digital infrastructure with world-class security expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-200">Security Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">&lt;15min</div>
              <div className="text-primary-200">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">ISO</div>
              <div className="text-primary-200">27001 Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CybersecurityOverview;

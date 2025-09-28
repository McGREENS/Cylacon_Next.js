'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

const LeadershipTeam: React.FC = () => {
  const teamMembers = [
    {
      name: 'Laurier HABIYAREMYE',
      position: 'CEO & Founder',
      description: '8+ years in cybersecurity, Computer Networks and enterprise IT infrastructure.',
      image: '/team/laurier.jpg', // Placeholder - replace with actual image
      linkedin: '#',
      email: 'laurier@cylacon.com',
      expertise: ['Cybersecurity', 'Network Infrastructure', 'Enterprise IT', 'Strategic Leadership']
    },
    {
      name: 'Heloise ASIFIWE',
      position: 'Chief Legal Officer',
      description: 'Chief Legal Officer specializing in corporate governance and strategic legal affairs.',
      image: '/team/heloise.jpg', // Placeholder - replace with actual image
      linkedin: '#',
      email: 'heloise@cylacon.com',
      expertise: ['Corporate Governance', 'Legal Affairs', 'Compliance', 'Risk Management']
    },
    {
      name: 'Moise HAGENAYEZU',
      position: 'Chief Data Officer',
      description: 'Data analytics specialist with expertise in business & data intelligence.',
      image: '/team/moise.jpg', // Placeholder - replace with actual image
      linkedin: '#',
      email: 'moise@cylacon.com',
      expertise: ['Data Analytics', 'Business Intelligence', 'Data Science', 'AI/ML']
    },
    {
      name: 'Claudine IRADUKUNDA',
      position: 'Director of Operations',
      description: 'IT project management specialist with PMP certification.',
      image: '/team/claudine.jpg', // Placeholder - replace with actual image
      linkedin: '#',
      email: 'claudine@cylacon.com',
      expertise: ['Project Management', 'Operations', 'PMP Certified', 'Process Optimization']
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
            Leadership <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals leading CyLaCon's mission to transform 
            businesses across East Africa through innovative technology solutions.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-primary-200"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center overflow-hidden">
                  {/* Placeholder avatar with initials */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Work with Our <span className="gradient-text">Team</span>?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our leadership team is committed to understanding your business needs and 
              delivering technology solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Our Team
              </a>
              <a 
                href="tel:+250780115764"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                +250 780 115 764
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipTeam;

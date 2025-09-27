'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Zap, Clock } from 'lucide-react';

const TrustBar: React.FC = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Rocket },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Zap },
    { number: '24/7', label: 'Support Available', icon: Clock },
  ];

  // Extended client list for continuous scrolling
  const clients = [
    { name: 'TechCorp', logo: '🏢', color: 'from-primary-500 to-primary-600' },
    { name: 'InnovateLab', logo: '🔬', color: 'from-primary-400 to-primary-500' },
    { name: 'DataFlow', logo: '📊', color: 'from-secondary-500 to-secondary-600' },
    { name: 'CloudSync', logo: '☁️', color: 'from-primary-600 to-primary-700' },
    { name: 'SecureNet', logo: '🔐', color: 'from-accent-500 to-accent-600' },
    { name: 'WebForge', logo: '🌐', color: 'from-primary-500 to-primary-600' },
    { name: 'DevStudio', logo: '💻', color: 'from-primary-400 to-primary-500' },
    { name: 'FinTech Pro', logo: '💳', color: 'from-secondary-500 to-secondary-600' },
    { name: 'HealthTech', logo: '🏥', color: 'from-accent-500 to-accent-600' },
    { name: 'EduSoft', logo: '🎓', color: 'from-primary-600 to-primary-700' },
    { name: 'Interserver', logo: '🌐', color: 'from-primary-500 to-primary-600' },
  ];

  // Double the array for seamless loop
  const extendedClients = [...clients, ...clients];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300B255' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Counter with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:border-primary-200 transition-all duration-500">
                {/* Icon */}
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                {/* Number with Counter Animation */}
                <motion.div 
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {stat.number}
                </motion.div>
                
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary-500 group-hover:to-purple-500 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted Organizations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h3 
            className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Trusted by Leading Organizations
          </motion.h3>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join the growing community of businesses that trust CyLaCon for their digital transformation
          </motion.p>
        </motion.div>
          
        {/* Continuous Sliding Client Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -50 * clients.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-8"
            style={{ width: `${100 * clients.length}%` }}
          >
            {extendedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  z: 50
                }}
                className="flex-shrink-0 group cursor-pointer"
              >
                {/* Client Card */}
                <div className="relative w-32 h-20 mx-4">
                  {/* Glowing Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative w-full h-full bg-white rounded-xl shadow-lg border border-gray-100 group-hover:shadow-2xl group-hover:border-transparent transition-all duration-500 flex flex-col items-center justify-center">
                    {/* Logo/Icon */}
                    <div className="text-2xl mb-1 transform group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    
                    {/* Company Name */}
                    <div className={`text-xs font-semibold bg-gradient-to-r ${client.color} bg-clip-text text-transparent group-hover:text-gray-800 transition-all duration-300`}>
                      {client.name}
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certification Badges with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, staggerChildren: 0.1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6"
        >
          {[
            { name: 'ISO 27001 Certified', icon: 'ISO', color: 'from-primary-500 to-primary-600', bgColor: 'bg-primary-50' },
            { name: 'AWS Partner', icon: 'AWS', color: 'from-secondary-500 to-secondary-600', bgColor: 'bg-secondary-50' },
            { name: 'Microsoft Partner', icon: 'MS', color: 'from-accent-500 to-accent-600', bgColor: 'bg-accent-50' },
          ].map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                type: "spring"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className={`relative group flex items-center space-x-3 ${cert.bgColor} px-6 py-3 rounded-full cursor-pointer`}
            >
              {/* Glowing Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-10 h-10 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <span className="text-white text-xs font-bold">{cert.icon}</span>
              </div>
              
              {/* Text */}
              <span className="relative text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {cert.name}
              </span>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gradient-to-r group-hover:${cert.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;

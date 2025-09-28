'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Zap, Shield, Globe, Code, Database, Cloud, Users, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle animation variants
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingIcons = [
    { Icon: Code, color: 'text-primary-400', size: 'w-8 h-8', delay: 0 },
    { Icon: Database, color: 'text-green-400', size: 'w-6 h-6', delay: 1 },
    { Icon: Cloud, color: 'text-purple-400', size: 'w-7 h-7', delay: 2 },
    { Icon: Shield, color: 'text-red-400', size: 'w-6 h-6', delay: 3 },
    { Icon: Globe, color: 'text-cyan-400', size: 'w-8 h-8', delay: 4 },
    { Icon: Zap, color: 'text-yellow-400', size: 'w-6 h-6', delay: 5 },
  ];

  // Deterministic particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: 10, top: 20 }, { left: 85, top: 15 }, { left: 30, top: 80 }, { left: 70, top: 60 },
    { left: 15, top: 45 }, { left: 90, top: 30 }, { left: 25, top: 70 }, { left: 60, top: 10 },
    { left: 5, top: 85 }, { left: 95, top: 55 }, { left: 40, top: 25 }, { left: 75, top: 75 },
    { left: 20, top: 90 }, { left: 80, top: 5 }, { left: 35, top: 40 }, { left: 65, top: 65 },
    { left: 12, top: 35 }, { left: 88, top: 70 }, { left: 45, top: 15 }, { left: 55, top: 85 },
    { left: 8, top: 50 }, { left: 92, top: 25 }, { left: 28, top: 60 }, { left: 72, top: 40 },
    { left: 18, top: 75 }, { left: 82, top: 20 }, { left: 38, top: 55 }, { left: 62, top: 35 },
    { left: 22, top: 80 }, { left: 78, top: 10 }, { left: 42, top: 65 }, { left: 58, top: 45 },
    { left: 14, top: 30 }, { left: 86, top: 85 }, { left: 34, top: 20 }, { left: 66, top: 70 },
    { left: 26, top: 50 }, { left: 74, top: 30 }, { left: 46, top: 80 }, { left: 54, top: 15 },
    { left: 16, top: 65 }, { left: 84, top: 45 }, { left: 36, top: 75 }, { left: 64, top: 25 },
    { left: 24, top: 40 }, { left: 76, top: 85 }, { left: 44, top: 10 }, { left: 56, top: 60 },
    { left: 32, top: 35 }, { left: 68, top: 80 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Image and Parallax */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/one.jpg)',
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Animated Gradient Overlay with Brand Colors */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(0, 178, 85, 0.3) 0%, rgba(0, 153, 76, 0.2) 50%, rgba(100, 116, 139, 0.1) 100%)',
              'linear-gradient(45deg, rgba(0, 153, 76, 0.3) 0%, rgba(100, 116, 139, 0.2) 50%, rgba(0, 178, 85, 0.1) 100%)',
              'linear-gradient(45deg, rgba(0, 178, 85, 0.3) 0%, rgba(0, 153, 76, 0.2) 50%, rgba(100, 116, 139, 0.1) 100%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated Mesh Gradient Overlay with Brand Colors */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #00B255 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00994C 0%, transparent 50%), radial-gradient(circle at 40% 80%, #64748b 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #00B255 0%, transparent 50%), radial-gradient(circle at 20% 80%, #00994C 0%, transparent 50%), radial-gradient(circle at 60% 20%, #64748b 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #00B255 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00994C 0%, transparent 50%), radial-gradient(circle at 40% 80%, #64748b 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Interactive Mouse-Following Gradient with Brand Colors */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #00B255 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles */}
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, (i % 3 - 1) * 25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + (i % 5) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 10) * 0.5,
            }}
          />
        ))}

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.size} ${item.color} opacity-20`}
            style={{
              left: `${15 + (index * 15)}%`,
              top: `${20 + (index % 3) * 25}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{ delay: item.delay }}
          >
            <item.Icon className="w-full h-full" />
          </motion.div>
        ))}

        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="space-y-8"
            style={{ y: y1 }}
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500/20 to-primary-600/20 backdrop-blur-sm border border-primary-500/30 text-white px-6 py-3 rounded-full text-sm font-medium group cursor-pointer"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500" />
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <CheckCircle className="w-5 h-5 text-primary-400" />
              </motion.div>
              <span className="relative">ISO 27001 Certified • 150+ Projects Completed</span>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full border border-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Spectacular Main Headline */}
            <motion.div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              >
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Transforming
                </motion.span>
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Businesses Through
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  Innovative IT Solutions
                </motion.span>
              </motion.h1>

              {/* Animated Text Decoration */}
              <motion.div
                className="relative"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
                <motion.div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
                  animate={{ x: [0, 200, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '50px' }}
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Enterprise-grade technology services with focus on{' '}
              </motion.span>
              <motion.span
                className="text-primary-400 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                security, scalability,
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                {' '}and measurable business impact across Rwanda and East Africa.
              </motion.span>
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500" />
                
                <Button
                  variant="primary"
                  size="lg"
                  href="/consultation"
                  className="relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-2xl group border-0"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Button
                  variant="outline"
                  size="lg"
                  href="/portfolio"
                  className="relative bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-2xl group"
                >
                  <motion.div
                    className="mr-2"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Play className="w-5 h-5" />
                  </motion.div>
                  <span>View Our Work</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-wrap items-center gap-8 pt-6"
            >
              {[
                { number: '150+', label: 'Projects Completed', color: 'bg-primary-400', icon: CheckCircle },
                { number: '50+', label: 'Happy Clients', color: 'bg-primary-500', icon: Users },
                { number: '99.9%', label: 'Uptime Guarantee', color: 'bg-primary-600', icon: Shield }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.1, type: "spring" }}
                  className="flex items-center space-x-3 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-white font-bold text-lg">{item.number}</div>
                    <div className="text-gray-300 text-sm">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Spectacular Right Visual with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
            className="relative"
            style={{ y: y2 }}
          >
            {/* Main 3D Visual Container */}
            <div className="relative w-full h-96 lg:h-[600px] perspective-1000">
              {/* Central Holographic Display */}
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                initial={{ rotateX: 45, rotateY: -15 }}
                animate={{ rotateX: 0, rotateY: 0 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                whileHover={{ rotateY: 5, rotateX: -5 }}
              >
                {/* Holographic Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-primary-600/20 to-secondary-500/30 rounded-3xl backdrop-blur-sm border border-white/20"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(0, 178, 85, 0.3) 0%, rgba(0, 153, 76, 0.2) 50%, rgba(100, 116, 139, 0.3) 100%)',
                      'linear-gradient(45deg, rgba(0, 153, 76, 0.3) 0%, rgba(100, 116, 139, 0.2) 50%, rgba(0, 178, 85, 0.3) 100%)',
                      'linear-gradient(45deg, rgba(0, 178, 85, 0.3) 0%, rgba(0, 153, 76, 0.2) 50%, rgba(100, 116, 139, 0.3) 100%)',
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Central Logo with 3D Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotateZ: -180 }}
                    animate={{ scale: 1, rotateZ: 0 }}
                    transition={{ delay: 1, duration: 1, type: "spring" }}
                    whileHover={{ scale: 1.1, rotateZ: 360 }}
                  >
                    {/* Glowing Ring */}
                    <motion.div
                      className="absolute inset-0 w-40 h-40 border-4 border-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Inner Ring */}
                    <motion.div
                      className="absolute inset-4 border-2 border-primary-400 rounded-full opacity-60"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Central Logo */}
                    <div className="relative w-40 h-40 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-2xl">
                      <motion.span
                        className="text-white font-bold text-4xl"
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        C
                      </motion.span>
                    </div>
                    
                    {/* Orbiting Particles */}
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-white rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: `${80 + i * 10}px 0px`,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Company Info */}
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.h3
                    className="text-white font-bold text-xl mb-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Rwanda's IT Giants
                  </motion.h3>
                  <p className="text-gray-300 text-sm">Leading East Africa's Digital Transformation</p>
                </motion.div>
              </motion.div>

              {/* Floating 3D Service Cards */}
              {[
                { Icon: Shield, label: 'Security', color: 'from-accent-500 to-accent-600', position: { top: '10%', right: '-5%' }, delay: 0 },
                { Icon: Cloud, label: 'Cloud', color: 'from-primary-500 to-primary-600', position: { bottom: '15%', left: '-8%' }, delay: 1 },
                { Icon: Code, label: 'Development', color: 'from-primary-400 to-primary-500', position: { top: '50%', left: '-10%' }, delay: 2 },
                { Icon: Database, label: 'Data', color: 'from-secondary-500 to-secondary-600', position: { top: '20%', left: '15%' }, delay: 3 },
                { Icon: Globe, label: 'Web', color: 'from-primary-600 to-primary-700', position: { bottom: '20%', right: '10%' }, delay: 4 },
              ].map((service, index) => (
                <motion.div
                  key={service.label}
                  className="absolute"
                  style={service.position}
                  initial={{ opacity: 0, scale: 0, rotateX: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ 
                    delay: 1.5 + service.delay * 0.2,
                    duration: 0.8,
                    type: "spring"
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 15,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    animate={{ 
                      y: [0, -10, 0],
                      rotateZ: [0, 5, 0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4 + index * 0.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Glowing Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                    
                    {/* Card */}
                    <div className="relative w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex flex-col items-center justify-center shadow-2xl group-hover:bg-white/20 transition-all duration-500">
                      <service.Icon className="w-8 h-8 text-white mb-1" />
                      <span className="text-xs text-white font-semibold">{service.label}</span>
                    </div>
                    
                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                         style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }} />
                  </motion.div>
                </motion.div>
              ))}

              {/* Connecting Lines Animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 200 300 Q 300 200 400 250"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: 2 }}
                />
                <motion.path
                  d="M 100 400 Q 200 350 300 300"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: 2.5 }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00B255" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00994C" stopOpacity="1" />
                    <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00B255" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00994C" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500" />
          
          {/* Scroll Indicator */}
          <div className="relative w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-4 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
        
        <motion.p
          className="text-white/70 text-xs text-center mt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Shield, Cloud, Settings, Lightbulb, Network, Heart, Building, GraduationCap, ShoppingCart, Factory, Hotel } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  service: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  service
}) => {
  const getServiceIcon = (serviceName: string) => {
    switch (serviceName.toLowerCase()) {
      case 'web-development':
      case 'web development':
        return <Code className="w-8 h-8" />;
      case 'cybersecurity':
        return <Shield className="w-8 h-8" />;
      case 'cloud-solutions':
      case 'cloud solutions':
        return <Cloud className="w-8 h-8" />;
      case 'custom-software':
      case 'custom software development':
        return <Settings className="w-8 h-8" />;
      case 'consulting':
        return <Lightbulb className="w-8 h-8" />;
      case 'network-infrastructure':
        return <Network className="w-8 h-8" />;
      case 'healthcare':
        return <Heart className="w-8 h-8" />;
      case 'government':
        return <Building className="w-8 h-8" />;
      case 'education':
        return <GraduationCap className="w-8 h-8" />;
      case 'retail':
        return <ShoppingCart className="w-8 h-8" />;
      case 'manufacturing':
        return <Factory className="w-8 h-8" />;
      case 'hospitality':
        return <Hotel className="w-8 h-8" />;
      default:
        return <Globe className="w-8 h-8" />;
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 via-transparent to-secondary-600/40" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            {/* Service Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100/90 text-primary-700 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              {getServiceIcon(service)}
              <span>{service === 'consulting' ? 'IT Consulting' : service === 'network-infrastructure' ? 'Network Infrastructure' : service === 'healthcare' ? 'Healthcare Solutions' : service === 'government' ? 'Government Solutions' : service === 'education' ? 'Education Solutions' : service === 'retail' ? 'Retail Solutions' : service === 'manufacturing' ? 'Manufacturing Solutions' : service === 'hospitality' ? 'Hospitality Solutions' : service} • CyLaCon Rwanda</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {title.includes('Cybersecurity') ? (
                <>Advanced <span className="gradient-text">Cybersecurity</span> Services in Rwanda</>
              ) : title.includes('Web Development') ? (
                <>Professional <span className="gradient-text">Web Development</span> Services in Rwanda</>
              ) : title.includes('Cloud Solutions') ? (
                <>Advanced <span className="gradient-text">Cloud Solutions</span> for Rwanda's Digital Future</>
              ) : title.includes('Custom Software') ? (
                <><span className="gradient-text">Custom Software</span> Development for Rwanda's Digital Future</>
              ) : title.includes('Strategic IT Consulting') ? (
                <>Strategic <span className="gradient-text">IT Consulting</span> for Rwanda's Digital Future</>
              ) : title.includes('Enterprise Network Infrastructure') ? (
                <>Enterprise <span className="gradient-text">Network Infrastructure</span> for Rwanda's Digital Economy</>
              ) : title.includes('Digital Healthcare Transformation') ? (
                <>Digital <span className="gradient-text">Healthcare Transformation</span> for Rwanda</>
              ) : title.includes('Digital Government Transformation') ? (
                <>Digital <span className="gradient-text">Government Transformation</span> for Rwanda</>
              ) : title.includes('Digital Education Transformation') ? (
                <>Digital <span className="gradient-text">Education Transformation</span> for Rwanda</>
              ) : title.includes('Digital Retail Transformation') ? (
                <>Digital <span className="gradient-text">Retail Transformation</span> for Rwanda</>
              ) : title.includes('Smart Manufacturing Transformation') ? (
                <>Smart <span className="gradient-text">Manufacturing Transformation</span> for Rwanda</>
              ) : title.includes('Digital Hospitality Transformation') ? (
                <>Digital <span className="gradient-text">Hospitality Transformation</span> for Rwanda</>
              ) : (
                title
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="secondary"
                size="lg"
                href="/consultation"
                className="group bg-white text-primary-600 hover:bg-primary-50"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/portfolio"
                className="group border-white text-white hover:bg-white hover:text-primary-600"
              >
                View Portfolio
                <Globe className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-gray-300">150+ Websites Built</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-400" />
                <span className="text-sm text-gray-300">Rwanda & East Africa</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="relative hidden lg:block"
          >
            {/* Service Highlights */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">What We <span className="text-primary-300">Deliver</span></h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Responsive Design</div>
                    <div className="text-gray-300 text-sm">Mobile-first approach</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Custom Development</div>
                    <div className="text-gray-300 text-sm">Tailored to your needs</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">SEO Optimized</div>
                    <div className="text-gray-300 text-sm">Built for search engines</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;

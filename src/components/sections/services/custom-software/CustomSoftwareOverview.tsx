'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Database, 
  Zap, 
  Users,
  TrendingUp,
  CheckCircle,
  Settings,
  Globe,
  Shield
} from 'lucide-react';

interface CustomSoftwareOverviewProps {
  service: {
    name: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const CustomSoftwareOverview: React.FC<CustomSoftwareOverviewProps> = ({ service }) => {
  const softwareServices = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Custom Web Applications',
      description: 'Tailored web applications that perfectly match your business processes and requirements.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Enterprise Software',
      description: 'Scalable enterprise solutions for complex business operations and workflows.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'System Integration',
      description: 'Seamless integration between existing systems and new custom solutions.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'API Development',
      description: 'Robust APIs for data exchange and third-party integrations.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, efficient software solutions.'
    }
  ];

  const whyCustomSoftware = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Perfect Business Fit',
      description: 'Software designed specifically for your unique business processes and requirements.',
      stat: '100% Match'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Competitive Advantage',
      description: 'Stand out from competitors with unique features and capabilities.',
      stat: 'Market Edge'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Enhanced Productivity',
      description: 'Streamline operations and boost team efficiency with tailored tools.',
      stat: '40% Faster'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Scalable Growth',
      description: 'Software that grows with your business and adapts to changing needs.',
      stat: 'Future-Ready'
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
            Bespoke Software Solutions for Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}. We create software that perfectly fits your business, 
            giving you the competitive edge you need in Rwanda's growing digital economy.
          </p>
        </motion.div>

        {/* Custom Software Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-16 border border-blue-100"
        >
          <div className="text-center mb-8">
            <Code className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Custom Software Development?
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Off-the-shelf software forces you to adapt your business to the software. 
              Custom software adapts to your business, giving you exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCustomSoftware.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <div className="text-blue-600">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                <div className="text-gray-700 font-medium mb-2">{benefit.title}</div>
                <div className="text-sm text-gray-600">{benefit.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Software Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-12 text-center"
          >
            What We Can Build for You
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareServices.map((service, index) => (
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

        {/* Rwanda Digital Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Driving Rwanda's Digital Transformation
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              As Rwanda becomes a digital hub in East Africa, custom software solutions 
              are essential for businesses to stay competitive and innovative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-700 font-medium">Custom Solutions Built</div>
              <div className="text-sm text-gray-600">Across various industries</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-600">Successful project delivery</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support & Maintenance</div>
              <div className="text-sm text-gray-600">Ongoing technical support</div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Modern Technology Stack</h3>
            <p className="text-primary-100 text-lg">
              We use cutting-edge technologies to build robust, scalable, and future-proof software solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'React', 'Node.js', 'Python', 'Java', 'Flutter', 'React Native',
              'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'TypeScript'
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

export default CustomSoftwareOverview;

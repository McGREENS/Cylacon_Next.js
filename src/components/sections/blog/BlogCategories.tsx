'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Cloud, 
  Smartphone, 
  BarChart3,
  Globe,
  Zap,
  Database,
  Monitor,
  Users,
  Cog
} from 'lucide-react';

const BlogCategories: React.FC = () => {
  const categories = [
    {
      name: 'Digital Transformation',
      description: 'Strategies and insights for digital business transformation',
      icon: <Globe className="w-6 h-6" />,
      postCount: 24,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      name: 'Cybersecurity',
      description: 'Security best practices and threat protection strategies',
      icon: <Shield className="w-6 h-6" />,
      postCount: 18,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      name: 'Cloud Computing',
      description: 'Cloud migration, infrastructure, and optimization guides',
      icon: <Cloud className="w-6 h-6" />,
      postCount: 21,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      textColor: 'text-primary-600'
    },
    {
      name: 'Mobile Development',
      description: 'Mobile app development trends and best practices',
      icon: <Smartphone className="w-6 h-6" />,
      postCount: 15,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      textColor: 'text-primary-600'
    },
    {
      name: 'Data Analytics',
      description: 'Business intelligence and data-driven insights',
      icon: <BarChart3 className="w-6 h-6" />,
      postCount: 12,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      textColor: 'text-primary-600'
    },
    {
      name: 'Automation',
      description: 'Process automation and efficiency optimization',
      icon: <Zap className="w-6 h-6" />,
      postCount: 16,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      textColor: 'text-primary-600'
    },
    {
      name: 'Database Management',
      description: 'Database optimization and management strategies',
      icon: <Database className="w-6 h-6" />,
      postCount: 9,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      textColor: 'text-primary-600'
    },
    {
      name: 'IT Infrastructure',
      description: 'Network setup, maintenance, and optimization',
      icon: <Monitor className="w-6 h-6" />,
      postCount: 14,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      textColor: 'text-primary-600'
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
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive collection of articles organized by technology topics 
            and business areas to find exactly what you're looking for.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${category.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={category.textColor}>
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                {category.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {category.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {category.postCount} articles
                </span>
                <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <span className="text-white text-sm font-bold">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Popular Tags</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Rwanda IT', 'East Africa', 'Digital Innovation', 'Business Technology',
              'Software Solutions', 'Network Security', 'Cloud Migration', 'AI & ML',
              'IoT Solutions', 'DevOps', 'Agile Development', 'Tech Trends'
            ].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-600 cursor-pointer transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCategories;

'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceTechnologiesProps {
  service: string;
}

const ServiceTechnologies: React.FC<ServiceTechnologiesProps> = ({ service }) => {
  const technologies = {
    frontend: [
      { name: 'React', description: 'Modern UI library for interactive interfaces', logo: '⚛️' },
      { name: 'Next.js', description: 'Full-stack React framework', logo: '▲' },
      { name: 'Vue.js', description: 'Progressive JavaScript framework', logo: '💚' },
      { name: 'Angular', description: 'Enterprise-grade framework', logo: '🅰️' },
      { name: 'TypeScript', description: 'Type-safe JavaScript', logo: '🔷' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework', logo: '🎨' }
    ],
    backend: [
      { name: 'Node.js', description: 'JavaScript runtime for servers', logo: '🟢' },
      { name: 'PHP', description: 'Server-side scripting language', logo: '🐘' },
      { name: 'Laravel', description: 'Elegant PHP framework', logo: '🔴' },
      { name: 'Python', description: 'Versatile programming language', logo: '🐍' },
      { name: 'Django', description: 'High-level Python framework', logo: '🎯' },
      { name: 'Express.js', description: 'Fast Node.js web framework', logo: '🚀' }
    ],
    databases: [
      { name: 'MySQL', description: 'Popular relational database', logo: '🐬' },
      { name: 'PostgreSQL', description: 'Advanced open source database', logo: '🐘' },
      { name: 'MongoDB', description: 'NoSQL document database', logo: '🍃' },
      { name: 'Redis', description: 'In-memory data structure store', logo: '🔴' },
      { name: 'SQLite', description: 'Lightweight database engine', logo: '💾' },
      { name: 'Firebase', description: 'Google\'s mobile platform', logo: '🔥' }
    ],
    tools: [
      { name: 'Git', description: 'Version control system', logo: '📝' },
      { name: 'Docker', description: 'Containerization platform', logo: '🐳' },
      { name: 'AWS', description: 'Amazon Web Services', logo: '☁️' },
      { name: 'Vercel', description: 'Frontend deployment platform', logo: '▲' },
      { name: 'Netlify', description: 'Modern web development platform', logo: '🌐' },
      { name: 'GitHub', description: 'Code hosting platform', logo: '🐙' }
    ]
  };

  const techCategories = [
    {
      title: 'Frontend Technologies',
      description: 'Modern frameworks and libraries for creating engaging user interfaces',
      technologies: technologies.frontend,
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Backend Technologies',
      description: 'Robust server-side technologies for scalable applications',
      technologies: technologies.backend,
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      title: 'Databases',
      description: 'Reliable data storage solutions for all types of applications',
      technologies: technologies.databases,
      color: 'from-accent-500 to-accent-600'
    },
    {
      title: 'Tools & Platforms',
      description: 'Development tools and deployment platforms we use',
      technologies: technologies.tools,
      color: 'from-green-500 to-green-600'
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
            Technologies We <span className="gradient-text">Use</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest and most reliable technologies to build websites that are 
            fast, secure, and scalable. Our tech stack is carefully chosen to deliver the best results.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: techIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:bg-white border border-transparent hover:border-primary-200"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.logo}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{tech.name}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why We Choose These <span className="gradient-text">Technologies</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our technology choices are based on reliability, performance, and long-term maintainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Performance</h4>
              <p className="text-gray-600 text-sm">
                Fast loading times and smooth user experiences across all devices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Security</h4>
              <p className="text-gray-600 text-sm">
                Built-in security features and regular updates to protect your data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Scalability</h4>
              <p className="text-gray-600 text-sm">
                Technologies that grow with your business and handle increased traffic
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Maintainability</h4>
              <p className="text-gray-600 text-sm">
                Clean, well-documented code that's easy to update and maintain
              </p>
            </div>
          </div>
        </motion.div>

        {/* Rwanda-Specific Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Optimized for <span className="gradient-text">Rwanda & East Africa</span>
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We understand the unique challenges of the Rwandan market and optimize our 
              technology choices for local internet speeds, mobile usage patterns, and business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                Mobile-First Design
              </span>
              <span className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                Optimized for 3G/4G
              </span>
              <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                Local Payment Integration
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Multi-language Support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTechnologies;

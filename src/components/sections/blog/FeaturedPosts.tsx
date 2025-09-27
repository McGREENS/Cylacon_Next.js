'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Shield,
  Cloud,
  Smartphone,
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';

const FeaturedPosts: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'Digital Transformation Strategies for Rwanda\'s Growing Economy',
      excerpt: 'Explore how businesses in Rwanda can leverage digital transformation to drive growth, improve efficiency, and compete in the global market.',
      author: 'Jean Claude Niyonsenga',
      authorRole: 'CTO, CyLaCon',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Digital Transformation',
      categoryColor: 'from-primary-500 to-primary-600',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      icon: <Globe className="w-6 h-6" />,
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for East African Businesses',
      excerpt: 'Learn essential cybersecurity measures to protect your business from evolving threats in the digital landscape of East Africa.',
      author: 'Marie Uwimana',
      authorRole: 'Security Specialist, CyLaCon',
      date: '2024-03-12',
      readTime: '6 min read',
      category: 'Cybersecurity',
      categoryColor: 'from-primary-500 to-primary-600',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      icon: <Shield className="w-6 h-6" />,
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Migration Guide for Small and Medium Enterprises',
      excerpt: 'A comprehensive guide to migrating your business to the cloud, including benefits, challenges, and step-by-step implementation.',
      author: 'Patrick Mugisha',
      authorRole: 'Cloud Architect, CyLaCon',
      date: '2024-03-10',
      readTime: '10 min read',
      category: 'Cloud Computing',
      categoryColor: 'from-primary-500 to-primary-600',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      icon: <Cloud className="w-6 h-6" />,
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Mobile App Development Trends in Rwanda 2024',
      excerpt: 'Discover the latest mobile app development trends shaping Rwanda\'s digital landscape.',
      author: 'Alice Mukamana',
      date: '2024-03-08',
      readTime: '5 min read',
      category: 'Mobile Development',
      categoryColor: 'from-green-500 to-blue-500',
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      id: 5,
      title: 'Data Analytics for Business Intelligence in East Africa',
      excerpt: 'How data analytics can transform decision-making processes for businesses across East Africa.',
      author: 'David Nkurunziza',
      date: '2024-03-05',
      readTime: '7 min read',
      category: 'Data Analytics',
      categoryColor: 'from-primary-500 to-primary-600',
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      id: 6,
      title: 'Automation Solutions for Manufacturing in Rwanda',
      excerpt: 'Exploring how automation can boost productivity in Rwanda\'s growing manufacturing sector.',
      author: 'Emmanuel Habimana',
      date: '2024-03-02',
      readTime: '6 min read',
      category: 'Automation',
      categoryColor: 'from-green-500 to-blue-500',
      icon: <Zap className="w-5 h-5" />
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
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the latest technology trends, expert insights, and practical guides 
            written by our team of IT professionals and industry experts.
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${post.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 bg-gradient-to-r ${post.categoryColor} text-white text-sm font-medium rounded-full flex items-center space-x-2`}>
                    {post.icon}
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{post.author}</div>
                      <div className="text-sm text-gray-500">{post.authorRole}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Recent Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Recent Articles</h3>
            <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2 group">
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${post.categoryColor} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {post.icon}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPosts;

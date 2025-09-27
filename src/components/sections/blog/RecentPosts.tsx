'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  TrendingUp,
  Eye,
  MessageCircle,
  Share2
} from 'lucide-react';

const RecentPosts: React.FC = () => {
  const recentPosts = [
    {
      id: 1,
      title: 'How AI is Transforming Business Operations in Rwanda',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for growth in Rwanda\'s economy.',
      author: 'Dr. Sarah Mukamana',
      authorRole: 'AI Research Lead',
      date: '2024-03-20',
      readTime: '7 min read',
      category: 'Artificial Intelligence',
      views: '2.3k',
      comments: 15,
      trending: true,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 2,
      title: 'Building Resilient IT Infrastructure for Remote Work',
      excerpt: 'Essential strategies for creating robust IT infrastructure that supports distributed teams and remote work environments.',
      author: 'James Uwimana',
      authorRole: 'Infrastructure Architect',
      date: '2024-03-18',
      readTime: '9 min read',
      category: 'IT Infrastructure',
      views: '1.8k',
      comments: 12,
      trending: false,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 3,
      title: 'Sustainable Technology Solutions for Green Business',
      excerpt: 'Explore eco-friendly technology solutions that help businesses reduce their environmental impact while improving efficiency.',
      author: 'Grace Nyirahabimana',
      authorRole: 'Sustainability Tech Consultant',
      date: '2024-03-16',
      readTime: '6 min read',
      category: 'Green Technology',
      views: '1.5k',
      comments: 8,
      trending: true,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 4,
      title: 'Blockchain Applications Beyond Cryptocurrency',
      excerpt: 'Understanding practical blockchain applications in supply chain, healthcare, and government services across East Africa.',
      author: 'Eric Nshimiyimana',
      authorRole: 'Blockchain Developer',
      date: '2024-03-14',
      readTime: '8 min read',
      category: 'Blockchain',
      views: '2.1k',
      comments: 18,
      trending: false,
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 5,
      title: 'DevOps Best Practices for Agile Development Teams',
      excerpt: 'Implementing DevOps methodologies to streamline development processes and improve software delivery cycles.',
      author: 'Christine Mukeshimana',
      authorRole: 'DevOps Engineer',
      date: '2024-03-12',
      readTime: '10 min read',
      category: 'DevOps',
      views: '1.9k',
      comments: 14,
      trending: false,
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
    },
    {
      id: 6,
      title: 'IoT Solutions for Smart Cities in East Africa',
      excerpt: 'How Internet of Things technology is enabling smart city initiatives and improving urban life across East African cities.',
      author: 'Robert Habimana',
      authorRole: 'IoT Solutions Architect',
      date: '2024-03-10',
      readTime: '7 min read',
      category: 'Internet of Things',
      views: '1.7k',
      comments: 11,
      trending: true,
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300'
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
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay updated with our latest insights, tutorials, and industry analysis 
              from CyLaCon's team of technology experts.
            </p>
          </div>
          <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-colors duration-200">
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${post.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Trending Badge */}
                {post.trending && (
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-full flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Trending</span>
                    </div>
                  </div>
                )}

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Author and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{post.author}</div>
                      <div className="text-xs text-gray-500">{post.authorRole}</div>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-colors duration-200 flex items-center space-x-2 mx-auto">
            <span>Load More Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentPosts;

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Bell,
  Users,
  TrendingUp,
  Globe
} from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const benefits = [
    {
      icon: <Bell className="w-5 h-5" />,
      title: 'Weekly Tech Insights',
      description: 'Get the latest technology trends and insights delivered to your inbox'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Expert Analysis',
      description: 'Exclusive content from our team of IT professionals and industry experts'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Industry Updates',
      description: 'Stay ahead with updates on digital transformation and emerging technologies'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Rwanda Tech Scene',
      description: 'Local insights on Rwanda\'s growing technology and innovation ecosystem'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Subscribers' },
    { number: '98%', label: 'Open Rate' },
    { number: 'Weekly', label: 'Delivery' },
    { number: 'Free', label: 'Always' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center mb-6">
              <Mail className="w-8 h-8 text-primary-200 mr-3" />
              <span className="text-primary-200 font-semibold text-lg">CyLaCon Newsletter</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Stay Ahead with{' '}
              <span className="text-primary-200">Tech Insights</span>
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of IT professionals, business leaders, and technology enthusiasts 
              who rely on our newsletter for the latest insights and trends.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary-200 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-primary-100 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-primary-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-blue-200">
                Get weekly insights delivered straight to your inbox. No spam, unsubscribe anytime.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-primary-500 bg-white/10 border-white/20 rounded focus:ring-primary-400"
                    required
                  />
                  <label htmlFor="terms" className="text-primary-100 text-sm">
                    I agree to receive marketing emails and understand I can unsubscribe at any time. 
                    <a href="/privacy-policy" className="text-primary-200 underline cursor-pointer">Privacy Policy</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Subscribe Now</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-primary-200 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-primary-100">
                  You've successfully subscribed to our newsletter. 
                  Check your inbox for a confirmation email.
                </p>
              </motion.div>
            )}

            <div className="mt-6 text-center">
              <p className="text-primary-100 text-sm">
                Join <span className="font-semibold text-primary-200">5,000+</span> IT professionals 
                already subscribed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

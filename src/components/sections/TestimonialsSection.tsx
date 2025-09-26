'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import Card from '@/components/ui/Card';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Dr. Jean Paul Uwimana',
      role: 'CEO, MedGet Healthcare',
      company: 'MedGet Healthcare',
      image: '/images/testimonials/jean-paul.jpg',
      rating: 5,
      text: 'CyLaCon transformed our healthcare management system completely. The EHR platform they developed has increased our patient satisfaction by 40% and reduced administrative tasks by 60%. Their team&apos;s expertise in healthcare technology is unmatched.',
      results: ['40% increase in patient satisfaction', '60% reduction in administrative tasks', '100% HIPAA compliance achieved']
    },
    {
      name: 'Sarah Mukamana',
      role: 'IT Director, Rwanda Digital Agency',
      company: 'Rwanda Digital Agency',
      image: '/images/testimonials/sarah.jpg',
      rating: 5,
      text: 'Working with CyLaCon on our e-government portal was a game-changer. They delivered a robust, secure platform that serves thousands of citizens daily. Their understanding of government requirements and security standards is exceptional.',
      results: ['50% faster service delivery', '80% reduction in paperwork', '95% citizen satisfaction']
    },
    {
      name: 'Prof. Emmanuel Nkurunziza',
      role: 'Vice Chancellor, University of Rwanda',
      company: 'University of Rwanda',
      image: '/images/testimonials/emmanuel.jpg',
      rating: 5,
      text: 'The learning management system CyLaCon developed for our university has revolutionized our educational delivery. Student engagement increased by 70% and course completion rates improved significantly. Highly recommended!',
      results: ['70% improvement in student engagement', '90% reduction in administrative overhead', '85% increase in course completion rates']
    },
    {
      name: 'Marie Claire Uwimana',
      role: 'Operations Manager, RetailTech Rwanda',
      company: 'RetailTech Rwanda',
      image: '/images/testimonials/marie-claire.jpg',
      rating: 5,
      text: 'CyLaCon&apos;s e-commerce solution helped us scale our business across East Africa. The platform is user-friendly, secure, and handles high traffic seamlessly. Our online sales increased by 45% in the first year.',
      results: ['45% increase in online sales', '30% reduction in inventory costs', '65% improvement in customer retention']
    },
    {
      name: 'James Mwangi',
      role: 'Plant Manager, Smart Manufacturing Ltd',
      company: 'Smart Manufacturing Ltd',
      image: '/images/testimonials/james.jpg',
      rating: 5,
      text: 'The IoT integration and production monitoring system CyLaCon implemented has revolutionized our manufacturing process. We&apos;ve seen a 35% increase in production efficiency and 50% reduction in downtime.',
      results: ['35% increase in production efficiency', '50% reduction in downtime', '25% improvement in quality control']
    },
    {
      name: 'Grace Akimana',
      role: 'General Manager, Hotel Kigali',
      company: 'Hotel Kigali',
      image: '/images/testimonials/grace.jpg',
      rating: 5,
      text: 'CyLaCon&apos;s hospitality management system has streamlined our operations significantly. Bookings increased by 55% and guest satisfaction improved by 40%. The system is intuitive and our staff adapted quickly.',
      results: ['55% increase in bookings', '40% improvement in guest satisfaction', '30% reduction in operational costs']
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say 
            about working with CyLaCon and the results we&apos;ve achieved together.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content - Testimonial */}
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary-500" />
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      &ldquo;{testimonials[currentIndex].text}&rdquo;
                    </blockquote>

                    {/* Results */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Results Achieved:</h4>
                      {testimonials[currentIndex].results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{result}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-semibold text-lg">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-sm text-primary-500">
                          {testimonials[currentIndex].company}
                        </div>
                        {/* Rating */}
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Client Image Placeholder */}
                  <div className="space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white font-bold text-2xl">
                            {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Client Photo</p>
                          <p className="text-sm text-gray-500">Replace with actual client photo</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Company Logo Placeholder */}
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-gray-500 text-xs font-medium">Logo</span>
                      </div>
                      <p className="text-sm text-gray-600">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how CyLaCon can help transform your business 
              with innovative IT solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

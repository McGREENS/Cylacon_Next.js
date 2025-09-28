'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  Shield,
  Zap
} from 'lucide-react';

const MetricsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('metrics-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: TrendingUp,
      value: 150,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied clients across Rwanda and East Africa',
      color: 'from-primary-500 to-secondary-500',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-500'
    },
    {
      icon: Clock,
      value: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      description: 'Reliable service with minimal downtime',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      icon: Award,
      value: 5,
      suffix: '+',
      label: 'Years Experience',
      description: 'Proven track record in IT solutions',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500'
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: 'Security Compliance',
      description: 'ISO 27001 certified security standards',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      icon: Zap,
      value: 24,
      suffix: '/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-500'
    },
  ];

  const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
    end, 
    duration = 2, 
    suffix = '' 
  }) => {
    const [count, setCount] = useState(0);

      useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section id="metrics-section" className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Measurable results that demonstrate our commitment to excellence 
            and client success across all our projects.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  {React.createElement(metric.icon, { 
                    className: `w-8 h-8 ${metric.iconColor}` 
                  })}
                </motion.div>

                {/* Counter */}
                <div className="mb-4">
                  <Counter 
                    end={metric.value} 
                    duration={2.5}
                    suffix={metric.suffix}
                  />
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-primary-100 text-sm">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">
              Why Choose CyLaCon?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-100">100%</div>
                <div className="text-sm text-primary-200">Client Satisfaction Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-100">48hrs</div>
                <div className="text-sm text-primary-200">Average Response Time</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-100">15+</div>
                <div className="text-sm text-primary-200">Industry Certifications</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;

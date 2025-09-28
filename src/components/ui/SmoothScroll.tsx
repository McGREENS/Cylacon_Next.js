'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useEffect(() => {
    // Smooth scrolling behavior
    const smoothScroll = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;
      window.scrollBy({
        top: delta,
        behavior: 'smooth'
      });
    };

    // Add smooth scrolling for mouse wheel (optional - can be removed if too intrusive)
    // document.addEventListener('wheel', smoothScroll, { passive: false });

    return () => {
      // document.removeEventListener('wheel', smoothScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Scroll to Top Button Component
export const ScrollToTop: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setIsVisible(latest > 0.2);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
};

export default SmoothScroll;

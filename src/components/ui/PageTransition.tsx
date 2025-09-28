'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.98,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -50,
      scale: 1.02,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.6,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Loading Overlay Component for smooth transitions
export const LoadingOverlay: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
        >
          <div className="flex flex-col items-center space-y-4">
            {/* Animated Logo */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-2xl">C</span>
            </motion.div>
            
            {/* Loading Text */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-600 font-medium"
            >
              Loading...
            </motion.p>
            
            {/* Progress Bar */}
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/3 bg-primary-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;

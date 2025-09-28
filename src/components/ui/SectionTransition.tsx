'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  variant?: 'wave' | 'diagonal' | 'curve';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  variant = 'wave', 
  color = 'white' 
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'primary': return 'text-primary-500';
      case 'secondary': return 'text-secondary-500';
      case 'gray': return 'text-gray-50';
      default: return 'text-white';
    }
  };

  const getPath = () => {
    switch (variant) {
      case 'diagonal':
        return 'M0,0 L1200,0 L1200,60 L0,100 Z';
      case 'curve':
        return 'M0,0 L1200,0 L1200,80 Q600,20 0,80 Z';
      default:
        return 'M0,0 L1200,0 L1200,60 Q600,100 0,60 Z';
    }
  };

  return (
    <div className="relative h-16 overflow-hidden">
      <motion.svg
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`absolute inset-0 w-full h-full ${getColorClass()}`}
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d={getPath()}
          fill="currentColor"
        />
      </motion.svg>
    </div>
  );
};

export default SectionTransition;
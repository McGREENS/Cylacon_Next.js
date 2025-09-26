'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glass = false,
  onClick,
}) => {
  const baseClasses = 'rounded-xl shadow-lg transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  const glassClasses = glass ? 'glass backdrop-blur-sm bg-white/10 border border-white/20' : 'bg-white';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  const classes = `${baseClasses} ${hoverClasses} ${glassClasses} ${clickableClasses} ${className}`;

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;

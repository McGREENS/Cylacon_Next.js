'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTransitionProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fade' | 'slide' | 'scale' | 'reveal' | 'stagger' | 'wave' | 'spiral' | 'curve' | 'diagonal';
  color?: 'gray' | 'white' | 'primary' | 'secondary';
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  staggerDelay?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = '',
  delay = 0,
  variant = 'fade',
  color = 'gray',
  direction = 'up',
  duration = 0.8,
  staggerDelay = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  // If no children, render as section divider
  if (!children) {
    return <SectionDivider type={variant as any} color={`text-${color}-500`} />;
  }

  const getVariants = () => {
    switch (variant) {
      case 'fade':
        return {
          hidden: { opacity: 0, y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0, x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0 },
          visible: { 
            opacity: 1, 
            y: 0, 
            x: 0,
            transition: { 
              duration, 
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };

      case 'slide':
        return {
          hidden: { 
            opacity: 0, 
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0
          },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0,
            transition: { 
              duration, 
              delay,
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          }
        };

      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            rotateX: 0,
            transition: { 
              duration, 
              delay,
              type: "spring",
              stiffness: 120,
              damping: 20
            }
          }
        };

      case 'reveal':
        return {
          hidden: { 
            opacity: 0, 
            clipPath: direction === 'up' ? 'inset(100% 0 0 0)' : 
                     direction === 'down' ? 'inset(0 0 100% 0)' :
                     direction === 'left' ? 'inset(0 100% 0 0)' :
                     'inset(0 0 0 100%)'
          },
          visible: { 
            opacity: 1, 
            clipPath: 'inset(0% 0% 0% 0%)',
            transition: { 
              duration: duration * 1.2, 
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };

      case 'wave':
        return {
          hidden: { 
            opacity: 0, 
            y: 60,
            rotateX: -20,
            scale: 0.95
          },
          visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: { 
              duration: duration * 1.3, 
              delay,
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 80,
              damping: 15
            }
          }
        };

      case 'spiral':
        return {
          hidden: { 
            opacity: 0, 
            scale: 0.3,
            rotate: -180,
            y: 100
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            rotate: 0,
            y: 0,
            transition: { 
              duration: duration * 1.5, 
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 60,
              damping: 20
            }
          }
        };

      case 'stagger':
      default:
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration, 
              delay,
              staggerChildren: staggerDelay,
              delayChildren: delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Section Divider Component for smooth transitions between sections
export const SectionDivider: React.FC<{
  type?: 'wave' | 'curve' | 'diagonal' | 'zigzag' | 'dots';
  color?: string;
  height?: string;
  flip?: boolean;
}> = ({ 
  type = 'wave', 
  color = 'text-primary-500', 
  height = 'h-16',
  flip = false 
}) => {
  const getDividerSVG = () => {
    switch (type) {
      case 'wave':
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`w-full ${height} ${flip ? 'rotate-180' : ''}`}
          >
            <motion.path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
              className={color}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        );

      case 'curve':
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`w-full ${height} ${flip ? 'rotate-180' : ''}`}
          >
            <motion.path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              fill="currentColor"
              className={color}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        );

      case 'diagonal':
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`w-full ${height} ${flip ? 'rotate-180' : ''}`}
          >
            <motion.polygon
              points="1200,0 0,0 0,120"
              fill="currentColor"
              className={color}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>
        );

      case 'zigzag':
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className={`w-full ${height} ${flip ? 'rotate-180' : ''}`}
          >
            <motion.path
              d="M0,0 L200,120 L400,0 L600,120 L800,0 L1000,120 L1200,0 L1200,120 L0,120 Z"
              fill="currentColor"
              className={color}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>
        );

      case 'dots':
        return (
          <div className={`w-full ${height} flex items-center justify-center`}>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full bg-current ${color}`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {getDividerSVG()}
    </div>
  );
};

export default SectionTransition;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Custom Software', href: '/services/custom-software' },
    { name: 'IT Consulting', href: '/services/consulting' },
    { name: 'Network Infrastructure', href: '/services/network-infrastructure' },
  ];

  const solutions = [
    { name: 'Healthcare', href: '/solutions/healthcare' },
    { name: 'Government', href: '/solutions/government' },
    { name: 'Education', href: '/solutions/education' },
    { name: 'Retail', href: '/solutions/retail' },
    { name: 'Manufacturing', href: '/solutions/manufacturing' },
    { name: 'Hospitality', href: '/solutions/hospitality' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: services
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: solutions
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary-600 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto max-w-7xl flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+250780115764" className="hover:text-primary-200 transition-colors">
                +250 780 115 764
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@cylacon.com" className="hover:text-primary-200 transition-colors">
                info@cylacon.com
              </a>
            </div>
          </div>
          <div className="text-sm">
            <span>🇷🇼 Serving Rwanda & East Africa | ISO 27001 Certified</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-100' 
            : 'bg-white/95 backdrop-blur-sm shadow-md'
        } ${!isScrolled ? 'mt-10' : 'mt-0'}`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img 
                  src="/logo.png" 
                  alt="CyLaCon Logo" 
                  className="h-10 w-auto lg:h-12"
                />
              </motion.div>
              
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="px-4 py-2 border-b border-gray-100">
                            <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                          </div>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 group"
                            >
                              <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact & CTA Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Phone Number for Desktop */}
              <div className="flex items-center space-x-2 text-gray-600 border-r border-gray-300 pr-4">
                <Phone className="w-4 h-4 text-primary-500" />
                <a 
                  href="tel:+250780115764" 
                  className="text-sm font-medium hover:text-primary-600 transition-colors"
                >
                  +250 780 115 764
                </a>
              </div>
              
              <Button variant="ghost" href="/track" size="sm">
                Track Project
              </Button>
              <Button variant="primary" href="/consultation" size="sm">
                Get Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
              >
                <div className="py-4 space-y-1 max-h-96 overflow-y-auto">
                  {/* Mobile Contact Info */}
                  <div className="px-4 py-3 bg-primary-50 border-b border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary-600" />
                        <a href="tel:+250780115764" className="font-medium text-primary-700">
                          +250 780 115 764
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary-600" />
                        <a href="mailto:info@cylacon.com" className="font-medium text-primary-700">
                          Email Us
                        </a>
                      </div>
                    </div>
                  </div>

                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.name}</span>
                        {item.dropdown && <ChevronDown className="w-4 h-4" />}
                      </Link>
                      {item.dropdown && (
                        <div className="bg-gray-50 border-l-2 border-primary-200 ml-4">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-6 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="px-4 pt-4 space-y-3 border-t border-gray-200">
                    <Button variant="ghost" href="/track" className="w-full justify-center">
                      Track Project
                    </Button>
                    <Button variant="primary" href="/consultation" className="w-full justify-center">
                      Get Consultation
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;

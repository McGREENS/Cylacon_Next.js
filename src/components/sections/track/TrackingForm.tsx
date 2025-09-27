'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Mail,
  Key,
  AlertCircle,
  Loader,
  HelpCircle,
  Phone,
  MessageSquare
} from 'lucide-react';
import ProjectProgress from './ProjectProgress';

const TrackingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    projectId: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [projectData, setProjectData] = useState<any>(null);

  // Mock project data for demonstration
  const mockProjectData = {
    id: 'CYL-2024-001',
    name: 'E-commerce Website Development',
    client: 'Tech Solutions Ltd',
    startDate: '2024-01-15',
    expectedEndDate: '2024-03-15',
    currentPhase: 'Development',
    overallProgress: 65,
    phases: [
      {
        name: 'Project Initiation',
        status: 'completed',
        progress: 100,
        description: 'Requirements gathering and project planning completed',
        completedDate: '2024-01-22'
      },
      {
        name: 'Design Phase',
        status: 'completed',
        progress: 100,
        description: 'UI/UX design and wireframes approved by client',
        completedDate: '2024-02-05'
      },
      {
        name: 'Development Phase',
        status: 'in-progress',
        progress: 70,
        description: 'Currently developing core functionality and payment integration',
        estimatedCompletion: '2024-02-28'
      },
      {
        name: 'Testing & QA',
        status: 'pending',
        progress: 0,
        description: 'Comprehensive testing and quality assurance',
        estimatedStart: '2024-03-01'
      },
      {
        name: 'Deployment',
        status: 'pending',
        progress: 0,
        description: 'Final deployment and go-live',
        estimatedStart: '2024-03-10'
      }
    ],
    projectManager: {
      name: 'Jean Claude Iradukunda',
      email: 'iradukunda@cylacon.com',
      phone: '+250 780 115 764'
    },
    files: [
      {
        name: 'Project Requirements Document',
        type: 'PDF',
        size: '2.4 MB',
        uploadDate: '2024-01-20',
        downloadUrl: '#'
      },
      {
        name: 'UI/UX Design Mockups',
        type: 'ZIP',
        size: '15.7 MB',
        uploadDate: '2024-02-03',
        downloadUrl: '#'
      }
    ],
    recentUpdates: [
      {
        date: '2024-02-20',
        title: 'Payment Gateway Integration Completed',
        description: 'Successfully integrated Stripe payment gateway with test transactions working properly.'
      },
      {
        date: '2024-02-18',
        title: 'Product Catalog Module Finished',
        description: 'Completed the product catalog with search, filtering, and category management features.'
      },
      {
        date: '2024-02-15',
        title: 'User Authentication System Live',
        description: 'User registration, login, and profile management system is now functional.'
      }
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate form
    if (!formData.projectId || !formData.email) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock validation - in real implementation, this would be an API call
      if (formData.projectId.toLowerCase().includes('cyl') && formData.email.includes('@')) {
        setProjectData(mockProjectData);
      } else {
        setError('Project not found. Please check your Project ID and email address.');
      }
    } catch (err) {
      setError('An error occurred while retrieving project information. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setProjectData(null);
    setFormData({ projectId: '', email: '' });
    setError('');
  };

  if (projectData) {
    return <ProjectProgress projectData={projectData} onBack={resetForm} />;
  }

  return (
    <section id="tracking-form" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enter Your Project Details
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please provide your project ID and the email address associated with your account 
            to track your project status.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tracking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project ID */}
                <div>
                  <label htmlFor="projectId" className="block text-sm font-medium text-gray-700 mb-2">
                    Project ID *
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="projectId"
                      name="projectId"
                      value={formData.projectId}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., CYL-2024-001"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Your project ID was provided in your project kickoff email
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Use the email address associated with your project
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{error}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Retrieving project information...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Track Project</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Help & Support */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Help Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <HelpCircle className="w-6 h-6 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Need Help?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Don't have your project ID or having trouble accessing your project?
              </p>
              <div className="space-y-3">
                <a
                  href="/contact"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact our support team</span>
                </a>
                <a
                  href="tel:+250780115764"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +250 780 115 764</span>
                </a>
              </div>
            </div>

            {/* Demo Access */}
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
              <h3 className="text-lg font-semibold text-primary-900 mb-3">Try Demo</h3>
              <p className="text-primary-700 text-sm mb-4">
                Want to see how project tracking works? Use these demo credentials:
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-primary-900">Project ID:</span>
                  <span className="ml-2 text-primary-700">CYL-2024-001</span>
                </div>
                <div>
                  <span className="font-medium text-primary-900">Email:</span>
                  <span className="ml-2 text-primary-700">demo@example.com</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setFormData({
                    projectId: 'CYL-2024-001',
                    email: 'demo@example.com'
                  });
                }}
                className="mt-4 w-full px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Fill Demo Data
              </button>
            </div>

            {/* Security Notice */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security & Privacy</h3>
              <p className="text-gray-600 text-sm">
                Your project information is protected with enterprise-grade security. 
                We use encrypted connections and secure authentication to keep your data safe.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrackingForm;

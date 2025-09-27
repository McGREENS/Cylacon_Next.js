'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Calendar,
  User,
  Mail,
  Phone,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  MessageSquare,
  Video,
  BarChart3
} from 'lucide-react';

interface ProjectProgressProps {
  projectData: any;
  onBack: () => void;
}

const ProjectProgress: React.FC<ProjectProgressProps> = ({ projectData, onBack }) => {
  const getPhaseIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-blue-600" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getPhaseColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 border-blue-200';
      default:
        return 'bg-gray-100 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Project Search</span>
          </button>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{projectData.name}</h1>
                <p className="text-gray-600">Project ID: {projectData.id}</p>
                <p className="text-gray-600">Client: {projectData.client}</p>
              </div>
              <div className="mt-4 lg:mt-0 text-right">
                <div className="text-sm text-gray-500 mb-1">Overall Progress</div>
                <div className="text-3xl font-bold text-primary-600">{projectData.overallProgress}%</div>
                <div className="text-sm text-gray-500">Complete</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Project Progress</span>
                <span>{projectData.overallProgress}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${projectData.overallProgress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-primary-600 h-3 rounded-full"
                />
              </div>
            </div>

            {/* Project Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Start Date</div>
                  <div className="font-medium">{formatDate(projectData.startDate)}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-500">Expected Completion</div>
                  <div className="font-medium">{formatDate(projectData.expectedEndDate)}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Phases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Phases</h2>
              <div className="space-y-6">
                {projectData.phases.map((phase: any, index: number) => (
                  <motion.div
                    key={phase.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className={`rounded-xl p-6 border-2 ${getPhaseColor(phase.status)}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getPhaseIcon(phase.status)}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{phase.name}</h3>
                          <p className="text-gray-600 text-sm">{phase.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{phase.progress}%</div>
                        <div className="text-xs text-gray-500 capitalize">{phase.status}</div>
                      </div>
                    </div>
                    
                    {/* Phase Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full bg-white bg-opacity-50 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${phase.progress}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                          className={`h-2 rounded-full ${
                            phase.status === 'completed' ? 'bg-green-600' :
                            phase.status === 'in-progress' ? 'bg-blue-600' : 'bg-gray-400'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Phase Dates */}
                    <div className="flex justify-between text-sm text-gray-600">
                      {phase.completedDate && (
                        <span>Completed: {formatDate(phase.completedDate)}</span>
                      )}
                      {phase.estimatedCompletion && (
                        <span>Est. Completion: {formatDate(phase.estimatedCompletion)}</span>
                      )}
                      {phase.estimatedStart && (
                        <span>Est. Start: {formatDate(phase.estimatedStart)}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Updates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Updates</h2>
              <div className="space-y-4">
                {projectData.recentUpdates.map((update: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="border-l-4 border-primary-600 pl-4 py-2"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{update.title}</h3>
                      <span className="text-sm text-gray-500">{formatDate(update.date)}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{update.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Manager */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Manager</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">{projectData.projectManager.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <a 
                    href={`mailto:${projectData.projectManager.email}`}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {projectData.projectManager.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a 
                    href={`tel:${projectData.projectManager.phone}`}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {projectData.projectManager.phone}
                  </a>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${projectData.projectManager.email}`}
                  className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Project Manager
                </a>
                <a
                  href="/consultation"
                  className="w-full flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Schedule Update Meeting
                </a>
              </div>
            </motion.div>

            {/* Project Files */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Files & Documents</h3>
              <div className="space-y-3">
                {projectData.files.map((file: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{file.name}</div>
                        <div className="text-xs text-gray-500">{file.type} • {file.size}</div>
                      </div>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-primary-50 rounded-2xl p-6 border border-primary-200"
            >
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 text-left text-primary-700 hover:text-primary-800">
                  <BarChart3 className="w-5 h-5" />
                  <span>View Detailed Report</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-left text-primary-700 hover:text-primary-800">
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Feedback</span>
                </button>
                <button className="w-full flex items-center space-x-3 text-left text-primary-700 hover:text-primary-800">
                  <Calendar className="w-5 h-5" />
                  <span>View Timeline</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectProgress;

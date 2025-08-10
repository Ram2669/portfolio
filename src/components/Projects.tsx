'use client';

import { motion } from 'framer-motion';
import { Github, Search, Zap, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Custom Infrastructure Tool & AI Chatbot Implementation – Cisco',
      description: 'Comprehensive infrastructure management solution with AI-powered chatbot for automated query handling, built from scratch using modern web technologies and Azure cloud services.',
      technologies: ['Django', 'MySQL', 'HTML/CSS/Bootstrap/JavaScript', 'Azure OpenAI (GPT-4)', 'Azure Cosmos DB', 'Azure Blob Storage', 'Azure AI Search', 'Azure AI Language', 'Azure VNet'],
      features: [
        'Infrastructure management tool for efficient asset tracking and operations',
        'AI-powered chatbot with Azure OpenAI (GPT-4) for natural language understanding',
        'Azure Cosmos DB for structured/semi-structured data storage',
        'Azure Blob Storage for file and document handling',
        'Azure AI Search for intelligent schema and document retrieval',
        'Azure AI Language for NLP-based intent detection and classification',
        'Azure VNet for secure network access and compliance',
        'Enhanced scalability, security, and intelligence through Azure integration'
      ],
      icon: Zap,
      status: 'Ongoing',
      category: 'AI/ML & Infrastructure'
    },
    {
      title: 'Network-Based Pattern Searching',
      description: 'Client-server architecture application for searching words in files with efficient pattern matching and JSON-based communication.',
      technologies: ['Python', 'JSON', 'Client-Server Architecture', 'File Processing'],
      features: [
        'Client-server communication using JSON requests',
        'Efficient file content searching',
        'Returns matching lines with line numbers',
        'Error handling for file operations',
        'Clean and optimized search algorithms'
      ],
      icon: Search,
      status: 'Completed',
      category: 'Backend',
      githubLink: 'https://github.com/Ram2669/-NETWORK-BASED-PATTERN-SEARCHING_project.git'
    },
    {
      title: 'Self-Fuel Dispensing Automated Framework',
      description: 'RFID-based automated fuel dispensing system reducing operational errors and unauthorized access while improving transaction efficiency.',
      technologies: ['Embedded C', 'Arduino', 'RFID Technology', 'Real-time Processing'],
      features: [
        'RFID card-based authentication',
        '25% reduction in operational errors',
        '40% improvement in transaction efficiency',
        'Real-time data processing',
        'Advanced security algorithms'
      ],
      icon: Shield,
      status: 'Completed',
      category: 'IoT/Embedded'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Backend':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'IoT/Embedded':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI/ML, backend development, and IoT solutions
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-blue-300 dark:group-hover:from-blue-800 dark:group-hover:to-blue-700 transition-all duration-300 shadow-md"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Status and Category */}
                  <div className="flex gap-3 mb-5">
                    <motion.span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${getStatusColor(project.status)}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.status}
                    </motion.span>
                    <motion.span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${getCategoryColor(project.category)}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200"
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <motion.span
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium shadow-sm"
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ duration: 0.2 }}
                        >
                          +{project.technologies.length - 4} more
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white rounded-lg text-sm font-medium hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.a>
                    )}

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in collaborating or learning more about my work?
          </p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

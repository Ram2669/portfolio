'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chatbot for Infrastructure Management',
      description: 'Architected a multi-agent AI chatbot: GPT-4 primary + GPT-3.5-Turbo SQL agent; intelligent routing across RAG/SQL/web-search; RAG via Azure AI Search; autonomous SQL agent for Azure MySQL and Azure Cosmos DB; secure, production-ready Azure architecture with VNet and private networking.',
      technologies: ['LangChain', 'LangGraph', 'Azure AI Search', 'Azure OpenAI (GPT-4.0, GPT-3.5-Turbo)', 'Azure MySQL Server', 'Azure Cosmos DB', 'Azure VNet', 'Azure Blob Storage', 'Django'],
      features: [
        'Architected multi-agent: GPT-4 primary + GPT-3.5-Turbo SQL agent',
        'Intelligent routing across RAG, SQL, and web-search via LangChain & LangGraph',
        'RAG with Azure AI Search: chunking, Azure embeddings, vector index',
        'Autonomous SQL agent generates, validates, and executes queries (Azure MySQL Server, Azure Cosmos DB)',
        'Secure Azure: Azure OpenAI, Blob Storage, VNet + private networking',
        'Real-time, accurate, grounded responses; production-ready architecture'
      ],
      icon: Zap,
      status: 'Currently Implementing',
      category: 'AI/ML & Infrastructure',
      githubLink: undefined
    },
    {
      title: 'Self-Fuel Dispensing Automated Framework Using RFID Cards',
      description: 'Designed and implemented an RFID-based automated fuel dispensing framework to minimize manual errors and unauthorized access. Improved transaction accuracy by 40% through real-time data synchronization and algorithm optimization.',
      technologies: ['Embedded C', 'Arduino', 'RFID Technology', 'Real-time Processing'],
      features: [
        'RFID card-based authentication to prevent unauthorized access',
        'Minimized manual errors with automated dispensing workflow',
        'Improved transaction accuracy by 40% via real-time synchronization',
        'Robust, secure control logic with embedded microcontroller'
      ],
      icon: Shield,
      status: 'Completed',
      category: 'IoT/Embedded',
      githubLink: undefined
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
        return 'bg-[rgba(255,200,87,.16)] text-[var(--mission-text)]';
      case 'Currently Implementing':
        return 'bg-[rgba(0,227,255,.12)] text-[var(--mission-text)]';
      case 'Completed':
        return 'bg-[rgba(46,230,166,.16)] text-[var(--mission-text)]';
      default:
        return 'bg-[rgba(200,209,229,.06)] text-[var(--mission-text)]';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
      case 'AI/ML & Infrastructure':
        return 'bg-[rgba(0,227,255,.12)] text-[var(--mission-text)]';
      case 'Backend':
        return 'bg-[rgba(200,209,229,.06)] text-[var(--mission-text)]';
      case 'IoT/Embedded':
        return 'bg-[rgba(0,255,198,.12)] text-[var(--mission-text)]';
      default:
        return 'bg-[rgba(200,209,229,.06)] text-[var(--mission-text)]';
    }
  };

  return (
    <section id="projects" className="py-20 bg-[var(--mission-surface)]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--mission-text)] mb-4">
            Projects
          </h2>
          <p className="text-xl text-[var(--mission-muted)] max-w-3xl mx-auto">
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
                className="relative rounded-xl bg-[var(--mission-panel)] border border-[var(--mission-border)] shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group holo-border"
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
                        className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 shadow-sm bg-[rgba(0,227,255,.12)] border border-[var(--mission-border)]"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-7 h-7 text-[var(--mission-accent)] transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--mission-text)] group-hover:text-[var(--mission-accent)] transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Status and Category */}
                  <div className="flex gap-3 mb-5">
                    <motion.span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--mission-border)] ${getStatusColor(project.status)}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.status}
                    </motion.span>
                    <motion.span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--mission-border)] ${getCategoryColor(project.category)}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--mission-muted)] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[var(--mission-text)] mb-2">Key Features:</h4>
                    <ul className="text-xs text-[var(--mission-muted)] space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-1 h-1 bg-[var(--mission-accent)] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[var(--mission-text)] mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1.5 bg-[rgba(200,209,229,.06)] text-[var(--mission-text)] rounded-lg text-xs font-medium border border-[var(--mission-border)] shadow-sm hover:shadow-md transition-all duration-200"
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <motion.span
                          className="px-3 py-1.5 bg-[rgba(0,227,255,.12)] text-[var(--mission-text)] rounded-lg text-xs font-medium border border-[var(--mission-border)] shadow-sm"
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
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--mission-surface)] text-[var(--mission-text)] border border-[var(--mission-border)] rounded-lg text-sm font-medium hover:bg-[var(--mission-accent)] hover:text-black transition-all duration-200 shadow-sm hover:shadow-md"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code2 className="w-4 h-4" />
                        View Code
                      </motion.a>
                    )}

                  </div>
                </div>

                  {/* Hover/Focus overlay: reveals more details */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
                    aria-hidden="false"
                  >
                    <div className="absolute inset-0 bg-[rgba(10,15,31,.75)] backdrop-blur-md" />
                    <div className="relative h-full p-6 flex flex-col justify-center items-start">
                      <h4 className="text-lg font-semibold text-[var(--mission-text)] mb-2 line-clamp-2">
                        {project.title}
                      </h4>
                      <ul className="text-sm text-[var(--mission-muted)] space-y-1 max-h-40 overflow-y-auto pr-1">
                        {project.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start">
                            <span className="w-1 h-1 bg-[var(--mission-accent)] rounded-full mt-2 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, ti) => (
                          <span
                            key={ti}
                            className="px-2.5 py-1 bg-[rgba(200,209,229,.06)] text-[var(--mission-text)] rounded-md text-xs font-medium shadow-sm border border-[var(--mission-border)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[var(--mission-surface)] text-[var(--mission-text)] border border-[var(--mission-border)] rounded-lg text-sm font-medium hover:bg-[var(--mission-accent)] hover:text-black transition-colors"
                        >
                          <Code2 className="w-4 h-4" />
                          View Code
                        </a>
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
          <p className="text-[var(--mission-muted)] mb-4">
            Interested in collaborating or learning more about my work?
          </p>
          <motion.button
            className="bg-[var(--mission-accent)] text-black hover:brightness-110 px-8 py-3 rounded-full font-medium transition-colors duration-200"
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

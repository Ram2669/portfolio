'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, TestTube, Award, MapPin, Mail, Phone, Brain, Network, Cpu, Download, ExternalLink, ChevronRight, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3'],
      icon: Code,
      description: 'Core programming languages with enterprise-level proficiency',
      level: 90,
    },
    {
      category: 'Testing & Automation',
      items: ['Selenium WebDriver', 'TestNG', 'JUnit', 'Cypress', 'Automated Testing'],
      icon: TestTube,
      description: 'Advanced test automation frameworks and quality assurance',
      level: 95,
    },
    {
      category: 'Web Technologies',
      items: ['React', 'Angular', 'Django', 'REST APIs'],
      icon: Code,
      description: 'Modern web development frameworks and API integration',
      level: 85,
    },
    {
      category: 'Cloud & AI Technologies',
      items: ['Azure OpenAI', 'AWS', 'GPT-4', 'Azure Cognitive Search', 'Generative AI'],
      icon: Cloud,
      description: 'Cutting-edge AI and cloud computing platforms',
      level: 88,
    },
    {
      category: 'Data Science',
      items: ['Generative AI', 'Machine Learning', 'Data Analysis', 'LangChain', 'LangGraph'],
      icon: Brain,
      description: 'Advanced AI frameworks and machine learning technologies',
      level: 82,
    },
    {
      category: 'Databases & Tools',
      items: ['MySQL', 'Azure Cosmos DB', 'Git', 'VSCode', 'PyCharm'],
      icon: Database,
      description: 'Database management and development tools',
      level: 87,
    },
    {
      category: 'Networking',
      items: ['CCNA Certified', 'TCP/IP', 'Network Protocols'],
      icon: Network,
      description: 'Network infrastructure and protocol expertise',
      level: 92,
    },
  ];

  const certifications = [
    {
      name: 'Data Science Certification',
      issuer: 'Cisco Systems (2025)',
      description: 'Generative AI Green Belt Program',
      link: null,
      featured: true,
      icon: Brain,
    },
    {
      name: 'CCNA (Cisco Certified Network Associate)',
      issuer: 'Cisco Systems (2024)',
      description: 'Network infrastructure and routing protocols',
      link: 'https://drive.google.com/file/d/14mL6K7LUpqbGLT-ooHuhrWnoHTQOBXfT/view?usp=drivesdk',
      featured: true,
      icon: Network,
    },
    {
      name: 'Python Programming',
      issuer: 'NPTEL (2024)',
      description: 'Comprehensive Python programming certification',
      link: 'https://drive.google.com/file/d/1yAMGl6W62l1siimLQSd23Qr6o8HdZHrc/view?usp=drivesdk',
      featured: false,
      icon: Code,
    },
    {
      name: 'Python (Basic)',
      issuer: 'HackerRank (2024)',
      description: 'Python programming fundamentals',
      link: 'https://www.hackerrank.com/certificates/7569d3f33840',
      featured: false,
      icon: Code,
    },
    {
      name: 'Automation Testing',
      issuer: 'Test Automation Training (2024)',
      description: 'Advanced test automation methodologies',
      link: 'https://drive.google.com/file/d/1p49OD-hYC9m_X9vy037mv3vWNaCblzfa/view?usp=drivesdk',
      featured: false,
      icon: TestTube,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Data Science certified Software Test Engineer with expertise in automated testing, AI solutions, and full-stack development. Currently learning LangChain and LangGraph for advanced AI applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span>ramgopalpampana10@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <span>+91 7730072669</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <TestTube className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Software Test Engineer Trainee
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">CISCO</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      November 2024 - Present • Bengaluru, India
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                      <li>• Automated testing using Java and Selenium to ensure software quality</li>
                      <li>• Developing a full-stack AI chatbot using Azure OpenAI, Django, MySQL, and Azure Cognitive Search for real-time natural language query handling</li>
                      <li>• Integrating Azure Cognitive Search for intelligent schema retrieval and dynamic SQL generation</li>
                      <li>• CCNA Certified: Proficient in networking, routing, switching, and IP fundamentals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Technology
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Electronics and Communication Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Pragati Engineering College, Kakinada
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  August 2019 - June 2023 • CGPA: 7.87
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                const isSelected = selectedSkill === index;
                return (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl border transition-all duration-500 cursor-pointer ${
                      isSelected
                        ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-200 dark:ring-blue-800'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                    variants={itemVariants}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => setSelectedSkill(isSelected ? null : index)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                          whileHover={{ rotate: 10, scale: 1.15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {skillGroup.category}
                          </h4>
                          <div className="flex items-center mt-1">
                            <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                                initial={{ width: 0 }}
                                animate={{ width: `${skillGroup.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                            <span className="ml-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                              {skillGroup.level}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isSelected ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                            {skillGroup.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-150 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-600"
                          whileHover={{
                            scale: 1.08,
                            y: -2,
                            backgroundColor: "#3B82F6",
                            color: "#FFFFFF",
                            borderColor: "#1D4ED8"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Certifications */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Professional Certifications
                </h3>
                <motion.div
                  className="flex items-center text-blue-600 dark:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="w-5 h-5 mr-1" />
                  <span className="text-sm font-semibold">5 Verified</span>
                </motion.div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  const isHovered = hoveredCert === index;

                  return (
                    <motion.div
                      key={index}
                      className={`relative bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl border transition-all duration-300 ${
                        cert.featured
                          ? 'border-yellow-300 dark:border-yellow-600 bg-gradient-to-r from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-800'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                      }`}
                      whileHover={{ scale: 1.02, y: -3 }}
                      transition={{ duration: 0.3 }}
                      onHoverStart={() => setHoveredCert(index)}
                      onHoverEnd={() => setHoveredCert(null)}
                    >
                      {cert.featured && (
                        <motion.div
                          className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full p-1"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Star className="w-4 h-4" />
                        </motion.div>
                      )}

                      <div className="flex items-start justify-between">
                        <div className="flex items-start flex-1">
                          <motion.div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-md ${
                              cert.featured
                                ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800'
                                : 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800'
                            }`}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <IconComponent className={`w-6 h-6 ${
                              cert.featured
                                ? 'text-yellow-600 dark:text-yellow-400'
                                : 'text-blue-600 dark:text-blue-400'
                            }`} />
                          </motion.div>

                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                              {cert.name}
                            </h4>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
                              {cert.issuer}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {cert.description}
                            </p>
                          </div>
                        </div>

                        {cert.link && (
                          <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </motion.a>
                        )}
                      </div>

                      <AnimatePresence>
                        {isHovered && cert.link && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              <span>Click to view certificate</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Resume Download Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Resume Downloads
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <motion.a
                    href="/Ram_Gopal_Pampana_Professional_Resume.pdf"
                    download
                    className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Download className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">Professional</div>
                        <div className="text-blue-100 text-sm">PDF Format</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="/Ram_Gopal_Pampana_Professional_Resume.docx"
                    download
                    className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Download className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">Professional</div>
                        <div className="text-purple-100 text-sm">Word Format</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="/Ram_Gopal_Pampana_ATS_Resume.pdf"
                    download
                    className="flex items-center justify-between bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Download className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">ATS Resume</div>
                        <div className="text-green-100 text-sm">PDF Format</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="/Ram_Gopal_Pampana_ATS_Resume.docx"
                    download
                    className="flex items-center justify-between bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Download className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">ATS Resume</div>
                        <div className="text-orange-100 text-sm">Word Format</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

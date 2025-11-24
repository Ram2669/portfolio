'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, TestTube, MapPin, Mail, Phone, Brain, Network, Download, ExternalLink, ChevronRight, Star, TrendingUp } from 'lucide-react';
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
      items: ['Selenium WebDriver', 'TestNG', 'JUnit', 'Automated Testing'],
      icon: TestTube,
      description: 'Advanced test automation frameworks and quality assurance',
      level: 95,
    },
    {
      category: 'Web Technologies',
      items: ['React', 'Django', 'REST APIs'],
      icon: Code,
      description: 'Modern web development frameworks and API integration',
      level: 85,
    },
    {
      category: 'Cloud & AI Technologies',
      items: ['Azure OpenAI', 'AWS', 'GPT-4', 'Azure AI Search', 'Generative AI'],
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
      items: ['MySQL', 'Azure Cosmos DB', 'Git', 'VSCode', 'PyCharm', 'GitHub Copilot'],
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
      name: 'Cisco Certified DevNet Associate',
      issuer: 'Cisco Systems (2023)',
      description: 'Validated skills in developing and maintaining applications built on Cisco platforms',
      link: 'https://drive.google.com/file/d/1jYhIJSlXs6xgIpc46KxSOn22RWEPmfV8/view?usp=drivesdk',
      featured: true,
      icon: Network,
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
    <section id="about" className="py-20 bg-[var(--mission-surface)]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--mission-text)] mb-4">
            About Me
          </h2>
          <p className="text-xl text-[var(--mission-muted)] max-w-3xl mx-auto">
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
              <h3 className="text-2xl font-semibold text-[var(--mission-text)] mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-[var(--mission-muted)]">
                  <Mail className="w-5 h-5 mr-3 text-[var(--mission-accent)]" />
                  <span>ramgopalpampana10@gmail.com</span>
                </div>
                <div className="flex items-center text-[var(--mission-muted)]">
                  <Phone className="w-5 h-5 mr-3 text-[var(--mission-accent)]" />
                  <span>+91 7730072669</span>
                </div>
                <div className="flex items-center text-[var(--mission-muted)]">
                  <MapPin className="w-5 h-5 mr-3 text-[var(--mission-accent)]" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-[var(--mission-text)] mb-4">
                Experience
              </h3>
              <div className="rounded-lg p-6 border border-[var(--mission-border)] bg-[var(--mission-panel)]">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[rgba(0,227,255,.12)] rounded-lg flex items-center justify-center border border-[var(--mission-border)]">
                      <TestTube className="w-6 h-6 text-[var(--mission-accent)]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[var(--mission-text)]">
                      Software Test Engineer Trainee
                    </h4>
                    <p className="text-[var(--mission-accent)] font-medium">CISCO</p>
                    <p className="text-sm text-[var(--mission-muted)] mb-2">
                      November 2024 - Present • Bengaluru, India
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                      <li>• Automated testing using Python with Selenium and Pytest to ensure software quality</li>
                      <li>• Developing a full-stack AI chatbot using Azure OpenAI, Django, MySQL, and Azure AI Search for real-time natural language query handling</li>
                      <li>• Integrating Azure AI Search for intelligent schema retrieval and dynamic SQL generation</li>
                      <li>• CCNA Certified; Google Cloud Certified (ACE); proficient in networking, routing, switching, and IP fundamentals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-[var(--mission-text)] mb-4">
                Education
              </h3>
              <div className="rounded-lg p-6 border border-[var(--mission-border)] bg-[var(--mission-panel)]">
                <h4 className="text-lg font-semibold text-[var(--mission-text)]">
                  Bachelor of Technology
                </h4>
                <p className="text-[var(--mission-accent)] font-medium">
                  Electronics and Communication Engineering
                </p>
                <p className="text-[var(--mission-muted)]">
                  Pragati Engineering College, Kakinada
                </p>
                <p className="text-sm text-[var(--mission-muted)]">
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
            <h3 className="text-2xl font-semibold text-[var(--mission-text)] mb-6">
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
                    className={`rounded-xl p-6 shadow-lg hover:shadow-2xl border transition-all duration-500 cursor-pointer bg-[var(--mission-panel)] border-[var(--mission-border)] ${
                      isSelected
                        ? 'ring-2 ring-[var(--mission-accent)]'
                        : 'hover:border-[var(--mission-accent)]'
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
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg bg-[rgba(0,227,255,.12)] border border-[var(--mission-border)]"
                          whileHover={{ rotate: 10, scale: 1.15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-6 h-6 text-[var(--mission-accent)]" />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold text-[var(--mission-text)]">
                            {skillGroup.category}
                          </h4>
                          <div className="flex items-center mt-1">
                            <div className="w-20 h-2 bg-[var(--mission-panel)] rounded-full overflow-hidden border border-[var(--mission-border)]">
                              <motion.div
                                className="h-full bg-[var(--mission-accent)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${skillGroup.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                            <span className="ml-2 text-sm font-semibold text-[var(--mission-accent)]">
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
                          <p className="text-[var(--mission-muted)] text-sm italic">
                            {skillGroup.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-[rgba(200,209,229,.06)] text-[var(--mission-text)] rounded-full text-xs font-medium shadow-sm border border-[var(--mission-border)] hover:bg-[rgba(0,227,255,.12)] hover:text-[var(--mission-text)] transition-all duration-200"
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ duration: 0.2 }}
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
                <h3 className="text-2xl font-semibold text-[var(--mission-text)]">
                  Professional Certifications
                </h3>
                <motion.div
                  className="flex items-center text-[var(--mission-accent)]"
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
                      className={`relative rounded-xl p-6 shadow-lg hover:shadow-xl border transition-all duration-300 bg-[var(--mission-panel)] border-[var(--mission-border)] ${
                        cert.featured
                          ? 'ring-1 ring-[rgba(255,200,87,.3)]'
                          : 'hover:border-[var(--mission-accent)]'
                      }`}
                      whileHover={{ scale: 1.02, y: -3 }}
                      transition={{ duration: 0.3 }}
                      onHoverStart={() => setHoveredCert(index)}
                      onHoverEnd={() => setHoveredCert(null)}
                    >
                      {cert.featured && (
                        <motion.div
                          className="absolute -top-2 -right-2 bg-[rgba(255,200,87,1)] text-black rounded-full p-1"
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
                                ? 'text-[rgba(255,200,87,1)]'
                                : 'text-[var(--mission-accent)]'
                            }`} />
                          </motion.div>

                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-[var(--mission-text)] mb-1">
                              {cert.name}
                            </h4>
                            <p className="text-[var(--mission-accent)] font-semibold text-sm mb-2">
                              {cert.issuer}
                            </p>
                            <p className="text-[var(--mission-muted)] text-sm">
                              {cert.description}
                            </p>
                          </div>
                        </div>

                        {cert.link && (
                          <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 flex items-center justify-center w-10 h-10 bg-[rgba(0,227,255,.12)] rounded-lg border border-[var(--mission-border)] hover:bg-[var(--mission-accent)] hover:text-black transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-5 h-5 text-[var(--mission-accent)]" />
                          </motion.a>
                        )}
                      </div>

                      <AnimatePresence>
                        {isHovered && cert.link && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="mt-4 pt-4 border-t border-[var(--mission-border)]"
                          >
                            <div className="flex items-center text-[var(--mission-accent)] text-sm">
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
                <h3 className="text-2xl font-semibold text-[var(--mission-text)] mb-4">
                  Resume Downloads
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* 2025 Professional Resume */}
                  <motion.a
                    href="/Pampana_Siva_Surya_Ram_Gopal_Resume_2025.pdf?v=20251022-1405"
                    download
                    className="flex items-center justify-between bg-[var(--mission-surface)] border border-[var(--mission-border)] hover:bg-[var(--mission-accent)] hover:text-black text-[var(--mission-text)] rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Download className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">Resume 2025</div>
                        <div className="text-[var(--mission-muted)] text-sm">PDF Format</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="/Pampana_Siva_Surya_Ram_Gopal_Resume_2025.doc?v=20251022-1405"
                    download
                    className="flex items-center justify-between bg-[var(--mission-surface)] border border-[var(--mission-border)] hover:bg-[var(--mission-accent)] hover:text-black text-[var(--mission-text)] rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Download className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">Resume 2025</div>
                        <div className="text-[var(--mission-muted)] text-sm">Word Format</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="/Ram_Gopal_Pampana_ATS_Resume.pdf?v=20251022-1405"
                    download
                    className="flex items-center justify-between bg-[var(--mission-surface)] border border-[var(--mission-border)] hover:bg-[var(--mission-accent)] hover:text-black text-[var(--mission-text)] rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Download className="w-5 h-5 mr-3" />
                      <div>
                        <div className="font-semibold">ATS Resume</div>
                        <div className="text-[var(--mission-muted)] text-sm">PDF Format</div>
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

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, TestTube, MapPin, Mail, Phone, Brain, Network, Download, ExternalLink, ChevronRight, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const About = () => {
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
      category: 'Frameworks & Tools',
      items: ['React', 'Django', 'REST APIs', 'Selenium WebDriver', 'Pytest', 'Postman'],
      icon: Code,
      description: 'Modern frameworks and tools for full-stack delivery and quality',
      level: 90,
    },
    {
      category: 'Version Control & IDEs',
      items: ['Git', 'GitHub Copilot', 'VSCode', 'PyCharm'],
      icon: Code,
      description: 'Developer tools, environments, and collaboration',
      level: 85,
    },
    {
      category: 'Cloud & AI Technologies',
      items: ['Azure OpenAI', 'AWS', 'GPT-4', 'Azure AI Search', 'LangChain', 'LangGraph', 'RAG'],
      icon: Cloud,
      description: 'Cutting-edge AI and cloud computing platforms',
      level: 88,
    },

    {
      category: 'Databases',
      items: ['MySQL', 'Azure Cosmos DB'],
      icon: Database,
      description: 'Relational and NoSQL data stores',
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

      const verifiedCount = certifications.filter((c) => !!c.link).length;


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
    <section id="about" className="theme-garage py-20 bg-[var(--mission-surface)]">
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
            Python Full-Stack Developer skilled in Django, React, and Azure OpenAI with a focus on building scalable, AI-driven web applications. Experienced in backend APIs, frontend design, and database management. Completed automation testing training; CCNA-certified with strong cloud and networking knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 items-start">
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
                    <div className="w-12 h-12 bg-[rgba(198,40,40,.12)] rounded-lg flex items-center justify-center border border-[var(--mission-border)]">
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
                    <ul className="list-disc pl-5 text-[var(--mission-muted)] space-y-2 leading-relaxed text-sm">
                      <li>Automated testing using Python with Selenium and Pytest to ensure software quality</li>
                      <li>Developing a full-stack AI chatbot using Azure OpenAI, Django, MySQL, and Azure AI Search for real-time natural language query handling</li>
                      <li>Integrating Azure AI Search for intelligent schema retrieval and dynamic SQL generation</li>
                      <li>CCNA Certified; proficient in networking, routing, switching, and IP fundamentals</li>
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
            <h3 className="text-2xl font-semibold text-[var(--mission-text)] mb-6 text-center">
              Technical Skills
            </h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative group rounded-2xl p-6 border border-[var(--mission-border)] bg-[var(--mission-panel)] holo-border hud-card overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <div className="absolute inset-0 hud-scan mask-radial-faded pointer-events-none" aria-hidden="true" />
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <motion.div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg bg-[rgba(198,40,40,.12)] border border-[var(--mission-border)]"
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="w-6 h-6 text-[var(--mission-accent)]" />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold text-[var(--mission-text)]">{skillGroup.category}</h4>
                          <p className="text-xs text-[var(--mission-muted)]">{skillGroup.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-center">
                      <div className="relative hud-ring w-36 h-36" style={{ ['--p' as any]: skillGroup.level }}>
                        <div className="hud-dial" />
                        <div className="absolute inset-3 rounded-full flex flex-col items-center justify-center border border-[var(--mission-border)] bg-[var(--mission-surface)]">
                          <span className="text-2xl font-bold text-[var(--mission-accent)]">{skillGroup.level}%</span>
                          <span className="text-[10px] uppercase tracking-wider text-[var(--mission-muted)]">Proficiency</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-[rgba(245,158,11,.10)] text-[var(--mission-text)] rounded-full text-xs font-medium border border-[var(--mission-border)] shadow-sm hover:shadow-md transition-all duration-200"
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
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-[var(--mission-text)]">
                  Professional Certifications
                </h3>
                <motion.div
                  className="mt-2 inline-flex items-center text-[var(--mission-accent)]"
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="w-5 h-5 mr-1" />
                  <span className="text-sm font-semibold">{verifiedCount} Verified</span>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  const isHovered = hoveredCert === index;

                  return (
                    <motion.div
                      key={index}
                      className="relative group rounded-2xl p-6 border border-[var(--mission-border)] bg-[var(--mission-panel)] holo-border hud-card overflow-hidden"
                      whileHover={{ scale: 1.02, y: -3 }}
                      transition={{ duration: 0.3 }}
                      onHoverStart={() => setHoveredCert(index)}
                      onHoverEnd={() => setHoveredCert(null)}
                    >
                      <div className="absolute inset-0 hud-scan mask-radial-faded pointer-events-none" aria-hidden="true" />

                      {/* Verified badge */}
                      {cert.link && (
                        <span className="absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider bg-[rgba(245,158,11,.15)] text-[var(--mission-text)] border border-[var(--mission-border)]">
                          VERIFIED
                        </span>
                      )}

                      <div className="flex items-start">
                        <motion.div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-md bg-[rgba(198,40,40,.12)] border border-[var(--mission-border)]"
                          whileHover={{ rotate: 5, scale: 1.08 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className={`w-6 h-6 ${cert.featured ? 'text-[var(--mission-warning)]' : 'text-[var(--mission-accent)]'}`} />
                        </motion.div>

                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-[var(--mission-text)] mb-1">{cert.name}</h4>
                          <p className="text-[var(--mission-accent)] font-semibold text-sm mb-2">{cert.issuer}</p>
                          <p className="text-[var(--mission-muted)] text-sm">{cert.description}</p>
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
